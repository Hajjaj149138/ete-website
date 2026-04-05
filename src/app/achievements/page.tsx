import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
export const metadata = { title:"Awards & Achievements — Easy To Europe" };

const CERTS = [
  { id:"neapolis", org:"Neapolis University Pafos", country:"Cyprus",  flag:"cy", role:"Approved Representative",      bullets:["Approved Representative of Neapolis University Pafos","Authorized for professional counseling & application advice","Direct access to admissions team and scholarship database for up-to-date intake information"], issued:"08 May 2025", img:"/certs/pafosNew.png", accent:"#1E40AF" },
  { id:"qe",       org:"QE Group (Quantum Education)",country:"Malta",  flag:"mt", role:"Student Recruitment Agent",     bullets:["Appointed as Student Recruitment Agent for QE Group","Authorized to provide strategic academic advice","Permitted to submit student applications directly"], issued:"20 Mar 2025", img:"/certs/quantum.png",  accent:"#B45309" },
  { id:"study",    org:"Study Info Centre",          country:"Estonia", flag:"ee", role:"Authorized Recruitment Partner", bullets:["Officially recognized as an authorized Recruitment Partner","Certified to recruit international students via Study Info platform","Authorized to process applications for Estonian institutions"], issued:"28 Nov 2024", img:"/certs/studyinfo.png",accent:"#0E7490" },
  { id:"malita",   org:"MALITA International College",country:"Malta",  flag:"mt", role:"Authorized Agency",             bullets:["Authorized Agency for MALITA International College, Malta","Permitted to represent the college and assist in student admissions","Full access to MALITA's programs, deadlines, and scholarship info"], issued:"20 Mar 2025", img:"/certs/malita.png",  accent:"#9D174D" },
];
const AWARDS = [
  { icon:"🏆", title:"Best Education Consultancy", org:"Bangladesh Education Awards", year:"2023", desc:"Recognized as the leading education consultancy in Bangladesh for our exceptional service quality and visa success rate." },
  { icon:"📈", title:"Top Visa Success Rate",      org:"Study Abroad Excellence",     year:"2023", desc:"Awarded for maintaining the highest visa approval rate among education consultancies in Bangladesh — 98% success." },
  { icon:"🎓", title:"1,000+ Students Placed",     org:"Verified Achievement",        year:"2024", desc:"Milestone achievement for successfully placing over 1,000 students across 12+ global destinations since 2015." },
  { icon:"⭐", title:"5+ Years of Excellence",    org:"Education Industry",           year:"2024", desc:"A decade of trusted service, ethical practices, and transforming the dreams of hundreds of Bangladeshi students." },
];

export default function AchievementsPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{background:"linear-gradient(135deg,#0F1F3D 0%,#1E4E8C 100%)",position:"relative",overflow:"hidden",padding:"5rem 0 3.5rem"}}>
        <div className="grid-pattern absolute inset-0 opacity-20"/>
        <div className="ete-container" style={{position:"relative",zIndex:2}}>
          <Link href="/" style={{display:"inline-flex",alignItems:"center",gap:6,marginBottom:"1.5rem",fontSize:".72rem",fontWeight:600,color:"rgba(255,255,255,.5)",textDecoration:"none",transition:"color .18s"}}>
            <ArrowLeft size={13}/> Back to Home
          </Link>
          <span style={{display:"inline-flex",alignItems:"center",gap:5,fontFamily:"'JetBrains Mono',monospace",fontSize:".6rem",fontWeight:700,textTransform:"uppercase",letterSpacing:".12em",color:"#C9A84C",background:"rgba(201,168,76,.1)",border:"1px solid rgba(201,168,76,.22)",padding:"3px 11px",borderRadius:999,marginBottom:14}}>
            Official Recognition
          </span>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"clamp(1.6rem,4vw,2.4rem)",color:"#fff",lineHeight:1.15,marginBottom:12,letterSpacing:"-.01em"}}>
            Awards & <span style={{color:"#C9A84C"}}>Achievements</span>
          </h1>
          <p style={{fontSize:".83rem",color:"rgba(255,255,255,.55)",lineHeight:1.85,maxWidth:500}}>
            Officially recognized by top institutions across Europe, Australia, and Asia. Our credentials speak for themselves.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="ete-section">
        <div className="ete-container">
          <div style={{textAlign:"center",marginBottom:"2.25rem"}}>
            <span className="ete-tag">Official Authorizations</span>
            <h2 className="ete-sec-title mt-2">Our Certifications</h2>
            <p className="ete-sec-sub" style={{margin:"0 auto"}}>Officially authorized by these institutions to represent and recruit students.</p>
          </div>
          <div className="ach-certs-grid">
            {CERTS.map(cert=>(
              <div key={cert.id} className="ach-cert-card">
                <div className="ach-cert-info">
                  <div className="ach-cert-header">
                    <img src={`https://flagcdn.com/24x18/${cert.flag}.png`} width={24} height={18} alt="" style={{borderRadius:4,boxShadow:"0 1px 4px rgba(0,0,0,.15)"}}/>
                    <span className="ach-cert-country">{cert.country}</span>
                    <span className="ach-cert-role" style={{background:`${cert.accent}12`,color:cert.accent,border:`1px solid ${cert.accent}25`}}>{cert.role}</span>
                  </div>
                  <h3 className="ach-cert-org">{cert.org}</h3>
                  <ul className="ach-cert-bullets">
                    {cert.bullets.map((b,i)=>(
                      <li key={i}><CheckCircle size={13} style={{color:"#22c55e",flexShrink:0,marginTop:2}}/><span>{b}</span></li>
                    ))}
                  </ul>
                  <div className="ach-cert-dates">
                    <div className="ach-date-box">
                      <span className="ach-date-lbl">Issued</span>
                      <span className="ach-date-val">{cert.issued}</span>
                    </div>
                  </div>
                </div>
                <div className="ach-cert-img-wrap">
                  <img src={cert.img} alt={cert.org} className="ach-cert-img"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="ete-section ete-bg-alt">
        <div className="ete-container">
          <div style={{textAlign:"center",marginBottom:"2.25rem"}}>
            <span className="ete-tag">Recognition</span>
            <h2 className="ete-sec-title mt-2">Awards & Milestones</h2>
            <p className="ete-sec-sub" style={{margin:"0 auto"}}>Industry recognition and verified milestones that reflect our dedication to excellence.</p>
          </div>
          <div className="ach-awards-grid">
            {AWARDS.map((a,i)=>(
              <div key={i} className="ach-award-card">
                <span className="ach-award-emoji">{a.icon}</span>
                <div>
                  <div className="ach-award-yr">{a.year}</div>
                  <div className="ach-award-title">{a.title}</div>
                  <div className="ach-award-org">{a.org}</div>
                  <p className="ach-award-desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
