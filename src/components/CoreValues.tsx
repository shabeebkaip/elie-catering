"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    t: "Excellence",
    d: "We strive for perfection in every detail, from planning to execution.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Innovation",
    d: "Creativity and fresh ideas are at the heart of everything we create.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Luxury",
    d: "High-end experiences that exude sophistication, elegance and distinction.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Integrity",
    d: "Trust and transparency are the foundation of every client relationship.",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
  },
  {
    t: "Client-Centered",
    d: "Every event is uniquely tailored to reflect your vision and preferences.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
  },
  {
    t: "Discretion",
    d: "The evening belongs to you. We are the quiet architects behind it.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: [0.19, 1, 0.22, 1] as number[] },
});

export default function CoreValues() {
  return (
    <section id="values" className="relative bg-cream overflow-hidden py-24 md:py-32 lg:py-44">
      
      {/* ── Background cinematic decorations ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 0.05, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="absolute top-[5%] left-[-5%] w-48 h-[600px] bg-primary rounded-full rotate-[12deg]"
        />
        <div className="absolute top-[40%] right-[5%] w-32 h-32 rounded-full border border-accent/20" />
        <div className="absolute bottom-[-10%] right-[10%] w-24 h-96 bg-accent/6 rounded-full rotate-[-15deg]" />
      </div>

      <div className="container-custom px-6 md:px-14 lg:px-20 relative z-10">
        
        {/* ── Header ── */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-[10px] tracking-[0.45em] uppercase font-bold">
                Our Foundation
              </span>
            </div>
            <h2 className="font-serif font-light text-[clamp(48px,8vw,110px)] text-primary uppercase leading-[0.85] tracking-tighter mb-8">
              The pillars of<br />
              <em className="text-accent italic not-italic">Excellence.</em>
            </h2>
            <p className="text-[clamp(14px,1.5vw,16px)] leading-relaxed text-body/60 font-light max-w-lg">
              Six core principles that guide our craft, ensuring every event we produce is a 
              masterpiece of luxury and precision.
            </p>
          </motion.div>
        </div>

        {/* ── Asymmetric Arch Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className={`group relative overflow-hidden flex flex-col shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                i % 2 === 1 ? "lg:translate-y-12" : ""
              }`}
              style={{ 
                borderRadius: "9999px 9999px 40px 40px",
                minHeight: "480px"
              }}
            >
              {/* Full-bleed image */}
              <div className="absolute inset-0">
                <Image
                  src={v.img}
                  alt={v.t}
                  fill
                  className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              </div>

              {/* Content overlay (Glassmorphism) */}
              <div className="relative mt-auto p-8 pt-24">
                <div className="mb-4">
                  <div className="w-8 h-px bg-accent mb-4 group-hover:w-16 transition-all duration-500" />
                  <h3 className="font-serif text-[clamp(24px,3vw,32px)] italic text-cream leading-tight font-light">
                    {v.t}
                  </h3>
                </div>
                
                <p className="text-[13px] leading-relaxed text-cream/60 font-light max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                  {v.d}
                </p>

                {/* Decorative floating detail */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-[-12deg] group-hover:rotate-0">
                   <span className="text-accent text-xs font-serif italic">✦</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Bottom transition ── */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-cream to-transparent pointer-events-none" />

    </section>
  );
}
