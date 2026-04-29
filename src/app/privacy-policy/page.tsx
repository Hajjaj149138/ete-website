"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      {/* Hero */}
      <section className="legal-hero">
        <div className="legal-hero-bg" />
        <div className="container-xl legal-hero-content">
          <span className="ete-tag ete-tag-inv" style={{ marginBottom: 14, display: "inline-flex" }}>
            Legal
          </span>
          <h1 className="legal-hero-title">Privacy Policy</h1>
          <p className="legal-hero-sub">
            We value your trust. This policy explains how Easy To Europe collects, uses, and protects your personal information.
          </p>
          <div className="legal-meta">
            <span className="legal-meta-item">📅 Last Updated: January 1, 2026</span>
            <span className="legal-meta-sep">•</span>
            <span className="legal-meta-item">🏢 Easy To Europe Education Consultancy</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="legal-body">
        <div className="container-xl">
          <div className="legal-layout">

            {/* Table of Contents */}
            <aside className="legal-toc">
              <div className="legal-toc-title">Contents</div>
              {[
                { n: "1", t: "Information We Collect" },
                { n: "2", t: "How We Use Your Information" },
                { n: "3", t: "Information Sharing" },
                { n: "4", t: "Facebook Pixel & Cookies" },
                { n: "5", t: "Data Security" },
                { n: "6", t: "Data Retention" },
                { n: "7", t: "Your Rights" },
                { n: "8", t: "Children's Privacy" },
                { n: "9", t: "Third-Party Links" },
                { n: "10", t: "Policy Updates" },
                { n: "11", t: "Contact Us" },
              ].map(item => (
                <a key={item.n} href={`#pp-section-${item.n}`} className="legal-toc-link">
                  <span className="legal-toc-num">{item.n}</span>
                  {item.t}
                </a>
              ))}
            </aside>

            {/* Main Content */}
            <div className="legal-content">

              <div className="legal-intro-box">
                <p>
                  At <strong>Easy To Europe</strong>, your privacy is a priority. This Privacy Policy explains what personal information we collect, how we use it, who we share it with, and how we keep it safe. This policy applies to all services offered by Easy To Europe, including our website at <strong>easytoeurope.com</strong>, in-person consultations, and all digital communications.
                </p>
              </div>

              <section id="pp-section-1" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">01</span> Information We Collect</h2>
                <p>We collect information in two ways — information you provide directly, and information collected automatically.</p>
                <h3 className="legal-sec-h3">Information You Provide</h3>
                <ul className="legal-list">
                  <li><strong>Personal Identification:</strong> Full name, date of birth, nationality, passport details</li>
                  <li><strong>Contact Details:</strong> Email address, phone number (including WhatsApp), home address</li>
                  <li><strong>Academic Background:</strong> Educational certificates, transcripts, English language test scores (IELTS/TOEFL)</li>
                  <li><strong>Financial Information:</strong> Bank statements, financial sponsorship documents (required for visa applications)</li>
                  <li><strong>Application Materials:</strong> Statement of purpose, CV/resume, reference letters</li>
                  <li><strong>Communication Records:</strong> Emails, WhatsApp messages, and notes from consultations</li>
                </ul>
                <h3 className="legal-sec-h3">Information Collected Automatically</h3>
                <ul className="legal-list">
                  <li><strong>Browser & Device Data:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, referral URLs</li>
                  <li><strong>Cookies:</strong> Session cookies, preference cookies, and analytics cookies (see Section 4)</li>
                </ul>
              </section>

              <section id="pp-section-2" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">02</span> How We Use Your Information</h2>
                <p>The information we collect is used for the following purposes:</p>
                <ul className="legal-list">
                  <li>✅ Processing your university and visa applications</li>
                  <li>✅ Communicating with you regarding your application status and next steps</li>
                  <li>✅ Providing tailored consultancy advice based on your academic profile</li>
                  <li>✅ Sending relevant updates about events, seminars, and new study opportunities (you may opt out at any time)</li>
                  <li>✅ Improving our website and services through analytics</li>
                  <li>✅ Complying with legal and regulatory obligations</li>
                  <li>✅ Displaying relevant advertisements through Facebook and other platforms (anonymised and aggregated data only)</li>
                </ul>
                <p>We will never use your personal data for any purpose not listed above without first obtaining your consent.</p>
              </section>

              <section id="pp-section-3" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">03</span> Information Sharing</h2>
                <div className="legal-warning-box" style={{ background: "rgba(16,185,129,.06)", borderColor: "rgba(16,185,129,.2)", color: "inherit" }}>
                  <strong>🔒 We do not sell your personal data.</strong> Your information is never sold, rented, or traded to any third party for their own marketing purposes.
                </div>
                <p>We may share your information in the following limited circumstances:</p>
                <ul className="legal-list">
                  <li><strong>Universities & Institutions:</strong> We share your academic and personal documents with universities and colleges as part of the application process — only with your knowledge and consent</li>
                  <li><strong>Immigration Authorities:</strong> Visa-related documents may be submitted to relevant embassies or government immigration offices</li>
                  <li><strong>Service Providers:</strong> Trusted third-party tools we use to operate our business (e.g., email services, CRM software, analytics) — bound by strict confidentiality agreements</li>
                  <li><strong>Legal Compliance:</strong> When required by applicable law, court order, or governmental authority</li>
                </ul>
              </section>

              <section id="pp-section-4" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">04</span> Facebook Pixel & Cookies</h2>
                <p>Our website uses the <strong>Facebook Pixel</strong> — a small piece of code that helps us understand how visitors interact with our website, and allows us to show relevant advertisements to people who have visited our site on Facebook and Instagram.</p>
                <p>The Facebook Pixel may collect:</p>
                <ul className="legal-list">
                  <li>Pages you visit on our website</li>
                  <li>Actions you take (e.g., filling out a form, clicking a button)</li>
                  <li>Device and browser information</li>
                </ul>
                <p>This data is processed by Meta (Facebook) under their own Privacy Policy. You can learn more and opt out at <strong>facebook.com/privacy/explanation</strong>.</p>
                <h3 className="legal-sec-h3">Cookies We Use</h3>
                <ul className="legal-list">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., theme preference, session management)</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (Google Analytics, Facebook Pixel)</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements on social media platforms</li>
                </ul>
                <p>You can control cookie preferences through your browser settings. Disabling certain cookies may affect your experience on our website.</p>
              </section>

              <section id="pp-section-5" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">05</span> Data Security</h2>
                <p>We take data security seriously. We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include:</p>
                <ul className="legal-list">
                  <li>Secure HTTPS connections on our website</li>
                  <li>Restricted access to personal data — only authorised staff can access your information</li>
                  <li>Regular security reviews of our systems and processes</li>
                  <li>Confidentiality agreements with all staff and third-party partners</li>
                </ul>
                <p>While we strive to protect your data, no method of transmission over the internet is 100% secure. We encourage you to use caution when sharing sensitive information online.</p>
              </section>

              <section id="pp-section-6" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">06</span> Data Retention</h2>
                <p>We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Specifically:</p>
                <ul className="legal-list">
                  <li><strong>Active Clients:</strong> Data retained throughout the duration of your engagement with us</li>
                  <li><strong>Post-Service:</strong> Application records retained for up to 5 years for reference and legal compliance</li>
                  <li><strong>Marketing Data:</strong> Retained until you opt out or request deletion</li>
                  <li><strong>Website Analytics:</strong> Aggregated/anonymised data may be retained indefinitely</li>
                </ul>
                <p>You may request deletion of your personal data at any time (see Section 7 — Your Rights).</p>
              </section>

              <section id="pp-section-7" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">07</span> Your Rights</h2>
                <p>You have the following rights regarding your personal data:</p>
                <ul className="legal-list">
                  <li>📋 <strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li>✏️ <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                  <li>🗑️ <strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                  <li>⛔ <strong>Right to Object:</strong> Object to processing of your data for marketing purposes</li>
                  <li>📤 <strong>Right to Portability:</strong> Request your data in a portable, machine-readable format</li>
                  <li>📵 <strong>Right to Opt Out:</strong> Unsubscribe from our marketing communications at any time</li>
                </ul>
                <p>To exercise any of these rights, please contact us at <strong>info@easytoeurope.com</strong>. We will respond within 30 days.</p>
              </section>

              <section id="pp-section-8" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">08</span> Children's Privacy</h2>
                <p>Our services are intended for individuals aged 16 and above. We do not knowingly collect personal information from children under the age of 16. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately and we will promptly delete such information.</p>
                <p>For students under 18, we require parental or guardian consent before providing consultancy services.</p>
              </section>

              <section id="pp-section-9" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">09</span> Third-Party Links</h2>
                <p>Our website may contain links to third-party websites, including university portals, government immigration websites, and social media platforms. These sites have their own privacy policies, which we do not control. We encourage you to review their privacy policies before submitting any personal information.</p>
                <p>Easy To Europe is not responsible for the privacy practices or content of third-party websites.</p>
              </section>

              <section id="pp-section-10" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">10</span> Policy Updates</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make significant changes, we will notify you by:</p>
                <ul className="legal-list">
                  <li>Updating the "Last Updated" date at the top of this page</li>
                  <li>Posting a notice on our website homepage</li>
                  <li>Sending an email notification to active clients</li>
                </ul>
                <p>We encourage you to review this Privacy Policy periodically. Your continued use of our services after any changes constitutes acceptance of the updated policy.</p>
              </section>

              <section id="pp-section-11" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">11</span> Contact Us</h2>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please reach out to us:</p>
                <div className="legal-contact-grid">
                  <div className="legal-contact-card">
                    <div className="legal-contact-icon">📧</div>
                    <div className="legal-contact-label">Email</div>
                    <div className="legal-contact-val">info@easytoeurope.com</div>
                  </div>
                  <div className="legal-contact-card">
                    <div className="legal-contact-icon">📞</div>
                    <div className="legal-contact-label">Phone / WhatsApp</div>
                    <div className="legal-contact-val">+880 1712-345678</div>
                  </div>
                  <div className="legal-contact-card">
                    <div className="legal-contact-icon">📍</div>
                    <div className="legal-contact-label">Office</div>
                    <div className="legal-contact-val">Panthapath, Dhaka, Bangladesh</div>
                  </div>
                </div>
              </section>

              <div className="legal-footer-note">
                <p>Your trust means everything to us. We are committed to handling your personal information responsibly and transparently.</p>
                <div className="legal-footer-links">
                  <Link href="/terms-of-use" className="legal-inline-link">Terms of Use</Link>
                  <span>·</span>
                  <Link href="/contact" className="legal-inline-link">Contact Us</Link>
                  <span>·</span>
                  <Link href="/" className="legal-inline-link">Back to Home</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
