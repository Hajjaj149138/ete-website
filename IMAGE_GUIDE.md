# 🖼️ ইমেজ কীভাবে বদলাবে — সহজ গাইড

আগে ওয়েবসাইটের ছবিগুলো কোডের ভেতরে সরাসরি ইন্টারনেট লিংক (Unsplash, Wikipedia, ইত্যাদি)
হিসেবে বসানো ছিল। এখন **সব ছবি ওয়েবসাইটের নিজের ফোল্ডারে** (`public/images/`) রাখা হয়েছে,
তাই এখন থেকে ছবি বদলাতে কোড ছোঁয়ার দরকার নেই — শুধু ফাইল **replace** (একই নামে ওভাররাইট) করলেই হবে।

⚠️ **এই মুহূর্তে সব ফোল্ডারে placeholder (নমুনা) ছবি বসানো আছে** — নীল/বেগুনি ব্যাকগ্রাউন্ডে
ক্যামেরা আইকন আর ফাইলের নাম লেখা। ওয়েবসাইট এখনই পুরোপুরি কাজ করবে, শুধু আসল ছবি বসাতে
হবে replace করে।

---

## 📁 ফোল্ডার স্ট্রাকচার

```
public/images/
├── hero/
│   └── hero-main.jpg          → হোমপেজের একদম উপরের বড় ছবি (Students studying abroad)
│
├── destinations/               → প্রতিটা দেশের ছবি (হোমপেজ কার্ড + দেশের পেজের ব্যানার — একই ছবি দুই জায়গায় ব্যবহার হয়)
│   ├── australia.jpg
│   ├── sweden.jpg
│   ├── united-kingdom.jpg
│   ├── canada.jpg
│   ├── hungary.jpg
│   ├── lithuania.jpg
│   ├── malaysia.jpg
│   ├── austria.jpg
│   ├── denmark.jpg
│   ├── cyprus.jpg
│   ├── netherlands.jpg
│   ├── malta.jpg
│   ├── germany.jpg
│   └── default.jpg            → কোনো কারণে কোনো দেশের ছবি না পাওয়া গেলে এইটা দেখাবে (fallback)
│
├── testimonials/                → স্টুডেন্ট রিভিউ সেকশনের ছবি (হোমপেজ)
│   ├── urmi-hasan-shanta.jpg
│   ├── ferdous-woahid-raz.jpg
│   ├── ahsanul-islam.jpg
│   ├── miskatul-islam.jpg
│   ├── tanvir-ahmed.jpg
│   └── rafiq-hossain.jpg
│
├── team/
│   ├── leadership/               → About পেজের বোর্ড অফ ডিরেক্টরস
│   │   ├── md-zahid-hasan.jpg
│   │   ├── sadman-sakib-prottoy.jpg
│   │   └── nadeem-shawon.jpg
│   └── staff/                    → বাকি ১৭ জন টিম মেম্বারের ছবি (এখনো খালি — নিচে দেখো)
│
└── events/                       → Events পেজের কভার ছবি
    ├── evt-001.jpg  (Sweden University Fair)
    ├── evt-002.jpg  (Germany Opportunity Card)
    ├── evt-003.jpg  (Study in Australia)
    ├── evt-004.jpg  (UK Visa Masterclass)
    └── evt-005.jpg  (Canada PR Pathway)
```

---

## ✅ ছবি বদলানোর নিয়ম (৩ ধাপ)

1. উপরের লিস্ট দেখে বুঝে নাও কোন ছবিটা কোথায়।
2. তোমার নতুন ছবিটার নাম **ঠিক একই রাখো** (যেমন `australia.jpg`) এবং `.jpg` ফরম্যাটে সেভ করো।
3. `public/images/...` এর ভেতরে গিয়ে পুরনো ফাইলের জায়গায় নতুন ফাইলটা বসিয়ে দাও (replace/overwrite)।
   → সাইট রিডেপ্লয় (বা লোকালে রিফ্রেশ) করলেই নতুন ছবি দেখা যাবে। **কোনো কোড পরিবর্তন লাগবে না।**

**রেকমেন্ডেড সাইজ:**
- Destination ছবি (দেশের ছবি): 1600×900px (16:9)
- Hero ছবি: 1000×800px
- Testimonial ছবি: 400×400px (স্কয়ার, মুখের ছবি)
- Leadership/Staff ছবি: 500×600px (পোর্ট্রেট)
- Event কভার ছবি: 800×500px

সাইজ হুবহু না মিললেও সমস্যা নেই — ছবিগুলো অটো ক্রপ হয়ে বসবে, কিন্তু কাছাকাছি অনুপাত (aspect ratio) রাখলে ছবি সুন্দর দেখাবে।

---

## 👥 বাকি ১৭ জন টিম মেম্বারের ছবি যোগ করতে

`src/data/content.ts` ফাইলে `aboutData.team` এর ভেতরে প্রতিটা মেম্বারের জন্য এখন কোনো ছবি নেই
(এখন initials/অক্ষরের একটা সুন্দর অ্যাভাটার দেখায়, যেটা খারাপ দেখায় না)। ছবি যোগ করতে:

1. ছবিটা `public/images/team/staff/` ফোল্ডারে রাখো, যেমন `jamal.jpg`
2. `content.ts` তে সেই মেম্বারের লাইনে `photo: "/images/team/staff/jamal.jpg"` যোগ করো

```ts
{ name: "Mr. Jamal", role: "Lead Consultant", photo: "/images/team/staff/jamal.jpg", nickname: "The Genie", trait: "Wisdom & Warmth" },
```

---

## ℹ️ যেগুলো ইচ্ছাকৃতভাবে বাইরের লিংক রাখা হয়েছে (বদলাইনি)

- **দেশের পতাকা (flags)** — `flagcdn.com` থেকে আসে, এটা একটা ফ্রি ফ্ল্যাগ আইকন সার্ভিস, নিজের ছবি
  বসানোর দরকার নেই।
- **পার্টনার ইউনিভার্সিটির লোগো** (TU Munich, Vilnius University ইত্যাদি ~২২টা) — এগুলো
  Wikipedia/Seeklogo থেকে আসা অফিসিয়াল ইউনিভার্সিটি লোগো। চাইলে পরে এগুলোও লোকাল ফোল্ডারে
  আনা যাবে (`src/app/page.tsx` এর "University Partners Carousel" সেকশনে) — এখন বলো লাগলে এটাও করে দিচ্ছি।
- **YouTube ভিডিও থাম্বনেইল** — এগুলো অটোমেটিক ইউটিউব থেকে জেনারেট হয়, ভিডিও আইডি বদলালে
  থাম্বনেইলও এমনিতেই বদলে যাবে।

---

## 🎯 Sanity CMS (আরও প্রফেশনাল অপশন)

এই প্রজেক্টে `SANITY_SETUP_GUIDE.md` নামে আরেকটা গাইড আছে — সেটা দিয়ে ওয়েবসাইট থেকেই
(কোড না ছুঁয়ে, `easytoeurope.com/studio` লগইন করে) ছবি আপলোড/বদলানো যায়। এখন তুমি "সহজ"
(লোকাল ফাইল) পদ্ধতি বেছে নিয়েছ, কিন্তু ভবিষ্যতে চাইলে Sanity ঠিকভাবে কানেক্ট করে দিতে পারি —
তখন ওয়েবসাইট থেকেই সরাসরি ছবি আপলোড করা যাবে, কোনো ডেভেলপার লাগবে না।
