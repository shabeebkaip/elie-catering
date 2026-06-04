"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const PILLAR_IMGS = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
];

const EXPERTISE_IMGS = [
  "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
});

export default function WhyChooseUs() {
  const t = useTranslations("whyUs");
  const pillars = t.raw("pillars") as { t: string; d: string }[];
  const expertise = t.raw("expertise") as { t: string; d: string }[];

  return (
    <div id="why-us" className="overflow-hidden">

      {/* ── Arch transition: CoreValues cream → dark primary ── */}
      <div className="bg-surface">
        <div className="h-16 md:h-24 bg-primary rounded-t-[80px] md:rounded-t-[120px]" />
      </div>

      <section className="relative bg-primary text-cream overflow-hidden">

        {/* ── Ambient background capsule shapes ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-right outline capsules — desktop only, subtle */}
          <div className="absolute top-0 right-[4%] hidden xl:flex flex-row items-start gap-0 z-20">
            <div className="w-[60px] h-[380px] rounded-full border border-[#c38ed8]/12" />
            <div className="w-[90px] h-[460px] rounded-full border border-[#c38ed8]/16" />
          </div>

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
                <span className="text-accent text-[9px] tracking-[0.42em] uppercase font-bold">{t("eyebrow")}</span>
              </div>
              <div className="flex items-start gap-4 md:gap-6">

                <div>
                  <h2 className="font-serif font-light tracking-tight leading-[0.88] text-cream text-[clamp(48px,8vw,106px)]">
                    {t("headline1")}<br />
                    <em className="text-accent italic">{t("headline2")}</em>
                  </h2>
                  <p className="mt-5 text-[clamp(14px,1.4vw,16px)] leading-relaxed text-cream/45 font-light max-w-lg">
                    {t("sub")}
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
              {/* Tall arch capsule image — logical start portion (desktop) */}
              <div className="absolute start-7 top-7 bottom-7 w-[42%] hidden lg:block">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative h-full w-full overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.45)]"
                  style={{ borderRadius: "9999px 9999px 52px 52px" }}
                >
                  <Image
                    src={PILLAR_IMGS[0]}
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
                  src={PILLAR_IMGS[0]}
                  alt={pillars[0].t}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/90" />
              </div>

              {/* Text — logical end column */}
              <div className="relative lg:absolute lg:end-0 lg:top-0 lg:bottom-0 lg:w-[55%] flex flex-col justify-end lg:justify-center p-6 lg:pe-9 lg:ps-5">

                <h3 className="font-sans font-black text-cream text-[clamp(18px,2vw,24px)] uppercase tracking-tight leading-tight mt-1 group-hover:text-accent transition-colors duration-400">
                  {pillars[0].t}
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
              <div className="absolute top-5 end-5 w-9 h-20 rounded-full border border-accent/16 rotate-[14deg] hidden lg:block" />
              <div className="absolute bottom-6 end-16 w-5 h-11 rounded-full bg-accent/8 rotate-[-8deg] hidden lg:block" />
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
                    {t("craftedPerfection")}
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
              {/* Floating arch capsule image — logical end (right LTR, left RTL) */}
              <div className="absolute top-5 end-5">
                <div
                  className="relative w-14 h-20 overflow-hidden border-2 border-white/14 shadow-xl group-hover:border-accent/30 transition-all duration-400"
                  style={{ borderRadius: "9999px 9999px 14px 14px" }}
                >
                  <Image
                    src={PILLAR_IMGS[1]}
                    alt={pillars[1].t}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="56px"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/25" />
                </div>
              </div>

              <div className="p-6 pe-20 h-full flex flex-col justify-between min-h-[200px]">

                <div>
                  <h3 className="font-sans font-black text-cream text-[14px] uppercase tracking-[0.04em] leading-tight group-hover:text-accent transition-colors duration-300">
                    {pillars[1].t}
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
              {/* Arch capsule image — logical end (right LTR, left RTL) */}
              <div className="absolute top-5 end-5">
                <div
                  className="relative w-14 h-20 overflow-hidden border-2 border-accent/22 shadow-xl group-hover:border-accent/42 transition-all duration-400"
                  style={{ borderRadius: "9999px 9999px 14px 14px" }}
                >
                  <Image
                    src={PILLAR_IMGS[2]}
                    alt={pillars[2].t}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="56px"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/25" />
                </div>
              </div>

              {/* Background capsule shape */}
              <div className="absolute -bottom-4 -end-4 w-16 h-32 rounded-full bg-accent/6 rotate-[-14deg]" />

              <div className="p-6 pe-20 h-full flex flex-col justify-between min-h-[200px]">

                <div>
                  <h3 className="font-sans font-black text-cream text-[14px] uppercase tracking-[0.04em] leading-tight group-hover:text-accent transition-colors duration-300 mb-2">
                    {pillars[2].t}
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
                {t("areasLabel")}
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
                      src={EXPERTISE_IMGS[i]}
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
