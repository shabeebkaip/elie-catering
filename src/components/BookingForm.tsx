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
  transition: { duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] as number[] },
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
    <span className="block text-[9px] tracking-[0.36em] uppercase font-bold text-primary/45 mb-2">
      {children}
    </span>
  );
}

const inputBase =
  "w-full bg-white/70 border border-primary/12 rounded-2xl px-5 py-4 text-[13px] text-primary placeholder:text-primary/30 font-light focus:outline-none focus:border-accent/60 focus:bg-white transition-all duration-300 backdrop-blur-sm";

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
    <div id="booking" className="bg-cream overflow-hidden">

      {/* ── Arch transition: ClosingStatement primary → cream ── */}
      <div className="bg-primary">
        <div className="h-16 md:h-24 bg-cream rounded-t-[80px] md:rounded-t-[120px]" />
      </div>

      <section className="relative bg-cream">

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
          <motion.div {...fadeUp(0)} className="mb-14 md:mb-18">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent/60" />
              <span className="text-accent text-[9px] tracking-[0.42em] uppercase font-bold">
                Reserve Your Date
              </span>
            </div>
            <h2 className="font-serif font-light leading-[0.88] tracking-tight text-primary text-[clamp(44px,7vw,96px)]">
              Begin the<br />
              <em className="text-accent italic">Conversation.</em>
            </h2>
            <p className="mt-5 text-[clamp(14px,1.3vw,16px)] text-primary/50 font-light max-w-md leading-relaxed">
              Tell us about your vision — we will reach out within 24 hours to craft something extraordinary together.
            </p>
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
                className="relative rounded-[40px] border border-primary/10 bg-white/40 backdrop-blur-sm px-8 md:px-14 py-12 md:py-16 shadow-[0_40px_100px_rgba(28,20,40,0.08)] overflow-hidden"
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
                      className={`${inputBase} [color-scheme:light]`}
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
                              : "bg-white/60 text-primary/60 border-primary/14 hover:border-primary/30 hover:text-primary"
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
                              : "bg-white/60 text-primary/60 border-primary/14 hover:border-accent/40 hover:text-primary"
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
                              : "bg-white/60 text-primary/60 border-primary/14 hover:border-primary/30 hover:text-primary"
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
                                ? "bg-accent/15 text-primary border-accent/50"
                                : "bg-white/60 text-primary/50 border-primary/12 hover:border-accent/30 hover:text-primary"
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
                  <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                    <button
                      type="submit"
                      className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full text-[11px] tracking-[0.32em] uppercase font-bold bg-primary text-cream transition-all duration-500 hover:bg-accent hover:text-primary hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(28,20,40,0.18)]"
                    >
                      Send Enquiry
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                    <p className="text-[10px] text-primary/35 leading-relaxed font-light max-w-xs">
                      We respond within 24 hours. All enquiries are handled with complete discretion.
                    </p>
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
