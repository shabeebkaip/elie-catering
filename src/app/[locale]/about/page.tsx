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
function StatMetric({ num, label, delay, isHero = false, isRTL = false }: {
  num: string; label: string; delay: number; isHero?: boolean; isRTL?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [count, setCount] = useState(0);

  // Handles both "14+" (EN suffix) and "+14" (AR prefix) formats
  const match = num.match(/^([^\d]*)(\d+)([^\d]*)$/);
  const prefix = match ? match[1] : "";
  const to     = match ? parseInt(match[2]) : 0;
  const suffix = match ? match[3] : "";

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
        {prefix}{count}{suffix}
      </p>
      <div className="stat-rule" />
      <p className={`stat-lbl${isRTL ? " stat-lbl-ar" : ""}`}>{label}</p>
    </motion.div>
  );
}

const PILLAR_IMGS = [
  "/images/about/why-elie-1.webp",
  "/images/about/why-elie-2.webp",
  "/images/about/why-elie-3.webp",
];

const BG = "#12092a";
const PRIMARY = "#30205f";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const h = HERO[isRTL ? "ar" : "en"];

  const stats   = t.raw("stats")   as { num: string; label: string }[];
  const pillars = t.raw("pillars") as { t: string; d: string }[];

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
        /* Cinematic parallax — drift only, no zoom */
        .pillar-img { transition: transform 3.6s cubic-bezier(0.19,1,0.22,1); transform-origin: center 55%; }
        .pillar-card:hover .pillar-img { transform: translateY(-10px); }
        /* Card shadow transition — independent of Framer Motion */
        .pillar-card { transition: box-shadow 0.8s cubic-bezier(0.19,1,0.22,1); }
        .pillar-card-shadow {
          box-shadow:
            0 2px 6px rgba(7,4,14,.36),
            0 18px 52px rgba(7,4,14,.56),
            0 52px 104px rgba(7,4,14,.30);
        }
        .pillar-card-shadow:hover {
          box-shadow:
            0 8px 24px rgba(7,4,14,.52),
            0 32px 80px rgba(7,4,14,.66),
            0 72px 140px rgba(7,4,14,.40);
        }
        .pillar-card-hero {
          box-shadow:
            0 4px 14px rgba(7,4,14,.44),
            0 28px 72px rgba(7,4,14,.64),
            0 72px 140px rgba(7,4,14,.36);
        }
        .pillar-card-hero:hover {
          box-shadow:
            0 12px 36px rgba(7,4,14,.54),
            0 44px 104px rgba(7,4,14,.72),
            0 96px 180px rgba(7,4,14,.46);
        }

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
        /* Arabic stat label — no letter-spacing (breaks Arabic ligatures), no uppercase */
        .stat-lbl-ar {
          letter-spacing: 0.02em;
          text-transform: none;
          max-width: 160px;
          line-height: 1.9;
          font-size: 11px;
          direction: rtl;
        }
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
            url("/images/about/founder.webp");
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
            url("/images/about/founder.webp");
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
              className={`flex items-center gap-4 mb-9 ${isRTL ? "flex-row-reverse" : ""}`}
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
              className={`w-12 h-px bg-accent/40 mb-8 ${isRTL ? "origin-right" : "origin-left"}`}
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
              <span className={`font-serif ${isRTL ? "" : "italic"} text-cream/82 text-[19px] font-light leading-none`}>{t("founderName")}</span>
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
          {!isRTL && <span className="text-cream/25 text-[9px] tracking-[0.42em] uppercase mt-1">Scroll</span>}
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
              <div className={`flex items-center gap-4 mb-10 lg:mb-12 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-10 h-px bg-accent" />
                <span className="text-accent text-[12px] tracking-[0.38em] uppercase font-bold">{t("storyEyebrow")}</span>
              </div>
              <h2
                className={`font-serif font-light tracking-tighter ${isRTL ? "" : "uppercase"}`}
                style={{ fontSize: "clamp(48px,7.2vw,100px)", lineHeight: 0.85 }}
              >
                <span className="block text-cream">{t("storyH1")}</span>
                <em className="block text-accent not-italic">{t("storyH2")}</em>
              </h2>
            </motion.div>
          </div>

          {/* Two-column: Image (55%) + Text (45%) */}
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 xl:gap-28 items-start">

            {/* ── Image column ── */}
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease }}
              className="lg:w-[55%] lg:shrink-0"
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
                className={`flex items-center gap-3 mt-6 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <div className="w-5 h-px bg-accent/35" />
                <span className="text-cream/28 text-[9.5px] tracking-[0.38em] uppercase font-medium">{t("storyTag")}</span>
              </motion.div>
            </motion.div>

            {/* ── Text column ── */}
            <div className="flex flex-col justify-start lg:pt-6 lg:flex-1">

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
                <div className={`w-8 h-px bg-accent/32 mb-5 ${isRTL ? "ml-auto" : ""}`} />
                <span
                  className={`font-serif ${isRTL ? "" : "italic"} text-cream/80 font-light leading-none mb-3`}
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
          backgroundImage: `linear-gradient(90deg, rgba(8,5,18,.88) 0%, rgba(14,8,28,.82) 35%, rgba(22,12,42,.75) 60%, rgba(8,5,18,.90) 100%), url("/images/about/marble.webp")`,
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

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`mb-20 lg:mb-28 px-10 xl:px-16 2xl:px-24 ${isRTL ? "text-right" : "text-left"}`}
          >
            <h2
              className={`font-serif font-light tracking-tighter text-cream leading-[0.88] ${isRTL ? "" : "uppercase"}`}
              style={{ fontSize: "clamp(48px, 7vw, 100px)" }}
            >
              {t("statsH1") && <>{t("statsH1")} </>}
              <em className="text-accent not-italic">{t("statsH2")}</em>
            </h2>
          </motion.div>

          {/* ── Desktop: flex row with hairline separators + editorial nudges ── */}
          <div className={`hidden lg:flex items-stretch gap-0 w-full px-10 xl:px-16 2xl:px-24 ${isRTL ? "flex-row-reverse" : ""}`}>
            {stats.map((s, i) => {
              const nudge = [0, -14, 10, -8][i];
              return (
                <Fragment key={s.label}>
                  {i > 0 && <div className="stat-vr" aria-hidden="true" />}
                  <div
                    className="flex-1"
                    style={nudge !== 0 ? { transform: `translateY(${nudge}px)` } : undefined}
                  >
                    <StatMetric num={s.num} label={s.label} delay={0.22 + i * 0.13} isHero={i === 1} isRTL={isRTL} />
                  </div>
                </Fragment>
              );
            })}
          </div>

          {/* ── Mobile: 2-column grid ── */}
          <div className={`grid grid-cols-2 gap-y-4 max-w-sm mx-auto px-8 lg:hidden ${isRTL ? "direction-rtl" : ""}`}>
            {stats.map((s, i) => (
              <StatMetric key={s.label} num={s.num} label={s.label} delay={0.18 + i * 0.12} isRTL={isRTL} />
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          PILLARS / WHY ELIE
          ══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: BG }}>
        {/* Ambient warm glow behind card area */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{ background: "radial-gradient(ellipse 70% 44% at 50% 74%, rgba(187,138,60,0.038) 0%, transparent 65%)" }}
        />

        <div className="container-custom px-6 md:px-14 lg:px-20 py-24 md:py-36 relative z-10">

          {/* ── Heading — editorial headline + description side by side ── */}
          <motion.div
            {...fadeUp(0)}
            className="mb-20 lg:mb-28"
          >
            <div className={`flex items-center gap-4 mb-10 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-[12px] tracking-[0.34em] uppercase font-bold">{t("pillarsEyebrow")}</span>
            </div>

            {/* Headline left, description right */}
            <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
              <h2 className={`font-serif font-light text-[clamp(48px,6.4vw,94px)] text-cream leading-[0.88] tracking-tighter flex-shrink-0 ${isRTL ? "" : "uppercase"}`}>
                {t("pillarsH1")}<br />
                <em className="text-accent not-italic">{t("pillarsH2")}</em>
              </h2>
              <div className={`lg:pb-2 lg:max-w-[360px] ${isRTL ? "lg:mr-auto" : "lg:ml-auto"}`}>
                <p className="text-[clamp(14px,1.4vw,16px)] text-cream/38 font-light leading-[2.0]">{t("pillarsSub")}</p>
              </div>
            </div>

            {/* Expanding gold rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.22, ease }}
              className={`mt-14 h-px ${isRTL ? "origin-right" : "origin-left"}`}
              style={{ background: `linear-gradient(${isRTL ? "to left" : "to right"}, rgba(187,138,60,0.50), rgba(187,138,60,0.08) 55%, transparent)` }}
            />
          </motion.div>

          {/* ── Cards — full-width, center card is hero ── */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.22fr_1fr] gap-5 lg:gap-6 md:items-end">
            {pillars.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 52 }} whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, delay: i * 0.14, ease }}
                className={`pillar-card ${i === 1 ? "pillar-card-hero" : "pillar-card-shadow"} group relative overflow-hidden rounded-[28px] ${i === 1 ? "md:-translate-y-8" : ""}`}
                style={{ minHeight: i === 1 ? 880 : 720 }}
              >
                {/* Image layer */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={PILLAR_IMGS[i]}
                    alt={p.t}
                    fill
                    className="pillar-img object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 34vw, 28vw"
                    style={{ filter: "brightness(0.76)" }}
                  />
                  {/* Cinematic deep gradient — bottom anchors text, top lets image breathe */}
                  <div className="absolute inset-0" style={{
                    background: "linear-gradient(to top, rgba(7,4,14,0.97) 0%, rgba(7,4,14,0.78) 18%, rgba(10,6,18,0.40) 40%, rgba(10,6,18,0.08) 62%, transparent 82%)"
                  }} />
                  {/* Uniform cinematic tint */}
                  <div className="absolute inset-0" style={{ background: "rgba(7,4,14,0.14)" }} />
                </div>

                {/* Inset gold border — quiet luxury */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 rounded-[28px] border transition-colors duration-700 z-[15] pointer-events-none ${i === 1 ? "border-accent/[0.12] group-hover:border-accent/[0.22]" : "border-accent/[0.07] group-hover:border-accent/[0.14]"}`}
                />
                {/* Polished lacquer top reflection */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 inset-x-0 z-[16] pointer-events-none"
                  style={{
                    height: "3px",
                    background: "linear-gradient(to right, transparent 0%, rgba(230,195,130,0.06) 10%, rgba(245,215,160,0.28) 35%, rgba(252,228,178,0.42) 50%, rgba(245,215,160,0.28) 65%, rgba(230,195,130,0.06) 90%, transparent 100%)",
                  }}
                />

                {/* Editorial word watermark */}
                <div
                  aria-hidden="true"
                  className="absolute font-serif select-none pointer-events-none z-[10]"
                  style={{
                    top: "30px", right: "30px",
                    opacity: 0.04,
                    fontSize: "clamp(40px,4.4vw,64px)",
                    letterSpacing: "0.30em",
                    lineHeight: 1,
                    fontWeight: 300,
                    color: "#dbb878",
                  }}
                >
                  {["CRAFT", "DESIGN", "EXECUTION"][i]}
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end px-10 pt-10 pb-16 lg:px-11 lg:pb-[72px]">
                  <div className="w-10 h-px mb-7" style={{ background: "linear-gradient(to right, rgba(187,138,60,0.88), rgba(187,138,60,0.20))" }} />
                  <h3 className={`font-serif text-[clamp(24px,2.4vw,36px)] ${isRTL ? "" : "italic"} text-cream font-light leading-tight mb-5`}>{p.t}</h3>
                  <div className="w-5 h-px mb-6" style={{ background: "rgba(187,138,60,0.18)" }} />
                  <p className="text-[13px] text-cream/44 leading-[2.0] font-light group-hover:text-cream/70 transition-colors duration-700">{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          FOUNDER — Editorial Portrait
          ══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "#0b0719" }}>

        {/* Marble wash — very faint */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[0] pointer-events-none select-none"
          style={{
            backgroundImage: `url("/images/about/marble.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.045,
            mixBlendMode: "soft-light",
          }}
        />
        {/* Paper grain */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.76' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "250px 250px",
            opacity: 0.018,
            mixBlendMode: "soft-light",
          }}
        />
        {/* Warm ambient behind portrait */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 -translate-y-1/2 w-[640px] h-[640px] pointer-events-none z-[1]"
          style={{
            [isRTL ? "right" : "left"]: "-6%",
            background: "radial-gradient(ellipse, rgba(187,138,60,0.042) 0%, transparent 68%)",
          } as React.CSSProperties}
        />
        {/* Top gold hairline */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px z-[2] pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(187,138,60,0.26) 25%, rgba(187,138,60,0.38) 50%, rgba(187,138,60,0.26) 75%, transparent)" }}
        />
        {/* Bottom gold hairline */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px z-[2] pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(187,138,60,0.14) 25%, rgba(187,138,60,0.22) 50%, rgba(187,138,60,0.14) 75%, transparent)" }}
        />

        <div className="container-custom px-6 md:px-14 lg:px-20 py-28 md:py-36 lg:py-44 relative z-10">

          {/* Eyebrow — centered with flanking hairlines */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease }}
            className="flex items-center justify-center gap-6 mb-20 lg:mb-28"
          >
            <div className="h-px flex-1 max-w-[90px]" style={{ background: "linear-gradient(to right, transparent, rgba(187,138,60,0.40))" }} />
            <span className="text-accent text-[10.5px] uppercase font-light whitespace-nowrap" style={{ letterSpacing: isRTL ? "0.06em" : "0.40em" }}>{t("founderEyebrow")}</span>
            <div className="h-px flex-1 max-w-[90px]" style={{ background: "linear-gradient(to left, transparent, rgba(187,138,60,0.40))" }} />
          </motion.div>

          {/* ── Editorial grid: portrait + content ── */}
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 xl:gap-24 items-start">

            {/* Portrait column */}
            <motion.div
              initial={{ opacity: 0, y: 52 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.3, ease }}
              className="relative lg:w-[44%] lg:shrink-0"
            >
              {/* Aspect-ratio portrait container */}
              <div className="relative w-full" style={{ aspectRatio: "4/5" }}>

                {/* Offset gold shadow frame — behind portrait */}
                <div
                  aria-hidden="true"
                  className="absolute z-[0] pointer-events-none"
                  style={{
                    inset: 0,
                    transform: `translate(${isRTL ? "-16px" : "16px"}, 16px)`,
                    border: "1px solid rgba(187,138,60,0.20)",
                  }}
                />

                {/* Portrait */}
                <div
                  className="absolute inset-0 overflow-hidden z-[1]"
                  style={{
                    boxShadow: "0 28px 80px rgba(3,1,10,0.60), 0 8px 24px rgba(3,1,10,0.38)",
                  }}
                >
                  <Image
                    src="/images/about/founder.webp"
                    alt={t("founderName")}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    style={{ filter: "brightness(0.90)" }}
                  />
                  {/* Cinematic bottom vignette */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(5,2,14,0.88) 0%, rgba(5,2,14,0.24) 30%, transparent 56%)",
                    }}
                  />
                </div>

                {/* Inset gold border */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-[2] pointer-events-none"
                  style={{ border: "1px solid rgba(187,138,60,0.14)" }}
                />

                {/* Name + title — portrait interior, bottom */}
                <div className={`absolute bottom-0 inset-x-0 z-[3] px-8 pb-10 ${isRTL ? "text-right" : ""}`}>
                  <div className={`h-px w-8 mb-5 ${isRTL ? "ml-auto" : ""}`} style={{ background: "rgba(187,138,60,0.68)" }} />
                  <p
                    className={`font-serif text-cream/90 font-light ${isRTL ? "" : "italic"} leading-tight mb-2`}
                    style={{ fontSize: "clamp(19px,1.9vw,24px)" }}
                  >
                    {t("founderName")}
                  </p>
                  <p
                    className="text-accent/52 font-light uppercase"
                    style={{ fontSize: "9.5px", letterSpacing: isRTL ? "0.04em" : "0.28em" }}
                  >
                    {t("founderTitle")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content column */}
            <div className={`flex flex-col justify-center pt-2 lg:pt-6 lg:flex-1 ${isRTL ? "text-right items-end" : ""}`}>

              {/* Hero quote */}
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.1, delay: 0.14, ease }}
                className="mb-12 lg:mb-14"
              >
                <div
                  aria-hidden="true"
                  className={`font-serif text-accent/20 font-light select-none leading-none mb-2 ${isRTL ? "text-right" : ""}`}
                  style={{ fontSize: "clamp(56px,6vw,84px)", lineHeight: 0.8 }}
                >
                  {isRTL ? "“" : "“"}
                </div>
                <blockquote
                  className={`font-serif font-light ${isRTL ? "" : "italic"} text-cream/86 leading-[1.52]`}
                  style={{ fontSize: "clamp(20px,2.3vw,32px)" }}
                >
                  {t("founderQuote")}
                </blockquote>
              </motion.div>

              {/* Expanding gold hairline */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.24, ease }}
                className={`h-px mb-12 w-full ${isRTL ? "origin-right" : "origin-left"}`}
                style={{
                  background: `linear-gradient(${isRTL ? "to left" : "to right"}, rgba(187,138,60,0.52), rgba(187,138,60,0.07) 55%, transparent)`,
                }}
              />

              {/* Philosophy text */}
              <motion.p
                {...fadeUp(0.26)}
                className={`text-[clamp(14.5px,1.42vw,17px)] text-cream/44 font-light leading-[2.1] mb-16 ${isRTL ? "" : "max-w-[480px]"}`}
              >
                {t("founderBio")}
              </motion.p>

              {/* Luxury metrics — static, no counters */}
              <motion.div
                {...fadeUp(0.34)}
                className={`flex items-start gap-10 xl:gap-14 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                {[
                  { num: isRTL ? "+14" : "14+", label: stats[0].label },
                  { num: isRTL ? "+500" : "500+", label: stats[1].label },
                  { num: "98%", label: stats[3].label },
                ].map((m) => (
                  <div key={m.label} className={isRTL ? "text-right" : ""}>
                    <p
                      className="font-serif text-accent font-light leading-none"
                      style={{ fontSize: "clamp(28px,3vw,46px)" }}
                    >
                      {m.num}
                    </p>
                    <div
                      className={`h-px w-6 my-3.5 ${isRTL ? "ml-auto" : ""}`}
                      style={{ background: "rgba(187,138,60,0.28)" }}
                    />
                    <p
                      className="text-cream/30 font-light leading-[1.85]"
                      style={{
                        fontSize: "10px",
                        letterSpacing: isRTL ? "0.02em" : "0.26em",
                        textTransform: isRTL ? "none" : "uppercase",
                        maxWidth: isRTL ? "110px" : "88px",
                      }}
                    >
                      {m.label}
                    </p>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA — EMOTIONAL CLIMAX
          ══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "#09061a" }}>

        {/* Paper grain */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.76' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "250px 250px",
            opacity: 0.022,
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
            opacity: 0.015,
            mixBlendMode: "soft-light",
          }}
        />
        {/* Warm candlelight ambient — behind image column */}
        <div
          aria-hidden="true"
          className="absolute w-[900px] h-[900px] rounded-full pointer-events-none z-[1]"
          style={{
            top: "-10%",
            [isRTL ? "left" : "right"]: "-14%",
            background: "radial-gradient(ellipse, rgba(187,138,60,0.058) 0%, rgba(187,138,60,0.016) 44%, transparent 66%)",
          } as React.CSSProperties}
        />
        {/* Cool deep-purple accent — text side */}
        <div
          aria-hidden="true"
          className="absolute w-[700px] h-[500px] rounded-full pointer-events-none z-[1]"
          style={{
            bottom: "5%",
            [isRTL ? "right" : "left"]: "-12%",
            background: "radial-gradient(ellipse, rgba(48,32,95,0.13) 0%, transparent 65%)",
          } as React.CSSProperties}
        />
        {/* Warm gold glow — text column depth */}
        <div
          aria-hidden="true"
          className="absolute w-[800px] h-[800px] rounded-full pointer-events-none z-[1]"
          style={{
            top: "0%",
            [isRTL ? "right" : "left"]: "-10%",
            background: "radial-gradient(circle at 70% 30%, rgba(212,175,55,0.06), transparent 40%)",
          } as React.CSSProperties}
        />

        {/* Top gold hairline */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px z-[2] pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(187,138,60,0.30) 25%, rgba(187,138,60,0.50) 50%, rgba(187,138,60,0.30) 75%, transparent)" }}
        />
        {/* Bottom gold hairline */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px z-[2] pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(187,138,60,0.18) 25%, rgba(187,138,60,0.28) 50%, rgba(187,138,60,0.18) 75%, transparent)" }}
        />

        {/* Corner ornaments */}
        <svg aria-hidden="true" className="absolute top-7 left-7 z-[3] pointer-events-none" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M44 1 L1 1 L1 44" stroke="rgba(187,138,60,0.22)" strokeWidth="0.75" />
        </svg>
        <svg aria-hidden="true" className="absolute bottom-7 right-7 z-[3] pointer-events-none" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M0 43 L43 43 L43 0" stroke="rgba(187,138,60,0.22)" strokeWidth="0.75" />
        </svg>

        <div className="container-custom px-6 md:px-14 lg:px-20 py-28 md:py-36 lg:py-44 relative z-10">

          {/* 2-column flex — html[dir="rtl"] auto-swaps column order for Arabic */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 xl:gap-28">

            {/* ── Text column (52% desktop) ── */}
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, ease }}
              className="lg:w-[46%] lg:shrink-0"
            >

              {/* Eyebrow — centered flanking hairlines */}
              <div className="flex items-center gap-5 mb-14">
                <div className="h-px flex-1 max-w-[56px]" style={{ background: "linear-gradient(to right, transparent, rgba(187,138,60,0.42))" }} />
                <span
                  className="text-accent/68 font-light whitespace-nowrap"
                  style={{ fontSize: "10.5px", letterSpacing: isRTL ? "0.06em" : "0.38em", textTransform: "uppercase" }}
                >
                  {t("ctaEyebrow")}
                </span>
                <div className="h-px flex-1 max-w-[56px]" style={{ background: "linear-gradient(to left, transparent, rgba(187,138,60,0.42))" }} />
              </div>

              {/* 3-line editorial headline */}
              <motion.div {...fadeUp(0.06)} className="mb-10">
                <h2 className="font-serif font-light tracking-tighter leading-[0.88]">
                  <span
                    className={`block text-cream ${isRTL ? "" : "uppercase"}`}
                    style={{ fontSize: "clamp(42px,6.2vw,96px)" }}
                  >
                    {t("ctaH1a")}
                  </span>
                  <span
                    className="block text-accent"
                    style={{ fontSize: "clamp(50px,7.8vw,120px)", fontStyle: isRTL ? "normal" : "italic" }}
                  >
                    {t("ctaH1b")}
                  </span>
                  <span
                    className={`block text-cream ${isRTL ? "" : "uppercase"}`}
                    style={{ fontSize: "clamp(42px,6.2vw,96px)" }}
                  >
                    {t("ctaH1c")}
                  </span>
                </h2>
              </motion.div>

              {/* Expanding gold rule */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.18, ease }}
                className={`h-px mb-12 ${isRTL ? "origin-right" : "origin-left"}`}
                style={{ background: `linear-gradient(${isRTL ? "to left" : "to right"}, rgba(187,138,60,0.62), rgba(187,138,60,0.10) 55%, transparent)` }}
              />

              {/* Emotional body copy */}
              <motion.p
                {...fadeUp(0.22)}
                className="text-[clamp(14.5px,1.45vw,17.5px)] text-cream/46 font-light leading-[2.1] mb-10"
                style={{ maxWidth: isRTL ? "none" : "420px" }}
              >
                {t("ctaBody")}
              </motion.p>

              {/* Animated gold divider — body → CTA */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.28, ease }}
                className={`h-px mb-10 ${isRTL ? "origin-right" : "origin-left"}`}
                style={{ background: `linear-gradient(${isRTL ? "to left" : "to right"}, rgba(187,138,60,0.36), rgba(187,138,60,0.05) 60%, transparent)` }}
              />

              {/* Feature list */}
              <motion.ul
                {...fadeUp(0.28)}
                className={`flex flex-col gap-3.5 mb-11 ${isRTL ? "items-end" : ""}`}
              >
                {([
                  isRTL ? "استشارة أولية خاصة" : "Private first consultation",
                  isRTL ? "تصميم مخصص بالكامل" : "Fully bespoke design",
                  isRTL ? "تجربة ضيافة استثنائية" : "Exceptional hospitality experience",
                ] as string[]).map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 text-cream/40 font-light ${isRTL ? "flex-row-reverse" : ""}`}
                    style={{ fontSize: "10.5px", letterSpacing: isRTL ? "0.02em" : "0.10em" }}
                  >
                    <span className="text-accent/75 flex-shrink-0" style={{ fontSize: "9px" }}>✦</span>
                    {item}
                  </li>
                ))}
              </motion.ul>

              {/* CTAs */}
              <motion.div
                {...fadeUp(0.34)}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"
              >
                <Link
                  href="#booking"
                  className="about-cta-primary inline-flex items-center gap-3 px-9 py-[17px] rounded-full text-[11px] tracking-[0.22em] uppercase font-bold text-primary no-underline whitespace-nowrap"
                >
                  {t("ctaBtn")}
                  <span className="text-[10px] opacity-65">{isRTL ? "←" : "→"}</span>
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center gap-2 text-cream/30 hover:text-accent/75 transition-colors duration-300 font-medium no-underline group whitespace-nowrap"
                  style={{ fontSize: "10.5px", letterSpacing: isRTL ? "0.04em" : "0.20em", textTransform: "uppercase" }}
                >
                  {t("ctaServices")}
                  <span className="text-[10px] group-hover:translate-x-0.5 transition-transform">{isRTL ? "←" : "→"}</span>
                </Link>
              </motion.div>


            </motion.div>

            {/* ── Image column (flex-1) ── */}
            <motion.div
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, delay: 0.20, ease }}
              className="w-full lg:flex-1"
            >
              <div className="relative">

                {/* Offset gold shadow frame */}
                <div
                  aria-hidden="true"
                  className="absolute z-[0] pointer-events-none"
                  style={{
                    inset: 0,
                    transform: `translate(${isRTL ? "-18px" : "18px"}, 18px)`,
                    border: "1px solid rgba(187,138,60,0.22)",
                    borderRadius: "32px",
                  }}
                />

                {/* Image + overlays */}
                <div
                  className="relative overflow-hidden z-[1]"
                  style={{ borderRadius: "32px", aspectRatio: "3/4" }}
                >
                  <Image
                    src="/images/about/why-elie-1.webp"
                    alt="Elie Catering & Event Planning — luxury event experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    style={{ filter: "brightness(0.80)" }}
                  />

                  {/* Cinematic bottom vignette */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(9,6,26,0.92) 0%, rgba(9,6,26,0.22) 38%, transparent 62%)" }}
                  />
                  {/* Warm candlelight bloom */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(ellipse 76% 38% at 50% 88%, rgba(180,110,18,0.09) 0%, transparent 52%)" }}
                  />

                  {/* Inset gold border */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-[2] pointer-events-none"
                    style={{ border: "1px solid rgba(187,138,60,0.14)", borderRadius: "32px" }}
                  />

                  {/* Floating quote */}
                  <div className={`absolute bottom-0 inset-x-0 z-[3] px-9 pb-11 ${isRTL ? "text-right" : ""}`}>
                    <div
                      className={`h-px w-8 mb-6 ${isRTL ? "ml-auto" : ""}`}
                      style={{ background: "linear-gradient(to right, rgba(187,138,60,0.80), rgba(187,138,60,0.20))" }}
                    />
                    <p
                      className={`font-serif font-light ${isRTL ? "" : "italic"} text-cream/78 leading-[1.65]`}
                      style={{ fontSize: "clamp(13.5px,1.35vw,17px)" }}
                    >
                      {isRTL
                        ? "الفخامة ليست في التكلفة، بل في كل تفصيلة لا يلاحظها الضيف."
                        : "Luxury is not in the cost — it is in every detail the guest never notices."}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
