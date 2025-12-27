import { useInView } from "@/hooks/useInView";
import { ExternalLink, Github, MessageSquare, ShoppingCart, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "NexusAI Automation & Workflow Solutions",
    description:
      "An AI-powered automation platform designed to streamline business workflows, reduce manual effort, and improve operational efficiency through intelligent automation.",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    tags: ["Workflow Automation", "AI-Powered", "Process Optimization", "Cost Reduction", "Scalable Systems"],
    link: "https://nexus-ai-automation.netlify.app/",
    images: [
      "/Images/Project images/AI-AUTO/1.webp",
      "/Images/Project images/AI-AUTO/2.webp",
      "/Images/Project images/AI-AUTO/3.webp",
      "/Images/Project images/AI-AUTO/4.webp",
      "/Images/Project images/AI-AUTO/5.webp",
      "/Images/Project images/AI-AUTO/6.webp",
      "/Images/Project images/AI-AUTO/7.webp",
    ],
    autoStart: true,
    intervalMs: 5000,
  },
  {
    title: "Chatter AI for All – Intelligent Chatbot Platform",
    description:
      "Chatter AI for All is an AI-powered chatbot platform built to help businesses and individuals automate conversations, customer support, and lead generation using self-learning artificial intelligence.",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    tags: ["AI Chatbot", "Customer Support", "Automation", "Lead Generation", "Multilingual AI", "Business Automation"],
    link: "https://chatter-ai-for-all.netlify.app/",
    images: [
      "/Images/Project images/Chatter AI/1.webp",
      "/Images/Project images/Chatter AI/2.webp",
      "/Images/Project images/Chatter AI/3.webp",
      "/Images/Project images/Chatter AI/4.webp",
      "/Images/Project images/Chatter AI/5.webp",
      "/Images/Project images/Chatter AI/6.webp",
    ],
    autoStart: true,
    intervalMs: 5000,
  },
  {
    title: "Burn Fat Faster – Smart Weight Loss & Fat Burning Platform",
    description:
      "Burn Fat Faster is a health-focused web application designed to educate users on effective and sustainable fat loss strategies through exercise, nutrition, and lifestyle optimization.",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    tags: ["Weight Loss", "Fat Burning", "Healthy Lifestyle", "Fitness Guidance", "Sustainable Results"],
    link: "https://burn-fat-faster.netlify.app/",
    images: [
      "/Images/Project images/Fat Burner/1.webp",
      "/Images/Project images/Fat Burner/2.webp",
      "/Images/Project images/Fat Burner/3.webp",
      "/Images/Project images/Fat Burner/4.webp",
    ],
    autoStart: true,
    intervalMs: 5000,
  },
  {
    title: "Quantum Trade – AI-Powered Trading Platform (Demo Project)",
    description:
      "Quantum Trade is a demo AI-powered trading platform designed to showcase automated trading concepts using AI-driven market analysis and real-time data processing.",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    tags: ["AI Trading", "Automated Bots", "Market Analysis", "Trading Technology", "FinTech"],
    link: "https://quantam-trade.netlify.app/",
    images: [
      "/Images/Project images/Quantum Trade/1.webp",
      "/Images/Project images/Quantum Trade/2.webp",
      "/Images/Project images/Quantum Trade/3.webp",
      "/Images/Project images/Quantum Trade/4.webp",
      "/Images/Project images/Quantum Trade/5.webp",
    ],
    autoStart: true,
    intervalMs: 5000,
  },
];

const ImageCarousel = ({
  images,
  autoStart = false,
  intervalMs = 5000,
}: {
  images: string[];
  autoStart?: boolean;
  intervalMs?: number;
}) => {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(false);
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [auto, images.length, intervalMs]);
  useEffect(() => {
    if (autoStart) setAuto(true);
  }, [autoStart]);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setAuto(true)}
      onClick={() => setAuto(true)}
    >
      <div className="w-full aspect-[4/3] bg-black/20">
        <img
          src={images[index]}
          alt=""
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full glass md:hidden"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Prev"
      >
        <ChevronLeft className="text-white" size={18} />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full glass md:hidden"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next"
      >
        <ChevronRight className="text-white" size={18} />
      </button>
    </div>
  );
};

export const ProjectsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${
            isInView ? "opacity-100 animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A showcase of my recent work, demonstrating expertise in web development
            and AI integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative ${
                isInView ? "opacity-100 animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="h-full rounded-2xl glass overflow-hidden group-hover:glow transition-all duration-500">
                {project.images ? (
                  <ImageCarousel
                    images={project.images}
                    autoStart={(project as any).autoStart}
                    intervalMs={(project as any).intervalMs}
                  />
                ) : (
                  <div
                    className={`h-48 bg-gradient-to-br from-purple-500 to-pink-500 p-6 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="w-16 h-16 flex items-center justify-center">
                      <Sparkles size={64} className="text-white/90 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                      className="text-white/90 group-hover:scale-110 transition-transform duration-500"
                      size={64}
                    <Sparkles
                      className="text-white/90 group-hover:scale-110 transition-transform duration-500"
                      size={64}
                    />
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {Array.isArray((project as any).tags) && (project as any).tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project as any).tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/80 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  {Array.isArray((project as any).features) && (project as any).features.length > 0 && (
                    <ul className="space-y-1 mb-6">
                      {(project as any).features.map((feature: string) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1" variant="outline" asChild>
                      <a href="#contact">
                        <MessageSquare size={14} className="mr-2" />
                        Talk
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]" asChild>
                      <a
                        href={(project as any).link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} className="mr-2" />
                        Visit
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
