import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — Meet Our Team | Easy To Europe",
  description:
    "Meet the leadership and team behind Easy To Europe — Bangladesh's trusted study-abroad consultancy. 98% visa success rate, 1000+ students placed since 2020.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "https://easytoeurope.com/about",
    title: "About Us — Meet Our Team | Easy To Europe",
    description: "Meet the leadership and team behind Bangladesh's trusted study-abroad consultancy.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About Easy To Europe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Meet Our Team | Easy To Europe",
    description: "Meet the leadership and team behind Bangladesh's trusted study-abroad consultancy.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      {/* ── Person schema: Md. Hajjaj Bin Sonosi ──
          Helps searches for "Hajjaj Bin Sonosi" / "Md. Hajjaj Bin Sonosi"
          surface this page, with his role and portfolio link attached. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Md. Hajjaj Bin Sonosi",
            alternateName: "Hajjaj Bin Sonosi",
            jobTitle: "IT Lead & Full Stack Software Engineer",
            worksFor: {
              "@type": "Organization",
              name: "Easy To Europe",
              url: "https://easytoeurope.com",
            },
            url: "https://easytoeurope.com/about",
            sameAs: ["https://hajjaj-portfolio.vercel.app/"],
          }),
        }}
      />
      <AboutClient />
    </>
  );
}
