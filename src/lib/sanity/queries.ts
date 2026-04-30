// ═══════════════════════════════════════════════════════════════
//  SANITY GROQ QUERIES
//  All data fetching queries in one place
// ═══════════════════════════════════════════════════════════════

// ── Site Config ──────────────────────────────────────────────
export const SITE_CONFIG_QUERY = `*[_type == "siteConfig"][0]{
  siteName, tagline, description, phone, whatsapp, email,
  socials, stats, offices
}`;

// ── Home Page ────────────────────────────────────────────────
export const HOME_PAGE_QUERY = `*[_type == "homePage"][0]{
  hero{ badge, headline, subheadline, cta1, cta2, "bgImage": bgImage.asset->url },
  marqueeItems,
  whyUs{ title, subtitle, items },
  process{ title, subtitle, steps },
  testimonials{
    title,
    items[]{ name, "photo": photo.asset->url, country, university, rating, quote }
  },
  universityCarousel{
    title, subtitle,
    row1[]{ name, country, "logo": logo.asset->url },
    row2[]{ name, country, "logo": logo.asset->url }
  }
}`;

// ── All Destinations ─────────────────────────────────────────
export const ALL_DESTINATIONS_QUERY = `*[_type == "destination"] | order(orderRank asc){
  name, "slug": slug.current, color, tagline, flagCode,
  tuition, visa, ieltsMin, ieltsNote, uniCount,
  "heroImage": heroImage.asset->url,
  highlights, courses,
  universities[]{ name, location, rank, spec },
}`;

// ── Single Destination ───────────────────────────────────────
export const DESTINATION_QUERY = `*[_type == "destination" && slug.current == $slug][0]{
  name, "slug": slug.current, color, tagline, flagCode, overview,
  tuition, visa, ieltsMin, ieltsNote, uniCount,
  "heroImage": heroImage.asset->url,
  highlights, courses, cities[]{ name, desc },
  universities[]{ name, location, rank, spec },
  programs[]{ level, duration, icon },
  intakes[]{ month, label, deadline, note },
  langReq[]{ level, ielts, toefl, pte, notes },
  docs,
  living{ accommodation, food, transport, total },
  workDuring, postStudy,
  scholarships[]{ name, desc },
  faqs[]{ question, answer },
  seo{ metaTitle, metaDescription, keywords }
}`;

// ── Events ───────────────────────────────────────────────────
export const EVENTS_QUERY = `*[_type == "event"] | order(startDate asc){
  _id, title, type, description, location,
  startDate, endDate, registrationLink,
  "image": image.asset->url,
  featured, isOnline, seats, tags
}`;

// ── Partnerships ─────────────────────────────────────────────
export const PARTNERSHIPS_QUERY = `*[_type == "partnership" && featured == true] | order(orderRank asc){
  _id, name, "logo": logo.asset->url, website, description, category, country
}`;

// ── About Page ───────────────────────────────────────────────
export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0]{
  leadership[]{ name, role, "photo": photo.asset->url, years, quote, linkedin },
  team[]{ name, role, "photo": photo.asset->url, nickname, trait, linkedin },
  mission{ title, sub, points[]{ title, desc } },
  vision{ title, sub, points[]{ title, desc } },
  whyUs[]{ icon, title, desc }
}`;

// ── Services Page ────────────────────────────────────────────
export const SERVICES_PAGE_QUERY = `*[_type == "servicesPage"][0]{
  hero{ badge, title, sub },
  steps[]{ number, icon, title, items }
}`;
