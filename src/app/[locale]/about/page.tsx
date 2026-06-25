"use client";

import { useRef, useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ease = [0.19, 1, 0.22, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, delay, ease },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1.1, delay, ease: "easeOut" as const },
});

/* ── Bilingual hero content ── */
const HERO = {
  en: {
    eyebrow: "About Elie",
    lines: [
      { text: "Crafting Extraordinary", accent: false },
      { text: "Hospitality,",           accent: false },
      { text: "One Celebration at a Time.", accent: true },
    ],
    body: "A luxury event house born in Riyadh. For over 14 years, we have shaped ceremonies, gatherings, and celebrations that endure in memory — guided by craft, precision, and the warmth that only a true hospitality family can offer.",
    founderRole: "Founder & Creative Director",
    cta1: "Discover Our Story",
    cta2: "View Our Services",
  },
  ar: {
    eyebrow: "عن إيلي",
    lines: [
      { text: "نصنع ضيافة",               accent: false },
      { text: "استثنائية،",               accent: false },
      { text: "لكل مناسبة تستحق الذكرى.", accent: true  },
    ],
    body: "بيت فاخر للفعاليات، وُلد في الرياض. على مدار أكثر من 14 عامًا، شكّلنا احتفالات ومراسم وتجمعات راسخة في الذاكرة — بالعناية والدقة والدفء الذي لا تقدمه سوى عائلة ضيافة حقيقية.",
    founderRole: "المؤسس والمدير الإبداعي",
    cta1: "اكتشف قصتنا",
    cta2: "استكشف خدماتنا",
  },
} as const;

/* ── Count-up metric — luxury editorial ── */
function StatMetric({ num, label, delay, isHero = false }: {
  num: string; label: string; delay: number; isHero?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [count, setCount] = useState(0);

  const match = num.match(/^(\d+)(.*)$/);
  const to = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!inView) return;
    const id = setTimeout(() => {
      let startTime: number | null = null;
      const duration = 2400;
      const tick = (ts: number) => {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -7 * progress);
        setCount(Math.round(eased * to));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay * 1000);
    return () => clearTimeout(id);
  }, [inView, to, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.3, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="stat-item flex flex-col items-center text-center py-10 lg:py-14"
    >
      <p className={`stat-num font-serif font-light leading-none ${isHero ? "stat-num-hero" : ""}`}>
        {count}{suffix}
      </p>
      <div className="stat-rule" />
      <p className="stat-lbl">{label}</p>
    </motion.div>
  );
}

const PILLAR_IMGS = [
  "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
];

