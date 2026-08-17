import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { events } from "@/data/content";
import { getCurrentOccurrence } from "@/lib/eventDates";

export const metadata: Metadata = {
  title: "Upcoming Events & Seminars | Easy To Europe",
  description:
    "Browse all upcoming Easy To Europe events — free study-abroad fairs, scholarship seminars, and visa masterclasses across 12+ destinations.",
  alternates: { canonical: "/events" },
  openGraph: {
    type: "website",
    url: "https://easytoeurope.com/events",
    title: "Upcoming Events & Seminars | Easy To Europe",
    description: "Browse all upcoming free study-abroad fairs, seminars, and masterclasses.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Easy To Europe Events" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upcoming Events & Seminars | Easy To Europe",
    description: "Browse all upcoming free study-abroad fairs, seminars, and masterclasses.",
    images: ["/og-image.jpg"],
  },
};

const TYPE_COLOR: Record<string, string> = {
  Seminar: "#1E40AF", Workshop: "#B45309", Webinar: "#6D28D9",
  Fair: "#065F46", "Info Session": "#0E7490", Other: "#374151",
};

function fmt(d: Date) {
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
function fmtTime(d: Date) {
  return d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

export default function EventsIndexPage() {
  // Every event repeats every 3 months — roll each one forward to its
  // current/next occurrence before listing, same as the homepage section.
  const upcoming = events
    .map(e => {
      const occ = getCurrentOccurrence(e.startDate, e.endDate);
      return { ...e, _start: occ.startDate, _end: occ.endDate };
    })
    .sort((a, b) => a._start.getTime() - b._start.getTime());

  return (
    <main>
      <section className="ev-idx-hero">
        <div className="ev-idx-hero-bg" />
        <div className="ete-container ev-idx-hero-inner">
          <span className="section-label"><Calendar size={9} /> Events &amp; Seminars</span>
          <h1 className="ev-idx-title">Upcoming <span>Events</span></h1>
          <p className="ev-idx-sub">
            Free fairs, scholarship seminars, and visa masterclasses — meet our consultants in person or online.
          </p>
        </div>
      </section>

      <section className="ev-idx-body">
        <div className="ete-container">
          {upcoming.length === 0 ? (
            <div className="ev-idx-empty">
              <p>No upcoming events right now — check back soon, or book a free 1-to-1 consultation instead.</p>
              <Link href="/register" className="ete-btn ete-btn-accent">Book Free Consultation</Link>
            </div>
          ) : (
            <div className="ev-idx-grid">
              {upcoming.map(evt => {
                const c = TYPE_COLOR[evt.type] ?? TYPE_COLOR.Other;
                return (
                  <Link key={evt.id} href={evt.path || `/events/${evt.id}`} className="ev-idx-card">
                    <div className="ev-idx-card-top" style={{ background: `${c}12`, borderColor: `${c}28` }}>
                      <div className="ev-idx-card-date" style={{ color: c }}>
                        <span className="ev-idx-card-day">{evt._start.getDate().toString().padStart(2, "0")}</span>
                        <span className="ev-idx-card-month">{evt._start.toLocaleString("en", { month: "short" }).toUpperCase()}</span>
                      </div>
                      <span className="ev-idx-card-type" style={{ background: c, color: "#fff" }}>{evt.type}</span>
                    </div>
                    <div className="ev-idx-card-body">
                      <h3 className="ev-idx-card-title">{evt.title}</h3>
                      <p className="ev-idx-card-desc">{evt.description}</p>
                      <div className="ev-idx-card-meta">
                        <span><Clock size={12} /> {fmt(evt._start)}{evt._start.toDateString() !== evt._end.toDateString() ? ` – ${fmt(evt._end)}` : ""}</span>
                        <span><MapPin size={12} /> {evt.location}</span>
                      </div>
                    </div>
                    <div className="ev-idx-card-foot">
                      <span>View Details</span> <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
