import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustedLogosSection } from "@/components/TrustedLogosSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { showcaseProjects, stories } from "@/components/ProductionShowcase";
import { demoProjects } from "@/components/ProjectsSection";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  const homeSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebMantu Digital",
    "url": "https://webmantu.com",
    "logo": "https://webmantu.com/favicon.png",
    "image": "https://webmantu.com/favicon.png",
    "description": "A premium digital growth and AI automation agency based in Nagpur, Maharashtra. We specialize in custom website development, local SEO, and AI business automation pipelines for salons, spas, real estate, and local businesses.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "telephone": "+919518771543",
    "email": "info@webmantu.com",
    "areaServed": ["Nagpur", "India", "Worldwide"],
    "knowsAbout": ["Custom Website Development", "AI Automation", "n8n Pipelines", "Generative Engine Optimization (GEO)", "Local SEO", "Web Design"],
    "priceRange": "$$"
  });

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808]">
      <SEO 
        title="Web Design, SEO & AI Automation in Nagpur"
        description="WebMantu Digital helps businesses scale through custom websites, AI automation, and SEO/GEO services. Based in Nagpur, serving globally."
        schema={homeSchema}
      />
      <Navbar />
      <HeroSection />
      <section id="projects" aria-labelledby="home-work-heading" className="scroll-mt-28 border-y border-[#DED5C5] bg-[#F7F4EE] pb-14 pt-9 text-[#201B16] md:pb-24 md:pt-14">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="mb-8 text-center md:mb-12">
            <h2 id="home-work-heading" className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Our Work</h2>
            <span aria-hidden="true" className="mx-auto mt-4 block h-0.5 w-12 rounded-full bg-[#A27B40]" />
            <p className="mx-auto mt-3 max-w-5xl text-balance font-sans text-lg leading-relaxed text-[#62584D] md:text-xl">Explore the live websites and platforms we built for our clients.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {stories.map((story, index) => (
              <Link key={story.slug} to={`/case-studies?project=${story.slug}`} className="group flex min-w-0 flex-col rounded-2xl border border-[#E3DBCE] bg-white p-3 shadow-[0_8px_28px_-18px_rgba(48,32,12,0.35)] hover:border-[#AF945E] hover:shadow-[0_16px_34px_-18px_rgba(48,32,12,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#795B27] motion-safe:transition-[transform,box-shadow,border-color] motion-safe:duration-300 motion-safe:hover:-translate-y-1">
                <div className="overflow-hidden rounded-xl border border-[#342A20] bg-[#201A15]">
                  <div aria-hidden="true" className="flex h-6 items-center gap-1.5 border-b border-white/10 bg-[#2B231C] px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#BD985D]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#806B51]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#635344]" />
                  </div>
                  <img src={showcaseProjects[index].images[0]} alt={`${story.name} website preview`} loading="lazy" decoding="async" className="block aspect-[2/1] w-full object-contain" />
                </div>
                <div className="flex flex-1 flex-col px-3 pb-3 pt-5 sm:px-4">
                  <p className="font-sans text-xs font-semibold tracking-wide text-[#795B27]">{story.category}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{story.name}</h3>
                  <p className="mb-5 mt-2 font-sans text-sm leading-relaxed text-[#62584D]">{story.headline}</p>
                  <span className="mt-auto flex items-center justify-between gap-2 border-t border-[#EEE7DC] pt-3 text-sm font-semibold text-[#583E18]">View case study <ArrowUpRight size={17} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>

          <section aria-labelledby="home-blueprints-heading" className="mt-10 border-t border-[#DED5C5] pt-8 md:mt-12 md:pt-10">
            <div className="mb-8 text-center">
              <h3 id="home-blueprints-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Concept Blueprints</h3>
              <p className="mx-auto mt-3 max-w-5xl text-balance font-sans text-lg leading-relaxed text-[#62584D] md:text-xl">Demo websites and prototypes. We can build something similar for your business.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {demoProjects.map((project) => (
                <a key={project.link} href={project.link} target="_blank" rel="noopener noreferrer" className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#DFD7CA] bg-white transition-colors hover:border-[#92713B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#795B27]">
                  <div className="overflow-hidden border-b border-[#E7DED0] bg-[#221C16]">
                    <img src={project.images[0]} alt="" loading="lazy" decoding="async" className="aspect-video w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#795B27]">Demo project</p>
                    <h4 className="mb-4 mt-2 font-display text-base font-semibold leading-snug">{project.title}</h4>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#583E18]">View demo <span className="sr-only">(opens in a new tab)</span><ArrowUpRight size={16} aria-hidden="true" /></span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>
      <TrustedLogosSection />
      <ServicesSection />
      <TrustSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;




