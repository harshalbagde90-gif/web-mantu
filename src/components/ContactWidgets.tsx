import { useState } from "react";
import { Bot, X, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const chatUrl = "https://cdn.botpress.cloud/webchat/v5.0/shareable.html?configUrl=https://files.bpcontent.cloud/2026/10/22/22/20261022220125-19UWSB8A.json";

export function ContactWidgets() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <section aria-label="WebMantu AI assistant" className="fixed bottom-24 right-3 z-[70] flex h-[min(600px,75dvh)] w-[calc(100vw-24px)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-[#D4A43A]/40 bg-[#16120E] shadow-2xl md:right-6">
          <div className="flex items-center gap-3 border-b border-[#D4A43A]/20 px-4 py-3 text-[#E7C46A]">
            <Bot size={22} /><div className="flex-1"><h2 className="text-sm font-semibold">WebMantu AI Assistant</h2><p className="text-xs text-[#B9B1A4]">Ask about our services & projects</p></div>
            <a href={chatUrl} target="_blank" rel="noopener noreferrer" aria-label="Open AI chat in a new tab" className="rounded p-2 hover:bg-white/10"><ExternalLink size={17} /></a>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close AI chat" className="rounded p-2 hover:bg-white/10"><X size={20} /></button>
          </div>
          <iframe src={chatUrl} title="Chat with WebMantu AI" className="min-h-0 w-full flex-1 border-0 bg-white" />
        </section>
      )}
      <div className="fixed bottom-5 right-4 z-[70] flex items-center gap-3 md:bottom-6 md:right-6">
        <a href="https://wa.me/917499147597?text=Hello%20WebMantu!%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp" className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"><FaWhatsapp size={31} /></a>
        <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close AI assistant" : "Open AI assistant"} aria-expanded={open} title="Ask WebMantu AI" className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E7C46A]/50 bg-[#D4A43A] text-[#16120E] shadow-[0_0_24px_rgba(212,164,58,0.25)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E7C46A]">{open ? <X size={27} /> : <Bot size={28} />}</button>
      </div>
    </>
  );
}
