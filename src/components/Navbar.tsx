import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-hover"));
    const circles = new Map<HTMLAnchorElement, HTMLDivElement>();
    const handlers = new Map<HTMLAnchorElement, { enter: (e: MouseEvent) => void; leave: (e: MouseEvent) => void; move: (e: MouseEvent) => void }>();

    const onEnter = (el: HTMLAnchorElement) => {
      let circle = circles.get(el);
      if (!circle) {
        circle = document.createElement("div");
        circle.className = "nav-hover-circle";
        el.appendChild(circle);
        circles.set(el, circle);
      }
      gsap.killTweensOf(circle);
      gsap.to(circle, { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" });
    };

    const onLeave = (el: HTMLAnchorElement) => {
      const circle = circles.get(el);
      if (!circle) return;
      gsap.to(circle, { opacity: 0, scale: 0.85, duration: 0.2, ease: "power2.out" });
    };

    const onMove = (el: HTMLAnchorElement, e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const circle = circles.get(el);
      if (!circle) return;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
    };

    links.forEach((el) => {
      const enter = (e: MouseEvent) => { onEnter(el); };
      const leave = (e: MouseEvent) => { onLeave(el); };
      const move = (e: MouseEvent) => { onMove(el, e); };
      handlers.set(el, { enter, leave, move });
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      el.addEventListener("mousemove", move);
    });

    return () => {
      links.forEach((el) => {
        const h = handlers.get(el);
        if (h) {
          el.removeEventListener("mouseenter", h.enter);
          el.removeEventListener("mouseleave", h.leave);
          el.removeEventListener("mousemove", h.move);
        }
        const circle = circles.get(el);
        if (circle) {
          gsap.killTweensOf(circle);
          circle.remove();
          circles.delete(el);
        }
      });
      handlers.clear();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="font-display text-2xl font-bold text-gradient nav-hover relative overflow-hidden"
          >
            Harsh.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium nav-hover relative overflow-hidden"
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="glow-sm">
              <a href="#contact" className="nav-hover relative overflow-hidden">Let's Talk</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="w-fit">
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
          </div>
        )}
      </div>
      <style>{`.nav-hover-circle{position:absolute;width:160px;height:160px;border-radius:9999px;background:radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.12) 35%, transparent 60%);left:50%;top:50%;transform:translate(-50%,-50%);opacity:0;pointer-events:none;}`}</style>
    </nav>
  );
};
