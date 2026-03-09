"use client";
import { useEffect } from "react";
import { aboutData, siteConfig } from "@/data/content";
import ConsultationButton from "@/components/ui/ConsultationButton";
import { CheckCircle, Target, Eye, Linkedin, Users, Globe, Award, Star } from "lucide-react";
const LEAD_GRADS = [
  "linear-gradient(160deg,#0A1628 0%,#1E6FD9 100%)",
  "linear-gradient(160deg,#065F46 0%,#059669 100%)",
  "linear-gradient(160deg,#6D28D9 0%,#8B5CF6 100%)",
];
const TEAM_COLORS = [
  "#0A1628","#1E6FD9","#065F46","#B45309","#6D28D9","#9D174D",
  "#0E7490","#1D4ED8","#374151","#B91C1C","#4D7C0F","#92400E",
  "#1E40AF","#0E7490","#6D28D9","#B45309","#065F46",
];

export default function AboutPage() {
  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add("revealed");obs.unobserve(e.target);} });
    },{ rootMargin:"0px 0px -20px 0px", threshold:0 });
    document.querySelectorAll(".reveal,.reveal-left,.reveal-scale").forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  },[]);
  return (
    <div>
      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-bg-dots"/>
        <div className="about-hero-glow1"/>
        <div className="about-hero-glow2"/>
        <div className="container-xl about-hero-content reveal">
          <div className="about-hero-left">
            <span className="ete-tag ete-tag-inv" style={{marginBottom:16,display:"inline-flex"}}>Our Story</span>
            <h1 className="about-hero-h1">Your Trusted<br/><span className="about-hero-accent">Education Partner</span></h1>
            <p className="about-hero-p">At Easy To Europe, we simplify your journey to top global destinations. Transparency, expertise, and genuine care have been our promise since 2015.</p>
            <div className="about-hero-actions">
              <ConsultationButton label="Start Your Journey" variant="accent" size="lg"/>
            </div>
          </div>
          <div className="about-hero-stats-grid">
            {[["5+","Years Experience","🏆"],["1,000+","Students Placed","🎓"],["98%","Visa Success Rate","✅"],["12+","Countries","🌍"]].map(([n,l,e])=>(
              <div key={l} className="about-hero-stat-card">
                <div className="about-stat-emoji">{e}</div>
                <div className="about-stat-num">{n}</div>
                <div className="about-stat-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact & Story ── */}
      <section className="abt-impact-section">
        <div className="abt-impact-bg-grid"/>
        <div className="container-xl" style={{position:"relative",zIndex:2}}>

          <div className="ete-section-hd ete-center reveal" style={{marginBottom:"3rem"}}>
            <span className="ete-tag">Impact & Story</span>
            <h2 className="ete-sec-title">Built on Trust.<br/><span>Measured in Students.</span></h2>
            <p className="ete-sec-sub">Every number here is a real person — a student who trusted us with their future and made it.</p>
          </div>

          {/* Big impact numbers */}
          <div className="abt-impact-numbers">
            {[
              { num:"1,000+", label:"Students Placed",       icon:"🎓", sub:"Across 12 countries" },
              { num:"98%",    label:"Visa Success Rate",     icon:"✅", sub:"Industry-leading rate" },
              { num:"12+",    label:"Destinations",          icon:"🌍", sub:"Europe, Asia & beyond" },
              { num:"5+",     label:"Years of Expertise",    icon:"🏆", sub:"Trusted since 2020" },
              { num:"200+",   label:"University Partners",   icon:"🏛️", sub:"Across continents" },
              { num:"24/7",   label:"Student Support",       icon:"💬", sub:"Always here for you" },
            ].map((item,i)=>(
              <div key={i} className={"abt-impact-num-card reveal delay-" + (i%3+1)}>
                <span className="abt-num-icon">{item.icon}</span>
                <div className="abt-num-val">{item.num}</div>
                <div className="abt-num-label">{item.label}</div>
                <div className="abt-num-sub">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Story + milestones */}
          <div className="abt-story-row">
            <div className="abt-story-quote-block reveal">
              <div className="abt-story-quote-mark">&ldquo;</div>
              <blockquote className="abt-story-quote">
                We started Easy To Europe with one belief: every student deserves honest, transparent guidance — not just a processed application.
                Five years later, 1,000+ students have crossed borders and built careers they once only dreamed of.
              </blockquote>
              <div className="abt-story-author">
                <div className="abt-story-author-dot"/>
                <div>
                  <div className="abt-story-author-name">Md Zahid Hasan</div>
                  <div className="abt-story-author-role">Founder & CEO, Easy To Europe</div>
                </div>
              </div>
            </div>
            <div className="abt-story-milestones">
              {[
                { year:"2020", icon:"🚀", title:"Founded in Dhaka",        desc:"Started with 3 European destinations and a big dream." },
                { year:"2021", icon:"🌍", title:"Expanded to 8 Countries", desc:"Added Australia, Canada, Malaysia & more." },
                { year:"2022", icon:"🏆", title:"First Industry Award",    desc:"Recognized for excellence in education consulting." },
                { year:"2023", icon:"📜", title:"200+ Partnerships",       desc:"MoUs signed with universities across Europe & Asia." },
                { year:"2025", icon:"🎓", title:"1,000+ Placed",           desc:"A milestone that belongs to every student who trusted us." },
              ].map((m,i)=>(
                <div key={i} className={"abt-milestone-row reveal delay-" + (i+1)}>
                  <div className="abt-milestone-year">{m.year}</div>
                  <div className="abt-milestone-dot"/>
                  <div className="abt-milestone-icon">{m.icon}</div>
                  <div className="abt-milestone-body">
                    <div className="abt-milestone-title">{m.title}</div>
                    <div className="abt-milestone-desc">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

            {/* ── Mission & Vision ── */}
      <section className="mv-section">
        {/* Background decoration */}
        <div className="mv-bg-blob mv-blob-1"/>
        <div className="mv-bg-blob mv-blob-2"/>
        <div className="mv-bg-dots"/>

        <div className="container-xl" style={{position:"relative",zIndex:2}}>
          {/* Section header */}
          <div className="ete-section-hd ete-center reveal" style={{marginBottom:"2.75rem"}}>
            <span className="ete-tag mv-tag">Our Purpose</span>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"clamp(1.5rem,3vw,2.1rem)",color:"var(--text-primary)",marginTop:12,letterSpacing:"-.015em"}}>
              Driven by <span style={{color:"var(--gold)"}}>Mission.</span> Guided by <span style={{color:"#7C3AED"}}>Vision.</span>
            </h2>
            <p style={{fontSize:".9rem",color:"var(--text-secondary)",maxWidth:500,margin:"12px auto 0",lineHeight:1.85}}>
              Every student who walks through our door deserves a future without borders.
            </p>
          </div>

          {/* Feature strip */}
          <div className="mv-feature-strip reveal">
            {[
              {i:"🎯", t:"Student-First Approach", s:"Every decision centres around student success and transparency."},
              {i:"🌍", t:"12+ Global Destinations", s:"Access to 200+ universities across Europe, UK, Canada & more."},
              {i:"⚡", t:"Fast & Transparent Process", s:"Clear timelines, honest guidance, no hidden fees — ever."},
            ].map((f,i)=>(
              <div key={i} className="mv-feature-item">
                <div className="mv-feature-icon">{f.i}</div>
                <div>
                  <div className="mv-feature-txt-title">{f.t}</div>
                  <div className="mv-feature-txt-sub">{f.s}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Cards grid */}
          <div className="mv-cards-grid">

            {/* MISSION card */}
            <div className="mv-card mv-card-mission reveal">
              <div className="mv-card-glow mv-glow-blue"/>
              <div className="mv-card-inner">
                <div className="mv-card-header">
                  <div className="mv-icon-ring mv-ring-blue">
                    <Target size={20} style={{color:"#60a5fa"}}/>
                  </div>
                  <div>
                    <div className="mv-eyebrow mv-eyebrow-blue">Our Mission</div>
                    <h3 className="mv-card-title">{aboutData.mission.title}</h3>
                  </div>
                </div>
                <p className="mv-card-sub">{aboutData.mission.sub}</p>
                <div className="mv-divider mv-divider-blue"/>
                <div className="mv-points">
                  {aboutData.mission.points.map((p,i)=>(
                    <div key={i} className="mv-point">
                      <div className="mv-point-badge mv-badge-blue">{i+1}</div>
                      <div>
                        <div className="mv-point-title">{p.title}</div>
                        <div className="mv-point-desc">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* VISION card */}
            <div className="mv-card mv-card-vision reveal">
              <div className="mv-card-glow mv-glow-purple"/>
              <div className="mv-card-inner">
                <div className="mv-card-header">
                  <div className="mv-icon-ring mv-ring-purple">
                    <Eye size={20} style={{color:"#a78bfa"}}/>
                  </div>
                  <div>
                    <div className="mv-eyebrow mv-eyebrow-purple">Our Vision</div>
                    <h3 className="mv-card-title">{aboutData.vision.title}</h3>
                  </div>
                </div>
                <p className="mv-card-sub">{aboutData.vision.sub}</p>
                <div className="mv-divider mv-divider-purple"/>
                <div className="mv-points">
                  {aboutData.vision.points.map((p,i)=>(
                    <div key={i} className="mv-point">
                      <div className="mv-point-badge mv-badge-purple">{i+1}</div>
                      <div>
                        <div className="mv-point-title">{p.title}</div>
                        <div className="mv-point-desc">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core values row */}
          <div className="mv-values reveal">
            {[
              {i:"🎯", t:"Student First",   d:"Every decision starts and ends with student success."},
              {i:"🔍", t:"Transparency",    d:"No hidden fees. No false promises. Honest guidance."},
              {i:"🌍", t:"Global Network",  d:"12+ destinations, 200+ university partnerships."},
              {i:"⚡", t:"Fast Processing", d:"Swift applications with highest approval rates."},
            ].map((v,i)=>(
              <div key={i} className="mv-value-card">
                <span className="mv-value-icon">{v.i}</span>
                <div className="mv-value-title">{v.t}</div>
                <div className="mv-value-desc">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="ete-section">
        <div className="container-xl">
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag">Why Choose Us</span>
            <h2 className="ete-sec-title">What Makes Us <span>Different?</span></h2>
          </div>
          <div className="about-why-bento">
            {aboutData.why.map((item,i)=>(
              <div key={item.title} className={`about-why-tile reveal delay-${i%4+1}${i===0?" about-why-wide":""}`}>
                <div className="about-why-tile-emoji">{item.icon}</div>
                <h3 className="about-why-tile-title">{item.title}</h3>
                <p className="about-why-tile-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="ete-section ete-bg-alt">
        <div className="container-xl">
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag"><Award size={9}/> Board of Directors</span>
            <h2 className="ete-sec-title">Our Visionary <span>Leadership</span></h2>
            <p className="ete-sec-sub">Meet the minds behind Easy To Europe — experienced leaders committed to transforming international education.</p>
          </div>
          <div className="about-lead-grid">
            {(aboutData.leadership as any[]).map((l,i)=>(
              <div key={l.name} className={`about-lead-card reveal delay-${i+1}`}>
                <div className="about-lead-img-area" style={{background:LEAD_GRADS[i%LEAD_GRADS.length]}}>
                  {l.photo
                    ? <img src={l.photo} alt={l.name} className="about-lead-photo"/>
                    : <div className="about-lead-initials">{l.name.split(" ").map((w:string)=>w[0]).join("").slice(0,2)}</div>
                  }
                  <div className="about-lead-pulse"/>
                  <div className="about-lead-years-badge">{l.years} yrs</div>
                </div>
                <div className="about-lead-body">
                  <h3 className="about-lead-name">{l.name}</h3>
                  <div className="about-lead-role">{l.role}</div>
                  <p className="about-lead-quote">"{l.quote}"</p>
                  {l.linkedin && (
                    <a href={l.linkedin} target="_blank" rel="noreferrer" className="about-lead-li">
                      <Linkedin size={12}/> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="ete-section">
        <div className="container-xl">
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag"><Users size={9}/> Our Experts</span>
            <h2 className="ete-sec-title">The Faces Behind <span>Easy To Europe</span></h2>
            <p className="ete-sec-sub">A passionate team of consultants, visa experts, and student success managers.</p>
          </div>
          <div className="about-team-grid">
            {(aboutData.team as any[]).map((m,i)=>(
              <div key={m.name} className={`about-team-card reveal delay-${i%6+1}`}>
                <div className="about-team-avatar" style={{background:TEAM_COLORS[i%TEAM_COLORS.length]}}>
                  {m.photo
                    ? <img src={m.photo} alt={m.name}/>
                    : <span>{m.name.split(" ").map((w:string)=>w[0]).join("").slice(0,2)}</span>
                  }
                </div>
                {m.nickname && <div className="about-team-nick">"{m.nickname}"</div>}
                <div className="about-team-name">{m.name}</div>
                <div className="about-team-role">{m.role}</div>
                {m.trait && <div className="about-team-trait">{m.trait}</div>}
              </div>
            ))}
          </div>
          <p className="testi2-hint reveal" style={{marginTop:"1.5rem"}}>
            💡 Add team photos → <code>content.ts</code> → <code>aboutData.team</code> → add <code>photo: "https://url"</code> field
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ete-cta-section">
        <div className="container-xl ete-center" style={{position:"relative",zIndex:2}}>
          <h2 className="ete-cta-title">Ready to Work With Us?</h2>
          <p className="ete-cta-sub">Book a free consultation and let our experts guide your journey from first query to landing day.</p>
          <div className="ete-cta-btns">
            <ConsultationButton label="Book Free Consultation" variant="accent" size="lg"/>
          </div>
        </div>
      </section>
    </div>
  );
}
