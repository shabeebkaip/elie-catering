"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "Private Dinner",
  "Gala",
  "Royal Ceremony",
  "Birthday Celebration",
  "Cocktail Reception",
  "Buffet Event",
  "Other",
];

const CONTACT_INFO = [
  {
    label: "Phone",
    value: "+966 54 435 6564",
    sub: "Sun – Thu, 9am – 6pm AST",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "elie@catering.com",
    sub: "We reply within 24 hours",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Riyadh, Saudi Arabia",
    sub: "Serving all KSA regions",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
});

export default function ContactPage() {
  const locale = useLocale();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", eventType: "", date: "", guests: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main className="bg-primary min-h-screen overflow-x-hidden">

        {/* ══════════════════════════════════════
            HERO
            ══════════════════════════════════════ */}
        <section className="relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28 px-6">

          {/* Capsule decorations */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.3 }}
              className="absolute -top-20 right-[8%] w-[100px] h-[480px] rounded-full border border-accent/18 rotate-[-14deg]"
            />
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.5 }}
              className="absolute -top-10 right-[16%] w-[60px] h-[300px] rounded-full bg-accent/8 rotate-[-14deg]"
            />
            <div className="absolute bottom-0 left-[-3%] w-[80px] h-[360px] rounded-full bg-[#c38ed8]/8 rotate-[20deg]" />
            <div className="absolute top-[30%] left-[40%] w-[40px] h-[160px] rounded-full border border-accent/8 rotate-[-30deg]" />
            {/* Ambient glow */}
            <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
          </div>

          <div className="container-custom px-0 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-accent/55" />
                <span className="text-accent text-[10px] tracking-[0.48em] uppercase font-bold">
                  Get in Touch
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif font-light text-[clamp(52px,10vw,130px)] text-cream uppercase leading-[0.84] tracking-tighter max-w-4xl">
                Let&apos;s Create<br />
                <em
                  className="text-accent italic"
                >
                  Something
                </em>
                <br />
                Extraordinary.
              </h1>

              <p className="text-cream/50 text-[clamp(15px,1.6vw,18px)] max-w-xl font-light leading-relaxed mt-8">
                Tell us about your vision — our team will reach out within 24 hours
                to begin crafting your event.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            MAIN CONTENT — Form + Info
            ══════════════════════════════════════ */}
        <section className="px-6 pb-32">
          <div className="container-custom px-0">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 xl:gap-16 items-start">

              {/* ── LEFT: Contact Form ── */}
              <motion.div {...fadeUp(0)}>
                {submitted ? (
                  /* Success state */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl border border-accent/25 p-12 md:p-16 text-center"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-8">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bb8a3c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h2
                      className="text-cream text-[clamp(28px,4vw,44px)] font-light mb-4"
                      style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                    >
                      Message Received.
                    </h2>
                    <p className="text-cream/55 text-[15px] leading-relaxed max-w-md mx-auto mb-10">
                      Thank you for reaching out. A member of our team will contact you
                      within 24 hours to discuss your event in detail.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", eventType: "", date: "", guests: "", message: "" }); }}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold border border-accent/35 text-accent hover:bg-accent hover:text-primary transition-all duration-300 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-3xl border border-white/8 p-8 md:p-10 lg:p-12"
                    style={{ background: "rgba(255,255,255,0.025)" }}
                  >
                    <div className="flex items-center gap-3 mb-10">
                      <div className="w-6 h-px bg-accent/50" />
                      <span className="text-accent text-[10px] tracking-[0.42em] uppercase font-bold">
                        Enquiry Form
                      </span>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40 font-bold">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          required name="name" value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-5 py-4 text-cream text-[14px] placeholder:text-cream/25 focus:outline-none focus:border-accent/50 focus:bg-white/6 transition-all duration-300"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40 font-bold">
                          Email <span className="text-accent">*</span>
                        </label>
                        <input
                          required type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-5 py-4 text-cream text-[14px] placeholder:text-cream/25 focus:outline-none focus:border-accent/50 focus:bg-white/6 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Phone + Event Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40 font-bold">
                          Phone Number
                        </label>
                        <input
                          type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+966 5XX XXX XXXX"
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-5 py-4 text-cream text-[14px] placeholder:text-cream/25 focus:outline-none focus:border-accent/50 focus:bg-white/6 transition-all duration-300"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40 font-bold">
                          Event Type <span className="text-accent">*</span>
                        </label>
                        <select
                          required name="eventType" value={form.eventType} onChange={handleChange}
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-5 py-4 text-cream text-[14px] focus:outline-none focus:border-accent/50 focus:bg-white/6 transition-all duration-300 appearance-none cursor-pointer"
                          style={{ colorScheme: "dark" }}
                        >
                          <option value="" disabled className="bg-primary">Select event type</option>
                          {EVENT_TYPES.map((t) => (
                            <option key={t} value={t} className="bg-primary">{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date + Guests */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40 font-bold">
                          Preferred Date
                        </label>
                        <input
                          type="date" name="date" value={form.date} onChange={handleChange}
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-5 py-4 text-cream text-[14px] focus:outline-none focus:border-accent/50 focus:bg-white/6 transition-all duration-300"
                          style={{ colorScheme: "dark" }}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40 font-bold">
                          Expected Guests
                        </label>
                        <input
                          type="number" name="guests" value={form.guests} onChange={handleChange}
                          placeholder="Approximate guest count"
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-5 py-4 text-cream text-[14px] placeholder:text-cream/25 focus:outline-none focus:border-accent/50 focus:bg-white/6 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2 mb-8">
                      <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40 font-bold">
                        Tell Us About Your Event <span className="text-accent">*</span>
                      </label>
                      <textarea
                        required name="message" value={form.message} onChange={handleChange}
                        placeholder="Share your vision, theme, requirements, or any special requests..."
                        rows={5}
                        className="w-full bg-white/4 border border-white/10 rounded-xl px-5 py-4 text-cream text-[14px] placeholder:text-cream/25 focus:outline-none focus:border-accent/50 focus:bg-white/6 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full text-[11px] tracking-[0.28em] uppercase font-bold bg-accent text-primary transition-all duration-300 hover:bg-cream hover:scale-[1.02] active:scale-95 shadow-[0_10px_40px_rgba(187,138,60,0.4)] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>Send Enquiry <span>→</span></>
                      )}
                    </button>

                    <p className="mt-5 text-[11px] text-cream/25 leading-relaxed">
                      By submitting, you agree to be contacted by our team regarding your enquiry.
                      We respect your privacy and never share your information.
                    </p>
                  </form>
                )}
              </motion.div>

              {/* ── RIGHT: Info Panel ── */}
              <div className="space-y-5 lg:sticky lg:top-32">

                {/* Contact cards */}
                {CONTACT_INFO.map((item, i) => (
                  <motion.div
                    key={item.label}
                    {...fadeUp(0.1 + i * 0.1)}
                    className="group rounded-2xl border border-white/8 p-6 hover:border-accent/25 transition-all duration-400"
                    style={{ background: "rgba(255,255,255,0.025)" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/12 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[9px] tracking-[0.32em] uppercase text-cream/35 font-bold mb-1">
                          {item.label}
                        </p>
                        <p className="text-cream text-[15px] font-light mb-0.5 group-hover:text-accent transition-colors duration-300">
                          {item.value}
                        </p>
                        <p className="text-cream/35 text-[11px]">{item.sub}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Image capsule */}
                <motion.div {...fadeUp(0.4)} className="relative overflow-hidden rounded-3xl" style={{ height: 280 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                    alt="Elie Catering event"
                    fill
                    className="object-cover"
                    sizes="380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p
                      className="text-cream text-[20px] font-light leading-tight"
                      style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                    >
                      "Every great event begins with a conversation."
                    </p>
                    <p className="text-accent/70 text-[10px] tracking-[0.25em] uppercase font-bold mt-3">
                      — Elie Catering & Event Planning
                    </p>
                  </div>
                </motion.div>

                {/* Quick links */}
                <motion.div
                  {...fadeUp(0.5)}
                  className="rounded-2xl border border-white/8 p-6"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <p className="text-[9px] tracking-[0.36em] uppercase text-cream/35 font-bold mb-5">
                    Quick Links
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "View All Services", href: `/${locale}/services` },
                      { label: "About Elie Catering", href: `/${locale}/about` },
                      { label: "Event Planning", href: `/${locale}/planning` },
                      { label: "Decorating & Design", href: `/${locale}/decorating` },
                    ].map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="flex items-center justify-between gap-3 text-[13px] text-cream/55 hover:text-accent transition-colors duration-300 no-underline group/link py-1"
                      >
                        {link.label}
                        <span className="text-accent/0 group-hover/link:text-accent transition-all duration-300 translate-x-0 group-hover/link:translate-x-1">→</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            BOTTOM — Stats Strip
            ══════════════════════════════════════ */}
        <section className="border-t border-white/8 py-16 px-6">
          <div className="container-custom px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: "14+", label: "Years of Excellence" },
                { num: "500+", label: "Events Delivered" },
                { num: "13", label: "KSA Regions Served" },
                { num: "24h", label: "Response Time" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...fadeUp(i * 0.08)}
                  className="text-center md:text-left"
                >
                  <p className="font-serif text-[clamp(32px,5vw,52px)] text-accent font-light leading-none">
                    {stat.num}
                  </p>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-cream/35 font-bold mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
