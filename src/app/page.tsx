"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight, Star, ShieldCheck, GraduationCap, FileText,
  TrendingUp, Users, BadgeCheck, Phone, Award, CheckCircle,
  Globe, Play, ChevronDown, MapPin, ExternalLink, Calendar,
  ChevronLeft, ChevronRight, Sparkles,
} from "lucide-react";
import { homePage, destinations, siteConfig, events, getFlagUrl } from "@/data/content";
import ConsultationButton from "@/components/ui/ConsultationButton";
import EventsPublicSection from "@/components/ui/EventsPublicSection";

const WHY_ICONS: Record<string, React.ElementType> = {
  ShieldCheck, GraduationCap, FileText, TrendingUp, Users, BadgeCheck,
};

/* ─── Certs ─── */
const CERTS = [
  { id:"neapolis", org:"Neapolis University Pafos",     country:"Cyprus",  flag:"cy", role:"Approved Representative",      bullets:["Approved Representative of Neapolis University Pafos","Authorized for professional counseling & application advice"], issued:"08 May 2025", img:"/certs/pafosNew.png", accent:"#1E40AF" },
  { id:"qe",       org:"QE Group (Quantum Education)",  country:"Malta",   flag:"mt", role:"Student Recruitment Agent",     bullets:["Appointed as Student Recruitment Agent for QE Group","Authorized to provide strategic academic advice & submit applications"], issued:"20 Mar 2025", img:"/certs/quantum.png",  accent:"#B45309" },
  { id:"study",    org:"Study Info Centre",             country:"Estonia", flag:"ee", role:"Authorized Recruitment Partner", bullets:["Officially recognized as an authorized Recruitment Partner","Certified to recruit international students via Study Info platform"], issued:"28 Nov 2024", img:"/certs/studyinfo.png",accent:"#0E7490" },
  { id:"malita",   org:"MALITA International College",  country:"Malta",   flag:"mt", role:"Authorized Agency",             bullets:["Authorized Agency for MALITA International College, Malta","Permitted to represent the college and assist in student admissions"], issued:"20 Mar 2025", img:"/certs/malita.png",  accent:"#9D174D" },
];
const AWARDS = [
  { icon:"🏆", title:"Best Education Consultancy",  org:"Bangladesh Education Awards · 2023" },
  { icon:"📈", title:"Top Visa Success Rate",        org:"Study Abroad Excellence · 2023" },
  { icon:"🎓", title:"1,000+ Students Placed",       org:"Verified Achievement · 2024" },
  { icon:"⭐", title:"5+ Years of Excellence",      org:"Education Industry · 2024" },
];

/* ─── Destinations ─── */
const DEST_IMAGES: Record<string,string> = {
  australia:"https://easytoeurope.com/wp-content/uploads/2026/01/australia-country-image.jpg",
  sweden:"https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&q=80",
  "united-kingdom":"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
  canada:"https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80",
  hungary:"https://images.unsplash.com/photo-1541849546-216549ae216d?w=600&q=80",
  lithuania:"https://easytoeurope.com/wp-content/uploads/2026/01/Lithuinia_country_flag.jpg",
  malaysia:"https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80",
  austria:"https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&q=80",
  denmark:"https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&q=80",
  cyprus:"https://easytoeurope.com/wp-content/uploads/2026/01/Cyprus_country_flag.jpg",
  netherlands:"https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=600&q=80",
  malta:"https://easytoeurope.com/wp-content/uploads/2026/01/Malta_country_image.jpg",
  germany:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80",
};
const DEST_TAGLINES: Record<string,string> = {
  australia:"Unlock Future Opportunities", sweden:"World-Class Education Hub",
  "united-kingdom":"Innovation & Excellence", canada:"Your Gateway to Success",
  hungary:"Affordable Quality Living",     lithuania:"EU Access at Low Cost",
  malaysia:"Asia's Education Hub",         austria:"Majestic Heritage & Learning",
  denmark:"Design & Sustainability",       cyprus:"Mediterranean Campus Life",
  netherlands:"Tulips & Top Rankings",     malta:"English & Sunshine",
  germany:"Engineering Excellence",
};

