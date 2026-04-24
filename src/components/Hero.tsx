"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Slides for full-bleed background ─── */
const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    label: "Weddings",
  },
  {
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    label: "Corporate Events",
  },
  {
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    label: "Private Galas",
  },
];

/* ─── Bottom capsule thumbnails (separate images) ─── */
const THUMBS = [
  {
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
    label: "Dining",
  },
  {
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
    label: "Events",
  },
  {
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    label: "Florals",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      5500
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-[#1a0f27]">

      {/* ══════════════════════════════════════
          BG LAYER — Full-bleed cinematic image
          ══════════════════════════════════════ */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.68, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[current].img}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Radial vignette — dark at edges, image shines in centre */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 75% at 50% 42%, transparent 10%, rgba(26,15,39,0.45) 55%, rgba(26,15,39,0.9) 100%)",
          }}
        />

        {/* Bottom rise — keeps lower text readable */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%]"
          style={{
            background:
              "linear-gradient(to top, #1a0f27 0%, rgba(26,15,39,0.9) 25%, rgba(26,15,39,0.55) 55%, transparent 100%)",
          }}
        />

        {/* Ambient light blobs — Modern Dark Cinema technique */}
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-violet/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[15%] w-[380px] h-[380px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" />
      </div>

      {/* ══════════════════════════════════════
          DECORATIVE CAPSULE SHAPES
          ══════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right corner — outline capsule */}
        <motion.div
          initial={{ opacity: 0, y: -30, x: 30 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
          className="absolute -top-16 -right-10 w-[130px] h-[380px] rounded-full border-2 border-accent/20 rotate-[-22deg] hidden lg:block"
        />
        {/* Thin inner outline — layered depth */}
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.9, delay: 0.65, ease: "easeOut" }}
          className="absolute top-4 right-[80px] w-[70px] h-[200px] rounded-full border border-accent/12 rotate-[-22deg] hidden xl:block"
        />
        {/* Bottom-left — filled gold capsule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="absolute -bottom-10 -left-6 w-[90px] h-[260px] rounded-full bg-accent/14 rotate-[22deg] hidden md:block"
        />
        {/* Bottom-left — inner outline */}
        <div className="absolute bottom-16 left-12 w-[50px] h-[140px] rounded-full border border-white/8 rotate-[22deg] hidden lg:block" />
      </div>

      {/* ══════════════════════════════════════
          CENTRED HERO CONTENT
          ══════════════════════════════════════ */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center text-cream px-6 pt-24 pb-48 md:pb-52">

        {/* Eyebrow — with flanking lines */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center justify-center gap-3 mb-8 md:mb-10"
        >
          <div className="w-10 md:w-14 h-px bg-accent/55" />
          <span className="text-accent text-[9.5px] md:text-[10px] tracking-[0.52em] uppercase font-bold">
            Catering &amp; Event Planning
          </span>
          <div className="w-10 md:w-14 h-px bg-accent/55" />
        </motion.div>

        {/* GIANT serif headline — type-as-hero */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="font-serif font-light tracking-tight leading-[0.84] uppercase text-cream text-[clamp(58px,10.5vw,148px)]"
        >
          Luxury,
          <br />
          <em className="text-accent italic not-italic">plated.</em>
        </motion.h1>

        {/* Thin gold separator line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.38, ease: [0.19, 1, 0.22, 1] }}
          className="w-20 h-px bg-accent my-6 md:my-7 origin-center"
        />

        {/* Secondary headline — italic serif */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45 }}
          className="font-serif italic font-light text-[clamp(20px,3.8vw,46px)] text-cream/75 tracking-[-0.02em] leading-snug"
        >
          Events, composed.
        </motion.p>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.56 }}
          className="text-[clamp(14px,1.4vw,16px)] text-cream/50 leading-relaxed max-w-sm md:max-w-md mt-6 mb-10 md:mb-12 font-light"
        >
          A full-service catering and event house — from intimate weddings to
          grand corporate evenings — across Saudi Arabia and beyond.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.66 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#book"
            className="inline-flex items-center justify-center gap-2 px-10 py-[17px] rounded-full text-[10px] tracking-[0.28em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-[1.04] active:scale-95 shadow-[0_10px_40px_rgba(187,138,60,0.5)] cursor-pointer"
          >
            Book an event <span className="text-[9px]">→</span>
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-10 py-[17px] rounded-full text-[10px] tracking-[0.28em] uppercase font-bold bg-white/7 text-cream no-underline border border-white/22 backdrop-blur-sm transition-all duration-300 hover:bg-white/14 active:scale-95 cursor-pointer"
          >
            Our services
          </Link>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          BOTTOM STRIP — Capsule thumbnails
          ══════════════════════════════════════ */}
      <div className="absolute bottom-10 md:bottom-12 inset-x-0 px-6 md:px-14 lg:px-20 flex items-end justify-between gap-4">

        {/* Left: three clickable capsule image cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.78 }}
          className="flex items-end gap-2 md:gap-3"
        >
          {THUMBS.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setCurrent(i)}
              aria-label={t.label}
              className="relative group cursor-pointer bg-transparent border-none p-0 flex-shrink-0 focus-visible:outline-accent"
              style={{ width: 52, height: 88 }}
            >
              {/* Capsule shape */}
              <div
                className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-400 ${
                  current === i
                    ? "border-2 border-accent scale-110 shadow-[0_8px_24px_rgba(187,138,60,0.45)]"
                    : "border border-white/20 scale-100 opacity-60 group-hover:opacity-90 group-hover:scale-105"
                }`}
              >
                <Image
                  src={t.img}
                  alt={t.label}
                  fill
                  className="object-cover"
                  sizes="52px"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    current === i ? "bg-primary/10" : "bg-primary/35"
                  }`}
                />
              </div>
              {/* Label below capsule */}
              <span
                className={`absolute -bottom-5 left-1/2 -translate-x-1/2 text-[7px] tracking-[0.28em] uppercase font-bold whitespace-nowrap transition-colors duration-300 ${
                  current === i ? "text-accent" : "text-cream/35"
                }`}
              >
                {t.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Centre: scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="hidden md:flex flex-col items-center gap-2"
        >
          {/* Animated scroll pill */}
          <div className="relative w-[22px] h-[36px] rounded-full border border-cream/25 flex items-start justify-center pt-[6px]">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-[4px] h-[4px] rounded-full bg-accent"
            />
          </div>
          <span className="text-[7.5px] tracking-[0.42em] uppercase text-cream/28">
            Scroll
          </span>
        </motion.div>

        {/* Right: 14-yr badge + established year */}

      </div>

      {/* ══════════════════════════════════════
          GOLD BOTTOM BAND
          ══════════════════════════════════════ */}
      <div className="relative z-10 h-10 md:h-12 bg-accent flex-shrink-0 flex items-center justify-center gap-0 px-6">
        <span className="text-[8px] md:text-[8.5px] tracking-[0.38em] uppercase text-primary/62 font-bold text-center">
          Weddings&nbsp;&nbsp;·&nbsp;&nbsp;Corporate&nbsp;&nbsp;·&nbsp;&nbsp;Private Dinners&nbsp;&nbsp;·&nbsp;&nbsp;Galas&nbsp;&nbsp;·&nbsp;&nbsp;Buffets
        </span>
      </div>
    </section>
  );
}
