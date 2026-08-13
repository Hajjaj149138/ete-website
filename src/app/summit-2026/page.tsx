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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Multi-Destination Education Summit 2026",
            description: "Explore study options across 12 leading destinations under one roof — meet consultants, get scholarship guidance, and unlock exclusive event-only offers.",
            startDate: "2026-08-14T10:00:00+06:00",
            endDate: "2026-08-15T18:00:00+06:00",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            location: {
              "@type": "Place",
              name: "Easy To Europe Office",
              address: { "@type": "PostalAddress", streetAddress: "44, F, 08, Panthapath, Indira Road", addressLocality: "Dhaka", addressCountry: "BD" },
            },
            image: ["https://easytoeurope.com/og-image.jpg"],
            organizer: { "@type": "Organization", name: "Easy To Europe", url: "https://easytoeurope.com" },
            offers: { "@type": "Offer", url: "https://easytoeurope.com/summit-2026", price: "0", priceCurrency: "BDT", availability: "https://schema.org/InStock" },
          }),
        }}
      />
      <SummitClient />
    </>
  );
}
