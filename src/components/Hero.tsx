"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ElieLogo from "./ElieLogo";

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
    <section className="relative min-h-[100svh] overflow-hidden bg-primary text-cream">

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
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 px-6 md:px-16 lg:px-20 pt-32 md:pt-40 lg:pt-30 pb-20 lg:pb-24">

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <ElieLogo size={56} color="#C89B3C" />
          <div className="mt-4 text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-cream opacity-70">
            Catering &nbsp;&amp;&nbsp; Event Planning
          </div>

          <h1 className="font-sans font-extrabold tracking-tight leading-[0.95] uppercase text-cream my-8 lg:my-10 max-w-[680px] text-[clamp(40px,10vw,100px)]">
            Luxury,{" "}
            <span className="text-accent">plated.</span>
            <br />
            Events,{" "}
            <span className="font-serif italic font-light lowercase tracking-[-0.05em] normal-case">
              composed.
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-cream/80 max-w-[520px] mb-10 md:mb-12">
            A full-service catering and event house crafting sophisticated,
            memorable experiences — from intimate weddings to corporate
            evenings — across Saudi Arabia and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="#book"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm tracking-[0.1em] uppercase font-medium bg-accent text-primary no-underline transition-all hover:scale-105 active:scale-95"
            >
              Book an event →
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm tracking-[0.1em] uppercase font-medium bg-transparent text-cream no-underline border border-cream/40 transition-all hover:bg-cream/10 active:scale-95"
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
          className="relative flex justify-center lg:justify-end h-[min(450px,80vw)] lg:h-[580px]"
        >
          {/* Frosted Pillar Connection */}
          <div
            className="absolute hidden md:block"
            style={{
              top: -160, left: "15%",
              width: "2px", height: "100%",
              background: "linear-gradient(to bottom, rgba(200,155,60,0) 0%, rgba(200,155,60,0.6) 50%, rgba(200,155,60,1) 100%)",
              zIndex: 1,
            }}
          />
          <div
            className="absolute hidden md:block"
            style={{
              top: -160, left: "10%",
              width: "40px", height: "80%",
              background: "linear-gradient(170deg, rgba(180,165,220,0.3) 0%, rgba(200,185,240,0.15) 55%, rgba(160,140,210,0.02) 100%)",
              borderRadius: "0 0 9999px 9999px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "none",
            }}
          />

          {/* Capsule image container */}
          <div className="relative w-[min(280px,50vw)] h-[min(420px,75vw)] lg:w-[320px] lg:h-[500px] rounded-full overflow-hidden rotate-[12deg] shadow-2xl border-4 border-primary/20">
            <div className="absolute inset-0 -rotate-[12deg] scale-[1.3]">
              <Image
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop"
                alt="Luxury catering plate"
                fill priority
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 320px"
              />
            </div>
          </div>

          {/* 14 Years badge */}
          <div 
            className="absolute -left-4 md:left-0 bottom-[10%] w-[min(140px,25vw)] h-[min(140px,25vw)] lg:w-[160px] lg:h-[160px] rounded-full bg-accent text-primary flex flex-col items-center justify-center font-serif shadow-xl z-10"
            style={{
              animation: "elFloat 9s ease-in-out infinite",
              ["--r" as string]: "-8deg",
            } as React.CSSProperties}
          >
            <span className="text-3xl md:text-4xl lg:text-5xl italic font-light leading-none">14</span>
            <span className="text-[8px] md:text-[10px] tracking-[0.2em] uppercase mt-2 font-sans font-semibold text-center">
              Years of craft
            </span>
          </div>
        </motion.div>
      </div>

      {/* Gold bottom band */}
      <div className="h-10 md:h-12 bg-accent relative z-10" />
    </section>
  );
}
