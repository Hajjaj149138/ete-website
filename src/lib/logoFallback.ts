// Shared fallback for any university logo <img> that fails to load
// (dead link, hotlink-blocked, etc). Swaps in a clean initials badge
// instead of leaving blank space.
export function handleLogoError(e: React.SyntheticEvent<HTMLImageElement>, name: string) {
  const img = e.target as HTMLImageElement;
  img.onerror = null; // avoid any loop if the data URI itself ever fails
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'>
    <rect width='120' height='120' rx='18' fill='#1E3A5F'/>
    <text x='60' y='72' font-family='Arial, sans-serif' font-size='42' font-weight='700' fill='#E8C96A' text-anchor='middle'>${initials}</text>
  </svg>`;
  img.src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
