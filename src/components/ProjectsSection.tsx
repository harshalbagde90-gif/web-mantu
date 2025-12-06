import { useInView } from "@/hooks/useInView";
import { ExternalLink, Github, MessageSquare, ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Chat Application",
    description:
      "A sophisticated chat application powered by multiple AI models including GPT-4, Claude, and Gemini. Features real-time messaging and a modern UI.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Real-time messaging", "Multiple AI models", "Modern UI"],
    icon: MessageSquare,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with admin dashboard and payment integration. Complete product management and secure checkout.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["Product management", "Shopping cart", "Secure payments"],
    icon: ShoppingCart,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "Portfolio Generator",
    description:
      "AI-powered tool to generate professional portfolios automatically. Custom templates with AI content generation capabilities.",
    techStack: ["Next.js", "OpenAI API", "Tailwind CSS"],
    features: ["AI content generation", "Custom templates", "Responsive design"],
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-400",
  },
];

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
                {/* Project Image/Header */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center relative overflow-hidden`}
                >
                  <project.icon
                    className="text-white/90 group-hover:scale-110 transition-transform duration-500"
                    size={64}
                  />
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
                </div>

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

                  {/* Features */}
                  <ul className="space-y-1 mb-6">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1"
                      variant="outline"
                    >
                      <Github size={14} className="mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink size={14} className="mr-2" />
                      Demo
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