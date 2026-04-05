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
            <div className="sd-globe-wrap">
              <div className="sd-globe-ring sd-ring1"/>
              <div className="sd-globe-ring sd-ring2"/>
              <div className="sd-globe-ring sd-ring3"/>
              <div className="sd-globe-center">
                <Globe size={42} style={{color:"var(--gold)",opacity:.8}}/>
                <div className="sd-globe-txt">12 Countries</div>
              </div>
              {/* Floating country dots */}
              {[
                {flag:"au",name:"AU",pos:"top:10%;left:12%"},
                {flag:"se",name:"SE",pos:"top:18%;right:15%"},
                {flag:"gb",name:"UK",pos:"top:40%;left:4%"},
                {flag:"ca",name:"CA",pos:"bottom:28%;left:18%"},
                {flag:"de",name:"DE",pos:"bottom:18%;right:12%"},
                {flag:"my",name:"MY",pos:"top:55%;right:6%"},
              ].map(({flag,name,pos},i)=>(
                <div key={flag} className="sd-dot-pin" style={{position:"absolute",...Object.fromEntries(pos.split(";").map(p=>{const[k,v]=p.trim().split(":");return[k.trim(),v.trim()]}))}} >
                  <img src={`https://flagcdn.com/20x15/${flag}.png`} width={20} height={15} alt={name} style={{borderRadius:3,boxShadow:"0 2px 8px rgba(0,0,0,.3)"}} loading="lazy"/>
                </div>
              ))}
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
                {/* Color top bar */}
                <div className="sd-card-bar" style={{background:dest.color}}/>
                <div className="sd-card-overlay"/>
                {/* Flag + region */}
                <div className="sd-card-head">
                  <div className="sd-card-flag-wrap" style={{background:`${dest.color}15`,border:`1px solid ${dest.color}28`}}>
                    <img src={getFlagUrl(dest.slug,"160x120")} width={64} height={48} alt={dest.name}
                      className="sd-card-flag" loading="lazy"/>
                  </div>
                  <div className="sd-card-region">{REGION_MAP[dest.slug]||"Europe"}</div>
                </div>
                {/* Info */}
                <div className="sd-card-body">
                  <h3 className="sd-card-name">{dest.name}</h3>
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
