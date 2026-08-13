/*
 * ════════════════════════════════════════════════════════
 *  FILE: src/app/api/event-registration/route.ts
 *
 *  WHAT THIS DOES:
 *  1. Receives form data from ANY event landing page (Summit 2026,
 *     Nordic & Baltic Expo, UK Pathways Fair, etc.)
 *  2. Creates a Lead in ETE CRM — SOURCE = whatever that event page
 *     sends as `eventSource` (each event's content file sets its
 *     own crmSource, so every event is trackable separately in CRM)
 *  3. Sends email to info@easytoeurope.com via Gmail (Nodemailer)
 *
 *  ⚠️  ACTION NEEDED BEFORE GOING LIVE ⚠️
 *  ─────────────────────────────────────
 *  Each event's own content file (src/data/events/*.ts) has a
 *  `crmSourceId` field — a PLACEHOLDER for now. Just like the main
 *  site's "Website" source uses source_id 18, every event needs its
 *  own source_id from the CRM. Ask your CRM admin / check the CRM's
 *  source list for each event, then update the number in that
 *  event's content file. Leads will still be created even if this
 *  is wrong, but they may land under the wrong source in CRM until
 *  it's corrected. (You mentioned you'll handle this yourself later
 *  — nothing here blocks form submissions in the meantime.)
 *
 *  EMAIL SETUP (.env.local) — same as the rest of the site:
 *  GMAIL_USER=info@easytoeurope.com
 *  GMAIL_PASS=your-16-char-app-password
 * ════════════════════════════════════════════════════════
 */

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ─── CRM Config ─────────────────────────────────────── */
const CRM_ENDPOINT = "https://crm.ete.sveducrm.com/api/web-form";
// Fallback source (used only if a page doesn't send its own — keeps
// the original Summit 2026 page working unchanged either way)
const DEFAULT_CRM_SOURCE    = "Aug 14-15 Event";
const DEFAULT_CRM_SOURCE_ID = 22; // ⚠️ PLACEHOLDER — verify & update

/* ─── Email Config ───────────────────────────────────── */
const NOTIFY_EMAIL = "info@easytoeurope.com";
const GMAIL_USER   = process.env.GMAIL_USER ?? "";
const GMAIL_PASS   = process.env.GMAIL_PASS ?? "";

/* ─── Country IDs (must match CRM — same map as /api/consultation) ─── */
const COUNTRY_IDS: Record<string, number> = {
  "Australia":      3,
  "Canada":         4,
  "Sweden":         7,
  "United Kingdom": 2,
  "Hungary":        12,
  "Lithuania":      10,
  "Malaysia":       9,
  "Austria":        11,
  "Denmark":        8,
  "Cyprus":         14,
  "Netherlands":    13,
  "Malta":          15,
};

