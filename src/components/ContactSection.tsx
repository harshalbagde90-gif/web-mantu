import { useInView } from "@/hooks/useInView";
import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { ref, isInView } = useInView();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    emailjs.init("Gbsxgx5a7dejoZsyf");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSending(true);
      await emailjs.send(
        "service_8z8wzsb",
        "template_h24tt3m",
        {
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          message: formData.message,
        }
      );
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out. We'll reply soon.",
      });
      setFormData({ name: "", email: "", contact: "", message: "" });
    } catch (err) {
      toast({
        title: "Failed to send",
        description: "Please try again or use WhatsApp.",
      });
    } finally {
      setSending(false);
    }
  };

  

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
          <p className="text-muted-foreground mb-8">
            Have a project in mind? I'd love to hear from you. Let's create
            something amazing together.
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/919518771543"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95"
              aria-label="WhatsApp Me"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <img 
                  src="/Logo/whatapp icon.png" 
                  alt="WhatsApp" 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <span className="text-lg font-medium text-[#25D366] opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Let's Connect on WhatsApp
              </span>
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`${isInView ? "opacity-100 animate-fade-up" : "opacity-0"}`}>
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
                <Input
                  type="tel"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
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
              <Button type="submit" size="lg" className="w-full glow glow-on-hover transform-gpu transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]" disabled={sending}>
                <Send size={18} className="mr-2" />
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
