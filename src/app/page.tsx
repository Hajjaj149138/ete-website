import HomeClient from "@/components/home/HomeClient";

// Homepage metadata comes from the root layout's default title/description/
// OG tags (src/app/layout.tsx) — that's the correct, single source of truth
// for the homepage's SEO, so nothing is duplicated here.

export default function Page() {
  return <HomeClient />;
}
