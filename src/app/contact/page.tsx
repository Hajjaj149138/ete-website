"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/content";

/* ─── Correct Google Maps embed URLs ─── */
const OFFICE_MAPS = [
  // Bangladesh: Panthapath, Indira Road, Dhaka — direct coordinates embed
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.9211469588893!2d90.38422720000001!3d23.753002600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b96abb5e4a4b%3A0x795d7469614680b2!2sEasy%20To%20Europe!5e0!3m2!1sen!2sbd!4v1772869843518!5m2!1sen!2sbd",
  // Germany: Zwickau
  "https://maps.google.com/maps?q=50.7189,12.4966&z=15&output=embed",
];

const OFFICE_FLAGS = ["🇧🇩", "🇩🇪"];

export default function ContactPage() {
  const [form, setForm]    = useState({ name:"", email:"", phone:"", subject:"", message:"" });
  const [sent, setSent]    = useState(false);
  const [sending, setSending] = useState(false);
  const [active, setActive]= useState(0);
  const set = (k:string, v:string) => setForm(f=>({...f,[k]:v}));

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim()) { alert("Please fill in Name and Email."); return; }
    setSending(true);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: `Subject: ${form.subject||"—"}\n\n${form.message||"—"}\n\n[Source: Contact Page Form]`,
          subject: form.subject || "Contact Form Enquiry",
        }),
      });
      setSent(res.ok);
      if (!res.ok) alert("Something went wrong. Please try again.");
    } catch { alert("Something went wrong. Please call us directly."); }
    setSending(false);
  };

  return (
    <div>
      {/* ── Hero ── */}
      <section className="page-hero hero-gradient">
        <div className="grid-pattern absolute inset-0 opacity-40"/>
        <div className="container-xl relative">
          <span className="section-label">Get In Touch</span>
          <h1 className="page-hero-title mt-2">Contact Us</h1>
          <p className="page-hero-sub">Have questions? Our expert team is ready to help you start your journey.</p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="ete-section" style={{background:"var(--bg-base)"}}>
        <div className="container-xl">

          {/* Stats strip */}
          <div className="ctp-stats">
            {[
              {n:"1,000+", l:"Students Placed", i:"🎓"},
              {n:"98%",    l:"Visa Success Rate",i:"✅"},
              {n:"5+",     l:"Years Experience", i:"🏆"},
              {n:"12+",    l:"Countries",         i:"🌍"},
            ].map(s=>(
              <div key={s.l} className="ctp-stat">
                <span className="ctp-stat-icon">{s.i}</span>
                <span className="ctp-stat-num">{s.n}</span>
                <span className="ctp-stat-lbl">{s.l}</span>
              </div>
            ))}
          </div>

          <div className="ctp-layout">
            {/* LEFT — Form */}
            <div className="ctp-left">
              <div className="card ctp-form-card">
                <div className="ctp-form-head">
                  <div className="ctp-form-icon-box"><Send size={15}/></div>
                  <div>
                    <h2 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.05rem"}}>Send Us a Message</h2>
                    <p style={{fontSize:".75rem",color:"var(--text-muted)",marginTop:2}}>We reply within 24 hours on business days.</p>
                  </div>
                </div>

                {sent ? (
                  <div className="ctp-success">
                    <div className="ctp-success-icon"><CheckCircle size={30} style={{color:"#22c55e"}}/></div>
                    <h3 style={{fontWeight:700,fontSize:"1.05rem",marginBottom:6}}>Message Sent! 🎉</h3>
                    <p style={{fontSize:".85rem",color:"var(--text-secondary)",lineHeight:1.7}}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button className="btn btn-outline" style={{marginTop:14,fontSize:".8rem"}} onClick={()=>{setSent(false);setForm({name:"",email:"",phone:"",subject:"",message:""})}}>Send Another</button>
                  </div>
                ) : (
                  <div className="ctp-form-body">
                    <div className="ctp-form-row">
                      <div className="ctp-form-field">
                        <label className="form-label">Your Name *</label>
                        <input className="input" type="text" placeholder="e.g. Rafi Ahmed" value={form.name} onChange={e=>set("name",e.target.value)}/>
                      </div>
                      <div className="ctp-form-field">
                        <label className="form-label">Email Address *</label>
                        <input className="input" type="email" placeholder="you@email.com" value={form.email} onChange={e=>set("email",e.target.value)}/>
                      </div>
                    </div>
                    <div className="ctp-form-row">
                      <div className="ctp-form-field">
                        <label className="form-label">Phone Number</label>
                        <input className="input" type="tel" placeholder="+880 1XXXXXXXXX" value={form.phone} onChange={e=>set("phone",e.target.value)}/>
                      </div>
                      <div className="ctp-form-field">
                        <label className="form-label">Subject</label>
                        <input className="input" type="text" placeholder="e.g. Study in Sweden" value={form.subject} onChange={e=>set("subject",e.target.value)}/>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Message</label>
                      <textarea className="input" rows={4} placeholder="Tell us about your study goals, preferred country, and how we can help..." value={form.message} onChange={e=>set("message",e.target.value)} style={{resize:"vertical"}}/>
                    </div>
                    <button className="btn btn-accent ctp-send-btn" onClick={handleSubmit} disabled={sending}>
                      <Send size={14}/> {sending ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT — Offices + Map */}
            <div className="ctp-right">
              {/* Office tabs */}
              <div className="ctp-tabs">
                {siteConfig.offices.map((o,i)=>(
                  <button key={i} className={`ctp-tab${active===i?" ctp-tab-active":""}`} onClick={()=>setActive(i)}>
                    <span>{OFFICE_FLAGS[i]}</span>
                    <span>{o.label}</span>
                  </button>
                ))}
              </div>

              {/* Office info card */}
              <div className="card ctp-office-card">
                {[
                  {icon:MapPin, label:"Address",  val:siteConfig.offices[active].address},
                  {icon:Phone,  label:"Phone",    val:siteConfig.offices[active].phone},
                  {icon:Mail,   label:"Email",    val:siteConfig.email},
                  {icon:Clock,  label:"Hours",    val:siteConfig.offices[active].hours},
                ].map(({icon:Icon,label,val})=>(
                  <div key={label} className="ctp-info-row">
                    <div className="ctp-info-icon"><Icon size={13}/></div>
                    <div>
                      <div className="ctp-info-label">{label}</div>
                      <div className="ctp-info-val">{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map */}
              <div className="ctp-map">
                <iframe
                  key={active}
                  src={OFFICE_MAPS[active]}
                  width="100%" height="100%"
                  style={{border:0, borderRadius:14, display:"block"}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={siteConfig.offices[active].label}
                />
              </div>

              {/* WhatsApp */}
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer"
                className="btn btn-accent ctp-wa-cta">
                <MessageCircle size={15}/>
                Chat on WhatsApp — Fastest Response
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