/* ─── Videos ─── */
const VIDEOS = [
  { id:"y8rdupnT6n0", url:"https://www.youtube.com/shorts/y8rdupnT6n0", title:"Student Success Story", label:"Success Story" },
  { id:"KZd57sayYCQ", url:"https://www.youtube.com/shorts/KZd57sayYCQ", title:"Expert Visa Tips",      label:"Visa Tips" },
  { id:"cvz7pkRzs_0", url:"https://www.youtube.com/shorts/cvz7pkRzs_0", title:"Country Guide",         label:"Country Guide" },
];

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  { name:"Urmi Hasan Shanta",  country:"Lithuania", flag:"🇱🇹", uni:"Mykolas Romeris University",      rating:5, quote:"Lithuania has been an amazing experience for my higher studies. Mykolas Romeris University offers a great environment and the visa process was seamless.", photo:"https://easytoeurope.com/wp-content/uploads/2026/01/urmi.jpg" },
  { name:"Ferdous Woahid Raz", country:"UK",        flag:"🇬🇧", uni:"Cardiff Metropolitan University", rating:5, quote:"The mock interviews helped me build confidence for Cardiff Metropolitan University. The team's professional support made my UK dream come true.", photo:"https://easytoeurope.com/wp-content/uploads/2026/01/ferdous.jpg" },
  { name:"Ahsanul Islam",      country:"Australia", flag:"🇦🇺", uni:"ASA Institute",                   rating:5, quote:"Studying in Australia was a big decision. ASA Institute's curriculum is top-notch, and the guidance I received for my visa was exceptional.", photo:"https://easytoeurope.com/wp-content/uploads/2026/01/ahsanul.jpg" },
  { name:"Miskatul Islam",     country:"Sweden",    flag:"🇸🇪", uni:"Uppsala University",              rating:5, quote:"Sweden offers world-class education with great innovation. The English-taught programs and student-friendly environment are truly impressive.", photo:"https://easytoeurope.com/wp-content/uploads/2026/01/miskatul.jpg" },
  { name:"Tanvir Ahmed",       country:"Germany",   flag:"🇩🇪", uni:"TU Berlin",                      rating:5, quote:"The Opportunity Card guidance was incredibly detailed. They helped me score 8 points and get my visa approved quickly.", photo:"" },
  { name:"Rafiq Hossain",      country:"Canada",    flag:"🇨🇦", uni:"University of Toronto",           rating:5, quote:"Professional, transparent, and genuinely caring. My PGWP and PR pathway planning was done perfectly.", photo:"" },
];
const AVG = ["linear-gradient(135deg,#0A1628,#1E6FD9)","linear-gradient(135deg,#B45309,#C9A84C)","linear-gradient(135deg,#065F46,#059669)","linear-gradient(135deg,#6D28D9,#8B5CF6)","linear-gradient(135deg,#0E7490,#06B6D4)","linear-gradient(135deg,#9D174D,#EC4899)"];

/* ─── FAQ ─── */
const FAQ_ITEMS = [
  { q:"What services does Easy To Europe provide?",    a:"End-to-end support: profile evaluation, university selection, SOP & CV writing, admission filing, scholarship guidance, visa documentation, embassy interview prep, and pre-departure briefing." },
  { q:"Can I study abroad without IELTS?",             a:"Yes! Many partner universities in Hungary, Lithuania, and Cyprus accept English Medium of Instruction (MOI) letters instead of IELTS. We advise on the best option for your profile." },
  { q:"Why choose Easy To Europe over others?",        a:"We maintain a 98% visa success rate with 5+ years of experience, 1,000+ placed students, and zero hidden fees. Our team works transparently at every step." },
  { q:"Do students have work rights abroad?",          a:"Australia: 48 hrs/fortnight. UK: 20 hrs/week. Sweden: unlimited hours. Germany: 120 full or 240 half-days/year. We factor work rights into your country choice from day one." },
  { q:"How long does the entire process take?",        a:"Typically 3–6 months. University admission takes 2–6 weeks, and visa processing ranges from 2 weeks (Malta) to 3–4 months (Sweden, UK). We start early to avoid delays." },
  { q:"Do you help with scholarships?",                a:"Absolutely. We identify SI Scholarships (Sweden), DAAD (Germany), university-specific grants, and partial tuition waivers based on your academic profile — at no extra charge." },
  { q:"What about post-study work visas?",             a:"Australia: 2–4 years. UK: 2 years. Canada PGWP: up to 3 years. Germany: 18 months. Netherlands: 12 months. We plan your full career roadmap from the very start." },
  { q:"What are the bank balance requirements?",       a:"Sweden: SEK 8,514/month blocked account. Germany: €11,208. Australia: AUD 21,041. UK: £1,334/month. We walk you through exact requirements for your chosen country." },
];

