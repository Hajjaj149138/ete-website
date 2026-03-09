"use client";
/*
 * ADMIN EVENTS PANEL — /admin/events
 * Password: easytoeurope2025
 * Events saved to localStorage (browser-side)
 */
import { useState, useEffect } from "react";
import {
  Plus, Trash2, Edit3, X, Check, Lock, LogOut,
  Calendar, Shield, Star, Eye, EyeOff, AlertCircle,
  ChevronDown,
} from "lucide-react";
import type { Event } from "@/data/content";

const ADMIN_USER     = "easytoeurope";
const ADMIN_PASSWORD = "easytoeurope2025";
const EVENT_TYPES = ["Seminar","Workshop","Webinar","Fair","Info Session","Other"] as const;

function fmt(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});
}
function emptyEvent(): Event {
  return { id:`evt-${Date.now()}`, title:"", type:"Seminar", description:"", location:"", startDate:"", endDate:"", registrationLink:"", featured:false };
}
const TYPE_COLOR: Record<string,string> = {
  Seminar:"#1E40AF", Workshop:"#B45309", Webinar:"#6D28D9",
  Fair:"#065F46", "Info Session":"#0E7490", Other:"#374151",
};

/* ── Field component ── */
function Field({ label, required, children }: { label:string; required?:boolean; children:React.ReactNode }) {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:4}}>
      <label style={{fontSize:".7rem",fontWeight:600,color:"var(--text-secondary)"}}>
        {label}{required && <span style={{color:"#ef4444"}}> *</span>}
      </label>
      {children}
    </div>
  );
}

