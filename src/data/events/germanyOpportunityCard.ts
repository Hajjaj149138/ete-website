// ================================================================
//  GERMANY OPPORTUNITY CARD — LIVE MASTERCLASS — EVENT PAGE CONTENT
//  Edit this file to update the /germany-opportunity-card-2026 page.
// ================================================================
import type { EventLandingContent } from "@/components/events/EventLandingClient";

export const germanyOpportunityCard: EventLandingContent = {
  title:       "Germany Opportunity Card",
  titleAccent: "Live Masterclass",
  subtitle:
    "A step-by-step guide to applying for the German Opportunity Card (Chancenkarte) — points system, document checklist, blocked account requirements, and exactly how Easy To Europe can assist your application.",
  dateLabel:   "16th December 2026",
  startsAtISO: "2026-12-16T18:00:00+06:00",
  endsAtISO:   "2026-12-16T21:00:00+06:00",
  venue:       "Online (Zoom) & Easy To Europe Office",
  ctaLabel:    "Register Now — It's Free",

  countries: [
    { slug: "germany", name: "Germany", flag: "🇩🇪", hasPhoto: false },
  ],

  destinationsTag:      "Focused Country Session",
  destinationsHeading:  "Your Germany Opportunity Card Roadmap",
  destinationsSubtitle: "One session, fully focused on Germany's points-based Opportunity Card and how to qualify.",

  benefits: [
    "Special offers on Germany file opening",
    "Discounted service charges",
    "Chance to WIN a FREE air ticket",
    "Exclusive points-system eligibility check",
    "Priority document review",
    "Many more event-only benefits",
  ],
  gets: [
    "Personalized Opportunity Card points assessment",
    "Blocked account setup guidance",
    "Document checklist walkthrough",
    "Profile & eligibility assessment",
    "One-to-one counselling with experienced education consultants",
    "Complete application support",
  ],

  // ⚠️ PLACEHOLDER — verify real source_id from your CRM before going live
  crmSource:   "Germany Opportunity Card Dec 2026",
  crmSourceId: 27,

  whatsappMessage: "Hi, I just registered for the Germany Opportunity Card Masterclass.",
};
