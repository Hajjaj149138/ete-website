import { events } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import ConsultationButton from "@/components/ui/ConsultationButton";
import { Calendar, MapPin, Clock, ArrowLeft, Users, ExternalLink, CheckCircle, Share2 } from "lucide-react";

const TYPE_COLOR: Record<string,string> = {
  Seminar:"#1E40AF", Workshop:"#B45309", Webinar:"#6D28D9",
  Fair:"#065F46", "Info Session":"#0E7490", Other:"#374151",
};

function fmt(iso: string, type: "date"|"time"|"day"|"month"|"full") {
  const d = new Date(iso);
  if (type==="date")  return d.toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
  if (type==="time")  return d.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});
  if (type==="day")   return d.getDate().toString().padStart(2,"0");
  if (type==="month") return d.toLocaleString("en",{month:"short"}).toUpperCase();
  if (type==="full")  return d.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})+", "+d.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});
  return "";
}

export async function generateStaticParams() {
  return events.map(e => ({ id: e.id }));
}
export async function generateMetadata({ params }: { params: { id: string } }) {
  const evt = events.find(e => e.id === params.id);
  if (!evt) return {};
  return { title:`${evt.title} — Easy To Europe`, description: evt.description.slice(0,160) };
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const evt = events.find(e => e.id === params.id);
  if (!evt) notFound();
  const color = TYPE_COLOR[evt.type] ?? "#374151";
  const isPast = new Date(evt.endDate) < new Date();
  const isOnline = evt.location.toLowerCase().includes("online") || evt.location.toLowerCase().includes("zoom") || evt.location.toLowerCase().includes("google");

  return (
    <div>
      {/* ── Hero ── */}
      <section className="evt-hero" style={{background:`linear-gradient(135deg, var(--navy) 0%, ${color}22 100%)`}}>
        <div className="grid-pattern absolute inset-0 opacity-20"/>
        <div className="container-xl evt-hero-inner">
          <Link href="/" className="evt-back"><ArrowLeft size={13}/> Back to Home</Link>
          <div className="evt-hero-body">
            {/* Left */}
            <div className="evt-hero-left">
              <div className="evt-type-badge" style={{background:`${color}22`,color:color,borderColor:`${color}40`}}>
                {evt.type}
              </div>
              {isPast && <div className="evt-past-badge">Event Ended</div>}
              <h1 className="evt-title">{evt.title}</h1>
              <p className="evt-hero-desc">{evt.description}</p>

              {/* Meta row */}
              <div className="evt-meta-row">
                <div className="evt-meta-item">
                  <Calendar size={14} style={{color:color}}/>
                  <div>
                    <div className="evt-meta-lbl">Date</div>
                    <div className="evt-meta-val">{fmt(evt.startDate,"date")}</div>
                  </div>
                </div>
                <div className="evt-meta-item">
                  <Clock size={14} style={{color:color}}/>
                  <div>
                    <div className="evt-meta-lbl">Time</div>
                    <div className="evt-meta-val">{fmt(evt.startDate,"time")} – {fmt(evt.endDate,"time")}</div>
                  </div>
                </div>
                <div className="evt-meta-item">
                  <MapPin size={14} style={{color:color}}/>
                  <div>
                    <div className="evt-meta-lbl">{isOnline ? "Platform" : "Location"}</div>
                    <div className="evt-meta-val">{evt.location}</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              {!isPast && evt.registrationLink && evt.registrationLink !== "#" ? (
                <a href={evt.registrationLink} target="_blank" rel="noreferrer" className="ete-btn ete-btn-accent" style={{display:"inline-flex",fontSize:".82rem",padding:".65rem 1.5rem"}}>
                  <Users size={14}/> Register Now — Free
                </a>
              ) : !isPast ? (
                <ConsultationButton label="Register via WhatsApp" variant="accent"/>
              ) : (
                <div style={{fontSize:".78rem",color:"rgba(255,255,255,.45)",padding:"10px 0"}}>This event has ended. Check upcoming events below.</div>
              )}
            </div>

            {/* Right — date card */}
            <div className="evt-date-card" style={{borderColor:`${color}40`}}>
              <div className="evt-date-day" style={{color:color}}>{fmt(evt.startDate,"day")}</div>
              <div className="evt-date-month">{fmt(evt.startDate,"month")}</div>
              <div className="evt-date-year">{new Date(evt.startDate).getFullYear()}</div>
              <div className="evt-date-divider" style={{background:`${color}30`}}/>
              <div className="evt-date-time">{fmt(evt.startDate,"time")}</div>
              <div className="evt-date-lbl">Start Time</div>
              {isOnline
                ? <div className="evt-online-chip">🌐 Online Event</div>
                : <div className="evt-online-chip" style={{background:"rgba(34,197,94,.12)",color:"#22c55e"}}>📍 In Person</div>
              }
            </div>
          </div>
        </div>
      </section>

      {/* ── What to expect ── */}
      <section className="ete-section">
        <div className="container-xl">
          <div style={{display:"grid",gridTemplateColumns:"1fr",gap:20}}>
            <div className="card" style={{padding:"2rem"}}>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.1rem",marginBottom:"1.25rem"}}>
                What to Expect
              </h2>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:12}}>
                {[
                  {icon:"🎙️", title:"Expert Presentation",    desc:"In-depth information from our senior consultants"},
                  {icon:"❓", title:"Live Q&A Session",       desc:"Get your specific questions answered directly"},
                  {icon:"📋", title:"Free Document Review",   desc:"Bring your documents for a quick eligibility check"},
                  {icon:"🤝", title:"One-on-One Consult",     desc:"Private consultations available after the session"},
                ].map(c=>(
                  <div key={c.title} style={{display:"flex",gap:12,padding:"14px",background:"var(--bg-alt)",borderRadius:12,border:"1px solid var(--border)"}}>
                    <span style={{fontSize:"1.5rem",lineHeight:1,flexShrink:0}}>{c.icon}</span>
                    <div>
                      <div style={{fontWeight:700,fontSize:".8rem",marginBottom:3}}>{c.title}</div>
                      <div style={{fontSize:".72rem",color:"var(--text-secondary)",lineHeight:1.6}}>{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event image placeholder */}
            {evt.image ? (
              <div style={{borderRadius:16,overflow:"hidden",maxHeight:320}}>
                <img src={evt.image} alt={evt.title} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
              </div>
            ) : (
              <div className="card" style={{padding:"1.5rem",textAlign:"center",color:"var(--text-muted)",fontSize:".78rem",borderStyle:"dashed"}}>
                📸 Event image can be added by setting <code style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".68rem",color:"var(--gold)"}}>image: "url"</code> in the event data in <code style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".68rem",color:"var(--gold)"}}>content.ts</code>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Other events ── */}
      <section className="ete-section ete-bg-alt">
        <div className="container-xl">
          <h3 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1rem",marginBottom:"1.25rem"}}>Other Upcoming Events</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12}}>
            {events.filter(e=>e.id!==evt.id && new Date(e.endDate)>new Date()).slice(0,3).map(e=>{
              const c2 = TYPE_COLOR[e.type]??"#374151";
              return (
                <Link key={e.id} href={`/events/${e.id}`} style={{textDecoration:"none"}}>
                  <div className="card" style={{padding:"16px",transition:"transform .2s,box-shadow .2s",cursor:"pointer"}}>
                    <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                      <div style={{width:46,height:52,borderRadius:10,background:`${c2}12`,border:`1px solid ${c2}28`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.1rem",color:c2,lineHeight:1}}>{fmt(e.startDate,"day")}</div>
                        <div style={{fontSize:".5rem",fontFamily:"'JetBrains Mono',monospace",color:c2,fontWeight:700,letterSpacing:".05em"}}>{fmt(e.startDate,"month")}</div>
                      </div>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontSize:".6rem",fontWeight:700,color:c2,marginBottom:3,fontFamily:"'JetBrains Mono',monospace",textTransform:"uppercase"}}>{e.type}</div>
                        <div style={{fontWeight:700,fontSize:".82rem",marginBottom:4,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}>{e.title}</div>
                        <div style={{fontSize:".67rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:4}}><MapPin size={10}/>{e.location}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
