import type { Metadata } from "next";
import EventLandingClient from "@/components/events/EventLandingClient";
import { canadaPrSummit } from "@/data/events/canadaPrSummit";

export const metadata: Metadata = {
  title: "Canada Study & PR Pathway Summit | Easy To Europe",
  description:
    "How to turn your Canadian study visa into Permanent Residency — 5th December 2026. Free registration and expert one-to-one counselling.",
  alternates: { canonical: "/canada-pr-summit-2026" },
  openGraph: {
    type: "website",
    url: "https://easytoeurope.com/canada-pr-summit-2026",
    title: "Canada Study & PR Pathway Summit | Easy To Europe",
    description: "5th December 2026 — Study visa to PR: PGWP, Express Entry & more. Register free.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Canada Study & PR Pathway Summit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canada Study & PR Pathway Summit | Easy To Europe",
    description: "5th December 2026 — Study visa to PR: PGWP, Express Entry & more.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <EventLandingClient content={canadaPrSummit} />;
}
