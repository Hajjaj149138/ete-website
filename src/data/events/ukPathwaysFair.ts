// ================================================================
//  UK UNIVERSITY PATHWAYS & SCHOLARSHIP FAIR — EVENT PAGE CONTENT
//  Edit this file to update the /uk-pathways-fair-2026 page.
// ================================================================
import type { EventLandingContent } from "@/components/events/EventLandingClient";

export const ukPathwaysFair: EventLandingContent = {
  title:       "UK University Pathways",
  titleAccent: "& Scholarship Fair",
  subtitle:
    "A dedicated deep-dive into UK higher education — top universities, pathway programs, CAS letters, financial requirements, and the Graduate Route, explained by our senior UK consultants.",
  dateLabel:   "7th November 2026",
  startsAtISO: "2026-11-07T15:00:00+06:00",
  endsAtISO:   "2026-11-07T20:00:00+06:00",
  venue:       "Easy To Europe Office",
  ctaLabel:    "Register Now — It's Free",

  countries: [
    { slug: "united-kingdom", name: "United Kingdom", flag: "🇬🇧" },
  ],

  destinationsTag:      "Focused Country Session",
  destinationsHeading:  "Everything You Need to Study in the UK",
  destinationsSubtitle: "One session, fully focused on the UK — universities, pathways, visas, and scholarships.",

  benefits: [
    "Special offers on UK file opening",
    "Discounted service charges",
    "Chance to WIN a FREE air ticket",
    "IELTS registration cashback",
    "Exclusive UK scholarships and admission opportunities",
    "Many more event-only benefits",
  ],
  gets: [
    "Personalized university & course shortlisting",
    "Scholarship and funding opportunities",
    "Profile & eligibility assessment",
    "CAS and visa document guidance",
    "One-to-one counselling with our senior UK consultant",
    "Complete admission and visa support",
  ],

  // ⚠️ PLACEHOLDER — verify real source_id from your CRM before going live
  crmSource:   "UK Pathways Fair Nov 2026",
  crmSourceId: 24,

  whatsappMessage: "Hi, I just registered for the UK University Pathways & Scholarship Fair.",
};
