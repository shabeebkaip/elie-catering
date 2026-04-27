"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const BG_IMAGES = [
  "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % BG_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-primary text-cream flex flex-col">

      {/* ── Decorative layer (clipped) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sliding background images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image src={BG_IMAGES[current]} alt="" fill priority className="object-cover" sizes="100vw" />
          </motion.div>
        </AnimatePresence>

        {/* Gold capsule — top right */}
        <div
          className="hidden lg:block absolute -top-20 -right-10 w-[220px] h-[420px] rounded-full bg-accent opacity-90"
          style={{
            animation: "elFloat 10s ease-in-out infinite",
            ["--r" as string]: "-18deg",
          } as React.CSSProperties}
        />

        {/* Dark accent capsule — bottom left */}
        <div
          className="hidden lg:block absolute -bottom-16 left-[200px] w-[140px] h-[300px] rounded-full bg-purple-deep rotate-[25deg] opacity-60"
        />
      </div>

      {/* ── Content grid ── */}
      <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 px-6 md:px-16 lg:px-20 pt-32 md:pt-40 lg:pt-30 pb-20 lg:pb-24">

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Logo removed from Hero as requested */}
          
          <div className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-accent font-bold">
            Catering &nbsp;&amp;&nbsp; Event Planning
          </div>

          <h1 className="font-serif font-light tracking-tight leading-[0.85] uppercase text-cream my-10 md:my-12 max-w-[720px] text-[clamp(48px,10vw,110px)]">
            Luxury,{" "}
            <span className="text-accent italic">plated.</span>
            <br />
            Events,{" "}
            <span className="font-serif italic font-light lowercase tracking-[-0.05em] normal-case">
              composed.
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-cream/70 max-w-[520px] mb-12 md:mb-14 font-light">
            A full-service catering and event house crafting sophisticated,
            memorable experiences — from intimate weddings to corporate
            evenings — across Saudi Arabia and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link
              href="#book"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold bg-accent text-primary no-underline transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              Book an event →
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold bg-transparent text-cream no-underline border border-cream/30 transition-all hover:bg-cream/10 active:scale-95"
            >
              Explore services
            </Link>
          </div>
        </motion.div>

        {/* Right: capsule image + badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end h-[min(450px,80vw)] lg:h-[620px]"
        >
          {/* Capsule image container */}
          <div className="relative w-[min(300px,55vw)] h-[min(450px,80vw)] lg:w-[360px] lg:h-[550px] rounded-full overflow-hidden rotate-[12deg] shadow-2xl border-[12px] border-white/10 bg-white/5">
            <div className="absolute inset-0 -rotate-[12deg] scale-[1.35]">
              <Image
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop"
                alt="Luxury catering plate"
                fill priority
                className="object-cover"
                sizes="(max-width: 768px) 55vw, 360px"
              />
            </div>
          </div>

        </motion.div>
      </div>

      {/* Gold bottom band */}
      <div className="h-10 md:h-12 bg-accent relative z-10" />
    </section>
  );
}
