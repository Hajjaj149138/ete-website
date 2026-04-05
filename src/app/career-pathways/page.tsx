import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { careerPathways } from "@/data/content";
import ConsultationButton from "@/components/ui/ConsultationButton";
export const metadata = { title:"Career Pathways — Easy To Europe" };
export default function Page() {
  return (
    <div>
      <section className="page-hero hero-gradient">
        <div className="grid-pattern absolute inset-0 opacity-40" />
        <div className="container-xl relative">
          <span className="section-label">International Career</span>
          <h1 className="page-hero-title mt-2">Career Pathways Abroad</h1>
          <p className="page-hero-sub">Skilled worker migration, Germany work visas, and construction jobs in Cyprus — we guide you through every professional pathway.</p>
          <ConsultationButton label="Free Career Consultation" variant="accent" className="mt-5" />
        </div>
      </section>
      <section className="home-section" style={{ background:"var(--bg-base)" }}>
        <div className="container-xl">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:16 }}>
            {careerPathways.map(p => (
              <Link key={p.slug} href={`/career-pathways/${p.slug}`} className="card" style={{ padding:22, display:"block", textDecoration:"none" }}>
                <div className="service-icon" style={{ fontSize:"1.4rem" }}>✈️</div>
                <h2 style={{ fontWeight:700, fontSize:"0.92rem", marginBottom:5 }}>{p.name}</h2>
                <p style={{ fontSize:"0.76rem", color:"var(--text-secondary)", lineHeight:1.65 }}>{p.tagline}</p>
                <div style={{ display:"flex", alignItems:"center", gap:4, fontSize:"0.74rem", color:"var(--brand)", fontWeight:600, marginTop:12 }}>
                  Learn More <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
