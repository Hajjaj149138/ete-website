"use client";
import { useState, useEffect, useCallback } from "react";
import { servicesData, siteConfig } from "@/data/content";
import ConsultationButton from "@/components/ui/ConsultationButton";
import { CheckCircle, ArrowRight } from "lucide-react";

const STEP_ICONS: Record<string,string> = {
  "01":"🎯","02":"🎓","03":"💰","04":"🛂","05":"📊","06":"👨‍👩‍👧","07":"✈️","08":"🗺️","09":"🏠","10":"💼",
};
const STEP_COLORS = [
  "#0A1628","#1E6FD9","#065F46","#B45309","#6D28D9",
  "#9D174D","#0E7490","#1D4ED8","#374151","#B91C1C",
];

export default function ServicesPage() {
  const [activeStep, setActiveStep] = useState(0);
  const step = servicesData.steps[activeStep];
  const total = servicesData.steps.length;

  // Auto-advance every 3.5s, pause on hover
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(()=>setActiveStep(i=>(i+1)%total), 3500);
    return ()=>clearInterval(t);
  }, [paused, total]);

  // Reveal on scroll
  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add("revealed");obs.unobserve(e.target);} });
    },{ rootMargin:"0px 0px -20px 0px", threshold:0 });
    document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  },[]);

  return (
    <div>
      {/* Hero */}
      <section className="svc-hero">
        <div className="svc-hero-glow"/>
        <div className="grid-pattern absolute inset-0 opacity-20"/>
        <div className="container-xl svc-hero-inner">
          <div className="reveal">
            <span className="section-label" style={{marginBottom:12,display:"inline-flex"}}>{servicesData.hero.badge}</span>
            <h1 className="svc-hero-title">{servicesData.hero.title}</h1>
            <p className="svc-hero-sub">{servicesData.hero.sub}</p>
            <div className="svc-hero-pills">
              {["🛡️ 100% Transparent","⚡ Fast Admission","🎓 Career Planned","📋 Document Support","🌍 12+ Countries"].map(t=>(
                <span key={t} className="svc-hero-pill">{t}</span>
              ))}
            </div>
            <ConsultationButton label="Get Free Consultation" variant="accent" size="lg" className="mt-6"/>
          </div>
          <div className="svc-hero-stats reveal delay-1">
            {[["5+","Years Exp."],["98%","Visa Success"],["1,000+","Students"],["12+","Countries"]].map(([n,l])=>(
              <div key={l} className="svc-stat">
                <div className="svc-stat-num">{n}</div>
                <div className="svc-stat-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway — Interactive with auto-advance */}
      <section className="ete-section">
        <div className="container-xl">
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag">Our Process</span>
            <h2 className="ete-sec-title">Comprehensive <span>Support System</span></h2>
            <p className="ete-sec-sub">Step-by-step expert guidance. Hover to pause auto-advance.</p>
          </div>

          {/* Step tabs */}
          <div className="svc-step-tabs reveal" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
            {servicesData.steps.map((s, i) => (
              <button key={s.number} className={`svc-step-tab${activeStep===i?" svc-tab-active":""}`}
                onClick={()=>{setActiveStep(i);setPaused(true);}}
                style={activeStep===i?{borderColor:STEP_COLORS[i],color:STEP_COLORS[i],background:`${STEP_COLORS[i]}10`}:{}}>
                <span className="svc-tab-icon">{STEP_ICONS[s.number]||"📌"}</span>
                <span className="svc-tab-num">Step {s.number}</span>
                <span className="svc-tab-lbl">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Step detail */}
          <div className="svc-step-detail reveal" key={activeStep} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
            <div className="svc-detail-left" style={{borderColor:`${STEP_COLORS[activeStep]}25`}}>
              <div className="svc-detail-icon" style={{background:`${STEP_COLORS[activeStep]}12`,color:STEP_COLORS[activeStep]}}>
                <span style={{fontSize:"2rem"}}>{STEP_ICONS[step.number]||"📌"}</span>
              </div>
              {/* Progress bar */}
              <div className="svc-auto-progress">
                <div className="svc-auto-bar" style={{background:STEP_COLORS[activeStep], animationPlayState: paused?"paused":"running"}}/>
              </div>
              <div className="svc-detail-num">Step {step.number} of {total}</div>
              <h3 className="svc-detail-title">{step.title}</h3>
              <div className="svc-detail-items">
                {step.items.map((item,j)=>(
                  <div key={j} className="svc-detail-item" style={{animationDelay:`${j*0.07}s`}}>
                    <div className="svc-item-dot" style={{background:STEP_COLORS[activeStep]}}/>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="svc-detail-nav">
                <button className="svc-nav-btn" onClick={()=>{setActiveStep(i=>Math.max(0,i-1));setPaused(true);}} disabled={activeStep===0}>← Previous</button>
                <button className="svc-nav-btn svc-nav-next" onClick={()=>{setActiveStep(i=>Math.min(total-1,i+1));setPaused(true);}}
                  disabled={activeStep===total-1}
                  style={{background:STEP_COLORS[activeStep],color:"#fff"}}>
                  Next Step →
                </button>
              </div>
            </div>

            {/* Progress sidebar */}
            <div className="svc-detail-right">
              <div className="svc-progress-label">Your Journey</div>
              <div style={{display:"flex",flexDirection:"column",gap:3}}>
                {servicesData.steps.map((s,i)=>(
                  <button key={i}
                    className={`svc-prog-step${i===activeStep?" svc-prog-active":i<activeStep?" svc-prog-done":""}`}
                    onClick={()=>{setActiveStep(i);setPaused(true);}}
                    style={i===activeStep?{background:`${STEP_COLORS[i]}10`,borderColor:`${STEP_COLORS[i]}35`}:{}}>
                    <div className="svc-prog-dot" style={{background:i<=activeStep?STEP_COLORS[i]:"var(--border-md)"}}/>
                    <div>
                      <div className="svc-prog-num">Step {s.number}</div>
                      <div className="svc-prog-name">{s.title}</div>
                    </div>
                    {i<activeStep && <CheckCircle size={11} style={{color:"#22c55e",marginLeft:"auto",flexShrink:0}}/>}
                    {i===activeStep && <ArrowRight size={11} style={{color:STEP_COLORS[i],marginLeft:"auto",flexShrink:0}}/>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="ete-section ete-bg-alt">
        <div className="container-xl">
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag">Why Choose Us</span>
            <h2 className="ete-sec-title">What Makes Our <span>Service Different</span></h2>
          </div>
          <div className="svc-why-grid">
            {[
              {icon:"🔒",title:"Zero Hidden Fees",     desc:"100% transparent pricing. What we quote is what you pay."},
              {icon:"⚡",title:"Speed & Precision",    desc:"Fast admission turnarounds without compromising accuracy."},
              {icon:"🌐",title:"12+ Destinations",     desc:"Expertise across Europe, Oceania, North America & Asia."},
              {icon:"🎓",title:"Career-First Approach",desc:"We plan your post-study work and PR pathway from day one."},
              {icon:"📞",title:"24/7 Support",         desc:"WhatsApp and phone support throughout your entire journey."},
              {icon:"📈",title:"98% Visa Success",     desc:"Our meticulous documentation process yields near-perfect results."},
            ].map((c,i)=>(
              <div key={i} className={`svc-why-card reveal delay-${i%3+1}`}>
                <div className="svc-why-icon">{c.icon}</div>
                <h3 className="svc-why-title">{c.title}</h3>
                <p className="svc-why-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IELTS + Registration form */}
      <section className="ete-section">
        <div className="container-xl">
          <div className="ete-section-hd ete-center reveal">
            <span className="ete-tag">English Tests</span>
            <h2 className="ete-sec-title">{servicesData.ielts.title}</h2>
            <p className="ete-sec-sub">{servicesData.ielts.sub}</p>
          </div>
          <div className="svc-ielts-3col">
            {/* Active */}
            <div className="svc-ielts-card svc-ielts-active card reveal delay-1">
              <div className="svc-ielts-badge">✅ Active Services</div>
              {servicesData.ielts.active.map(s=>(
                <div key={s} className="svc-ielts-item">
                  <CheckCircle size={13} style={{color:"#22c55e",flexShrink:0}}/><span>{s}</span>
                </div>
              ))}
            </div>

            {/* IELTS Registration Form */}
            <IELTSForm/>

            {/* Coming Soon */}
            <div className="card svc-ielts-card reveal delay-3">
              <div className="svc-ielts-badge svc-badge-muted">🕐 Coming Soon</div>
              {servicesData.ielts.coming.map(s=>(
                <div key={s} className="svc-ielts-item svc-item-muted">
                  <div style={{width:6,height:6,borderRadius:"50%",background:"var(--border-md)",flexShrink:0}}/><span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ete-cta-section">
        <div className="container-xl ete-center" style={{position:"relative",zIndex:2}}>
          <h2 className="ete-cta-title">Start Your Journey Today</h2>
          <p className="ete-cta-sub">Free consultation — no obligation. Our experts are ready to help you navigate every step.</p>
          <div className="ete-cta-btns">
            <ConsultationButton label="Book Free Consultation" variant="accent" size="lg"/>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── IELTS Registration Form ── */
function IELTSForm() {
  const [form, setForm] = useState({name:"",phone:"",email:"",test:"IELTS Academic",level:"",date:"",msg:""});
  const [status, setStatus] = useState<"idle"|"sending"|"done"|"error">("idle");

  const handle = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f=>({...f,[e.target.name]:e.target.value}));

  const submit = async(e:React.FormEvent)=>{
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/consultation",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({...form, type:"IELTS Registration", source:"Services Page"}),
      });
      setStatus(res.ok?"done":"error");
    } catch { setStatus("error"); }
  };

  if(status==="done") return (
    <div className="svc-ielts-card card reveal delay-2" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",gap:14}}>
      <div style={{fontSize:"2.5rem"}}>🎉</div>
      <h3 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".95rem"}}>Registration Sent!</h3>
      <p style={{fontSize:".75rem",color:"var(--text-secondary)",lineHeight:1.75}}>We'll contact you within 24 hours to confirm your slot and share details.</p>
      <button className="ete-btn ete-btn-outline ete-btn-sm" onClick={()=>setStatus("idle")}>Register Another</button>
    </div>
  );

  return (
    <div className="svc-ielts-card card reveal delay-2" style={{padding:"1.5rem"}}>
      <div className="svc-ielts-badge" style={{color:"#1E6FD9",marginBottom:"1rem"}}>📝 Register for IELTS</div>
      <form onSubmit={submit} style={{display:"flex",flexDirection:"column",gap:10}}>
        <div>
          <label className="ete-label">Full Name *</label>
          <input className="ete-input" name="name" value={form.name} onChange={handle} placeholder="Your full name" required/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          <div>
            <label className="ete-label">Phone *</label>
            <input className="ete-input" name="phone" value={form.phone} onChange={handle} placeholder="01XXXXXXXXX" required/>
          </div>
          <div>
            <label className="ete-label">Email</label>
            <input className="ete-input" type="email" name="email" value={form.email} onChange={handle} placeholder="your@email.com"/>
          </div>
        </div>
        <div>
          <label className="ete-label">Test Type *</label>
          <select className="ete-input" name="test" value={form.test} onChange={handle} required>
            <option>IELTS Academic</option>
            <option>IELTS General Training</option>
          </select>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          <div>
            <label className="ete-label">Current Level</label>
            <select className="ete-input" name="level" value={form.level} onChange={handle}>
              <option value="">Select...</option>
              <option>Beginner (0–3.5)</option>
              <option>Intermediate (4.0–5.5)</option>
              <option>Upper-Int (6.0–6.5)</option>
              <option>Advanced (7.0+)</option>
            </select>
          </div>
          <div>
            <label className="ete-label">Preferred Date</label>
            <input className="ete-input" type="date" name="date" value={form.date} onChange={handle}/>
          </div>
        </div>
        <div>
          <label className="ete-label">Message (optional)</label>
          <textarea className="ete-input" name="msg" value={form.msg} onChange={handle} placeholder="Any specific requirements?" style={{minHeight:60,resize:"none"}}/>
        </div>
        <button type="submit" className="ete-btn ete-btn-accent" style={{justifyContent:"center",marginTop:2}}
          disabled={status==="sending"}>
          {status==="sending" ? "Sending..." : "📩 Submit Registration"}
        </button>
        {status==="error" && <p style={{fontSize:".7rem",color:"#ef4444",textAlign:"center"}}>Something went wrong. Please try WhatsApp instead.</p>}
      </form>
    </div>
  );
}
