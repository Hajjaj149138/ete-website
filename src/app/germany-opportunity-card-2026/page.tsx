import type { Metadata } from "next";
import EventLandingClient from "@/components/events/EventLandingClient";
import { buildEventSchema } from "@/lib/eventSchema";
import { germanyOpportunityCard } from "@/data/events/germanyOpportunityCard";

export const metadata: Metadata = {
  title: "Germany Opportunity Card — Live Masterclass | Easy To Europe",
  description:
    "Step-by-step guide to Germany's Opportunity Card (Chancenkarte) — 16th December 2026. Free registration and expert one-to-one counselling.",
  alternates: { canonical: "/germany-opportunity-card-2026" },
  openGraph: {
    type: "website",
    url: "https://easytoeurope.com/germany-opportunity-card-2026",
    title: "Germany Opportunity Card — Live Masterclass | Easy To Europe",
    description: "16th December 2026 — Points system, documents & blocked account, explained. Register free.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Germany Opportunity Card — Live Masterclass" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Germany Opportunity Card — Live Masterclass | Easy To Europe",
    description: "16th December 2026 — Points system, documents & blocked account, explained.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildEventSchema(germanyOpportunityCard, "/germany-opportunity-card-2026")) }}
      />
      <EventLandingClient content={germanyOpportunityCard} />
    </>
  );
}
