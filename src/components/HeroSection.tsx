import { ArrowRight, ArrowUpRight, Globe2, MessageCircle, Search, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurText } from "@/components/ui/BlurText";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./HeroOrbit.css";

const orbitServices = [
  { label: "Web Design", Icon: Globe2, to: "/services/website-development" },
  { label: "Social Media", Icon: MessageCircle, to: "/services/content-video-production" },
  { label: "SEO", Icon: Search, to: "/services/seo-growth" },
  { label: "AI Automation", Icon: Workflow, to: "/services/ai-automation" },
];

function HeroOrbit() {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;
    const lights = Array.from(orbit.querySelectorAll(".wm-orbit__light"));
    const cards = Array.from(orbit.querySelectorAll(".wm-orbit__label"));
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let timer: number | undefined;
    let visible = false;
    const sample = () => {
      const points = lights.map((light) => {
        const { left, top, width, height } = light.getBoundingClientRect();
        return { x: left + width / 2, y: top + height / 2, inner: !!light.closest(".wm-orbit__path--inner") };
      });
      const glow = cards.map((card) => {
        const box = card.getBoundingClientRect();
        return points.some(({ x, y, inner }) => !(inner && card.classList.contains("wm-orbit__label--2")) && Math.hypot(
          Math.max(box.left - x, x - box.right, 0),
          Math.max(box.top - y, y - box.bottom, 0)
        ) <= 8);
      });
      cards.forEach((card, index) => card.classList.toggle("wm-orbit__label--lit", glow[index]));
    };
    const sync = () => {
      window.clearInterval(timer);
      if (visible && motion.matches) {
        sample();
        timer = window.setInterval(sample, 32);
      } else cards.forEach((card) => card.classList.remove("wm-orbit__label--lit"));
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(orbit);
    motion.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", sync);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="wm-orbit" ref={orbitRef}>
      {["wm-orbit__path", "wm-orbit__path wm-orbit__path--inner"].map((path) => (
        <div className={path} key={path} aria-hidden="true">
          <div className="wm-orbit__runner">
            <span className="wm-orbit__light" />
            <span className="wm-orbit__light wm-orbit__light--opposite" />
          </div>
        </div>
      ))}
      <div className="wm-orbit__emblem" aria-hidden="true">
        <div className="wm-orbit__crest">
          <img src="/Logo/WEBMANTU%20DIGITAL.png" alt="" draggable={false} />
          <img className="wm-orbit__crest-glow" src="/Logo/WEBMANTU%20DIGITAL.png" alt="" draggable={false} />
        </div>
      </div>
      {orbitServices.map(({ label, Icon, to }, index) => (
        <Link key={label} to={to} className={`wm-orbit__label wm-orbit__label--${index + 1}`}>
          <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
          <span>{label}</span>
          <ArrowUpRight className="wm-orbit__link-arrow" size={12} aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}

export const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0a09] pb-12 pt-32 md:pb-16 md:pt-36 lg:pb-20 lg:pt-40">
      <div className="relative mx-auto grid max-w-[90rem] items-center gap-9 px-6 md:px-12 lg:grid-cols-[1.1fr_1fr] lg:gap-9 lg:pr-24 xl:pl-16">
        <div className="mx-auto w-full max-w-2xl text-center lg:text-left">
          <h1 className="font-display text-[clamp(1.9rem,7vw,2.6rem)] leading-[1.09] tracking-tight sm:text-5xl lg:text-[clamp(2.65rem,4.4vw,4.65rem)]">
            <BlurText 
              text="We help businesses"
              textClassName="font-semibold text-[#F5F2EA]/95 inline-block" 
              delay={0.2} 
            />
            <br />
            <BlurText
              text="grow online."
              textClassName="font-extrabold bg-gradient-to-br from-[#D4A43A] via-[#FCEAA9] to-[#A67822] bg-clip-text text-transparent leading-[1.13] pb-1"
              delay={0.45}
            />
          </h1>

          <p
            className="mx-auto mt-5 mb-8 max-w-[36rem] text-pretty font-poppins text-base leading-[1.65] text-muted-foreground opacity-0 animate-fade-up sm:text-lg lg:mx-0"
            style={{ animationDelay: "1.2s" }}
          >
            We design and build websites, manage social media, and use modern SEO to help customers find you. We also use AI automation to help you save time, cut costs, and work more efficiently.
          </p>

          <div
            className="flex w-full flex-col items-stretch justify-center gap-3 opacity-0 animate-fade-up sm:w-auto sm:flex-row sm:items-center sm:gap-4 lg:justify-start"
            style={{ animationDelay: "1.3s" }}
          >
            <Button
              size="lg"
              className="glow-on-hover h-[52px] w-full rounded-xl bg-[#D4A43A] px-8 text-base font-sans font-semibold text-[#0B0B0C] transition-all duration-300 hover:scale-[1.02] hover:bg-[#E7C46A] sm:w-auto"
              asChild
            >
              <a href="#contact">Get Free Audit</a>
            </Button>

            <Link
              to="/blog"
              className="group inline-flex h-[52px] w-full items-center justify-center rounded-xl border border-[#D4A43A]/60 bg-[#16120E]/60 px-8 text-base font-semibold text-[#E7C46A] transition-all duration-300 hover:border-[#E7C46A]/90 hover:bg-[#1E1812] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E7C46A] active:scale-95 sm:w-auto"
            >
              <span className="font-sans transition-colors duration-300 group-hover:text-[#F5F2EA]">
                Read the Blog
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <HeroOrbit />
      </div>
    </section>
  );
};
