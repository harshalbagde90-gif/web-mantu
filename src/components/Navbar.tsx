import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, KeyRound, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavbarBrand.css";

const brandLogo = "/Logo/WEBMANTU DIGITAL.png";

export const navLinks = [
  { name: "About Us", href: "/about-us" },
  { 
    name: "Services", 
    href: "/#services",
    dropdown: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "AI Automation", href: "/services/ai-automation" },
      { name: "Content & Video Production", href: "/services/content-video-production" },
      { name: "SEO & Growth", href: "/services/seo-growth" }
    ]
  },
  { name: "Our Work", href: "/case-studies" },
  { name: "Media Hub", href: "/media-hub" },
  { name: "Code Center", href: "/code" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Support", href: "/support" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRatiosRef = useRef<Record<string, number>>({});
  const mobileMenuRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const dialog = mobileMenuRef.current;
    if (!isOpen || !dialog) return;
    dialog.showModal();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeAtDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener("change", closeAtDesktop);
    return () => {
      desktop.removeEventListener("change", closeAtDesktop);
      dialog.close();
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetHref = href.startsWith("#") ? `/${href}` : href;
    e.preventDefault();
    setIsOpen(false);

    if (targetHref.startsWith("/#")) {
      const id = targetHref.slice(2);
      if (location.pathname !== "/") {
        navigate(targetHref);
        return;
      }
      setActiveSection(id);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", targetHref);
      } else {
        window.location.hash = `#${id}`;
      }
    } else {
      navigate(targetHref);
    }
  };

  const isLinkActive = (href: string) => {
    if (href === "/#services" && location.pathname.startsWith("/services/")) {
      return true;
    }
    
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      return location.pathname === "/" && activeSection === id;
    }
    if (href === "/") return location.pathname === "/";
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || window.pageYOffset;
      const height = doc.scrollHeight - doc.clientHeight;
      const p = height > 0 ? (scrollTop / height) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks
      .filter((link) => link.href.startsWith("/#"))
      .map((link) => link.href.slice(2));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          sectionRatiosRef.current[id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });

        const best = Object.entries(sectionRatiosRef.current)
          .sort((a, b) => b[1] - a[1])[0];
        if (best && best[1] > 0) setActiveSection(best[0]);
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "0px 0px -50% 0px",
      }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.startsWith("#") ? hash.slice(1) : "";
    if (id) setActiveSection(id);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,padding,box-shadow] duration-300 motion-reduce:transition-none ${scrolled ? "border-[#383029] bg-[#171513] py-2 shadow-lg" : "border-transparent bg-transparent py-6"
        }`}
    >
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#7A3E2C] via-[#D4A43A] to-[#E7C46A] transition-[width] duration-200"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="navbar-brand" data-compact={scrolled}>
            <a className="navbar-brand__home" href="/" aria-label="WebMantu Digital home">
              <img className="navbar-brand__mark" src={brandLogo} alt="" draggable={false} />
              <img className="navbar-brand__wordmark" src={brandLogo} alt="" draggable={false} />
            </a>
          </div>

          <div className="hidden xl:flex items-center gap-1 2xl:gap-4">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  aria-current={active ? (link.href.startsWith("/#") ? "location" : "page") : undefined}
                  className={`group/navlink relative border px-3 py-1.5 rounded-full text-sm font-poppins font-semibold transition-colors flex items-center justify-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7C46A] ${active ? "border-[#4A3821] bg-[#2A2116] text-[#E7C46A]" : "border-transparent text-[#B9B1A4] hover:text-[#F5F2EA]"}`}
                >
                  <span className="relative z-10 whitespace-nowrap">{link.name}</span>
                  {link.dropdown && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 motion-safe:group-hover:rotate-180 motion-safe:transition-transform duration-300 opacity-70"><path d="m6 9 6 6 6-6"/></svg>
                  )}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[3px] left-1/2 h-0.5 w-8 -translate-x-1/2 scale-x-0 rounded-full bg-[#E7C46A] opacity-0 group-hover/navlink:scale-x-100 group-hover/navlink:opacity-100 motion-safe:transition-[transform,opacity] motion-safe:duration-200 motion-safe:ease-out"
                  />
                </a>
                
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <div className="w-64 rounded-2xl border border-[#2A221A] bg-[#0F0C09]/95 p-2 shadow-[0_10px_40px_-10px_rgba(212,164,58,0.22)] backdrop-blur-md flex flex-col gap-1">
                      {link.dropdown.map(item => (
                        <a 
                          key={item.name} 
                          href={item.href}
                          onClick={(e) => {
                             e.preventDefault();
                             navigate(item.href);
                          }}
                          className="px-4 py-3 rounded-xl text-sm font-poppins font-semibold text-[#D0C6B7] hover:text-[#E7C46A] hover:bg-[#1E1812] transition-all flex items-center justify-between group/item"
                        >
                          {item.name}
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )})}
            <span className="gradient-shadow">
              <Button
                className="relative z-10 rounded-full border border-[#2A221A] bg-[#D4A43A] px-5 py-2 font-poppins font-bold text-[#0B0B0C] transition-all hover:bg-[#E7C46A]"
                asChild
              >
                <a href="/#contact" onClick={handleNavClick("/#contact")}>Let's Talk</a>
              </Button>
            </span>
          </div>

          <div className="xl:hidden flex shrink-0 items-center gap-2 sm:gap-4">
            <a
              href="/code"
              onClick={handleNavClick("/code")}
              aria-current={isLinkActive("/code") ? "page" : undefined}
              className="inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#D4A43A]/35 bg-[#16120E] px-2.5 text-xs font-poppins font-semibold text-[#E7C46A] hover:bg-[#252015] focus-visible:outline focus-visible:outline-[#E7C46A] sm:px-4 sm:text-sm"
            >
              <KeyRound size={15} aria-hidden="true" />
              Code Center
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2A221A] bg-[#16120E]/80 text-[#E7C46A] transition-colors hover:bg-[#1E1812] focus-visible:outline focus-visible:outline-[#E7C46A]"
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-haspopup="dialog"
            >
              <Menu size={23} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {createPortal(
        <dialog
          ref={mobileMenuRef}
          id="mobile-navigation"
          aria-labelledby="mobile-navigation-title"
          onCancel={(event) => { event.preventDefault(); setIsOpen(false); }}
          onClick={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}
          className="fixed inset-y-0 left-auto right-0 m-0 h-[100dvh] max-h-none w-full max-w-[26rem] overflow-hidden border-l border-[#4A3821] bg-[#16120E] p-0 text-[#F5F2EA] shadow-2xl backdrop:bg-black/65 sm:right-0"
        >
          <div className="flex h-full flex-col">
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[#3B2D1E] px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#E7C46A]">WebMantu Digital</p>
                <h2 id="mobile-navigation-title" className="mt-1 font-poppins text-xl font-bold">Menu</h2>
              </div>
              <button type="button" autoFocus onClick={() => setIsOpen(false)} aria-label="Close navigation menu" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#594226] bg-[#241B11] text-[#E7C46A] hover:bg-[#352818] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E7C46A]">
                <X size={23} aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile links" className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <a key={link.name} href={link.href} onClick={handleNavClick(link.href)}
                    aria-current={active ? (link.href.startsWith("/#") ? "location" : "page") : undefined}
                    className={`flex min-h-12 items-center justify-between gap-3 rounded-lg border-b border-[#35291D] px-3 py-2 font-poppins text-sm font-semibold focus-visible:outline focus-visible:outline-[#E7C46A] ${active ? "bg-[#2A2116] text-[#E7C46A]" : "text-[#E5DCCF] hover:bg-[#241B11]"}`}>
                    {link.name}
                    <ArrowUpRight size={15} className="text-[#C79B52]" aria-hidden="true" />
                  </a>
                );
              })}
            </nav>
            <div className="shrink-0 border-t border-[#3B2D1E] p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <Button className="h-12 w-full rounded-xl bg-[#D4A43A] font-poppins font-bold text-[#0B0B0C] hover:bg-[#E7C46A]" asChild>
                <a href="/#contact" onClick={handleNavClick("/#contact")}>Let's Talk</a>
              </Button>
            </div>
          </div>
        </dialog>,
        document.body
      )}
    </nav>
  );
};

