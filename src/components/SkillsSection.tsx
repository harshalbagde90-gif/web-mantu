import { useInView } from "@/hooks/useInView";
import { Code, Server, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "from-blue-500 to-cyan-400",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-green-500 to-emerald-400",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "AI & Tools",
    icon: Brain,
    color: "from-purple-500 to-pink-400",
    skills: ["OpenAI API", "Claude API", "Gemini API", "Git/GitHub", "Vercel"],
  },
];

export const SkillsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${
            isInView ? "opacity-100 animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            My Skills
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit for building modern, scalable, and intelligent
            web applications from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative ${
                isInView ? "opacity-100 animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" />
              
              <div className="h-full p-8 rounded-2xl glass group-hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-6">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};