/* ════════════════════════════════════════════
   CERT SLIDER — auto at 2.8s, loops
   ════════════════════════════════════════════ */
function CertSlider() {
  const [idx, setIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>|null>(null);
  const cert = CERTS[idx];

  const startTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setIdx(i => (i + 1) % CERTS.length), 2800);
  }, []);

  useEffect(() => { startTimer(); return () => { if (timer.current) clearInterval(timer.current); }; }, [startTimer]);

  const go = (n: number) => { setIdx((i) => (i + n + CERTS.length) % CERTS.length); startTimer(); };

  return (
    <div className="cert-slider" onMouseEnter={() => { if(timer.current) clearInterval(timer.current); }} onMouseLeave={startTimer}>
      <div className="cert-slider-inner">
        <div className="cert-info" key={cert.id}>
          <div className="cert-badge" style={{color:cert.accent,background:`${cert.accent}14`,borderColor:`${cert.accent}28`}}>
            <img src={`https://flagcdn.com/20x15/${cert.flag}.png`} width={18} height={13} alt="" style={{borderRadius:3}}/>
            {cert.country}
          </div>
          <div className="cert-role">{cert.role}</div>
          <h3 className="cert-org">{cert.org}</h3>
          <ul className="cert-bullets">
            {cert.bullets.map((b,i)=>(
              <li key={i}><CheckCircle size={13} style={{color:"#22c55e",flexShrink:0,marginTop:2}}/><span>{b}</span></li>
            ))}
          </ul>
          <div style={{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"}}>
            <div className="cert-dates">
              <div className="cert-date-box">
                <span className="cert-date-lbl">Issued</span>
                <span className="cert-date-val">{cert.issued}</span>
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:6,fontSize:".64rem",color:"var(--text-muted)",padding:"8px 12px",background:"rgba(34,197,94,.08)",border:"1px solid rgba(34,197,94,.18)",borderRadius:9}}>
              <span style={{color:"#22c55e",fontSize:".8rem"}}>✓</span>
              <span>Verified Partnership</span>
            </div>
          </div>
        </div>
        <div className="cert-img-wrap" key={cert.id+"-img"}>
          <img src={cert.img} alt={cert.org} className="cert-img"/>
        </div>
      </div>
      <div className="cert-nav">
        <button className="cert-nav-btn" onClick={()=>go(-1)}><ChevronLeft size={15}/></button>
        <div className="cert-dots">
          {CERTS.map((_,i)=><button key={i} className={`cert-dot${i===idx?" cert-dot-active":""}`} onClick={()=>{setIdx(i);startTimer();}}/>)}
        </div>
        <button className="cert-nav-btn" onClick={()=>go(1)}><ChevronRight size={15}/></button>
      </div>
      <div className="cert-counter">{idx+1} / {CERTS.length}</div>
    </div>
  );
}

/* ════════════════════════════════════════════
   DEST SCROLL
   ════════════════════════════════════════════ */
