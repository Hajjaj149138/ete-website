// ================================================================
//  EASY TO EUROPE — CONTENT
//  Edit this file to update ALL website content.
//  Sections: siteConfig, navLinks, destinations, careerPathways,
//            homePage, servicesPage, aboutPage, contactPage, events,
//            partnerUniversities
// ================================================================

// ── Site Config ──────────────────────────────────────────────────
export const siteConfig = {
  name:        "Easy To Europe",
  tagline:     "Your Education Partner",
  description: "Your trusted partner for European student visa success. We simplify your journey to top global destinations — whether you're a student, a skilled professional, or someone seeking a better future.",
  phone:       "+88 01896 511151",
  whatsapp:    "8801896511151",
  email:       "info@easytoeurope.com",
  offices: [
    {
      label:   "Bangladesh Office",
      address: "44, F, 08, Panthapath, Indira Road, Dhaka, Bangladesh",
      hours:   "Saturday – Thursday: 10AM – 6PM",
      phone:   "(+880) 1896-511151",
    },
    {
      label:   "Germany Head Office",
      address: "Eduard-Soermus-Straße 37, Zwickau, Germany, 08062",
      hours:   "Saturday – Thursday: 10AM – 6PM",
      phone:   "(+351) 920 000 000",
    },
  ],
  socials: {
    facebook:  "https://www.facebook.com/profile.php?id=61560097134726",
    youtube:   "https://www.youtube.com/@EasytoEurope",
    linkedin:  "https://www.linkedin.com/company/easy-to-europe/",
    instagram: "#",
  },
  stats: [
    { number: "1,000+", label: "Students Placed" },
    { number: "98%",    label: "Visa Success Rate" },
    { number: "12+",    label: "Countries" },
    { number: "5+",     label: "Years Experience" },
  ],
};

// ── Navigation ───────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Study Destinations", href: "/study-destinations",
    children: [
      { label: "🇦🇺 Australia",      href: "/study-destinations/australia" },
      { label: "🇸🇪 Sweden",         href: "/study-destinations/sweden" },
      { label: "🇬🇧 United Kingdom", href: "/study-destinations/united-kingdom" },
      { label: "🇨🇦 Canada",         href: "/study-destinations/canada" },
      { label: "🇭🇺 Hungary",        href: "/study-destinations/hungary" },
      { label: "🇱🇹 Lithuania",      href: "/study-destinations/lithuania" },
      { label: "🇲🇾 Malaysia",       href: "/study-destinations/malaysia" },
      { label: "🇦🇹 Austria",        href: "/study-destinations/austria" },
      { label: "🇩🇰 Denmark",        href: "/study-destinations/denmark" },
      { label: "🇨🇾 Cyprus",         href: "/study-destinations/cyprus" },
      { label: "🇳🇱 Netherlands",    href: "/study-destinations/netherlands" },
      { label: "🇲🇹 Malta",          href: "/study-destinations/malta" },
    ],
  },
  {
    label: "Career Pathways", href: "/career-pathways",
    children: [
      { label: "Skilled Worker Migration", href: "/career-pathways/skilled-migration" },
      { label: "Germany Work Visa",        href: "/career-pathways/germany" },
      { label: "Cyprus Work",              href: "/career-pathways/cyprus-work" },
    ],
  },
  { label: "Universities",  href: "/partner-universities" },
  { label: "Our Services", href: "/services" },
  { label: "About Us",     href: "/about" },
  { label: "Contact Us",   href: "/contact" },
];

// ── Country flags (flagcdn.com) ──────────────────────────────────
export const FLAG_CODES: Record<string, string> = {
  australia: "au", sweden: "se", "united-kingdom": "gb", canada: "ca",
  hungary: "hu", lithuania: "lt", malaysia: "my", austria: "at",
  denmark: "dk", cyprus: "cy", netherlands: "nl", malta: "mt",
  germany: "de",
};

export function getFlagUrl(slug: string, size: "40x30"|"80x60"|"160x120" = "80x60"): string {
  const code = FLAG_CODES[slug];
  if (!code) return "";
  return `https://flagcdn.com/${size}/${code}.png`;
}

