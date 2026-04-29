"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft, ArrowRight, BookOpen, DollarSign, Clock,
  CalendarDays, CheckCircle, ChevronDown, GraduationCap,
  Briefcase, Globe, MessageCircle, Star, MapPin,
} from "lucide-react";
import { destinations, getFlagUrl, siteConfig } from "@/data/content";
import ConsultationButton from "@/components/ui/ConsultationButton";

/* ─── Hero images per country ────────────────────────────────── */
const HERO_IMG: Record<string, string> = {
  "australia":      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1400&q=80&auto=format&fit=crop",
  "sweden":         "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1400&q=80&auto=format&fit=crop",
  "united-kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80&auto=format&fit=crop",
  "canada":         "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1400&q=80&auto=format&fit=crop",
  "hungary":        "https://images.unsplash.com/photo-1551867633-194f125bddfa?w=1400&q=80&auto=format&fit=crop",
  "lithuania":      "https://images.unsplash.com/photo-1577086664693-894d8405334a?w=1400&q=80&auto=format&fit=crop",
  "malaysia":       "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1400&q=80&auto=format&fit=crop",
  "austria":        "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1400&q=80&auto=format&fit=crop",
  "denmark":        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1400&q=80&auto=format&fit=crop",
  "cyprus":         "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=1400&q=80&auto=format&fit=crop",
  "netherlands":    "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1400&q=80&auto=format&fit=crop",
  "malta":          "https://images.unsplash.com/photo-1555990538-c3fe2de8bfb9?w=1400&q=80&auto=format&fit=crop",
};

