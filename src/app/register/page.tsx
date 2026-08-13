import type { Metadata } from "next";
import RegisterClient from "./RegisterClient";

export const metadata: Metadata = {
  title: "Register for Free Consultation | Easy To Europe",
  description:
    "Book your free study-abroad consultation with Easy To Europe — get personalized guidance on universities, scholarships, and visa applications across 12+ destinations.",
  alternates: { canonical: "/register" },
  openGraph: {
    type: "website",
    url: "https://easytoeurope.com/register",
    title: "Register for Free Consultation | Easy To Europe",
    description: "Get personalized guidance on universities, scholarships, and visa applications.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Register with Easy To Europe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Register for Free Consultation | Easy To Europe",
    description: "Get personalized guidance on universities, scholarships, and visa applications.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <RegisterClient />;
}
