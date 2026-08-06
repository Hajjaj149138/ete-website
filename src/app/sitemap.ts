import { MetadataRoute } from "next";
import { destinations, careerPathways, events } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://easytoeurope.com";
  const now = new Date();

  // Static pages
  const staticPages = [
    { url: baseUrl,                              priority: 1.0, changeFrequency: "weekly"  as const },
    { url: `${baseUrl}/about`,                   priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`,                priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/study-destinations`,      priority: 0.9, changeFrequency: "weekly"  as const },
    { url: `${baseUrl}/partner-universities`,    priority: 0.9, changeFrequency: "weekly"  as const },
    { url: `${baseUrl}/career-pathways`,         priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/achievements`,            priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`,                 priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/register`,                priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/terms-of-use`,            priority: 0.3, changeFrequency: "yearly"  as const },
    { url: `${baseUrl}/privacy-policy`,          priority: 0.3, changeFrequency: "yearly"  as const },
  ];

  // Study destination pages — driven by the real destinations list,
  // so this can never drift out of sync with what actually exists.
  const destinationPages = destinations.map((d: any) => ({
    url: `${baseUrl}/study-destinations/${d.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  // Career pathway pages
  const careerPages = careerPathways.map((c: any) => ({
    url: `${baseUrl}/career-pathways/${c.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  // Event detail pages
  const eventPages = events.map((e: any) => ({
    url: `${baseUrl}/events/${e.id}`,
    priority: 0.6,
    changeFrequency: "weekly" as const,
    lastModified: now,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...destinationPages,
    ...careerPages,
    ...eventPages,
  ];
}