function DestScroll() {
  const doubled = [...destinations, ...destinations];
  return (
    <div className="hd-scroll-outer">
      <div className="hd-scroll-fade hd-fade-l"/><div className="hd-scroll-fade hd-fade-r"/>
      <div className="hd-scroll-track">
        {doubled.map((d,i)=>(
          <Link key={`${d.slug}-${i}`} href={`/study-destinations/${d.slug}`} className="hd-card">
            <div className="hd-img-wrap">
              <img src={DEST_IMAGES[d.slug]||""} alt={d.name} loading="lazy"/>
              <div className="hd-img-overlay"/>
              <div className="hd-color-bar" style={{background:d.color}}/>
            </div>
            <div className="hd-card-body">
              <img src={getFlagUrl(d.slug,"40x30")} width={26} height={19} alt="" style={{borderRadius:4,boxShadow:"0 2px 8px rgba(0,0,0,.5)",marginBottom:6}} loading="lazy"/>
              <div className="hd-card-name">{d.name}</div>
              <div className="hd-card-sub">{DEST_TAGLINES[d.slug]||d.tagline} →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   TESTIMONIAL SLIDER — infinite loop autoplay
   ════════════════════════════════════════════ */
function TestiSlider() {
  const [cur, setCur] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>|null>(null);
  const total = TESTIMONIALS.length;

  const startTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setCur(i => (i + 1) % total), 3500);
  }, [total]);

  useEffect(() => { startTimer(); return () => { if(timer.current) clearInterval(timer.current); }; }, [startTimer]);

  const go = (n: number) => { setCur(i => (i + n + total) % total); startTimer(); };

  return (
    <div className="testi-slider-wrap" onMouseEnter={()=>{if(timer.current)clearInterval(timer.current);}} onMouseLeave={startTimer}>
      <div className="testi-track" style={{transform:`translateX(calc(-${cur * (320 + 16)}px))`}}>
        {/* Triple the array for seamless infinite feel */}
        {[...TESTIMONIALS,...TESTIMONIALS,...TESTIMONIALS].map((t,i)=>{
          const realIdx = i % total;
          return (
            <div key={`${t.name}-${i}`} className="testi2-card">
              <div className="testi2-top">
                <div className="testi2-stars">{Array.from({length:t.rating}).map((_,j)=><Star key={j} size={11} fill="#F59E0B" color="#F59E0B"/>)}</div>
                <span style={{fontSize:"1.1rem"}}>{t.flag}</span>
              </div>
              <p className="testi2-quote">"{t.quote}"</p>
              <div className="testi2-footer">
                <div className="testi2-avatar" style={{background:AVG[realIdx%AVG.length]}}>
                  {t.photo ? <img src={t.photo} alt={t.name} className="testi2-photo"/> : <span>{t.name.split(" ").map(w=>w[0]).join("").slice(0,2)}</span>}
                </div>
                <div><div className="testi2-name">{t.name}</div><div className="testi2-meta">{t.country} · {t.uni}</div></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="testi-nav">
        <button className="testi-nav-btn" onClick={()=>go(-1)}><ChevronLeft size={16}/></button>
        <div className="testi-dots">
          {TESTIMONIALS.map((_,i)=><button key={i} className={`testi-dot${(cur%total)===i?" active":""}`} onClick={()=>{setCur(i);startTimer();}}/>)}
        </div>
        <button className="testi-nav-btn" onClick={()=>go(1)}><ChevronRight size={16}/></button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   FAQ ITEM
   ════════════════════════════════════════════ */
function FAQItem({q,a,open,onToggle,idx}:{q:string;a:string;open:boolean;onToggle:()=>void;idx:number}) {
  return (
    <div className={`faq2-item${open?" faq2-open":""}`}>
      <button className="faq2-q" onClick={onToggle}>
        <span className="faq2-num">0{idx+1}</span>
        <span className="faq2-qtext">{q}</span>
        <ChevronDown size={14} className="faq2-icon"/>
      </button>
      <div className="faq2-body"><p className="faq2-a">{a}</p></div>
    </div>
  );
}

/* ════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════ */
export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number|null>(null);
  const [playing, setPlaying] = useState<string|null>(null);

  return (
    <main>
      {/* 1. HERO */}
      <section className="ete-hero">
        <div className="ete-hero-glow1"/><div className="ete-hero-glow2"/><div className="ete-hero-dots"/>
        <div className="ete-container ete-hero-grid">
          <div className="ete-hero-text">
            <div className="ete-hero-badge reveal"><div className="ete-live-dot"/>{siteConfig.stats[0].number} Students Placed Successfully</div>
            <h1 className="ete-h1 reveal delay-1">Your Future Starts<br/><span className="ete-h1-accent">Beyond Borders</span></h1>
            <p className="ete-hero-desc reveal delay-2">{homePage.hero.subheadline}</p>
            <div className="ete-hero-ctas reveal delay-3">
              <ConsultationButton label="Book Free Consultation" variant="accent" size="lg"/>
              <a href={`tel:${siteConfig.phone}`} className="ete-hero-phone">
                <div className="ete-hero-phone-icon"><Phone size={15}/></div>
                <div><div className="ete-hero-phone-hint">Call us anytime</div><div className="ete-hero-phone-num">{siteConfig.phone}</div></div>
              </a>
            </div>
            <div className="ete-stats-row reveal delay-4">
              {siteConfig.stats.map(s=>(
                <div key={s.label} className="ete-stat-chip">
                  <div className="ete-stat-num">{s.number}</div>
                  <div className="ete-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="ete-hero-visual reveal delay-2">
            <div className="ete-hero-card">
              <div className="ete-hero-placeholder" style={{padding:0,overflow:"hidden",borderRadius:"inherit"}}>
                <img
                  src="https://easytoeurope.com/wp-content/uploads/2025/12/image-1-2.jpg"
                  alt="Students studying abroad"
                  style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}
                />
              </div>
              <div className="ete-float ete-float-tl"><CheckCircle size={12} style={{color:"#22c55e"}}/> 98% Visa Success</div>
              <div className="ete-float ete-float-tr">🎓 1,000+ Placed</div>
              <div className="ete-float ete-float-bl">🌍 12+ Countries</div>
              <div className="ete-star ete-star1">✦</div><div className="ete-star ete-star2">✦</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE */}
      <div className="ete-marquee-wrap">
        <div className="ete-marquee-track">
          {[...homePage.marqueeItems,...homePage.marqueeItems].map((item,i)=>(
            <span key={i} className="ete-marquee-item">{item}<span className="ete-marquee-sep">◆</span></span>
          ))}
        </div>
      </div>

      {/* 3. EVENTS */}
      <EventsPublicSection events={events}/>

      {/* 4. CERTIFICATIONS */}
      <section className="ete-section">
        <div className="ete-container">
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag"><Award size={9}/> Official Authorizations</span>
            <h2 className="ete-sec-title">Awards & <span>Achievements</span></h2>
            <p className="ete-sec-sub">Officially recognized by top institutions across Europe, Australia, and Asia. Our credentials speak for themselves.</p>
          </div>
          <div className="reveal"><CertSlider/></div>
          <div className="awards-strip reveal">
            {AWARDS.map((a,i)=>(
              <div key={i} className="award-chip">
                <span className="award-emoji">{a.icon}</span>
                <div><div className="award-title">{a.title}</div><div className="award-org">{a.org}</div></div>
              </div>
            ))}
          </div>
          <div className="ete-center" style={{marginTop:"1.5rem"}}>
            <Link href="/achievements" className="ete-btn ete-btn-outline"><Award size={13}/> Explore All Achievements</Link>
          </div>
        </div>
      </section>

      {/* 5. DESTINATIONS */}
      <section className="ete-section ete-bg-alt">
        <div className="ete-container">
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag"><Globe size={10}/> 12+ Destinations</span>
            <h2 className="ete-sec-title">Gain Access to <span>Top Institutions</span></h2>
            <p className="ete-sec-sub">Partners with renowned institutions across 12+ destinations. Pick your dream destination below.</p>
          </div>
          <div className="dest-pills-row reveal delay-1">
            {destinations.map(d=>(
              <Link key={d.slug} href={`/study-destinations/${d.slug}`} className="dest-pill-btn">
                <img src={getFlagUrl(d.slug,"40x30")} width={18} height={13} alt="" style={{borderRadius:3}} loading="lazy"/>
                {d.name}
              </Link>
            ))}
          </div>
        </div>
        <DestScroll/>
        <div className="ete-container">
          <div className="ete-center" style={{marginTop:"1.5rem"}}>
            <Link href="/study-destinations" className="ete-btn ete-btn-outline">View All 12 Destinations <ArrowRight size={13}/></Link>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="why-section">
        <div className="why-bg-pattern"/>
        <div className="ete-container" style={{position:"relative",zIndex:2}}>
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag">Our Strengths</span>
            <h2 className="ete-sec-title">{homePage.whyUs.title}</h2>
            <p className="ete-sec-sub">{homePage.whyUs.subtitle}</p>
          </div>
          <div className="why-grid">
            {homePage.whyUs.items.map((item,i)=>{
              const Icon=WHY_ICONS[item.icon]??ShieldCheck;
              const accents=["#1E6FD9","#059669","#7C3AED","#DC2626","#D97706","#0891B2"];
              const accent=accents[i%accents.length];
              return (
                <div key={item.title} className={`why-card reveal delay-${i%3+1}`} style={{"--accent":accent} as any}>
                  <div className="why-card-top">
                    <div className="why-icon-wrap"><Icon size={20}/></div>
                    <span className="why-num">0{i+1}</span>
                  </div>
                  <h3 className="why-card-title">{item.title}</h3>
                  <p className="why-card-desc">{item.desc}</p>
                  <div className="why-card-bar"/>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. PROCESS */}
      <section className="ete-section ete-section-dark">
        <div className="ete-container" style={{position:"relative",zIndex:2}}>
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag ete-tag-inv">Our Process</span>
            <h2 className="ete-sec-title ete-inv">How We Help: Your Step-by-Step Journey</h2>
            <p className="ete-sec-sub ete-inv">A clear roadmap from your first query to landing day.</p>
          </div>
          <div className="ete-steps-grid">
            {homePage.process.steps.map((step,i)=>(
              <div key={step.number} className={`ete-step-card reveal delay-${i%5+1}`}>
                <div className="ete-step-num">{step.number}</div>
                <h3 className="ete-step-title">{step.title}</h3>
                <p className="ete-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="ete-center" style={{marginTop:"2.5rem"}}>
            <ConsultationButton label="Start My Journey Free" variant="accent" size="lg"/>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="ete-section ete-bg-alt">
        <div className="ete-container">
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag">Student Stories</span>
            <h2 className="ete-sec-title">Feedback From Our <span>Success Stories</span></h2>
            <p className="ete-sec-sub">Real experiences from students who achieved their dreams with Easy To Europe.</p>
          </div>
          <div className="reveal"><TestiSlider/></div>
        </div>
      </section>

      {/* 9. YOUTUBE */}
      <section className="ete-section">
        <div className="ete-container">
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag"><Play size={9}/> From Our Channel</span>
            <h2 className="ete-sec-title">Featured <span>Videos</span></h2>
            <p className="ete-sec-sub">Watch real student stories, expert visa tips, and country-wise guides.</p>
          </div>
          <div className="yt2-row">
            {VIDEOS.map((v,i)=>(
              <div key={v.id} className={`yt2-card reveal delay-${i+1}`}>
                <div className="yt2-label">{v.label}</div>
                <div className="yt2-embed-wrap">
                  {playing===v.id ? (
                    <iframe src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen title={v.title} style={{width:"100%",height:"100%",border:"none"}}/>
                  ) : (
                    <div className="yt2-thumb" onClick={()=>setPlaying(v.id)}>
                      <img src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                        onError={e=>(e.currentTarget.src=`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`)}
                        alt={v.title} loading="lazy"/>
                      <div className="yt2-overlay"/>
                      <button className="yt2-play" aria-label="Play"><Play size={24} fill="white" color="white"/></button>
                      <div className="yt2-shorts-badge">Shorts</div>
                    </div>
                  )}
                </div>
                <div className="yt2-footer">
                  <div><div className="yt2-channel">Easy To Europe</div><div className="yt2-title">{v.title}</div></div>
                  <a href={v.url} target="_blank" rel="noreferrer" className="yt2-ext"><ExternalLink size={12}/> YouTube</a>
                </div>
              </div>
            ))}
          </div>
          <div className="ete-center" style={{marginTop:"2rem"}}>
            <a href="https://www.youtube.com/@EasyToEurope" target="_blank" rel="noreferrer" className="ete-btn ete-btn-outline"><Play size={13}/> Subscribe on YouTube</a>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="ete-section ete-bg-alt">
        <div className="ete-container">
          <div className="faq2-layout">
            <div className="faq2-left reveal">
              <span className="ete-tag">Quick Answers</span>
              <h2 className="ete-sec-title">Frequently Asked <span>Questions</span></h2>
              <p className="ete-sec-sub" style={{marginBottom:"1.5rem"}}>Everything you need to know about studying abroad with Easy To Europe.</p>
              <ConsultationButton label="Ask a Question Free" variant="accent"/>
              <div className="faq2-stat-row">
                {[["98%","Visa Success"],["1,000+","Students"],["12+","Countries"],["5+","Years"]].map(([n,l])=>(
                  <div key={l} className="faq2-stat"><div className="faq2-stat-num">{n}</div><div className="faq2-stat-lbl">{l}</div></div>
                ))}
              </div>
            </div>
            <div className="faq2-right">
              {FAQ_ITEMS.map((item,i)=>(
                <FAQItem key={i} q={item.q} a={item.a} idx={i} open={openFaq===i} onToggle={()=>setOpenFaq(openFaq===i?null:i)}/>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. MAP */}
      <section className="ete-section">
        <div className="ete-container">
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag"><MapPin size={9}/> Visit Us</span>
            <h2 className="ete-sec-title">Find Our <span>Office</span></h2>
          </div>
          <div className="map2-wrap reveal">
            <div className="map2-info">
              <div className="map2-badge">📍 Bangladesh HQ</div>
              <h3 className="map2-title">Easy To Europe</h3>
              <p className="map2-addr">44, F, 08, Panthapath<br/>Indira Road, Dhaka 1205</p>
              <div className="map2-hours-row"><Calendar size={13} style={{color:"var(--gold)",flexShrink:0}}/><span>Saturday – Thursday: 10AM – 6PM</span></div>
              <div className="map2-hours-row"><Phone size={13} style={{color:"var(--gold)",flexShrink:0}}/><span>{siteConfig.phone}</span></div>
              <a href="https://maps.app.goo.gl/2Nu4jgEmukvifEHRA" target="_blank" rel="noreferrer"
                className="ete-btn ete-btn-accent ete-btn-sm map2-dir-btn"><MapPin size={12}/> Get Directions</a>
            </div>
            <div className="map2-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.9211469588893!2d90.38422720000001!3d23.753002600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b96abb5e4a4b%3A0x795d7469614680b2!2sEasy%20To%20Europe!5e0!3m2!1sen!2sbd!4v1772869843518!5m2!1sen!2sbd"
                width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Easy To Europe Dhaka Office"/>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CTA */}
      <section className="ete-cta-section">
        <div className="ete-container ete-center" style={{position:"relative",zIndex:2}}>
          <div className="ete-cta-flags">{["🇸🇪","🇦🇺","🇬🇧","🇩🇪","🇨🇦","🇳🇱"].map(f=><span key={f} style={{fontSize:"1.4rem"}}>{f}</span>)}</div>
          <h2 className="ete-cta-title">Ready to Begin Your Study Abroad Journey?</h2>
          <p className="ete-cta-sub">Join 1,000+ students who trusted Easy To Europe. Expert guidance from first enquiry to landing day.</p>
          <div className="ete-cta-btns">
            <ConsultationButton label="Book Free Consultation" variant="accent" size="lg"/>
            <a href={`tel:${siteConfig.phone}`} className="ete-btn ete-btn-ghost-inv"><Phone size={14}/> {siteConfig.phone}</a>
          </div>
          <p className="ete-cta-fine">🔒 Free · Secure · No Obligation</p>
        </div>
      </section>
    </main>
  );
}
