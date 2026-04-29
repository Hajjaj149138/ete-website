import type { Metadata } from "next";
import { destinations } from "@/data/content";
import CountryPageClient from "./CountryPageClient";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dest = destinations.find(d => d.slug === params.slug);
  if (!dest) return { title: "Destination Not Found | Easy To Europe" };
  return {
    title: `Study in ${dest.name} | Easy To Europe`,
    description: `Study in ${dest.name} with Easy To Europe. ${(dest.overview || "").slice(0, 140)}... Expert visa support, IELTS guidance & university placements. 98% success rate.`,
    alternates: { canonical: `https://easytoeurope.com/study-destinations/${dest.slug}` },
    keywords: [
      `study in ${dest.name}`,
      `${dest.name} student visa Bangladesh`,
      `${dest.name} university admission`,
      `study abroad ${dest.name}`,
      `${dest.name} education consultancy`,
      "Easy To Europe",
    ],
    openGraph: {
      title: `Study in ${dest.name} | Easy To Europe`,
      description: `${dest.tagline}. Expert visa support, scholarship guidance, and university placements for Bangladeshi students.`,
      url: `https://easytoeurope.com/study-destinations/${dest.slug}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export async function generateStaticParams() {
  return destinations.map(d => ({ slug: d.slug }));
}

export default function CountryPage() {
  return <CountryPageClient />;
}
