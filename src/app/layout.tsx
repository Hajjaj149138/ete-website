import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ui/ConsultationPopup";
import { ThemeProvider } from "@/lib/ThemeContext";
import { ConsultationProvider } from "@/lib/ConsultationContext";

export const metadata: Metadata = {
  title:       "Easy To Europe | Study Abroad Consultancy",
  description: "Your trusted partner for European student visa success.",
  keywords:    "study abroad, Europe, student visa, IELTS, Bangladesh, Easy To Europe",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/favicon-192.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try{
            var d=localStorage.getItem('ete-theme');
            if(d==='dark'||(!d&&window.matchMedia('(prefers-color-scheme:dark)').matches))
              document.documentElement.classList.add('dark');
          }catch(e){}
        `}} />
      </head>
      <body>
        <ThemeProvider>
          <ConsultationProvider>
            <Navbar />
            {children}
            <Footer />
            <ConsultationPopup />
          </ConsultationProvider>
        </ThemeProvider>

        <script dangerouslySetInnerHTML={{ __html: `
(function(){
  // Aggressive reveal: run now, on DOMContentLoaded, on every animation frame for first 3s
  function revealAll(){
    document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(function(el){
      var r = el.getBoundingClientRect();
      if(r.top < window.innerHeight + 200){
        el.classList.add('revealed');
      }
    });
  }

  // Run immediately
  revealAll();

  // Run on DOM ready
  document.addEventListener('DOMContentLoaded', revealAll);

  // Run on scroll
  window.addEventListener('scroll', revealAll, {passive:true});

  // Run every 100ms for first 3 seconds to catch React hydration
  var count = 0;
  var interval = setInterval(function(){
    revealAll();
    count++;
    if(count > 30) clearInterval(interval);
  }, 100);

  // Also use IntersectionObserver for lazy elements further down page
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('revealed'); }
      });
    }, { threshold: 0, rootMargin: '200px 0px 200px 0px' });

    function scanIO(){
      document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(function(el){
        io.observe(el);
      });
    }
    scanIO();
    new MutationObserver(scanIO).observe(document.body||document.documentElement, {childList:true,subtree:true});
  }
})();
        `}} />
      </body>
    </html>
  );
}
