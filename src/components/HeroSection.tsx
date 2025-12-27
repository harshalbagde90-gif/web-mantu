import { ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagicSpotlight } from "@/components/MagicBento";
import DotGrid from "@/components/DotGrid";
import { useRef } from "react";
import { BlurText } from "@/components/ui/BlurText";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      {/* Dot Grid Background */}
      <DotGrid
        className="absolute inset-0 pointer-events-none z-0"
        dotSize={10}
        gap={15}
        baseColor="#5227FF"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      {/* Dark Gradient Overlay (above dots, below glow/text) */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={heroRef}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass bg-card/70 backdrop-blur-md ring-1 ring-white/10 hover:ring-white/20 transition-all mb-6 hero-badge">
              <Bot className="w-5 h-5 text-[#4ade80] animate-pulse" />
              <span className="text-base md:text-lg font-poppins font-bold tracking-wide animate-gradient-text bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#4ade80]">
                Available for Freelance Projects
              </span>
            </div>
          </div>

          <h1
            className="font-display text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <BlurText text="Building" delay={0.2} />{" "}
            <BlurText text="Intelligent" textClassName="text-gradient" delay={0.4} />
            <br className="hidden md:block" />
            <BlurText text="Web Experiences with" delay={0.6} />{" "}
            <br className="hidden md:block" />
            <BlurText text="AI & Modern Frameworks" textClassName="text-gradient" delay={0.9} />
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up font-sans font-normal"
            style={{ animationDelay: "1.2s" }}
          >
            AI-Powered Web Developer with 3+ Years of Experience — Crafting Intelligent Websites, Web Apps, UI/UX, and Seamless AI Integrations.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "1.3s" }}
          >
            <Button size="lg" className="glow-on-hover text-base font-sans font-semibold transition-all duration-300 hover:scale-105 hover:text-white" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            
            <a
              href="#contact"
              className="group relative inline-flex h-11 items-center rounded-full border border-white/10 bg-white/5 pl-6 pr-14 transition-all duration-300 hover:bg-white/10 active:scale-95"
            >
              <span className="relative z-10 font-sans font-semibold text-foreground transition-colors duration-300 group-hover:text-black">
                Get in Touch
              </span>
              <div className="absolute right-1.5 top-1.5 bottom-1.5 w-8 rounded-full bg-white transition-all duration-300 group-hover:w-[calc(100%-12px)] group-active:scale-95">
                <div className="absolute right-0 top-0 bottom-0 flex w-8 items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </a>
          </div>
        </div>

        <MagicSpotlight gridRef={heroRef} spotlightRadius={400} glowColor="132, 0, 255" />
      </div>
    </section>
  );
};
