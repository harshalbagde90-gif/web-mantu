import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagicSpotlight } from "@/components/MagicBento";
import DotGrid from "@/components/DotGrid";
import { useRef } from "react";

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
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-6">
              ✨ Available for Freelance Projects
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Building{" "}
            <span className="text-gradient">Intelligent</span>
            <br />
            Web Experiences with
            <br />
            <span className="text-gradient">AI & Modern Frameworks</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            I'm Harsh A. Bagde, an AI-Powered Web Developer from Nagpur, India.
            I create innovative web solutions that push the boundaries of what's possible.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="glow text-base" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div
            className="flex items-center justify-center gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://github.com/harshWebDesigner"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/harsh-bagde-63ab47285"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:business.harshbagde@gmail.com"
              className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs">Scroll Down</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
        <MagicSpotlight gridRef={heroRef} spotlightRadius={400} glowColor="132, 0, 255" />
      </div>
    </section>
  );
};
