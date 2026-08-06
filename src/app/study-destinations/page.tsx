import Link from "next/link";
import { ArrowRight, Globe, GraduationCap, Users } from "lucide-react";
import { destinations, getFlagUrl } from "@/data/content";
import ConsultationButton from "@/components/ui/ConsultationButton";
export const metadata = { title:"Study Destinations — Easy To Europe", description:"Explore 12+ study destinations worldwide." };

const REGION_MAP: Record<string,string> = {
  australia:"Oceania", sweden:"Europe", "united-kingdom":"Europe", canada:"North America",
  hungary:"Europe", lithuania:"Europe", malaysia:"Asia", austria:"Europe",
  denmark:"Europe", cyprus:"Europe", netherlands:"Europe", malta:"Europe", germany:"Europe",
};

export default function Page() {
  // A curated set of destination photos for the hero's postcard stack
  const featured = ["australia", "sweden", "canada"].map(s => destinations.find(d => d.slug === s)!).filter(Boolean);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="sd-hero">
        {/* World map SVG background pattern */}
        <div className="sd-hero-bg" />
        <div className="sd-hero-glow1" />
        <div className="sd-hero-glow2" />
        <div className="container-xl sd-hero-inner">
          <div className="sd-hero-left reveal">
            <span className="section-label"><Globe size={9}/> 12+ Countries</span>
            <h1 className="sd-hero-title">
              Find Your Perfect<br/>
              <span>Study Destination</span>
            </h1>
            <p className="sd-hero-sub">From Australia to Malta — world-class universities, affordable costs, and expert visa support. Click any country to explore fully.</p>
            <div className="sd-hero-stats">
              {[["1,000+","Students Placed"],["98%","Visa Success"],["12+","Countries"],["5+ Years Exp."]].map(([n,l])=>(
                <div key={l} className="sd-hero-stat">
                  <div className="sd-hero-stat-num">{n}</div>
                  <div className="sd-hero-stat-lbl">{l}</div>
                </div>
              ))}
            </div>
            <ConsultationButton label="Not sure? Get free advice" variant="accent" size="lg" />
          </div>
          <div className="sd-hero-right reveal delay-2">
            <div className="sd-stack">
              <div className="sd-orbit-ring"/>
              {featured[0] && (
                <div className="sd-stack-card sd-stack-c1">
                  <img src={featured[0].image} alt={featured[0].name} loading="lazy"/>
                  <div className="sd-stack-flag">
                    <img src={getFlagUrl(featured[0].slug,"40x30")} alt=""/> {featured[0].name}
                  </div>
                </div>
              )}
              {featured[1] && (
                <div className="sd-stack-card sd-stack-c2">
                  <img src={featured[1].image} alt={featured[1].name} loading="lazy"/>
                  <div className="sd-stack-flag">
                    <img src={getFlagUrl(featured[1].slug,"40x30")} alt=""/> {featured[1].name}
                  </div>
                </div>
              )}
              {featured[2] && (
                <div className="sd-stack-card sd-stack-c3">
                  <img src={featured[2].image} alt={featured[2].name} loading="lazy"/>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="ete-section" style={{background:"var(--bg-base)"}}>
        <div className="container-xl">
          <div className="sd-grid-header ete-center reveal">
            <span className="section-label">All Destinations</span>
            <h2 className="ete-sec-title">Choose Your <span>Country</span></h2>
            <p className="ete-sec-sub">Each destination offers unique advantages. Explore costs, universities, IELTS requirements and more.</p>
          </div>

          <div className="sd-cards-grid">
            {destinations.map((dest, i) => (
              <Link key={dest.slug} href={`/study-destinations/${dest.slug}`}
                className={`sd-card reveal delay-${(i % 4) + 1}`}>
                {/* Photo */}
                <div className="sd-card-photo">
                  <img src={dest.image} alt={dest.name} loading="lazy"/>
                  <div className="sd-card-photo-scrim"/>
                  <div className="sd-card-region">{REGION_MAP[dest.slug]||"Europe"}</div>
                  <div className="sd-card-flag-chip">
                    <img src={getFlagUrl(dest.slug,"40x30")} alt={dest.name} loading="lazy"/>
                  </div>
                  <div className="sd-card-name-onphoto">{dest.name}</div>
                </div>
                {/* Ticket perforation */}
                <div className="sd-card-perf"/>
                {/* Info */}
                <div className="sd-card-body">
                  <p className="sd-card-tag">{dest.tagline}</p>
                  {/* Stats row */}
                  <div className="sd-card-stats">
                    <div className="sd-stat">
                      <span className="sd-stat-lbl">IELTS</span>
                      <span className="sd-stat-val">{dest.ielts.min}</span>
                    </div>
                    <div className="sd-stat-sep"/>
                    <div className="sd-stat">
                      <span className="sd-stat-lbl">Visa</span>
                      <span className="sd-stat-val">{dest.visa}</span>
                    </div>
                    <div className="sd-stat-sep"/>
                    <div className="sd-stat">
                      <span className="sd-stat-lbl">Tuition</span>
                      <span className="sd-stat-val" style={{fontSize:".64rem"}}>{dest.tuition.split(" ")[0]}</span>
                    </div>
                  </div>
                </div>
                {/* CTA */}
                <div className="sd-card-foot">
                  <span className="sd-card-unis"><GraduationCap size={11}/> {(dest as any).uniCount || dest.universities.length + " Universities"}</span>
                  <span className="sd-card-cta">Explore <ArrowRight size={11}/></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="home-cta-banner">
        <div className="dot-pattern absolute inset-0 opacity-20"/>
        <div className="container-xl relative text-center reveal">
          <div className="sd-cta-flags">
            {["au","se","gb","ca","de","my"].map(f=>(
              <img key={f} src={`https://flagcdn.com/24x18/${f}.png`} width={24} height={18} alt={f}
                style={{borderRadius:3,boxShadow:"0 2px 8px rgba(0,0,0,.3)"}} loading="lazy"/>
            ))}
          </div>
          <h2 className="home-cta-title">Not Sure Which Country is Right for You?</h2>
          <p className="home-cta-sub">Book a free consultation. Our experts will match you with the perfect destination based on your profile, budget, and career goals.</p>
          <ConsultationButton label="Get Free Country Matching" variant="accent" size="lg" className="mt-6"/>
        </div>
      </section>
    </div>
  );
}
