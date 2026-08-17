import type { EventLandingContent } from "@/components/events/EventLandingClient";
import { getCurrentOccurrenceISO } from "@/lib/eventDates";

export function buildEventSchema(content: EventLandingContent, path: string) {
  const { startISO, endISO } = getCurrentOccurrenceISO(content.startsAtISO, content.endsAtISO);
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${content.title} ${content.titleAccent}`,
    description: content.subtitle,
    startDate: startISO,
    endDate: endISO,
    eventAttendanceMode: content.venue.toLowerCase().includes("online")
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: content.venue.toLowerCase().includes("online")
      ? { "@type": "VirtualLocation", url: `https://easytoeurope.com${path}` }
      : {
          "@type": "Place",
          name: content.venue,
          address: { "@type": "PostalAddress", streetAddress: "44, F, 08, Panthapath, Indira Road", addressLocality: "Dhaka", addressCountry: "BD" },
        },
    image: ["https://easytoeurope.com/og-image.jpg"],
    organizer: { "@type": "Organization", name: "Easy To Europe", url: "https://easytoeurope.com" },
    offers: { "@type": "Offer", url: `https://easytoeurope.com${path}`, price: "0", priceCurrency: "BDT", availability: "https://schema.org/InStock" },
  };
}
