import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight, Monitor, Video, Share2, MapPin, Images, Link2, Mail, FileText, Languages, CreditCard, CalendarClock } from "lucide-react";
import { liveProjects } from "@/components/ProjectsSection";

const stories = [
  {
    name: "ORA Spa & Wellness", category: "LOCAL BUSINESS · NAGPUR", headline: "A premium wellness experience, brought online.",
    business: "A spa and wellness centre in Ganeshpeth, Nagpur, offering relaxation and wellness therapies in a calm, premium setting.",
    goal: "Present the spa’s in-person experience online, make its therapies easy to explore, and give visitors a clear path to enquire.",
    solution: "We brought the website, video shoots and editing, social media account setup and Google Business Profile together into a consistent digital presence.",
    delivered: ["Website design & development", "Video shoots & editing", "Social media account setup", "Google Business Profile optimization"],
    caption: "A closer look at the space, services and website.",
  },
  {
    name: "MyVaidyam", category: "MEDICAL TOURISM · AYURVEDA & WELLNESS", headline: "A large-scale gateway to Ayurveda and wellness in India.",
    business: "A medical tourism platform helping international visitors explore Ayurvedic centres, wellness retreats, treatments and programmes across India.",
    goal: "Bring a large catalogue of centres and treatment information into one navigable website, helping visitors discover options and reach out for guidance.",
    solution: "WebMantu designed and developed the complete website, building dedicated centre pages with imagery and structured information, alongside treatment discovery, directory filters and consultation enquiry paths.",
    delivered: ["Complete website development", "Centre pages & image galleries", "Internal page linking & SEO", "Enquiry forms & email integration"],
    caption: "Homepage, centre directory and a dedicated centre profile—captured from the live website.",
  },
  {
    name: "NumGuru", category: "NUMEROLOGY · MULTILINGUAL PLATFORM", headline: "A complete numerology report, personalized to you.",
    business: "A Pythagorean numerology platform where users enter their name and date of birth to receive a full personalized report with life guidance, special numbers, colours and suggested remedies.",
    goal: "Build a self-service system that turns a name and date of birth into a detailed report, making numerology-based guidance, numbers, colours and suggested remedies easy to explore.",
    solution: "We built a complete Pythagorean numerology reporting experience with multilingual access, an integrated payment and settlement system, and blog automation scheduled to publish two posts each week.",
    delivered: ["Name & birth-date report generation", "Multilingual platform", "Payment integration & settlement setup", "Blog automation · 2 posts per week"],
    caption: "Explore the platform’s interface and personalized reading experience.",
  },
];

const deliveryIcons = [[Monitor, Video, Share2, MapPin], [Monitor, Images, Link2, Mail], [FileText, Languages, CreditCard, CalendarClock]];

const showcaseProjects = [
  liveProjects[0],
  {
    title: "MyVaidyam", link: "https://myvaidyam.com/",
    images: ["/Images/MyVaidyam/homepage.png", "/Images/MyVaidyam/centres.png", "/Images/MyVaidyam/centre-profile.png"],
  },
  liveProjects[1],
];

