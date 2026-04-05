# 📖 EASY TO EUROPE WEBSITE — COMPLETE GUIDE
### For: Hajjaj Bin Sonosi | Written in simple language

---

## 📁 FILE STRUCTURE — What is Where?

```
ete-v4/
│
├── 📂 src/
│   │
│   ├── 📂 app/                    ← PAGES (what users see)
│   │   ├── page.tsx               ← 🏠 Home page
│   │   ├── about/page.tsx         ← 👥 About Us page
│   │   ├── contact/page.tsx       ← 📞 Contact page
│   │   ├── services/page.tsx      ← ⚙️  Services page
│   │   ├── study-destinations/
│   │   │   ├── page.tsx           ← 🌍 All destinations listing
│   │   │   └── [slug]/page.tsx    ← 🇸🇪 Each country detail page
│   │   ├── career-pathways/
│   │   │   ├── page.tsx           ← 💼 Career pathways listing
│   │   │   └── [slug]/page.tsx    ← Each pathway detail
│   │   ├── admin/
│   │   │   └── events/page.tsx    ← 🔐 Admin events panel
│   │   └── api/
│   │       └── consultation/
│   │           └── route.ts       ← ⚡ Form → CRM + Email backend
│   │
│   ├── 📂 components/             ← REUSABLE PARTS
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         ← Top navigation bar
│   │   │   └── Footer.tsx         ← Footer
│   │   └── ui/
│   │       ├── ConsultationPopup.tsx  ← The form popup
│   │       ├── ConsultationButton.tsx ← "Book Consultation" button
│   │       ├── EventsPublicSection.tsx ← Events on home page
│   │       └── AdminEventsPanel.tsx   ← Admin events management
│   │
│   ├── 📂 data/
│   │   └── content.ts             ← 📝 ALL website text content
│   │
│   ├── 📂 lib/
│   │   ├── ThemeContext.tsx        ← Dark/light mode logic
│   │   └── ConsultationContext.tsx ← Popup open/close logic
│   │
│   └── 📂 styles/                 ← DESIGN & COLORS
│       ├── themes.css             ← 🎨 All colors (edit here for color changes)
│       ├── base.css               ← Global styles, buttons, cards
│       ├── components/
│       │   ├── navbar.css         ← Navbar styles
│       │   └── footer.css         ← Footer + popup styles
│       └── pages/
│           ├── home.css           ← Home page styles
│           ├── destinations.css   ← Destinations page styles
│           └── other-pages.css    ← About/Contact/Services styles
│
├── .env.local                     ← 🔑 SECRET KEYS (create this file)
└── .env.example                   ← Template for .env.local
```

---

## ✏️ HOW TO EDIT CONTENT

### Change ANY text on the website:
**File: `src/data/content.ts`**

This ONE file controls all text on the website. Examples:

| What you want to change | Find in content.ts |
|------------------------|-------------------|
| Phone number | `siteConfig.phone` |
| Email address | `siteConfig.email` |
| Office address | `siteConfig.offices` |
| Hero headline | `homePage.hero` |
| Stats (5000+, 98%) | `siteConfig.stats` |
| Why Choose Us cards | `homePage.whyUs.items` |
| Process steps | `homePage.process.steps` |
| Testimonials | `homePage.testimonials.items` |
| Country info | `destinations` array |

---

## 🎨 HOW TO CHANGE COLORS

**File: `src/styles/themes.css`**

Look for these variables and change the color codes:

```css
--brand:    #003366;   /* Main blue color */
--accent:   #FF7A00;   /* Orange highlight color */
--bg-base:  #FFFFFF;   /* Page background */
```

Color code examples:
- Red: `#FF0000`
- Green: `#00AA44`
- Dark navy: `#0A192F`

---

## 🔐 HOW TO ACCESS ADMIN PANEL

**URL:** `yourwebsite.com/admin/events`

**Password:** `easytoeurope2025`

To change password:
- Open `src/components/ui/AdminEventsPanel.tsx`
- Find line: `const ADMIN_PASSWORD = "easytoeurope2025";`
- Replace with your new password

---

