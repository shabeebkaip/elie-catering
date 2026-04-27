"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, delay, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1.1, delay, ease: "easeOut" as const },
});

/* ─── Pillar images ─── */
const PILLAR_IMGS = [
  "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
];

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  const stats = t.raw("stats") as { num: string; label: string }[];
  const pillars = t.raw("pillars") as { t: string; d: string }[];
  const milestones = t.raw("milestones") as { year: string; t: string; d: string }[];

  /* Parallax for hero */
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Header />

      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden bg-primary">
        {/* Parallax image */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
            alt="About Elie Catering"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20" />
          <div className="absolute inset-0 bg-primary/30" />
        </motion.div>

        {/* Decorative capsules */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 0.12, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-[10%] right-[6%] w-16 h-48 rounded-full border border-accent rotate-[-18deg]"
          />
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 0.06, x: 0 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
            className="absolute top-[8%] right-[9%] w-8 h-28 rounded-full border border-accent rotate-[-18deg]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.07 }}
            transition={{ duration: 2.5 }}
            className="absolute bottom-[20%] left-[4%] w-24 h-[360px] bg-accent rounded-full rotate-[14deg]"
          />
        </div>

        {/* Hero content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full pb-20 md:pb-28">
          <div className="container-custom px-6 md:px-14 lg:px-20">
            <motion.div {...fadeIn(0.1)}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-accent" />
                <span className="text-accent text-[10px] tracking-[0.45em] uppercase font-bold">
                  {t("heroEyebrow")}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="font-serif font-light text-[clamp(64px,10vw,140px)] text-cream uppercase leading-[0.85] tracking-tighter mb-8"
            >
              {t("heroH1")}<br />
              <em className="text-accent italic not-italic">{t("heroH2")}</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.19, 1, 0.22, 1] }}
              className="text-[clamp(14px,1.6vw,18px)] text-cream/60 font-light max-w-md leading-relaxed"
            >
              {t("heroSub")}
            </motion.p>

            {/* Band */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="w-6 h-px bg-accent/50" />
              <span className="text-cream/30 text-[10px] tracking-[0.4em] uppercase">
                {t("heroBand")}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 right-8 md:right-14 flex flex-col items-center gap-2"
        >
          <span className="text-cream/30 text-[9px] tracking-[0.4em] uppercase rotate-90 origin-center mb-4">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          OUR STORY
          ══════════════════════════════════════ */}
      <section className="relative bg-cream overflow-hidden">
        {/* Bg decoration */}
        <div className="absolute top-[-5%] right-[-3%] w-32 h-[500px] bg-accent/4 rounded-full rotate-[-12deg] pointer-events-none" />

        <div className="container-custom px-6 md:px-14 lg:px-20 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — text */}
            <div>
              <motion.div {...fadeUp(0)}>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-px bg-accent" />
                  <span className="text-accent text-[10px] tracking-[0.45em] uppercase font-bold">
                    {t("storyEyebrow")}
                  </span>
                </div>
                <h2 className="font-serif font-light text-[clamp(40px,6vw,80px)] text-primary uppercase leading-[0.88] tracking-tighter mb-10">
                  {t("storyH1")}<br />
                  <em className="text-accent italic not-italic">{t("storyH2")}</em>
                </h2>
              </motion.div>

              <motion.div {...fadeUp(0.12)} className="space-y-6">
                <p className="text-[clamp(14px,1.5vw,16px)] leading-[1.85] text-body/65 font-light">
                  {t("storyP1")}
                </p>
                <p className="text-[clamp(14px,1.5vw,16px)] leading-[1.85] text-body/65 font-light">
                  {t("storyP2")}
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.22)} className="mt-10 inline-flex items-center gap-4">
                <div className="px-5 py-2.5 rounded-full border border-primary/15 bg-primary/4">
                  <span className="text-primary text-[11px] tracking-[0.3em] uppercase font-semibold">
                    {t("storyTag")}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right — stacked images */}
            <div className="relative h-[520px] lg:h-[640px]">
              {/* Large arch image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="absolute left-0 top-0 w-[62%] h-[75%] overflow-hidden shadow-2xl"
                style={{ borderRadius: "9999px 9999px 40px 40px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop"
                  alt="Fine dining setup"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </motion.div>

              {/* Small square image */}
              <motion.div
                initial={{ opacity: 0, y: 60, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
                className="absolute right-0 bottom-0 w-[52%] h-[55%] overflow-hidden rounded-3xl shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop"
                  alt="Event decor"
                  fill
                  className="object-cover"
                  sizes="360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </motion.div>

              {/* Floating gold accent card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                className="absolute bottom-[28%] left-[54%] z-10 bg-primary/95 backdrop-blur-md rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-accent/20"
              >
                <p className="font-serif text-accent text-[32px] font-light leading-none">14+</p>
                <p className="text-cream/50 text-[10px] tracking-[0.3em] uppercase mt-1">Years</p>
              </motion.div>

              {/* Capsule decoration */}
              <div className="absolute top-[10%] right-[2%] w-6 h-16 rounded-full border border-accent/25 rotate-[15deg]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
          ══════════════════════════════════════ */}
      <section className="relative bg-primary overflow-hidden">
        {/* Capsule accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-30%] left-[15%] w-14 h-48 bg-accent/6 rounded-full rotate-[-20deg]" />
          <div className="absolute bottom-[-30%] right-[20%] w-10 h-36 border border-accent/10 rounded-full rotate-[20deg]" />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/4" />
        </div>

        <div className="container-custom px-6 md:px-14 lg:px-20 py-20 md:py-28 relative z-10">
          <motion.div {...fadeIn(0)} className="text-center mb-14">
            <div className="inline-flex items-center gap-4">
              <div className="w-6 h-px bg-accent/40" />
              <span className="text-accent/60 text-[10px] tracking-[0.45em] uppercase font-bold">
                {t("statsLabel")}
              </span>
              <div className="w-6 h-px bg-accent/40" />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-3xl overflow-hidden">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="bg-primary/80 p-10 md:p-14 flex flex-col items-center text-center group hover:bg-primary/60 transition-colors duration-500"
              >
                <p className="font-serif text-[clamp(48px,6vw,80px)] text-accent font-light leading-none tracking-tighter mb-3">
                  {s.num}
                </p>
                <div className="w-6 h-px bg-accent/30 mb-3 group-hover:w-12 transition-all duration-500" />
                <p className="text-cream/40 text-[11px] tracking-[0.3em] uppercase font-medium leading-snug">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PILLARS / WHY ELIE
          ══════════════════════════════════════ */}
      <section className="relative bg-cream overflow-hidden">
        <div className="absolute bottom-0 left-[-4%] w-40 h-[500px] bg-primary/4 rounded-full rotate-[10deg] pointer-events-none" />

        <div className="container-custom px-6 md:px-14 lg:px-20 py-24 md:py-36 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <motion.div {...fadeUp(0)}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-accent" />
                <span className="text-accent text-[10px] tracking-[0.45em] uppercase font-bold">
                  {t("pillarsEyebrow")}
                </span>
              </div>
              <h2 className="font-serif font-light text-[clamp(40px,6vw,90px)] text-primary uppercase leading-[0.88] tracking-tighter mb-6">
                {t("pillarsH1")}<br />
                <em className="text-accent italic not-italic">{t("pillarsH2")}</em>
              </h2>
              <p className="text-[clamp(14px,1.5vw,16px)] text-body/55 font-light leading-relaxed max-w-lg">
                {t("pillarsSub")}
              </p>
            </motion.div>
          </div>

          {/* 3 pillar cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, delay: i * 0.12, ease: [0.19, 1, 0.22, 1] }}
                className={`group relative overflow-hidden rounded-[32px] ${i === 1 ? "md:translate-y-8" : ""}`}
                style={{ minHeight: 420 }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={PILLAR_IMGS[i]}
                    alt={p.t}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/20" />
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/15 transition-colors duration-500" />
                </div>

                {/* Number */}
                <div className="absolute top-7 right-7 font-serif text-[64px] text-accent/10 font-light leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="w-8 h-px bg-accent mb-5 group-hover:w-14 transition-all duration-500" />
                  <h3 className="font-serif text-[clamp(22px,2.5vw,28px)] italic text-cream font-light leading-tight mb-4">
                    {p.t}
                  </h3>
                  <p className="text-[13px] text-cream/55 leading-relaxed font-light max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                    {p.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOUNDER
          ══════════════════════════════════════ */}
      <section className="relative bg-primary overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[8%] w-20 h-64 rounded-full border border-accent/10 rotate-[-15deg]" />
          <div className="absolute top-[-5%] right-[12%] w-10 h-36 rounded-full border border-accent/6 rotate-[-15deg]" />
          <div className="absolute bottom-[-10%] left-[5%] w-32 h-[400px] bg-accent/4 rounded-full rotate-[12deg]" />
        </div>

        <div className="container-custom px-6 md:px-14 lg:px-20 py-24 md:py-36 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — founder image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="relative"
            >
              {/* Main portrait — arch shape */}
              <div
                className="relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                style={{ borderRadius: "9999px 9999px 60px 60px", height: 560 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=900&auto=format&fit=crop"
                  alt={t("founderName")}
                  fill
                  className="object-cover object-top"
                  sizes="500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

                {/* Name badge */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="w-8 h-px bg-accent mb-3" />
                  <p className="font-serif text-cream text-[28px] font-light italic">{t("founderName")}</p>
                  <p className="text-accent/70 text-[11px] tracking-[0.3em] uppercase mt-1">{t("founderTitle")}</p>
                </div>
              </div>

              {/* Floating capsule accent */}
              <div className="absolute top-10 right-[-12px] w-6 h-20 rounded-full border border-accent/25 rotate-[20deg]" />
            </motion.div>

            {/* Right — text */}
            <div>
              <motion.div {...fadeUp(0)}>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-px bg-accent" />
                  <span className="text-accent text-[10px] tracking-[0.45em] uppercase font-bold">
                    {t("founderEyebrow")}
                  </span>
                </div>
              </motion.div>

              {/* Large italic quote */}
              <motion.blockquote
                {...fadeUp(0.1)}
                className="font-serif text-[clamp(22px,3vw,38px)] text-cream font-light italic leading-[1.3] mb-10 border-l-2 border-accent/40 pl-8"
              >
                {t("founderQuote")}
              </motion.blockquote>

              <motion.p {...fadeUp(0.2)} className="text-[clamp(14px,1.5vw,16px)] text-cream/50 leading-[1.9] font-light">
                {t("founderBio")}
              </motion.p>

              {/* Decorative stat */}
              <motion.div {...fadeUp(0.3)} className="mt-12 flex items-start gap-10">
                {[["500+", "Events"], ["14+", "Years"]].map(([num, lbl]) => (
                  <div key={lbl}>
                    <p className="font-serif text-accent text-[44px] font-light leading-none">{num}</p>
                    <p className="text-cream/30 text-[10px] tracking-[0.35em] uppercase mt-2">{lbl}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TIMELINE / JOURNEY
          ══════════════════════════════════════ */}
      <section className="relative bg-cream overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-accent/3 to-transparent pointer-events-none" />

        <div className="container-custom px-6 md:px-14 lg:px-20 py-24 md:py-36 relative z-10">
          {/* Header */}
          <motion.div {...fadeUp(0)} className="max-w-2xl mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-[10px] tracking-[0.45em] uppercase font-bold">
                {t("journeyEyebrow")}
              </span>
            </div>
            <h2 className="font-serif font-light text-[clamp(40px,6vw,90px)] text-primary uppercase leading-[0.88] tracking-tighter">
              {t("journeyH1")}<br />
              <em className="text-accent italic not-italic">{t("journeyH2")}</em>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent origin-top"
            />

            <div className="space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.85, delay: 0.05, ease: [0.19, 1, 0.22, 1] }}
                  className={`relative flex items-start gap-8 md:gap-0 pb-14 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content — half width */}
                  <div className={`md:w-[calc(50%-40px)] pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="font-serif text-[clamp(40px,5vw,64px)] text-accent/20 font-light leading-none block mb-3">
                      {m.year}
                    </span>
                    <h3 className="font-serif text-primary text-[clamp(18px,2vw,24px)] font-light italic mb-3">
                      {m.t}
                    </h3>
                    <p className="text-[13px] text-body/55 leading-relaxed font-light">{m.d}</p>
                  </div>

                  {/* Centre dot */}
                  <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-6 flex-shrink-0">
                    <div className="w-[10px] h-[10px] rounded-full bg-accent shadow-[0_0_16px_rgba(187,138,60,0.5)]" />
                  </div>

                  {/* Spacer other side */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
          ══════════════════════════════════════ */}
      <section className="relative bg-primary overflow-hidden">
        {/* Full-bleed image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
            alt="Book a consultation"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>

        {/* Capsule decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[5%] w-16 h-52 rounded-full border border-accent/12 rotate-[-18deg]" />
          <div className="absolute top-[5%] right-[9%] w-8 h-28 rounded-full border border-accent/7 rotate-[-18deg]" />
          <div className="absolute bottom-[-10%] left-[3%] w-20 h-64 bg-accent/6 rounded-full rotate-[14deg]" />
        </div>

        <div className="container-custom px-6 md:px-14 lg:px-20 py-24 md:py-36 relative z-10">
          <div className="max-w-3xl">
            <motion.div {...fadeUp(0)}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-px bg-accent" />
                <span className="text-accent text-[10px] tracking-[0.45em] uppercase font-bold">
                  {t("ctaEyebrow")}
                </span>
              </div>

              <h2 className="font-serif font-light text-[clamp(48px,8vw,110px)] text-cream uppercase leading-[0.85] tracking-tighter mb-8">
                {t("ctaH1")}<br />
                <em className="text-accent italic not-italic">{t("ctaH2")}</em>
              </h2>

              <p className="text-[clamp(14px,1.6vw,18px)] text-cream/50 font-light mb-12 max-w-md">
                {t("ctaBody")}
              </p>

              <motion.div {...fadeUp(0.15)} className="flex flex-wrap items-center gap-5">
                <Link
                  href="#booking"
                  className="inline-flex items-center gap-3 px-9 py-5 rounded-full text-[12px] tracking-[0.2em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-[0_12px_40px_rgba(187,138,60,0.4)]"
                >
                  {t("ctaBtn")}
                  <span className="text-[9px]">→</span>
                </Link>
                <Link
                  href={`/${locale}`}
                  className="inline-flex items-center gap-2 text-cream/40 hover:text-accent transition-colors duration-300 text-[12px] tracking-[0.2em] uppercase font-medium no-underline"
                >
                  ← Back to Home
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
