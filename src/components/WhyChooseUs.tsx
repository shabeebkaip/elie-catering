"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

/* ═══════════════════════════════════════════════════════
   PALETTE
═══════════════════════════════════════════════════════ */
const GOLD = "#C79A3B";
const CREAM = "#F5F2EA";
const CREAM_BODY = "rgba(245,242,234,0.76)";
const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`;

/* ═══════════════════════════════════════════════════════
   MOTION
═══════════════════════════════════════════════════════ */
const EASE: [number, number, number, number] = [0.22, 0.08, 0.24, 1.0];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.1, delay, ease: EASE },
});

/* ═══════════════════════════════════════════════════════
   CONTENT
═══════════════════════════════════════════════════════ */
const INTRO = {
  en: {
    eyebrow: "Why Elie",
    title: "The Elie",
    accent: "Difference.",
    sub: "14 years of curated Saudi luxury hospitality.",
  },
  ar: {
    eyebrow: "لماذا إيلي",
    title: "تميّز",
    accent: "إيلي.",
    sub: "أكثر من 14 عاماً من الضيافة الفاخرة المصمّمة بعناية في المملكة.",
  },
};

const PILLARS = {
  en: [
    {
      num: "01",
      t: "Bespoke\nExperiences",
      d: "Menus and hospitality crafted uniquely for every occasion.",
      img: "/images/why-choose-us/bespoke.webp",
      alt: "Bespoke luxury catering",
    },
    {
      num: "02",
      t: "End-to-End\nExecution",
      d: "Every detail coordinated with precision and discretion.",
      img: "/images/why-choose-us/end-to-end.webp",
      alt: "End-to-end event execution",
    },
    {
      num: "03",
      t: "Private &\nCorporate Expertise",
      d: "Trusted by families, executives, embassies, and institutions.",
      img: "/images/why-choose-us/private-coorperate.webp",
      alt: "Private and corporate expertise",
    },
    {
      num: "04",
      t: "Saudi-wide\nHospitality",
      d: "Delivering exceptional experiences across the Kingdom.",
      img: "/images/why-choose-us/saudi-wide.webp",
      alt: "Saudi-wide luxury hospitality",
    },
  ],
  ar: [
    {
      num: "01",
      t: "تجارب مصمّمة\nبعناية",
      d: "قوائم وضيافة تُصاغ خصيصاً لكل مناسبة.",
      img: "/images/why-choose-us/bespoke.webp",
      alt: "تجارب ضيافة فاخرة مصمّمة",
    },
    {
      num: "02",
      t: "تنفيذ متكامل\nمن البداية إلى النهاية",
      d: "كل تفصيل مُنسَّق بدقة وهدوء خلف الكواليس.",
      img: "/images/why-choose-us/end-to-end.webp",
      alt: "تنفيذ متكامل للفعاليات",
    },
    {
      num: "03",
      t: "خبرة في المناسبات\nالخاصة والشركات",
      d: "موثوقون لدى العائلات والشركات وكبار الشخصيات.",
      img: "/images/why-choose-us/private-coorperate.webp",
      alt: "خبرة في المناسبات الخاصة والشركات",
    },
    {
      num: "04",
      t: "ضيافة راقية\nفي أنحاء المملكة",
      d: "تجارب استثنائية تمتد عبر كل أرجاء المملكة.",
      img: "/images/why-choose-us/saudi-wide.webp",
      alt: "ضيافة راقية في جميع أنحاء المملكة",
    },
  ],
};

/* ═══════════════════════════════════════════════════════
   SECTION
═══════════════════════════════════════════════════════ */
export default function WhyChooseUs() {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const intro = isArabic ? INTRO.ar : INTRO.en;
  const pillars = isArabic ? PILLARS.ar : PILLARS.en;
  const serif = isArabic ? "font-arabic" : "font-serif";

  return (
    <section
      id="why-us"
      style={{
        background:
          "linear-gradient(180deg, #090022 0%, #0D0028 30%, #12002F 60%, #090022 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-6%",
            width: "52%",
            height: "52%",
            background:
              "radial-gradient(ellipse, rgba(199,154,59,0.09) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-8%",
            width: "56%",
            height: "56%",
            background:
              "radial-gradient(ellipse, rgba(199,154,59,0.06) 0%, transparent 62%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      {/* Grain */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE,
          opacity: 0.032,
          mixBlendMode: "overlay",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ══════════════════════════════════════
          INTRO — centered, contained
      ══════════════════════════════════════ */}
      <div
        className="relative max-w-360 mx-auto text-center"
        style={{
          zIndex: 2,
          paddingTop: "clamp(72px, 9vw, 128px)",
          paddingBottom: "clamp(48px, 6vw, 76px)",
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 6vw, 96px)",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center justify-center gap-3"
          style={{ marginBottom: "clamp(24px, 3vw, 34px)" }}
        >
          <div style={{ width: "22px", height: "1px", background: GOLD, opacity: 0.48 }} />
          <span
            className={isArabic ? "font-arabic" : ""}
            style={{
              fontSize: isArabic ? "12px" : "10px",
              fontWeight: 600,
              letterSpacing: isArabic ? "0.18em" : "0.44em",
              textTransform: isArabic ? "none" : "uppercase",
              color: GOLD,
              opacity: 0.76,
            }}
          >
            {intro.eyebrow}
          </span>
          <div style={{ width: "22px", height: "1px", background: GOLD, opacity: 0.48 }} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          {...fadeUp(0.10)}
          className={`${serif} font-light`}
          style={{
            color: CREAM,
            fontSize: isArabic
              ? "clamp(42px, 6.2vw, 86px)"
              : "clamp(38px, 5.6vw, 78px)",
            lineHeight: isArabic ? 1.32 : 1.02,
            letterSpacing: isArabic ? 0 : "-0.025em",
            marginBottom: "clamp(18px, 2.5vw, 28px)",
          }}
        >
          {intro.title}{" "}
          {isArabic ? (
            <span
              className="font-arabic"
              style={{ color: "rgba(199,154,59,0.84)", fontWeight: 300 }}
            >
              {intro.accent}
            </span>
          ) : (
            <em style={{ color: "rgba(199,154,59,0.84)", fontStyle: "italic", fontWeight: 300 }}>
              {intro.accent}
            </em>
          )}
        </motion.h2>

        {/* Subline */}
        <motion.p
          {...fadeUp(0.17)}
          className={isArabic ? "font-arabic font-light" : `${serif} italic font-light`}
          style={{
            color: CREAM_BODY,
            fontSize: isArabic
              ? "clamp(16px, 1.55vw, 21px)"
              : "clamp(15px, 1.35vw, 19px)",
            lineHeight: isArabic ? 1.9 : 1.6,
            letterSpacing: isArabic ? 0 : "0.005em",
            maxWidth: isArabic ? "600px" : "500px",
            margin: "0 auto",
          }}
        >
          {intro.sub}
        </motion.p>
      </div>

      {/* ══════════════════════════════════════
          2×2 GRID — full-width, edge-to-edge
      ══════════════════════════════════════ */}
      <div className="relative" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "3px" }}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.5, delay: i * 0.07, ease: EASE }}
              className="relative overflow-hidden group"
              style={{ aspectRatio: "3/2" }}
            >
              {/* Photo */}
              <Image
                src={pillar.img}
                alt={pillar.alt}
                fill
                className="object-cover transition-transform duration-3000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ filter: "saturate(1.04) contrast(1.03)" }}
              />

              {/* Dark gradient — text side */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: isArabic
                    ? "linear-gradient(to left, rgba(9,0,34,0.92) 0%, rgba(9,0,34,0.78) 22%, rgba(9,0,34,0.52) 46%, rgba(9,0,34,0.18) 68%, rgba(9,0,34,0.05) 100%)"
                    : "linear-gradient(to right, rgba(9,0,34,0.92) 0%, rgba(9,0,34,0.78) 22%, rgba(9,0,34,0.52) 46%, rgba(9,0,34,0.18) 68%, rgba(9,0,34,0.05) 100%)",
                }}
              />
              {/* Top/bottom vignette */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(9,0,34,0.35) 0%, transparent 22%, transparent 70%, rgba(9,0,34,0.42) 100%)",
                }}
              />

              {/* Text overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-start"
                style={{ padding: "clamp(22px, 3.2vw, 44px)" }}
              >
                {/* Number */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "clamp(28px, 2.8vw, 42px)",
                    fontWeight: 400,
                    color: GOLD,
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                    marginBottom: "clamp(12px, 1.6vw, 20px)",
                    direction: "ltr",
                  }}
                >
                  {pillar.num}
                </motion.span>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: i * 0.08 + 0.08, ease: EASE }}
                  className={`${serif} font-light`}
                  style={{
                    color: CREAM,
                    fontSize: isArabic
                      ? "clamp(22px, 2.5vw, 35px)"
                      : "clamp(22px, 2.5vw, 38px)",
                    lineHeight: isArabic ? 1.5 : 1.12,
                    letterSpacing: isArabic ? 0 : "-0.02em",
                    marginBottom: "clamp(14px, 1.8vw, 22px)",
                    maxWidth: isArabic ? "340px" : "270px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {isArabic ? pillar.t : <em>{pillar.t}</em>}
                </motion.h3>

                {/* Gold rule */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08 + 0.16, ease: EASE }}
                  style={{
                    width: "30px",
                    height: "1px",
                    background: GOLD,
                    opacity: 0.65,
                    marginBottom: "clamp(12px, 1.6vw, 18px)",
                    transformOrigin: isArabic ? "right center" : "left center",
                    ...(isArabic ? { marginLeft: "auto", marginRight: 0 } : {}),
                  }}
                />

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: i * 0.08 + 0.24, ease: EASE }}
                  className={isArabic ? "font-arabic" : ""}
                  style={{
                    color: CREAM_BODY,
                    fontSize: isArabic
                      ? "clamp(13px, 1.15vw, 16px)"
                      : "clamp(12px, 1.0vw, 15px)",
                    lineHeight: isArabic ? 1.9 : 1.78,
                    fontWeight: 300,
                    maxWidth: isArabic ? "260px" : "220px",
                    ...(isArabic ? { marginLeft: "auto", marginRight: 0 } : {}),
                  }}
                >
                  {pillar.d}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