export async function POST(req: NextRequest) {
  try {
    const {
      name, phone, email, destination, level, ielts, message,
      eventSource, eventSourceId, eventTitle,
    } = await req.json();

    if (!name?.trim() || (!phone?.trim() && !email?.trim())) {
      return NextResponse.json({ success: false, error: "Name and phone or email are required." }, { status: 400 });
    }

    const CRM_SOURCE    = eventSource   || DEFAULT_CRM_SOURCE;
    const CRM_SOURCE_ID = eventSourceId ?? DEFAULT_CRM_SOURCE_ID;
    const EVENT_TITLE   = eventTitle    || "Multi-Destination Education Summit 2026";

    /* ── Build CRM Payload ── */
    const preferredCountries = destination && COUNTRY_IDS[destination] ? [COUNTRY_IDS[destination]] : [];
    const ieltsNum = ielts && !isNaN(parseFloat(ielts)) ? parseFloat(ielts) : null;

    const crmPayload = {
      id: null,
      name: name.trim(),
      phone: phone?.trim() ?? "",
      additional_phone: "",
      additional_field: [],
      email: email?.trim() ?? "",
      source: CRM_SOURCE,
      source_id: CRM_SOURCE_ID,
      lead_status_id: null,
      assignees: [],
      preferred_countries: preferredCountries,
      country_id: 1,
      description: message ? `[${EVENT_TITLE}] ${message}` : `[${EVENT_TITLE} registration]`,
      address: "", city: "", state: "",
      contacted_date: new Date().toISOString().split("T")[0],
      educations: level ? [level] : [],
      ssc_group: null, ssc_gpa: null, ssc_passing_year: null, ssc_board: null,
      hsc_group: null, hsc_gpa: null, hsc_passing_year: null, hsc_board: null,
      bachelor_subject_id: null, bachelor_gpa: null, bachelor_passing_year: null, bachelor_university_id: null,
      master_subject_id: null, master_gpa: null, master_passing_year: null, master_university_id: null,
      diploma_subject_id: null, diploma_group: null, diploma_gpa: null, diploma_passing_year: null,
      diploma_institute_id: null, diploma_board: null,
      o_level_grade: null, o_level_passing_year: null, o_level_institute_id: null,
      a_level_grade: null, a_level_passing_year: null, a_level_institute_id: null,
      courses: [],
      jobs: [],
    };

    /* ── 1. Submit to CRM ── */
    let crmLeadId: number | null = null;
    let crmError: string | null = null;

    try {
      const crmRes  = await fetch(CRM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(crmPayload),
      });
      const crmData = await crmRes.json();
      if (crmData.success) {
        crmLeadId = crmData.data?.id ?? null;
        console.log(`✅ [${EVENT_TITLE}] CRM lead created: #${crmLeadId}`);
      } else {
        crmError = crmData.message ?? "CRM error";
        console.error(`❌ [${EVENT_TITLE}] CRM error:`, JSON.stringify(crmData));
      }
    } catch (e) {
      crmError = "Could not reach CRM";
      console.error(`❌ [${EVENT_TITLE}] CRM network error:`, e);
    }

    /* ── 2. Send Email via Gmail ── */
    let emailSent = false;
    const now = new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Dhaka", day: "2-digit", month: "short",
      year: "numeric", hour: "2-digit", minute: "2-digit",
    });

    if (GMAIL_USER && GMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user: GMAIL_USER, pass: GMAIL_PASS },
        });

        await transporter.sendMail({
          from:    `"Easy To Europe — ${EVENT_TITLE}" <${GMAIL_USER}>`,
          to:      NOTIFY_EMAIL,
          subject: `🌍 New ${EVENT_TITLE} Registration — ${name}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden">
              <div style="background:#0F1F3D;padding:20px 24px">
                <h1 style="color:#fff;margin:0;font-size:18px">New Registration</h1>
                <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:13px">${EVENT_TITLE}</p>
              </div>
              <div style="padding:24px">
                <table style="width:100%;border-collapse:collapse;font-size:14px">
                  <tr><td style="padding:8px 0;color:#6b7280;width:140px;vertical-align:top">Name</td><td style="padding:8px 0;font-weight:600;color:#111827">${name}</td></tr>
                  <tr style="background:#f9fafb"><td style="padding:8px 6px;color:#6b7280">Phone</td><td style="padding:8px 6px;font-weight:600;color:#111827">${phone}</td></tr>
                  <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0;color:#111827">${email || "—"}</td></tr>
                  <tr style="background:#f9fafb"><td style="padding:8px 6px;color:#6b7280">Destination</td><td style="padding:8px 6px;color:#111827">${destination || "—"}</td></tr>
                  <tr><td style="padding:8px 0;color:#6b7280">Study Level</td><td style="padding:8px 0;color:#111827">${level || "—"}</td></tr>
                  <tr style="background:#f9fafb"><td style="padding:8px 6px;color:#6b7280">IELTS Score</td><td style="padding:8px 6px;color:#111827">${ielts || "—"}</td></tr>
                  <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Message</td><td style="padding:8px 0;color:#111827">${message || "—"}</td></tr>
                  <tr style="background:#f9fafb"><td style="padding:8px 6px;color:#6b7280">Source</td><td style="padding:8px 6px;color:#0F1F3D;font-weight:600">${CRM_SOURCE}</td></tr>
                  <tr><td style="padding:8px 0;color:#6b7280">CRM Lead</td><td style="padding:8px 0;color:#0F1F3D;font-weight:600">${crmLeadId ? `#${crmLeadId}` : crmError ?? "—"}</td></tr>
                  <tr style="background:#f9fafb"><td style="padding:8px 6px;color:#6b7280">Submitted</td><td style="padding:8px 6px;color:#111827">${now}</td></tr>
                </table>
              </div>
              <div style="background:#f3f4f6;padding:14px 24px;font-size:12px;color:#9ca3af">
                This email was auto-sent from the easytoeurope.com "${EVENT_TITLE}" registration page.
              </div>
            </div>
          `,
        });
        emailSent = true;
        console.log(`✅ [${EVENT_TITLE}] Email sent to`, NOTIFY_EMAIL);
      } catch (e) {
        console.error(`❌ [${EVENT_TITLE}] Email error:`, e);
      }
    } else {
      console.log("📩 [DEV] Email not configured. Add GMAIL_USER + GMAIL_PASS to .env.local");
      console.log("Form data:", { name, phone, email, destination, level, ielts, message });
      emailSent = true; // Don't block form submission during dev
    }

    return NextResponse.json({
      success:     true,
      crm_lead_id: crmLeadId,
      email_sent:  emailSent,
      crm_error:   crmError,
    });

  } catch (err) {
    console.error("❌ [Summit 2026] API error:", err);
    return NextResponse.json({ success: false, error: "Server error." }, { status: 500 });
  }
}
