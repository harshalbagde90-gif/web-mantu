import { useInView } from "@/hooks/useInView";
import { Globe, Bot, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web applications built with React, Next.js, and Node.js. Scalable, performant, and beautifully designed solutions for your business.",
    features: ["React & Next.js", "Node.js Backend", "Database Design", "API Integration"],
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Harness the power of AI in your applications. From chatbots to intelligent automation, I integrate cutting-edge AI capabilities into your projects.",
    features: ["OpenAI & Claude", "Custom AI Agents", "Chatbots", "Automation"],
  },
  {
    icon: Palette,
    title: "Website Creation",
    description:
      "Stunning, responsive websites that convert visitors into customers. Modern design, fast loading, and optimized for all devices.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
  },
];

export const ServicesSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${
            isInView ? "opacity-100 animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What I Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Services That <span className="text-gradient">Transform</span> Ideas
          </h2>
          <p className="text-muted-foreground">
            From concept to deployment, I provide end-to-end solutions that help
            businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative ${
                isInView ? "opacity-100 animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="h-full p-8 rounded-2xl glass group-hover:glow transition-all duration-500 flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-primary-foreground" size={32} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn hover:text-primary"
                  asChild
                >
                  <a href="#contact">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};