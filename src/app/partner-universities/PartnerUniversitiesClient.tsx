"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, ExternalLink, GraduationCap } from "lucide-react";
import { partnerUniversities, FLAG_CODES } from "@/data/content";
import { handleLogoError } from "@/lib/logoFallback";
import ConsultationButton from "@/components/ui/ConsultationButton";

// Map a partner-university flagCode (e.g. "au") back to its
// /study-destinations/[slug] page, so each country section can
// link straight through to the full destination guide.
const SLUG_BY_FLAG: Record<string, string> = Object.fromEntries(
  Object.entries(FLAG_CODES).map(([slug, code]) => [code, slug])
);

export default function PartnerUniversitiesClient() {
  const [search, setSearch] = useState("");
  const [activeCountry, setActiveCountry] = useState("all");

  const totalUnis = useMemo(
    () => partnerUniversities.reduce((n, g) => n + g.universities.length, 0),
    []
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return partnerUniversities
      .map(group => {
        const countryMatches = group.country.toLowerCase().includes(q);
        const unis = group.universities.filter(u =>
          q === "" || countryMatches || u.name.toLowerCase().includes(q) || u.type.toLowerCase().includes(q)
        );
        return { ...group, universities: unis };
      })
      .filter(group =>
        (activeCountry === "all" || group.country === activeCountry) &&
        group.universities.length > 0
      );
  }, [search, activeCountry]);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="pu-hero">
        <div className="pu-hero-bg"/>
        <div className="pu-hero-glow"/>
        <div className="container-xl pu-hero-inner">
          <span className="section-label">🏛️ Our Network</span>
          <h1 className="pu-hero-title">200+ Partner <span>Universities</span></h1>
          <p className="pu-hero-sub">We have direct partnerships with leading universities across Europe, UK, Canada, Australia &amp; Asia. Search below or filter by country to explore our full network.</p>

          <div className="pu-hero-stats">
            <div className="pu-hero-stat">
              <div className="pu-hero-stat-num">{totalUnis}+</div>
              <div className="pu-hero-stat-lbl">Institutions Listed</div>
            </div>
            <div className="pu-hero-stat">
              <div className="pu-hero-stat-num">{partnerUniversities.length}</div>
              <div className="pu-hero-stat-lbl">Countries</div>
            </div>
            <div className="pu-hero-stat">
              <div className="pu-hero-stat-num">200+</div>
              <div className="pu-hero-stat-lbl">Total Partnerships</div>
            </div>
          </div>

          <div className="pu-search-wrap">
            <Search size={17} className="pu-search-icon"/>
            <input
              type="text"
              className="pu-search-input"
              placeholder="Search by university or country..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ── Country filter chips ── */}
      <div className="pu-filter-bar">
        <div className="container-xl">
          <div className="pu-filter-scroll">
            <button
              className={`pu-chip${activeCountry === "all" ? " pu-chip-active" : ""}`}
              onClick={() => setActiveCountry("all")}
            >
              All Countries <span className="pu-chip-count">({totalUnis})</span>
            </button>
            {partnerUniversities.map(g => (
              <button
                key={g.country}
                className={`pu-chip${activeCountry === g.country ? " pu-chip-active" : ""}`}
                onClick={() => setActiveCountry(activeCountry === g.country ? "all" : g.country)}
              >
                <img src={`https://flagcdn.com/20x15/${g.flagCode}.png`} alt=""/>
                {g.country} <span className="pu-chip-count">({g.universities.length})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grouped sections ── */}
      <div className="container-xl pu-content">
        {filtered.length === 0 && (
          <div className="pu-empty">
            <div className="pu-empty-icon">🔍</div>
            <div className="pu-empty-title">No universities found</div>
            <div className="pu-empty-sub">Try a different search term or clear the country filter.</div>
          </div>
        )}

        {filtered.map(group => {
          const destSlug = SLUG_BY_FLAG[group.flagCode];
          return (
            <div key={group.country} id={group.country.toLowerCase().replace(/\s+/g,"-")} className="pu-country-section">
              <div className="pu-country-head">
                <img src={`https://flagcdn.com/80x60/${group.flagCode}.png`} alt={group.country} className="pu-country-flag"/>
                <h2 className="pu-country-name">{group.country}</h2>
                <span className="pu-country-count">{group.universities.length} Institutions</span>
                {destSlug && (
                  <Link href={`/study-destinations/${destSlug}`} className="pu-country-explore">
                    Explore {group.country} <ArrowRight size={12}/>
                  </Link>
                )}
              </div>
              <div className="pu-uni-grid">
                {group.universities.map((u, i) => (
                  <div key={i} className="pu-uni-card reveal">
                    <div className="pu-uni-logo-box">
                      <img src={u.logo} alt={u.name} onError={(e)=>handleLogoError(e,u.name)}/>
                    </div>
                    <div className="pu-uni-name">{u.name}</div>
                    <div className="pu-uni-type">{u.type}</div>
                    {u.description && <p className="pu-uni-desc">{u.description}</p>}
                    {u.website && (
                      <a href={u.website} target="_blank" rel="noreferrer" className="pu-uni-link">
                        Visit Website <ExternalLink size={11}/>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom CTA ── */}
      <section className="home-cta-banner">
        <div className="dot-pattern absolute inset-0 opacity-20"/>
        <div className="container-xl relative text-center reveal">
          <GraduationCap size={30} style={{color:"var(--gold)",marginBottom:14}}/>
          <h2 className="home-cta-title">Don't See Your Target University?</h2>
          <p className="home-cta-sub">We work with 200+ institutions worldwide — chances are we can help with yours too. Book a free consultation to find out.</p>
          <ConsultationButton label="Book Free Consultation" variant="accent" size="lg" className="mt-6"/>
        </div>
      </section>
    </div>
  );
}
