import { createClient } from 'next-sanity';
import imageUrlBuilder   from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  apiVersion: '2024-01-01',
  useCdn:    process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

// ── Image URL helper ─────────────────────────────────────────
// Usage: sanityImage(photo).width(400).url()
export function sanityImage(source: any) {
  return builder.image(source);
}

// ── Fetch with fallback ───────────────────────────────────────
export async function sanityFetch<T>(
  query: string,
  params: Record<string, any> = {},
): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params);
  } catch (err) {
    console.error('Sanity fetch error:', err);
    return null;
  }
}
