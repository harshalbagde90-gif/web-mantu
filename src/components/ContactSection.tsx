import { useInView } from "@/hooks/useInView";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { ref, isInView } = useInView();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "business.harshbagde@gmail.com",
      href: "mailto:business.harshbagde@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9309512837",
      href: "tel:+919309512837",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nagpur, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/harshWebDesigner",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/harsh-bagde-63ab47285",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:business.harshbagde@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${
            isInView ? "opacity-100 animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind? I'd love to hear from you. Let's create
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div
            className={`${
              isInView ? "opacity-100 animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl glass group hover:glow-sm transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`${
              isInView ? "opacity-100 animate-slide-in-right" : "opacity-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-14 bg-card/50 border-border/50 focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-14 bg-card/50 border-border/50 focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="bg-card/50 border-border/50 focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full glow">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};