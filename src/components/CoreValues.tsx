"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    n: "01", t: "Excellence",
    d: "We strive for perfection in every detail, from planning to execution.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  },
  {
    n: "02", t: "Innovation",
    d: "Creativity and fresh ideas are at the heart of everything we create.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    n: "03", t: "Luxury",
    d: "High-end experiences that exude sophistication, elegance and distinction.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    n: "04", t: "Integrity",
    d: "Trust and transparency are the foundation of every client relationship.",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
  },
  {
    n: "05", t: "Client-Centered",
    d: "Every event is uniquely tailored to reflect your vision and preferences.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
  },
  {
    n: "06", t: "Discretion",
    d: "The evening belongs to you. We are the quiet architects behind it.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
];

export default function CoreValues() {
  return (
    <section className="relative bg-cream overflow-hidden">

      {/* ── Background capsule decorations ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 0.07, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="absolute top-[-8%] right-[-2%] w-35 h-150 bg-primary rounded-full rotate-[-36deg]"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.12, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.15 }}
          className="absolute top-[5%] right-[-7%] w-27.5 h-120 bg-accent rounded-full rotate-[-36deg]"
        />
        <div className="absolute bottom-[-4%] left-[-3%] w-25 h-85 bg-accent/5 rounded-full rotate-28" />
        <div className="absolute top-[40%] right-[20%] w-15 h-45 border border-primary/8 rounded-full rotate-[-20deg]" />
      </div>

      <div className="container-custom px-6 md:px-14 lg:px-20 relative z-10">

        {/* ══════════════════════════════════
            SECTION HEADER — Editorial Grid
            ══════════════════════════════════ */}
        <div className="pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-20 items-end">

          {/* Left: eyebrow + oversized headline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-[9px] tracking-[0.42em] uppercase font-bold">
                What We Stand For
              </span>
            </div>

            {/* Exaggerated Minimalism: section number + title as single editorial unit */}
            <div className="flex items-start gap-4 md:gap-6">
              <span className="font-serif text-[clamp(40px,6vw,72px)] italic text-accent/20 leading-none font-light select-none pt-2">
                04
              </span>
              <h2 className="font-serif font-light tracking-tight leading-[0.87] uppercase text-primary text-[clamp(52px,9vw,112px)]">
                Core<br />
                <em className="text-accent">Values</em>
              </h2>
            </div>

            <p className="mt-8 text-[clamp(14px,1.5vw,16px)] leading-relaxed text-body/65 font-light max-w-125">
              Six pillars that guide every event we craft — from the first sketch
              to the last petal.
            </p>
          </motion.div>

          {/* Right: tall arch capsule image */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div
              className="relative w-full max-w-65 mx-auto overflow-hidden shadow-[0_40px_80px_rgba(44,30,57,0.15)] border-10 border-white"
              style={{ aspectRatio: "3/4", borderRadius: "9999px 9999px 48px 48px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
                alt="Elegant catering setup"
                fill
                className="object-cover"
                sizes="260px"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/18" />
            </div>

            {/* Floating accent circle */}
            <motion.div
              className="absolute -bottom-3 -right-4 w-21 h-21 rounded-full overflow-hidden border-4 border-accent/50 shadow-lg"
              style={{
                animation: "elFloat 10s ease-in-out infinite",
                ["--r" as string]: "0deg",
              } as React.CSSProperties}
            >
              <Image
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop"
                alt="Culinary detail"
                fill
                className="object-cover"
                sizes="84px"
              />
            </motion.div>

            {/* Outline capsule decorative */}
            <div
              className="absolute -top-6 -left-5 w-13 h-30 border border-accent/20"
              style={{ borderRadius: "9999px", transform: "rotate(-18deg)" }}
            />
          </motion.div>
        </div>

        {/* ══════════════════════════════════
            VALUE STRIPS — Editorial Rows
            Each row inverts on hover:
            cream → primary, text flips
            ══════════════════════════════════ */}
        <div className="border-t border-primary/10 pb-16 md:pb-20 lg:pb-24">
          {values.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative flex items-center gap-5 md:gap-8 lg:gap-10 py-6 md:py-7 border-b border-primary/8 cursor-default overflow-hidden rounded-2xl px-3 md:px-5 -mx-3 md:-mx-5 transition-colors duration-500 hover:bg-primary"
            >

              {/* ── Number ── */}
              <span className="font-serif text-[clamp(26px,4vw,46px)] italic font-light select-none shrink-0 w-14 md:w-18 text-accent/35 group-hover:text-accent/70 transition-colors duration-500">
                {v.n}
              </span>

              {/* ── Thin vertical rule ── */}
              <div className="w-px self-stretch bg-primary/10 shrink-0 group-hover:bg-accent/20 transition-colors duration-500" />

              {/* ── Title + Description ── */}
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-[clamp(15px,2vw,21px)] font-black uppercase tracking-[-0.01em] text-primary group-hover:text-cream transition-colors duration-500 mb-1 md:mb-1.5">
                  {v.t}
                </h3>
                <p className="text-[clamp(12px,1.3vw,14px)] leading-relaxed text-body/60 group-hover:text-cream/65 transition-colors duration-500 font-light">
                  {v.d}
                </p>
              </div>

              {/* ── Small arch capsule image (md+) ── */}
              <motion.div
                className="shrink-0 hidden md:block"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="relative w-18 h-25 overflow-hidden border-[3px] border-white group-hover:border-accent/40 shadow-md group-hover:shadow-xl transition-all duration-500"
                  style={{ borderRadius: "9999px 9999px 20px 20px" }}
                >
                  <Image
                    src={v.img}
                    alt={v.t}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="72px"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/20 group-hover:to-primary/10 transition-all duration-300" />
                </div>
              </motion.div>

              {/* ── Hover accent spark ── */}
              <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-4 group-hover:translate-x-0 text-accent text-base shrink-0">
                ✦
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
