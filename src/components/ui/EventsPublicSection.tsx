"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, ChevronRight, ChevronLeft, Zap, ArrowRight } from "lucide-react";
import type { Event } from "@/data/content";
import { events as defaultEvents } from "@/data/content";

const STORAGE_KEY = "ete_admin_events";

function fmt(iso: string, type: "date"|"time"|"day"|"month"|"shortdate") {
  try {
    const d = new Date(iso);
    if (type==="date")       return d.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
    if (type==="shortdate")  return d.toLocaleDateString("en-GB",{day:"numeric",month:"short"});
    if (type==="time")       return d.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});
    if (type==="day")        return d.getDate().toString().padStart(2,"0");
    if (type==="month")      return d.toLocaleString("en",{month:"short"}).toUpperCase();
  } catch {}
  return "";
}

function useCountdown(iso: string) {
  const [txt, setTxt] = useState("");
  useEffect(() => {
    const tick = () => {
      const diff = new Date(iso).getTime() - Date.now();
      if (diff <= 0) { setTxt("Starting soon"); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      if (d > 0) setTxt(`${d}d ${h}h`);
      else setTxt(`${h}h left`);
    };
    tick();
    const t = setInterval(tick, 60000);
    return () => clearInterval(t);
  }, [iso]);
  return txt;
}

const TYPE_COLOR: Record<string,{bg:string}> = {
  Seminar:        {bg:"#1E40AF"},
  Workshop:       {bg:"#B45309"},
  Webinar:        {bg:"#6D28D9"},
  Fair:           {bg:"#065F46"},
  "Info Session": {bg:"#0E7490"},
  Other:          {bg:"#374151"},
};

function FeaturedSlide({ evt }: { evt: Event }) {
  const cd = useCountdown(evt.startDate);
  const tc = TYPE_COLOR[evt.type] ?? TYPE_COLOR.Other;
  const isOnline = evt.location.toLowerCase().includes("online")||evt.location.toLowerCase().includes("zoom");

  return (
    <div className="evt2-featured" style={{borderColor:`${tc.bg}25`}}>
      <div className="evt2-accent-bar" style={{background:tc.bg}}/>

      <div className="evt2-feat-top">
        <span className="evt2-type-pill" style={{background:`${tc.bg}14`,color:tc.bg,border:`1px solid ${tc.bg}28`}}>
          {evt.type}
        </span>
        {cd && <span className="evt2-countdown"><Zap size={10}/> {cd} left</span>}
        {evt.featured && <span className="evt2-star-badge">⭐ Featured</span>}
      </div>

      <div className="evt2-date-row">
        <div className="evt2-cal-block" style={{borderColor:`${tc.bg}22`}}>
          <div className="evt2-cal-day" style={{color:tc.bg}}>{fmt(evt.startDate,"day")}</div>
          <div className="evt2-cal-month">{fmt(evt.startDate,"month")}</div>
          <div className="evt2-cal-year">{new Date(evt.startDate).getFullYear()}</div>
        </div>
        <div className="evt2-date-meta">
          <div className="evt2-meta-row"><Clock size={12} style={{color:tc.bg,flexShrink:0}}/><span>{fmt(evt.startDate,"time")} – {fmt(evt.endDate,"time")}</span></div>
          <div className="evt2-meta-row"><MapPin size={12} style={{color:tc.bg,flexShrink:0}}/><span>{evt.location}</span></div>
          {isOnline && <div className="evt2-online-chip">🌐 Online Event</div>}
        </div>
      </div>

      <h3 className="evt2-feat-title">{evt.title}</h3>
      <p className="evt2-feat-desc">{evt.description}</p>

      <div style={{padding:"0 20px 20px"}}>
        <Link href={`/events/${evt.id}`} className="ete-btn ete-btn-accent ete-btn-sm" style={{display:"inline-flex"}}>
          View Details <ChevronRight size={13}/>
        </Link>
      </div>
    </div>
  );
}

export default function EventsPublicSection({ events: _ignored }: { events: Event[] }) {
  const [allEvents, setAllEvents] = useState<Event[]>(defaultEvents);
  const [featIdx, setFeatIdx]     = useState(0);
  const [paused, setPaused]       = useState(false);

  // Load from localStorage (admin panel changes) or fallback to default
  useEffect(()=>{
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setAllEvents(JSON.parse(raw));
    } catch {}
  },[]);

  const now = new Date();
  const upcoming = allEvents
    .filter(e => new Date(e.endDate) > now)
    .sort((a,b) => new Date(a.startDate).getTime()-new Date(b.startDate).getTime());

  if (upcoming.length === 0) return null;

  const pool = upcoming;
  const featured = pool[featIdx % pool.length];

  // Auto-slide featured
  useEffect(()=>{
    if (paused || pool.length <= 1) return;
    const t = setInterval(()=>setFeatIdx(i=>(i+1)%pool.length), 4000);
    return ()=>clearInterval(t);
  },[paused, pool.length]);

  const prev = () => { setFeatIdx(i=>(i-1+pool.length)%pool.length); setPaused(true); };
  const next = () => { setFeatIdx(i=>(i+1)%pool.length); setPaused(true); };

  return (
    <section className="ete-section ete-bg-alt">
      <div className="ete-container">
        <div className="ete-section-hd ete-center reveal">
          <span className="ete-tag"><Calendar size={10}/> Upcoming Events</span>
          <h2 className="ete-sec-title">Events & <span>Seminars</span></h2>
          <p className="ete-sec-sub">Join our free sessions, workshops, and university fairs.</p>
        </div>

        <div className="evt2-layout reveal">
          {/* LEFT — Auto-sliding featured */}
          <div className="evt2-left" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
            <FeaturedSlide evt={featured} key={featured.id}/>
            {pool.length > 1 && (
              <div className="evt2-nav">
                <button className="evt2-nav-btn" onClick={prev}><ChevronLeft size={14}/></button>
                <div className="evt2-dots">
                  {pool.map((_,i)=>{
                    const tc2 = TYPE_COLOR[pool[i].type]??TYPE_COLOR.Other;
                    const active = i===featIdx%pool.length;
                    return (
                      <button key={i}
                        className={`evt2-dot${active?" evt2-dot-active":""}`}
                        style={active?{background:tc2.bg,width:22}:{}}
                        onClick={()=>{setFeatIdx(i);setPaused(true);}}/>
                    );
                  })}
                </div>
                <button className="evt2-nav-btn" onClick={next}><ChevronRight size={14}/></button>
              </div>
            )}
          </div>

          {/* RIGHT — Vertical list of all events */}
          <div className="evt2-right">
            <div className="evt2-list-header">
              <h4 className="evt2-list-title">All Upcoming Events</h4>
              <span className="evt2-list-count">{upcoming.length} event{upcoming.length!==1?"s":""}</span>
            </div>
            <div className="evt2-list">
              {upcoming.map((evt)=>{
                const c2 = TYPE_COLOR[evt.type]??TYPE_COLOR.Other;
                const isActive = evt.id===featured.id;
                return (
                  <Link key={evt.id} href={`/events/${evt.id}`}
                    className={`evt2-list-item${isActive?" evt2-item-active":""}`}
                    style={isActive?{borderLeft:`3px solid ${c2.bg}`,background:`${c2.bg}05`}:{}}
                    onClick={()=>{setFeatIdx(upcoming.indexOf(evt));setPaused(true);}}>
                    <div className="evt2-item-date" style={{background:`${c2.bg}0E`,borderColor:`${c2.bg}22`}}>
                      <div className="evt2-item-day"  style={{color:c2.bg}}>{fmt(evt.startDate,"day")}</div>
                      <div className="evt2-item-month" style={{color:c2.bg}}>{fmt(evt.startDate,"month")}</div>
                    </div>
                    <div className="evt2-item-body">
                      <div className="evt2-item-top">
                        <span className="evt2-item-type" style={{color:c2.bg,background:`${c2.bg}0E`,border:`1px solid ${c2.bg}22`}}>{evt.type}</span>
                        {evt.featured && <span style={{fontSize:".52rem",color:"#C9A84C",flexShrink:0}}>⭐</span>}
                      </div>
                      <div className="evt2-item-title">{evt.title}</div>
                      <div className="evt2-item-meta">
                        <span><Clock size={9}/> {fmt(evt.startDate,"time")}</span>
                        <span><MapPin size={9}/> {evt.location.split(",")[0].trim()}</span>
                      </div>
                    </div>
                    <ChevronRight size={13} className="evt2-item-arrow"/>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