export function ProductionShowcase() {
  const [active, setActive] = useState(0);
  const [image, setImage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const project = showcaseProjects[active];
  const story = stories[active];
  const move = (direction: number) => {
    setActive((value) => (value + direction + stories.length) % stories.length);
    setImage(0);
  };

  return (
    <div className="mx-auto max-w-6xl">
<article aria-label={`${story.name} project showcase`} className="overflow-hidden rounded-3xl border border-[#D4A43A]/25 bg-[#0F0C09]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2A221A] px-4 py-3 md:px-10 md:py-4">
          <span className="text-xs font-semibold tracking-[0.16em] text-[#D4A43A]">FEATURED PROJECT</span>
          <span className="flex items-center gap-2 text-xs text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Live website</span>
        </div>
        <div className="grid gap-4 p-4 md:gap-8 md:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <div>
            <p className="mb-4 hidden text-xs font-medium md:block tracking-[0.12em] text-[#B9B1A4]">{story.category}</p>
            <div className="flex items-center justify-between gap-2 md:block">
<button type="button" onClick={() => move(-1)} aria-label="Previous project" className="h-11 w-10 shrink-0 rounded-lg border border-[#D4A43A]/30 text-[#E7C46A] md:hidden"><ChevronLeft className="mx-auto" size={20} /></button>
<h3 aria-live="polite" className="text-center font-display text-xl font-bold text-[#F5F2EA] md:text-left md:text-4xl">{story.name}</h3>
<button type="button" onClick={() => move(1)} aria-label="Next project" className="h-11 w-10 shrink-0 rounded-lg border border-[#D4A43A]/30 text-[#E7C46A] md:hidden"><ChevronRight className="mx-auto" size={20} /></button>
</div>
            <p className="mt-2 text-sm leading-relaxed md:mt-4 md:text-lg text-[#E7C46A]">{story.headline}</p>
            <div className="mt-4 rounded-xl border border-[#D4A43A]/30 bg-[#D4A43A]/5 p-4 md:hidden">
<p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#E7C46A]">About this project</p>
<p className="text-sm leading-6 text-[#D0C6B7]">{story.business}</p>
<details key={active} className="mt-3 border-t border-[#D4A43A]/20 pt-3">
<summary className="cursor-pointer text-sm font-semibold text-[#E7C46A]">Read full project story</summary>
<div className="space-y-4 pt-4">{[['Project goal', story.goal], ['Our solution', story.solution]].map(([label, body]) => <section key={label}><h4 className="mb-1 text-sm font-semibold text-[#F5F2EA]">{label}</h4><p className="text-sm leading-6 text-[#B9B1A4]">{body}</p></section>)}</div>
</details>
</div>
<div className="mt-8 hidden space-y-6 md:block">
              {[['Client & business', story.business], ['Project goal', story.goal], ['Our solution', story.solution]].map(([label, body]) => (
                <section key={label}>
                  <h4 className="mb-2 text-sm font-semibold text-[#F5F2EA]">{label}</h4>
                  <p className="text-sm leading-7 text-[#B9B1A4]">{body}</p>
                </section>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <figure onTouchStart={(event) => setTouchStart(event.changedTouches[0].clientX)} onTouchEnd={(event) => { if (touchStart !== null) { const delta = touchStart - event.changedTouches[0].clientX; if (Math.abs(delta) > 45) setImage((value) => (value + (delta > 0 ? 1 : -1) + project.images.length) % project.images.length); } setTouchStart(null); }}>
              <div className="overflow-hidden rounded-xl border border-[#2A221A] bg-[#16120E]">
                <div className="flex items-center gap-1.5 border-b border-[#2A221A] px-4 py-3" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-[#D4A43A]/60" /><span className="h-2 w-2 rounded-full bg-[#D4A43A]/30" /><span className="h-2 w-2 rounded-full bg-[#D4A43A]/15" />
                  <span className="ml-3 truncate text-xs text-[#B9B1A4]">{new URL(project.link).hostname}</span>
                </div>
                <img src={project.images[image]} alt={`${story.name} website screenshot ${image + 1}`} className="aspect-[16/10] w-full object-contain" />
              </div>
              <figcaption className="mt-3 hidden text-xs leading-5 md:block text-[#B9B1A4]">{story.caption}</figcaption>
            </figure>
            <div className="mt-2 flex gap-2 md:mt-4 overflow-x-auto pb-2" aria-label="Project screenshots">
              {project.images.map((src, index) => (
                <button key={src} type="button" aria-label={`View ${story.name} screenshot ${index + 1}`} aria-pressed={image === index} onClick={() => setImage(index)} className={`w-12 md:w-16 shrink-0 overflow-hidden rounded-md border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E7C46A] ${image === index ? 'border-[#D4A43A]' : 'border-transparent hover:border-[#D4A43A]/40'}`}>
                  <img src={src} alt="" loading="lazy" className="aspect-video w-full object-cover" />
                </button>
              ))}
            </div>

          </div>
        </div>
        <section aria-label="What we delivered" className="relative border-t border-[#D4A43A]/25 bg-gradient-to-br from-[#D4A43A]/10 via-[#16120E] to-[#0F0C09] px-4 py-4 md:px-10 md:py-6">
          <div className="mb-3 flex flex-wrap md:mb-4 items-end justify-between gap-3">
            <div>
              <p className="mb-2 hidden text-[10px] md:block font-semibold uppercase tracking-[0.2em] text-[#D4A43A]">The WebMantu contribution</p>
              <h4 className="font-display text-lg font-bold text-[#F5F2EA] md:text-3xl">What we <span className="text-[#E7C46A]">delivered.</span></h4>
            </div>
            <p className="hidden text-sm text-[#B9B1A4] md:block">Built for {story.name}</p>
          </div>
          <ul className="grid grid-cols-2 gap-2 md:gap-3 lg:grid-cols-4">
            {story.delivered.map((item, index) => (
              <li key={item} className="flex items-center gap-2 md:gap-3 rounded-xl border border-[#D4A43A]/20 bg-[#0F0C09]/70 px-2 py-2 md:px-4 md:py-4 transition-colors hover:border-[#D4A43A]/60 hover:bg-[#D4A43A]/5">
                <span className="flex h-7 w-7 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4A43A]/10 text-[#E7C46A]" aria-hidden="true">
                  {(() => { const Icon = deliveryIcons[active][index]; return <Icon size={19} />; })()}
                </span>
                <span className="text-xs md:text-sm font-semibold leading-5 text-[#F5F2EA]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-3 border-t border-[#2A221A] bg-[#16120E]/60 px-6 py-6 sm:flex-row md:px-10">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4A43A] px-6 py-3 text-sm font-semibold text-[#16120E] transition-colors hover:bg-[#E7C46A]">Visit Website <ExternalLink size={16} /></a>
          <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D4A43A]/40 px-6 py-3 text-sm font-semibold text-[#E7C46A] transition-colors hover:bg-[#D4A43A]/10">Start a Similar Project <ArrowUpRight size={17} /></a>
        </div>
      </article>
      <nav aria-label="Production project navigation" className="mt-4 flex items-center justify-between gap-3 md:mt-6">
        <button type="button" onClick={() => move(-1)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#D4A43A]/60 bg-[#D4A43A]/10 px-4 py-3 text-sm font-semibold text-[#E7C46A] shadow-[0_0_16px_rgba(212,164,58,0.08)] transition-all hover:border-[#E7C46A] hover:bg-[#D4A43A]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E7C46A] md:min-h-14 md:min-w-40 md:px-7 md:py-4 md:text-base"><ChevronLeft size={16} />Previous</button>
        <p aria-live="polite" className="text-sm text-[#E7C46A]">{story.name}</p>
        <button type="button" onClick={() => move(1)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#D4A43A]/60 bg-[#D4A43A]/10 px-4 py-3 text-sm font-semibold text-[#E7C46A] shadow-[0_0_16px_rgba(212,164,58,0.08)] transition-all hover:border-[#E7C46A] hover:bg-[#D4A43A]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E7C46A] md:min-h-14 md:min-w-40 md:px-7 md:py-4 md:text-base">Next<ChevronRight size={16} /></button>
      </nav>
    </div>
  );
}












