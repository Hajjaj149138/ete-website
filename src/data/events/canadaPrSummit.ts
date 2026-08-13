// ================================================================
//  CANADA STUDY & PR PATHWAY SUMMIT — EVENT PAGE CONTENT
//  Edit this file to update the /canada-pr-summit-2026 page.
// ================================================================
import type { EventLandingContent } from "@/components/events/EventLandingClient";

export const canadaPrSummit: EventLandingContent = {
  title:       "Canada Study &",
  titleAccent: "PR Pathway Summit",
  subtitle:
    "How to use your Canadian study visa as a stepping stone to Permanent Residency — PGWP, Express Entry, CRS score building, and provincial nominee programs, with real case studies from our placed students.",
  dateLabel:   "5th December 2026",
  startsAtISO: "2026-12-05T17:00:00+06:00",
  endsAtISO:   "2026-12-05T21:00:00+06:00",
  venue:       "Online (Zoom) & Easy To Europe Office",
  ctaLabel:    "Register Now — It's Free",

  countries: [
    { slug: "canada", name: "Canada", flag: "🇨🇦" },
  ],

  destinationsTag:      "Focused Country Session",
  destinationsHeading:  "Your Canada Study-to-PR Roadmap",
  destinationsSubtitle: "One session, fully focused on Canada — study permits, PGWP, and the road to Permanent Residency.",

  benefits: [
    "Special offers on Canada file opening",
    "Discounted service charges",
    "Chance to WIN a FREE air ticket",
    "IELTS registration cashback",
    "Exclusive scholarships and admission opportunities",
    "Many more event-only benefits",
  ],
  gets: [
    "Personalized PR pathway roadmap",
    "CRS score building guidance",
    "Profile & eligibility assessment",
    "University & PGWP-eligible program selection",
    "One-to-one counselling with experienced education consultants",
    "Complete admission and visa support",
  ],

  // ⚠️ PLACEHOLDER — verify real source_id from your CRM before going live
  crmSource:   "Canada PR Summit Dec 2026",
  crmSourceId: 26,

  whatsappMessage: "Hi, I just registered for the Canada Study & PR Pathway Summit.",
};
