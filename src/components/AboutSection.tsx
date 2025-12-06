import { useInView } from "@/hooks/useInView";
import { Code2, Sparkles, Zap } from "lucide-react";

export const AboutSection = () => {
  const { ref, isInView } = useInView();

  const stats = [
    { number: "20+", label: "Websites Built" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "3+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Visual */}
          <div
            className={`relative ${
              isInView ? "opacity-100 animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 rounded-3xl glass glow rotate-6" />
              <div className="absolute inset-0 rounded-3xl glass -rotate-3" />
              
              {/* Main Card */}
              <div className="relative rounded-3xl glass p-8 h-full flex flex-col justify-center items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple-500 mb-6 flex items-center justify-center text-5xl font-display font-bold text-primary-foreground">
                  H
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Harsh A. Bagde</h3>
                <p className="text-primary font-medium">AI-Powered Web Developer</p>
                <p className="text-muted-foreground text-sm mt-1">📍 Nagpur, India</p>

                {/* Floating Icons */}
                <div className="absolute top-8 right-8 p-3 rounded-xl glass animate-float">
                  <Code2 className="text-primary" size={24} />
                </div>
                <div className="absolute bottom-8 left-8 p-3 rounded-xl glass animate-float" style={{ animationDelay: "1s" }}>
                  <Sparkles className="text-purple-400" size={24} />
                </div>
                <div className="absolute top-1/2 left-4 p-3 rounded-xl glass animate-float" style={{ animationDelay: "0.5s" }}>
                  <Zap className="text-yellow-400" size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`${
              isInView ? "opacity-100 animate-slide-in-right" : "opacity-0"
            }`}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
              Passionate About Creating
              <span className="text-gradient"> AI-Powered</span> Solutions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate developer specializing in creating AI-powered web applications.
              With expertise in modern web technologies and a keen interest in artificial
              intelligence, I build innovative solutions that push the boundaries of what's
              possible on the web.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My journey combines deep technical knowledge with creative problem-solving,
              allowing me to deliver exceptional digital experiences that help businesses
              grow and succeed in the modern landscape.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl glass"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="font-display text-3xl font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};