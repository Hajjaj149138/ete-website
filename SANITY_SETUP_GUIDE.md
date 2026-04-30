# 🚀 Easy To Europe — Sanity CMS Setup Guide

## এই guide follow করলে ৩০ মিনিটে সব ready হবে।

---

## STEP 1 — Sanity Account তৈরি করো

1. যাও: **https://www.sanity.io**
2. "Start for free" → Google বা GitHub দিয়ে sign up
3. Dashboard এ: **"Create new project"**
4. Project name: `Easy To Europe`
5. Dataset: `production` (default)
6. **Project ID** কপি করে রাখো (যেমন: `abc123xy`)

---

## STEP 2 — API Token নাও

1. Sanity Dashboard → তোমার project → **"API"** tab
2. **"Add API token"** click করো
3. Name: `Website Token`
4. Permission: **Editor**
5. Token টা কপি করে রাখো (একবারই দেখাবে!)

---

## STEP 3 — Vercel এ Environment Variables দাও

1. **https://vercel.com** → তোমার project
2. **Settings → Environment Variables**
3. এগুলো add করো:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | তোমার Project ID (step 1 থেকে) |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_TOKEN` | তোমার Token (step 2 থেকে) |
| `NEXT_PUBLIC_FB_PIXEL_ID` | তোমার Facebook Pixel ID |

4. **Save** করো
5. **Redeploy** করো (Deployments tab → ⋯ → Redeploy)

---

## STEP 4 — Local Setup

তোমার computer এ `.env.local` file খোলো এবং update করো:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xy     ← তোমার ID
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skXXXXXXXXXXXXXXXXXXXX  ← তোমার token
NEXT_PUBLIC_FB_PIXEL_ID=তোমার_pixel_id
```

তারপর install করো:
```bash
npm install
```

---

## STEP 5 — CORS Allow করো

Sanity Dashboard → তোমার project → **API → CORS Origins**

এগুলো add করো:
- `http://localhost:3000`
- `https://easytoeurope.com`
- `https://www.easytoeurope.com`

---

## STEP 6 — Admin Panel Access

Local:
```
http://localhost:3000/studio
```

Live site:
```
https://easytoeurope.com/studio
```

🔐 **Login:** Sanity account email + password

---

## STEP 7 — প্রথমবার Content Add করো

Studio তে ঢুকে **একবার করে** এই documents create করো:

### ⚙️ Site Configuration
- **"Site Configuration"** → Create document
- Name, phone, email, socials সব fill করো
- Publish করো

### 🏠 Home Page
- **"Home Page"** → Create document
- Hero text, testimonials, university carousel সব add করো
- Publish করো

### 👥 About Page
- **"About Page"** → Create document
- Leadership ও Team members এর photos upload করো
- Publish করো

### 🌍 Study Destinations (12টা)
- **"Study Destinations"** → New document (প্রতিটা দেশের জন্য)
- Hero image, data সব fill করো
- Publish করো

### 📅 Events
- **"Events"** → New document
- Event details ও cover image দাও
- Publish করো

### 🤝 Partnerships
- **"Partnerships"** → New document  
- Partner logo upload করো
- `featured: true` করলে homepage এ দেখাবে

---

## ✅ সব হয়ে গেলে

Website visit করো — Sanity থেকে সব data আসবে।

**যেকোনো সময় কিছু change করতে:**
1. `easytoeurope.com/studio` তে যাও
2. Login করো
3. Edit করো → Publish করো
4. ✅ Live site এ তুরন্ত update!

---

## 🖼️ Image Upload Tips

- **Photos:** JPG/PNG, maximum 10MB
- **Logos:** PNG with transparent background best
- Sanity auto-optimize করে — তুমি বড় image দিলেও fast load হবে
- Image crop/focus point Sanity Studio তেই করা যাবে

---

## 🆘 সাহায্য দরকার হলে

- Sanity Docs: https://www.sanity.io/docs
- GitHub: https://github.com/Hajjaj149138/ete-website

