import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Easy To Europe",
  description:
    "End-to-end study abroad support — university selection, SOP & visa file preparation, IELTS guidance, and post-arrival help. 98% visa success rate, no hidden charges.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "https://easytoeurope.com/services",
    title: "Our Services | Easy To Europe",
    description: "End-to-end study abroad support with a 98% visa success rate and no hidden charges.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Easy To Europe Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Easy To Europe",
    description: "End-to-end study abroad support with a 98% visa success rate and no hidden charges.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <ServicesClient />;
}
