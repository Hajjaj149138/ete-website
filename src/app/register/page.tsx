"use client";
import { useState } from "react";
import { CheckCircle, Sparkles, Phone, Mail, AlertCircle, Loader } from "lucide-react";
import { destinations, siteConfig } from "@/data/content";

const LEVELS = ["Foundation / Diploma","Bachelor's","Master's","PhD","Work / Migration","Not sure yet"];
const IELTS  = ["4.5","5.0","5.5","6.0","6.5","7.0","7.5","8.0","8.5","9.0","Haven't taken IELTS"];

type Status = "idle" | "loading" | "success" | "error";

export default function RegisterPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");
  const [form, setForm] = useState({ name:"", phone:"", email:"", destination:"", level:"", ielts:"", message:"" });
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const resetForm = () => {
    setStatus("idle");
    setErrMsg("");
    setForm({ name:"", phone:"", email:"", destination:"", level:"", ielts:"", message:"" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setStatus("loading");
    try {
      const res  = await fetch("/api/consultation", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) setStatus("success");
      else { setStatus("error"); setErrMsg(data.error ?? "Something went wrong."); }
    } catch {
      setStatus("error");
      setErrMsg("Network error. Please call us directly.");
    }
  };

  return (
    <main style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"2rem 1rem" }}>
      <div className="ete-popup-modal" style={{ position:"relative", maxWidth:"680px", width:"100%" }}>

        {status === "success" ? (
          <div className="ete-consult-success">
            <div className="ete-consult-success-ring"><CheckCircle size={26} /></div>
            <h2 className="ete-consult-success-title">Consultation Booked! 🎉</h2>
            <p className="ete-consult-success-sub">Our expert team will contact you within <strong>24 hours</strong>.</p>
            <div className="ete-consult-success-btns">
              <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C+I+just+submitted+a+consultation+form+on+your+website.`}
                target="_blank" rel="noreferrer" className="ete-btn ete-btn-accent" style={{ justifyContent:"center" }}>
                Chat on WhatsApp Now →
              </a>
              <button onClick={resetForm} className="ete-btn ete-btn-outline" style={{ justifyContent:"center" }}>
                Submit Another
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="ete-consult-header">
              <div className="ete-consult-icon"><Sparkles size={15} /></div>
              <div>
                <h2 className="ete-consult-title">Book Free Consultation</h2>
                <p className="ete-consult-sub">Fill in your details — we'll reach out within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="ete-consult-form" noValidate>
              <div className="ete-consult-row">
                <div className="ete-consult-field">
                  <label className="ete-label">Full Name <span className="ete-req">*</span></label>
                  <input className="ete-input" required placeholder="Your full name" value={form.name} onChange={e => set("name", e.target.value)} />
                </div>
                <div className="ete-consult-field">
                  <label className="ete-label">Phone <span className="ete-req">*</span></label>
                  <input className="ete-input" required type="tel" placeholder="+880 17..." value={form.phone} onChange={e => set("phone", e.target.value)} />
                </div>
              </div>

              <div className="ete-consult-field">
                <label className="ete-label">Email Address</label>
                <input className="ete-input" type="email" placeholder="you@email.com" value={form.email} onChange={e => set("email", e.target.value)} />
              </div>

              <div className="ete-consult-row">
                <div className="ete-consult-field">
                  <label className="ete-label">Preferred Destination</label>
                  <select className="ete-input" value={form.destination} onChange={e => set("destination", e.target.value)}>
                    <option value="">Select country</option>
                    {destinations.map(d => <option key={d.slug} value={d.name}>{d.name}</option>)}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div className="ete-consult-field">
                  <label className="ete-label">Study Level</label>
                  <select className="ete-input" value={form.level} onChange={e => set("level", e.target.value)}>
                    <option value="">Select level</option>
                    {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>

              <div className="ete-consult-field">
                <label className="ete-label">IELTS Overall Score</label>
                <select className="ete-input" value={form.ielts} onChange={e => set("ielts", e.target.value)}>
                  <option value="">Select score (if taken)</option>
                  {IELTS.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div className="ete-consult-field">
                <label className="ete-label">Message <span style={{ color:"var(--text-muted)", fontWeight:400 }}>(optional)</span></label>
                <textarea className="ete-input" rows={2} placeholder="Your goals, timeline, or any questions..." value={form.message} onChange={e => set("message", e.target.value)} style={{ resize:"none" }} />
              </div>

              {status === "error" && (
                <div className="ete-consult-error"><AlertCircle size={13} /><span>{errMsg}</span></div>
              )}

              <button type="submit" disabled={status === "loading" || !form.name || !form.phone} className="ete-btn ete-btn-accent ete-consult-submit">
                {status === "loading"
                  ? <><Loader size={13} className="ete-spin" /> Submitting...</>
                  : <><Sparkles size={13} /> Book My Free Consultation</>}
              </button>

              <div className="ete-consult-alts">
                <a href={`tel:${siteConfig.phone}`} className="ete-consult-alt"><Phone size={10} /> {siteConfig.phone}</a>
                <span className="ete-consult-alt-sep">or</span>
                <a href={`mailto:${siteConfig.email}`} className="ete-consult-alt"><Mail size={10} /> {siteConfig.email}</a>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  );
}