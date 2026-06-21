"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

/* ── Dark luxury palette ─────────────────────────── */
const BG = "#120A2A";
const GOLD = "#bb8a3c";
const SMOKED_GOLD = "#a8925a";
const CREAM = "#ede5ff";
const BODY = "rgba(237,229,255,0.76)";
const MUTED = "rgba(237,229,255,0.58)";
const HAIRLINE = "rgba(237,229,255,0.08)";

/* ── Silk grain (SVG fractal noise) ─────────────── */
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`;

/* ── Motion ─────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.19, 1, 0.22, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.0, delay, ease: EASE },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.6, delay, ease: EASE },
});

/* ── Bilingual copy ─────────────────────────────── */
type Pillar = { t: string; d: string };
type Copy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  sub: string;
  hallmarksLabel: string;
  estLabel: string;
  location: string;
  pillars: Pillar[];
};

const COPY: { en: Copy; ar: Copy } = {
  en: {
    eyebrow: "Why Elie",
    title: "The Elie",
    titleAccent: "Difference.",
    sub: "14 years of curated Saudi luxury hospitality.",
    hallmarksLabel: "Our Hallmarks",
    estLabel: "Est · 2010",
    location: "Riyadh · KSA",
    pillars: [
      { t: "Bespoke Experiences", d: "Shaped to each occasion. Never repeated." },
      { t: "End-to-End Execution", d: "Planning, catering, styling — quietly coordinated." },
      { t: "Private & Corporate Expertise", d: "Trusted by households, embassies, and leadership." },
      { t: "Saudi-wide Hospitality", d: "Standards that travel across the Kingdom." },
    ],
  },
  ar: {
    eyebrow: "لماذا إيلي",
    title: "تميّز",
    titleAccent: "إيلي.",
    sub: "أكثر من 14 عاماً من الضيافة الفاخرة المصمّمة بعناية في المملكة.",
    hallmarksLabel: "علاماتنا المميّزة",
    estLabel: "تأسست · 2010",
    location: "الرياض · المملكة",
    pillars: [
      { t: "تجارب مصمّمة بعناية", d: "خدمات وضيافة تُصاغ خصيصاً لكل مناسبة — دون تكرار." },
      { t: "تنفيذ متكامل من البداية إلى النهاية", d: "نُدير التخطيط والضيافة والتنفيذ بدقّة وهدوء خلف الكواليس." },
      { t: "خبرة في المناسبات الخاصة والشركات", d: "موثوقون لدى العائلات والشركات وكبار الشخصيات." },
      { t: "ضيافة راقية في كل أنحاء المملكة", d: "معايير فاخرة ترافقنا أينما كانت وجهتكم داخل المملكة." },
    ],
  },
};

/* ── Locale-aware typography ───────────────────── */
type Typo = {
  title: React.CSSProperties;
  sub: React.CSSProperties;
  pillarTitle: React.CSSProperties;
  pillarDesc: React.CSSProperties;
  eyebrowLetterSpacing: string;
};

const TYPO: { en: Typo; ar: Typo } = {
  en: {
    title: {
      fontSize: "clamp(38px, 5.8vw, 78px)",
      lineHeight: 1.02,
      letterSpacing: "-0.025em",
    },
    sub: {
      fontSize: "clamp(15px, 1.4vw, 20px)",
      lineHeight: 1.55,
      letterSpacing: "0.005em",
    },
    pillarTitle: {
      fontSize: "clamp(26px, 2.9vw, 38px)",
      lineHeight: 1.06,
      letterSpacing: "-0.022em",
      maxWidth: "280px",
    },
    pillarDesc: {
      fontSize: "clamp(13.5px, 1.05vw, 15px)",
      lineHeight: 1.7,
      maxWidth: "260px",
      letterSpacing: "0.005em",
    },
    eyebrowLetterSpacing: "0.44em",
  },
  ar: {
    title: {
      fontSize: "clamp(44px, 6.6vw, 88px)",
      lineHeight: 1.32,
      letterSpacing: "0",
    },
    sub: {
      fontSize: "clamp(17px, 1.55vw, 22px)",
      lineHeight: 1.9,
      letterSpacing: "0",
    },
    pillarTitle: {
      fontSize: "clamp(24px, 2.7vw, 36px)",
      lineHeight: 1.4,
      letterSpacing: "0",
      maxWidth: "380px",
    },
    pillarDesc: {
      fontSize: "clamp(14.5px, 1.15vw, 17px)",
      lineHeight: 1.95,
      maxWidth: "360px",
      letterSpacing: "0",
    },
    eyebrowLetterSpacing: "0.18em",
  },
};

export default function WhyChooseUs() {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const copy = isArabic ? COPY.ar : COPY.en;
  const typo = isArabic ? TYPO.ar : TYPO.en;

  // Headline & body use serif (Fraunces) in English, font-arabic (Almarai) in Arabic
  const serif = isArabic ? "font-arabic" : "font-serif";

  return (
    <section
      id="why-us"
      style={{ background: BG, position: "relative", overflow: "hidden" }}
    >

      {/* ── Ambient depth — radial glows ─────────── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-12%",
          right: "-8%",
          width: "55%",
          height: "55%",
          background:
            "radial-gradient(ellipse at center, rgba(187,138,60,0.08) 0%, rgba(187,138,60,0.025) 38%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-18%",
          left: "-10%",
          width: "55%",
          height: "60%",
          background:
            "radial-gradient(ellipse at center, rgba(168,146,90,0.07) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.24) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Silk grain ──────────────────────────────── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_SVG,
          opacity: 0.04,
          mixBlendMode: "overlay",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ── Content ─────────────────────────────────── */}
      <div
        className="relative max-w-[1440px] mx-auto"
        style={{
          zIndex: 2,
          paddingTop: "clamp(48px, 6vw, 88px)",
          paddingBottom: "clamp(80px, 10vw, 144px)",
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 6vw, 96px)",
        }}
      >

        {/* ════════════════════════════════════════════
            TOP — Editorial heading (centered)
            ════════════════════════════════════════════ */}
        <div className="text-center max-w-[760px] mx-auto mb-8 md:mb-12 lg:mb-14">

          {/* Eyebrow with twin rules */}
          <motion.div
            {...fadeUp(0)}
            className="flex items-center justify-center gap-3 mb-6 md:mb-7"
          >
            <div style={{ width: "22px", height: "1px", background: GOLD, opacity: 0.55 }} />
            <span
              className={isArabic ? "font-arabic" : ""}
              style={{
                fontSize: isArabic ? "12px" : "10px",
                fontWeight: 600,
                letterSpacing: typo.eyebrowLetterSpacing,
                textTransform: isArabic ? "none" : "uppercase",
                color: GOLD,
                opacity: 0.82,
              }}
            >
              {copy.eyebrow}
            </span>
            <div style={{ width: "22px", height: "1px", background: GOLD, opacity: 0.55 }} />
          </motion.div>

          {/* Title */}
          <motion.h2
            {...fadeUp(0.10)}
            className={`${serif} font-light`}
            style={{
              color: CREAM,
              ...typo.title,
              marginBottom: "clamp(20px, 2.5vw, 32px)",
            }}
          >
            {copy.title}{" "}
            {isArabic ? (
              <span
                className="font-arabic"
                style={{ color: SMOKED_GOLD, fontWeight: 300 }}
              >
                {copy.titleAccent}
              </span>
            ) : (
              <em
                style={{
                  color: SMOKED_GOLD,
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                {copy.titleAccent}
              </em>
            )}
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.16)}
            className={`${serif} font-light mx-auto ${isArabic ? "" : "italic"}`}
            style={{
              color: BODY,
              ...typo.sub,
              maxWidth: isArabic ? "640px" : "560px",
            }}
          >
            {copy.sub}
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════
            MIDDLE — Cinematic Saudi image
            ════════════════════════════════════════════ */}
        <motion.div
          {...fadeIn(0)}
          className="relative mb-12 md:mb-16 lg:mb-20"
        >
          {/* Gold halo glow behind image */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: "-60px",
              background:
                "radial-gradient(ellipse at center, rgba(187,138,60,0.16) 0%, rgba(187,138,60,0.05) 38%, transparent 72%)",
              filter: "blur(70px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div
            className="relative overflow-hidden group"
            style={{
              aspectRatio: "29 / 10",
              borderRadius: "14px",
              boxShadow:
                "0 120px 240px -60px rgba(0,0,0,0.55), 0 60px 120px -40px rgba(0,0,0,0.22), 0 0 160px -30px rgba(187,138,60,0.14), 0 100px 80px -80px rgba(18,10,42,0.85)",
              zIndex: 1,
            }}
          >
            <Image
              src="/images/whychooseUs.png"
              alt={isArabic ? "إيلي للضيافة الفاخرة في المملكة" : "Elie Catering — Saudi luxury hospitality"}
              fill
              priority={false}
              className="object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.018]"
              sizes="(max-width: 1440px) 100vw, 1440px"
              style={{
                filter: "saturate(1.04) contrast(1.05)",
                objectPosition: "center",
              }}
            />

            {/* Cinematic vignette — image emerging from darkness, blending to bg */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(18,10,42,0.38) 0%, rgba(18,10,42,0.08) 14%, transparent 38%, rgba(18,10,42,0.18) 62%, rgba(18,10,42,0.52) 84%, rgba(18,10,42,0.85) 96%, rgba(18,10,42,0.96) 100%)",
              }}
            />

            {/* Maker mark — logical start (left LTR, right RTL) */}
            <div className="absolute bottom-5 md:bottom-7 start-5 md:start-7 pointer-events-none flex items-center gap-3">
              <div style={{ width: "18px", height: "1px", background: GOLD, opacity: 0.65 }} />
              <span
                className={isArabic ? "font-arabic" : ""}
                style={{
                  color: "rgba(237,229,255,0.72)",
                  fontSize: isArabic ? "11px" : "10px",
                  fontWeight: 600,
                  letterSpacing: isArabic ? "0.10em" : "0.38em",
                  textTransform: isArabic ? "none" : "uppercase",
                }}
              >
                {copy.estLabel}
              </span>
            </div>

            {/* Location whisper — logical end (right LTR, left RTL) */}
            <div className="absolute bottom-5 md:bottom-7 end-5 md:end-7 pointer-events-none">
              <span
                className={isArabic ? "font-arabic" : ""}
                style={{
                  color: "rgba(237,229,255,0.50)",
                  fontSize: isArabic ? "10.5px" : "9.5px",
                  fontWeight: 500,
                  letterSpacing: isArabic ? "0.08em" : "0.34em",
                  textTransform: isArabic ? "none" : "uppercase",
                }}
              >
                {copy.location}
              </span>
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
            BOTTOM — 2×2 Pillars
            ════════════════════════════════════════════ */}

        {/* Section label — Aman-style fading gold dividers */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center justify-center gap-5 md:gap-6 mb-10 md:mb-14"
        >
          <div
            className="flex-1 h-px max-w-[88px] md:max-w-[120px]"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(187,138,60,0.34) 80%)",
            }}
          />
          <span
            className={isArabic ? "font-arabic" : ""}
            style={{
              fontSize: isArabic ? "12px" : "10px",
              fontWeight: 600,
              letterSpacing: isArabic ? "0.18em" : "0.44em",
              textTransform: isArabic ? "none" : "uppercase",
              color: "rgba(237,229,255,0.62)",
              whiteSpace: "nowrap",
            }}
          >
            {copy.hallmarksLabel}
          </span>
          <div
            className="flex-1 h-px max-w-[88px] md:max-w-[120px]"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(187,138,60,0.34) 80%)",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-28 gap-y-14 md:gap-y-18 lg:gap-y-20">
          {copy.pillars.map((p, i) => (
            <motion.div
              key={p.t}
              {...fadeUp(0.08 + (i % 2) * 0.08)}
              className="group relative"
            >
              {/* Numeral — standalone (LTR digits in both languages, looks editorial) */}
              <span
                className="block font-serif font-light transition-transform duration-500 group-hover:translate-x-0.5"
                style={{
                  color: GOLD,
                  fontSize: "clamp(15px, 1.5vw, 19px)",
                  letterSpacing: "0.08em",
                  opacity: 0.88,
                  lineHeight: 1,
                  marginBottom: isArabic ? "clamp(18px, 2.2vw, 26px)" : "clamp(22px, 2.6vw, 30px)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3
                className={`${serif} font-light transition-colors duration-500 group-hover:text-[color:var(--accent-color)]`}
                style={
                  {
                    color: CREAM,
                    ...typo.pillarTitle,
                    marginBottom: isArabic ? "clamp(16px, 1.8vw, 22px)" : "clamp(18px, 2vw, 24px)",
                    ["--accent-color" as string]: SMOKED_GOLD,
                  } as React.CSSProperties
                }
              >
                {p.t}
              </h3>

              {/* Thin gold rule */}
              <div
                className="transition-all duration-700 group-hover:w-12"
                style={{
                  width: "24px",
                  height: "1px",
                  background: GOLD,
                  opacity: 0.52,
                  marginBottom: isArabic ? "clamp(20px, 2.2vw, 26px)" : "clamp(18px, 2vw, 22px)",
                }}
              />

              {/* Description */}
              <p
                className={`${isArabic ? "font-arabic" : ""} font-light`}
                style={{
                  color: MUTED,
                  ...typo.pillarDesc,
                }}
              >
                {p.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
