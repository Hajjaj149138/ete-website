"use client";
/*
 * FILE: src/app/summit-2026/SummitClient.tsx
 *
 * Standalone event landing page — shareable as a direct link.
 * The registration form below posts to /api/event-registration,
 * which sends leads to the CRM tagged with source "Aug 14-15 Event"
 * (NOT "Website" — see src/app/api/event-registration/route.ts).
 *
 * All copy/dates/countries live in src/data/eventContent.ts — edit
 * that file, not this one, for routine content updates.
 */
import { useEffect, useState } from "react";
import {
  CheckCircle, Sparkles, Phone, Mail, AlertCircle, Loader,
  MapPin, Calendar, Gift, GraduationCap, ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/content";
import { eventInfo, eventCountries, eventBenefits, eventGets } from "@/data/eventContent";
import { getCurrentOccurrence, formatEventDateLabel } from "@/lib/eventDates";

const LEVELS = ["Foundation / Diploma", "Bachelor's", "Master's", "PhD", "Work / Migration", "Not sure yet"];
const IELTS  = ["4.5", "5.0", "5.5", "6.0", "6.5", "7.0", "7.5", "8.0", "8.5", "9.0", "Haven't taken IELTS"];

type Status = "idle" | "loading" | "success" | "error";
type Phase  = "before" | "live" | "ended";

function useCountdown(originalStartISO: string, originalEndISO: string) {
  const [state, setState] = useState<{ phase: Phase; d: number; h: number; m: number; s: number }>({
    phase: "before", d: 0, h: 0, m: 0, s: 0,
  });

  useEffect(() => {
    const tick = () => {
      // Recomputed every tick so the countdown rolls forward to the
      // next occurrence (every 3 months) automatically once this
      // cycle's endDate passes, instead of getting stuck on "ended".
      const { startDate, endDate } = getCurrentOccurrence(originalStartISO, originalEndISO);
      const start = startDate.getTime();
      const end   = endDate.getTime();
      const now = Date.now();

      if (now >= start && now < end) { setState({ phase: "live", d: 0, h: 0, m: 0, s: 0 }); return; }

      const diff = start - now;
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setState({ phase: "before", d, h, m, s });
    };

    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, [originalStartISO, originalEndISO]);

  return state;
}

export default function SummitClient() {
  const countdown = useCountdown(eventInfo.startsAtISO, eventInfo.endsAtISO);
  const currentOccurrence = getCurrentOccurrence(eventInfo.startsAtISO, eventInfo.endsAtISO);
  const dateLabel = formatEventDateLabel(currentOccurrence.startDate, currentOccurrence.endDate);

  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", destination: "", level: "", ielts: "", message: "" });
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const resetForm = () => {
    setStatus("idle");
    setErrMsg("");
    setForm({ name: "", phone: "", email: "", destination: "", level: "", ielts: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setStatus("loading");
    try {
      const res  = await fetch("/api/event-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setStatus("success");
      else { setStatus("error"); setErrMsg(data.error ?? "Something went wrong."); }
    } catch {
      setStatus("error");
      setErrMsg("Network error. Please call us directly.");
    }
  };

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      {/* ══════════════ HERO ══════════════ */}
      <section className="smt-hero">
        <div className="smt-hero-bg" />
        <div className="smt-hero-glow" />
        <div className="ete-container">
          <div className="smt-hero-inner">
            <span className="smt-hero-badge"><Sparkles size={11} /> Easy To Europe Presents</span>
            <h1 className="smt-hero-title">
              {eventInfo.title} <span>{eventInfo.titleAccent}</span>
            </h1>
            <p className="smt-hero-sub">{eventInfo.subtitle}</p>

            <div className="smt-hero-meta">
              <span className="smt-meta-pill"><Calendar size={13} /> {dateLabel}</span>
              <span className="smt-meta-pill"><MapPin size={13} /> {eventInfo.venue}</span>
            </div>

            {countdown.phase === "before" && (
              <>
                <div className="smt-countdown-label">Doors Open In</div>
                <div className="smt-countdown">
                  <div className="smt-cd-box"><div className="smt-cd-num">{String(countdown.d).padStart(2, "0")}</div><div className="smt-cd-lbl">Days</div></div>
                  <div className="smt-cd-box"><div className="smt-cd-num">{String(countdown.h).padStart(2, "0")}</div><div className="smt-cd-lbl">Hrs</div></div>
                  <div className="smt-cd-box"><div className="smt-cd-num">{String(countdown.m).padStart(2, "0")}</div><div className="smt-cd-lbl">Min</div></div>
                  <div className="smt-cd-box"><div className="smt-cd-num">{String(countdown.s).padStart(2, "0")}</div><div className="smt-cd-lbl">Sec</div></div>
                </div>
              </>
            )}
            {countdown.phase === "live" && (
              <div className="smt-live-badge"><span className="smt-live-dot" /> The Summit Is Live Right Now — Walk In Today!</div>
            )}
            {countdown.phase === "ended" && (
              <div className="smt-live-badge" style={{ color: "var(--gold-light)", background: "rgba(201,168,76,.1)", borderColor: "rgba(201,168,76,.28)" }}>
                This summit has concluded — contact us for the next event
              </div>
            )}

            <div className="smt-hero-cta-row">
              <a href="#register" onClick={scrollToForm} className="ete-btn ete-btn-accent ete-btn-lg">
                {eventInfo.ctaLabel} <ArrowRight size={15} />
              </a>
              <span className="smt-hero-cta-note">12 destinations · Free entry · Limited seats per slot</span>
            </div>

            <div className="smt-hero-trust">
              {siteConfig.stats.map(s => (
                <div className="smt-trust-item" key={s.label}>
                  <div className="smt-trust-num">{s.number}</div>
                  <div className="smt-trust-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ DESTINATIONS ══════════════ */}
      <section className="smt-section">
        <div className="ete-container">
          <div className="ete-section-hd smt-section-hd ete-center">
            <span className="ete-tag">12 Destinations, One Roof</span>
            <h2 className="ete-sec-title">Explore Every Path in <span>One Visit</span></h2>
            <p className="ete-sec-sub" style={{ margin: "0 auto" }}>
              Meet counsellors for each destination and compare your options side by side — no need to visit twelve different offices.
            </p>
          </div>

          <div className="smt-dest-grid">
            {eventCountries.map(c => (
              <div className="smt-dest-card" key={c.slug}>
                {c.hasPhoto === false ? (
                  <div className="smt-dest-fallback"><span className="smt-dest-fallback-flag">{c.flag}</span></div>
                ) : (
                  <img src={`/images/destinations/${c.slug}.jpg`} alt={c.name} loading="lazy" />
                )}
                <div className="smt-dest-overlay" />
                <div className="smt-dest-info">
                  <span className="smt-dest-flag">{c.flag}</span>
                  <span className="smt-dest-name">{c.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ BENEFITS + WHAT YOU'LL GET ══════════════ */}
      <section className="smt-section ete-bg-alt">
        <div className="ete-container">
          <div className="ete-section-hd smt-section-hd ete-center">
            <span className="ete-tag">Event-Only Perks</span>
            <h2 className="ete-sec-title">Why Attend the <span>Summit</span></h2>
          </div>

          <div className="smt-perks-grid">
            <div className="ete-card smt-perk-card">
              <div className="smt-perk-head">
                <div className="smt-perk-icon smt-perk-icon-gold"><Gift size={17} /></div>
                <h3 className="smt-perk-title">Exclusive Event Benefits</h3>
              </div>
              <ul className="smt-perk-list">
                {eventBenefits.map(b => (
                  <li key={b}><CheckCircle size={15} className="smt-perk-icon-gold-sm" /><span>{b}</span></li>
                ))}
              </ul>
            </div>

            <div className="ete-card smt-perk-card">
              <div className="smt-perk-head">
                <div className="smt-perk-icon smt-perk-icon-sapphire"><GraduationCap size={17} /></div>
                <h3 className="smt-perk-title">What You'll Get</h3>
              </div>
              <ul className="smt-perk-list">
                {eventGets.map(g => (
                  <li key={g}><CheckCircle size={15} className="smt-perk-icon-sapphire-sm" /><span>{g}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA BANNER ══════════════ */}
      <section className="smt-section" style={{ paddingTop: 0 }}>
        <div className="ete-container">
          <div className="smt-cta-banner">
            <div className="ete-container smt-cta-inner">
              <div className="smt-cta-info">
                <div className="smt-cta-info-item">
                  <div className="smt-cta-info-icon"><Calendar size={16} /></div>
                  <div><div className="smt-cta-info-lbl">Date</div><div className="smt-cta-info-val">{dateLabel}</div></div>
                </div>
                <div className="smt-cta-info-item">
                  <div className="smt-cta-info-icon"><MapPin size={16} /></div>
                  <div><div className="smt-cta-info-lbl">Venue</div><div className="smt-cta-info-val">{eventInfo.venue}</div></div>
                </div>
              </div>
              <a href="#register" onClick={scrollToForm} className="ete-btn ete-btn-accent ete-btn-lg">
                Reserve My Free Seat <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ REGISTRATION FORM ══════════════ */}
      <section id="register" className="smt-section">
        <div className="ete-container">
          <div className="ete-section-hd smt-section-hd ete-center">
            <span className="ete-tag">Register Now</span>
            <h2 className="ete-sec-title">Reserve Your <span>Free Seat</span></h2>
            <p className="ete-sec-sub" style={{ margin: "0 auto" }}>
              Fill in your details — our team will confirm your seat within 24 hours.
            </p>
          </div>

          <div className="ete-card smt-form-card">
            {status === "success" ? (
              <div className="ete-consult-success">
                <div className="ete-consult-success-ring"><CheckCircle size={26} /></div>
                <h2 className="ete-consult-success-title">You're Registered! 🎉</h2>
                <p className="ete-consult-success-sub">
                  Our expert team will confirm your seat within <strong>24 hours</strong>. See you at the Summit — {dateLabel}!
                </p>
                <div className="ete-consult-success-btns">
                  <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C+I+just+registered+for+the+Multi-Destination+Education+Summit+2026.`}
                    target="_blank" rel="noreferrer" className="ete-btn ete-btn-accent" style={{ justifyContent: "center" }}>
                    Chat on WhatsApp Now →
                  </a>
                  <button onClick={resetForm} className="ete-btn ete-btn-outline" style={{ justifyContent: "center" }}>
                    Register Another Person
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="ete-consult-header">
                  <div className="ete-consult-icon"><Sparkles size={15} /></div>
                  <div>
                    <h2 className="ete-consult-title">Summit Registration</h2>
                    <p className="ete-consult-sub">Free entry — takes less than a minute</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="ete-consult-form" noValidate>
                  <div className="ete-consult-row">
                    <div className="ete-consult-field">
                      <label className="ete-label">Full Name <span className="ete-req">*</span></label>
                      <input className="ete-input" required placeholder="Your full name" value={form.name} onChange={e => set("name", e.target.value)} />
                    </div>
                    <div className="ete-consult-field">
                      <label className="ete-label">Phone <span className="ete-req">*</span></label>
                      <input className="ete-input" required type="tel" placeholder="+880 17..." value={form.phone} onChange={e => set("phone", e.target.value)} />
                    </div>
                  </div>

                  <div className="ete-consult-field">
                    <label className="ete-label">Email Address</label>
                    <input className="ete-input" type="email" placeholder="you@email.com" value={form.email} onChange={e => set("email", e.target.value)} />
                  </div>

                  <div className="ete-consult-row">
                    <div className="ete-consult-field">
                      <label className="ete-label">Preferred Destination</label>
                      <select className="ete-input" value={form.destination} onChange={e => set("destination", e.target.value)}>
                        <option value="">Select country</option>
                        {eventCountries.map(c => <option key={c.slug} value={c.name}>{c.name}</option>)}
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                    <div className="ete-consult-field">
                      <label className="ete-label">Study Level</label>
                      <select className="ete-input" value={form.level} onChange={e => set("level", e.target.value)}>
                        <option value="">Select level</option>
                        {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="ete-consult-field">
                    <label className="ete-label">IELTS Overall Score</label>
                    <select className="ete-input" value={form.ielts} onChange={e => set("ielts", e.target.value)}>
                      <option value="">Select score (if taken)</option>
                      {IELTS.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  <div className="ete-consult-field">
                    <label className="ete-label">Message <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span></label>
                    <textarea className="ete-input" rows={2} placeholder="Your goals, timeline, or any questions..." value={form.message} onChange={e => set("message", e.target.value)} style={{ resize: "none" }} />
                  </div>

                  {status === "error" && (
                    <div className="ete-consult-error"><AlertCircle size={13} /><span>{errMsg}</span></div>
                  )}

                  <button type="submit" disabled={status === "loading" || !form.name || !form.phone} className="ete-btn ete-btn-accent ete-consult-submit">
                    {status === "loading"
                      ? <><Loader size={13} className="ete-spin" /> Submitting...</>
                      : <><Sparkles size={13} /> {eventInfo.ctaLabel}</>}
                  </button>

                  <div className="ete-consult-alts">
                    <a href={`tel:${siteConfig.phone}`} className="ete-consult-alt"><Phone size={10} /> {siteConfig.phone}</a>
                    <span className="ete-consult-alt-sep">or</span>
                    <a href={`mailto:${siteConfig.email}`} className="ete-consult-alt"><Mail size={10} /> {siteConfig.email}</a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
      {/* ══════════════ FIND US (MAP) ══════════════ */}
      <section className="smt-map-section">
        <div className="ete-container">
          <div className="ete-section-hd ete-center smt-section-hd">
            <span className="ete-tag"><MapPin size={9} /> Visit Us</span>
            <h2 className="ete-sec-title">Find Our <span>Office</span></h2>
          </div>
          <div className="map2-wrap smt-map-compact">
            <div className="map2-info">
              <div className="map2-badge">📍 Bangladesh HQ</div>
              <h3 className="map2-title">Easy To Europe</h3>
              <p className="map2-addr">44, F, 08, Panthapath<br />Indira Road, Dhaka 1205</p>
              <div className="map2-hours-row"><Calendar size={13} style={{ color: "var(--gold)", flexShrink: 0 }} /><span>Saturday – Thursday: 10AM – 6PM</span></div>
              <div className="map2-hours-row"><Phone size={13} style={{ color: "var(--gold)", flexShrink: 0 }} /><span>{siteConfig.phone}</span></div>
              <a href="https://maps.app.goo.gl/2Nu4jgEmukvifEHRA" target="_blank" rel="noreferrer"
                className="ete-btn ete-btn-accent ete-btn-sm map2-dir-btn"><MapPin size={12} /> Get Directions</a>
            </div>
            <div className="map2-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.9211469588893!2d90.38422720000001!3d23.753002600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b96abb5e4a4b%3A0x795d7469614680b2!2sEasy%20To%20Europe!5e0!3m2!1sen!2sbd!4v1772869843518!5m2!1sen!2sbd"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Easy To Europe Dhaka Office" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
