import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ui/ConsultationPopup";
import { ThemeProvider } from "@/lib/ThemeContext";
import { ConsultationProvider } from "@/lib/ConsultationContext";

// ─────────────────────────────────────────────────────────────────
// 🔷 FACEBOOK PIXEL — set NEXT_PUBLIC_FB_PIXEL_ID in .env.local
// How: Facebook Business → Events Manager → Pixels → copy the ID
// 🔷 GOOGLE ANALYTICS (GA4) — set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local
// How: Google Analytics → Admin → Data Streams → your web stream → Measurement ID (starts with G-)
// Neither script loads until you add the real ID — no placeholder ever fires.
// ─────────────────────────────────────────────────────────────────
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? "";
const GA_ID        = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const metadata: Metadata = {
  title: {
    default: "Easy To Europe | Study Abroad Consultancy Bangladesh",
    template: "%s | Easy To Europe",
  },
  description:
    "Bangladesh's most trusted education consultancy for studying in Europe, UK, Canada & Australia. 98% visa success rate, 1000+ students placed, expert guidance since 2020.",
  keywords: [
    "study abroad Bangladesh",
    "Europe student visa",
    "study in Germany",
    "study in Lithuania",
    "education consultancy Dhaka",
    "IELTS preparation",
    "student visa consultancy",
    "Easy To Europe",
    "study in UK",
    "study in Canada",
  ],
  authors: [{ name: "Easy To Europe" }],
  creator: "Easy To Europe",
  publisher: "Easy To Europe",
  metadataBase: new URL("https://easytoeurope.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://easytoeurope.com",
    siteName: "Easy To Europe",
    title: "Easy To Europe | Study Abroad Consultancy Bangladesh",
    description:
      "Bangladesh's most trusted education consultancy. 98% visa success rate, 1000+ students placed across Europe, UK, Canada & Australia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Easy To Europe — Study Abroad Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy To Europe | Study Abroad Consultancy",
    description:
      "Bangladesh's most trusted education consultancy. 98% visa success rate, 1000+ students placed.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/favicon-192.png",
  },
  verification: {
    google: "3xl55F31RUQfQMSmuXWbEDp413bwLtK8PYVVjRL_eIM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Theme init — prevents dark/light flash ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var d=localStorage.getItem('ete-theme');if(d==='dark'||(!d&&window.matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark');}catch(e){}`,
          }}
        />

        {/* ── Facebook Pixel (only fires once NEXT_PUBLIC_FB_PIXEL_ID is set) ── */}
        {FB_PIXEL_ID && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${FB_PIXEL_ID}');fbq('track','PageView');`,
              }}
            />
            <noscript>
              <img height="1" width="1" style={{ display: "none" }} alt=""
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`} />
            </noscript>
          </>
        )}

        {/* ── Google Analytics / GA4 (only fires once NEXT_PUBLIC_GA_MEASUREMENT_ID is set) ── */}
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`,
              }}
            />
          </>
        )}

        {/* ── Local Business Schema (JSON-LD) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Easy To Europe",
              alternateName: ["EasyToEurope", "Easy To Europe BD", "Easy Europe", "ETE Bangladesh"],
              description:
                "Bangladesh's most trusted education consultancy for studying in Europe, UK, Canada & Australia.",
              url: "https://easytoeurope.com",
              logo: "https://easytoeurope.com/favicon-192.png",
              image: "https://easytoeurope.com/og-image.jpg",
              telephone: "+88 01896 511151",
              email: "info@easytoeurope.com",
              foundingDate: "2020",
              address: {
                "@type": "PostalAddress",
                streetAddress: "44, F, 08, Panthapath, Indira Road",
                addressLocality: "Dhaka",
                addressCountry: "BD",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61560097134726",
                "https://www.youtube.com/@EasytoEurope",
                "https://www.linkedin.com/company/easy-to-europe/",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "200",
              },
            }),
          }}
        />

        {/* ── WebSite schema — helps "Easy To Europe" / "easytoeurope" brand
             searches resolve straight to this site (and enables a Google
             sitelinks search box if Google chooses to show one) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Easy To Europe",
              alternateName: ["EasyToEurope", "Easy Europe", "easytoeurope.com"],
              url: "https://easytoeurope.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://easytoeurope.com/study-destinations?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ConsultationProvider>
            <Navbar />
            {children}
            <Footer />
            <ConsultationPopup />
          </ConsultationProvider>
        </ThemeProvider>

        {/* ── Scroll reveal ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function r(){document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(function(el){var b=el.getBoundingClientRect();if(b.top<window.innerHeight+200)el.classList.add('revealed');})}r();document.addEventListener('DOMContentLoaded',r);window.addEventListener('scroll',r,{passive:true});var c=0,iv=setInterval(function(){r();if(++c>30)clearInterval(iv);},100);if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('revealed');});},{threshold:0,rootMargin:'200px 0px 200px 0px'});function s(){document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(function(el){io.observe(el);});}s();new MutationObserver(s).observe(document.body||document.documentElement,{childList:true,subtree:true});}})();`,
          }}
        />
      </body>
    </html>
  );
}
