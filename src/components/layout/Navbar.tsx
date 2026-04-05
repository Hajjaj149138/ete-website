"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, X, Menu, Moon, Sun, Sparkles, Phone } from "lucide-react";
import { navLinks, siteConfig, FLAG_CODES } from "@/data/content";
import { useTheme } from "@/lib/ThemeContext";
import { useConsultation } from "@/lib/ConsultationContext";

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown]     = useState<string|null>(null);
  const [mobileExp, setMobileExp]   = useState<string|null>(null);
  const { isDark, toggleTheme }     = useTheme();
  const { openConsultation }        = useConsultation();
  const pathname = usePathname();
  const timer = useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn(); window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const openDd  = (label: string) => { if (timer.current) clearTimeout(timer.current); setDropdown(label); };
  const closeDd = () => { timer.current = setTimeout(() => setDropdown(null), 160); };

  return (
    <>
      {/* ── Announcement bar ── */}
      <div className="nav-ann-bar">
        <div className="nav-ann-dot"/>
        <span>🚀 Free Consultation Available — Expert guidance for your global journey</span>
        <button onClick={openConsultation}>Book Now →</button>
      </div>

      {/* ── Main header ── */}
      <header className={`nav-header${scrolled ? " nav-scrolled" : ""}`}>
        <div className="ete-container nav-inner">

          {/* Logo */}
          <Link href="/" className="nav-logo">
            <div className="nav-logo-mark">
              <img src="/certs/logo.png" alt="Easy To Europe" />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-links nav-lg-show">
            {navLinks.map(link => (
              <div key={link.label} className="nav-item"
                onMouseEnter={() => link.children && openDd(link.label)}
                onMouseLeave={() => link.children && closeDd()}>
                {link.children ? (
                  <button className={`nav-link${pathname.startsWith(link.href) ? " nav-active" : ""}`}>
                    {link.label}
                    <ChevronDown size={11} className={`nav-chevron${dropdown===link.label?" nav-open":""}`}/>
                  </button>
                ) : (
                  <Link href={link.href} className={`nav-link${pathname===link.href ? " nav-active" : ""}`}>
                    {link.label}
                  </Link>
                )}
                {link.children && dropdown === link.label && (
                  <div className="nav-dropdown"
                    onMouseEnter={() => openDd(link.label)}
                    onMouseLeave={() => closeDd()}>
                    {link.children.map(c => {
                      const slug = c.href.split("/").pop() ?? "";
                      const flagCode = FLAG_CODES[slug];
                      const labelText = c.label.replace(/^[^a-zA-Z]+/, "").trim();
                      return (
                        <Link key={c.href} href={c.href}
                          className={`nav-dd-item${pathname===c.href?" nav-active":""}`}>
                          {flagCode
                            ? <img src={`https://flagcdn.com/20x15/${flagCode}.png`} width={20} height={15} alt=""
                                style={{borderRadius:3,flexShrink:0,boxShadow:"0 1px 3px rgba(0,0,0,.12)"}} loading="lazy"/>
                            : null}
                          {labelText || c.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <button className="nav-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              <span className="nav-sun"><Sun size={14}/></span>
              <span className="nav-moon"><Moon size={14}/></span>
            </button>
            <button className="ete-btn ete-btn-accent nav-cta-btn nav-lg-show" onClick={openConsultation}>
              <Sparkles size={12}/> Free Consultation
            </button>
            <button className="nav-mob-btn nav-lg-hide" onClick={() => setMobileOpen(v=>!v)} aria-label="Menu">
              {mobileOpen ? <X size={18}/> : <Menu size={18}/>}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="nav-mobile-overlay">
          <div className="ete-container" style={{paddingTop:"1rem",paddingBottom:"2rem"}}>
            {navLinks.map(link => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button className={`nav-mob-link${pathname.startsWith(link.href)?" nav-active":""}`}
                      onClick={()=>setMobileExp(mobileExp===link.label?null:link.label)}>
                      {link.label}
                      <ChevronDown size={14} style={{transition:"transform .2s",transform:mobileExp===link.label?"rotate(180deg)":"none"}}/>
                    </button>
                    {mobileExp===link.label && (
                      <div className="nav-mob-sub">
                        {link.children.map(c => {
                          const slug = c.href.split("/").pop() ?? "";
                          const flagCode = FLAG_CODES[slug];
                          const labelText = c.label.replace(/^[^a-zA-Z]+/,"").trim();
                          return (
                            <Link key={c.href} href={c.href}
                              className="nav-mob-sub-link"
                              onClick={()=>setMobileOpen(false)}>
                              {flagCode && <img src={`https://flagcdn.com/20x15/${flagCode}.png`} width={18} height={13} alt="" style={{borderRadius:2}} loading="lazy"/>}
                              {labelText || c.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className={`nav-mob-link${pathname===link.href?" nav-active":""}`}
                    onClick={()=>setMobileOpen(false)}>{link.label}</Link>
                )}
              </div>
            ))}
            <div className="nav-mob-ctas">
              <a href={`tel:${siteConfig.phone}`} className="ete-btn ete-btn-outline" style={{justifyContent:"center"}}>
                <Phone size={14}/> {siteConfig.phone}
              </a>
              <button className="ete-btn ete-btn-accent" style={{justifyContent:"center"}}
                onClick={()=>{openConsultation();setMobileOpen(false);}}>
                <Sparkles size={13}/> Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
