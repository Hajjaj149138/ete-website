// ================================================================
//  NORDIC & BALTIC STUDY EXPO 2026 — EVENT PAGE CONTENT
//  Edit this file to update the /nordic-baltic-expo-2026 page.
// ================================================================
import type { EventLandingContent } from "@/components/events/EventLandingClient";

export const nordicBalticExpo: EventLandingContent = {
  title:       "Nordic & Baltic",
  titleAccent: "Study Expo 2026",
  subtitle:
    "Discover affordable, high-quality education across Sweden, Denmark, and Lithuania — three of Europe's most student-friendly destinations, all in one session.",
  dateLabel:   "10th October 2026",
  startsAtISO: "2026-10-10T10:00:00+06:00",
  endsAtISO:   "2026-10-10T18:00:00+06:00",
  venue:       "Easy To Europe Office",
  ctaLabel:    "Register Now — It's Free",

  countries: [
    { slug: "sweden",   name: "Sweden",    flag: "🇸🇪" },
    { slug: "denmark",  name: "Denmark",   flag: "🇩🇰" },
    { slug: "lithuania",name: "Lithuania", flag: "🇱🇹" },
  ],

  destinationsTag:      "3 Destinations, One Roof",
  destinationsHeading:  "Explore the Nordics & Baltics in One Visit",
  destinationsSubtitle: "Meet counsellors for each destination and compare your options side by side.",

  benefits: [
    "Special country-wise offers on file opening",
    "Discounted service charges",
    "Chance to WIN a FREE air ticket",
    "IELTS registration cashback",
    "Exclusive scholarships across all 3 countries",
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
  crmSource:   "Nordic Baltic Expo Oct 2026",
  crmSourceId: 23,

  whatsappMessage: "Hi, I just registered for the Nordic & Baltic Study Expo.",
};
