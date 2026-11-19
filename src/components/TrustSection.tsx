import { Headset, MessageSquareText, MousePointerClick, Layers3 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import "./TrustSection.css";

const trustPoints = [
  {
    icon: Headset,
    title: "Ongoing Client Support",
    description: "We stay by your side after delivery, supporting your business as it grows.",
  },
  {
    icon: MousePointerClick,
    title: "Stronger Market Positioning",
    description: "We help customers find you, understand what you offer, and see why they should choose you over the competition.",
  },
  {
    icon: Layers3,
    title: "Services That Work Together",
    description: "We bring your website, SEO, content, and AI automation together to support your business goals.",
  },
  {
    icon: MessageSquareText,
    title: "Focused on Your Business Growth",
    description: "We believe in growing with you. We focus on work that helps your business keep growing, not just on getting the project delivered.",
  },
];

const steps = [
  { label: "Understand Your Business & Customer Needs", height: "h-[34%]" },
  { label: "Plan, Build & Implement", height: "h-[43%]" },
  { label: "Use Modern Techniques & AI as Needed", height: "h-[53%]" },
  { label: "Analysis & Continuous Improvement", height: "h-[65%]" },
];

export const TrustSection = () => {
  const { ref, isInView } = useInView(0.25);
  return (
  <section ref={ref} id="why-us" aria-labelledby="trust-heading" className="scroll-mt-28 bg-[#F7F4EE] py-12 text-[#201B16] md:py-20">
    <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
      <header className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
        <h2 id="trust-heading" className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Why Work with <span className="text-[#795B27]">WebMantu?</span>
        </h2>
      </header>
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10">
        <figure className="relative min-w-0 overflow-hidden rounded-3xl border border-[#493720] bg-[#191613] p-5 text-[#F5F2EA] sm:p-8 lg:p-9">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#49351D,transparent_66%)]" />
          <figcaption className="relative text-center font-display text-2xl font-semibold sm:text-3xl">Our Process</figcaption>
          <div aria-hidden="true" className={`relative mt-3 grid h-[clamp(9rem,23vw,15rem)] grid-cols-4 items-end gap-2 sm:gap-3 border-b border-[#E7C46A]/30 px-2 ${isInView ? "trust-steps-in-view" : ""}`}>
            <svg viewBox="0 0 400 240" preserveAspectRatio="none" className="trust-growth-arrow pointer-events-none absolute inset-0 h-full w-full" fill="none">
              <path d="M18 130 C61 139 82 139 111 112 S170 100 200 89 S242 58 274 53 S332 43 378 16 M345 20 L378 16 L366 47" stroke="#E7C46A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            </svg>
            {steps.map(({ label, height }, index) => (
              <div key={label} className={`${height} relative flex items-start justify-center rounded-t-lg border border-b-0 border-[#E7C46A]/30 bg-gradient-to-t from-[#3D2D1B] to-[#8A6533] pt-2 font-sans text-sm font-semibold text-[#FFF1CE]`}>
                0{index + 1}
              </div>
            ))}
          </div>
          <ol className="relative mt-5 grid gap-3">
            {steps.map(({ label }, index) => (
              <li key={label} className="flex gap-3 font-sans text-sm leading-snug">
                <span aria-hidden="true" className="text-[#E7C46A]">0{index + 1}</span>
                <strong>{label}</strong>
              </li>
            ))}
          </ol>
        </figure>
        <ul className="divide-y divide-[#DED5C5] overflow-hidden rounded-2xl border border-[#DED5C5] bg-white/70 px-5 sm:px-6">
          {trustPoints.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex items-start gap-4 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F2E8D4] text-[#795B27]" aria-hidden="true">
                <Icon size={19} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold leading-snug sm:text-lg">{title}</h3>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#62584D] sm:text-base">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
  );
};
