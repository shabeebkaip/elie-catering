"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ── Three headline pillars ── */
const pillars = [
  {
    t: "A single point of contact",
    d: "One producer from first call to last candle. No vendor seams, no coordination gaps — just one voice carrying your vision from concept to execution.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "In-house craftspeople",
    d: "Chefs, florists, service — trained under one roof, to one standard.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Fourteen years of memory",
    d: "Institutional knowledge you can only build by doing this for a long time. We've seen every scenario — and built systems for each one.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  },
];

/* ── Six expertise cards ── */
const expertise = [
  {
    t: "Unparalleled expertise",
    d: "Years of experience delivering excellence in event management.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
  },
  {
    t: "Luxury & elegance",
    d: "Luxury in every detail — from concept to the final presentation.",
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
  },
  {
    t: "Customized solutions",
    d: "Every event built from a blank page — crafted exactly for you.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
  },
  {
    t: "Culinary excellence",
    d: "Seasonal menus by the chef's notebook. No dish served twice the same.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
  },
  {
    t: "Seamless execution",
    d: "One timeline, one standard. The seams between vendors disappear.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
  },
  {
    t: "Commitment to quality",
    d: "Named farmers, decade-long suppliers, staff trained in-house.",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.19, 1, 0.22, 1] as number[] },
});