const BG = "#12092a";
const SURFACE = "#1e1347";
const PRIMARY = "#30205f";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const h = HERO[isRTL ? "ar" : "en"];

  const stats     = t.raw("stats")      as { num: string; label: string }[];
  const pillars   = t.raw("pillars")    as { t: string; d: string }[];
  const milestones = t.raw("milestones") as { year: string; t: string; d: string }[];

  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: BG }}>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
        .about-cta-primary {
          background: linear-gradient(135deg, #c49a42 0%, #d8b05a 50%, #c49a42 100%);
          box-shadow: 0 12px 40px rgba(187,138,60,0.32);
          transition: box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.19,1,0.22,1);
        }
        .about-cta-primary:hover {
          box-shadow: 0 18px 52px rgba(187,138,60,0.52);
          transform: translateY(-2px) scale(1.02);
        }
        .about-cta-primary:active { transform: scale(0.97); }
        .pillar-img  { transition: transform 2.5s cubic-bezier(0.19,1,0.22,1); }
        .pillar-card:hover .pillar-img { transform: scale(1.08); }

        /* ── Stats — luxury editorial typography ── */

        /* Gradient text: polished gold, overhead light on engraved brass */
        .stat-num {
          display: block;
          font-size: clamp(64px, 7.2vw, 100px);
          letter-spacing: -0.01em;
          background: linear-gradient(175deg,
            #d8b468 0%,
            #c49a42 36%,
            #9e7625 62%,
            #c8a048 82%,
            #b89238 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        /* Hero: 500+ Events — the centrepiece, 30% larger */
        .stat-num-hero {
          font-size: clamp(82px, 9.6vw, 132px);
          background: linear-gradient(175deg,
            #e0be78 0%,
            #c8a042 30%,
            #9e7625 56%,
            #cca244 78%,
            #bb8a3c 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        /* Fine engraved rule — feathers into the marble */
        .stat-rule {
          width: 28px;
          height: 1px;
          background: linear-gradient(to right,
            transparent,
            rgba(187,138,60,0.46),
            transparent
          );
          margin: 20px auto 16px;
        }
        /* Label — legible, refined */
        .stat-lbl {
          color: rgba(245,240,234,0.64);
          font-size: 10px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          font-weight: 300;
          max-width: 120px;
          line-height: 1.75;
          transition: color 0.7s ease;
        }
        .stat-item:hover .stat-lbl { color: rgba(245,240,234,0.84); }
        /* Vertical hairline separator between metrics — desktop only */
        .stat-vr {
          width: 1px;
          flex-shrink: 0;
          align-self: stretch;
          margin: 28px 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(187,138,60,0.14) 22%,
            rgba(187,138,60,0.20) 50%,
            rgba(187,138,60,0.14) 78%,
            transparent 100%
          );
        }

        /* ── About Hero — full-bleed portrait background ── */
        .about-hero {
          background-image:
            linear-gradient(90deg,
              rgba(7,5,12,0.98) 0%,
              rgba(7,5,12,0.94) 18%,
              rgba(7,5,12,0.82) 38%,
              rgba(7,5,12,0.54) 56%,
              rgba(7,5,12,0.20) 72%,
              rgba(7,5,12,0.05) 86%,
              transparent 100%
            ),
            radial-gradient(ellipse 52% 68% at 76% 40%, rgba(208,132,26,0.10) 0%, rgba(178,102,16,0.04) 44%, transparent 66%),
            url("/images/about/founder.png");
          background-size: 100% 100%, 100% 100%, cover;
          background-position: 0 0, 0 0, 76% center;
          background-repeat: no-repeat, no-repeat, no-repeat;
        }
        @media (max-width: 1023px) {
          .about-hero {
            background-position: 0 0, 0 0, center 10%;
          }
        }
        .about-hero-rtl {
          background-image:
            linear-gradient(270deg,
              rgba(7,5,12,0.98) 0%,
              rgba(7,5,12,0.94) 18%,
              rgba(7,5,12,0.82) 38%,
              rgba(7,5,12,0.54) 56%,
              rgba(7,5,12,0.20) 72%,
              rgba(7,5,12,0.05) 86%,
              transparent 100%
            ),
            radial-gradient(ellipse 52% 68% at 24% 40%, rgba(208,132,26,0.10) 0%, rgba(178,102,16,0.04) 44%, transparent 66%),
            url("/images/about/founder.png");
          background-size: 100% 100%, 100% 100%, cover;
          background-position: 0 0, 0 0, 24% center;
          background-repeat: no-repeat, no-repeat, no-repeat;
        }
        @media (max-width: 1023px) {
          .about-hero-rtl {
            background-position: 0 0, 0 0, center 10%;
          }
        }
      `}</style>

      <Header />

      {/* ══════════════════════════════════════
          EDITORIAL HERO — full-bleed canvas
          ══════════════════════════════════════ */}
      <section
        className={`about-hero relative overflow-hidden ${isRTL ? "about-hero-rtl" : ""}`}
        style={{ minHeight: "100svh", backgroundColor: "#07050e" }}
      >
        {/* Mobile: bottom-up dark curtain for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none lg:hidden"
          style={{ background: "linear-gradient(to top, rgba(7,5,12,0.97) 0%, rgba(7,5,12,0.88) 34%, rgba(7,5,12,0.56) 56%, rgba(7,5,12,0.14) 72%, transparent 86%)" }}
        />
        {/* Universal top fade — header clearance */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-[2] pointer-events-none"
          style={{ height: "200px", background: "linear-gradient(to bottom, rgba(7,5,12,0.76) 0%, rgba(7,5,12,0.28) 50%, transparent 100%)" }}
        />
        {/* Fine paper grain — soft-light blend, full hero */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[2] pointer-events-none select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.76' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "250px 250px",
            opacity: 0.024,
            mixBlendMode: "soft-light",
          }}
        />
        {/* Marble veining — soft-light blend */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[2] pointer-events-none select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='700'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.022' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23m)'/%3E%3C/svg%3E")`,
            backgroundSize: "700px 700px",
            opacity: 0.013,
            mixBlendMode: "soft-light",
          }}
        />

        {/* Decorative capsule outlines */}
        <div aria-hidden="true" className="absolute top-[24%] right-[44%] w-5 h-36 rounded-full border border-accent/[0.10] rotate-[-22deg] z-[3] pointer-events-none hidden lg:block" />
        <div aria-hidden="true" className="absolute bottom-[22%] left-[2%] w-8 h-24 rounded-full border border-accent/[0.07] rotate-[15deg] z-[3] pointer-events-none hidden lg:block" />

        {/* ── UNIFIED CONTENT — one layout for all breakpoints ── */}
        <div
          className="relative z-[4] flex flex-col justify-end lg:justify-center px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28 pt-32 pb-16 lg:pb-28"
          style={{ minHeight: "100svh" }}
        >
          <div className={`w-full lg:max-w-[50%] ${isRTL ? "lg:ml-auto" : ""}`}>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.18, ease }}
              className="flex items-center gap-4 mb-9"
            >
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-[12px] tracking-[0.38em] uppercase font-bold">{h.eyebrow}</span>
            </motion.div>

            {/* Editorial headline — 3 lines */}
            <div className="mb-9">
              {h.lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.32 + i * 0.12, ease }}
                >
                  <span
                    className={`block font-serif font-light uppercase leading-[0.88] tracking-tighter ${line.accent ? "text-accent" : "text-cream"}`}
                    style={{
                      fontSize: "clamp(36px,5.8vw,88px)",
                      fontStyle: line.accent && !isRTL ? "italic" : "normal",
                    }}
                  >
                    {line.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Gold hairline divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.68, ease }}
              className="w-12 h-px bg-accent/40 mb-8 origin-left"
            />

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.72, ease }}
              className="text-[clamp(13.5px,1.45vw,17px)] text-cream/52 font-light leading-[2.0] max-w-[480px] mb-12 lg:mb-14"
            >
              {h.body}
            </motion.p>

            {/* Founder signature */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.9, ease: "easeOut" }}
              className="flex flex-col gap-2.5 mb-12 lg:mb-16"
            >
              <div className="w-8 h-px bg-accent/35 mb-1" />
              <span className="font-serif italic text-cream/82 text-[19px] font-light leading-none">{t("founderName")}</span>
              <span className="text-accent/50 text-[9.5px] tracking-[0.4em] uppercase mt-2">{h.founderRole}</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.05, ease }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <Link
                href="#story"
                className="about-cta-primary inline-flex items-center gap-2.5 px-8 py-[14px] rounded-full text-[10.5px] tracking-[0.22em] uppercase font-bold text-primary no-underline whitespace-nowrap"
              >
                {h.cta1}
                <span className="opacity-65 text-[10px]">{isRTL ? "←" : "→"}</span>
              </Link>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center gap-2 text-cream/38 hover:text-accent transition-colors duration-300 text-[10.5px] tracking-[0.22em] uppercase font-medium no-underline whitespace-nowrap group"
              >
                {h.cta2}
                <span className="text-[10px] group-hover:translate-x-0.5 transition-transform">{isRTL ? "←" : "→"}</span>
              </Link>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator — desktop only */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className={`absolute bottom-8 hidden lg:flex flex-col items-start gap-2 z-[5] ${isRTL ? "right-14 xl:right-20" : "left-14 xl:left-20"}`}
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent/55 to-transparent" />
          <span className="text-cream/25 text-[9px] tracking-[0.42em] uppercase mt-1">Scroll</span>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          OUR STORY — Luxury Editorial
          ══════════════════════════════════════ */}
      <section
        id="story"
        className="relative overflow-hidden"
        style={{ background: BG }}
      >
        {/* Grain texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.76' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "250px 250px",
            opacity: 0.020,
            mixBlendMode: "soft-light",
          }}
        />
        {/* Marble veining */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='700'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.022' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23m)'/%3E%3C/svg%3E")`,
            backgroundSize: "700px 700px",
            opacity: 0.014,
            mixBlendMode: "soft-light",
          }}
        />
        {/* Ambient warm glow */}
        <div
          aria-hidden="true"
          className="absolute top-[18%] right-[-6%] w-[560px] h-[560px] rounded-full pointer-events-none z-[1]"
          style={{ background: "radial-gradient(ellipse, rgba(187,138,60,0.058) 0%, transparent 70%)" }}
        />
        {/* Ghost Roman numeral */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-4 lg:right-10 font-serif text-cream/[0.028] font-light leading-none select-none pointer-events-none z-[1]"
          style={{ fontSize: "clamp(150px,22vw,300px)" }}
        >I</div>
        {/* Top gold hairline */}
        <div
          className="absolute inset-x-0 top-0 h-px pointer-events-none z-[2]"
          style={{ background: "linear-gradient(to right, transparent 0%, rgba(187,138,60,0.18) 20%, rgba(187,138,60,0.32) 50%, rgba(187,138,60,0.18) 80%, transparent 100%)" }}
        />

        <div className="container-custom px-6 md:px-14 lg:px-20 py-28 md:py-36 lg:py-44 relative z-10">

          {/* Section header — full width */}
          <div className="mb-20 lg:mb-28">
            <motion.div {...fadeUp(0)}>
              <div className="flex items-center gap-4 mb-10 lg:mb-12">
                <div className="w-10 h-px bg-accent" />
                <span className="text-accent text-[12px] tracking-[0.38em] uppercase font-bold">{t("storyEyebrow")}</span>
              </div>
              <h2
                className="font-serif font-light uppercase tracking-tighter"
                style={{ fontSize: "clamp(48px,7.2vw,100px)", lineHeight: 0.85 }}
              >
                <span className="block text-cream">{t("storyH1")}</span>
                <em className="block text-accent not-italic">{t("storyH2")}</em>
              </h2>
            </motion.div>
          </div>

          {/* Two-column: Image (55%) + Text (45%) */}
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-14 lg:gap-20 xl:gap-28 items-start">

            {/* ── Image column ── */}
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease }}
            >
              <div
                className="relative overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[620px]"
                style={{ borderRadius: "28px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=90&w=1600&auto=format&fit=crop"
                  alt="Luxury fine dining — Elie Catering & Event Planning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(12,9,20,0.52) 0%, rgba(12,9,20,0.05) 42%, transparent 66%)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse 72% 44% at 50% 80%, rgba(180,110,18,0.07) 0%, transparent 60%)" }}
                />
              </div>

              {/* Caption tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.28, ease }}
                className="flex items-center gap-3 mt-6"
              >
                <div className="w-5 h-px bg-accent/35" />
                <span className="text-cream/28 text-[9.5px] tracking-[0.38em] uppercase font-medium">{t("storyTag")}</span>
              </motion.div>
            </motion.div>

            {/* ── Text column ── */}
            <div className="flex flex-col justify-start lg:pt-6">

              {/* Expanding gold rule */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease }}
                className={`h-px mb-12 lg:mb-14 ${isRTL ? "origin-right" : "origin-left"}`}
                style={{
                  background: `linear-gradient(${isRTL ? "to left" : "to right"}, rgba(187,138,60,0.62), rgba(187,138,60,0.12) 62%, transparent)`,
                }}
              />

              {/* Two paragraphs */}
              <motion.div
                {...fadeUp(0.1)}
                className="space-y-7 mb-14 lg:mb-16"
              >
                <p className="text-[clamp(15px,1.5vw,18px)] text-cream/52 font-light leading-[2.05]">
                  {t("storyP1")}
                </p>
                <p className="text-[clamp(15px,1.5vw,18px)] text-cream/52 font-light leading-[2.05]">
                  {t("storyP2")}
                </p>
              </motion.div>

              {/* Founder signature */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.16, ease: "easeOut" }}
                className="flex flex-col"
              >
                <div className="w-8 h-px bg-accent/32 mb-5" />
                <span
                  className="font-serif italic text-cream/80 font-light leading-none mb-3"
                  style={{ fontSize: "clamp(18px,1.8vw,22px)" }}
                >
                  {t("founderName")}
                </span>
                <span className="text-accent/45 text-[9.5px] tracking-[0.4em] uppercase">
                  {t("founderTitle")}
                </span>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS — Marble Legacy
          ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8,5,18,.88) 0%, rgba(14,8,28,.82) 35%, rgba(22,12,42,.75) 60%, rgba(8,5,18,.90) 100%), url("/images/about/marble.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "780px",
        }}
      >
        {/* Radial vignette — corners and edges darker */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{ background: "radial-gradient(ellipse 95% 80% at 50% 50%, transparent 28%, rgba(7,4,14,0.60) 100%)" }}
        />
        {/* Paper grain — static, adds richness to the marble */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.76' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
            opacity: 0.022,
            mixBlendMode: "soft-light",
          }}
        />
        {/* Warm centre ambient — very faint, no animation */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none z-[1]"
          style={{ background: "radial-gradient(ellipse, rgba(187,138,60,0.030) 0%, transparent 62%)" }}
        />

        {/* Content */}
        <div className="w-full relative z-10 py-28 lg:py-36">

          {/* Section heading — editorial h2, same pattern as all other sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`mb-20 lg:mb-28 px-10 xl:px-16 2xl:px-24 ${isRTL ? "text-right" : "text-left"}`}
          >
            {/* Large heading */}
            <h2
              className="font-serif font-light uppercase tracking-tighter text-cream leading-[0.88]"
              style={{ fontSize: "clamp(48px, 7vw, 100px)" }}
            >
              By The <em className="text-accent not-italic">Numbers.</em>
            </h2>
          </motion.div>

          {/* ── Desktop: flex row with hairline separators + editorial nudges ── */}
          <div className="hidden lg:flex items-stretch gap-0 w-full px-10 xl:px-16 2xl:px-24">
            {stats.map((s, i) => {
              const nudge = [0, -14, 10, -8][i];
              return (
                <Fragment key={s.label}>
                  {i > 0 && <div className="stat-vr" aria-hidden="true" />}
                  <div
                    className="flex-1"
                    style={nudge !== 0 ? { transform: `translateY(${nudge}px)` } : undefined}
                  >
                    <StatMetric num={s.num} label={s.label} delay={0.22 + i * 0.13} isHero={i === 1} />
                  </div>
                </Fragment>
              );
            })}
          </div>

          {/* ── Mobile: 2-column grid ── */}
          <div className="grid grid-cols-2 gap-y-4 max-w-sm mx-auto px-8 lg:hidden">
            {stats.map((s, i) => (
              <StatMetric key={s.label} num={s.num} label={s.label} delay={0.18 + i * 0.12} />
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          PILLARS / WHY ELIE
          ══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: BG }}>
        <div className="absolute bottom-0 left-[-4%] w-40 h-[500px] bg-accent/4 rounded-full rotate-[10deg] pointer-events-none" />

        <div className="container-custom px-6 md:px-14 lg:px-20 py-24 md:py-36 relative z-10">
          <div className="max-w-3xl mb-16 md:mb-20">
            <motion.div {...fadeUp(0)}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-accent" />
                <span className="text-accent text-[12px] tracking-[0.34em] uppercase font-bold">{t("pillarsEyebrow")}</span>
              </div>
              <h2 className="font-serif font-light text-[clamp(40px,6vw,90px)] text-cream uppercase leading-[0.88] tracking-tighter mb-6">
                {t("pillarsH1")}<br />
                <em className="text-accent italic not-italic">{t("pillarsH2")}</em>
              </h2>
              <p className="text-[clamp(14px,1.5vw,16px)] text-cream/40 font-light leading-relaxed max-w-lg">{t("pillarsSub")}</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, delay: i * 0.12, ease }}
                className={`pillar-card group relative overflow-hidden rounded-[32px] ${i === 1 ? "md:translate-y-10" : ""}`}
                style={{ minHeight: 560 }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={PILLAR_IMGS[i]}
                    alt={p.t}
                    fill
                    className="pillar-img object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12092a]/98 via-[#12092a]/55 to-[#12092a]/15" />
                  <div className="absolute inset-0 bg-[#12092a]/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>

                <div
                  aria-hidden="true"
                  className="absolute top-6 right-7 font-serif text-cream/[0.048] font-light leading-none select-none"
                  style={{ fontSize: "clamp(60px,10vw,88px)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end p-9">
                  <div className="w-8 h-px bg-accent mb-5 group-hover:w-16 transition-all duration-500" />
                  <h3 className="font-serif text-[clamp(22px,2.5vw,30px)] italic text-cream font-light leading-tight mb-4">{p.t}</h3>
                  <p className="text-[13px] text-cream/45 leading-[1.9] font-light group-hover:text-cream/70 transition-colors duration-500">{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOUNDER
          ══════════════════════════════════════ */}
      <section className="relative bg-cream overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[8%] w-20 h-64 rounded-full border border-primary/8 rotate-[-15deg]" />
          <div className="absolute bottom-[-10%] left-[5%] w-32 h-[400px] bg-accent/4 rounded-full rotate-[12deg]" />
        </div>
        <div
          aria-hidden="true"
          className="absolute top-12 left-4 md:left-12 font-serif text-primary/[0.038] select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(140px,22vw,300px)" }}
        >
          "
        </div>

        <div className="container-custom px-6 md:px-14 lg:px-20 py-24 md:py-36 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="relative"
            >
              <div
                className="relative overflow-hidden shadow-[0_40px_90px_rgba(48,32,95,0.16)]"
                style={{ borderRadius: "9999px 9999px 60px 60px", height: 580 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=900&auto=format&fit=crop"
                  alt={t("founderName")}
                  fill
                  className="object-cover object-top"
                  sizes="500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="w-8 h-px bg-accent mb-3" />
                  <p className="font-serif text-cream text-[28px] font-light italic">{t("founderName")}</p>
                  <p className="text-accent/65 text-[11px] tracking-[0.3em] uppercase mt-1">{t("founderTitle")}</p>
                </div>
              </div>
              <div className="absolute top-10 right-[-12px] w-6 h-20 rounded-full border border-primary/15 rotate-[20deg]" />
            </motion.div>

            <div>
              <motion.div {...fadeUp(0)}>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-px bg-accent" />
                  <span className="text-accent text-[12px] tracking-[0.34em] uppercase font-bold">{t("founderEyebrow")}</span>
                </div>
              </motion.div>

              <motion.blockquote
                {...fadeUp(0.1)}
                className="font-serif text-[clamp(20px,2.8vw,36px)] text-primary font-light italic leading-[1.35] mb-10"
                style={{ borderLeft: "2px solid rgba(187,138,60,0.35)", paddingLeft: "clamp(20px,2.5vw,36px)" }}
              >
                {t("founderQuote")}
              </motion.blockquote>

              <motion.p {...fadeUp(0.2)} className="text-[clamp(14px,1.5vw,16px)] text-body/55 leading-[1.95] font-light mb-12">
                {t("founderBio")}
              </motion.p>

              <motion.div {...fadeUp(0.3)} className="flex items-start gap-12">
                {[["500+", "Events Delivered"], ["14+", "Years of Excellence"]].map(([num, lbl]) => (
                  <div key={lbl}>
                    <p className="font-serif text-accent text-[46px] font-light leading-none">{num}</p>
                    <div className="w-6 h-px bg-accent/30 my-2.5" />
                    <p className="text-body/38 text-[10px] tracking-[0.32em] uppercase font-medium">{lbl}</p>
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
      <section className="relative overflow-hidden" style={{ background: SURFACE }}>
        <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-accent/4 to-transparent pointer-events-none" />
        <div
          aria-hidden="true"
          className="absolute top-12 right-6 md:right-14 font-serif text-cream/[0.028] font-light leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(120px,18vw,260px)" }}
        >
          II
        </div>

        <div className="container-custom px-6 md:px-14 lg:px-20 py-24 md:py-36 relative z-10">
          <motion.div {...fadeUp(0)} className="max-w-2xl mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-[12px] tracking-[0.34em] uppercase font-bold">{t("journeyEyebrow")}</span>
            </div>
            <h2 className="font-serif font-light text-[clamp(40px,6vw,90px)] text-cream uppercase leading-[0.88] tracking-tighter">
              {t("journeyH1")}<br />
              <em className="text-accent italic not-italic">{t("journeyH2")}</em>
            </h2>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease }}
              className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px origin-top"
              style={{ background: "linear-gradient(to bottom, rgba(187,138,60,0.65), rgba(187,138,60,0.18), transparent)" }}
            />

            <div className="space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.85, delay: 0.05, ease }}
                  className={`relative flex items-start gap-8 md:gap-0 pb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-[calc(50%-40px)] pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span
                      className="font-serif text-accent/12 font-light leading-none block mb-3"
                      style={{ fontSize: "clamp(48px,5.5vw,72px)" }}
                    >
                      {m.year}
                    </span>
                    <h3 className="font-serif text-cream text-[clamp(18px,2vw,24px)] font-light italic mb-3">{m.t}</h3>
                    <p className="text-[13px] text-cream/38 leading-relaxed font-light">{m.d}</p>
                  </div>

                  <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-7 flex-shrink-0">
                    <div className="w-[10px] h-[10px] rounded-full bg-accent shadow-[0_0_16px_rgba(187,138,60,0.65),0_0_32px_rgba(187,138,60,0.25)]" />
                  </div>

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
      <section className="relative overflow-hidden" style={{ background: PRIMARY }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            aria-hidden="true"
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/96 to-primary/80" />
        </div>

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
                <span className="text-accent text-[12px] tracking-[0.34em] uppercase font-bold">{t("ctaEyebrow")}</span>
              </div>

              <h2 className="font-serif font-light text-[clamp(48px,8vw,110px)] text-cream uppercase leading-[0.85] tracking-tighter mb-8">
                {t("ctaH1")}<br />
                <em className="text-accent italic not-italic">{t("ctaH2")}</em>
              </h2>

              <p className="font-serif italic text-[clamp(15px,1.8vw,20px)] text-cream/45 font-light mb-12 max-w-md leading-relaxed">
                {t("ctaBody")}
              </p>

              <motion.div {...fadeUp(0.15)} className="flex flex-wrap items-center gap-6">
                <Link
                  href="#booking"
                  className="about-cta-primary inline-flex items-center gap-3 px-9 py-5 rounded-full text-[11px] tracking-[0.22em] uppercase font-bold text-primary no-underline"
                >
                  {t("ctaBtn")}
                  <span className="text-[10px] opacity-65">{isRTL ? "←" : "→"}</span>
                </Link>
                <Link
                  href={`/${locale}`}
                  className="inline-flex items-center gap-2 text-cream/35 hover:text-accent transition-colors duration-300 text-[12px] tracking-[0.2em] uppercase font-medium no-underline"
                >
                  {isRTL ? "→ العودة للرئيسية" : "← Back to Home"}
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
