import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";

const benefits: Record<string, string> = {
  "website-development": "Turn more website visitors into enquiries.",
  "ai-automation": "Automate replies, follow-ups, and routine tasks.",
  "content-video-production": "Show what makes your business different with video and social content.",
  "seo-growth": "Help nearby customers find your business in search.",
};

const benefitPoints: Record<string, string[]> = {
  "website-development": [
    "Get more enquiries through calls, WhatsApp, or quote requests",
    "Make a professional first impression",
    "Give customers an easy browsing experience on any device",
    "Make room to add new services and offers as you grow",
  ],
  "ai-automation": [
    "Respond to common customer questions faster",
    "Capture enquiries even outside business hours",
    "Follow up without relying on manual reminders",
    "Spend less time on repetitive admin tasks",
  ],
  "content-video-production": [
    "Show customers what makes your business different",
    "Explain your products or services in short videos",
    "Create content for social posts and ads",
    "Keep your brand consistent across channels",
  ],
  "seo-growth": [
    "Help nearby customers find you on Google and Maps",
    "Show up for searches related to your services",
    "Make your hours, location, and contact details easier to find",
    "Attract visitors already looking for what you offer",
  ],
};

export const ServicesSection = () => (
  <section id="services" aria-labelledby="services-heading" className="scroll-mt-28 bg-[#121110] py-12 md:py-16">
    <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
      <header className="mb-7 text-center md:mb-9">
        <h2 id="services-heading" className="font-display text-3xl font-bold tracking-tight text-[#F5F2EA] md:text-5xl">Our Services</h2>
        <p className="mt-3 text-balance font-sans text-base text-[#C7BEB1] md:text-lg">
          Websites, AI automation, SEO, and content to help your business grow.
        </p>
      </header>

      <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
        {servicesData.map((service) => {
          const Icon = service.icon;
          return (
            <li key={service.id}>
              <Link
                to={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-[#715638] bg-[#201D19] p-5 transition-colors hover:border-[#D4A43A] focus-visible:border-[#D4A43A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E7C46A] sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4A43A]/30 bg-[#D4A43A]/15 text-[#E7C46A]">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-lg font-semibold leading-snug text-[#F5F2EA] md:text-xl">{service.title}</h3>
                </div>
                <p className="mb-4 mt-3 font-sans text-sm leading-relaxed text-[#C7BEB1] md:text-base">
                  {benefits[service.slug] ?? service.summary}
                </p>
                <ul className="mb-5 list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed text-[#D9D1C5] marker:text-[#D4A43A] md:text-base">
                  {(benefitPoints[service.slug] ?? []).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#E7C46A]">
                  Explore Service
                  <ArrowRight size={16} aria-hidden="true" className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
