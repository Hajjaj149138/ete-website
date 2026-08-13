// ================================================================
//  ASIA-PACIFIC EDUCATION FAIR 2026 — EVENT PAGE CONTENT
//  Edit this file to update the /apac-education-fair-2026 page.
// ================================================================
import type { EventLandingContent } from "@/components/events/EventLandingClient";

export const apacEducationFair: EventLandingContent = {
  title:       "Asia-Pacific",
  titleAccent: "Education Fair 2026",
  subtitle:
    "Explore world-class, affordable education across Australia and Malaysia — post-study work rights, branch campuses, and scholarship-backed pathways in one session.",
  dateLabel:   "21st November 2026",
  startsAtISO: "2026-11-21T10:00:00+06:00",
  endsAtISO:   "2026-11-21T17:00:00+06:00",
  venue:       "Easy To Europe Office",
  ctaLabel:    "Register Now — It's Free",

  countries: [
    { slug: "australia", name: "Australia", flag: "🇦🇺" },
    { slug: "malaysia",  name: "Malaysia",  flag: "🇲🇾" },
  ],

  destinationsTag:      "2 Destinations, One Roof",
  destinationsHeading:  "Explore Australia & Malaysia in One Visit",
  destinationsSubtitle: "Meet counsellors for each destination and compare your options side by side.",

  benefits: [
    "Special country-wise offers on file opening",
    "Discounted service charges",
    "Chance to WIN a FREE air ticket",
    "IELTS registration cashback",
    "Exclusive scholarships and admission opportunities",
    "Many more event-only benefits",
  ],
  gets: [
    "Personalized country selection guidance",
    "Scholarship and funding opportunities",
    "Profile & eligibility assessment",
    "University selection assistance",
    "One-to-one counselling with experienced education consultants",
    "Complete admission and visa support",
  ],

  // ⚠️ PLACEHOLDER — verify real source_id from your CRM before going live
  crmSource:   "APAC Education Fair Nov 2026",
  crmSourceId: 25,

  whatsappMessage: "Hi, I just registered for the Asia-Pacific Education Fair.",
};