export default function WhyChooseUs() {
  return (
    <div id="why-us" className="overflow-hidden">

      {/* ── Arch transition: CoreValues cream → dark primary ── */}
      <div className="bg-cream">
        <div className="h-16 md:h-24 bg-primary rounded-t-[80px] md:rounded-t-[120px]" />
      </div>

      <section className="relative bg-primary text-cream overflow-hidden">

        {/* ── Ambient background capsule shapes ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-right Hanging Gold Capsules (User requested) */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="absolute z-20 top-[-200px] right-[15%] w-[120px] h-[620px] rounded-full bg-accent/15 rotate-[0deg] border border-accent/20"
          />
          <motion.div
            initial={{ opacity: 0, y: -120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.4 }}
            className="absolute top-[-150px] right-[4%] w-[80px] h-[540px] rounded-full bg-accent/10 rotate-[0deg] border border-accent/15"
          />

          <div className="absolute top-[8%] right-[14%] w-16 h-64 border border-accent/8 rounded-full rotate-[-28deg]" />
          <div className="absolute bottom-[22%] left-[-4%] w-24 h-96 bg-white/3 rounded-full rotate-[24deg]" />
          <div className="absolute bottom-[8%] right-[28%] w-10 h-28 border border-white/6 rounded-full rotate-[-16deg]" />
        </div>

        <div className="container-custom px-6 md:px-14 lg:px-20 relative z-10">

          {/* ════════════════════════════════════
              HEADER
              ════════════════════════════════════ */}
          <div className="pt-12 md:pt-16 pb-12 md:pb-14">
            <motion.div {...fadeUp(0)}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-accent/50" />
                <span className="text-accent text-[9px] tracking-[0.42em] uppercase font-bold">Our Difference</span>
              </div>
              <div className="flex items-start gap-4 md:gap-6">

                <div>
                  <h2 className="font-serif font-light tracking-tight leading-[0.88] text-cream text-[clamp(48px,8vw,106px)]">
                    Why<br />
                    <em className="text-accent italic">Choose Us.</em>
                  </h2>
                  <p className="mt-5 text-[clamp(14px,1.4vw,16px)] leading-relaxed text-cream/45 font-light max-w-lg">
                    Choosing Elie Catering means selecting a partner who understands
                    every nuance of crafting unforgettable events.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ════════════════════════════════════
              BENTO GRID — asymmetric, 3 pillars
              Desktop: col-span / row-span bento
              Mobile: single-column stack
              ════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5"
            style={{ gridAutoRows: "auto" }}
          >

            {/* ─────────────────────────────────
                CARD A — Hero 2×2
                Large capsule image + pillar 1
                ───────────────────────────────── */}
            <motion.div
              {...fadeUp(0.06)}
              className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-white/8 group cursor-default min-h-[420px] lg:min-h-[520px]"
              style={{
                background: "linear-gradient(145deg, rgba(36,24,52,0.97) 0%, rgba(22,14,34,0.99) 100%)",
              }}
            >
              {/* Tall arch capsule image — left portion (desktop) */}
              <div className="absolute left-7 top-7 bottom-7 w-[42%] hidden lg:block">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative h-full w-full overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.45)]"
                  style={{ borderRadius: "9999px 9999px 52px 52px" }}
                >
                  <Image
                    src={pillars[0].img}
                    alt={pillars[0].t}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-primary/55" />
                  {/* Inner capsule overlay accent */}
                  <div className="absolute top-5 right-5 w-8 h-16 rounded-full border border-accent/30 rotate-[12deg]" />
                </motion.div>
              </div>

              {/* Mobile top image */}
              <div className="relative lg:hidden w-full h-52">
                <Image
                  src={pillars[0].img}
                  alt={pillars[0].t}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/90" />
              </div>

              {/* Text — right column */}
              <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[55%] flex flex-col justify-end lg:justify-center p-6 lg:pr-9 lg:pl-5">

                <h3 className="font-sans font-black text-cream text-[clamp(18px,2vw,24px)] uppercase tracking-tight leading-tight mt-1 group-hover:text-accent transition-colors duration-400">
                  A single point<br className="hidden lg:block" /> of contact
                </h3>
                <p className="text-cream/46 text-[13px] md:text-[14px] leading-relaxed mt-3 max-w-[300px]">
                  {pillars[0].d}
                </p>
                {/* Dot trail */}
                <div className="mt-5 flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/15" />
                </div>
              </div>

              {/* Decorative capsule shapes on card */}
              <div className="absolute top-5 right-5 w-9 h-20 rounded-full border border-accent/16 rotate-[14deg] hidden lg:block" />
              <div className="absolute bottom-6 right-16 w-5 h-11 rounded-full bg-accent/8 rotate-[-8deg] hidden lg:block" />
            </motion.div>

            {/* ─────────────────────────────────
                CARD B — Gold stats (col 3, tall)
                ───────────────────────────────── */}
            {/* CARD B — Cinematic Visual Card (Replacing Stats) */}
            <motion.div
              {...fadeUp(0.2)}
              className="lg:row-span-2 relative rounded-3xl overflow-hidden bg-accent/10 border border-accent/20 group cursor-default min-h-[300px] lg:min-h-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                alt="Excellence"
                fill
                className="object-cover transition-transform duration-[3s] group-hover:scale-125 opacity-80"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700" />
              {/* Internal Arch Frame */}
              <div className="absolute inset-4 rounded-[64px] border border-white/20 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-center">
                 <span className="font-serif italic text-accent text-2xl tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Crafted Perfection.
                 </span>
              </div>
            </motion.div>

            {/* ─────────────────────────────────
                CARD C — Pillar 2 glass card
                ───────────────────────────────── */}
            <motion.div
              {...fadeUp(0.12)}
              className="relative rounded-3xl overflow-hidden border border-white/8 group hover:border-accent/28 transition-all duration-400 cursor-default min-h-[200px]"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              {/* Floating arch capsule image top-right */}
              <div className="absolute top-5 right-5">
                <div
                  className="relative w-14 h-20 overflow-hidden border-2 border-white/14 shadow-xl group-hover:border-accent/30 transition-all duration-400"
                  style={{ borderRadius: "9999px 9999px 14px 14px" }}
                >
                  <Image
                    src={pillars[1].img}
                    alt={pillars[1].t}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="56px"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/25" />
                </div>
              </div>

              <div className="p-6 h-full flex flex-col justify-between min-h-[200px]">

                <div>
                  <h3 className="font-sans font-black text-cream text-[14px] uppercase tracking-[0.04em] leading-tight group-hover:text-accent transition-colors duration-300">
                    In-house<br />craftspeople
                  </h3>
                  <p className="text-cream/40 text-[12px] leading-relaxed mt-2">
                    {pillars[1].d}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ─────────────────────────────────
                CARD D — Pillar 3 (col 2, row 2)
                Pairs with Card C for clean row
                ───────────────────────────────── */}
            <motion.div
              {...fadeUp(0.18)}
              className="relative rounded-3xl overflow-hidden border border-white/7 group hover:border-accent/22 transition-all duration-400 cursor-default min-h-[200px]"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {/* Arch capsule image — top right */}
              <div className="absolute top-5 right-5">
                <div
                  className="relative w-14 h-20 overflow-hidden border-2 border-accent/22 shadow-xl group-hover:border-accent/42 transition-all duration-400"
                  style={{ borderRadius: "9999px 9999px 14px 14px" }}
                >
                  <Image
                    src={pillars[2].img}
                    alt={pillars[2].t}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="56px"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/25" />
                </div>
              </div>

              {/* Background capsule shape */}
              <div className="absolute -bottom-4 -right-4 w-16 h-32 rounded-full bg-accent/6 rotate-[-14deg]" />

              <div className="p-6 h-full flex flex-col justify-between min-h-[200px]">

                <div>
                  <h3 className="font-sans font-black text-cream text-[14px] uppercase tracking-[0.04em] leading-tight group-hover:text-accent transition-colors duration-300 mb-2">
                    Fourteen years<br />of memory
                  </h3>
                  <p className="text-cream/38 text-[12px] leading-relaxed">
                    {pillars[2].d}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════
              EXPERTISE CARDS — glass grid 3×2
              ════════════════════════════════════ */}
          <div className="mt-5 pb-20 md:pb-28 lg:pb-32">

            {/* Sub-header divider */}
            <motion.div
              {...fadeUp(0)}
              className="flex items-center gap-4 my-10 md:my-14"
            >
              <div className="w-5 h-px bg-accent/40" />
              <span className="text-[9px] tracking-[0.42em] uppercase text-cream/28 font-bold">
                Areas of Expertise
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {expertise.map((e, i) => (
                <motion.div
                  key={e.t}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  whileHover={{ y: -7 }}
                  className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-accent/24 transition-all duration-400 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  {/* Image strip */}
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={e.img}
                      alt={e.t}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/20 to-primary/82" />



                    {/* Tiny capsule accent in image */}
                    <div className="absolute top-3 right-3 w-5 h-9 rounded-full border border-white/24 rotate-[10deg]" />
                  </div>

                  {/* Body */}
                  <div className="px-5 py-4 pb-5">
                    <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.06em] text-cream group-hover:text-accent transition-colors duration-300 mb-1.5 leading-tight">
                      {e.t}
                    </h3>
                    <p className="text-[11px] md:text-[12px] leading-relaxed text-cream/40 font-light">
                      {e.d}
                    </p>
                  </div>

                  {/* Bottom gold stripe on hover */}
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-accent/0 group-hover:bg-accent/45 transition-all duration-400" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
