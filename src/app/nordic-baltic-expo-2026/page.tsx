import type { Metadata } from "next";
import EventLandingClient from "@/components/events/EventLandingClient";
import { nordicBalticExpo } from "@/data/events/nordicBalticExpo";

export const metadata: Metadata = {
  title: "Nordic & Baltic Study Expo 2026 | Easy To Europe",
  description:
    "Explore Sweden, Denmark & Lithuania under one roof — 10th October 2026 at Easy To Europe. Free registration, exclusive scholarships, and expert one-to-one counselling.",
  alternates: { canonical: "/nordic-baltic-expo-2026" },
  openGraph: {
    type: "website",
    url: "https://easytoeurope.com/nordic-baltic-expo-2026",
    title: "Nordic & Baltic Study Expo 2026 | Easy To Europe",
    description: "10th October 2026 — Sweden, Denmark & Lithuania under one roof. Register free.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nordic & Baltic Study Expo 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nordic & Baltic Study Expo 2026 | Easy To Europe",
    description: "10th October 2026 — Sweden, Denmark & Lithuania, one roof. Register free.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <EventLandingClient content={nordicBalticExpo} />;
}