// ── Study Destinations ───────────────────────────────────────────
export const destinations = [
  {
    slug: "australia",
    image: "/images/destinations/australia.jpg",
    name: "Australia",
    color: "#00843D",
    tagline: "World-class degrees with post-study work rights",
    heroSubtitle: "Start Your Australian Study Journey with Us",
    overview: "Australia is home to 42 world-class universities ranked globally for research and quality. Students enjoy flexible work rights (48 hrs/fortnight during studies, full-time on holidays), post-study work visas of 2–4 years, and a diverse, multicultural lifestyle.",
    highlights: [
      "Home to top-ranked global universities with cutting-edge research",
      "Post-Study Work Visa: 2–4 years after graduation (Subclass 485)",
      "Work up to 48 hours per fortnight during sessions",
      "Consistently ranked among the world's safest & most livable countries",
      "Diverse, inclusive society welcoming international talent",
      "42 Universities | 1,100+ Institutions | 22,000+ Courses",
    ],
    universities: [
      { name: "University of Melbourne",       location: "Victoria",    rank: 13,  spec: "Medicine, Engineering, Law" },
      { name: "University of Sydney",          location: "NSW",         rank: 18,  spec: "Health Sciences, Architecture" },
      { name: "UNSW Sydney",                   location: "NSW",         rank: 19,  spec: "Tech, Business, Engineering" },
      { name: "Australian National University",location: "Canberra",    rank: 30,  spec: "Social Sciences, Research, Law" },
      { name: "Monash University",             location: "Victoria",    rank: 37,  spec: "Pharmacy, Education, Engineering" },
      { name: "University of Queensland",      location: "Queensland",  rank: 40,  spec: "Life Sciences, Marine Biology" },
    ],
    courses: ["IT & Software","Nursing","Business Analyst","Engineering","Social Work","Teaching","Construction","Biotechnology"],
    intakes: [
      { month: "FEB", label: "Semester 1 (Main)",      deadline: "Oct – Dec (previous year)", note: "Best for scholarships, widest course selection" },
      { month: "JUL", label: "Semester 2 (Secondary)", deadline: "March – May (same year)",   note: "Lower competition, most Masters available" },
      { month: "NOV", label: "Trimester 3 (Summer)",   deadline: "Aug – Sept (same year)",    note: "Fast-track, ideal for Business & IT" },
    ],
    uniCount: "43 Universities",
    ielts: { min: "6.0", note: "One Skill Retake accepted for visa" },
    tuition: "AUD 20,000 – 45,000 / year",
    visa: "4–8 weeks",
    deadline: "Oct – Dec",
    cities: ["Melbourne","Sydney","Brisbane","Perth","Adelaide","Canberra"],
  },
  {
    slug: "sweden",
    image: "/images/destinations/sweden.jpg",
    name: "Sweden",
    color: "#006AA7",
    tagline: "Innovation hub with 1,000+ English programs",
    heroSubtitle: "Study in Sweden Where Your Future Awaits",
    overview: "Sweden offers world-class education where problem-solving and creativity are prioritized over rote learning. With 1,000+ English-taught programs, unlimited part-time work rights, and a 12-month post-study job-search visa, Sweden is a top destination for ambitious students.",
    highlights: [
      "Top-ranked universities focusing on innovation, research, modern teaching",
      "1,000+ programs taught entirely in English — no language barrier",
      "International students can work unlimited hours while studying",
      "12-month post-study residence permit for job search",
      "Birthplace of Spotify, IKEA, Volvo — global innovation hub",
      "One of the safest and cleanest countries globally",
    ],
    universities: [
      { name: "KTH Royal Institute of Technology", location: "Stockholm",  rank: 72,  spec: "Engineering, IT, Architecture" },
      { name: "Lund University",                   location: "Lund",       rank: 75,  spec: "Medicine, Science, Social Science" },
      { name: "Uppsala University",                location: "Uppsala",    rank: 103, spec: "Pharma, Life Sciences, Law" },
      { name: "Stockholm University",              location: "Stockholm",  rank: 128, spec: "Environmental Science, Economics" },
      { name: "Chalmers University of Technology", location: "Gothenburg", rank: 139, spec: "Automotive, Sustainability, Physics" },
      { name: "University of Gothenburg",          location: "Gothenburg", rank: 195, spec: "Arts, Dentistry, Marine Sciences" },
    ],
    courses: ["Computer Science & AI","Renewable Energy","Engineering & Robotics","Biomedicine & Pharma","International Business","Industrial Design","Environmental Policy","Data Analytics"],
    intakes: [
      { month: "AUG", label: "Autumn Semester (Primary)", deadline: "15 January", note: "1,000+ English programs, SI Global Scholarships" },
      { month: "JAN", label: "Spring Semester (Limited)", deadline: "15 August",  note: "Limited programs, lower competition" },
    ],
    uniCount: "38 Universities",
    ielts: { min: "6.5", note: "English 6 standard (no band < 5.5)" },
    tuition: "SEK 80,000 – 145,000 / year",
    visa: "2–4 months",
    deadline: "15 January",
    cities: ["Stockholm","Gothenburg","Lund","Uppsala","Malmö","Jönköping"],
  },
  {
    slug: "united-kingdom",
    image: "/images/destinations/united-kingdom.jpg",
    name: "United Kingdom",
    color: "#012169",
    tagline: "Prestigious degrees, global recognition",
    heroSubtitle: "Experience World-Class British Education",
    overview: "The UK is home to some of the world's most prestigious universities. With shorter degree programs (3 years Bachelor's, 1 year Master's), a Graduate Route visa allowing 2 years of post-study work, and globally recognized qualifications, the UK remains a top destination.",
    highlights: [
      "Home to Oxford, Cambridge, Imperial — globally top-ranked universities",
      "Graduate Route Visa: 2 years post-study work (3 for PhD)",
      "Shorter degree programs — 3-year Bachelor's, 1-year Master's",
      "Strong industry links across Finance, Tech, Healthcare, Law",
      "Rich multicultural environment with 600,000+ international students",
      "Scholarships: Chevening, GREAT, Commonwealth available",
    ],
    universities: [
      { name: "University of Oxford",    location: "Oxford",    rank: 3,   spec: "Humanities, Sciences, Medicine" },
      { name: "University of Cambridge", location: "Cambridge", rank: 5,   spec: "Sciences, Engineering, Mathematics" },
      { name: "Imperial College London", location: "London",    rank: 8,   spec: "Engineering, Medicine, Business" },
      { name: "UCL",                     location: "London",    rank: 9,   spec: "Architecture, Law, Social Sciences" },
      { name: "University of Edinburgh", location: "Edinburgh", rank: 27,  spec: "Medicine, Business, Arts" },
      { name: "University of Manchester",location: "Manchester",rank: 34,  spec: "Engineering, Business, Sciences" },
    ],
    courses: ["Business & Management","Computer Science","Engineering","Medicine & Healthcare","Law","Architecture","Finance","Data Science"],
    intakes: [
      { month: "SEP", label: "September (Main)", deadline: "Jan – June", note: "Primary intake, full course selection" },
      { month: "JAN", label: "January (Secondary)", deadline: "Oct – Nov", note: "Limited courses, some universities only" },
    ],
    uniCount: "130+ Universities",
    ielts: { min: "6.0 – 7.0", note: "Varies by university and course" },
    tuition: "GBP 10,000 – 38,000 / year",
    visa: "3 weeks",
    deadline: "Jan – June",
    cities: ["London","Manchester","Edinburgh","Birmingham","Bristol","Leeds"],
  },
  {
    slug: "canada",
    image: "/images/destinations/canada.jpg",
    name: "Canada",
    color: "#FF0000",
    tagline: "PR pathway with strong post-study work rights",
    heroSubtitle: "Build Your Future in Canada",
    overview: "Canada offers a clear pathway from student visa to Permanent Residency. With a Post-Graduation Work Permit (PGWP) of up to 3 years and Express Entry immigration stream, Canada is the top choice for students seeking long-term settlement.",
    highlights: [
      "Post-Graduation Work Permit (PGWP) up to 3 years",
      "Clear PR pathway via Express Entry and Provincial Nominee Programs",
      "Work 20 hours/week during studies, full-time during breaks",
      "High quality of life — consistently ranked in global top 10",
      "Affordable education compared to USA and UK",
      "Bilingual country — English and French advantage",
    ],
    universities: [
      { name: "University of Toronto",            location: "Ontario",          rank: 25,  spec: "Medicine, Engineering, Business" },
      { name: "McGill University",                location: "Quebec",           rank: 30,  spec: "Medicine, Law, Arts" },
      { name: "University of British Columbia",   location: "British Columbia", rank: 38,  spec: "Forestry, Sciences, Business" },
      { name: "University of Alberta",            location: "Alberta",          rank: 111, spec: "Engineering, Law, Agriculture" },
      { name: "University of Waterloo",           location: "Ontario",          rank: 112, spec: "Computer Science, Engineering, Math" },
      { name: "Western University",               location: "Ontario",          rank: 170, spec: "Business, Medicine, Law" },
    ],
    courses: ["Computer Science","Business","Nursing","Engineering","Data Analytics","Social Work","Environmental Science","Finance"],
    intakes: [
      { month: "SEP", label: "Fall (Primary)", deadline: "Nov – Feb",    note: "Best selection, major scholarships" },
      { month: "JAN", label: "Winter",         deadline: "Aug – Oct",    note: "Good alternative intake" },
      { month: "MAY", label: "Summer",         deadline: "Feb – March",  note: "Limited programs available" },
    ],
    uniCount: "96 Universities",
    ielts: { min: "6.0 – 6.5", note: "PGWP eligible programs only" },
    tuition: "CAD 15,000 – 35,000 / year",
    visa: "8–12 weeks",
    deadline: "Nov – Feb",
    cities: ["Toronto","Vancouver","Montreal","Calgary","Ottawa","Halifax"],
  },
  {
    slug: "hungary",
    image: "/images/destinations/hungary.jpg",
    name: "Hungary",
    color: "#CE2939",
    tagline: "Affordable European education, Schengen access",
    heroSubtitle: "Study in the Heart of Europe",
    overview: "Hungary offers high-quality, affordable European education with Schengen Zone access. Budapest consistently ranks among Europe's most beautiful cities. The Stipendium Hungaricum scholarship program offers full funding for eligible students.",
    highlights: [
      "Very affordable tuition — EUR 2,000–8,000/year",
      "Schengen Zone access — travel freely across Europe",
      "Stipendium Hungaricum — full scholarship for eligible students",
      "Budapest ranked one of Europe's most beautiful student cities",
      "Growing tech and startup scene",
      "English-taught programs available at major universities",
    ],
    universities: [
      { name: "Eötvös Loránd University (ELTE)", location: "Budapest",  rank: 601, spec: "Sciences, Humanities, Law" },
      { name: "Budapest University of Technology",location: "Budapest",  rank: 651, spec: "Engineering, Architecture, IT" },
      { name: "Semmelweis University",            location: "Budapest",  rank: 501, spec: "Medicine, Dentistry, Pharmacy" },
      { name: "University of Debrecen",           location: "Debrecen",  rank: 801, spec: "Medicine, Agriculture, Sciences" },
      { name: "Corvinus University of Budapest",  location: "Budapest",  rank: 701, spec: "Business, Economics, Social Sciences" },
    ],
    courses: ["Medicine","Engineering","Business & Economics","IT & Computer Science","Law","Architecture","Agriculture","Dentistry"],
    intakes: [
      { month: "SEP", label: "Autumn Semester",  deadline: "15 February",  note: "Main intake, Stipendium Hungaricum deadline" },
      { month: "FEB", label: "Spring Semester",  deadline: "15 October",   note: "Limited programs" },
    ],
    uniCount: "65 Universities",
    ielts: { min: "5.5 – 6.0", note: "Some programs accept TOEFL" },
    tuition: "EUR 2,000 – 8,000 / year",
    visa: "4–6 weeks",
    deadline: "15 February",
    cities: ["Budapest","Debrecen","Pécs","Miskolc","Szeged"],
  },
  {
    slug: "lithuania",
    image: "/images/destinations/lithuania.jpg",
    name: "Lithuania",
    color: "#006A44",
    tagline: "EU quality education at affordable costs",
    heroSubtitle: "Study in the Baltic Gateway to Europe",
    overview: "Lithuania offers EU-standard education at significantly lower costs than Western Europe. As a full EU member, graduates have full EU work rights. Vilnius and Kaunas are vibrant student cities with a growing tech scene.",
    highlights: [
      "EU member — full EU work and travel rights after graduation",
      "Very affordable — tuition from EUR 1,500/year",
      "English-taught programs increasing every year",
      "Vilnius — one of Europe's fastest growing tech hubs",
      "High quality of life at a fraction of Western European costs",
      "Safe, welcoming country for international students",
    ],
    universities: [
      { name: "Vilnius University",                   location: "Vilnius", rank: 601, spec: "Humanities, Sciences, Law" },
      { name: "Kaunas University of Technology",      location: "Kaunas",  rank: 801, spec: "Engineering, IT, Business" },
      { name: "Vytautas Magnus University",           location: "Kaunas",  rank: 1001,spec: "Arts, Humanities, Agriculture" },
      { name: "Lithuanian University of Health Sci.", location: "Kaunas",  rank: 901, spec: "Medicine, Pharmacy, Nursing" },
    ],
    courses: ["Business Administration","IT & Software Engineering","Medicine","Law","Social Sciences","Environmental Science","Architecture"],
    intakes: [
      { month: "SEP", label: "Autumn Semester", deadline: "May – July", note: "Primary intake for most programs" },
      { month: "FEB", label: "Spring Semester", deadline: "November",   note: "Available for select programs" },
    ],
    uniCount: "22 Universities",
    ielts: { min: "5.5", note: "TOEFL/CEFR B2 also accepted" },
    tuition: "EUR 1,500 – 5,000 / year",
    visa: "4–8 weeks",
    deadline: "May – July",
    cities: ["Vilnius","Kaunas","Klaipėda","Šiauliai"],
  },
  {
    slug: "malaysia",
    image: "/images/destinations/malaysia.jpg",
    name: "Malaysia",
    color: "#CC0001",
    tagline: "Affordable Asian hub with global university branches",
    heroSubtitle: "Quality Education in the Heart of Asia",
    overview: "Malaysia hosts branch campuses of top UK, Australian, and US universities at a fraction of the original cost. As a multicultural English-speaking nation, it's an ideal affordable destination with strong industry connections across Asia.",
    highlights: [
      "Branch campuses of Monash, Nottingham, Curtin at fraction of cost",
      "English is widely used — no language barrier",
      "Very affordable living costs (USD 500–800/month)",
      "Strategic location — gateway to ASEAN job market",
      "Multicultural society — easy adaptation for South Asian students",
      "Part-time work allowed: 20 hours/week",
    ],
    universities: [
      { name: "University of Malaya",                  location: "Kuala Lumpur", rank: 65,  spec: "Engineering, Medicine, Sciences" },
      { name: "Monash University Malaysia",             location: "Selangor",     rank: 37,  spec: "Business, IT, Engineering" },
      { name: "University of Nottingham Malaysia",      location: "Selangor",     rank: 113, spec: "Engineering, Business, Sciences" },
      { name: "Taylor's University",                    location: "Selangor",     rank: 751, spec: "Hospitality, Business, IT" },
      { name: "Sunway University",                      location: "Selangor",     rank: 601, spec: "Business, IT, Sciences" },
    ],
    courses: ["Business & Management","Computer Science","Engineering","Hospitality","Accounting","Pharmacy","Architecture","Media & Communication"],
    intakes: [
      { month: "MAR", label: "March Intake",      deadline: "December – January", note: "Main intake, widest selection" },
      { month: "JUL", label: "July Intake",       deadline: "April – May",        note: "Second major intake" },
      { month: "OCT", label: "October Intake",    deadline: "July – August",      note: "Available at select universities" },
    ],
    uniCount: "20 Universities",
    ielts: { min: "5.5 – 6.0", note: "TOEFL iBT 60+ also accepted" },
    tuition: "MYR 15,000 – 45,000 / year",
    visa: "3–6 weeks",
    deadline: "December – January",
    cities: ["Kuala Lumpur","Selangor","Penang","Johor Bahru","Cyberjaya"],
  },
  {
    slug: "austria",
    image: "/images/destinations/austria.jpg",
    name: "Austria",
    color: "#ED2939",
    tagline: "Rich culture, high-quality education in Central Europe",
    heroSubtitle: "Study in the Cultural Heart of Europe",
    overview: "Austria offers excellent education quality with relatively low tuition fees. Vienna consistently ranks as the world's most livable city. With Schengen access and a strong economy, Austria is an increasingly popular destination for international students.",
    highlights: [
      "Vienna — world's #1 most livable city 7 years running",
      "Schengen Zone access across Europe",
      "Low tuition — EUR 726/semester (public universities)",
      "Strong economy — excellent job market for graduates",
      "Rich cultural heritage and high quality of life",
      "Work 20 hours/week during studies",
    ],
    universities: [
      { name: "University of Vienna",                 location: "Vienna",    rank: 175, spec: "Humanities, Sciences, Law" },
      { name: "Vienna University of Technology (TU)", location: "Vienna",    rank: 186, spec: "Engineering, IT, Architecture" },
      { name: "Medical University of Vienna",         location: "Vienna",    rank: 174, spec: "Medicine, Dentistry, Pharmacy" },
      { name: "University of Graz",                   location: "Graz",      rank: 501, spec: "Sciences, Economics, Law" },
      { name: "Johannes Kepler University Linz",      location: "Linz",      rank: 601, spec: "Engineering, Business, Sciences" },
    ],
    courses: ["Engineering & Technology","Medicine","Business & Economics","Architecture","Music & Arts","Law","Environmental Sciences","Computer Science"],
    intakes: [
      { month: "OCT", label: "Winter Semester", deadline: "July – September", note: "Main intake for most programs" },
      { month: "MAR", label: "Summer Semester", deadline: "December – January", note: "Available for some programs" },
    ],
    uniCount: "23 Universities",
    ielts: { min: "6.0 – 6.5", note: "German B2 for German-taught programs" },
    tuition: "EUR 726/semester (public) – 15,000/year (private)",
    visa: "4–8 weeks",
    deadline: "July – September",
    cities: ["Vienna","Graz","Innsbruck","Linz","Salzburg"],
  },
  {
    slug: "denmark",
    image: "/images/destinations/denmark.jpg",
    name: "Denmark",
    color: "#C60C30",
    tagline: "Happiest country with world-class technical education",
    heroSubtitle: "Innovate and Learn in the World's Happiest Country",
    overview: "Denmark consistently ranks as the world's happiest country. With top-ranked technical universities, free tuition for EU students and competitive fees for non-EU, strong work rights, and an innovation-driven economy, Denmark attracts ambitious global students.",
    highlights: [
      "DTU ranks among the world's top technical universities",
      "Ranked the world's happiest country for years",
      "Strong job market — especially in IT, Engineering, Green Energy",
      "Work 20 hours/week during studies",
      "Excellent English proficiency nationwide",
      "Research-focused, innovative teaching methodology",
    ],
    universities: [
      { name: "Technical University of Denmark (DTU)", location: "Copenhagen", rank: 120, spec: "Engineering, IT, Sustainability" },
      { name: "University of Copenhagen",              location: "Copenhagen", rank: 121, spec: "Medicine, Sciences, Humanities" },
      { name: "Aarhus University",                     location: "Aarhus",     rank: 148, spec: "Business, Sciences, Social Sciences" },
      { name: "Copenhagen Business School",            location: "Copenhagen", rank: 201, spec: "Business, Finance, Management" },
      { name: "Aalborg University",                    location: "Aalborg",    rank: 301, spec: "Engineering, IT, Social Sciences" },
    ],
    courses: ["Engineering","Renewable Energy","Computer Science","Business","Architecture","Medicine","Data Science","Environmental Management"],
    intakes: [
      { month: "SEP", label: "Autumn Semester", deadline: "March 15", note: "Main intake — full program selection" },
      { month: "FEB", label: "Spring Semester", deadline: "October 1", note: "Limited programs available" },
    ],
    uniCount: "8 Universities",
    ielts: { min: "6.5", note: "TOEFL iBT 83+ also accepted" },
    tuition: "DKK 45,000 – 120,000 / year",
    visa: "4–6 weeks",
    deadline: "March 15",
    cities: ["Copenhagen","Aarhus","Odense","Aalborg"],
  },
  {
    slug: "cyprus",
    image: "/images/destinations/cyprus.jpg",
    name: "Cyprus",
    color: "#003680",
    tagline: "Mediterranean gem with EU benefits",
    heroSubtitle: "Study in the Mediterranean's Hidden Gem",
    overview: "Cyprus offers EU education standards in a Mediterranean paradise. With year-round sunshine, affordable living, a growing university sector, and EU membership, Cyprus is an increasingly popular choice for students seeking European qualifications.",
    highlights: [
      "EU member state — EU recognized qualifications",
      "Mediterranean lifestyle — year-round sunshine",
      "Affordable tuition and living costs",
      "English widely spoken — smooth adaptation",
      "Growing IT and business sector",
      "Safe, welcoming country for international students",
    ],
    universities: [
      { name: "University of Cyprus",           location: "Nicosia",  rank: 601, spec: "Sciences, Engineering, Humanities" },
      { name: "Cyprus University of Technology",location: "Limassol", rank: 601, spec: "Engineering, Technology, Business" },
      { name: "European University Cyprus",     location: "Nicosia",  rank: 1001,spec: "Medicine, Law, Business" },
      { name: "UCLan Cyprus",                   location: "Pafos",    rank: 801, spec: "Business, IT, Media" },
    ],
    courses: ["Business & Management","Computer Science","Engineering","Law","Medicine","Architecture","Hotel Management","Media Studies"],
    intakes: [
      { month: "SEP", label: "Autumn Semester", deadline: "June – August",   note: "Primary intake" },
      { month: "FEB", label: "Spring Semester", deadline: "November – January", note: "Available at most universities" },
    ],
    uniCount: "12 Universities",
    ielts: { min: "5.5 – 6.0", note: "TOEFL iBT 61+ also accepted" },
    tuition: "EUR 3,000 – 8,000 / year",
    visa: "4–6 weeks",
    deadline: "June – August",
    cities: ["Nicosia","Limassol","Larnaca","Pafos"],
  },
  {
    slug: "netherlands",
    image: "/images/destinations/netherlands.jpg",
    name: "Netherlands",
    color: "#AE1C28",
    tagline: "2,000+ English programs in the cycling capital",
    heroSubtitle: "Study Where Innovation Meets Tradition",
    overview: "The Netherlands has one of the highest concentrations of English-taught programs in continental Europe. With a strong economy, world-famous research universities, and an open, international society, the Netherlands is a top European study destination.",
    highlights: [
      "2,000+ English-taught Bachelor's and Master's programs",
      "Home to Philips, ASML, Shell — strong industry connections",
      "Part-time work: 16 hours/week during studies",
      "Wageningen ranked #1 in Agriculture globally",
      "Highly international — 85% of Dutch people speak English",
      "1-year job-seeking visa (Zoekjaar) after graduation",
    ],
    universities: [
      { name: "Delft University of Technology",  location: "Delft",      rank: 47,  spec: "Engineering, Architecture, IT" },
      { name: "Wageningen University",           location: "Wageningen", rank: 55,  spec: "Agriculture, Life Sciences, Environment" },
      { name: "University of Amsterdam",         location: "Amsterdam",  rank: 58,  spec: "Business, Social Sciences, Humanities" },
      { name: "Eindhoven University of Tech.",   location: "Eindhoven",  rank: 104, spec: "Technology, Design, Innovation" },
      { name: "Utrecht University",              location: "Utrecht",    rank: 109, spec: "Sciences, Medicine, Humanities" },
    ],
    courses: ["Engineering & Design","Agriculture & Life Sciences","Business & Economics","Computer Science","International Relations","Data Science","Architecture","Social Sciences"],
    intakes: [
      { month: "SEP", label: "September (Main)", deadline: "April 1 – May 1", note: "Main intake, full selection" },
      { month: "FEB", label: "February",         deadline: "October",         note: "Available at select universities" },
    ],
    uniCount: "13 Universities",
    ielts: { min: "6.0 – 6.5", note: "TOEFL iBT 80+ also accepted" },
    tuition: "EUR 6,000 – 20,000 / year",
    visa: "4–8 weeks",
    deadline: "April 1",
    cities: ["Amsterdam","Delft","Utrecht","Eindhoven","Groningen","Wageningen"],
  },
  {
    slug: "malta",
    image: "/images/destinations/malta.jpg",
    name: "Malta",
    color: "#CF142B",
    tagline: "English-speaking EU island with affordable education",
    heroSubtitle: "Study in Europe's Sunniest Island",
    overview: "Malta is the only English-speaking country in the Eurozone. This tiny Mediterranean island offers EU-standard education, a vibrant history, and a unique lifestyle. With affordable costs and growing university infrastructure, Malta is gaining popularity.",
    highlights: [
      "Only English-speaking country in the Eurozone",
      "EU member — EU qualifications and work rights",
      "Affordable living — one of EU's lowest cost destinations",
      "Mediterranean island lifestyle — history, beaches, culture",
      "Growing iGaming, finance, and tech sectors",
      "Safe, small country — easy to navigate",
    ],
    universities: [
      { name: "University of Malta",            location: "Msida",   rank: 1001, spec: "Sciences, Humanities, Business" },
      { name: "MCAST (Arts, Science & Tech.)",  location: "Paola",   rank: null, spec: "Vocational, Applied Sciences" },
      { name: "American University of Malta",   location: "Cospicua",rank: null, spec: "Business, Engineering, Arts" },
    ],
    courses: ["Business & Management","IT & Digital Technology","Tourism & Hospitality","Architecture","Healthcare","Law","Arts & Design","iGaming & Finance"],
    intakes: [
      { month: "OCT", label: "Autumn Semester", deadline: "June – August",   note: "Main intake" },
      { month: "FEB", label: "Spring Semester", deadline: "November – January", note: "Available for select programs" },
    ],
    uniCount: "3 Universities",
    ielts: { min: "5.5 – 6.0", note: "TOEFL iBT 61+ also accepted" },
    tuition: "EUR 4,000 – 12,000 / year",
    visa: "4–6 weeks",
    deadline: "June – August",
    cities: ["Valletta","Sliema","St. Julian's","Mdina"],
  },
];

