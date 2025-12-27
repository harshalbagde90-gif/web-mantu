const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="inline-flex items-center transition-transform duration-300 ease-out hover:scale-[1.05] active:scale-[0.98]">
            <img
              src="/Logo/main logo.png"
              alt="Harsh A. Bagde"
              className="h-10 md:h-12 w-auto object-contain select-none"
              draggable={false}
            />
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Harsh .A. Bagde
          </p>
          <p className="text-muted-foreground text-sm">
        💻Web Developer & AI Automation Specialist.
          </p>
        </div>
      </div>
    </footer>
  );
};