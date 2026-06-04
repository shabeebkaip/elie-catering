"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EVENT_TYPES = ["Wedding", "Corporate", "Birthday", "Gala", "Private Dinner", "Other"];
const SERVICE_TYPES = ["Full Catering", "Canapés & Cocktails", "Desserts Only", "Bar Service", "Full Event Planning"];
const BUDGET_RANGES = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $30,000", "$30,000+"];
const DIETARY = ["Vegetarian", "Vegan", "Halal", "Gluten-Free", "Nut-Free", "Dairy-Free"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
});

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  eventType: string;
  guestCount: string;
  venue: string;
  budget: string;
  serviceType: string;
  dietary: string[];
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  eventType: "",
  guestCount: "",
  venue: "",
  budget: "",
  serviceType: "",
  dietary: [],
  message: "",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[9px] tracking-[0.36em] uppercase font-bold text-cream/45 mb-2">
      {children}
    </span>
  );
}

const inputBase =
  "w-full bg-white/[0.08] border border-cream/12 rounded-2xl px-5 py-4 text-[13px] text-cream placeholder:text-cream/30 font-light focus:outline-none focus:border-accent/60 focus:bg-white/[0.13] transition-all duration-300 backdrop-blur-sm";

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleDietary(item: string) {
    setForm((prev) => ({
      ...prev,
      dietary: prev.dietary.includes(item)
        ? prev.dietary.filter((d) => d !== item)
        : [...prev.dietary, item],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div id="booking" className="bg-purple-deep overflow-hidden">

      {/* ── Arch transition: ClosingStatement primary → dark ── */}
      <div className="bg-primary">
        <div className="h-16 md:h-24 bg-purple-deep rounded-t-[80px] md:rounded-t-[120px]" />
      </div>

      <section className="relative bg-purple-deep">

        {/* Ambient capsule decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-6%] w-[90px] h-[420px] bg-accent/6 rounded-full rotate-[20deg]" />
          <div className="absolute top-[10%] left-[2%] w-[40px] h-[200px] border border-accent/12 rounded-full rotate-[20deg]" />
          <div className="absolute bottom-[12%] right-[-4%] w-[110px] h-[480px] bg-primary/5 rounded-full rotate-[-28deg]" />
          <div className="absolute bottom-[25%] right-[8%] w-[32px] h-[120px] border border-primary/10 rounded-full rotate-[-28deg]" />
          <div className="absolute top-[40%] right-[20%] w-[18px] h-[60px] rounded-full bg-accent/10 rotate-[12deg]" />
        </div>

        <div className="container-custom px-6 md:px-14 lg:px-20 py-16 md:py-24 relative z-10">

          {/* ── Section Header ── */}
          <motion.div {...fadeUp(0)} className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent/60" />
              <span className="text-accent text-[9px] tracking-[0.42em] uppercase font-bold">
                Reserve Your Date
              </span>
            </div>
            <h2 className="font-serif font-light leading-[0.88] tracking-tight text-cream text-[clamp(44px,7vw,96px)]">
              Begin the<br />
              <em className="text-accent italic">Conversation.</em>
            </h2>
            <p className="mt-5 text-[clamp(14px,1.3vw,16px)] text-cream/45 font-light max-w-md leading-relaxed">
              Choose the way you prefer to connect — we respond within 24 hours.
            </p>
          </motion.div>

          {/* ── WhatsApp Primary CTA ── */}
          <motion.div {...fadeUp(0.08)} className="mb-10">
            <a
              href={`https://wa.me/966544356564?text=${encodeURIComponent("Hello! I'd like to discuss my event with Elie Catering & Event Planning.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#20bc5a] text-white px-8 py-5 rounded-2xl shadow-[0_8px_32px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] no-underline"
            >
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <div>
                <p className="text-[13px] font-bold tracking-wide">Chat on WhatsApp</p>
                <p className="text-[11px] text-white/75 font-light">Instant reply · Fastest way to reach us</p>
              </div>
              <span className="ml-auto text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 text-lg">→</span>
            </a>

            {/* Divider */}
            <div className="flex items-center gap-4 mt-10 mb-2">
              <div className="flex-1 h-px bg-cream/10" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-cream/30 font-medium">or fill the form below</span>
              <div className="flex-1 h-px bg-cream/10" />
            </div>
          </motion.div>

          {/* ── Form Card ── */}
          <motion.div {...fadeUp(0.1)}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="relative rounded-[40px] border border-primary/10 bg-primary text-cream px-10 py-20 text-center overflow-hidden shadow-[0_40px_100px_rgba(28,20,40,0.12)]"
              >
                {/* Capsule accents inside success card */}
                <div className="absolute top-[-40px] right-[-20px] w-20 h-60 rounded-full bg-accent/10 rotate-[-20deg]" />
                <div className="absolute bottom-[-30px] left-[-16px] w-14 h-40 rounded-full border border-accent/15 rotate-[18deg]" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M4 11.5L9 16.5L18 6" stroke="#bb8a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-serif font-light text-[clamp(28px,4vw,48px)] text-cream mb-3 leading-tight">
                    Request Received.
                  </h3>
                  <p className="text-cream/50 text-[14px] font-light max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="text-accent">{form.name}</span>. Our team will be in touch within 24 hours to begin planning your event.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="mt-10 text-[10px] tracking-[0.32em] uppercase text-accent/60 hover:text-accent transition-colors duration-200 font-bold"
                  >
                    Submit another enquiry →
                  </button>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative rounded-[40px] border border-cream/10 bg-white/[0.05] backdrop-blur-md px-8 md:px-14 py-12 md:py-16 shadow-[0_40px_100px_rgba(0,0,0,0.3)] overflow-hidden"
              >
                {/* Subtle inner capsule decoration */}
                <div className="absolute top-[-30px] right-10 w-10 h-40 rounded-full bg-accent/6 rotate-[-16deg] pointer-events-none" />
                <div className="absolute bottom-20 left-[-10px] w-8 h-28 rounded-full border border-accent/10 rotate-[18deg] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">

                  {/* Full Name */}
                  <div>
                    <Label>Full Name *</Label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputBase}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label>Email Address *</Label>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputBase}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label>Phone Number *</Label>
                    <input
                      required
                      type="tel"
                      placeholder="+966 xx xxx xxxx"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={inputBase}
                    />
                  </div>

                  {/* Event Date */}
                  <div>
                    <Label>Event Date *</Label>
                    <input
                      required
                      type="date"
                      value={form.date}
                      onChange={(e) => set("date", e.target.value)}
                      className={`${inputBase} [color-scheme:dark]`}
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <Label>Event Type *</Label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {EVENT_TYPES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => set("eventType", t)}
                          className={`px-4 py-2 rounded-full text-[11px] tracking-[0.06em] font-medium border transition-all duration-250 ${
                            form.eventType === t
                              ? "bg-primary text-cream border-primary"
                              : "bg-white/[0.08] text-cream/55 border-cream/12 hover:border-cream/28 hover:text-cream"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Guest Count */}
                  <div>
                    <Label>Number of Guests *</Label>
                    <input
                      required
                      type="number"
                      min="1"
                      placeholder="e.g. 120"
                      value={form.guestCount}
                      onChange={(e) => set("guestCount", e.target.value)}
                      className={inputBase}
                    />
                  </div>

                  {/* Venue */}
                  <div>
                    <Label>Venue / Location *</Label>
                    <input
                      required
                      type="text"
                      placeholder="Venue name or city"
                      value={form.venue}
                      onChange={(e) => set("venue", e.target.value)}
                      className={inputBase}
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <Label>Budget Range *</Label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {BUDGET_RANGES.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => set("budget", b)}
                          className={`px-4 py-2 rounded-full text-[11px] tracking-[0.04em] font-medium border transition-all duration-250 ${
                            form.budget === b
                              ? "bg-accent text-primary border-accent"
                              : "bg-white/[0.08] text-cream/55 border-cream/12 hover:border-accent/40 hover:text-cream"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Type — full width */}
                  <div className="md:col-span-2">
                    <Label>Service Type *</Label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {SERVICE_TYPES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => set("serviceType", s)}
                          className={`px-5 py-2.5 rounded-full text-[11px] tracking-[0.05em] font-medium border transition-all duration-250 ${
                            form.serviceType === s
                              ? "bg-primary text-cream border-primary shadow-[0_4px_16px_rgba(28,20,40,0.18)]"
                              : "bg-white/[0.08] text-cream/55 border-cream/12 hover:border-cream/28 hover:text-cream"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dietary Requirements — full width */}
                  <div className="md:col-span-2">
                    <Label>Dietary Requirements</Label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {DIETARY.map((d) => {
                        const checked = form.dietary.includes(d);
                        return (
                          <button
                            key={d}
                            type="button"
                            onClick={() => toggleDietary(d)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] tracking-[0.04em] font-medium border transition-all duration-250 ${
                              checked
                                ? "bg-accent/15 text-cream border-accent/50"
                                : "bg-white/[0.08] text-cream/50 border-cream/12 hover:border-accent/30 hover:text-cream"
                            }`}
                          >
                            <span
                              className={`w-3.5 h-3.5 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                                checked ? "border-accent bg-accent" : "border-primary/25"
                              }`}
                            >
                              {checked && (
                                <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                                  <path d="M1 3.5L3 5.5L6 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </span>
                            {d}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message — full width */}
                  <div className="md:col-span-2">
                    <Label>Additional Notes</Label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your vision, theme, special requests, or anything else we should know…"
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      className={`${inputBase} resize-none leading-relaxed`}
                    />
                  </div>

                  {/* Submit — full width */}
                  <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <button
                      type="submit"
                      className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full text-[11px] tracking-[0.32em] uppercase font-bold bg-primary text-cream transition-all duration-500 hover:bg-accent hover:text-primary hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(28,20,40,0.18)]"
                    >
                      Send Enquiry
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                    <span className="text-cream/20 text-[11px] hidden sm:block">or</span>
                    <a
                      href={`https://wa.me/966544356564?text=${encodeURIComponent("Hello! I'd like to discuss my event with Elie Catering & Event Planning.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-7 py-5 rounded-full text-[11px] tracking-[0.18em] uppercase font-bold bg-[#25D366] text-white hover:bg-[#20bc5a] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_24px_rgba(37,211,102,0.3)] no-underline"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 flex-shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp us
                    </a>
                  </div>

                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* ── Arch transition: cream → Footer primary ── */}
        <div className="bg-primary">
          <div className="h-0" />
        </div>
      </section>
    </div>
  );
}
