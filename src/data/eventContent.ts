// ================================================================
//  MULTI-DESTINATION EDUCATION SUMMIT 2026 — EVENT PAGE CONTENT
//  Edit this file to update the /summit-2026 landing page.
//  (Everything on the page — title, dates, countries, benefits —
//   is pulled from here, so you rarely need to touch the .tsx files.)
// ================================================================

// ── Core Event Info ──────────────────────────────────────────────
export const eventInfo = {
  tag:      "🌍 Multi-Destination Education Summit 2026",
  title:    "Multi-Destination",
  titleAccent: "Education Summit 2026",
  subtitle:
    "Take the next step toward your international education journey. Explore study options across 12 leading destinations under one roof — with exclusive event-only offers, scholarships, and expert guidance.",
  dateLabel:   "14th & 15th August 2026",
  // ISO start time used by the live countdown — Asia/Dhaka (UTC+6)
  startsAtISO: "2026-08-14T00:00:00+06:00",
  endsAtISO:   "2026-08-16T00:00:00+06:00",
  venue:       "Easy To Europe Office",
  ctaLabel:    "Register Now — It's Free",
};

// ── 12 Destinations Featured at the Summit ──────────────────────
// slugs map to /images/destinations/<slug>.jpg and FLAG_CODES in content.ts
export const eventCountries = [
  { slug: "australia",       name: "Australia",       flag: "🇦🇺" },
  { slug: "united-kingdom",  name: "United Kingdom",  flag: "🇬🇧" },
  { slug: "canada",          name: "Canada",          flag: "🇨🇦" },
  { slug: "sweden",          name: "Sweden",           flag: "🇸🇪" },
  { slug: "denmark",         name: "Denmark",          flag: "🇩🇰" },
  { slug: "netherlands",     name: "Netherlands",      flag: "🇳🇱" },
  { slug: "hungary",         name: "Hungary",          flag: "🇭🇺" },
  { slug: "lithuania",       name: "Lithuania",        flag: "🇱🇹" },
  { slug: "malaysia",        name: "Malaysia",         flag: "🇲🇾" },
  { slug: "austria",         name: "Austria",          flag: "🇦🇹" },
  { slug: "cyprus",          name: "Cyprus",           flag: "🇨🇾" },
  { slug: "malta",           name: "Malta",            flag: "🇲🇹" },
];

// ── Exclusive Event Benefits ─────────────────────────────────────
export const eventBenefits = [
  "Special country-wise offers on file opening",
  "Discounted service charges",
  "Chance to WIN a FREE air ticket",
  "IELTS registration cashback",
  "Exclusive scholarships and admission opportunities",
  "Many more event-only benefits",
];

// ── What You'll Get ──────────────────────────────────────────────
export const eventGets = [
  "Personalized country selection guidance",
  "Scholarship and funding opportunities",
  "Profile & eligibility assessment",
  "University selection assistance",
  "One-to-one counselling with experienced education consultants",
  "Direct guidance from university representatives",
  "Complete admission and visa support",
];

// ── CRM Source (this page must submit as its OWN source, not "Website") ──
export const eventCrmSource = "Aug 14-15 Event";
