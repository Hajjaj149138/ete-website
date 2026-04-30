// ═══════════════════════════════════════════════════════════════
//  SANITY DATA HOOKS
//  Use these in any component:
//  const data = await getSiteConfig();
// ═══════════════════════════════════════════════════════════════
import { sanityFetch } from './client';
import {
  SITE_CONFIG_QUERY, HOME_PAGE_QUERY, ALL_DESTINATIONS_QUERY,
  DESTINATION_QUERY, EVENTS_QUERY, PARTNERSHIPS_QUERY,
  ABOUT_PAGE_QUERY, SERVICES_PAGE_QUERY,
} from './queries';

// ── Fallback to content.ts if Sanity not configured ──────────
function isSanityConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'YOUR_PROJECT_ID'
  );
}

export async function getSiteConfig() {
  if (!isSanityConfigured()) return null;
  return sanityFetch(SITE_CONFIG_QUERY);
}

export async function getHomePage() {
  if (!isSanityConfigured()) return null;
  return sanityFetch(HOME_PAGE_QUERY);
}

export async function getAllDestinations() {
  if (!isSanityConfigured()) return null;
  return sanityFetch(ALL_DESTINATIONS_QUERY);
}

export async function getDestination(slug: string) {
  if (!isSanityConfigured()) return null;
  return sanityFetch(DESTINATION_QUERY, { slug });
}

export async function getEvents() {
  if (!isSanityConfigured()) return null;
  return sanityFetch(EVENTS_QUERY);
}

export async function getPartnerships() {
  if (!isSanityConfigured()) return null;
  return sanityFetch(PARTNERSHIPS_QUERY);
}

export async function getAboutPage() {
  if (!isSanityConfigured()) return null;
  return sanityFetch(ABOUT_PAGE_QUERY);
}

export async function getServicesPage() {
  if (!isSanityConfigured()) return null;
  return sanityFetch(SERVICES_PAGE_QUERY);
}
