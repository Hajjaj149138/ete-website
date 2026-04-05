"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft, ArrowRight, MapPin, BookOpen, DollarSign, Clock,
  CalendarDays, CheckCircle, ChevronDown, GraduationCap,
  Briefcase, Globe, MessageCircle,
} from "lucide-react";
import { destinations, getFlagUrl, siteConfig } from "@/data/content";
import ConsultationButton from "@/components/ui/ConsultationButton";

const HERO_IMG: Record<string,string> = {
  "australia":      "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1333&auto=format&fit=crop",
  "sweden":         "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1170&auto=format&fit=crop",
  "united-kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&w=1400&q=95&fit=crop",
  "canada":         "https://plus.unsplash.com/premium_photo-1694475481348-7cbe417be129?q=80&w=1170&auto=format&fit=crop",
  "hungary":        "https://images.unsplash.com/photo-1551867633-194f125bddfa?auto=format&w=1400&q=95&fit=crop",
  "lithuania":      "/images/lithuania.jpg",
  "malaysia":       "https://images.unsplash.com/photo-1509339022327-1e1e25360a41?auto=format&w=1400&q=95&fit=crop",
  "austria":        "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&w=1400&q=95&fit=crop",
  "denmark":        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1400&q=95&auto=format&fit=crop",
  "cyprus":         "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1400&q=95&auto=format&fit=crop",
  "netherlands":    "https://images.unsplash.com/photo-1506034861661-ad49bbcf7198?q=80&w=1170&auto=format&fit=crop",
  "malta":          "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1400&q=95&auto=format&fit=crop",
  "germany":        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=95&auto=format&fit=crop",
};
const EXTRA: Record<string,any> = {
  australia:{capital:"Canberra",language:"English",currency:"AUD",population:"26M",living:{accommodation:"AUD 800–1,500/mo",food:"AUD 300–500/mo",transport:"AUD 80–150/mo",total:"AUD 1,500–2,500/mo"},programs:[{l:"Foundation",d:"1 Year",i:"🏫"},{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1.5–2 Years",i:"📜"},{l:"PhD",d:"3–5 Years",i:"🔬"},{l:"Diploma",d:"1–2 Years",i:"📋"}],langReq:[{lv:"Foundation",ie:"5.5",tf:"60",pt:"42"},{lv:"Bachelor",ie:"6.0",tf:"72",pt:"50"},{lv:"Master",ie:"6.5",tf:"80",pt:"58"},{lv:"PhD",ie:"6.5–7.0",tf:"90",pt:"65"}],workDuring:"48 hours/fortnight during study · Unlimited during holidays",postStudy:"Subclass 485 — 2 to 4 years post-study work visa",cityDetails:[{c:"Melbourne",d:"#1 student city globally; arts, finance & tech hub"},{c:"Sydney",d:"Iconic harbour city; Australia's largest economy"},{c:"Brisbane",d:"Sunny & affordable; QUT and UQ excellence"},{c:"Perth",d:"Gateway to Asia; laid-back with growing tech scene"},{c:"Adelaide",d:"Most affordable major city; strong health sciences"},{c:"Canberra",d:"Capital; ANU — research & policy excellence"}],faqs:[{q:"Is IELTS mandatory?",a:"Most universities require IELTS 6.0–7.0. PTE, TOEFL and Duolingo also accepted. One Skill Retake (OSR) allowed for student visa."},{q:"How long does the visa take?",a:"Student visa (Subclass 500) takes 4–8 weeks. Apply immediately after receiving your CoE."},{q:"Can students work?",a:"Yes — 48 hrs/fortnight during study, unlimited during breaks. Subclass 485 gives 2–4 years full work rights after graduation."},{q:"What is the cost of living?",a:"Approx AUD 1,500–2,500/month including accommodation, food, transport and personal expenses."}]},
  sweden:{capital:"Stockholm",language:"Swedish / English",currency:"SEK",population:"10.5M",living:{accommodation:"SEK 4,000–8,000/mo",food:"SEK 2,000–3,500/mo",transport:"SEK 500–900/mo",total:"SEK 8,000–13,000/mo"},programs:[{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"3–5 Years",i:"🔬"},{l:"Exchange",d:"1 Semester",i:"🔄"}],langReq:[{lv:"Bachelor",ie:"6.0",tf:"72",pt:"50"},{lv:"Master",ie:"6.5",tf:"90",pt:"58"},{lv:"PhD",ie:"7.0",tf:"100",pt:"65"}],workDuring:"Unlimited hours — no restrictions for students",postStudy:"12-month job-search residence permit after graduation",cityDetails:[{c:"Stockholm",d:"Capital & innovation hub; KTH and Stockholm University"},{c:"Gothenburg",d:"Chalmers & GU; automotive and maritime excellence"},{c:"Lund",d:"Prestigious Lund University; medieval town atmosphere"},{c:"Uppsala",d:"Oldest university (1477); pharmacy & life sciences"},{c:"Malmö",d:"Diverse & modern; very close to Copenhagen"},{c:"Jönköping",d:"International Business School; entrepreneurship focus"}],faqs:[{q:"Are there scholarships?",a:"Yes — Sweden Institute (SI) Global Scholarship covers full tuition plus monthly stipend. Deadline 15 February annually."},{q:"Can I work unlimited hours?",a:"Yes — Sweden places NO restrictions on working hours for students."},{q:"How long does the permit take?",a:"Residence permit takes 2–4 months. Apply as soon as your Letter of Acceptance arrives."},{q:"What is the post-study option?",a:"After graduation apply for 12-month extension to search for work or start a business in Sweden."}]},
  "united-kingdom":{capital:"London",language:"English",currency:"GBP",population:"67M",living:{accommodation:"GBP 600–1,200/mo",food:"GBP 200–350/mo",transport:"GBP 100–200/mo",total:"GBP 1,200–2,000/mo"},programs:[{l:"Foundation",d:"1 Year",i:"🏫"},{l:"Bachelor",d:"3 Years",i:"🎓"},{l:"Master",d:"1 Year",i:"📜"},{l:"PhD",d:"3–4 Years",i:"🔬"}],langReq:[{lv:"Foundation",ie:"5.0–5.5",tf:"60",pt:"42"},{lv:"Bachelor",ie:"6.0",tf:"72",pt:"50"},{lv:"Master",ie:"6.5",tf:"90",pt:"58"},{lv:"PhD",ie:"7.0",tf:"100",pt:"65"}],workDuring:"20 hours/week during term · Full-time during holidays",postStudy:"Graduate Route — 2 years (3 years for PhD graduates)",cityDetails:[{c:"London",d:"World's top student city; 40+ universities; global finance"},{c:"Manchester",d:"Affordable & vibrant; Manchester Uni & Manchester Met"},{c:"Edinburgh",d:"Historic Scottish capital; consistently top-10 ranked"},{c:"Birmingham",d:"UK's second city; diverse, affordable, strong engineering"},{c:"Bristol",d:"Creative tech scene; consistently top-10 UK university"},{c:"Leeds",d:"Large student community; fashion, medicine and business"}],faqs:[{q:"Is IELTS required?",a:"Yes, IELTS 6.0–7.0 is standard. PTE Academic and TOEFL also widely accepted."},{q:"How long is the student visa?",a:"Processing takes ~3 weeks. Apply no earlier than 6 months before your course starts."},{q:"What is the Graduate Route?",a:"After completing a UK degree, stay 2 years (3 for PhD) to work at any skill level without needing a sponsor."},{q:"Can I bring family?",a:"Postgraduate students on government-funded programs may bring dependants. Restrictions apply for undergraduates."}]},
  canada:{capital:"Ottawa",language:"English / French",currency:"CAD",population:"38M",living:{accommodation:"CAD 700–1,400/mo",food:"CAD 300–500/mo",transport:"CAD 80–150/mo",total:"CAD 1,500–2,500/mo"},programs:[{l:"Diploma",d:"1–3 Years",i:"📋"},{l:"Bachelor",d:"4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"4–6 Years",i:"🔬"}],langReq:[{lv:"Diploma",ie:"6.0",tf:"70",pt:"50"},{lv:"Bachelor",ie:"6.0–6.5",tf:"80",pt:"55"},{lv:"Master",ie:"6.5",tf:"90",pt:"58"},{lv:"PhD",ie:"7.0",tf:"100",pt:"65"}],workDuring:"20 hours/week off-campus · Full-time during scheduled breaks",postStudy:"PGWP up to 3 years — clear pathway to Permanent Residency",cityDetails:[{c:"Toronto",d:"Largest city; U of T & Ryerson; multicultural hub"},{c:"Vancouver",d:"UBC campus; tech giants; stunning Pacific gateway"},{c:"Montreal",d:"Bilingual city; McGill & Concordia; affordable living"},{c:"Calgary",d:"Energy sector hub; UCalgary; affordable and growing"},{c:"Ottawa",d:"Capital city; federal job opportunities"},{c:"Halifax",d:"Maritime province; Dalhousie; welcoming student community"}],faqs:[{q:"What is the PGWP?",a:"Post-Graduation Work Permit lets you work in Canada for up to 3 years after graduating from an eligible DLI program."},{q:"Can I get PR?",a:"Yes — Express Entry, PNP, and Canadian Experience Class are common PR pathways for graduates."},{q:"How long does the study permit take?",a:"Usually 8–12 weeks. Student Direct Stream (SDS) can reduce this to 20 days for eligible countries."},{q:"Is IELTS required?",a:"Yes, IELTS Academic 6.0 is standard for SDS. Some schools also accept Duolingo."}]},
  hungary:{capital:"Budapest",language:"Hungarian / English",currency:"HUF / EUR",population:"10M",living:{accommodation:"EUR 200–450/mo",food:"EUR 150–250/mo",transport:"EUR 20–40/mo",total:"EUR 450–800/mo"},programs:[{l:"Foundation",d:"1 Year",i:"🏫"},{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"4 Years",i:"🔬"}],langReq:[{lv:"Foundation",ie:"5.0",tf:"60",pt:"40"},{lv:"Bachelor",ie:"5.5",tf:"70",pt:"50"},{lv:"Master",ie:"6.0",tf:"80",pt:"55"}],workDuring:"24 hours/week during study · Full-time during holidays",postStudy:"EU job-seeker permit · Full Schengen Zone travel access",cityDetails:[{c:"Budapest",d:"Beautiful capital; stunning architecture; top-ranked universities"},{c:"Debrecen",d:"Second city; excellent medicine and science programs"},{c:"Pécs",d:"Southern Hungary; Pécs University; rich cultural history"},{c:"Miskolc",d:"Engineering-focused city; growing tech industry"},{c:"Szeged",d:"University city; life sciences and humanities"}],faqs:[{q:"Is Hungary affordable?",a:"Very — tuition EUR 2,000–8,000/year and living EUR 450–800/month."},{q:"What is Stipendium Hungaricum?",a:"A government scholarship covering full tuition, dormitory, and monthly allowance."},{q:"Do I get Schengen access?",a:"Yes — Hungarian student visa gives access to all 26 Schengen countries for 90 days in any 180-day period."},{q:"Are programs in English?",a:"Yes — many universities offer English-medium programs in medicine, engineering, IT and business."}]},
  lithuania:{capital:"Vilnius",language:"Lithuanian / English",currency:"EUR",population:"2.8M",living:{accommodation:"EUR 150–350/mo",food:"EUR 100–200/mo",transport:"EUR 20–35/mo",total:"EUR 350–650/mo"},programs:[{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"3–4 Years",i:"🔬"}],langReq:[{lv:"Bachelor",ie:"5.5",tf:"72",pt:"50"},{lv:"Master",ie:"6.0",tf:"80",pt:"55"}],workDuring:"20 hours/week during study · Full-time during vacations",postStudy:"Full EU work rights · Job market access across 27 EU countries",cityDetails:[{c:"Vilnius",d:"Baroque capital; Vilnius University — oldest in Baltics"},{c:"Kaunas",d:"Tech & innovation hub; KTU and LSMU excellence"},{c:"Klaipėda",d:"Port city; maritime and international business"},{c:"Šiauliai",d:"Engineering and social sciences; affordable living"}],faqs:[{q:"Is Lithuania in the EU?",a:"Yes — full EU member. Graduates have complete EU work and travel rights across all 27 member states."},{q:"How affordable is it?",a:"Very — tuition EUR 1,500–5,000/year and living EUR 350–650/month."},{q:"Are programs in English?",a:"Yes — many programs are fully in English. No Lithuanian required."},{q:"Can I travel Europe?",a:"Yes — Lithuanian residence permit includes Schengen access for travel across 26 countries."}]},
  malaysia:{capital:"Kuala Lumpur",language:"Malay / English",currency:"MYR",population:"33M",living:{accommodation:"MYR 500–1,200/mo",food:"MYR 400–700/mo",transport:"MYR 80–150/mo",total:"MYR 1,500–2,500/mo"},programs:[{l:"Foundation",d:"1 Year",i:"🏫"},{l:"Diploma",d:"2–3 Years",i:"📋"},{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"}],langReq:[{lv:"Diploma",ie:"5.0",tf:"60",pt:"42"},{lv:"Bachelor",ie:"5.5–6.0",tf:"72",pt:"50"},{lv:"Master",ie:"6.0",tf:"80",pt:"55"}],workDuring:"20 hours/week with university permission",postStudy:"Job seeker pass available · ASEAN job market access",cityDetails:[{c:"Kuala Lumpur",d:"Capital; Monash and UM; global finance and tech hub"},{c:"Selangor",d:"Silicon Valley of Malaysia; Cyberjaya tech corridor"},{c:"Penang",d:"UNESCO heritage city; USM and growing tech scene"},{c:"Johor Bahru",d:"Close to Singapore; UTM and manufacturing hub"},{c:"Cyberjaya",d:"Dedicated tech city; MMU and Asia e-University"}],faqs:[{q:"Are branch campus degrees recognized?",a:"Yes — Monash Malaysia, Nottingham Malaysia & Curtin Malaysia grant identical degrees to home campuses."},{q:"Is Malaysia English-speaking?",a:"Yes — English is the medium of instruction for most degree programs."},{q:"How affordable is Malaysia?",a:"Very — living costs USD 500–800/month and tuition a fraction of Western universities."},{q:"Is Malaysia safe?",a:"Yes — safe, welcoming and multicultural. Very familiar environment for Bangladeshi students."}]},
  austria:{capital:"Vienna",language:"German / English",currency:"EUR",population:"9M",living:{accommodation:"EUR 350–700/mo",food:"EUR 200–350/mo",transport:"EUR 50–100/mo",total:"EUR 700–1,200/mo"},programs:[{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"3–4 Years",i:"🔬"}],langReq:[{lv:"Bachelor",ie:"6.0",tf:"80",pt:"55"},{lv:"Master",ie:"6.5",tf:"90",pt:"58"}],workDuring:"20 hours/week during study",postStudy:"12-month Red-White-Red Card job seeker visa",cityDetails:[{c:"Vienna",d:"World's #1 livable city 7+ years; TU Wien & Vienna University"},{c:"Graz",d:"Second city; TU Graz; automotive and engineering excellence"},{c:"Salzburg",d:"Mozart's birth city; Paris Lodron University"},{c:"Innsbruck",d:"Alpine setting; University of Innsbruck; sports science"}],faqs:[{q:"Do I need German?",a:"For English-taught programs, no. Learning German greatly improves career prospects."},{q:"Is Vienna really #1 livable city?",a:"Yes — Vienna topped the Economist's Global Liveability Index for 6+ consecutive years."},{q:"Are public university fees low?",a:"Yes — just EUR 726/semester. Among the lowest tuition fees for EU-standard education."},{q:"What is post-study option?",a:"After graduation apply for 12-month Red-White-Red Card (job seeker) to find employment in Austria."}]},
  denmark:{capital:"Copenhagen",language:"Danish / English",currency:"DKK",population:"5.9M",living:{accommodation:"DKK 3,500–7,000/mo",food:"DKK 2,000–3,500/mo",transport:"DKK 400–800/mo",total:"DKK 7,000–12,000/mo"},programs:[{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"2 Years",i:"📜"},{l:"PhD",d:"3 Years",i:"🔬"}],langReq:[{lv:"Bachelor",ie:"6.0–6.5",tf:"83",pt:"55"},{lv:"Master",ie:"6.5–7.0",tf:"90",pt:"60"}],workDuring:"20 hours/week · Full-time June, July & August",postStudy:"6-month job seeker permit after graduation",cityDetails:[{c:"Copenhagen",d:"Happiest city; DTU and University of Copenhagen"},{c:"Aarhus",d:"Second city; Aarhus University — research powerhouse"},{c:"Odense",d:"Robotics hub; University of Southern Denmark"},{c:"Aalborg",d:"Pioneer of problem-based learning; Aalborg University"}],faqs:[{q:"Is Denmark expensive?",a:"Higher costs but student jobs pay well and quality of life is exceptional."},{q:"Are programs in English?",a:"Most Master's and all PhD programs are in English."},{q:"Are there scholarships?",a:"Yes — Danish Government Scholarship covers tuition and living costs for non-EU students."},{q:"Is Denmark safe?",a:"Consistently ranks top 5 safest and happiest countries globally."}]},
  cyprus:{capital:"Nicosia",language:"Greek / English",currency:"EUR",population:"1.3M",living:{accommodation:"EUR 250–500/mo",food:"EUR 150–300/mo",transport:"EUR 30–60/mo",total:"EUR 500–900/mo"},programs:[{l:"Foundation",d:"1 Year",i:"🏫"},{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"3–4 Years",i:"🔬"}],langReq:[{lv:"Foundation",ie:"5.0",tf:"60",pt:"42"},{lv:"Bachelor",ie:"5.5–6.0",tf:"72",pt:"50"},{lv:"Master",ie:"6.0–6.5",tf:"80",pt:"55"}],workDuring:"20 hours/week during study · Full-time during summers",postStudy:"EU residence and work permit available after graduation",cityDetails:[{c:"Nicosia",d:"Capital; University of Cyprus and Neapolis University"},{c:"Limassol",d:"Business & shipping hub; European University Cyprus"},{c:"Larnaca",d:"Coastal city; affordable living; University of Nicosia"},{c:"Paphos",d:"UNESCO heritage city; Neapolis University Pafos"}],faqs:[{q:"Is Cyprus in the EU?",a:"Yes — full EU member. Cyprus degree gives EU-recognized qualifications and pathway to EU residency."},{q:"Is English widely used?",a:"Yes — English is an official language in Cyprus. Most programs are fully in English."},{q:"How affordable is Cyprus?",a:"Very — tuition EUR 3,000–8,000/year and living EUR 500–900/month."},{q:"What is the weather like?",a:"Cyprus has 330+ sunshine days/year with warm Mediterranean climate."}]},
  netherlands:{capital:"Amsterdam",language:"Dutch / English",currency:"EUR",population:"17.8M",living:{accommodation:"EUR 600–1,100/mo",food:"EUR 250–400/mo",transport:"EUR 80–130/mo",total:"EUR 1,000–1,700/mo"},programs:[{l:"Bachelor",d:"3 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"},{l:"PhD",d:"4 Years",i:"🔬"}],langReq:[{lv:"Bachelor",ie:"6.0–6.5",tf:"80",pt:"55"},{lv:"Master",ie:"6.5–7.0",tf:"90",pt:"60"}],workDuring:"16 hours/week during study · Full-time June–August",postStudy:"1-year Orientation Year visa (Zoekjaar) after graduation",cityDetails:[{c:"Amsterdam",d:"World-class; UvA and VU; finance, creative, tech"},{c:"Delft",d:"TU Delft; #1 in engineering and architecture globally"},{c:"Rotterdam",d:"Erasmus University; Europe's largest container port"},{c:"Eindhoven",d:"TU/e; ASML, Philips HQ; Europe's premier tech hub"},{c:"Leiden",d:"Netherlands' oldest university; law and life sciences"}],faqs:[{q:"Is Netherlands English-friendly?",a:"Yes — 2,100+ English-taught programs. Most international study destination in Europe."},{q:"What is the Orientation Year?",a:"After graduation apply for 1-year Zoekjaar permit to find employment at any Dutch company."},{q:"Are there scholarships?",a:"Holland Scholarship (EUR 5,000), Orange Tulip Scholarship, and many university grants available."},{q:"Is it safe?",a:"Consistently ranked among top 5 safest and happiest countries in the world."}]},
  malta:{capital:"Valletta",language:"Maltese / English",currency:"EUR",population:"0.5M",living:{accommodation:"EUR 300–600/mo",food:"EUR 200–350/mo",transport:"EUR 25–50/mo",total:"EUR 600–1,100/mo"},programs:[{l:"Foundation",d:"1 Year",i:"🏫"},{l:"Bachelor",d:"3–4 Years",i:"🎓"},{l:"Master",d:"1–2 Years",i:"📜"}],langReq:[{lv:"Bachelor",ie:"5.5–6.0",tf:"72",pt:"50"},{lv:"Master",ie:"6.0–6.5",tf:"80",pt:"55"}],workDuring:"20 hours/week during study",postStudy:"EU work permit and residency pathways available",cityDetails:[{c:"Valletta",d:"UNESCO World Heritage capital; University of Malta HQ"},{c:"Msida",d:"Main university campus area; student hub of Malta"},{c:"St Julian's",d:"Entertainment district; coastal living; language schools"},{c:"Sliema",d:"Modern waterfront; most popular with international students"}],faqs:[{q:"Is Malta in the EU?",a:"Yes — full EU member since 2004. Degrees are EU-recognized worldwide."},{q:"Is English the main language?",a:"Yes — Malta is one of only two EU countries where English is an official national language."},{q:"How affordable is Malta?",a:"Tuition EUR 5,000–12,000/year and living EUR 600–1,100/month."},{q:"What is the weather?",a:"Malta has 300+ sunny days/year with warm Mediterranean climate and mild winters."}]},
};

const VISA_STEPS = [
  {n:1,i:"💬",t:"Free Consultation",d:"Profile assessment and best-fit destination advice."},
  {n:2,i:"🎓",t:"University Selection",d:"Shortlist universities matching your goals and budget."},
  {n:3,i:"📝",t:"Application",d:"Complete, error-free application submitted on your behalf."},
  {n:4,i:"📨",t:"Offer Letter",d:"Receive and accept your official university offer."},
  {n:5,i:"📋",t:"Visa Documentation",d:"Every required document compiled with zero errors."},
  {n:6,i:"🏛️",t:"Visa Submission",d:"Professionally lodged and tracked to approval."},
  {n:7,i:"✅",t:"Visa Approval",d:"Your visa is approved — we celebrate with you!"},
  {n:8,i:"✈️",t:"Pre-Departure",d:"Travel briefing, arrival guide, and ongoing support."},
];

const WHY_ETE = [
  {i:"🎯",t:"University Matching",d:"Expert matching to universities that fit your profile and goals."},
  {i:"📝",t:"Application Support",d:"End-to-end preparation and submission with zero errors."},
  {i:"💰",t:"Scholarship Guidance",d:"We find and apply for every available scholarship."},
  {i:"🛂",t:"Visa Assistance",d:"Certified specialists ensure error-free documentation."},
  {i:"🎤",t:"Interview Coaching",d:"Mock visa and university interview training sessions."},
  {i:"✈️",t:"Pre-Departure Support",d:"Travel, accommodation search, and arrival guidance."},
];

const TOC = ["Overview","Why Study","Cities","Courses","Universities","Programs","Intakes","Requirements","Cost","Work & Visa","Why ETE","FAQ"];

export default function CountryPage() {
  const {slug} = useParams() as {slug:string};
  const dest = destinations.find(d => d.slug === slug);
  const ex   = EXTRA[slug];
  const [activeSection, setActiveSection] = useState("Overview");
  const [openFaq, setOpenFaq] = useState<number|null>(null);
  const refs = useRef<Record<string,HTMLElement|null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { const id = e.target.getAttribute("data-sec"); if (id) setActiveSection(id); }
      });
    },{threshold:0.25,rootMargin:"-60px 0px -55% 0px"});
    Object.values(refs.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  },[dest]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("cp-visible"); obs.unobserve(e.target); } });
    },{threshold:0,rootMargin:"0px 0px -30px 0px"});
    document.querySelectorAll(".cp-reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  },[dest]);

  if (!dest) return (
    <div className="container-xl" style={{padding:"6rem 0",textAlign:"center"}}>
      <p style={{color:"var(--text-muted)",marginBottom:"1rem"}}>Destination not found.</p>
      <Link href="/study-destinations" className="btn btn-primary">← Back to Destinations</Link>
    </div>
  );

  const r = (s:string) => (el:HTMLElement|null) => { refs.current[s]=el; };
  const scrollTo = (s:string) => { refs.current[s]?.scrollIntoView({behavior:"smooth",block:"start"}); setActiveSection(s); };
  const heroImg = HERO_IMG[slug];
  const others  = destinations.filter(d => d.slug !== slug).slice(0,6);
  return (
    <div>
      {/* HERO */}
      <section className="cp-hero" style={{
        backgroundImage: heroImg
          ? `linear-gradient(to bottom,rgba(5,14,30,.25) 0%,rgba(5,14,30,.75) 100%),url('${heroImg}')`
          : `linear-gradient(135deg,#0C1B35 0%,${dest.color}90 60%,${dest.color} 100%)`,
        backgroundSize:"cover", backgroundPosition:"center",
      }}>
        <div className="container-xl">
          <Link href="/study-destinations" className="cp-back-link"><ArrowLeft size={13}/> All Destinations</Link>
          <div className="cp-hero-main cp-reveal">
            <div className="cp-flag-box">
              <img src={getFlagUrl(slug,"160x120")} width={90} height={67} alt={dest.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>
            <div>
              <div className="cp-dest-eyebrow">Study Destination</div>
              <h1 className="cp-hero-h1">Study in <span style={{color:"#E8C96A"}}>{dest.name}</span></h1>
              <p className="cp-hero-tagline">{dest.tagline}</p>
            </div>
          </div>
          <div className="cp-stat-chips cp-reveal">
            {[{icon:<BookOpen size={13}/>,label:"Min IELTS",val:dest.ielts.min},{icon:<DollarSign size={13}/>,label:"Tuition/Year",val:dest.tuition.split("–")[0].trim()+"+"},{icon:<Clock size={13}/>,label:"Visa Time",val:dest.visa},{icon:<CalendarDays size={13}/>,label:"Next Intake",val:dest.deadline}].map(({icon,label,val})=>(
              <div key={label} className="cp-stat-chip">
                <div className="cp-stat-icon">{icon}</div>
                <div className="cp-stat-label">{label}</div>
                <div className="cp-stat-val">{val}</div>
              </div>
            ))}
          </div>
          <div className="cp-hero-ctas cp-reveal">
            <ConsultationButton label="Book Free Consultation" variant="accent" size="lg"/>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="cp-wa-btn">
              <MessageCircle size={15}/> WhatsApp Us
            </a>
          </div>
          <div className="cp-hero-pills cp-reveal">
            {["✅ Scholarships Available","✅ Work While Studying","✅ Post-Study Visa","✅ Globally Recognized"].map(t=>(
              <span key={t} className="cp-hero-pill">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY TOC */}
      <div className="cp-toc-bar">
        <div className="container-xl">
          <div className="cp-toc-inner">
            {TOC.map(s=>(
              <button key={s} className={`cp-toc-btn${activeSection===s?" cp-toc-active":""}`} onClick={()=>scrollTo(s)}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="container-xl cp-page-body">

        {/* Quick Info */}
        {ex && (
          <div className="cp-info-cards cp-reveal">
            {[{icon:"🌍",label:"Country",val:dest.name},{icon:"🏛️",label:"Capital",val:ex.capital},{icon:"🗣️",label:"Language",val:ex.language},{icon:"💴",label:"Currency",val:ex.currency},{icon:"👥",label:"Population",val:ex.population},{icon:"📚",label:"Avg. Tuition",val:dest.tuition.split("/")[0].trim()}].map(({icon,label,val})=>(
              <div key={label} className="cp-info-card">
                <div className="cp-info-icon">{icon}</div>
                <div className="cp-info-label">{label}</div>
                <div className="cp-info-val">{val}</div>
              </div>
            ))}
          </div>
        )}

        {/* 01 Overview */}
        <section ref={r("Overview")} data-sec="Overview" className="cp-section cp-reveal" style={{scrollMarginTop:58}}>
          <div className="cp-section-head"><span className="cp-section-num">01</span><h2 className="cp-section-title">Overview</h2></div>
          <div className="cp-overview-grid">
            <p className="cp-overview-text">{dest.overview}</p>
            {ex && (
              <div className="cp-overview-aside">
                <div className="cp-aside-item"><Globe size={14} style={{color:dest.color,flexShrink:0,marginTop:2}}/><span><strong>During Study:</strong> {ex.workDuring}</span></div>
                <div className="cp-aside-item"><Briefcase size={14} style={{color:dest.color,flexShrink:0,marginTop:2}}/><span><strong>Post-Study:</strong> {ex.postStudy}</span></div>
                <div className="cp-aside-item"><CheckCircle size={14} style={{color:"#22c55e",flexShrink:0,marginTop:2}}/><span><strong>IELTS Min:</strong> {dest.ielts.min} — {dest.ielts.note}</span></div>
              </div>
            )}
          </div>
        </section>

        {/* 02 Why Study */}
        <section ref={r("Why Study")} data-sec="Why Study" className="cp-section cp-reveal" style={{scrollMarginTop:58}}>
          <div className="cp-section-head"><span className="cp-section-num">02</span><h2 className="cp-section-title">Why Study in {dest.name}?</h2></div>
          <div className="cp-highlights-grid">
            {dest.highlights.map((h:string,i:number)=>(
              <div key={i} className="cp-highlight-card"><CheckCircle size={15} style={{color:"#22c55e",flexShrink:0,marginTop:2}}/><span>{h}</span></div>
            ))}
          </div>
        </section>

        {/* 03 Cities */}
        <section ref={r("Cities")} data-sec="Cities" className="cp-section cp-reveal" style={{scrollMarginTop:58}}>
          <div className="cp-section-head"><span className="cp-section-num">03</span><h2 className="cp-section-title">Top Student Cities</h2></div>
          <div className="cp-cities-grid">
            {(ex?.cityDetails||dest.cities.map((c:string)=>({c,d:"Major student city"}))).map((item:any,i:number)=>(
              <div key={i} className="cp-city-card" style={{borderTopColor:dest.color}}>
                <MapPin size={14} style={{color:dest.color,marginBottom:8}}/>
                <div className="cp-city-name">{item.c}</div>
                <div className="cp-city-desc">{item.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 Courses */}
        <section ref={r("Courses")} data-sec="Courses" className="cp-section cp-reveal" style={{scrollMarginTop:58}}>
          <div className="cp-section-head"><span className="cp-section-num">04</span><h2 className="cp-section-title">Popular Courses</h2></div>
          <div className="cp-courses-grid">
            {dest.courses.map((c:string,i:number)=>(
              <div key={i} className="cp-course-chip">
                <div className="cp-course-icon" style={{background:`${dest.color}15`,color:dest.color}}><GraduationCap size={14}/></div>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 05 Universities */}
        <section ref={r("Universities")} data-sec="Universities" className="cp-section cp-reveal" style={{scrollMarginTop:58}}>
          <div className="cp-section-head"><span className="cp-section-num">05</span><h2 className="cp-section-title">Top Universities</h2></div>
          <div className="cp-uni-grid">
            {dest.universities.map((u:any,i:number)=>(
              <div key={i} className="cp-uni-card">
                <div className="cp-uni-rank" style={{background:`${dest.color}12`,color:dest.color,border:`1px solid ${dest.color}22`}}>#{u.rank}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div className="cp-uni-name">{u.name}</div>
                  <div className="cp-uni-loc"><MapPin size={10}/> {u.location}</div>
                  <div className="cp-uni-spec">{u.spec}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 06 Programs */}
        {ex?.programs && (
          <section ref={r("Programs")} data-sec="Programs" className="cp-section cp-reveal" style={{scrollMarginTop:58}}>
            <div className="cp-section-head"><span className="cp-section-num">06</span><h2 className="cp-section-title">Study Program Levels</h2></div>
            <div className="cp-programs-row">
              {ex.programs.map((p:any,i:number)=>(
                <div key={i} className="cp-program-card">
                  <div className="cp-prog-icon">{p.i}</div>
                  <div className="cp-prog-level">{p.l}</div>
                  <div className="cp-prog-dur">{p.d}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 07 Intakes */}
        <section ref={r("Intakes")} data-sec="Intakes" className="cp-section cp-reveal" style={{scrollMarginTop:58}}>
          <div className="cp-section-head"><span className="cp-section-num">07</span><h2 className="cp-section-title">Academic Intakes</h2></div>
          <div className="cp-intakes-list">
            {dest.intakes.map((it:any,i:number)=>(
              <div key={i} className="cp-intake-row">
                <div className="cp-intake-month" style={{background:i===0?dest.color:"var(--bg-alt)",color:i===0?"#fff":"var(--text-muted)",border:i===0?"none":"1px solid var(--border)"}}>{it.month}</div>
                <div className="cp-intake-connector" style={{background:i===0?dest.color:"var(--border)"}}/>
                <div className="cp-intake-body">
                  <div className="cp-intake-label" style={{color:i===0?dest.color:"var(--text-primary)"}}>{it.label}</div>
                  <div className="cp-intake-deadline"><CalendarDays size={11}/> Deadline: {it.deadline}</div>
                  {it.note && <div className="cp-intake-note">{it.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 08 Requirements */}
        <section ref={r("Requirements")} data-sec="Requirements" className="cp-section cp-reveal" style={{scrollMarginTop:58}}>
          <div className="cp-section-head"><span className="cp-section-num">08</span><h2 className="cp-section-title">Language Requirements</h2></div>
          {ex?.langReq ? (
            <div className="cp-req-table-wrap">
              <table className="cp-req-table">
                <thead><tr><th>Level</th><th>IELTS</th><th>TOEFL iBT</th><th>PTE</th></tr></thead>
                <tbody>
                  {ex.langReq.map((r:any,i:number)=>(
                    <tr key={i}>
                      <td><strong>{r.lv}</strong></td>
                      <td><span className="cp-req-badge cp-badge-blue">{r.ie}</span></td>
                      <td><span className="cp-req-badge cp-badge-purple">{r.tf}</span></td>
                      <td><span className="cp-req-badge cp-badge-green">{r.pt}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="cp-req-note"><strong>Also Accepted:</strong> MOI Letter · Duolingo DET (select universities) · CEFR B2+</div>
            </div>
          ) : (
            <div className="cp-overview-aside">
              <div className="cp-aside-item"><CheckCircle size={14} style={{color:"#22c55e",flexShrink:0}}/><span>IELTS {dest.ielts.min} — {dest.ielts.note}</span></div>
            </div>
          )}
        </section>

        {/* 09 Cost */}
        <section ref={r("Cost")} data-sec="Cost" className="cp-section cp-reveal" style={{scrollMarginTop:58}}>
          <div className="cp-section-head"><span className="cp-section-num">09</span><h2 className="cp-section-title">Cost of Studying</h2></div>
          <div className="cp-cost-grid">
            <div className="cp-cost-card">
              <div className="cp-cost-head" style={{background:`${dest.color}0D`,borderColor:`${dest.color}1E`}}>
                <GraduationCap size={16} style={{color:dest.color}}/> Tuition Fees
              </div>
              <div className="cp-cost-row"><span>Per Year (approx.)</span><strong style={{color:"var(--gold)"}}>{dest.tuition}</strong></div>
            </div>
            {ex?.living && (
              <div className="cp-cost-card">
                <div className="cp-cost-head" style={{background:"rgba(34,197,94,.06)",borderColor:"rgba(34,197,94,.15)"}}>
                  <MapPin size={16} style={{color:"#22c55e"}}/> Monthly Living Cost
                </div>
                <div className="cp-cost-row"><span>Accommodation</span><strong>{ex.living.accommodation}</strong></div>
                <div className="cp-cost-row"><span>Food</span><strong>{ex.living.food}</strong></div>
                <div className="cp-cost-row"><span>Transport</span><strong>{ex.living.transport}</strong></div>
                <div className="cp-cost-row cp-cost-total"><span>Est. Total/Month</span><strong style={{color:"var(--gold)"}}>{ex.living.total}</strong></div>
              </div>
            )}
          </div>
        </section>

        {/* 10 Work & Visa */}
        <section ref={r("Work & Visa")} data-sec="Work & Visa" className="cp-section cp-reveal" style={{scrollMarginTop:58}}>
          <div className="cp-section-head"><span className="cp-section-num">10</span><h2 className="cp-section-title">Work Rights & Visa Process</h2></div>
          {ex && (
            <div className="cp-work-cards">
              {[{i:"💼",t:"During Study",v:ex.workDuring},{i:"🎓",t:"Post-Study",v:ex.postStudy},{i:"⏱️",t:"Visa Processing",v:dest.visa}].map((w,i)=>(
                <div key={i} className="cp-work-card">
                  <div className="cp-work-icon">{w.i}</div>
                  <div className="cp-work-title">{w.t}</div>
                  <div className="cp-work-val">{w.v}</div>
                </div>
              ))}
            </div>
          )}
          <div className="cp-visa-timeline">
            {VISA_STEPS.map((s,i)=>(
              <div key={i} className="cp-visa-item">
                <div className="cp-visa-num-circle" style={{background:dest.color}}>{s.n}</div>
                {i<VISA_STEPS.length-1 && <div className="cp-visa-connector"/>}
                <div className="cp-visa-content">
                  <span className="cp-visa-icon">{s.i}</span>
                  <div>
                    <div className="cp-visa-step-title">{s.t}</div>
                    <div className="cp-visa-step-desc">{s.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11 Why ETE */}
        <section ref={r("Why ETE")} data-sec="Why ETE" className="cp-section cp-ete-section cp-reveal" style={{scrollMarginTop:58}}>
          <div className="cp-section-head">
            <span className="cp-section-num" style={{background:"rgba(201,168,76,.1)",color:"#92650a",borderColor:"rgba(201,168,76,.25)"}}>ETE</span>
            <h2 className="cp-section-title">Why Choose Easy To Europe?</h2>
          </div>
          <div className="cp-ete-grid">
            {WHY_ETE.map((c,i)=>(
              <div key={i} className="cp-ete-card">
                <div className="cp-ete-icon">{c.i}</div>
                <div className="cp-ete-title">{c.t}</div>
                <div className="cp-ete-desc">{c.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 12 FAQ */}
        <section ref={r("FAQ")} data-sec="FAQ" className="cp-section cp-reveal" style={{scrollMarginTop:58}}>
          <div className="cp-section-head"><span className="cp-section-num">12</span><h2 className="cp-section-title">Frequently Asked Questions</h2></div>
          <div className="cp-faq-list">
            {(ex?.faqs||[{q:`Is IELTS mandatory for ${dest.name}?`,a:`IELTS ${dest.ielts.min} is the standard. ${dest.ielts.note}.`},{q:"How long does the visa take?",a:`Visa typically takes ${dest.visa}. Apply immediately after your offer letter.`},{q:"What are the tuition fees?",a:`Tuition ranges from ${dest.tuition}. Scholarships can reduce this significantly.`}]).map((f:any,i:number)=>(
              <div key={i} className={`cp-faq-item${openFaq===i?" cp-faq-open":""}`}>
                <button className="cp-faq-question" onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                  <span className="cp-faq-num" style={{color:dest.color}}>Q{i+1}</span>
                  <span style={{flex:1,textAlign:"left"}}>{f.q}</span>
                  <ChevronDown size={14} className="cp-faq-arrow"/>
                </button>
                <div className="cp-faq-answer-wrap"><p className="cp-faq-answer">{f.a}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cp-cta-banner cp-reveal">
          <div className="cp-cta-inner" style={{borderColor:`${dest.color}25`,background:`linear-gradient(135deg,${dest.color}07 0%,transparent 60%)`}}>
            <img src={getFlagUrl(slug,"160x120")} width={52} height={38} alt={dest.name} style={{borderRadius:7,margin:"0 auto 14px",display:"block",boxShadow:"0 4px 14px rgba(0,0,0,.15)"}}/>
            <h2 className="cp-cta-title">Start Your Journey to {dest.name} Today</h2>
            <p className="cp-cta-sub">1,000+ students have trusted Easy To Europe to reach their dream destination. You're next.</p>
            <div className="cp-cta-btns">
              <ConsultationButton label="Book Free Consultation" variant="accent" size="lg"/>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="btn" style={{border:`1.5px solid ${dest.color}40`,color:dest.color,background:"transparent"}}>
                <MessageCircle size={15}/> WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Other Destinations */}
        <section className="cp-section cp-reveal">
          <div className="cp-section-head" style={{borderBottom:"none",paddingBottom:0}}>
            <h2 className="cp-section-title" style={{fontSize:"1rem"}}>Explore Other Destinations</h2>
          </div>
          <div className="cp-others-grid">
            {others.map(o=>(
              <Link key={o.slug} href={`/study-destinations/${o.slug}`} className="cp-other-link">
                <img src={getFlagUrl(o.slug,"40x30")} width={28} height={20} alt={o.name} style={{borderRadius:4,flexShrink:0}}/>
                <div style={{flex:1,minWidth:0}}>
                  <div className="cp-other-name">{o.name}</div>
                  <div className="cp-other-tag">{o.tagline}</div>
                </div>
                <ArrowRight size={13} className="cp-other-arrow"/>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
