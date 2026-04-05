"use client";
/*
 * FILE: src/components/layout/Footer.tsx
 * Styles: src/styles/components/footer.css
 * Content: src/data/content.ts → siteConfig, destinations
 */
import Link from "next/link";
import { Facebook, Youtube, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig, destinations } from "@/data/content";
import { useConsultation } from "@/lib/ConsultationContext";

export default function Footer() {
  const { openConsultation } = useConsultation();

  const quickLinks = [
    { label: "Home",               href: "/" },
    { label: "Study Destinations", href: "/study-destinations" },
    { label: "Career Pathways",    href: "/career-pathways" },
    { label: "Our Services",       href: "/services" },
    { label: "About Us",           href: "/about" },
    { label: "Contact",            href: "/contact" },
  ];

  return (
    <footer>


      {/* ── Footer Body ── */}
      <div className="ete-footer-body">
        <div className="ete-container">
          <div className="ete-footer-grid">

            {/* Brand */}
            <div>
              <div className="ete-footer-brand">
                <div className="ete-footer-logo-text">
                <span className="ete-footer-logo-main">Easy to Europe</span>
                <span className="ete-footer-logo-sub">Education Consultancy</span>
              </div>
              </div>
              <p className="ete-footer-tagline">Your trusted partner for European student visa success. Building futures, not just processing visas.</p>
              <div className="ete-footer-socials">
                {[
                  { href: siteConfig.socials.facebook, Icon: Facebook },
                  { href: siteConfig.socials.youtube,  Icon: Youtube  },
                  { href: siteConfig.socials.linkedin, Icon: Linkedin  },
                ].map(({ href, Icon }) => (
                  <a key={href} href={href} target="_blank" rel="noreferrer" className="ete-social-icon">
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <div className="ete-footer-col-title">Quick Links</div>
              {quickLinks.map(l => (
                <Link key={l.href} href={l.href} className="ete-footer-link">{l.label}</Link>
              ))}
            </div>

            {/* Destinations */}
            <div>
              <div className="ete-footer-col-title">Top Destinations</div>
              {destinations.slice(0, 8).map(d => (
                <Link key={d.slug} href={`/study-destinations/${d.slug}`} className="ete-footer-link">{d.name}</Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div className="ete-footer-col-title">Contact Us</div>
              <a href={`tel:${siteConfig.phone}`} className="ete-footer-contact">
                <div className="ete-footer-contact-icon"><Phone size={10} /></div>
                <span className="ete-footer-contact-text">{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="ete-footer-contact">
                <div className="ete-footer-contact-icon"><Mail size={10} /></div>
                <span className="ete-footer-contact-text">{siteConfig.email}</span>
              </a>
              {siteConfig.offices.map(o => (
                <div key={o.label} className="ete-footer-contact">
                  <div className="ete-footer-contact-icon"><MapPin size={10} /></div>
                  <div>
                    <span className="ete-footer-office-lbl">{o.label}</span>
                    <div className="ete-footer-contact-text">{o.address}</div>
                  </div>
                </div>
              ))}
              <div className="ete-footer-contact">
                <div className="ete-footer-contact-icon"><Clock size={10} /></div>
                <span className="ete-footer-contact-text">Sat – Thu: 10AM – 6PM</span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="ete-footer-bottom">
            <div className="ete-footer-bottom-inner">
              <span className="ete-footer-copy">© {new Date().getFullYear()} Easy To Europe. All Rights Reserved.</span>
              <span className="ete-footer-dev">Built by <a href="#">Md. Hajjaj Bin Sonosi</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
