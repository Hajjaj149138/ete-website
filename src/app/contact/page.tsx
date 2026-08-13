import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Easy To Europe",
  description:
    "Get in touch with Easy To Europe — Bangladesh's trusted study-abroad consultancy. Visit our Dhaka office, call, WhatsApp, or book a free consultation today.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "https://easytoeurope.com/contact",
    title: "Contact Us | Easy To Europe",
    description: "Visit our Dhaka office, call, WhatsApp, or book a free consultation today.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Easy To Europe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Easy To Europe",
    description: "Visit our Dhaka office, call, WhatsApp, or book a free consultation today.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <ContactClient />;
}