/* ─── Extended data per country ─────────────────────────────── */
const EXTRA: Record<string, any> = {
  australia: {
    capital:"Canberra", language:"English", currency:"AUD (A$)", population:"26 Million",
    living:{ accommodation:"AUD 800–1,500/mo", food:"AUD 300–500/mo", transport:"AUD 80–150/mo", total:"AUD 1,500–2,500/mo" },
    workDuring:"48 hrs/fortnight during study · Unlimited during holidays",
    postStudy:"Subclass 485 Graduate Visa — 2 to 4 years",
    programs:[{l:"Foundation",d:"1 Year",i:"🏫"},{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1.5–2 Years",i:"📜"},{l:"PhD",d:"3–5 Years",i:"🔬"},{l:"Diploma",d:"1–2 Years",i:"📋"}],
    langReq:[
      {lv:"Foundation",    ie:"5.5", tf:"60",  pt:"42", extra:""},
      {lv:"Bachelor",      ie:"6.0", tf:"72",  pt:"50", extra:"One Skill Retake allowed"},
      {lv:"Master",        ie:"6.5", tf:"80",  pt:"58", extra:""},
      {lv:"PhD",           ie:"6.5–7.0", tf:"90", pt:"65", extra:""},
    ],
    docs:["Valid passport (6+ months validity)","Confirmation of Enrolment (CoE) from university","Genuine Temporary Entrant (GTE) statement","Bank statement or financial sponsor letter","IELTS / PTE / TOEFL certificate","Overseas Student Health Cover (OSHC) — mandatory","Police clearance certificate (some courses)"],
    scholarships:[
      {n:"Australia Awards",       d:"Fully-funded by Australian Govt — tuition, living, airfare. For developing nations."},
      {n:"Destination Australia",  d:"AUD 15,000/year for students studying in regional Australia."},
      {n:"University Merit Awards",d:"20–50% tuition reduction at most Group of Eight (Go8) universities."},
    ],
    faqs:[
      {q:"Is IELTS mandatory for Australia?",        a:"Most universities require IELTS 6.0–7.0. PTE, TOEFL and Duolingo are also accepted. One Skill Retake (OSR) is now allowed for student visa."},
      {q:"How long does the student visa take?",     a:"Subclass 500 student visa takes 4–8 weeks. Apply immediately after receiving your Confirmation of Enrolment (CoE)."},
      {q:"Can I work while studying in Australia?",  a:"Yes — 48 hours/fortnight during semester and unlimited hours during official holidays. Subclass 485 gives 2–4 years full work rights after graduation."},
      {q:"What is the cost of living in Australia?", a:"Approximately AUD 1,500–2,500/month including accommodation, food, transport and personal expenses. Regional cities are 30–40% cheaper than Sydney/Melbourne."},
    ],
  },
  sweden: {
    capital:"Stockholm", language:"Swedish / English", currency:"SEK (Swedish Krona)", population:"10.5 Million",
    living:{ accommodation:"SEK 4,000–8,000/mo", food:"SEK 2,000–3,500/mo", transport:"SEK 500–900/mo", total:"SEK 8,000–13,000/mo" },
    workDuring:"Unlimited hours — NO restrictions for international students",
    postStudy:"12-month Job-Search Residence Permit after graduation",
    programs:[{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"3–5 Years",i:"🔬"},{l:"Exchange",d:"1 Semester",i:"🔄"}],
    langReq:[
      {lv:"Bachelor", ie:"6.0",  tf:"72",  pt:"50", extra:""},
      {lv:"Master",   ie:"6.5",  tf:"90",  pt:"58", extra:""},
      {lv:"PhD",      ie:"7.0",  tf:"100", pt:"65", extra:""},
    ],
    docs:["Valid passport","University Letter of Acceptance","Proof of funds (SEK 8,500/month for duration)","IELTS/TOEFL certificate","Completed Migrationsverket online application","Health insurance (recommended)"],
    scholarships:[
      {n:"Sweden Institute (SI) Global Scholarship", d:"Fully-funded: tuition + SEK 11,000/month stipend + travel grant. Apply by 15 Feb."},
      {n:"SI Scholarships for Global Professionals",  d:"For applicants with 3+ years work experience. Includes living allowance."},
      {n:"University Tuition Waivers",               d:"Many Swedish universities offer 25–100% tuition waivers for high-scoring applicants."},
    ],
    faqs:[
      {q:"Are there fully-funded scholarships?",        a:"Yes — the Sweden Institute (SI) Global Scholarship covers full tuition + SEK 11,000/month stipend + travel grant. Deadline: 15 February annually."},
      {q:"Can I work unlimited hours in Sweden?",       a:"Yes — Sweden places NO restrictions on working hours for international students. You can work full-time alongside your studies."},
      {q:"How long does the residence permit take?",    a:"2–4 months via Migrationsverket. Apply as soon as you receive your Letter of Acceptance."},
      {q:"What post-study option is available?",        a:"After graduation, apply for a 12-month extension to search for employment or launch a startup in Sweden."},
    ],
  },
  "united-kingdom": {
    capital:"London", language:"English", currency:"GBP (£)", population:"67 Million",
    living:{ accommodation:"GBP 600–1,200/mo", food:"GBP 200–350/mo", transport:"GBP 100–200/mo", total:"GBP 1,200–2,000/mo" },
    workDuring:"20 hours/week during term · Full-time during official holidays",
    postStudy:"Graduate Route — 2 years (3 years for PhD graduates)",
    programs:[{l:"Foundation",d:"1 Year",i:"🏫"},{l:"Bachelor",d:"3 Years",i:"🎓"},{l:"Master",d:"1 Year",i:"📜"},{l:"PhD",d:"3–4 Years",i:"🔬"}],
    langReq:[
      {lv:"Foundation", ie:"5.0–5.5", tf:"60",  pt:"42", extra:""},
      {lv:"Bachelor",   ie:"6.0",     tf:"72",  pt:"50", extra:"TB test required for BD nationals"},
      {lv:"Master",     ie:"6.5",     tf:"90",  pt:"58", extra:""},
      {lv:"PhD",        ie:"7.0",     tf:"100", pt:"65", extra:""},
    ],
    docs:["Valid passport","Confirmation of Acceptance for Studies (CAS) number","Bank statement — £1,023/month (London) or £820/month (outside London)","IELTS / PTE / TOEFL certificate","TB (Tuberculosis) test certificate — mandatory for Bangladesh","ATAS clearance (science/engineering subjects)"],
    scholarships:[
      {n:"Chevening Scholarship",     d:"UK Government's flagship — fully-funded 1-year Master's including return flights. Very competitive."},
      {n:"Commonwealth Scholarship",  d:"For students from Commonwealth nations. Covers tuition, living allowance & travel."},
      {n:"University Excellence Awards",d:"50% to full tuition scholarships available at Russell Group universities."},
    ],
    faqs:[
      {q:"Do Bangladesh students need a TB test?",  a:"Yes — TB (Tuberculosis) test is mandatory for Bangladesh passport holders applying for a UK student visa. Get it done at an approved UKVI clinic."},
      {q:"How long is visa processing?",            a:"UK Student visa takes approximately 3 weeks. You can apply up to 6 months before your course start date."},
      {q:"What is the UK Graduate Route?",          a:"After completing a UK degree, stay 2 years (3 for PhD) to work at any skill level — no employer sponsorship needed."},
      {q:"Can I bring family to the UK?",           a:"Postgraduate students on government-funded programs may bring dependants. Restrictions apply for undergraduates from 2024."},
    ],
  },
  canada: {
    capital:"Ottawa", language:"English / French", currency:"CAD (C$)", population:"38 Million",
    living:{ accommodation:"CAD 700–1,400/mo", food:"CAD 300–500/mo", transport:"CAD 80–150/mo", total:"CAD 1,500–2,500/mo" },
    workDuring:"20 hours/week off-campus · Full-time during scheduled breaks",
    postStudy:"PGWP up to 3 years — clear pathway to Permanent Residency (PR)",
    programs:[{l:"Diploma",d:"1–3 Years",i:"📋"},{l:"Bachelor",d:"4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"4–6 Years",i:"🔬"}],
    langReq:[
      {lv:"Diploma",  ie:"6.0",     tf:"70",  pt:"50", extra:"SDS route available"},
      {lv:"Bachelor", ie:"6.0–6.5", tf:"80",  pt:"55", extra:""},
      {lv:"Master",   ie:"6.5",     tf:"90",  pt:"58", extra:""},
      {lv:"PhD",      ie:"7.0",     tf:"100", pt:"65", extra:""},
    ],
    docs:["Valid passport","Letter of Acceptance from a Designated Learning Institution (DLI)","Proof of funds (CAD 10,000+ after first year fees)","IELTS Academic 6.0+ (SDS route)","Biometrics enrollment appointment","Statement of Purpose (SOP)","Medical exam (if requested by IRCC)"],
    scholarships:[
      {n:"Vanier Canada Graduate Scholarships",  d:"CAD 50,000/year for 3 years — highly competitive doctoral scholarship."},
      {n:"Ontario Trillium Scholarship (OTS)",   d:"CAD 40,000/year for international PhD students at Ontario universities."},
      {n:"University Merit Awards",              d:"CAD 5,000–20,000 partial scholarships available at most Canadian universities."},
    ],
    faqs:[
      {q:"What is the PGWP and how long is it?",        a:"Post-Graduation Work Permit lets you work anywhere in Canada for up to 3 years after graduating from an eligible DLI program. Duration depends on program length."},
      {q:"Can international students get PR?",           a:"Yes — Express Entry, Provincial Nominee Program (PNP), and Canadian Experience Class are well-established pathways to Permanent Residency for graduates."},
      {q:"How long does Canadian study permit take?",    a:"Usually 8–12 weeks. The Student Direct Stream (SDS) can reduce this to approximately 20 days for eligible countries including Bangladesh."},
      {q:"Is IELTS required for SDS?",                  a:"Yes — IELTS Academic 6.0 overall (no band below 6.0) is required for the faster Student Direct Stream. Duolingo and TOEFL are accepted by many colleges."},
    ],
  },
  hungary: {
    capital:"Budapest", language:"Hungarian / English", currency:"EUR / HUF", population:"10 Million",
    living:{ accommodation:"EUR 200–450/mo", food:"EUR 150–250/mo", transport:"EUR 20–40/mo", total:"EUR 450–800/mo" },
    workDuring:"24 hours/week during semester · Full-time during official holidays",
    postStudy:"EU Job-Seeker Permit + full Schengen Zone travel access (26 countries)",
    programs:[{l:"Foundation",d:"1 Year",i:"🏫"},{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"4 Years",i:"🔬"}],
    langReq:[
      {lv:"Foundation", ie:"5.0",   tf:"60", pt:"40", extra:""},
      {lv:"Bachelor",   ie:"5.5",   tf:"70", pt:"50", extra:""},
      {lv:"Master",     ie:"6.0",   tf:"80", pt:"55", extra:""},
    ],
    docs:["Valid passport (6+ months validity)","University acceptance letter","Proof of financial means (EUR 450/month minimum)","IELTS/TOEFL certificate","Health insurance","Bank statement","Academic transcripts (with certified English translation)","2 passport-size photographs"],
    scholarships:[
      {n:"Stipendium Hungaricum",        d:"Fully-funded: tuition waiver + university dormitory + monthly allowance. Apply through Bangladesh government portal."},
      {n:"Hungarian Govt Merit Award",   d:"Partial tuition waiver for high-achieving international students in priority fields."},
      {n:"University Tuition Discounts", d:"Several Hungarian universities offer 20–40% tuition reduction for early or high-scoring applicants."},
    ],
    faqs:[
      {q:"What is Stipendium Hungaricum?",        a:"A fully-funded Hungarian Government scholarship covering full tuition + dormitory accommodation + monthly allowance. Apply through the official Bangladesh government scholarship portal."},
      {q:"Is Hungary very affordable?",           a:"Yes — tuition EUR 2,000–8,000/year and living costs only EUR 450–800/month. Among the most affordable EU study destinations in Europe."},
      {q:"Do I get Schengen Zone access?",        a:"Yes — Hungarian residence permit gives access to all 26 Schengen countries. You can travel freely across Europe during your entire study period."},
      {q:"Are programs available in English?",    a:"Yes — many universities offer fully English-medium programs in medicine, dentistry, engineering, IT, and business administration."},
    ],
  },
  lithuania: {
    capital:"Vilnius", language:"Lithuanian / English", currency:"EUR (€)", population:"2.8 Million",
    living:{ accommodation:"EUR 150–350/mo", food:"EUR 100–200/mo", transport:"EUR 20–35/mo", total:"EUR 350–650/mo" },
    workDuring:"20 hours/week during study · Full-time during official vacations",
    postStudy:"Full EU work rights — access to all 27 EU country job markets",
    programs:[{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"3–4 Years",i:"🔬"}],
    langReq:[
      {lv:"Bachelor", ie:"5.5", tf:"72", pt:"50", extra:""},
      {lv:"Master",   ie:"6.0", tf:"80", pt:"55", extra:""},
    ],
    docs:["Valid passport","University acceptance letter","Proof of financial means (EUR 350/month)","IELTS/TOEFL certificate","Health insurance","Academic transcripts (officially translated)","2 passport-size photographs"],
    scholarships:[
      {n:"Lithuanian Govt Scholarship",    d:"Covers partial tuition for non-EU students in priority fields of study."},
      {n:"University Merit Scholarships",  d:"20–50% tuition reduction based on academic performance at application."},
      {n:"Erasmus+ Mobility Grants",       d:"Funding for exchange semesters at EU partner universities."},
    ],
    faqs:[
      {q:"Is Lithuania a full EU member?",    a:"Yes — full EU member since 2004. Graduates receive EU-recognized qualifications and complete EU work and travel rights across all 27 EU member states."},
      {q:"How affordable is Lithuania?",      a:"Very affordable — tuition EUR 1,500–5,000/year and monthly living EUR 350–650. One of the cheapest EU destinations for a genuine European education."},
      {q:"Are programs in English?",          a:"Yes — many Bachelor and Master programs are fully in English. No Lithuanian language requirement for English-medium programs."},
      {q:"Can I travel across Europe?",       a:"Yes — Lithuanian residence permit includes full Schengen access for travel across 26 European countries throughout your study period."},
    ],
  },
  malaysia: {
    capital:"Kuala Lumpur", language:"Malay / English", currency:"MYR (RM)", population:"33 Million",
    living:{ accommodation:"MYR 500–1,200/mo", food:"MYR 400–700/mo", transport:"MYR 80–150/mo", total:"MYR 1,500–2,500/mo" },
    workDuring:"20 hours/week with university permission during semester",
    postStudy:"Job Seeker Pass + ASEAN job market access + PR pathway exists",
    programs:[{l:"Foundation",d:"1 Year",i:"🏫"},{l:"Diploma",d:"2–3 Years",i:"📋"},{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"}],
    langReq:[
      {lv:"Diploma",  ie:"5.0",     tf:"60", pt:"42", extra:""},
      {lv:"Bachelor", ie:"5.5–6.0", tf:"72", pt:"50", extra:""},
      {lv:"Master",   ie:"6.0",     tf:"80", pt:"55", extra:""},
    ],
    docs:["Valid passport (18+ months validity for student pass)","University offer letter","EMGS online health screening","Financial evidence (MYR 15,000+ recommended)","Academic transcripts","IELTS/TOEFL certificate","2 passport photographs"],
    scholarships:[
      {n:"Malaysia International Scholarship (MIS)", d:"Full scholarship for postgraduate — covers tuition, monthly stipend and travel allowance."},
      {n:"Malaysian Technical Cooperation Programme",d:"Government-funded for diploma & degree students from developing countries."},
      {n:"University Merit Awards",                  d:"20–50% tuition reduction at private universities including Monash Malaysia and Nottingham Malaysia."},
    ],
    faqs:[
      {q:"Are Malaysian branch campus degrees recognized?", a:"Yes — Monash Malaysia, Nottingham Malaysia, and Curtin Malaysia grant identical degrees to their Australian/UK home campuses. Globally recognized worldwide."},
      {q:"Is English the teaching language?",              a:"Yes — English is the medium of instruction for virtually all degree programs at Malaysian private universities."},
      {q:"How does cost compare to UK/Australia?",         a:"Much more affordable — living costs USD 400–700/month and tuition 50–70% less than studying at the home campus in Australia or UK."},
      {q:"Is Malaysia welcoming for Bangladeshi students?", a:"Very — Malaysia is safe, multicultural with a large Muslim population, halal food everywhere, and very familiar environment for Bangladeshi students."},
    ],
  },
  austria: {
    capital:"Vienna", language:"German / English", currency:"EUR (€)", population:"9 Million",
    living:{ accommodation:"EUR 350–700/mo", food:"EUR 200–350/mo", transport:"EUR 50–100/mo", total:"EUR 700–1,200/mo" },
    workDuring:"20 hours/week during semester",
    postStudy:"12-month Red-White-Red Card (Job Seeker) after graduation",
    programs:[{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"3–4 Years",i:"🔬"}],
    langReq:[
      {lv:"Bachelor (English)", ie:"6.0",  tf:"80",  pt:"55", extra:""},
      {lv:"Bachelor (German)",  ie:"—",    tf:"—",   pt:"—",  extra:"B2/C1 German required"},
      {lv:"Master",             ie:"6.5",  tf:"90",  pt:"58", extra:""},
    ],
    docs:["Valid passport","University admission letter","German B2/C1 certificate (German-taught programs)","IELTS/TOEFL (English-taught programs)","Proof of funds (EUR 700/month)","Health insurance","Lichtbildausweis (photo ID)"],
    scholarships:[
      {n:"OeAD Scholarship",   d:"Austrian Government scholarship — covers tuition + monthly stipend for Master & PhD students."},
      {n:"Ernst Mach Grant",   d:"For research visits and short-term programs at Austrian universities."},
      {n:"Erasmus+ Funding",   d:"Available for partner institution exchange programs across Austria."},
    ],
    faqs:[
      {q:"Do I need German to study in Austria?",    a:"For English-taught Master programs — no. However, German B2/C1 is required for most Bachelor programs and greatly improves career prospects."},
      {q:"Is Vienna the world's most livable city?", a:"Yes — Vienna has topped the Economist's Global Liveability Index for 6+ consecutive years for infrastructure, safety, healthcare, and culture."},
      {q:"Are public university fees very low?",     a:"Yes — just EUR 726 per semester for non-EU students. Among the very lowest tuition fees in the world for EU-standard education."},
      {q:"What is the Red-White-Red Card?",          a:"After graduation, apply for the 12-month Red-White-Red Card job seeker permit. You can work any job in Austria while searching for skilled employment."},
    ],
  },
  denmark: {
    capital:"Copenhagen", language:"Danish / English", currency:"DKK (Danish Krone)", population:"5.9 Million",
    living:{ accommodation:"DKK 3,500–7,000/mo", food:"DKK 2,000–3,500/mo", transport:"DKK 400–800/mo", total:"DKK 7,000–12,000/mo" },
    workDuring:"20 hours/week · Full-time June, July & August",
    postStudy:"6-month Job Seeker Residence Permit after graduation",
    programs:[{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"2 Years",i:"📜"},{l:"PhD",d:"3 Years",i:"🔬"}],
    langReq:[
      {lv:"Bachelor", ie:"6.0–6.5", tf:"83", pt:"55", extra:""},
      {lv:"Master",   ie:"6.5–7.0", tf:"90", pt:"60", extra:""},
    ],
    docs:["Valid passport","University acceptance letter","Proof of funds (DKK 6,397/month minimum)","Health insurance","IELTS/TOEFL certificate","Academic transcripts","Completed residence permit application (Studieinfo.dk)"],
    scholarships:[
      {n:"Danish Government Scholarship",  d:"Covers full tuition + monthly living allowance for qualifying non-EU Master's students."},
      {n:"Nordplus Scholarship",           d:"For Nordic/Baltic mobility — exchange student funding across Nordic countries."},
      {n:"University Excellence Awards",   d:"Merit-based partial scholarships at DTU, Aarhus University & Copenhagen Business School."},
    ],
    faqs:[
      {q:"Is Denmark very expensive to live in?",     a:"Cost of living is higher than most EU countries, but Danish student jobs pay very well (DKK 130–180/hour) which significantly offsets living costs."},
      {q:"Are programs in English?",                  a:"Virtually all Master's programs and all PhD programs are in English. Some Bachelor programs are also offered in English."},
      {q:"Are government scholarships available?",    a:"Yes — the Danish Government Scholarship covers full tuition and provides a monthly living allowance for qualifying non-EU Master's students."},
      {q:"Is Denmark safe?",                          a:"Denmark consistently ranks in the top 5 safest and happiest countries globally according to the Global Peace Index and World Happiness Report."},
    ],
  },
  cyprus: {
    capital:"Nicosia", language:"Greek / English", currency:"EUR (€)", population:"1.3 Million",
    living:{ accommodation:"EUR 250–500/mo", food:"EUR 150–300/mo", transport:"EUR 30–60/mo", total:"EUR 500–900/mo" },
    workDuring:"20 hours/week during study · Full-time during official summer periods",
    postStudy:"EU Residence & Work Permit available after graduation",
    programs:[{l:"Foundation",d:"1 Year",i:"🏫"},{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"3–4 Years",i:"🔬"}],
    langReq:[
      {lv:"Foundation", ie:"5.0",     tf:"60", pt:"42", extra:""},
      {lv:"Bachelor",   ie:"5.5–6.0", tf:"72", pt:"50", extra:""},
      {lv:"Master",     ie:"6.0–6.5", tf:"80", pt:"55", extra:""},
    ],
    docs:["Valid passport","University acceptance letter","Proof of financial means (EUR 500/month)","Health insurance","IELTS/TOEFL certificate","Academic transcripts","Temporary Residence Permit (MEU1) application form","2 passport photographs"],
    scholarships:[
      {n:"Cyprus State Scholarship Foundation", d:"Partial tuition support for international students in priority study areas."},
      {n:"University of Cyprus Merit Award",    d:"20–50% tuition waiver based on academic excellence at time of application."},
      {n:"Neapolis University Pafos Scholarships",d:"Generous scholarship programs including full tuition waivers for top-scoring students."},
    ],
    faqs:[
      {q:"Is Cyprus a full EU member?",              a:"Yes — full EU member since 2004. A Cyprus degree gives EU-recognized qualifications and a clear pathway to EU residency and work rights."},
      {q:"Is English widely spoken in Cyprus?",      a:"Yes — English is practically an official language in Cyprus. Virtually all university programs are in English and everyday life is easily navigated in English."},
      {q:"How affordable is studying in Cyprus?",    a:"Very affordable — tuition EUR 3,000–8,000/year and living EUR 500–900/month. One of the most affordable EU destinations with Mediterranean lifestyle."},
      {q:"What is the weather like for BD students?",a:"Cyprus enjoys 330+ sunshine days per year with a warm Mediterranean climate. Very comfortable for students from South Asian countries."},
    ],
  },
  netherlands: {
    capital:"Amsterdam", language:"Dutch / English", currency:"EUR (€)", population:"17.8 Million",
    living:{ accommodation:"EUR 600–1,100/mo", food:"EUR 250–400/mo", transport:"EUR 80–130/mo", total:"EUR 1,000–1,700/mo" },
    workDuring:"16 hours/week during study · Full-time June–August",
    postStudy:"1-year Orientation Year (Zoekjaar) visa after graduation",
    programs:[{l:"Bachelor",d:"3 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"4 Years",i:"🔬"}],
    langReq:[
      {lv:"Bachelor", ie:"6.0–6.5", tf:"80", pt:"55", extra:""},
      {lv:"Master",   ie:"6.5–7.0", tf:"90", pt:"60", extra:""},
    ],
    docs:["Valid passport","University acceptance letter (Toelatingsbeschikking)","Proof of funds (EUR 1,000/month)","IELTS/TOEFL certificate","MVV entry visa (from Netherlands Embassy)","Health insurance","Diploma apostille (certified)"],
    scholarships:[
      {n:"Holland Scholarship",    d:"EUR 5,000 one-time award for Bachelor or Master non-EEA students from partner universities."},
      {n:"Orange Tulip Scholarship",d:"Varies by university — EUR 5,000 to full tuition waivers for top applicants."},
      {n:"Erasmus Mundus",         d:"Joint degree scholarships covering full tuition + EUR 1,000/month living stipend."},
    ],
    faqs:[
      {q:"Is Netherlands the most English-friendly EU country?",a:"Yes — 2,100+ English-taught degree programs, making it the #1 EU destination for English-medium international education."},
      {q:"What is the Orientation Year (Zoekjaar)?",            a:"After graduating from a Dutch degree, apply for a 1-year Zoekjaar permit to find employment at any Dutch company at any salary level."},
      {q:"What scholarships are available?",                    a:"Holland Scholarship (EUR 5,000), Orange Tulip Scholarship, Erasmus Mundus, and many university-specific grants. Apply 6–9 months before your intake."},
      {q:"Is the Netherlands safe?",                            a:"Yes — consistently ranked top 5 safest countries globally. Very welcoming, diverse, and internationally oriented society."},
    ],
  },
  malta: {
    capital:"Valletta", language:"Maltese / English", currency:"EUR (€)", population:"0.5 Million",
    living:{ accommodation:"EUR 300–600/mo", food:"EUR 200–350/mo", transport:"EUR 25–50/mo", total:"EUR 600–1,100/mo" },
    workDuring:"20 hours/week during study",
    postStudy:"EU Work Permit and Residency Pathways available after graduation",
    programs:[{l:"Foundation",d:"1 Year",i:"🏫"},{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"}],
    langReq:[
      {lv:"Bachelor", ie:"5.5–6.0", tf:"72", pt:"50", extra:""},
      {lv:"Master",   ie:"6.0–6.5", tf:"80", pt:"55", extra:""},
    ],
    docs:["Valid passport","University acceptance letter","Proof of funds (EUR 600/month)","Health insurance","IELTS/TOEFL certificate","Academic transcripts","Single Permit application (Identity Malta Agency)"],
    scholarships:[
      {n:"Malta Government Scholarship Scheme", d:"Partial funding for international students in STEM and Business fields."},
      {n:"University of Malta Bursaries",       d:"EUR 1,000–5,000 bursaries based on financial need and academic merit."},
      {n:"MCAST International Awards",          d:"Vocational education partial scholarships for technical and applied programs."},
    ],
    faqs:[
      {q:"Is Malta a full EU member?",              a:"Yes — Malta has been a full EU member since 2004. Degrees are fully EU-recognized and accepted worldwide."},
      {q:"Is English an official language of Malta?",a:"Yes — Malta is one of only two EU countries where English is a national official language alongside Maltese. Life and study is entirely in English."},
      {q:"How affordable is Malta vs other EU?",    a:"Tuition EUR 5,000–12,000/year and living EUR 600–1,100/month — significantly cheaper than Germany, Netherlands or UK for equivalent EU education."},
      {q:"What is the climate like in Malta?",      a:"Malta enjoys 300+ sunny days per year, warm Mediterranean climate, and very mild winters. Ideal for students from tropical countries like Bangladesh."},
    ],
  },
};

/* ─── Visa process steps ──────────────────────────────────────── */
const VISA_STEPS = [
  {n:1, i:"💬", t:"Free Consultation",   d:"Profile assessment and best-fit destination advice."},
  {n:2, i:"🎓", t:"University Selection", d:"Shortlist universities that match your goals & budget."},
  {n:3, i:"📝", t:"Application Filing",  d:"Complete, error-free application submitted on your behalf."},
  {n:4, i:"📨", t:"Offer Letter",        d:"Receive and accept your official university offer letter."},
  {n:5, i:"📋", t:"Visa Documentation",  d:"Every required document compiled and checked with zero errors."},
  {n:6, i:"🏛️", t:"Visa Submission",    d:"Professionally submitted and tracked until decision."},
  {n:7, i:"✅", t:"Visa Approval",       d:"Your visa is approved — we celebrate this moment with you!"},
  {n:8, i:"✈️", t:"Pre-Departure Brief", d:"Travel, accommodation, arrival guide & ongoing support."},
];

const WHY_ETE = [
  {i:"🎯", t:"Expert Matching",      d:"We match your profile to universities with the highest acceptance chance."},
  {i:"📝", t:"Error-Free Applications",d:"End-to-end application preparation with zero errors guaranteed."},
  {i:"💰", t:"Scholarship Hunting",  d:"We identify and apply for every scholarship your profile qualifies for."},
  {i:"🛂", t:"Visa Expertise",       d:"Certified visa specialists ensure every document is perfect."},
  {i:"🎤", t:"Interview Coaching",   d:"Mock visa and university interview sessions for full confidence."},
  {i:"✈️", t:"Pre-Departure Care",   d:"Travel planning, accommodation search and arrival day support."},
];

const TOC_ITEMS = [
  {id:"overview",      num:"01", icon:"🌍", label:"Overview"},
  {id:"why-study",     num:"02", icon:"⭐", label:"Why Study"},
  {id:"cities",        num:"03", icon:"🏙️", label:"Top Cities"},
  {id:"courses",       num:"04", icon:"📚", label:"Courses"},
  {id:"universities",  num:"05", icon:"🏛️", label:"Universities"},
  {id:"programs",      num:"06", icon:"🎓", label:"Programs"},
  {id:"intakes",       num:"07", icon:"📅", label:"Intakes"},
  {id:"requirements",  num:"08", icon:"📋", label:"Requirements"},
  {id:"cost",          num:"09", icon:"💰", label:"Cost"},
  {id:"work-visa",     num:"10", icon:"💼", label:"Work & Visa"},
  {id:"scholarships",  num:"11", icon:"🏆", label:"Scholarships"},
  {id:"why-ete",       num:"12", icon:"🤝", label:"Why ETE"},
  {id:"faq",           num:"13", icon:"❓", label:"FAQ"},
];

/* ══════════════════════════════════════════════════════════════ */
export default function CountryPageClient() {
  const { slug } = useParams() as { slug: string };
  const dest      = destinations.find(d => d.slug === slug);
  const ex        = EXTRA[slug];
  const [activeSection, setActiveSection] = useState("overview");
  const [openFaq,        setOpenFaq]      = useState<number|null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement|null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.getAttribute("data-sec");
          if (id) setActiveSection(id);
        }
      }),
      { threshold: 0.15, rootMargin: "-80px 0px -55% 0px" }
    );
    Object.values(sectionRefs.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, [dest]);

  const setRef   = (id: string) => (el: HTMLElement|null) => { sectionRefs.current[id] = el; };
  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!dest) return (
    <div style={{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16}}>
      <div style={{fontSize:"3rem"}}>🌍</div>
      <h2>Destination not found</h2>
      <Link href="/study-destinations" style={{color:"var(--brand)"}}>← Back to Destinations</Link>
    </div>
  );

  const others = destinations.filter(d => d.slug !== slug).slice(0, 6);
  const EU_SLUGS = ["germany","sweden","hungary","lithuania","austria","denmark","cyprus","netherlands","malta"];

  return (
    <div className="cp-page-root">

      {/* ══ HERO ══ */}
      <section className="cp-hero-v2" style={{backgroundImage:`url(${HERO_IMG[slug] || "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=80"})`}}>
        <div className="cp-hero-overlay"/>
        <div className="cp-hero-color-tint" style={{background:`${dest.color}44`}}/>
        <div className="cp-hero-texture"/>
        <div className="container-xl">
          <Link href="/study-destinations" className="cp-back-btn-v2">
            <ArrowLeft size={13}/> All Destinations
          </Link>
          <div className="cp-hero-body">
            {/* Left */}
            <div className="cp-hero-left">
              <div className="cp-hero-flag-wrap">
                <img src={getFlagUrl(slug, "160x120")} width={80} height={60} alt={dest.name} className="cp-hero-flag-img"/>
              </div>
              <div className="cp-hero-eyebrow">Study Abroad Guide</div>
              <h1 className="cp-hero-h1">Study in <span style={{color: dest.color === "#FFFFFF" ? "#FFD700" : dest.color}}>{dest.name}</span></h1>
              <p className="cp-hero-desc">{dest.tagline}</p>
              <div className="cp-hero-pills-row">
                {[
                  {icon:"⏱️", label:"Visa Time",     val: dest.visa},
                  {icon:"🎓", label:"IELTS Min",     val: `${dest.ielts.min}+`},
                  {icon:"✅", label:"Success Rate",  val: "98%"},
                  {icon:"🌍", label:"EU Member",     val: EU_SLUGS.includes(slug) ? "Yes ✓" : "No"},
                ].map((p,i) => (
                  <div key={i} className="cp-hero-pill-v2">
                    <span className="cp-hero-pill-icon">{p.icon}</span>
                    <div>
                      <div className="cp-hero-pill-label">{p.label}</div>
                      <div className="cp-hero-pill-val">{p.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cp-hero-cta-row">
                <ConsultationButton label="Apply Now — Free" variant="accent" size="lg"/>
                <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I want to know about studying in ${dest.name}`} target="_blank" rel="noreferrer" className="cp-hero-wa-btn">
                  <MessageCircle size={15}/> WhatsApp
                </a>
              </div>
            </div>
            {/* Right: Quick Facts Card */}
            <div className="cp-hero-facts-card">
              <div className="cp-hero-facts-head">
                <span>📊 Quick Facts</span>
                <img src={getFlagUrl(slug,"40x30")} width={22} height={16} alt={dest.name} style={{borderRadius:3}}/>
              </div>
              {[
                {icon:"💰", label:"Annual Tuition",   val: dest.tuition},
                {icon:"🏠", label:"Monthly Living",   val: ex?.living?.total || "Contact us"},
                {icon:"💼", label:"Work Rights",      val: ex?.workDuring?.split("·")[0]?.trim() || "Part-time allowed"},
                {icon:"🎓", label:"Post-Study Visa",  val: ex?.postStudy?.split("—")[0]?.trim()?.split("(")[0]?.trim() || "Available"},
                {icon:"🏛️", label:"Partner Unis",    val: dest.uniCount || "Top universities"},
                {icon:"📅", label:"Main Intake",      val: "Sep / Jan — Feb"},
              ].map(({icon,label,val}) => (
                <div key={label} className="cp-facts-row">
                  <span className="cp-facts-icon">{icon}</span>
                  <span className="cp-facts-label">{label}</span>
                  <span className="cp-facts-val">{val}</span>
                </div>
              ))}
              <div className="cp-facts-badge" style={{background: dest.color}}>
                <Star size={12}/> 98% Visa Success Rate at Easy To Europe
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TWO-COLUMN: Sidebar + Content ══ */}
      <div className="container-xl cp-layout">

        {/* ── SIDEBAR ── */}
        <aside className="cp-sidebar">
          <div className="cp-sidebar-box">
            <div className="cp-sidebar-badge">
              <img src={getFlagUrl(slug,"40x30")} width={20} height={15} alt="" style={{borderRadius:2,flexShrink:0}}/>
              <span>Study in {dest.name}</span>
            </div>
            <div className="cp-sidebar-label">ON THIS PAGE</div>
            <nav className="cp-sidebar-nav">
              {TOC_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`cp-sidebar-btn${activeSection === item.id ? " cp-sidebar-btn--active" : ""}`}
                  style={activeSection === item.id ? {borderLeftColor: dest.color, color: dest.color} : {}}
                >
                  <span className="cp-sb-num">{item.num}</span>
                  <span className="cp-sb-icon">{item.icon}</span>
                  <span className="cp-sb-label">{item.label}</span>
                  {activeSection === item.id && <span className="cp-sb-dot" style={{background: dest.color}}/>}
                </button>
              ))}
            </nav>
            <div className="cp-sidebar-cta-box" style={{borderColor:`${dest.color}30`, background:`${dest.color}07`}}>
              <div className="cp-sidebar-cta-title">Ready to apply?</div>
              <div className="cp-sidebar-cta-sub">Get a free session with our {dest.name} specialist.</div>
              <ConsultationButton label="Book Free Session" variant="accent" size="sm"/>
            </div>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="cp-content">

          {/* Quick info bar */}
          {ex && (
            <div className="cp-quickbar">
              {[
                {icon:"🌍", label:"Country",    val: dest.name},
                {icon:"🏛️", label:"Capital",   val: ex.capital},
                {icon:"🗣️", label:"Language",  val: ex.language},
                {icon:"💴", label:"Currency",  val: ex.currency},
                {icon:"👥", label:"Population",val: ex.population},
                {icon:"📚", label:"Avg Tuition",val: dest.tuition.split("/")[0].trim()},
              ].map(({icon,label,val}) => (
                <div key={label} className="cp-quickbar-item">
                  <span className="cp-qb-icon">{icon}</span>
                  <span className="cp-qb-label">{label}</span>
                  <span className="cp-qb-val">{val}</span>
                </div>
              ))}
            </div>
          )}

          {/* 01 Overview */}
          <section ref={setRef("overview")} data-sec="overview" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head"><span className="cp-sec-num">01</span><h2>Overview</h2></div>
            <div className="cp-overview-grid">
              <p className="cp-body-text">{dest.overview}</p>
              {ex && (
                <div className="cp-overview-aside">
                  <div className="cp-aside-row"><Globe size={14} style={{color:dest.color,flexShrink:0}}/><span><strong>During Study:</strong> {ex.workDuring}</span></div>
                  <div className="cp-aside-row"><Briefcase size={14} style={{color:dest.color,flexShrink:0}}/><span><strong>Post-Study:</strong> {ex.postStudy}</span></div>
                  <div className="cp-aside-row"><CheckCircle size={14} style={{color:"#22c55e",flexShrink:0}}/><span><strong>IELTS Min:</strong> {dest.ielts.min}+ ({dest.ielts.note})</span></div>
                  <div className="cp-aside-row"><Clock size={14} style={{color:"#f59e0b",flexShrink:0}}/><span><strong>Visa Time:</strong> {dest.visa}</span></div>
                </div>
              )}
            </div>
          </section>

          {/* 02 Why Study */}
          <section ref={setRef("why-study")} data-sec="why-study" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head"><span className="cp-sec-num">02</span><h2>Why Study in {dest.name}?</h2></div>
            <div className="cp-highlights">
              {dest.highlights.map((h:string,i:number) => (
                <div key={i} className="cp-highlight-item">
                  <CheckCircle size={15} style={{color:"#22c55e",flexShrink:0,marginTop:2}}/>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 03 Cities */}
          <section ref={setRef("cities")} data-sec="cities" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head"><span className="cp-sec-num">03</span><h2>Top Student Cities</h2></div>
            <div className="cp-cities-grid">
              {(dest.cities as string[]).map((city,i) => (
                <div key={i} className="cp-city-card">
                  <div className="cp-city-num" style={{background:`${dest.color}20`,color:dest.color}}>{String(i+1).padStart(2,"0")}</div>
                  <div>
                    <div className="cp-city-name">{city}</div>
                    <div className="cp-city-desc">{ex?.cityDetails?.[i]?.d || `Major student city in ${dest.name}`}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 04 Courses */}
          <section ref={setRef("courses")} data-sec="courses" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head"><span className="cp-sec-num">04</span><h2>Popular Courses & Fields</h2></div>
            <div className="cp-courses-wrap">
              {(dest.courses as string[]).map((c,i) => (
                <div key={i} className="cp-course-chip">
                  <BookOpen size={12} style={{color:dest.color,flexShrink:0}}/>{c}
                </div>
              ))}
            </div>
          </section>

          {/* 05 Universities */}
          <section ref={setRef("universities")} data-sec="universities" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head"><span className="cp-sec-num">05</span><h2>Partner Universities</h2></div>
            <div className="cp-uni-list">
              {(dest.universities as any[]).map((u,i) => (
                <div key={i} className="cp-uni-row">
                  <div className="cp-uni-rank" style={{background:`${dest.color}18`,color:dest.color}}>#{u.rank||i+1}</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div className="cp-uni-name">{u.name}</div>
                    {u.spec && <div className="cp-uni-sub">{u.location} · {u.spec}</div>}
                  </div>
                  <GraduationCap size={14} style={{color:dest.color,opacity:.5,flexShrink:0}}/>
                </div>
              ))}
            </div>
          </section>

          {/* 06 Programs */}
          <section ref={setRef("programs")} data-sec="programs" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head"><span className="cp-sec-num">06</span><h2>Study Programs & Levels</h2></div>
            <div className="cp-programs-grid">
              {(ex?.programs || [{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"3–5 Years",i:"🔬"}]).map((p:any,i:number) => (
                <div key={i} className="cp-program-card">
                  <div className="cp-prog-icon">{p.i}</div>
                  <div className="cp-prog-level">{p.l}</div>
                  <div className="cp-prog-dur"><Clock size={11}/>{p.d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 07 Intakes */}
          <section ref={setRef("intakes")} data-sec="intakes" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head"><span className="cp-sec-num">07</span><h2>Intake Periods</h2></div>
            <div className="cp-intakes-grid">
              {(dest.intakes as any[]).map((intake,i) => (
                <div key={i} className="cp-intake-card" style={{borderColor:`${dest.color}30`,background:`${dest.color}06`}}>
                  <CalendarDays size={22} style={{color:dest.color,marginBottom:8}}/>
                  <div className="cp-intake-month">{typeof intake === "string" ? intake : intake.month}</div>
                  <div className="cp-intake-label">{typeof intake === "string" ? intake : intake.label}</div>
                  {typeof intake !== "string" && intake.deadline && (
                    <div className="cp-intake-deadline">📌 Deadline: {intake.deadline}</div>
                  )}
                  {typeof intake !== "string" && intake.note && (
                    <div className="cp-intake-note">💡 {intake.note}</div>
                  )}
                  <span className="cp-intake-open" style={{background:`${dest.color}22`,color:dest.color}}>Open</span>
                </div>
              ))}
            </div>
          </section>

          {/* 08 Requirements */}
          <section ref={setRef("requirements")} data-sec="requirements" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head"><span className="cp-sec-num">08</span><h2>Entry Requirements</h2></div>
            {ex?.langReq && (
              <div className="cp-table-wrap">
                <table className="cp-table">
                  <thead>
                    <tr>
                      <th>Program Level</th>
                      <th>IELTS</th>
                      <th>TOEFL iBT</th>
                      <th>PTE</th>
                      {ex.langReq[0]?.extra !== undefined && <th>Notes</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {ex.langReq.map((r:any,i:number) => (
                      <tr key={i}>
                        <td><strong>{r.lv}</strong></td>
                        <td><span className="cp-req-badge" style={{background:`${dest.color}18`,color:dest.color}}>{r.ie}</span></td>
                        <td>{r.tf}</td>
                        <td>{r.pt}</td>
                        {r.extra !== undefined && <td className="cp-table-note">{r.extra}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {ex?.docs && (
              <div className="cp-docs-box">
                <div className="cp-docs-title">📁 Required Documents Checklist</div>
                {ex.docs.map((doc:string,i:number) => (
                  <div key={i} className="cp-doc-row">
                    <CheckCircle size={13} style={{color:"#22c55e",flexShrink:0}}/>{doc}
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 09 Cost */}
          <section ref={setRef("cost")} data-sec="cost" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head"><span className="cp-sec-num">09</span><h2>Cost of Study & Living</h2></div>
            <div className="cp-cost-grid">
              <div className="cp-cost-card">
                <div className="cp-cost-head" style={{background:`${dest.color}10`,borderColor:`${dest.color}25`}}>
                  <DollarSign size={16} style={{color:dest.color}}/> Annual Tuition & Fees
                </div>
                <div className="cp-cost-row"><span>Tuition Range</span><strong>{dest.tuition}</strong></div>
                <div className="cp-cost-row"><span>IELTS Minimum</span><strong>{dest.ielts.min}+ ({dest.ielts.note})</strong></div>
                <div className="cp-cost-row"><span>Visa Processing</span><strong>{dest.visa}</strong></div>
              </div>
              {ex?.living && (
                <div className="cp-cost-card">
                  <div className="cp-cost-head" style={{background:"rgba(34,197,94,.06)",borderColor:"rgba(34,197,94,.18)"}}>
                    <MapPin size={16} style={{color:"#22c55e"}}/> Monthly Living Cost (Est.)
                  </div>
                  <div className="cp-cost-row"><span>🏠 Accommodation</span><strong>{ex.living.accommodation}</strong></div>
                  <div className="cp-cost-row"><span>🍽️ Food</span><strong>{ex.living.food}</strong></div>
                  <div className="cp-cost-row"><span>🚌 Transport</span><strong>{ex.living.transport}</strong></div>
                  <div className="cp-cost-row cp-cost-total"><span>💰 Total/Month</span><strong style={{color:"var(--gold)"}}>{ex.living.total}</strong></div>
                </div>
              )}
            </div>
          </section>

          {/* 10 Work & Visa */}
          <section ref={setRef("work-visa")} data-sec="work-visa" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head"><span className="cp-sec-num">10</span><h2>Work Rights & Visa Process</h2></div>
            {ex && (
              <div className="cp-work-cards">
                {[
                  {i:"💼", t:"During Study",    v: ex.workDuring},
                  {i:"🎓", t:"Post-Graduation", v: ex.postStudy},
                  {i:"⏱️", t:"Visa Processing", v: dest.visa},
                ].map((w,i) => (
                  <div key={i} className="cp-work-card">
                    <div className="cp-work-icon">{w.i}</div>
                    <div className="cp-work-title">{w.t}</div>
                    <div className="cp-work-val">{w.v}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="cp-timeline">
              {VISA_STEPS.map((s,i) => (
                <div key={i} className="cp-timeline-item">
                  <div className="cp-timeline-left">
                    <div className="cp-timeline-circle" style={{background:dest.color}}>{s.n}</div>
                    {i < VISA_STEPS.length-1 && <div className="cp-timeline-line"/>}
                  </div>
                  <div className="cp-timeline-body">
                    <span className="cp-timeline-icon">{s.i}</span>
                    <div>
                      <div className="cp-timeline-title">{s.t}</div>
                      <div className="cp-timeline-desc">{s.d}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 11 Scholarships */}
          <section ref={setRef("scholarships")} data-sec="scholarships" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head">
              <span className="cp-sec-num" style={{background:"rgba(234,179,8,.1)",color:"#854d0e",borderColor:"rgba(234,179,8,.25)"}}>11</span>
              <h2>Scholarships & Funding</h2>
            </div>
            <div className="cp-schol-list">
              {(ex?.scholarships || []).map((s:any,i:number) => (
                <div key={i} className="cp-schol-card">
                  <div className="cp-schol-emoji">🏆</div>
                  <div>
                    <div className="cp-schol-name">{s.n}</div>
                    <div className="cp-schol-desc">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 12 Why ETE */}
          <section ref={setRef("why-ete")} data-sec="why-ete" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head">
              <span className="cp-sec-num" style={{background:"rgba(201,168,76,.1)",color:"#92650a",borderColor:"rgba(201,168,76,.25)"}}>12</span>
              <h2>Why Choose Easy To Europe?</h2>
            </div>
            <div className="cp-why-grid">
              {WHY_ETE.map((c,i) => (
                <div key={i} className="cp-why-card">
                  <div className="cp-why-icon">{c.i}</div>
                  <div className="cp-why-title">{c.t}</div>
                  <div className="cp-why-desc">{c.d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 13 FAQ */}
          <section ref={setRef("faq")} data-sec="faq" className="cp-sec" style={{scrollMarginTop:90}}>
            <div className="cp-sec-head"><span className="cp-sec-num">13</span><h2>Frequently Asked Questions</h2></div>
            <div className="cp-faq-list">
              {(ex?.faqs || [
                {q:`Is IELTS mandatory for ${dest.name}?`,  a:`IELTS ${dest.ielts.min} is the standard. ${dest.ielts.note}.`},
                {q:"How long does the visa take?",           a:`Visa typically takes ${dest.visa}. Apply immediately after receiving your offer letter.`},
                {q:"What are the tuition fees?",             a:`Tuition ranges ${dest.tuition}. Scholarships can significantly reduce this cost.`},
              ]).map((f:any,i:number) => (
                <div key={i} className={`cp-faq-item${openFaq===i?" cp-faq-open":""}`}>
                  <button className="cp-faq-q" onClick={() => setOpenFaq(openFaq===i?null:i)}>
                    <span className="cp-faq-qnum" style={{color:dest.color}}>Q{i+1}</span>
                    <span style={{flex:1,textAlign:"left"}}>{f.q}</span>
                    <ChevronDown size={14} className="cp-faq-arrow"/>
                  </button>
                  <div className="cp-faq-ans-wrap">
                    <p className="cp-faq-ans">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <div className="cp-cta-box" style={{borderColor:`${dest.color}25`}}>
            <img src={getFlagUrl(slug,"160x120")} width={56} height={42} alt={dest.name} style={{borderRadius:8,display:"block",margin:"0 auto 16px",boxShadow:"0 4px 14px rgba(0,0,0,.15)"}}/>
            <h2 className="cp-cta-title">Start Your {dest.name} Journey Today</h2>
            <p className="cp-cta-sub">1,000+ students have trusted Easy To Europe. Book your free consultation and let us plan your future together.</p>
            <div className="cp-cta-btns">
              <ConsultationButton label="Book Free Consultation" variant="accent" size="lg"/>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="cp-cta-wa" style={{borderColor:`${dest.color}40`,color:dest.color}}>
                <MessageCircle size={15}/> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Other Destinations */}
          <div className="cp-others">
            <div className="cp-others-title">Explore Other Destinations</div>
            <div className="cp-others-grid">
              {others.map(o => (
                <Link key={o.slug} href={`/study-destinations/${o.slug}`} className="cp-other-card">
                  <img src={getFlagUrl(o.slug,"40x30")} width={26} height={19} alt={o.name} style={{borderRadius:3,flexShrink:0}}/>
                  <div style={{flex:1,minWidth:0}}>
                    <div className="cp-other-name">{o.name}</div>
                    <div className="cp-other-tag">{o.tagline}</div>
                  </div>
                  <ArrowRight size={13} style={{flexShrink:0,opacity:.4}}/>
                </Link>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