export default function AdminEventsPanel() {
  const [authed, setAuthed]   = useState(false);
  const [uname, setUname]     = useState("");
  const [pw, setPw]           = useState("");
  const [showPw, setShowPw]   = useState(false);
  const [pwErr, setPwErr]     = useState(false);
  const [events, setEvents]   = useState<Event[]>([]);
  const [editing, setEditing] = useState<Event|null>(null);
  const [isNew, setIsNew]     = useState(false);
  const [delId, setDelId]     = useState<string|null>(null);
  const [saved, setSaved]     = useState(false);

  useEffect(() => {
    if (authed) {
      try {
        const s = localStorage.getItem("ete-admin-events");
        if (s) setEvents(JSON.parse(s));
      } catch {}
    }
  }, [authed]);

  const persist = (evts: Event[]) => {
    setEvents(evts);
    localStorage.setItem("ete-admin-events", JSON.stringify(evts));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };
  const saveEvent = (evt: Event) => {
    const updated = isNew ? [...events, evt] : events.map(e => e.id === evt.id ? evt : e);
    persist(updated);
    setEditing(null);
  };
  const deleteEvent = (id: string) => { persist(events.filter(e => e.id !== id)); setDelId(null); };
  const handleLogin = () => {
    if (uname === ADMIN_USER && pw === ADMIN_PASSWORD) { setAuthed(true); setPwErr(false); }
    else { setPwErr(true); setTimeout(()=>setPwErr(false), 2500); }
  };

  /* ── Login screen ── */
  if (!authed) return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#0C1B35 0%,#1A336E 55%,#1E3D85 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",width:480,height:480,borderRadius:"50%",top:-120,right:-80,background:"radial-gradient(circle,rgba(201,168,76,.1) 0%,transparent 65%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",width:320,height:320,borderRadius:"50%",bottom:-60,left:-50,background:"radial-gradient(circle,rgba(37,99,235,.07) 0%,transparent 65%)",pointerEvents:"none"}}/>
      <div className="card" style={{padding:"2.25rem 2rem",maxWidth:400,width:"100%",borderRadius:22,boxShadow:"0 28px 72px rgba(0,0,0,.45)"}}>
        <div style={{textAlign:"center",marginBottom:"1.6rem"}}>
          <div style={{width:58,height:58,borderRadius:18,background:"linear-gradient(135deg,#C9A84C,#E8C96A)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",boxShadow:"0 8px 22px rgba(201,168,76,.32)"}}>
            <Shield size={26} color="#0f1e3d" strokeWidth={2.5}/>
          </div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.15rem",marginBottom:4}}>Admin Panel</h1>
          <p style={{fontSize:".71rem",color:"var(--text-muted)"}}>Events Management — Easy To Europe</p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <div>
            <label style={{display:"block",fontSize:".69rem",fontWeight:700,color:"var(--text-secondary)",marginBottom:5,textTransform:"uppercase",letterSpacing:".06em"}}>Username</label>
            <input className="input" type="text" placeholder="Enter username" autoFocus
              value={uname}
              onChange={e=>{setUname(e.target.value);setPwErr(false);}}
              onKeyDown={e=>e.key==="Enter"&&handleLogin()}
              style={pwErr?{borderColor:"#ef4444",boxShadow:"0 0 0 2px rgba(239,68,68,.12)"}:{}}/>
          </div>
          <div>
            <label style={{display:"block",fontSize:".69rem",fontWeight:700,color:"var(--text-secondary)",marginBottom:5,textTransform:"uppercase",letterSpacing:".06em"}}>Password</label>
            <div style={{position:"relative"}}>
              <input className="input" type={showPw?"text":"password"} placeholder="Enter password"
                value={pw}
                onChange={e=>{setPw(e.target.value);setPwErr(false);}}
                onKeyDown={e=>e.key==="Enter"&&handleLogin()}
                style={{paddingRight:"2.5rem",...(pwErr?{borderColor:"#ef4444",boxShadow:"0 0 0 2px rgba(239,68,68,.12)"}:{})}}/>
              <button onClick={()=>setShowPw(v=>!v)}
                style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",display:"flex",padding:2}}>
                {showPw?<EyeOff size={14}/>:<Eye size={14}/>}
              </button>
            </div>
          </div>
          {pwErr && (
            <div style={{display:"flex",alignItems:"center",gap:7,padding:"9px 12px",background:"rgba(239,68,68,.07)",border:"1px solid rgba(239,68,68,.18)",borderRadius:9,fontSize:".72rem",color:"#dc2626"}}>
              <AlertCircle size={13}/> Incorrect username or password
            </div>
          )}
          <button className="btn btn-primary" style={{width:"100%",justifyContent:"center",padding:".65rem",borderRadius:12,marginTop:2,fontSize:".87rem"}} onClick={handleLogin}>
            <Lock size={14}/> Sign In to Admin Panel
          </button>
        </div>
        <p style={{textAlign:"center",fontSize:".62rem",color:"var(--text-muted)",marginTop:16,lineHeight:1.7}}>Restricted area. Unauthorized access is prohibited.</p>
      </div>
    </div>
  );

  /* ── Edit / Create Form ── */
  if (editing) return (
    <div style={{minHeight:"100vh",background:"var(--bg-alt)",padding:"2rem 1rem"}}>
      <div style={{maxWidth:700,margin:"0 auto"}}>
        {/* Header */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.5rem"}}>
          <div>
            <div style={{fontSize:".65rem",fontFamily:"'JetBrains Mono',monospace",color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:".1em",marginBottom:4}}>
              {isNew?"Create New Event":"Edit Event"}
            </div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.1rem"}}>{isNew?"New Event":"Edit: "+editing.title}</h2>
          </div>
          <button className="btn btn-outline btn-sm" onClick={()=>setEditing(null)}><X size={13}/> Cancel</button>
        </div>

        <div className="card" style={{padding:28}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
            {/* Title */}
            <div style={{gridColumn:"span 2"}}>
              <Field label="Event Title" required>
                <input className="input" placeholder="e.g. Study in Sweden — Seminar 2025"
                  value={editing.title} onChange={e=>setEditing({...editing,title:e.target.value})}/>
              </Field>
            </div>
            {/* Type */}
            <Field label="Event Type" required>
              <select className="input" value={editing.type} onChange={e=>setEditing({...editing,type:e.target.value as any})}>
                {EVENT_TYPES.map(t=><option key={t}>{t}</option>)}
              </select>
            </Field>
            {/* Location */}
            <Field label="Location" required>
              <input className="input" placeholder="e.g. Dhaka Office / Online"
                value={editing.location} onChange={e=>setEditing({...editing,location:e.target.value})}/>
            </Field>
            {/* Dates */}
            <Field label="Start Date & Time" required>
              <input className="input" type="datetime-local"
                value={editing.startDate} onChange={e=>setEditing({...editing,startDate:e.target.value})}/>
            </Field>
            <Field label="End Date & Time" required>
              <input className="input" type="datetime-local"
                value={editing.endDate} onChange={e=>setEditing({...editing,endDate:e.target.value})}/>
            </Field>
            {/* Description */}
            <div style={{gridColumn:"span 2"}}>
              <Field label="Description">
                <textarea className="input" rows={3} placeholder="Short description of the event..."
                  value={editing.description} onChange={e=>setEditing({...editing,description:e.target.value})}/>
              </Field>
            </div>
            {/* Registration link */}
            <div style={{gridColumn:"span 2"}}>
              <Field label="Registration Link (optional)">
                <input className="input" type="url" placeholder="https://forms.google.com/..."
                  value={editing.registrationLink||""} onChange={e=>setEditing({...editing,registrationLink:e.target.value})}/>
              </Field>
            </div>
            {/* Featured */}
            <div style={{gridColumn:"span 2"}}>
              <label style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer",padding:"12px 16px",borderRadius:10,background:"var(--gold-soft)",border:"1px solid var(--gold-border)"}}>
                <input type="checkbox" checked={editing.featured||false}
                  onChange={e=>setEditing({...editing,featured:e.target.checked})}
                  style={{width:16,height:16,accentColor:"var(--gold)"}}/>
                <div>
                  <div style={{fontWeight:700,fontSize:".8rem",color:"var(--gold)"}}>⭐ Featured Event</div>
                  <div style={{fontSize:".68rem",color:"var(--text-muted)"}}>Featured events show larger cards at the top of the events section</div>
                </div>
              </label>
            </div>
          </div>

          <div style={{display:"flex",gap:10,marginTop:20,justifyContent:"flex-end"}}>
            <button className="btn btn-outline" onClick={()=>setEditing(null)}><X size={13}/> Cancel</button>
            <button className="btn btn-accent"
              onClick={()=>{
                if(!editing.title||!editing.startDate||!editing.endDate||!editing.location){
                  alert("Please fill: Title, Location, Start & End dates");return;
                }
                saveEvent(editing);
              }}>
              <Check size={13}/> {isNew?"Create Event":"Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  /* ── Main dashboard ── */
  const upcoming = events.filter(e=>new Date(e.endDate)>new Date()).sort((a,b)=>new Date(a.startDate).getTime()-new Date(b.startDate).getTime());
  const past     = events.filter(e=>new Date(e.endDate)<=new Date());

  return (
    <div style={{minHeight:"100vh",background:"var(--bg-alt)",paddingBottom:"4rem"}}>
      {/* Top bar */}
      <div style={{background:"var(--bg-card)",borderBottom:"1px solid var(--border)",padding:"0 1.5rem"}}>
        <div style={{maxWidth:900,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:60}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:34,height:34,borderRadius:9,background:"var(--grad-brand)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Shield size={16}/>
            </div>
            <div>
              <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".9rem"}}>Events Admin</div>
              <div style={{fontSize:".6rem",color:"var(--text-muted)",fontFamily:"'JetBrains Mono',monospace"}}>Easy To Europe</div>
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            {saved && <span style={{fontSize:".68rem",color:"#22c55e",display:"flex",alignItems:"center",gap:4}}><Check size={11}/> Saved!</span>}
            <button className="btn btn-accent btn-sm" onClick={()=>{setEditing(emptyEvent());setIsNew(true);}}>
              <Plus size={13}/> New Event
            </button>
            <button className="btn btn-outline btn-sm" onClick={()=>setAuthed(false)}><LogOut size={13}/> Logout</button>
          </div>
        </div>
      </div>

      <div style={{maxWidth:900,margin:"2rem auto",padding:"0 1rem"}}>
        {/* Stats */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:"1.5rem"}}>
          {[
            {label:"Upcoming Events",   val:upcoming.length,  color:"var(--sapphire)"},
            {label:"Past Events",       val:past.length,       color:"var(--text-muted)"},
            {label:"Total Created",     val:events.length,     color:"var(--gold)"},
          ].map(s=>(
            <div key={s.label} className="card" style={{padding:"16px 20px",display:"flex",alignItems:"center",gap:12}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.6rem",color:s.color}}>{s.val}</div>
              <div style={{fontSize:".72rem",color:"var(--text-secondary)"}}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Upcoming list */}
        <h3 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".95rem",marginBottom:"1rem",color:"var(--text-primary)"}}>
          Upcoming Events <span style={{fontSize:".7rem",fontWeight:400,color:"var(--text-muted)",marginLeft:6}}>({upcoming.length})</span>
        </h3>
        {upcoming.length === 0 ? (
          <div className="card" style={{padding:"2.5rem",textAlign:"center",color:"var(--text-muted)",fontSize:".8rem"}}>
            No upcoming events. <button style={{color:"var(--gold)",background:"none",border:"none",cursor:"pointer",fontWeight:600}} onClick={()=>{setEditing(emptyEvent());setIsNew(true);}}>+ Create one</button>
          </div>
        ) : upcoming.map(evt => (
          <div key={evt.id} className="card" style={{padding:"16px 20px",marginBottom:10,display:"flex",alignItems:"center",gap:14}}>
            {/* Type badge */}
            <div style={{width:40,height:40,borderRadius:10,background:TYPE_COLOR[evt.type]||"#374151",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:".58rem",fontWeight:700,textAlign:"center",flexShrink:0,fontFamily:"'JetBrains Mono',monospace",textTransform:"uppercase",lineHeight:1.2}}>
              {evt.type.slice(0,3)}
            </div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:3}}>
                <span style={{fontWeight:700,fontSize:".82rem"}}>{evt.title}</span>
                {evt.featured && <span style={{fontSize:".58rem",color:"var(--gold)"}}>⭐ Featured</span>}
              </div>
              <div style={{fontSize:".68rem",color:"var(--text-muted)",display:"flex",gap:10,flexWrap:"wrap"}}>
                <span>📅 {fmt(evt.startDate)}</span>
                <span>📍 {evt.location}</span>
              </div>
            </div>
            <div style={{display:"flex",gap:7,flexShrink:0}}>
              <button className="ete-admin-edit-btn" title="Edit" onClick={()=>{setEditing({...evt});setIsNew(false);}}>
                <Edit3 size={13}/>
              </button>
              {delId === evt.id ? (
                <>
                  <button className="ete-admin-del-btn" title="Confirm delete" style={{background:"#ef4444",color:"#fff"}} onClick={()=>deleteEvent(evt.id)}>
                    <Check size={13}/>
                  </button>
                  <button className="ete-admin-edit-btn" title="Cancel" onClick={()=>setDelId(null)}>
                    <X size={13}/>
                  </button>
                </>
              ) : (
                <button className="ete-admin-del-btn" title="Delete" onClick={()=>setDelId(evt.id)}>
                  <Trash2 size={13}/>
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Past events (collapsed) */}
        {past.length > 0 && (
          <details style={{marginTop:"1.5rem"}}>
            <summary style={{cursor:"pointer",fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".9rem",color:"var(--text-muted)",marginBottom:"1rem",listStyle:"none",display:"flex",alignItems:"center",gap:8}}>
              Past Events <span style={{fontSize:".7rem",fontWeight:400}}>({past.length})</span>
            </summary>
            {past.map(evt=>(
              <div key={evt.id} className="card" style={{padding:"14px 18px",marginBottom:8,display:"flex",alignItems:"center",gap:12,opacity:.65}}>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight:600,fontSize:".79rem",color:"var(--text-muted)"}}>{evt.title}</div>
                  <div style={{fontSize:".65rem",color:"var(--text-muted)"}}>Ended: {fmt(evt.endDate)}</div>
                </div>
                <button className="ete-admin-del-btn" onClick={()=>deleteEvent(evt.id)}><Trash2 size={12}/></button>
              </div>
            ))}
          </details>
        )}

        {/* Help box */}
        <div style={{marginTop:"2rem",padding:"18px 22px",background:"var(--gold-soft)",border:"1px solid var(--gold-border)",borderRadius:14}}>
          <div style={{fontWeight:700,fontSize:".8rem",color:"var(--gold)",marginBottom:8}}>💡 How Events Work</div>
          <div style={{fontSize:".73rem",color:"var(--text-secondary)",lineHeight:1.75}}>
            Events you create here will automatically appear on the public home page.<br/>
            Past events (after end date) are automatically hidden from visitors.<br/>
            Featured events show as large cards at the top of the events section.
          </div>
        </div>
      </div>
    </div>
  );
}
