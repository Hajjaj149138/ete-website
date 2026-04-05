import { notFound } from "next/navigation";
import { careerPathways } from "@/data/content";
import ConsultationButton from "@/components/ui/ConsultationButton";
import { CheckCircle } from "lucide-react";
interface Props { params: { slug:string } }
export async function generateStaticParams() { return careerPathways.map(p=>({slug:p.slug})); }
export default function Page({ params }:Props) {
  const pathway = careerPathways.find(p => p.slug === params.slug);
  if (!pathway) notFound();
  return (
    <div>
      <section className="page-hero hero-gradient">
        <div className="grid-pattern absolute inset-0 opacity-40" />
        <div className="container-xl relative">
          <span className="section-label">Career Pathway</span>
          <h1 className="page-hero-title mt-2">{pathway.name}</h1>
          <p className="page-hero-sub">{pathway.tagline}</p>
          <ConsultationButton label="Get Career Guidance" variant="accent" className="mt-5" />
        </div>
      </section>
      <section className="home-section" style={{ background:"var(--bg-base)" }}>
        <div className="container-xl">
          <div style={{ maxWidth:800, margin:"0 auto" }}>
            <div className="card" style={{ padding:24, marginBottom:16 }}>
              <h2 style={{ fontWeight:700, fontSize:"0.95rem", marginBottom:10 }}>Overview</h2>
              <p style={{ fontSize:"0.8rem", color:"var(--text-secondary)", lineHeight:1.75 }}>{pathway.overview}</p>
            </div>
            {"programs" in pathway && (pathway as any).programs?.map((prog:any) => (
              <div key={prog.name} className="card" style={{ padding:22, marginBottom:14 }}>
                <h3 style={{ fontWeight:700, fontSize:"0.92rem", marginBottom:4 }}>{prog.name}</h3>
                <div style={{ fontSize:"0.68rem", color:"var(--brand)", fontWeight:600, marginBottom:10, fontFamily:"'JetBrains Mono',monospace", textTransform:"uppercase" }}>{prog.subtitle}</div>
                <p style={{ fontSize:"0.78rem", color:"var(--text-secondary)", lineHeight:1.7, marginBottom:14 }}>{prog.description}</p>
                {"requirements" in prog && <div>
                  <div style={{ fontWeight:700, fontSize:"0.8rem", marginBottom:8 }}>Requirements</div>
                  {prog.requirements.map((r:string) => (
                    <div key={r} style={{ display:"flex", gap:8, marginBottom:5 }}>
                      <CheckCircle size={13} style={{ color:"#22c55e", flexShrink:0, marginTop:1 }} />
                      <span style={{ fontSize:"0.77rem", color:"var(--text-secondary)" }}>{r}</span>
                    </div>
                  ))}
                </div>}
              </div>
            ))}
            {"opportunities" in pathway && (pathway as any).opportunities?.map((opp:any) => (
              <div key={opp.country} className="card" style={{ padding:22, marginBottom:14 }}>
                <h3 style={{ fontWeight:700, fontSize:"0.92rem", marginBottom:4 }}>{opp.country} — {opp.role}</h3>
                <div style={{ fontSize:"0.78rem", color:"var(--accent)", fontWeight:700, marginBottom:10 }}>{opp.salary}</div>
                <p style={{ fontSize:"0.78rem", color:"var(--text-secondary)", lineHeight:1.7, marginBottom:14 }}>{opp.description}</p>
                <div style={{ fontWeight:700, fontSize:"0.8rem", marginBottom:8 }}>Benefits</div>
                {opp.benefits.map((b:string) => (
                  <div key={b} style={{ display:"flex", gap:8, marginBottom:5 }}>
                    <CheckCircle size={13} style={{ color:"#22c55e", flexShrink:0, marginTop:1 }} />
                    <span style={{ fontSize:"0.77rem", color:"var(--text-secondary)" }}>{b}</span>
                  </div>
                ))}
              </div>
            ))}
            <div style={{ textAlign:"center", marginTop:24 }}>
              <ConsultationButton label="Apply Now — Free Consultation" variant="accent" size="lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
