"use client";
import { useState, useEffect } from "react";
import { events as defaultEvents } from "@/data/content";
import type { Event } from "@/data/content";
import { Plus, Trash2, Edit2, Check, X, Calendar, MapPin, Clock, Eye, EyeOff, ChevronDown } from "lucide-react";

const STORAGE_KEY = "ete_admin_events";
const PASS = "easytoeurope2025";
const TYPE_OPTIONS = ["Seminar","Workshop","Webinar","Fair","Info Session","Other"] as const;

function loadEvents(): Event[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return defaultEvents;
}
function saveEvents(evts: Event[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(evts));
}

const BLANK_EVENT: Omit<Event,"id"> = {
  title:"", type:"Seminar", description:"", location:"",
  startDate: new Date().toISOString().slice(0,16),
  endDate:   new Date(Date.now()+3*3600000).toISOString().slice(0,16),
  registrationLink:"#", featured:false, image:"",
};

function fmt(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})+" "+d.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});
  } catch { return iso; }
}

const TYPE_COLORS: Record<string,string> = {
  Seminar:"#1E40AF",Workshop:"#B45309",Webinar:"#6D28D9",
  Fair:"#065F46","Info Session":"#0E7490",Other:"#374151",
};

export default function AdminEventsPage() {
  const [auth, setAuth]       = useState(false);
  const [pw, setPw]           = useState("");
  const [pwErr, setPwErr]     = useState(false);
  const [events, setEvents]   = useState<Event[]>([]);
  const [editing, setEditing] = useState<Event|null>(null);
  const [isNew, setIsNew]     = useState(false);
  const [delId, setDelId]     = useState<string|null>(null);
  const [saved, setSaved]     = useState(false);

  useEffect(()=>{
    const a = sessionStorage.getItem("ete_admin_auth");
    if(a==="1"){ setAuth(true); setEvents(loadEvents()); }
  },[]);

  const login = ()=>{
    if(pw===PASS){ setAuth(true); sessionStorage.setItem("ete_admin_auth","1"); setEvents(loadEvents()); }
    else{ setPwErr(true); setTimeout(()=>setPwErr(false),2000); }
  };

  const save = (evt: Event)=>{
    const next = isNew ? [...events, evt] : events.map(e=>e.id===evt.id?evt:e);
    setEvents(next); saveEvents(next); setEditing(null); setIsNew(false);
    setSaved(true); setTimeout(()=>setSaved(false),2500);
  };
  const del  = (id: string)=>{
    const next = events.filter(e=>e.id!==id);
    setEvents(next); saveEvents(next); setDelId(null);
    setSaved(true); setTimeout(()=>setSaved(false),2500);
  };
  const addNew = ()=>{
    const id = "evt-"+Date.now();
    setEditing({id,...BLANK_EVENT}); setIsNew(true);
  };
  const resetToDefault = ()=>{
    if(confirm("Reset all events to default data? Custom events will be lost.")){
      localStorage.removeItem(STORAGE_KEY); setEvents(defaultEvents);
    }
  };

  if(!auth) return (
    <div style={{minHeight:"100vh",background:"var(--bg-base)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{width:340,background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:20,padding:"2.5rem",boxShadow:"0 24px 64px rgba(10,22,40,.12)"}}>
        <div style={{textAlign:"center",marginBottom:"1.75rem"}}>
          <div style={{fontSize:"2rem",marginBottom:8}}>🔐</div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.1rem",marginBottom:5}}>Events Admin</h1>
          <p style={{fontSize:".75rem",color:"var(--text-muted)"}}>Easy To Europe — Internal Panel</p>
        </div>
        <label className="ete-label">Password</label>
        <input className="ete-input" type="password" value={pw} onChange={e=>setPw(e.target.value)}
          onKeyDown={e=>e.key==="Enter"&&login()}
          placeholder="Enter admin password"
          style={pwErr?{borderColor:"#ef4444",boxShadow:"0 0 0 3px rgba(239,68,68,.12)"}:{}}/>
        {pwErr && <p style={{fontSize:".7rem",color:"#ef4444",marginTop:6}}>❌ Incorrect password</p>}
        <button className="ete-btn ete-btn-accent" style={{width:"100%",justifyContent:"center",marginTop:14}}
          onClick={login}>Enter Admin Panel</button>
      </div>
    </div>
  );

  const now = new Date();
  const upcoming = events.filter(e=>new Date(e.endDate)>now);
  const past     = events.filter(e=>new Date(e.endDate)<=now);

  return (
    <div style={{minHeight:"100vh",background:"var(--bg-base)",paddingTop:"1rem",paddingBottom:"4rem"}}>
      <div className="ete-container">
        {/* Header */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,padding:"1.5rem 0 2rem"}}>
          <div>
            <h1 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.3rem",marginBottom:4}}>Events Admin Panel</h1>
            <p style={{fontSize:".73rem",color:"var(--text-muted)"}}>Manage events shown on the website. Changes save immediately.</p>
          </div>
          <div style={{display:"flex",gap:9}}>
            {saved && <div style={{display:"flex",alignItems:"center",gap:6,padding:"7px 13px",borderRadius:9,background:"rgba(34,197,94,.1)",border:"1px solid rgba(34,197,94,.2)",fontSize:".73rem",color:"#22c55e",fontWeight:600}}><Check size={13}/> Saved!</div>}
            <button className="ete-btn btn-ghost ete-btn-sm" onClick={resetToDefault}>↩ Reset to Default</button>
            <button className="ete-btn ete-btn-accent ete-btn-sm" onClick={addNew}><Plus size={13}/> Add Event</button>
          </div>
        </div>

        {/* Stats */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginBottom:"2rem"}}>
          {[["📅","Total",events.length],["🟢","Upcoming",upcoming.length],["⏰","Past",past.length],["⭐","Featured",events.filter(e=>e.featured).length]].map(([icon,lbl,val])=>(
            <div key={String(lbl)} style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:14,padding:"14px 16px",display:"flex",alignItems:"center",gap:11}}>
              <span style={{fontSize:"1.4rem"}}>{icon}</span>
              <div><div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.1rem",color:"var(--gold)",lineHeight:1}}>{val}</div><div style={{fontSize:".6rem",color:"var(--text-muted)",marginTop:2,textTransform:"uppercase",letterSpacing:".08em",fontFamily:"'JetBrains Mono',monospace"}}>{lbl}</div></div>
            </div>
          ))}
        </div>

        {/* Events list */}
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {events.length===0 && (
            <div style={{textAlign:"center",padding:"3rem",background:"var(--bg-card)",border:"1px dashed var(--border-md)",borderRadius:16}}>
              <div style={{fontSize:"2rem",marginBottom:10}}>📭</div>
              <p style={{fontSize:".8rem",color:"var(--text-muted)"}}>No events yet. Click "Add Event" to create your first one.</p>
            </div>
          )}
          {events.map(evt=>{
            const isPast = new Date(evt.endDate) <= now;
            const color  = TYPE_COLORS[evt.type] ?? "#374151";
            return (
              <div key={evt.id} style={{
                background:"var(--bg-card)", border:"1px solid var(--border)", borderRadius:16,
                padding:"16px 18px", display:"flex", alignItems:"flex-start", gap:14, flexWrap:"wrap",
                opacity:isPast?.65:1,
                borderLeft:`3px solid ${color}`,
              }}>
                <div style={{flex:1,minWidth:200}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6,flexWrap:"wrap"}}>
                    <span style={{fontSize:".58rem",fontWeight:700,color,background:`${color}12`,border:`1px solid ${color}22`,padding:"1px 8px",borderRadius:999,fontFamily:"'JetBrains Mono',monospace",textTransform:"uppercase",letterSpacing:".09em"}}>{evt.type}</span>
                    {evt.featured && <span style={{fontSize:".55rem",fontWeight:700,color:"#C9A84C",background:"rgba(201,168,76,.1)",border:"1px solid rgba(201,168,76,.2)",padding:"1px 7px",borderRadius:999}}>⭐ Featured</span>}
                    {isPast && <span style={{fontSize:".55rem",fontWeight:700,color:"#8FA3BF",background:"rgba(143,163,191,.1)",padding:"1px 7px",borderRadius:999}}>Ended</span>}
                  </div>
                  <h3 style={{fontWeight:700,fontSize:".88rem",marginBottom:5,lineHeight:1.3}}>{evt.title}</h3>
                  <div style={{display:"flex",flexWrap:"wrap",gap:10,fontSize:".68rem",color:"var(--text-muted)"}}>
                    <span style={{display:"flex",alignItems:"center",gap:4}}><Calendar size={11}/>{fmt(evt.startDate)}</span>
                    <span style={{display:"flex",alignItems:"center",gap:4}}><MapPin size={11}/>{evt.location}</span>
                  </div>
                </div>
                <div style={{display:"flex",gap:7,flexShrink:0}}>
                  <a href={`/events/${evt.id}`} target="_blank" className="ete-admin-edit-btn" style={{textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center"}} title="Preview"><Eye size={13}/></a>
                  <button className="ete-admin-edit-btn" onClick={()=>{setEditing(evt);setIsNew(false);}} title="Edit"><Edit2 size={13}/></button>
                  {delId===evt.id ? (
                    <>
                      <button className="ete-admin-del-btn" onClick={()=>del(evt.id)} title="Confirm delete"><Check size={13}/></button>
                      <button className="ete-admin-edit-btn" onClick={()=>setDelId(null)} title="Cancel"><X size={13}/></button>
                    </>
                  ) : (
                    <button className="ete-admin-del-btn" onClick={()=>setDelId(evt.id)} title="Delete"><Trash2 size={13}/></button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Edit modal */}
      {editing && <EventModal evt={editing} isNew={isNew} onSave={save} onClose={()=>{setEditing(null);setIsNew(false);}}/>}
    </div>
  );
}

function EventModal({evt,isNew,onSave,onClose}:{evt:Event;isNew:boolean;onSave:(e:Event)=>void;onClose:()=>void}) {
  const [form, setForm] = useState<Event>(evt);
  const set = (k: keyof Event, v: any) => setForm(f=>({...f,[k]:v}));

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.55)",backdropFilter:"blur(6px)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}>
      <div style={{width:"100%",maxWidth:600,maxHeight:"90vh",overflow:"auto",background:"var(--bg-card)",borderRadius:20,boxShadow:"0 24px 64px rgba(0,0,0,.3)",border:"1px solid var(--border)"}}>
        <div style={{padding:"1.5rem 1.75rem",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1rem"}}>{isNew?"Add New Event":"Edit Event"}</h2>
          <button style={{width:32,height:32,borderRadius:9,border:"1px solid var(--border)",background:"var(--bg-alt)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-muted)"}} onClick={onClose}><X size={15}/></button>
        </div>
        <div style={{padding:"1.5rem 1.75rem",display:"flex",flexDirection:"column",gap:14}}>
          <div>
            <label className="ete-label">Event Title *</label>
            <input className="ete-input" value={form.title} onChange={e=>set("title",e.target.value)} placeholder="e.g. Free Sweden University Fair 2026"/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            <div>
              <label className="ete-label">Type *</label>
              <select className="ete-input" value={form.type} onChange={e=>set("type",e.target.value as any)}>
                {TYPE_OPTIONS.map(t=><option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="ete-label">Location *</label>
              <input className="ete-input" value={form.location} onChange={e=>set("location",e.target.value)} placeholder="Online (Zoom) or Office address"/>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            <div>
              <label className="ete-label">Start Date & Time *</label>
              <input className="ete-input" type="datetime-local" value={form.startDate} onChange={e=>set("startDate",e.target.value)}/>
            </div>
            <div>
              <label className="ete-label">End Date & Time *</label>
              <input className="ete-input" type="datetime-local" value={form.endDate} onChange={e=>set("endDate",e.target.value)}/>
            </div>
          </div>
          <div>
            <label className="ete-label">Description *</label>
            <textarea className="ete-input" value={form.description} onChange={e=>set("description",e.target.value)} placeholder="Describe what attendees will learn and experience..." style={{minHeight:90}}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            <div>
              <label className="ete-label">Registration Link</label>
              <input className="ete-input" value={form.registrationLink} onChange={e=>set("registrationLink",e.target.value)} placeholder="https:// or #"/>
            </div>
            <div>
              <label className="ete-label">Event Image URL (optional)</label>
              <input className="ete-input" value={form.image||""} onChange={e=>set("image",e.target.value)} placeholder="https://your-image-url.jpg"/>
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",background:"var(--bg-alt)",borderRadius:11,border:"1px solid var(--border)"}}>
            <input type="checkbox" id="featured" checked={form.featured} onChange={e=>set("featured",e.target.checked)} style={{width:16,height:16,cursor:"pointer"}}/>
            <label htmlFor="featured" style={{fontSize:".78rem",fontWeight:600,cursor:"pointer"}}>⭐ Mark as Featured (shows as large hero card)</label>
          </div>
          <div style={{display:"flex",gap:10,paddingTop:4}}>
            <button className="ete-btn ete-btn-outline" style={{flex:1,justifyContent:"center"}} onClick={onClose}>Cancel</button>
            <button className="ete-btn ete-btn-accent" style={{flex:1,justifyContent:"center"}}
              onClick={()=>{ if(form.title&&form.startDate&&form.endDate&&form.location) onSave(form); }}
              disabled={!form.title||!form.startDate||!form.endDate||!form.location}>
              <Check size={14}/> {isNew?"Add Event":"Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