// ── Career Pathways ──────────────────────────────────────────────
export const careerPathways = [
  {
    slug: "skilled-migration",
    name: "Skilled Worker Migration",
    icon: "Briefcase",
    tagline: "Work abroad as a skilled professional in Germany, Australia, or Cyprus",
    overview: "Skilled workers are in high demand across Germany, Australia, and Cyprus. These countries actively welcome professionals with expertise in IT, engineering, healthcare, and construction. Easy to Europe guides skilled professionals through the entire migration process.",
    opportunities: [
      {
        country: "Germany",
        countrySlug: "germany",
        role: "Caregiver Jobs",
        salary: "€1,800 – €2,800/month",
        requirements: ["Basic caregiving training", "German language up to B1", "Compassionate & experienced"],
        benefits: ["German language training provided", "Visa sponsorship & work permit", "Free/subsidized accommodation", "Pathway to permanent residency", "Option to bring family after settlement"],
        description: "Germany faces a shortage of healthcare professionals. Trained caregivers from abroad are actively recruited for hospitals, elderly homes, and rehabilitation centers.",
      },
      {
        country: "Cyprus",
        countrySlug: "cyprus",
        role: "Construction Worker Jobs",
        salary: "€900 – €1,400/month",
        requirements: ["No experience required for some roles", "Basic construction skills preferred", "Simple documentation"],
        benefits: ["Free shared accommodation", "Work permit & visa assistance", "Overtime & weekend bonuses", "Quick contract processing", "Opportunity for long-term residency"],
        description: "Cyprus is expanding its infrastructure rapidly, creating high demand for construction workers. Roles include general labor, masonry, painting, tiling, scaffolding, and more.",
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany Work Visa",
    icon: "Globe",
    tagline: "Move to Germany — Opportunity Card, Blue Card & Ausbildung",
    overview: "Germany offers multiple pathways for skilled workers from Bangladesh. From the new Opportunity Card (no job offer needed) to the EU Blue Card for graduates, Germany is actively welcoming international talent.",
    programs: [
      {
        name: "German Opportunity Card (Chancenkarte)",
        subtitle: "Move to Germany Without a Job Offer",
        description: "A new visa route allowing skilled workers from Bangladesh to enter Germany without a job offer and remain for up to 1 year to search for employment. Work 20 hours/week part-time while searching.",
        requirements: ["Recognized university degree or vocational qualification", "English B2 or German A1+", "Blocked account ~€13,000 or sponsor letter", "Score at least 6 points in the German points system"],
        pointsSystem: [
          { criteria: "Partial degree recognition (ZAB)", points: 4 },
          { criteria: "Degree in shortage field (EEE, IT)", points: 1 },
          { criteria: "Work experience (5+ years)", points: 3 },
          { criteria: "German language A2–B2", points: "1–3" },
          { criteria: "Age 35 or below", points: 2 },
          { criteria: "English level C1 or native", points: 1 },
          { criteria: "Previous stay in Germany (6+ months)", points: 1 },
          { criteria: "Spouse with same qualifications", points: 1 },
        ],
        documents: ["Valid passport","Recognized degree (ANABIN/ZAB)","Language certificate","CV and Motivation Letter","Blocked account or sponsor letter","Travel health insurance","Completed visa form"],
        processing: "4–12 weeks processing, 1–6 months appointment wait",
      },
      {
        name: "EU Blue Card",
        subtitle: "High-Skilled Work Permit with Fast-Track PR",
        description: "The EU Blue Card is a work permit for highly qualified non-EU professionals with a recognized degree and a job offer in Germany with a minimum salary threshold. Fast-track to permanent residency in 21 months.",
        requirements: ["University degree (recognized in Germany)", "Job offer with minimum salary €45,300/year (shortage occupations: €41,041/year)", "The degree must be relevant to the job"],
        benefits: ["Fast-Track PR: eligible in 21 months (33 months standard)", "EU mobility after 18 months", "Family reunification from Day 1", "Pathway to German citizenship"],
        processing: "1–3 months",
      },
      {
        name: "Ausbildung (Vocational Training)",
        subtitle: "Earn While You Learn in Germany",
        description: "Ausbildung is Germany's renowned dual vocational training system. Train with a German company (3–4 days/week) while attending vocational school (1–2 days/week). Earn a monthly stipend and get a recognized German qualification.",
        requirements: ["Secondary school certificate (SSC/HSC)", "German language B1 minimum (B2 preferred)", "Age typically 18–35", "Motivation to work and learn in Germany"],
        benefits: ["Monthly training allowance: €620–€1,100", "Full legal work status during training", "Permanent job offer after completion in most cases", "Path to long-term residency"],
        processing: "3–6 months total process",
      },
    ],
  },
  {
    slug: "cyprus-work",
    name: "Cyprus Work",
    icon: "Sun",
    tagline: "Construction and service jobs in the Mediterranean",
    overview: "Cyprus offers accessible work opportunities for skilled and semi-skilled workers from Bangladesh, particularly in construction, hospitality, and services. Simple documentation and quick processing make it an attractive option.",
    benefits: ["Monthly salary: €900–€1,400+", "Free shared accommodation for many roles", "Work permit & visa assistance from Easy to Europe", "Overtime and weekend bonus pay", "No academic qualification required for many roles", "Opportunity to extend contract or apply for residency"],
    sectors: ["Construction & Civil Works","Hospitality & Tourism","Healthcare & Elderly Care","Agriculture","Retail & Services","Manufacturing"],
    processing: "4–8 weeks",
  },
];

// ── Home Page ────────────────────────────────────────────────────
export const homePage = {
  featuredDestinations: { subtitle: "Find your perfect study destination from our global network of universities and institutions." },
  hero: {
    badge:       "1,000+ Students Placed Successfully",
    headline:    "From Dreams to Doors,\nLet's Unlock Your\nEuropean Journey",
    subheadline: "At Easy to Europe, we simplify your path to top global destinations. Expert visa guidance, university selection, and complete support — from first enquiry to landing day.",
    cta1:        "Book Free Consultation",
    cta2:        "Explore Destinations",
  },
  marqueeItems: [
    "🎓 98% Visa Success Rate",
    "✈️ 12+ Countries",
    "👩‍🎓 1,000+ Students Placed",
    "🏆 5+ Years Experience",
    "📋 100% Application Support",
    "💰 No Hidden Charges",
    "🌍 Expert Counselors",
    "⚡ Fast Admission Processing",
  ],
  whyUs: {
    title:    "Why Choose Easy To Europe?",
    subtitle: "Your trusted partner for European student visa success.",
    items: [
      { icon: "ShieldCheck", title: "100% Application Support",     desc: "From form filling to document submission, we guide you through every single step flawlessly." },
      { icon: "GraduationCap", title: "University Selection Guidance", desc: "Expert advice to match you with the best universities based on your profile, goals, and budget." },
      { icon: "FileText",    title: "SOP & Visa File Preparation",  desc: "Dedicated support to craft compelling Statements of Purpose and prepare your full visa file." },
      { icon: "BadgeCheck",  title: "No Hidden Charges",            desc: "We operate with full transparency. Our fee structure is clear and upfront — no surprise costs." },
      { icon: "Users",       title: "Experienced Counselors",       desc: "Personalized, up-to-date, and reliable advice tailored to the European education landscape." },
      { icon: "TrendingUp",  title: "High Visa Success Rate",       desc: "Our meticulous file preparation leads to one of the highest visa approval rates in the industry." },
    ],
  },
  process: {
    title:    "How It Works",
    subtitle: "5 simple steps from consultation to landing",
    steps: [
      { number: "01", title: "Free Consultation",    desc: "Discuss your goals, profile, and budget with our expert counselors." },
      { number: "02", title: "University Selection", desc: "We match you with the best universities for your profile and career goals." },
      { number: "03", title: "File Preparation",     desc: "SOP, CV, documents — we prepare and review everything with you." },
      { number: "04", title: "Visa Processing",      desc: "Expert visa file submission with the highest approval rate." },
      { number: "05", title: "Pre-Departure",        desc: "Flight, accommodation, cultural briefing — we prepare you fully." },
      { number: "06", title: "Post-Arrival & Career Support", desc: "Ongoing support for accommodation, part-time jobs, and guidance for your future career." },
    ],
  },
  testimonials: {
          title: "What Our Students Say",
          items: [
            { name: "Urmi Hasan Shanta", photo: "/images/testimonials/urmi-hasan-shanta.jpg", country: "Lithuania", university: "Mykolas Romeris University", rating: 5, quote: "Lithuania has been an amazing experience for my higher studies. Mykolas Romeris University offers a great environment and the visa process was seamless." },
            { name: "Ferdous Woahid Raz", photo: "/images/testimonials/ferdous-woahid-raz.jpg", country: "UK", university: "Cardiff Metropolitan University", rating: 5, quote: "The mock interviews helped me build confidence for Cardiff Metropolitan University. The team's professional support made my UK dream come true." },
            { name: "Ahsanul Islam", photo: "/images/testimonials/ahsanul-islam.jpg", country: "Australia", university: "ASA Institute", rating: 5, quote: "Studying in Australia was a big decision. ASA Institute's curriculum is top-notch, and the guidance I received for my visa was exceptional." },
            { name: "Miskatul Islam", photo: "/images/testimonials/miskatul-islam.jpg", country: "Sweden", university: "Uppsala University", rating: 5, quote: "Sweden offers world-class education with great innovation. The English-taught programs and student-friendly environment are truly impressive." },
            { name: "Tanvir Ahmed", photo: "/images/testimonials/tanvir-ahmed.jpg", country: "Germany", university: "TU Berlin", rating: 5, quote: "The Opportunity Card guidance was incredibly detailed. They helped me score 8 points and get my visa approved quickly." },
            { name: "Rafiq Hossain", photo: "/images/testimonials/rafiq-hossain.jpg", country: "Canada", university: "University of Toronto", rating: 5, quote: "Professional, transparent, and genuinely caring. My PGWP and PR pathway planning was done perfectly." },
          ],
          },
};

// ── Services Page ────────────────────────────────────────────────
export const servicesData = {
  featuredDestinations: { subtitle: "Find your perfect study destination from our global network of universities and institutions." },
  hero: {
    badge: "24/7 Expert Support Active",
    title: "Study in Global Destinations with Ease.",
    sub:   "Personalized guidance to help you secure admission in world-class universities.",
  },
  steps: [
    { number: "01", icon: "Lightbulb",   title: "Pathway Selection",   items: ["Profile Evaluation","Best Country Match","Career Roadmap"] },
    { number: "02", icon: "GraduationCap",title:"Admission Assist",    items: ["University Selection","Custom SOP & CV","Offer Letter Support"] },
    { number: "03", icon: "DollarSign",  title: "Scholarship Guide",   items: ["Tuition Waivers","Merit-based Grants","Financial Aid Search"] },
    { number: "04", icon: "FileCheck",   title: "Visa Support",        items: ["Document Checklist","Interview Prep","Submission Support"] },
    { number: "05", icon: "Activity",    title: "Tracking & Follow-up",items: ["Real-time Updates","Direct Uni-Link","Status Monitoring"] },
    { number: "06", icon: "Users",       title: "Family Visa",         items: ["Spouse Visa Guide","Dependent Support","Legal Processing"] },
    { number: "07", icon: "Luggage",     title: "Pre-Departure",       items: ["Packing Checklist","Cultural Briefing","Living Cost Tips"] },
    { number: "08", icon: "Plane",       title: "Travel Assist",       items: ["Best Flight Search","Route Planning","Luggage Guidance"] },
    { number: "09", icon: "Home",        title: "Accommodation",       items: ["Housing Near Uni","Airport Pickup","Local Survival Guide"] },
    { number: "10", icon: "TrendingUp",  title: "Career Counseling",   items: ["Part-time Job Help","Internship Guidance","Future Roadmap"] },
  ],
  ielts: {
    title: "English Test Registration",
    sub:   "Your hassle-free gateway to IELTS, PTE, and more.",
    active: ["IELTS Academic & General"],
    coming: ["PTE Academic","TOEFL iBT","Duolingo (DET)","GRE/GMAT"],
  },
};

// ── About Page ───────────────────────────────────────────────────
export const aboutData = {
  why: [
    { icon: "💡", title: "100% Application Support",  desc: "From form filling to document submission, we guide you through every single step." },
    { icon: "🎓", title: "University Selection",       desc: "Expert advice to match you with the best universities based on your profile and goals." },
    { icon: "📝", title: "SOP & Visa File Prep",       desc: "Dedicated support to craft compelling SOPs and meticulously prepare your visa file." },
    { icon: "💰", title: "No Hidden Charges",          desc: "We operate with full transparency. Our fee structure is clear and upfront." },
    { icon: "🧑‍💻", title: "Experienced Counselors",   desc: "Personalized, up-to-date advice tailored to the European education landscape." },
    { icon: "✅", title: "High Visa Success Rate",     desc: "Meticulous file preparation leads to one of the highest visa approval rates." },
  ],
  mission: {
    title: "Our Mission",
    sub:   "Driving excellence through strategic global placement and professional support.",
    points: [
      { title: "Global Access",        desc: "High-value ecosystems in Sweden & Europe." },
      { title: "Optimized Journey",    desc: "End-to-end professional support framework." },
      { title: "Global Competence",    desc: "Cultural resilience and career readiness." },
    ],
  },
  vision: {
    title: "Our Vision",
    sub:   "Pioneering a world where education knows no geographical borders or barriers.",
    points: [
      { title: "Industry Lead",        desc: "Innovation and service excellence lead." },
      { title: "Educational Equity",   desc: "Opportunities for all, regardless of origin." },
      { title: "Empowered Citizens",   desc: "Catalyst for next-gen global leaders." },
    ],
  },
  leadership: [
    { name: "Md Zahid Hasan",      photo: "/images/team/leadership/md-zahid-hasan.jpg", role: "Chief Executive Officer", years: "5+", quote: "Our goal is to redefine international education consultancy by prioritizing transparency. We build futures, not just process visas, ensuring every student finds their path to success in 12+ premium global destinations.", linkedin: "https://www.linkedin.com/in/md-zahid-hasan-259195aa/?originalSubdomain=bd" },
    { name: "Sadman Sakib Prottoy",photo: "/images/team/leadership/sadman-sakib-prottoy.jpg", role: "Managing Director",       years: "3+", quote: "Strategic growth and global partnerships for top-tier access to global universities.", linkedin: "https://www.linkedin.com/in/sadman105/" },
    { name: "Nadeem Shawon",       photo: "/images/team/leadership/nadeem-shawon.jpg", role: "Marketing Director",      years: "3+", quote: "Connecting students with their dream destinations through clear and ethical communication.", linkedin: "https://www.linkedin.com/in/nadeem-shawon-8313b41aa/" },
  ],
  // Each member below already has a `photo:` field pointing to
  // /public/images/team/staff/{slug}.jpg — just replace that file
  // with a real photo (same filename) and it'll show automatically.
  // If a photo fails to load, the site falls back to a clean
  // initials avatar automatically — never a broken image.
  team: [
    { name: "Mr. Jamal", photo: "/images/team/staff/jamal.jpg",         role: "Lead Consultant",                  nickname: "The Genie",    trait: "Wisdom & Warmth" },
    { name: "Rubayet", photo: "/images/team/staff/rubayet.jpg",           role: "Manager / HR & Admin",             nickname: "Mufasa",       trait: "Steady Support" },
    { name: "Faiza", photo: "/images/team/staff/faiza.jpg",             role: "Brand Executive",                  nickname: "Minnie Mouse", trait: "Creative Energy" },
    { name: "Masuda Parvin Sraboni", photo: "/images/team/staff/masuda-parvin-sraboni.jpg", role: "Senior Education Consultant",  nickname: "",             trait: "Student Champion" },
    //{ name: "Sraboni", photo: "/images/team/staff/sraboni.jpg",           role: "Senior UK Consultant",             nickname: "Moana",        trait: "Confident Mentor" },
    { name: "Tanjina", photo: "/images/team/staff/tanjina.jpg",           role: "Customer Executive",               nickname: "Snow White",   trait: "Clarity & Hope" },
    { name: "Md. Hajjaj Bin Sonosi", photo: "/images/team/staff/hajjaj.jpg",            role: "IT Lead & Full Stack Software Engineer",                          nickname: "Thor",         trait: "Tech Power" },
    { name: "Tanny", photo: "/images/team/staff/tanny.jpg",             role: "Compliance",                       nickname: "Belle",        trait: "Clever Thinker" },
    { name: "Tasfea Mahjabin", photo: "/images/team/staff/tasfea-mahjabin.jpg",   role: "Education Consultant",             nickname: "Prithy",       trait: "Dedicated Guide" },
    { name: "Mehidi", photo: "/images/team/staff/mehidi.jpg",            role: "Senior Advisor",                   nickname: "Yoda",         trait: "Wise Mentorship" },
    { name: "Prity", photo: "/images/team/staff/prity.jpg",             role: "Europe Specialist",                nickname: "Buttercup",    trait: "Friendly Guidance" },
    { name: "Sifat", photo: "/images/team/staff/sifat.jpg",             role: "Visa Expert",                      nickname: "Aladdin",      trait: "Problem Solver" },
    { name: "Tanim", photo: "/images/team/staff/tanim.jpg",             role: "UI/UX Designer",                   nickname: "Peter Pan",    trait: "Creative Flair" },
    { name: "Antara", photo: "/images/team/staff/antara.jpg",            role: "Content Creator",                  nickname: "Ariel",        trait: "Creative Spark" },
    { name: "Asif", photo: "/images/team/staff/asif.jpg",              role: "Researcher",                       nickname: "Sherlock",     trait: "Fact Finder" },
    //{ name: "Fatema Zannatee", photo: "/images/team/staff/fatema-zannatee.jpg",   role: "Social Media",                     nickname: "Cinderella",   trait: "Bright Presence" },
    //{ name: "Shaheli Sultana", photo: "/images/team/staff/shaheli-sultana.jpg",   role: "Sr. Educational Consultant",       nickname: "",             trait: "Relationship Manager" },
  ],
};

// ── Events ───────────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════
// HOW TO ADD / EDIT EVENTS (without deploying):
//
// OPTION 1 — Edit this file directly (needs redeploy):
//   • Add a new object inside the events array below
//   • Fields: id, title, type, description, location,
//             startDate, endDate, registrationLink, featured
//   • Date format: "YYYY-MM-DDTHH:mm"  e.g. "2026-08-10T14:00"
//   • Types: "Seminar" | "Workshop" | "Webinar" | "Fair" | "Info Session" | "Other"
//   • featured: true → shows as large hero card at top
//
// OPTION 2 — Admin Panel (no deploy needed):
//   • Go to: yoursite.com/admin/events
//   • Password: easytoeurope2025
//   • Add/edit/delete events via the UI
//   • Events save to browser localStorage
//
// Events with endDate in the past are automatically hidden.
// ════════════════════════════════════════════════════════════════
export const events: Event[] = [
  {
    id:          "summit-2026",
    title:       "Multi-Destination Education Summit 2026",
    type:        "Fair",
    description: "Explore study options across 12 leading destinations under one roof — meet consultants, get scholarship guidance, and unlock exclusive event-only offers.",
    location:    "Easy To Europe Office, Dhaka",
    startDate:   "2026-08-14T10:00",
    endDate:     "2026-08-15T18:00",
    registrationLink: "#",
    featured:    true,
    image:       "/images/events/evt-001.jpg",
    path:        "/summit-2026",
  },
  {
    id:          "nordic-baltic-expo-2026",
    title:       "Nordic & Baltic Study Expo 2026",
    type:        "Fair",
    description: "Discover affordable, high-quality education across Sweden, Denmark, and Lithuania — three of Europe's most student-friendly destinations, all in one session.",
    location:    "Easy To Europe Office, Dhaka",
    startDate:   "2026-10-10T10:00",
    endDate:     "2026-10-10T16:00",
    registrationLink: "#",
    featured:    false,
    image:       "/images/events/evt-002.jpg",
    path:        "/nordic-baltic-expo-2026",
  },
  {
    id:          "uk-pathways-fair-2026",
    title:       "UK University Pathways & Scholarship Fair",
    type:        "Seminar",
    description: "A dedicated deep-dive into UK higher education — top universities, pathway programs, CAS letters, financial requirements, and the Graduate Route explained by our senior UK consultants.",
    location:    "Easy To Europe Office, Dhaka",
    startDate:   "2026-11-07T15:00",
    endDate:     "2026-11-07T18:00",
    registrationLink: "#",
    featured:    false,
    image:       "/images/events/evt-003.jpg",
    path:        "/uk-pathways-fair-2026",
  },
  {
    id:          "apac-education-fair-2026",
    title:       "Asia-Pacific Education Fair 2026",
    type:        "Fair",
    description: "Explore world-class, affordable education across Australia and Malaysia — post-study work rights, branch campuses, and scholarship-backed pathways in one session.",
    location:    "Easy To Europe Office, Dhaka",
    startDate:   "2026-11-21T10:00",
    endDate:     "2026-11-21T15:00",
    registrationLink: "#",
    featured:    false,
    image:       "/images/events/evt-004.jpg",
    path:        "/apac-education-fair-2026",
  },
  {
    id:          "canada-pr-summit-2026",
    title:       "Canada Study & PR Pathway Summit",
    type:        "Webinar",
    description: "How to use your Canadian study visa as a stepping stone to Permanent Residency — PGWP, Express Entry, CRS score building, and provincial nominee programs, with real case studies from our placed students.",
    location:    "Online (Zoom)",
    startDate:   "2026-12-05T17:00",
    endDate:     "2026-12-05T19:00",
    registrationLink: "#",
    featured:    false,
    image:       "/images/events/evt-005.jpg",
    path:        "/canada-pr-summit-2026",
  },
  {
    id:          "germany-opportunity-card-2026",
    title:       "Germany Opportunity Card — Live Masterclass",
    type:        "Workshop",
    description: "A step-by-step guide to applying for the German Opportunity Card (Chancenkarte) — points system, document checklist, blocked account requirements, and exactly how Easy To Europe can assist your application.",
    location:    "Online (Zoom)",
    startDate:   "2026-12-16T18:00",
    endDate:     "2026-12-16T20:00",
    registrationLink: "#",
    featured:    false,
    image:       "/images/events/evt-002.jpg",
    path:        "/germany-opportunity-card-2026",
  },
];

export interface Event {
  id:               string;
  title:            string;
  type:             "Seminar" | "Workshop" | "Webinar" | "Fair" | "Info Session" | "Other";
  description:      string;
  location:         string;
  startDate:        string;
  endDate:          string;
  registrationLink: string;
  featured:         boolean;
  image?:           string;
  path?:            string; // custom URL, e.g. "/summit-2026" (defaults to /events/{id})
}

// ── Partner Universities (for the dedicated /partner-universities page) ──
// Grouped by country. To add a university: find its country group below
// (or add a new group) and push a new object into `universities`.
// `type` should be one of: "University" | "University Pathway" |
// "Private College" | "Higher Education" — matching the categories used
// across the site's "Partner Institutions" sections.
export interface PartnerUni {
  name:        string;
  logo:        string;
  type:        string;
  website?:    string;
  description?:string;
}
export interface PartnerCountryGroup {
  country:  string;
  flagCode: string;   // 2-letter code for flagcdn.com
  universities: PartnerUni[];
}

export const partnerUniversities: PartnerCountryGroup[] = [
  {
    country: "Australia", flagCode: "au",
    universities: [
      { name:"University of Melbourne", type:"University", logo:"https://www.google.com/s2/favicons?domain=unimelb.edu.au&sz=128" },
      { name:"Monash University", type:"University", logo:"https://www.google.com/s2/favicons?domain=monash.edu&sz=128" },
      { name:"The University of Sydney", type:"University", logo:"https://www.google.com/s2/favicons?domain=sydney.edu.au&sz=128" },
      { name:"UNSW Sydney", type:"University", logo:"https://www.google.com/s2/favicons?domain=unsw.edu.au&sz=128" },
      { name:"Australian National University", type:"University", logo:"https://www.google.com/s2/favicons?domain=anu.edu.au&sz=128" },
      { name:"The University of Queensland", type:"University", logo:"https://www.google.com/s2/favicons?domain=uq.edu.au&sz=128" },
      { name:"University of Adelaide", type:"University", logo:"https://www.google.com/s2/favicons?domain=adelaide.edu.au&sz=128" },
      { name:"University of Western Australia", type:"University", logo:"https://www.google.com/s2/favicons?domain=uwa.edu.au&sz=128" },
      { name:"University of Technology Sydney", type:"University", logo:"https://www.google.com/s2/favicons?domain=uts.edu.au&sz=128" },
      { name:"Macquarie University", type:"University", logo:"https://www.google.com/s2/favicons?domain=mq.edu.au&sz=128" },
      { name:"RMIT University", type:"University", logo:"https://www.google.com/s2/favicons?domain=rmit.edu.au&sz=128" },
      { name:"Deakin University", type:"University", logo:"https://www.google.com/s2/favicons?domain=deakin.edu.au&sz=128" },
      { name:"Griffith University", type:"University", logo:"https://www.google.com/s2/favicons?domain=griffith.edu.au&sz=128" },
      { name:"Curtin University", type:"University", logo:"https://www.google.com/s2/favicons?domain=curtin.edu.au&sz=128" },
      { name:"La Trobe University", type:"University", logo:"https://www.google.com/s2/favicons?domain=latrobe.edu.au&sz=128" },
    ],
  },
  {
    country: "Canada", flagCode: "ca",
    universities: [
      { name:"University of Toronto", type:"University", logo:"https://www.google.com/s2/favicons?domain=utoronto.ca&sz=128" },
      { name:"University of British Columbia", type:"University", logo:"https://www.google.com/s2/favicons?domain=ubc.ca&sz=128" },
      { name:"McGill University", type:"University", logo:"https://www.google.com/s2/favicons?domain=mcgill.ca&sz=128" },
      { name:"University of Alberta", type:"University", logo:"https://www.google.com/s2/favicons?domain=ualberta.ca&sz=128" },
      { name:"McMaster University", type:"University", logo:"https://www.google.com/s2/favicons?domain=mcmaster.ca&sz=128" },
      { name:"University of Waterloo", type:"University", logo:"https://www.google.com/s2/favicons?domain=uwaterloo.ca&sz=128" },
      { name:"Western University", type:"University", logo:"https://www.google.com/s2/favicons?domain=uwo.ca&sz=128" },
      { name:"Queen's University", type:"University", logo:"https://www.google.com/s2/favicons?domain=queensu.ca&sz=128" },
      { name:"University of Calgary", type:"University", logo:"https://www.google.com/s2/favicons?domain=ucalgary.ca&sz=128" },
      { name:"Simon Fraser University", type:"University", logo:"https://www.google.com/s2/favicons?domain=sfu.ca&sz=128" },
      { name:"York University", type:"University", logo:"https://www.google.com/s2/favicons?domain=yorku.ca&sz=128" },
      { name:"University of Ottawa", type:"University", logo:"https://www.google.com/s2/favicons?domain=uottawa.ca&sz=128" },
      { name:"Concordia University", type:"University", logo:"https://www.google.com/s2/favicons?domain=concordia.ca&sz=128" },
      { name:"Toronto Metropolitan University", type:"University", logo:"https://www.google.com/s2/favicons?domain=torontomu.ca&sz=128" },
      { name:"Dalhousie University", type:"University", logo:"https://www.google.com/s2/favicons?domain=dal.ca&sz=128" },
    ],
  },
  {
    country: "United Kingdom", flagCode: "gb",
    universities: [
      { name:"University of Oxford", type:"University", logo:"https://www.google.com/s2/favicons?domain=ox.ac.uk&sz=128" },
      { name:"University of Cambridge", type:"University", logo:"https://www.google.com/s2/favicons?domain=cam.ac.uk&sz=128" },
      { name:"Imperial College London", type:"University", logo:"https://www.google.com/s2/favicons?domain=imperial.ac.uk&sz=128" },
      { name:"UCL", type:"University", logo:"https://www.google.com/s2/favicons?domain=ucl.ac.uk&sz=128" },
      { name:"King's College London", type:"University", logo:"https://www.google.com/s2/favicons?domain=kcl.ac.uk&sz=128" },
      { name:"University of Edinburgh", type:"University", logo:"https://www.google.com/s2/favicons?domain=ed.ac.uk&sz=128" },
      { name:"University of Manchester", type:"University", logo:"https://www.google.com/s2/favicons?domain=manchester.ac.uk&sz=128" },
      { name:"University of Bristol", type:"University", logo:"https://www.google.com/s2/favicons?domain=bristol.ac.uk&sz=128" },
      { name:"University of Glasgow", type:"University", logo:"https://www.google.com/s2/favicons?domain=gla.ac.uk&sz=128" },
      { name:"University of Birmingham", type:"University", logo:"https://www.google.com/s2/favicons?domain=birmingham.ac.uk&sz=128" },
      { name:"University of Leeds", type:"University", logo:"https://www.google.com/s2/favicons?domain=leeds.ac.uk&sz=128" },
      { name:"University of Sheffield", type:"University", logo:"https://www.google.com/s2/favicons?domain=sheffield.ac.uk&sz=128" },
      { name:"University of Warwick", type:"University", logo:"https://www.google.com/s2/favicons?domain=warwick.ac.uk&sz=128" },
      { name:"University of Southampton", type:"University", logo:"https://www.google.com/s2/favicons?domain=southampton.ac.uk&sz=128" },
      { name:"Durham University", type:"University", logo:"https://www.google.com/s2/favicons?domain=durham.ac.uk&sz=128" },
      { name:"Queen Mary University of London", type:"University", logo:"https://www.google.com/s2/favicons?domain=qmul.ac.uk&sz=128" },
      { name:"Newcastle University", type:"University", logo:"https://www.google.com/s2/favicons?domain=ncl.ac.uk&sz=128" },
      { name:"University of Nottingham", type:"University", logo:"https://www.google.com/s2/favicons?domain=nottingham.ac.uk&sz=128" },
      { name:"Lancaster University", type:"University", logo:"https://www.google.com/s2/favicons?domain=lancaster.ac.uk&sz=128" },
      { name:"University of Exeter", type:"University", logo:"https://www.google.com/s2/favicons?domain=exeter.ac.uk&sz=128" },
    ],
  },
  {
    country: "Sweden", flagCode: "se",
    universities: [
      { name:"KTH Royal Institute of Technology", type:"University", logo:"https://www.google.com/s2/favicons?domain=kth.se&sz=128" },
      { name:"Lund University", type:"University", logo:"https://www.google.com/s2/favicons?domain=lu.se&sz=128" },
      { name:"Uppsala University", type:"University", logo:"https://www.google.com/s2/favicons?domain=uu.se&sz=128" },
      { name:"Stockholm University", type:"University", logo:"https://www.google.com/s2/favicons?domain=su.se&sz=128" },
      { name:"Chalmers University of Technology", type:"University", logo:"https://www.google.com/s2/favicons?domain=chalmers.se&sz=128" },
      { name:"Linköping University", type:"University", logo:"https://www.google.com/s2/favicons?domain=liu.se&sz=128" },
      { name:"Umeå University", type:"University", logo:"https://www.google.com/s2/favicons?domain=umu.se&sz=128" },
      { name:"University of Gothenburg", type:"University", logo:"https://www.google.com/s2/favicons?domain=gu.se&sz=128" },
      { name:"Örebro University", type:"University", logo:"https://www.google.com/s2/favicons?domain=oru.se&sz=128" },
      { name:"Karlstad University", type:"University", logo:"https://www.google.com/s2/favicons?domain=kau.se&sz=128" },
    ],
  },
  {
    country: "Netherlands", flagCode: "nl",
    universities: [
      { name:"Delft University of Technology", type:"University", logo:"https://www.google.com/s2/favicons?domain=tudelft.nl&sz=128" },
      { name:"University of Amsterdam", type:"University", logo:"https://www.google.com/s2/favicons?domain=uva.nl&sz=128" },
      { name:"Utrecht University", type:"University", logo:"https://www.google.com/s2/favicons?domain=uu.nl&sz=128" },
      { name:"Leiden University", type:"University", logo:"https://www.google.com/s2/favicons?domain=universiteitleiden.nl&sz=128" },
      { name:"Eindhoven University of Technology", type:"University", logo:"https://www.google.com/s2/favicons?domain=tue.nl&sz=128" },
      { name:"Erasmus University Rotterdam", type:"University", logo:"https://www.google.com/s2/favicons?domain=eur.nl&sz=128" },
      { name:"Wageningen University", type:"University", logo:"https://www.google.com/s2/favicons?domain=wur.nl&sz=128" },
      { name:"Maastricht University", type:"University", logo:"https://www.google.com/s2/favicons?domain=maastrichtuniversity.nl&sz=128" },
      { name:"Radboud University", type:"University", logo:"https://www.google.com/s2/favicons?domain=ru.nl&sz=128" },
      { name:"Vrije Universiteit Amsterdam", type:"University", logo:"https://www.google.com/s2/favicons?domain=vu.nl&sz=128" },
    ],
  },
  {
    country: "Denmark", flagCode: "dk",
    universities: [
      { name:"University of Copenhagen", type:"University", logo:"https://www.google.com/s2/favicons?domain=ku.dk&sz=128" },
      { name:"Aarhus University", type:"University", logo:"https://www.google.com/s2/favicons?domain=au.dk&sz=128" },
      { name:"Technical University of Denmark", type:"University", logo:"https://www.google.com/s2/favicons?domain=dtu.dk&sz=128" },
      { name:"Aalborg University", type:"University", logo:"https://www.google.com/s2/favicons?domain=aau.dk&sz=128" },
      { name:"University of Southern Denmark", type:"University", logo:"https://www.google.com/s2/favicons?domain=sdu.dk&sz=128" },
      { name:"Copenhagen Business School", type:"University", logo:"https://www.google.com/s2/favicons?domain=cbs.dk&sz=128" },
      { name:"Roskilde University", type:"University", logo:"https://www.google.com/s2/favicons?domain=ruc.dk&sz=128" },
      { name:"IT University of Copenhagen", type:"University", logo:"https://www.google.com/s2/favicons?domain=itu.dk&sz=128" },
    ],
  },
  {
    country: "Austria", flagCode: "at",
    universities: [
      { name:"University of Vienna", type:"University", logo:"https://www.google.com/s2/favicons?domain=univie.ac.at&sz=128" },
      { name:"TU Wien", type:"University", logo:"https://www.google.com/s2/favicons?domain=tuwien.at&sz=128" },
      { name:"Graz University of Technology", type:"University", logo:"https://www.google.com/s2/favicons?domain=tugraz.at&sz=128" },
      { name:"University of Innsbruck", type:"University", logo:"https://www.google.com/s2/favicons?domain=uibk.ac.at&sz=128" },
      { name:"Johannes Kepler University Linz", type:"University", logo:"https://www.google.com/s2/favicons?domain=jku.at&sz=128" },
      { name:"Medical University of Vienna", type:"University", logo:"https://www.google.com/s2/favicons?domain=meduniwien.ac.at&sz=128" },
      { name:"WU Vienna", type:"University", logo:"https://www.google.com/s2/favicons?domain=wu.ac.at&sz=128" },
    ],
  },
  {
    country: "Hungary", flagCode: "hu",
    universities: [
      { name:"Eötvös Loránd University", type:"University", logo:"https://www.google.com/s2/favicons?domain=elte.hu&sz=128" },
      { name:"University of Debrecen", type:"University", logo:"https://www.google.com/s2/favicons?domain=unideb.hu&sz=128" },
      { name:"University of Szeged", type:"University", logo:"https://www.google.com/s2/favicons?domain=u-szeged.hu&sz=128" },
      { name:"Budapest University of Technology and Economics", type:"University", logo:"https://www.google.com/s2/favicons?domain=bme.hu&sz=128" },
      { name:"Semmelweis University", type:"University", logo:"https://www.google.com/s2/favicons?domain=semmelweis.hu&sz=128" },
      { name:"Corvinus University", type:"University", logo:"https://www.google.com/s2/favicons?domain=uni-corvinus.hu&sz=128" },
      { name:"University of Pécs", type:"University", logo:"https://www.google.com/s2/favicons?domain=pte.hu&sz=128" },
      { name:"Óbuda University", type:"University", logo:"https://www.google.com/s2/favicons?domain=uni-obuda.hu&sz=128" },
    ],
  },
  {
    country: "Lithuania", flagCode: "lt",
    universities: [
      { name:"Vilnius University", type:"University", logo:"https://www.google.com/s2/favicons?domain=vu.lt&sz=128" },
      { name:"Kaunas University of Technology", type:"University", logo:"https://www.google.com/s2/favicons?domain=ktu.edu&sz=128" },
      { name:"Vytautas Magnus University", type:"University", logo:"https://www.google.com/s2/favicons?domain=vdu.lt&sz=128" },
      { name:"Vilnius Gediminas Technical University", type:"University", logo:"https://www.google.com/s2/favicons?domain=vilniustech.lt&sz=128" },
      { name:"Lithuanian University of Health Sciences", type:"University", logo:"https://www.google.com/s2/favicons?domain=lsmuni.lt&sz=128" },
      { name:"Klaipėda University", type:"University", logo:"https://www.google.com/s2/favicons?domain=ku.lt&sz=128" },
    ],
  },
  {
    country: "Malaysia", flagCode: "my",
    universities: [
      { name:"Universiti Malaya", type:"University", logo:"https://www.google.com/s2/favicons?domain=um.edu.my&sz=128" },
      { name:"Universiti Putra Malaysia", type:"University", logo:"https://www.google.com/s2/favicons?domain=upm.edu.my&sz=128" },
      { name:"Universiti Kebangsaan Malaysia", type:"University", logo:"https://www.google.com/s2/favicons?domain=ukm.edu.my&sz=128" },
      { name:"Universiti Sains Malaysia", type:"University", logo:"https://www.google.com/s2/favicons?domain=usm.my&sz=128" },
      { name:"Universiti Teknologi Malaysia", type:"University", logo:"https://www.google.com/s2/favicons?domain=utm.my&sz=128" },
      { name:"Taylor's University", type:"Private College", logo:"https://www.google.com/s2/favicons?domain=taylors.edu.my&sz=128" },
      { name:"Sunway University", type:"Private College", logo:"https://www.google.com/s2/favicons?domain=sunway.edu.my&sz=128" },
      { name:"UCSI University", type:"Private College", logo:"https://www.google.com/s2/favicons?domain=ucsiuniversity.edu.my&sz=128" },
      { name:"INTI International University", type:"Private College", logo:"https://www.google.com/s2/favicons?domain=newinti.edu.my&sz=128" },
      { name:"Asia Pacific University", type:"Private College", logo:"https://www.google.com/s2/favicons?domain=apu.edu.my&sz=128" },
    ],
  },
  {
    country: "Cyprus", flagCode: "cy",
    universities: [
      { name:"University of Cyprus", type:"University", logo:"https://www.google.com/s2/favicons?domain=ucy.ac.cy&sz=128" },
      { name:"Cyprus University of Technology", type:"University", logo:"https://www.google.com/s2/favicons?domain=cut.ac.cy&sz=128" },
      { name:"European University Cyprus", type:"University", logo:"https://www.google.com/s2/favicons?domain=euc.ac.cy&sz=128" },
      { name:"University of Nicosia", type:"University", logo:"https://www.google.com/s2/favicons?domain=unic.ac.cy&sz=128" },
      { name:"Frederick University", type:"University", logo:"https://www.google.com/s2/favicons?domain=frederick.ac.cy&sz=128" },
    ],
  },
  {
    country: "Malta", flagCode: "mt",
    universities: [
      { name:"University of Malta", type:"University", logo:"https://www.google.com/s2/favicons?domain=um.edu.mt&sz=128" },
      { name:"Global College Malta", type:"Private College", logo:"https://www.google.com/s2/favicons?domain=globalcollege.mt&sz=128" },
      { name:"American University of Malta", type:"Private College", logo:"https://www.google.com/s2/favicons?domain=aum.edu.mt&sz=128" },
      { name:"MCAST", type:"Private College", logo:"https://www.google.com/s2/favicons?domain=mcast.edu.mt&sz=128" },
      { name:"STC Higher Education", type:"Higher Education", logo:"https://www.google.com/s2/favicons?domain=stchighereducation.com&sz=128" },
    ],
  },
];
