import { useInView } from "@/hooks/useInView";
import { Phone, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const ContactSection = () => {
  const { ref, isInView } = useInView();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    customCountryCode: "",
    contact: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");



  useEffect(() => {
    emailjs.init("Gbsxgx5a7dejoZsyf");
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address";
    
    if (formData.countryCode === "other" && !formData.customCountryCode.trim()) {
      newErrors.customCountryCode = "Code required";
    }
    
    const phoneRegex = /^[\d\s\-\+()]{7,15}$/;
    if (!formData.contact) newErrors.contact = "Phone is required";
    else if (!phoneRegex.test(formData.contact)) newErrors.contact = "Invalid phone format";
    
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setSending(true);
      const userPhone = formData.countryCode === "other" ? `${formData.customCountryCode} ${formData.contact}` : `${formData.countryCode} ${formData.contact}`;

      // 1. Send Email via EmailJS
      await emailjs.send(
        "service_xcyct6w",
        "template_h24tt3m",
        {
          name: formData.name,
          email: formData.email,
          contact: userPhone,
          message: formData.message,
        }
      );

      // 2. Prepare WhatsApp URL
      const phoneNumber = "917499147597";
      const waMessage = `Hello Web Mantu! 🚀%0A%0AI just saw your portfolio and I am interested in your services.%0A%0A*Project Inquiry Details:*%0A👤 *Name:* ${formData.name}%0A📧 *Email:* ${formData.email}%0A📞 *Contact:* ${userPhone}%0A💬 *Message:* ${formData.message}%0A%0ALooking forward to hearing from you!`;
      const url = `https://wa.me/${phoneNumber}?text=${waMessage}`;
      setWhatsappUrl(url);

      // 3. Show Lightbox (Success Modal)
      setShowSuccessModal(true);

      // 4. Clear Form
      setFormData({ name: "", email: "", countryCode: "+91", customCountryCode: "", contact: "", message: "" });
    } catch (err) {
      toast({
        title: "Failed to send",
        description: "Please try again or use the WhatsApp icon directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 relative bg-[#0B0B0C]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div
          className={`text-center max-w-2xl mx-auto mb-8 md:mb-12 ${isInView ? "opacity-100 animate-fade-up" : "opacity-0"
            }`}
        >
          <span className="text-[#D4A43A] font-medium font-display text-sm uppercase tracking-[0.14em]">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            Let's <span className="bg-gradient-to-r from-[#D4A43A] to-[#E7C46A] bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-[#B9B1A4] font-sans text-base mb-4">
            Have a project in mind? We'd love to hear from you. Let's create
            something amazing together.
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/917499147597"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95"
              aria-label="WhatsApp Me"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 whatsapp-btn-pulse">
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

        <div className="max-w-4xl mx-auto">
          <div className={`${isInView ? "opacity-100 animate-fade-up" : "opacity-0"}`}>
            <div className="relative p-[1px] rounded-[1.5rem] group overflow-hidden shadow-2xl">
              {/* Elegant Border Sweep Effect (Hover) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_340deg,#D4A43A_360deg)] animate-border-spin opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <form onSubmit={handleSubmit} noValidate className="relative rounded-3xl border border-[#D4A43A]/25 bg-[#12100D] p-5 sm:p-8 md:p-10 text-[#F5F2EA]">
                <div className="mb-6 border-b border-[#D4A43A]/15 pb-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A43A]">Your next chapter starts here</p>
                  <h3 className="font-display text-2xl font-bold md:text-3xl">Tell us about your project.</h3>
                  <p className="mt-2 text-sm leading-6 text-[#B9B1A4]">Share what you have in mind. We’ll help you plan the next step.</p>
                </div>
                {Object.values(errors).some(Boolean) && <p role="alert" className="mb-5 rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-300">Please check the highlighted fields below.</p>}
                <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="enquiry-name" className="mb-2 block text-sm font-medium">Full name <span className="text-[#D4A43A]">*</span></label>
                      <Input id="enquiry-name" name="name" autoComplete="name" required value={formData.name} onChange={handleInputChange} placeholder="Your full name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'enquiry-name-error' : undefined} className="h-12 rounded-xl border-[#3A3023] bg-[#090909] px-4 text-base text-[#F5F2EA] placeholder:text-[#82796B] focus-visible:ring-[#D4A43A]/60" />
                      {errors.name && <p id="enquiry-name-error" className="mt-1 text-xs text-red-300">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="enquiry-email" className="mb-2 block text-sm font-medium">Email address <span className="text-[#D4A43A]">*</span></label>
                      <Input id="enquiry-email" type="email" name="email" autoComplete="email" required value={formData.email} onChange={handleInputChange} placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'enquiry-email-error' : undefined} className="h-12 rounded-xl border-[#3A3023] bg-[#090909] px-4 text-base text-[#F5F2EA] placeholder:text-[#82796B] focus-visible:ring-[#D4A43A]/60" />
                      {errors.email && <p id="enquiry-email-error" className="mt-1 text-xs text-red-300">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="enquiry-phone" className="mb-2 block text-sm font-medium">Phone number <span className="text-[#D4A43A]">*</span></label>
                      <div className="flex min-w-0 gap-2">
                        <select name="countryCode" aria-label="Country calling code" value={formData.countryCode} onChange={handleInputChange} className="h-12 w-24 shrink-0 rounded-xl border border-[#3A3023] bg-[#090909] px-2 text-base text-[#F5F2EA] focus:outline-none focus:ring-2 focus:ring-[#D4A43A]/60">
                          <option value="+91">IN +91</option><option value="+1">US +1</option><option value="+44">UK +44</option><option value="+61">AU +61</option><option value="+971">AE +971</option><option value="other">Other</option>
                        </select>
                        <Input id="enquiry-phone" type="tel" inputMode="tel" autoComplete="tel-national" name="contact" required value={formData.contact} onChange={handleInputChange} placeholder="Phone number" aria-invalid={!!errors.contact} aria-describedby={errors.contact ? 'enquiry-phone-error' : undefined} className="h-12 min-w-0 flex-1 rounded-xl border-[#3A3023] bg-[#090909] px-3 text-base text-[#F5F2EA] placeholder:text-[#82796B] focus-visible:ring-[#D4A43A]/60" />
                      </div>
                      {formData.countryCode === 'other' && <div className="mt-3"><label htmlFor="enquiry-code" className="mb-1 block text-xs text-[#B9B1A4]">Country calling code</label><Input id="enquiry-code" type="tel" name="customCountryCode" value={formData.customCountryCode} onChange={handleInputChange} placeholder="e.g. +49" aria-invalid={!!errors.customCountryCode} className="h-12 w-full rounded-xl border-[#3A3023] bg-[#090909] text-base text-[#F5F2EA]" />{errors.customCountryCode && <p className="mt-1 text-xs text-red-300">{errors.customCountryCode}</p>}</div>}
                      {errors.contact && <p id="enquiry-phone-error" className="mt-1 text-xs text-red-300">{errors.contact}</p>}
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <label htmlFor="enquiry-message" className="mb-2 block text-sm font-medium">Project details <span className="text-[#D4A43A]">*</span></label>
                    <Textarea id="enquiry-message" name="message" required value={formData.message} onChange={handleInputChange} placeholder="What does your business do, and what would you like us to build or improve?" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'enquiry-message-error' : undefined} className="min-h-[140px] flex-1 resize-y rounded-xl border-[#3A3023] bg-[#090909] px-4 py-3 text-base leading-7 text-[#F5F2EA] placeholder:text-[#82796B] focus-visible:ring-[#D4A43A]/60 md:min-h-[240px]" />
                    {errors.message && <p id="enquiry-message-error" className="mt-1 text-xs text-red-300">{errors.message}</p>}
                  </div>
                </div>
                <div className="mt-6 border-t border-[#D4A43A]/15 pt-6">
                  <Button type="submit" disabled={sending} className="h-12 w-full gap-2 rounded-xl bg-gradient-to-r from-[#D4A43A] to-[#E7C46A] px-4 text-sm font-semibold text-[#16120E] hover:brightness-110 sm:text-base"><Send size={17} />{sending ? 'Sending your enquiry…' : 'Get a Free Consultation'}</Button>
                  <p className="mt-3 text-center text-xs leading-5 text-[#B9B1A4]">We’ll use your details to respond to your enquiry. <a href="/privacy-policy" className="text-[#E7C46A] underline underline-offset-2">Privacy policy</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Lightbox (Success Modal) */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md bg-[#16120E] border border-[#2A221A] text-center py-10 shadow-2xl overflow-hidden rounded-2xl">
          <DialogHeader className="text-center sm:text-center">
            <div className="mx-auto w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 border border-[#25D366]/20">
              <CheckCircle2 className="text-[#25D366] w-8 h-8" />
            </div>
            <DialogTitle className="text-3xl font-bold font-display text-[#D4A43A] mb-2">
              Thank You!
            </DialogTitle>
            <DialogDescription className="text-[#B9B1A4] text-lg py-2 leading-relaxed font-sans">
              We've received your request. To get a <span className="text-white font-semibold">quick response</span>, let's chat directly on WhatsApp.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-6 px-4">
            <Button
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold h-14 text-lg rounded-xl transition-all duration-300 shadow-sm"
              onClick={() => {
                window.open(whatsappUrl, "_blank");
                setShowSuccessModal(false);
              }}
            >
              <MessageSquare className="mr-3 w-5 h-5" />
              Connect on WhatsApp
            </Button>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-4 text-[#A3988E] hover:text-white transition-colors text-sm font-medium font-sans"
            >
              I'll wait for an email reply
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

