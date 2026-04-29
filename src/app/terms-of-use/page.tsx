"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function TermsOfUsePage() {
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
          <h1 className="legal-hero-title">Terms of Use</h1>
          <p className="legal-hero-sub">
            Please read these terms carefully before using our services. By accessing or using Easy To Europe, you agree to be bound by these terms.
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
                { n: "1", t: "Acceptance of Terms" },
                { n: "2", t: "Services Offered" },
                { n: "3", t: "User Responsibilities" },
                { n: "4", t: "Consultation & Fees" },
                { n: "5", t: "Visa Success & Guarantees" },
                { n: "6", t: "Intellectual Property" },
                { n: "7", t: "Privacy & Data" },
                { n: "8", t: "Limitation of Liability" },
                { n: "9", t: "Refund Policy" },
                { n: "10", t: "Termination" },
                { n: "11", t: "Governing Law" },
                { n: "12", t: "Contact Us" },
              ].map(item => (
                <a key={item.n} href={`#section-${item.n}`} className="legal-toc-link">
                  <span className="legal-toc-num">{item.n}</span>
                  {item.t}
                </a>
              ))}
            </aside>

            {/* Main Content */}
            <div className="legal-content">

              <div className="legal-intro-box">
                <p>
                  Welcome to <strong>Easy To Europe</strong> ("Company", "we", "us", or "our"). These Terms of Use govern your access to and use of our website at <strong>easytoeurope.com</strong> and all related services, including education consultancy, visa guidance, university application assistance, and any other services we provide. By accessing or using our services, you confirm that you have read, understood, and agree to be bound by these Terms.
                </p>
              </div>

              <section id="section-1" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">01</span> Acceptance of Terms</h2>
                <p>By accessing our website or engaging with our consultancy services — whether in person, via phone, WhatsApp, email, or online — you acknowledge that you have read these Terms of Use and agree to comply with them. If you do not agree to these terms, please refrain from using our services.</p>
                <p>We reserve the right to modify these terms at any time. Continued use of our services after changes have been posted constitutes your acceptance of the revised terms. The most current version will always be available on our website.</p>
              </section>

              <section id="section-2" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">02</span> Services Offered</h2>
                <p>Easy To Europe provides the following services to students seeking education opportunities abroad:</p>
                <ul className="legal-list">
                  <li>🎓 University and college application guidance for Europe, UK, Canada, Australia, and other destinations</li>
                  <li>📋 Student visa application support and documentation assistance</li>
                  <li>📝 IELTS preparation guidance and mock interviews</li>
                  <li>🏠 Pre-departure orientation including accommodation, travel, and cultural guidance</li>
                  <li>💼 Career pathway counselling and post-study work permit advice</li>
                  <li>🤝 Liaison with university admissions offices on behalf of students</li>
                  <li>📢 Seminars, webinars, and education fairs</li>
                </ul>
                <p>We act as an intermediary between students and educational institutions. Final admission and visa decisions rest entirely with the respective universities and government authorities.</p>
              </section>

              <section id="section-3" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">03</span> User Responsibilities</h2>
                <p>As a client or visitor of Easy To Europe, you agree to:</p>
                <ul className="legal-list">
                  <li>Provide accurate, truthful, and complete information during consultation and application processes</li>
                  <li>Promptly supply all requested documents in the formats specified by our consultants</li>
                  <li>Not submit falsified, forged, or misleading documents — doing so is a serious legal offence and will result in immediate termination of services without refund</li>
                  <li>Maintain clear and timely communication with our team, responding to emails and calls within a reasonable timeframe</li>
                  <li>Not engage in any conduct that may harm the reputation or operations of Easy To Europe</li>
                  <li>Use our website and online resources only for lawful purposes</li>
                </ul>
              </section>

              <section id="section-4" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">04</span> Consultation & Service Fees</h2>
                <p>Easy To Europe charges service fees for consultancy and application processing. All applicable fees will be clearly communicated to you prior to commencement of services. By proceeding with our services, you agree to pay the agreed fees as per the payment schedule provided.</p>
                <ul className="legal-list">
                  <li>Service fees are non-transferable and apply only to the specific services agreed upon</li>
                  <li>University application fees, visa fees, and government charges are separate from our consultancy fees</li>
                  <li>All prices are quoted in BDT (Bangladeshi Taka) unless otherwise specified</li>
                  <li>Payments must be made through approved channels as communicated by our team</li>
                </ul>
              </section>

              <section id="section-5" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">05</span> Visa Success & No Guarantees</h2>
                <div className="legal-warning-box">
                  <strong>⚠️ Important Notice:</strong> While Easy To Europe maintains an industry-leading visa success rate and provides expert guidance, we cannot and do not guarantee visa approval or university admission. All final decisions are made by the relevant government immigration authorities and educational institutions, and are beyond our control.
                </div>
                <p>We commit to providing the best possible guidance, thoroughly preparing your application, and maximising your chances of success. However, factors such as immigration policy changes, your personal profile, and embassy discretion may affect outcomes.</p>
              </section>

              <section id="section-6" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">06</span> Intellectual Property</h2>
                <p>All content on the Easy To Europe website — including text, graphics, logos, icons, images, audio clips, and software — is the property of Easy To Europe or its content providers and is protected by applicable intellectual property laws.</p>
                <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any content from our website without express written permission from Easy To Europe.</p>
              </section>

              <section id="section-7" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">07</span> Privacy & Data Protection</h2>
                <p>Your privacy is important to us. Our collection and use of personal data is governed by our <Link href="/privacy-policy" className="legal-inline-link">Privacy Policy</Link>, which is incorporated into these Terms of Use by reference. By using our services, you also consent to our Privacy Policy.</p>
                <p>We will never sell your personal data to third parties. Your information is used solely to provide and improve our services.</p>
              </section>

              <section id="section-8" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">08</span> Limitation of Liability</h2>
                <p>To the fullest extent permitted by applicable law, Easy To Europe shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with:</p>
                <ul className="legal-list">
                  <li>Visa rejections or delays by immigration authorities</li>
                  <li>University admission decisions</li>
                  <li>Changes in government immigration policies or university requirements</li>
                  <li>Any inaccurate information provided by the client</li>
                  <li>Force majeure events including pandemics, natural disasters, or political events</li>
                </ul>
                <p>Our total liability to you for any claim arising out of or relating to these terms shall not exceed the service fees you paid to Easy To Europe for the specific service in question.</p>
              </section>

              <section id="section-9" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">09</span> Refund Policy</h2>
                <p>Refund eligibility depends on the stage of service and circumstances:</p>
                <ul className="legal-list">
                  <li><strong>Before Application Submission:</strong> A partial refund may be considered after deducting administrative costs</li>
                  <li><strong>After Application Submission:</strong> Service fees are generally non-refundable as work has been completed on your behalf</li>
                  <li><strong>Visa Rejection:</strong> Refund eligibility in case of visa rejection will be governed by the specific agreement signed at the time of service engagement</li>
                  <li><strong>Fraud or False Documents:</strong> No refund will be issued if services are terminated due to submission of fraudulent documents</li>
                </ul>
                <p>All refund requests must be submitted in writing to our office. Refund decisions are at the sole discretion of Easy To Europe management.</p>
              </section>

              <section id="section-10" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">10</span> Termination</h2>
                <p>Easy To Europe reserves the right to terminate or suspend services to any client at any time, with or without notice, for reasons including but not limited to:</p>
                <ul className="legal-list">
                  <li>Violation of these Terms of Use</li>
                  <li>Submission of fraudulent or false documentation</li>
                  <li>Abusive or inappropriate conduct toward our staff</li>
                  <li>Non-payment of agreed fees</li>
                  <li>Any conduct deemed harmful to our company or other clients</li>
                </ul>
              </section>

              <section id="section-11" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">11</span> Governing Law</h2>
                <p>These Terms of Use shall be governed by and construed in accordance with the laws of the People's Republic of Bangladesh. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.</p>
                <p>We encourage all disputes to be resolved amicably through direct communication with our management team before pursuing legal action.</p>
              </section>

              <section id="section-12" className="legal-section">
                <h2 className="legal-sec-h2"><span className="legal-sec-num">12</span> Contact Us</h2>
                <p>If you have any questions about these Terms of Use, please contact us:</p>
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
                <p>By using Easy To Europe's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.</p>
                <div className="legal-footer-links">
                  <Link href="/privacy-policy" className="legal-inline-link">Privacy Policy</Link>
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
