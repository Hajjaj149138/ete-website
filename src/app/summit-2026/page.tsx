import type { Metadata } from "next";
import SummitClient from "./SummitClient";

export const metadata: Metadata = {
  title: "Multi-Destination Education Summit 2026 | Easy To Europe",
  description:
    "Explore study options across 12 leading destinations under one roof — 14th & 15th August 2026 at Easy To Europe. Free registration, exclusive scholarships, and expert one-to-one counselling.",
  alternates: { canonical: "/summit-2026" },
  openGraph: {
    type: "website",
    url: "https://easytoeurope.com/summit-2026",
    title: "Multi-Destination Education Summit 2026 | Easy To Europe",
    description:
      "14th & 15th August 2026 — Explore study options across 12 leading destinations under one roof. Register free.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Multi-Destination Education Summit 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Destination Education Summit 2026 | Easy To Europe",
    description: "14th & 15th August 2026 — 12 destinations, one roof. Register free.",
    images: ["/og-image.jpg"],
  },
};

export default function Summit2026Page() {
  return <SummitClient />;
}
