import type { Metadata } from "next";
import EventLandingClient from "@/components/events/EventLandingClient";
import { buildEventSchema } from "@/lib/eventSchema";
import { apacEducationFair } from "@/data/events/apacEducationFair";

export const metadata: Metadata = {
  title: "Asia-Pacific Education Fair 2026 | Easy To Europe",
  description:
    "Explore Australia & Malaysia under one roof — 21st November 2026 at Easy To Europe. Free registration, exclusive scholarships, and expert one-to-one counselling.",
  alternates: { canonical: "/apac-education-fair-2026" },
  openGraph: {
    type: "website",
    url: "https://easytoeurope.com/apac-education-fair-2026",
    title: "Asia-Pacific Education Fair 2026 | Easy To Europe",
    description: "21st November 2026 — Australia & Malaysia under one roof. Register free.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Asia-Pacific Education Fair 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asia-Pacific Education Fair 2026 | Easy To Europe",
    description: "21st November 2026 — Australia & Malaysia, one roof. Register free.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildEventSchema(apacEducationFair, "/apac-education-fair-2026")) }}
      />
      <EventLandingClient content={apacEducationFair} />
    </>
  );
}
