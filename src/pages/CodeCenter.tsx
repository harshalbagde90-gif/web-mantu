import { useEffect, useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Download, KeyRound, PlayCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { codeResources } from "@/data/codeResources";

const CodeCenter = () => {
  const [params, setParams] = useSearchParams();
  const submitted = params.get("code") ?? "";
  const [code, setCode] = useState(submitted);
  useEffect(() => { setCode(submitted); }, [submitted]);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const resource = /^\d{4}$/.test(submitted) ? codeResources[submitted] : undefined;
  const error = params.has("code") && !resource
    ? /^\d{4}$/.test(submitted) ? "No resource found. Double-check the code from the post." : "Enter the four-digit code from the post."
    : "";

  function findResource(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setParams({ code: code.trim() });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="Code Center" description="Enter a code from a WebMantu post or video to download the matching guide, template or checklist." />
      <Navbar />
      <main className="bg-[radial-gradient(ellipse_at_top,rgba(212,164,58,0.13),transparent_65%)] px-4 pb-16 pt-32 font-body sm:px-6 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2 lg:gap-14">
          <header>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#D4A43A]/25 bg-[#16120E] px-3 py-2 text-xs font-semibold uppercase tracking-widest text-[#E7C46A]">
              <KeyRound size={15} aria-hidden="true" /> Free resources from WebMantu
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-6xl">Code <span className="text-[#E7C46A]">Center</span></h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#D0C6B7] sm:text-lg">Enter the four-digit code from a WebMantu post or video to download the guide, checklist or template featured in it.</p>
            <aside className="mt-6 max-w-lg border-l-2 border-[#D4A43A]/55 pl-4">
              <h2 className="font-poppins text-sm font-semibold text-[#E7C46A]">Why we built this</h2>
              <p className="mt-1 text-sm leading-relaxed text-[#B9B1A4]">We share practical tips on websites, SEO and AI automation across social platforms. This gives you one place to find the full resource, without sending a DM or signing up.</p>
            </aside>
          </header>
          <div className="min-w-0 rounded-3xl border border-[#D4A43A]/30 bg-[#17130f] p-5 shadow-[0_20px_70px_-30px_rgba(212,164,58,0.24)] sm:p-8">
            <h2 className="mb-5 font-display text-2xl font-semibold">Find your download</h2>
          <form onSubmit={findResource}>
            <label htmlFor="resource-code" className="font-semibold">Your four-digit code</label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input id="resource-code" type="text" inputMode="numeric" autoComplete="off" maxLength={4} value={code} onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 4))} placeholder="0000" aria-invalid={Boolean(error)} aria-describedby="code-status" className="min-h-14 w-full min-w-0 rounded-xl border border-[#D4A43A]/40 bg-black/40 px-4 text-xl tracking-[0.25em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E7C46A]" />
              <button type="submit" className="min-h-14 shrink-0 rounded-xl bg-[#D4A43A] px-5 font-bold text-black hover:bg-[#E7C46A]">Find my resource</button>
            </div>
          </form>
          <div id="code-status" aria-live="polite">
            {error && <p className="mt-4 text-sm text-red-300">{error}</p>}
            {resource && (
              <section className="mt-6 border-t border-[#D4A43A]/25 pt-5" aria-labelledby="resource-title">
                <h2 id="resource-title" className="text-xl font-bold">{resource.title}</h2>
                <p className="mt-2 text-muted-foreground">{resource.description}</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <a href={resource.file} download className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#D4A43A] px-4 font-semibold text-black hover:bg-[#E7C46A]"><Download size={18} /> Download strategy ({resource.format})</a>
                  {resource.youtubeUrl && <a href={resource.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-[#E7C46A] underline"><PlayCircle size={18} /> Watch on YouTube</a>}
                </div>
                <Link to="/services/ai-automation" className="mt-5 inline-flex items-center gap-2 text-sm text-[#E7C46A] underline">Explore WebMantu’s AI automation services <ArrowRight size={15} /></Link>
              </section>
            )}
          </div>
          {!params.has("code") && <Link to="/code?code=1042" className="mt-4 inline-block text-sm text-[#E7C46A] underline">Try example code 1042</Link>}
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CodeCenter;