## ⚡ SETUP: CRM INTEGRATION

When someone submits the consultation form → a new Lead automatically appears in your CRM.

**Steps to activate:**

### Step 1 — Create "Website" source in CRM
1. Login to https://crm.ete.sveducrm.com
2. Go to **Settings → Sources**
3. Click **+ Add** → Name: `website` (must be lowercase)
4. Save

### Step 2 — Get the source ID number
Open this link in your browser:
```
https://crm.ete.sveducrm.com/api/info-form/website
```
You'll see something like: `{"id": 5, "name": "website", ...}`
Copy the number after `"id":`

### Step 3 — Update the code
Open: `src/app/api/consultation/route.ts`

Find line 43:
```ts
const CRM_SOURCE_ID = 6;  // ⚠️ UPDATE THIS
```
Replace `6` with your actual number.

### Step 4 — Verify country IDs
Open: `https://crm.ete.sveducrm.com/base-filter`
Find the `countries` array and check the IDs match what's in
`COUNTRY_IDS` in the same file (around line 55).

---

## 📧 SETUP: EMAIL NOTIFICATIONS

When someone submits the form → email goes to info@easytoeurope.com

**Using EmailJS (FREE — 200 emails/month):**

### Step 1 — Create EmailJS account
Go to https://emailjs.com → Sign up free

### Step 2 — Add Email Service
- Click **Email Services** → **Add New Service**
- Choose **Gmail**
- Connect with info@easytoeurope.com

### Step 3 — Create Email Template
- Click **Email Templates** → **Create New Template**
- Set **To Email:** `{{to_email}}`
- Set **Subject:** `New Consultation — {{from_name}}`
- Template body:

```
New Consultation Request from Website

Name:        {{from_name}}
Phone:       {{from_phone}}
Email:       {{from_email}}
Destination: {{destination}}
Study Level: {{level}}
IELTS Score: {{ielts}}
Message:     {{message}}

CRM Lead ID: {{crm_lead_id}}
Submitted:   {{submitted_at}}
```

### Step 4 — Get your keys
- Go to **Account** → copy your **Public Key**
- Copy your **Service ID** and **Template ID**

### Step 5 — Add to .env.local
Create a file called `.env.local` in the project root:
```
EMAILJS_SERVICE_ID=service_xxxxxxx
EMAILJS_TEMPLATE_ID=template_xxxxxxx
EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

---

## 🚀 HOW TO RUN THE WEBSITE

### First time setup:
```bash
cd ete-v4
npm install
```

### Start development (local preview):
```bash
npm run dev
```
Open: http://localhost:3000

### Build for production:
```bash
npm run build
npm start
```

---

## 📝 COMMON CHANGES — Quick Reference

### Add a new testimonial:
File: `src/data/content.ts`
Find `testimonials:` → add to `items` array:
```ts
{
  name: "New Student Name",
  quote: "What they said about us...",
  country: "Sweden",
  university: "University Name",
  rating: 5,
},
```

### Add a new upcoming event:
Go to: `yourwebsite.com/admin/events` → Login → Add Event

### Change navbar links:
File: `src/data/content.ts`
Find `navLinks` array → edit the labels and hrefs

### Change footer content:
File: `src/components/layout/Footer.tsx`

### Add hero student photo:
1. Save photo as: `public/images/hero-student.png`
2. Open: `src/app/page.tsx`
3. Find the `hero-visual-placeholder` div
4. Replace with: `<img src="/images/hero-student.png" style={{...}} />`

---

## ❓ TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Form not submitting to CRM | Check CRM_SOURCE_ID in route.ts |
| Email not arriving | Check .env.local has correct EmailJS keys |
| Country not showing in CRM | Verify COUNTRY_IDS match base-filter API |
| Site not loading | Run `npm install` then `npm run dev` |
| Dark mode colors wrong | Edit `.dark { }` section in themes.css |

---

## 📞 SUPPORT

If you need help editing the code, the main files to share are:
- `src/data/content.ts` (content changes)
- `src/styles/themes.css` (color changes)
- `src/app/api/consultation/route.ts` (CRM/email setup)

---

*Last updated: March 2026*
