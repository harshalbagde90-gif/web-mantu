import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Headset, Layers3, MousePointerClick, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const description = "WebMantu Digital is a founder-led agency based in Nagpur. We build websites, manage social media, improve search visibility, and automate everyday tasks with AI.";

const reasons = [
  { Icon: Headset, title: "Ongoing Client Support", description: "At handover, we walk you through what we built and discuss what support you may need for updates, maintenance, or new features." },
  { Icon: MousePointerClick, title: "Stronger Market Positioning", description: "We look at how customers search for and compare businesses like yours, then make it easier for them to understand what sets you apart." },
  { Icon: Layers3, title: "Services That Work Together", description: "We plan your website, search, social content, and automation together. A social post can lead to a relevant service page, and an enquiry can trigger a follow-up." },
  { Icon: TrendingUp, title: "Focused on Your Business Growth", description: "We agree on what the project should improve, whether that's making it easier to enquire or reducing manual work. That gives us a clear starting point for future improvements." },
];

const process = [
  { title: "Understand your business", description: "We start with what you sell, who you want to reach, and where customers or your team run into friction today." },
  { title: "Agree on the priorities", description: "We decide what to tackle first and agree on the scope before building. Sometimes that means a new website; sometimes a clearer service page or simpler enquiry process is the better first step." },
  { title: "Build and test", description: "We test the pieces people actually use, from browsing on a phone and sending an enquiry to checking that an automated follow-up goes to the right place." },
  { title: "Hand over and improve", description: "We show you how things work, explain what you can manage yourself, and discuss what’s worth improving once people start using it." },
];

const projects = [
  { name: "ORA Spa & Wellness", slug: "ora-spa", description: "A website for a Nagpur wellness centre that makes its services easy to explore and gives visitors a clear way to enquire." },
  { name: "MyVaidyam", slug: "myvaidyam", description: "A medical tourism platform with dedicated centre pages so visitors can explore Ayurveda and wellness options in India." },
  { name: "NumGuru", slug: "numguru", description: "A multilingual platform that turns a name and birth date into a personalised numerology report, with payments and blog automation." },
];

const aboutSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About WebMantu Digital",
  url: "https://webmantu.com/about-us",
  description,
  about: {
    "@type": "Organization",
    name: "WebMantu Digital",
    url: "https://webmantu.com",
    founder: {
      "@type": "Person",
      name: "Harsh Ashok Bagde",
      sameAs: ["https://www.linkedin.com/in/harsh-bagde-a6a783252/"],
      alumniOf: { "@type": "CollegeOrUniversity", name: "JD College of Engineering & Management, Nagpur", url: "https://www.jdcoem.ac.in/" },
    },
  },
});

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0A09] text-[#F5F2EA] selection:bg-[#D4A43A]/30">
      <SEO title="About Us — WebMantu Digital" description={description} schema={aboutSchema} />
      <Navbar />
      <main>
        <section aria-labelledby="about-title" className="relative isolate overflow-hidden bg-[#0B0A09] px-6 pb-16 pt-32 text-center md:px-10 md:pb-24 md:pt-44">
          <img src="/Images/About/about-hero-1.png" alt="" className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0B0A09]/85 via-[#0B0A09]/80 to-[#0B0A09]" />
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-[#E7C46A]">About WebMantu Digital</p>
            <h1 id="about-title" className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Who We <span className="text-[#E7C46A]">Are</span></h1>
            <div className="mx-auto mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-[#E0D7CA] sm:text-lg">
              <p>WebMantu Digital is a founder-led agency based in Nagpur, working with businesses in India and internationally. We build websites, manage social media, improve search visibility, and automate everyday tasks with AI.</p>
              <p>We start by understanding your customers and goals, then recommend the work that makes sense for your business.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="founder-title" className="border-y border-[#392C1E] bg-[#191510]">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 md:grid-cols-[minmax(0,1fr)_minmax(12rem,17rem)] md:gap-12 md:px-10 md:py-16 lg:gap-20">
            <div>
              <h2 id="founder-title" className="font-display text-3xl font-bold tracking-tight md:text-4xl">From the <span className="text-[#E7C46A]">Founder</span></h2>
              <div className="mt-5 space-y-4 border-l border-[#6B5130] pl-4 leading-relaxed text-[#E0D7CA] sm:pl-5">
                <p>I’m a computer science engineer, and I believe AI can change how businesses work. Used well, AI automation can save time, reduce costs, and help teams work more efficiently.</p>
                <p>Over five years working with established companies and startups, I learned how teams build processes, handle pressure, and keep projects moving when plans change. That experience gave me the confidence to start WebMantu Digital.</p>
                <p>I wanted to build lasting relationships with clients by giving them honest advice and making sure they know exactly what they’re paying for.</p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[17rem] text-center">
              <img src="/Images/About/harsh-bagde-founder.jpg" alt="Harsh Ashok Bagde, founder of WebMantu Digital" width={1254} height={1254} className="mx-auto aspect-square w-44 rounded-2xl border border-[#6B5130] object-cover shadow-xl md:w-52" decoding="async" />
              <p className="mt-4 font-display text-xl font-bold">Harsh Ashok Bagde</p>
              <p className="mt-1 text-sm text-[#C7BEB1]">Founder, WebMantu Digital</p>
              <p className="mt-2 inline-flex rounded-md border border-[#6B5130] bg-[#2A2116] px-2.5 py-1 text-sm font-semibold text-[#F5F2EA]">Computer Science Engineer</p>
              <p className="mt-2 leading-relaxed text-[#C7BEB1]">Studied at <a href="https://www.jdcoem.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#E7C46A] underline underline-offset-4">JD College of Engineering &amp; Management, Nagpur<span className="sr-only"> (opens in a new tab)</span></a>.</p>
              <a href="https://www.linkedin.com/in/harsh-bagde-a6a783252/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#6B5130] px-3 py-2 text-sm font-semibold text-[#E7C46A] hover:bg-[#2A2116] focus-visible:outline focus-visible:outline-[#E7C46A]">
                View LinkedIn profile <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="about-approach" className="border-t border-[#392C1E] bg-[#17120E]">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:items-center md:gap-12 md:px-10 md:py-20">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-[#E7C46A]">What We Believe</p>
              <h2 id="about-approach" className="font-display text-3xl font-bold tracking-tight md:text-4xl">Your digital tools should work together.</h2>
            </div>
            <div className="space-y-4 leading-relaxed text-[#C7BEB1]">
              <p>A customer might discover you through a social post or a search. Your website should answer their next question, and if they decide to get in touch, their enquiry should reach the right person.</p>
              <p>That’s how we think about websites, content, SEO, and automation: each one has a job. We recommend what helps at each step instead of assuming you need every service.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="why-webmantu" className="bg-[#F7F4EE] text-[#201B16]">
          <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
            <h2 id="why-webmantu" className="mb-8 text-center font-display text-3xl font-bold tracking-tight md:text-5xl">Why Work with <span className="text-[#795B27]">WebMantu?</span></h2>
            <div className="grid gap-4 md:grid-cols-2">
              {reasons.map(({ Icon, title, description }) => (
                <article key={title} className="rounded-xl border border-[#E3DBCE] bg-white p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#F1E6D1] text-[#795B27]"><Icon size={19} aria-hidden="true" /></span>
                    <h3 className="font-display text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-[#62584D]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="about-process" className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <h2 id="about-process" className="font-display text-3xl font-bold md:text-4xl">How We Work</h2>
          <p className="mb-8 mt-3 max-w-xl text-[#C7BEB1]">What to expect from the first conversation through handover.</p>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ title, description }, index) => (
              <li key={title} className="rounded-xl border border-[#483622] bg-[#191510] p-5">
                <span className="font-display text-xl font-semibold text-[#E7C46A]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C7BEB1]">{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="about-projects" className="border-y border-[#392C1E] bg-[#17120E]">
          <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
            <h2 id="about-projects" className="mb-7 font-display text-3xl font-bold md:text-4xl">What We’ve Built</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {projects.map(({ name, slug, description }) => (
                <Link key={slug} to={`/case-studies?project=${slug}`} className="group flex flex-col rounded-xl border border-[#483622] bg-[#0B0A09] p-5 hover:border-[#8A6936] focus-visible:outline focus-visible:outline-[#E7C46A]">
                  <h3 className="font-display text-lg font-semibold">{name}</h3>
                  <p className="mb-4 mt-2 text-sm leading-relaxed text-[#C7BEB1]">{description}</p>
                  <span className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#E7C46A]">View case study <ArrowUpRight size={15} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14 text-center md:px-10 md:py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Have a project in mind?</h2>
          <p className="mx-auto mt-3 max-w-lg text-[#C7BEB1]">See what we’ve built, or tell us what you’d like to improve.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex min-h-12 items-center rounded-xl bg-[#D4A43A] px-6 font-semibold text-[#0B0B0C] hover:bg-[#E7C46A]">Let’s Talk</Link>
            <Link to="/case-studies" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#8A6936] px-6 font-semibold text-[#E7C46A] hover:bg-[#231A10]">See Our Work <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
