# 🖼️ Easy To Europe — Image & Content Guide

---

## 1. LOGO

**File:** `public/logo.png`  
**Size:** Minimum 200×200px (square or horizontal)  
**Format:** PNG with transparent background  
**Where it shows:** Navbar (top-left) and Footer

To replace: Just drop your logo file at `public/logo.png` — it auto-adjusts.

---

## 2. COUNTRY HERO IMAGES

**Location:** `src/app/study-destinations/[slug]/page.tsx`  
**Variable:** `HERO_IMG` object at the top of the file

```js
const HERO_IMG = {
  "australia": "https://images.unsplash.com/...",
  "sweden":    "https://images.unsplash.com/...",
  // etc.
}
```

**To change a country image:**
1. Go to [Unsplash.com](https://unsplash.com) → search country name
2. Click any photo → copy URL from browser (e.g. `https://images.unsplash.com/photo-XXXXXXX`)
3. Add `?w=1400&q=80&auto=format&fit=crop` at the end
4. Replace the URL in `HERO_IMG["country-slug"]`

**Format:** Landscape photos work best (16:9 ratio). Dark/moody photos look better as hero backgrounds.

**Auto-adjust:** ✅ All images auto-crop and darken with overlay — any photo works.

---

## 3. LEADERSHIP PHOTOS (About Page)

**Location:** `src/data/content.ts` → `aboutData.leadership` array

```ts
leadership: [
  {
    name: "Name Here",
    role: "Founder & CEO",
    photo: "https://your-image-url.com/photo.jpg",  // ← Add URL here
    bio: "...",
  },
]
```

**If no photo:** Shows a colored gradient with initials (auto-generated).  
**To add photo:** Paste any image URL (hosted on your server, Google Drive public link, or Cloudinary).

**Recommended size:** 400×400px square, face visible, professional photo.

---

## 4. TEAM PHOTOS (About Page)

**Location:** `src/data/content.ts` → `aboutData.team` array

Same format as leadership. Leave `photo` empty for auto-generated avatar.

---

## 5. TESTIMONIAL PHOTOS (Home Page)

**Location:** `src/app/page.tsx` → `TESTIMONIALS` array (near top)

```ts
const TESTIMONIALS = [
  {
    name: "Student Name",
    photo: "https://...",  // ← Add URL here
    // ...
  }
]
```

**If no photo:** Shows colored circle with initials.

---

## 6. STATS (Numbers shown on all pages)

**Location:** `src/data/content.ts` → `siteConfig.stats`

```ts
stats: [
  { number: "1,000+", label: "Students Placed" },
  { number: "98%",    label: "Visa Success Rate" },
  { number: "12+",    label: "Countries" },
  { number: "5+",     label: "Years Experience" },
],
```

Change these numbers here — they update **everywhere** automatically on: Home, About, Services, Study Destinations pages.

---

## 7. MAP (Home Page)

**Current location:** Panthapath, Indira Road, Dhaka 1205  
**To update map location:**

In `src/app/page.tsx` find the `<iframe>` inside the `{/* 11. MAP */}` section.  
Replace the `src` URL with your new Google Maps embed URL:

1. Go to [Google Maps](https://maps.google.com)
2. Search your address
3. Click **Share** → **Embed a map** → Copy the `src="..."` URL
4. Paste it into the iframe src

---

## 8. CERTIFICATION IMAGES

**Location:** `public/certs/` folder  
**Current files:** `studyinfo.png`, `pafosNew.png`, `pafos.png`, `malita.png`, `quantum.png`

To add a new certification:
1. Add image to `public/certs/yourfile.png`
2. In `src/app/page.tsx` find `CERTS` array and add:
```ts
{ id: "new-cert", ..., img: "/certs/yourfile.png" }
```

**Auto-adjust:** ✅ All certification images display in a uniform slider — any size works.

---

## 9. YOUTUBE VIDEOS

**Location:** `src/app/page.tsx` → `VIDEOS` array

```ts
const VIDEOS = [
  { id: "VIDEO_ID_HERE", url: "https://youtu.be/...", title: "Title", label: "Label" },
]
```

Just paste your YouTube video ID (the part after `?v=` in the URL).

---

## ✅ Quick Summary

| Item | File | Auto-adjust? |
|------|------|-------------|
| Logo | `public/logo.png` | ✅ Yes |
| Country hero images | `[slug]/page.tsx` → `HERO_IMG` | ✅ Yes |
| Leadership photos | `content.ts` → `aboutData.leadership` | ✅ Yes |
| Team photos | `content.ts` → `aboutData.team` | ✅ Yes |
| Testimonial photos | `page.tsx` → `TESTIMONIALS` | ✅ Yes |
| Stats/Numbers | `content.ts` → `siteConfig.stats` | ✅ Updates everywhere |
| Map location | `page.tsx` → iframe src | Manual paste |
| Certifications | `public/certs/` + `CERTS` array | ✅ Yes |
| YouTube videos | `page.tsx` → `VIDEOS` | ✅ Yes |

