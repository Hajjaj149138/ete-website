"use client";
import { useState } from "react";
import { CheckCircle, Send, Loader2, User, Phone, Mail, Calendar, BookOpen } from "lucide-react";

type Step = "form"|"sending"|"done"|"error";

export default function IELTSForm() {
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState({ name:"", phone:"", email:"", testType:"IELTS Academic", preferredDate:"" });
  const set = (k: keyof typeof form, v: string) => setForm(f=>({...f,[k]:v}));

  const submit = async () => {
    if (!form.name || !form.phone || !form.email) { alert("Please fill Name, Phone, and Email."); return; }
    setStep("sending");
    try {
      const res = await fetch("/api/consultation", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ name:form.name, phone:form.phone, email:form.email,
          message:`This student has submitted an IELTS registration request through the website. Test Type: ${form.testType}. Preferred Test Date: ${form.preferredDate||"Flexible"}. Please contact them to confirm their slot.`,
          subject:`IELTS Reg: ${form.testType} — ${form.name}` }),
      });
      setStep(res.ok ? "done" : "error");
    } catch { setStep("error"); }
  };

  if (step==="done") return (
    <div className="ielts-success">
      <div className="ielts-success-icon"><CheckCircle size={26}/></div>
      <h3 className="ielts-success-title">Registration Received!</h3>
      <p className="ielts-success-msg">We'll confirm your slot within 24 hours via phone or email. Thank you!</p>
      <button className="ete-btn ete-btn-outline ete-btn-sm"
        onClick={()=>{setStep("form");setForm({name:"",phone:"",email:"",testType:"IELTS Academic",preferredDate:""});}}>
        Register Another
      </button>
    </div>
  );
  if (step==="error") return (
    <div className="ielts-success ielts-error">
      <div className="ielts-success-icon" style={{color:"#ef4444",background:"rgba(239,68,68,.1)"}}>⚠️</div>
      <h3 className="ielts-success-title">Something went wrong</h3>
      <p className="ielts-success-msg">Please call us directly: <strong>+88 01896 511151</strong></p>
      <button className="ete-btn ete-btn-outline ete-btn-sm" onClick={()=>setStep("form")}>Try Again</button>
    </div>
  );

  return (
    <div className="ielts-form-box">
      <div className="ielts-form-hd">
        <div className="ielts-form-badge">📝 Register Now — It's Free</div>
        <h3 className="ielts-form-title">IELTS Test Registration</h3>
        <p className="ielts-form-sub">We'll book your slot and confirm within 24 hours.</p>
      </div>
      <div className="ielts-form-body">
        {/* Test type */}
        <div className="ielts-field-full">
          <label className="ielts-lbl"><BookOpen size={11}/> Select Test Type</label>
          <div className="ielts-test-row">
            {["IELTS Academic","IELTS General Training"].map(t=>(
              <button key={t} className={`ielts-type-btn${form.testType===t?" active":""}`} onClick={()=>set("testType",t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="ielts-grid">
          <div className="ielts-field">
            <label className="ielts-lbl"><User size={11}/> Full Name *</label>
            <input className="input" placeholder="Your full name" value={form.name} onChange={e=>set("name",e.target.value)}/>
          </div>
          <div className="ielts-field">
            <label className="ielts-lbl"><Phone size={11}/> Phone Number *</label>
            <input className="input" type="tel" placeholder="+880 1XXX XXXXXX" value={form.phone} onChange={e=>set("phone",e.target.value)}/>
          </div>
          <div className="ielts-field">
            <label className="ielts-lbl"><Mail size={11}/> Email Address *</label>
            <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={e=>set("email",e.target.value)}/>
          </div>
          <div className="ielts-field">
            <label className="ielts-lbl"><Calendar size={11}/> Preferred Test Date</label>
            <input className="input" type="date" value={form.preferredDate} onChange={e=>set("preferredDate",e.target.value)} min={new Date().toISOString().split("T")[0]}/>
          </div>
        </div>
        <button className="ete-btn ete-btn-accent ielts-submit" onClick={submit} disabled={step==="sending"}>
          {step==="sending" ? <><Loader2 size={14} style={{animation:"spin 1s linear infinite"}}/> Sending...</> : <><Send size={13}/> Submit Registration</>}
        </button>
        <p className="ielts-fine">We'll contact you within 24 hours · Free consultation included</p>
      </div>
    </div>
  );
}


  const submit = async () => {
    if (!form.name || !form.phone || !form.email) { alert("Please fill Name, Phone, and Email."); return; }
    setStep("sending");
    try {
      const res = await fetch("/api/consultation", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ name:form.name, phone:form.phone, email:form.email,
          message:`📚 IELTS REGISTRATION REQUEST\nTest Type: ${form.testType}\nPreferred Date: ${form.preferredDate||"Flexible"}\nNotes: ${form.message||"—"}\n\n[Source: Website IELTS Registration Form]`,
          subject:`IELTS Reg: ${form.testType} — ${form.name}` }),
      });
      setStep(res.ok ? "done" : "error");
    } catch { setStep("error"); }
  };

  if (step==="done") return (
    <div className="ielts-success">
      <div className="ielts-success-icon"><CheckCircle size={26}/></div>
      <h3 className="ielts-success-title">Registration Received!</h3>
      <p className="ielts-success-msg">We'll confirm your slot within 24 hours via phone or email. Thank you!</p>
      <button className="ete-btn ete-btn-outline ete-btn-sm"
        onClick={()=>{setStep("form");setForm({name:"",phone:"",email:"",testType:"IELTS Academic",preferredDate:"",message:""});}}>
        Register Another
      </button>
    </div>
  );
  if (step==="error") return (
    <div className="ielts-success ielts-error">
      <div className="ielts-success-icon" style={{color:"#ef4444",background:"rgba(239,68,68,.1)"}}>⚠️</div>
      <h3 className="ielts-success-title">Something went wrong</h3>
      <p className="ielts-success-msg">Please call us directly: <strong>+88 01896 511151</strong></p>
      <button className="ete-btn ete-btn-outline ete-btn-sm" onClick={()=>setStep("form")}>Try Again</button>
    </div>
  );

  return (
    <div className="ielts-form-box">
      <div className="ielts-form-hd">
        <div className="ielts-form-badge">📝 Register Now — It's Free</div>
        <h3 className="ielts-form-title">IELTS Test Registration</h3>
        <p className="ielts-form-sub">We'll book your slot and confirm within 24 hours.</p>
      </div>
      <div className="ielts-form-body">
        {/* Test type */}
        <div className="ielts-field-full">
          <label className="ielts-lbl"><BookOpen size={11}/> Select Test Type</label>
          <div className="ielts-test-row">
            {["IELTS Academic","IELTS General Training"].map(t=>(
              <button key={t} className={`ielts-type-btn${form.testType===t?" active":""}`} onClick={()=>set("testType",t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="ielts-grid">
          <div className="ielts-field">
            <label className="ielts-lbl"><User size={11}/> Full Name *</label>
            <input className="input" placeholder="Your full name" value={form.name} onChange={e=>set("name",e.target.value)}/>
          </div>
          <div className="ielts-field">
            <label className="ielts-lbl"><Phone size={11}/> Phone Number *</label>
            <input className="input" type="tel" placeholder="+880 1XXX XXXXXX" value={form.phone} onChange={e=>set("phone",e.target.value)}/>
          </div>
          <div className="ielts-field">
            <label className="ielts-lbl"><Mail size={11}/> Email Address *</label>
            <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={e=>set("email",e.target.value)}/>
          </div>
          <div className="ielts-field">
            <label className="ielts-lbl"><Calendar size={11}/> Preferred Test Date</label>
            <input className="input" type="date" value={form.preferredDate} onChange={e=>set("preferredDate",e.target.value)} min={new Date().toISOString().split("T")[0]}/>
          </div>
        </div>
        <div className="ielts-field-full">
          <label className="ielts-lbl">Additional Information</label>
          <textarea className="input" rows={2} value="IELTS Registration Request" readOnly style={{resize:"none",opacity:.6,cursor:"default",background:"var(--bg-alt)"}}/>
        </div>
        <button className="ete-btn ete-btn-accent ielts-submit" onClick={submit} disabled={step==="sending"}>
          {step==="sending" ? <><Loader2 size={14} style={{animation:"spin 1s linear infinite"}}/> Sending...</> : <><Send size={13}/> Submit Registration</>}
        </button>
        <p className="ielts-fine">We'll contact you within 24 hours · Free consultation included</p>
      </div>
    </div>
  );
}
