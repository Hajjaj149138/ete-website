import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://easytoeurope.com";
  const now = new Date();

  // Static pages
  const staticPages = [
    { url: baseUrl,                              priority: 1.0,  changeFrequency: "weekly"  as const },
    { url: `${baseUrl}/about`,                   priority: 0.9,  changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`,                priority: 0.9,  changeFrequency: "monthly" as const },
    { url: `${baseUrl}/study-destinations`,      priority: 0.9,  changeFrequency: "weekly"  as const },
    { url: `${baseUrl}/career-pathways`,         priority: 0.8,  changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`,                 priority: 0.8,  changeFrequency: "monthly" as const },
    { url: `${baseUrl}/achievements`,            priority: 0.7,  changeFrequency: "monthly" as const },
    { url: `${baseUrl}/register`,                priority: 0.7,  changeFrequency: "monthly" as const },
    { url: `${baseUrl}/terms-of-use`,            priority: 0.3,  changeFrequency: "yearly"  as const },
    { url: `${baseUrl}/privacy-policy`,          priority: 0.3,  changeFrequency: "yearly"  as const },
  ];

  // Study destination slugs
  const destinations = [
    "germany", "lithuania", "sweden", "cyprus", "portugal",
    "uk", "canada", "australia", "malaysia", "poland",
    "hungary", "georgia",
  ];
  const destinationPages = destinations.map((slug) => ({
    url: `${baseUrl}/study-destinations/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  // Career pathway slugs
  const careers = ["germany", "skilled-migration", "cyprus-work"];
  const careerPages = careers.map((slug) => ({
    url: `${baseUrl}/career-pathways/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...destinationPages,
    ...careerPages,
  ];
}
