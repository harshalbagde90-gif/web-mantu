import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustedLogosSection } from "@/components/TrustedLogosSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { ProductionShowcase } from "@/components/ProductionShowcase";
import { Link } from "react-router-dom";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  const homeSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "name": "WebMantu Digital",
    "url": "https://webmantu.com",
    "logo": "https://webmantu.com/favicon.png",
    "image": "https://webmantu.com/favicon.png",
    "description": "A premium digital growth and AI automation agency based in Nagpur, Maharashtra. We specialize in custom website development, local SEO, and AI business automation pipelines for salons, spas, real estate, and local businesses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Indora square",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440017",
      "addressCountry": "IN"
    },
    "telephone": "+917499147597",
    "email": "info@webmantu.com",
    "areaServed": ["Nagpur", "India", "Worldwide"],
    "knowsAbout": ["Custom Website Development", "AI Automation", "n8n Pipelines", "Generative Engine Optimization (GEO)", "Local SEO", "Web Design"],
    "priceRange": "$$"
  });

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808]">
      <SEO 
        title="Premium Web Design & AI Automation Agency in Nagpur" 
        description="WebMantu Digital helps businesses scale through custom websites, AI automation, and SEO/GEO services. Based in Nagpur, serving globally."
        schema={homeSchema}
      />
      <Navbar />
      <HeroSection />
      <TrustedLogosSection />
      <AboutSection />
      <ServicesSection />
      <TrustSection />
            <section id="projects" className="relative bg-[#0B0B0C] py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-16">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Our <span className="bg-gradient-to-r from-[#D4A43A] to-[#E7C46A] bg-clip-text text-transparent">Work</span></h2>
            <p className="font-sans text-sm leading-relaxed text-[#B9B1A4] md:text-lg">Explore the websites and digital solutions we build for our clients.</p>
          </div>
          <ProductionShowcase />
          <div className="mt-8 text-center">
            <Link to="/case-studies" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#D4A43A]/50 px-6 py-3 text-sm font-semibold text-[#E7C46A] transition-colors hover:bg-[#D4A43A]/10">Explore All Our Work</Link>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;




