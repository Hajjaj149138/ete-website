import type { Metadata } from "next";
import EventLandingClient from "@/components/events/EventLandingClient";
import { buildEventSchema } from "@/lib/eventSchema";
import { ukPathwaysFair } from "@/data/events/ukPathwaysFair";

export const metadata: Metadata = {
  title: "UK University Pathways & Scholarship Fair | Easy To Europe",
  description:
    "A dedicated deep-dive into UK higher education — 7th November 2026 at Easy To Europe. Free registration, exclusive scholarships, and expert one-to-one counselling.",
  alternates: { canonical: "/uk-pathways-fair-2026" },
  openGraph: {
    type: "website",
    url: "https://easytoeurope.com/uk-pathways-fair-2026",
    title: "UK University Pathways & Scholarship Fair | Easy To Europe",
    description: "7th November 2026 — Everything you need to study in the UK. Register free.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "UK University Pathways & Scholarship Fair" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK University Pathways & Scholarship Fair | Easy To Europe",
    description: "7th November 2026 — Everything you need to study in the UK. Register free.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildEventSchema(ukPathwaysFair, "/uk-pathways-fair-2026")) }}
      />
      <EventLandingClient content={ukPathwaysFair} />
    </>
  );
}
