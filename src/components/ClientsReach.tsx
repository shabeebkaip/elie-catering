"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "next-intl";

const GOLD = "#C79A3B";
const CREAM = "#F5F2EA";
const CREAM_BODY = "rgba(245,242,234,0.65)";
const CREAM_MUTED = "rgba(245,242,234,0.36)";
const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`;
const EASE: [number, number, number, number] = [0.22, 0.08, 0.24, 1.0];

const MARQUEE_EN = [
  "Private Families",
  "Embassies",
  "Executive Gatherings",
  "Government Delegations",
  "Luxury Weddings",
  "Private Estates",
  "Distinguished Organizations",
  "Royal Occasions",
  "Corporate Leadership",
  "Diplomatic Missions",
];
const MARQUEE_AR = [
  "العائلات الخاصة",
  "السفارات",
  "التجمعات التنفيذية",
  "الوفود الحكومية",
  "الأفراح الفاخرة",
  "المقار الخاصة",
  "المؤسسات المرموقة",
  "المناسبات الملكية",
  "القيادات المؤسسية",
  "البعثات الدبلوماسية",
];

const SUPPORTING_EN = [
  { num: "500+",       label: "Curated\nEvents" },
  { num: "Nationwide", label: "Across\nSaudi Arabia" },
  { num: "100%",       label: "Every Detail\nBespoke" },
];
const SUPPORTING_AR = [
  { num: "٥٠٠+",    label: "فعالية\nمنسّقة" },
  { num: "المملكة", label: "حضور في\nكل مكان" },
  { num: "١٠٠٪",   label: "كل تجربة\nفريدة" },
];

const INNER_GAP = "clamp(14px, 2.2vw, 32px)";

export default function ClientsReach() {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const serif = isArabic ? "font-arabic" : "font-serif";

  const marqueeItems = [
    ...(isArabic ? MARQUEE_AR : MARQUEE_EN),
    ...(isArabic ? MARQUEE_AR : MARQUEE_EN),
  ];
  const supporting = isArabic ? SUPPORTING_AR : SUPPORTING_EN;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <section
      ref={sectionRef}
      style={{
        background:
          "linear-gradient(180deg, #090022 0%, #0C0026 35%, #0F002E 65%, #090022 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .cr-metrics {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          align-items: start;
        }
        @media (max-width: 767px) {
          .cr-metrics {
            grid-template-columns: 1fr 1fr;
          }
          .cr-hero-metric {
            grid-column: 1 / -1;
            border-right: none !important;
            border-bottom: 1px solid rgba(199,154,59,0.18);
            padding-bottom: clamp(20px, 4vw, 32px) !important;
            margin-bottom: 0;
          }
          .cr-support-metric {
            border-left: none !important;
            border-right: none !important;
          }
          .cr-support-metric:nth-child(2),
          .cr-support-metric:nth-child(3) {
            border-top: none;
          }
          .cr-support-metric:nth-child(3) {
            border-right: 1px solid rgba(199,154,59,0.14) !important;
          }
        }
        @media (max-width: 767px) and (prefers-reduced-motion: no-preference) {
          .cr-marquee { animation-duration: 35s; }
        }
      `}</style>

      {/* Ambient glow */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "8%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "78%",
            height: "78%",
            background: "radial-gradient(ellipse, rgba(199,154,59,0.052) 0%, transparent 62%)",
            filter: "blur(140px)",
          }}
        />
      </div>

      {/* Architectural grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(199,154,59,0.016) 1px, transparent 1px),
            linear-gradient(90deg, rgba(199,154,59,0.016) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 85% at 50% 50%, black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 85% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Grain */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE,
          opacity: 0.025,
          mixBlendMode: "overlay",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="relative"
        style={{
          zIndex: 2,
          paddingTop: "clamp(64px, 8vw, 108px)",
          paddingBottom: "clamp(64px, 8vw, 108px)",
        }}
      >

        {/* ══════════════════════════════════════
            HEADER — cascading reveal top to bottom
        ══════════════════════════════════════ */}
        <div
          className="max-w-360 mx-auto"
          style={{
            paddingLeft: "clamp(24px, 6vw, 96px)",
            paddingRight: "clamp(24px, 6vw, 96px)",
            marginBottom: "clamp(40px, 5vw, 62px)",
          }}
        >
          <div className={isArabic ? "text-right" : "text-left"}>

            {/* Eyebrow — step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.80, delay: 0, ease: EASE }}
              className={`flex items-center gap-3 ${
                isArabic ? "flex-row-reverse justify-end" : "justify-start"
              }`}
              style={{ marginBottom: "clamp(12px, 1.4vw, 18px)" }}
            >
              <div style={{ width: "20px", height: "1px", background: GOLD, opacity: 0.44 }} />
              <span
                className={isArabic ? "font-arabic" : ""}
                style={{
                  fontSize: isArabic ? "11px" : "9.5px",
                  fontWeight: 600,
                  letterSpacing: isArabic ? "0.18em" : "0.46em",
                  textTransform: isArabic ? "none" : "uppercase",
                  color: GOLD,
                  opacity: 0.70,
                }}
              >
                {isArabic ? "عملاؤنا" : "Our Clients"}
              </span>
            </motion.div>

            {/* Heading — step 2 */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.0, delay: 0.14, ease: EASE }}
              className={`${serif} font-light`}
              style={{
                y: headingY,
                color: CREAM,
                fontSize: isArabic
                  ? "clamp(30px, 4.5vw, 62px)"
                  : "clamp(28px, 4.2vw, 58px)",
                lineHeight: isArabic ? 1.38 : 1.04,
                letterSpacing: isArabic ? 0 : "-0.026em",
                marginBottom: "clamp(18px, 2.2vw, 28px)",
                maxWidth: isArabic ? "620px" : "520px",
                ...(isArabic ? { marginLeft: "auto" } : {}),
              }}
            >
              {isArabic ? (
                <>
                  موثوق به من{" "}
                  <em style={{ color: "rgba(199,154,59,0.88)", fontStyle: "normal" }}>
                    التميّز.
                  </em>
                </>
              ) : (
                <>
                  Trusted by{" "}
                  <em style={{ color: "rgba(199,154,59,0.88)", fontStyle: "italic", fontWeight: 300 }}>
                    Excellence.
                  </em>
                </>
              )}
            </motion.h2>

            {/* Gold rule — step 3 */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.80, delay: 0.26, ease: EASE }}
              style={{
                width: "32px",
                height: "1px",
                background: GOLD,
                opacity: 0.40,
                marginBottom: "clamp(14px, 1.7vw, 22px)",
                transformOrigin: isArabic ? "right center" : "left center",
                ...(isArabic ? { marginLeft: "auto" } : {}),
              }}
            />

            {/* Subtitle — step 4 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.90, delay: 0.38, ease: EASE }}
              className={isArabic ? "font-arabic" : ""}
              style={{
                color: CREAM_BODY,
                fontSize: isArabic
                  ? "clamp(13px, 1.12vw, 16px)"
                  : "clamp(12.5px, 1.05vw, 15px)",
                lineHeight: isArabic ? 1.92 : 1.78,
                fontWeight: 300,
                maxWidth: isArabic ? "450px" : "420px",
                letterSpacing: isArabic ? 0 : "0.006em",
                ...(isArabic ? { marginLeft: "auto" } : {}),
              }}
            >
              {isArabic
                ? "لأكثر من أربعة عشر عاماً، اؤتمن إيلي على الاحتفالات والتجمعات التنفيذية والمناسبات الخاصة وتجارب الضيافة المتميزة في جميع أنحاء المملكة العربية السعودية."
                : "For over fourteen years, Elie has been entrusted with celebrations, executive gatherings, private occasions, and distinguished hospitality experiences across Saudi Arabia."}
            </motion.p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            MARQUEE — step 5
            Always visible. Both locales: left-moving.
            Feels like a subtle editorial detail.
        ══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
          style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}
        >
          {/* Top hairline */}
          <div
            style={{
              height: "1px",
              background: `linear-gradient(to right, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)`,
              opacity: 0.16,
              marginBottom: "clamp(20px, 2.5vw, 30px)",
            }}
          />

          {/* Scrolling track */}
          <div style={{ overflow: "hidden", position: "relative" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: 0, top: 0, bottom: 0,
                width: "140px",
                background: "linear-gradient(to right, #090022 0%, transparent 100%)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                right: 0, top: 0, bottom: 0,
                width: "140px",
                background: "linear-gradient(to left, #090022 0%, transparent 100%)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "max-content",
                animation: "marquee 50s linear infinite",
                willChange: "transform",
              }}
            >
              {marqueeItems.map((item, i) => (
                <span
                  key={i}
                  style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
                >
                  <span
                    className={isArabic ? "font-arabic" : "font-serif"}
                    style={{
                      fontSize: isArabic
                        ? "clamp(12.5px, 1.2vw, 17px)"
                        : "clamp(11.5px, 1.05vw, 15.5px)",
                      fontStyle: isArabic ? "normal" : "italic",
                      fontWeight: 300,
                      color: CREAM,
                      opacity: 0.44,
                      whiteSpace: "nowrap",
                      paddingLeft: "clamp(28px, 3.2vw, 48px)",
                      paddingRight: "clamp(28px, 3.2vw, 48px)",
                      letterSpacing: isArabic ? "0.06em" : "0.08em",
                    }}
                  >
                    {item}
                  </span>
                  <span
                    style={{
                      color: GOLD,
                      opacity: 0.28,
                      fontSize: "6px",
                      flexShrink: 0,
                    }}
                  >
                    ◆
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Bottom hairline */}
          <div
            style={{
              height: "1px",
              background: `linear-gradient(to right, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)`,
              opacity: 0.16,
              marginTop: "clamp(20px, 2.5vw, 30px)",
            }}
          />
        </motion.div>

        {/* ══════════════════════════════════════
            METRICS — steps 6–9
            Single continuous hairline unifies all four
            metrics visually (solves RTL detachment).
            Hero (2fr) + 3 supporting (1fr each).
        ══════════════════════════════════════ */}
        <div
          className="max-w-360 mx-auto"
          style={{
            paddingLeft: "clamp(24px, 6vw, 96px)",
            paddingRight: "clamp(24px, 6vw, 96px)",
          }}
        >
          {/* One continuous gold hairline across all metrics */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              height: "1px",
              background: GOLD,
              opacity: 0.28,
              transformOrigin: isArabic ? "right center" : "left center",
            }}
          />

          <div
            className="cr-metrics"
            style={{
              gridTemplateColumns: isArabic ? "1fr 1fr 1fr 2fr" : "2fr 1fr 1fr 1fr",
              direction: isArabic ? "rtl" : "ltr",
            }}
          >

            {/* ── HERO: 14+ Years of Excellence ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.0, delay: 0, ease: EASE }}
              className="cr-hero-metric"
              style={{
                paddingTop: "clamp(36px, 4.5vw, 56px)",
                paddingBottom: "clamp(28px, 3.5vw, 44px)",
                paddingLeft: isArabic ? INNER_GAP : 0,
                paddingRight: isArabic ? 0 : INNER_GAP,
                borderLeft: "none",
                borderRight: "none",
              }}
            >
              {/* Hero number */}
              <div
                className={serif}
                style={{
                  color: "rgba(199,154,59,0.93)",
                  fontSize: "clamp(58px, 9vw, 118px)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  lineHeight: 0.88,
                  letterSpacing: isArabic ? 0 : "-0.03em",
                  marginBottom: "clamp(14px, 1.6vw, 22px)",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {isArabic ? "١٤+" : "14+"}
              </div>

              {/* Label row 1 — quiet, tracked */}
              <div
                className={isArabic ? "font-arabic" : ""}
                style={{
                  color: CREAM_MUTED,
                  fontSize: isArabic
                    ? "clamp(11px, 0.92vw, 13.5px)"
                    : "clamp(10px, 0.82vw, 12px)",
                  fontWeight: 300,
                  letterSpacing: isArabic ? "0.05em" : "0.14em",
                  textTransform: isArabic ? "none" : "uppercase",
                  textAlign: isArabic ? "right" : "left",
                  marginBottom: "4px",
                }}
              >
                {isArabic ? "عاماً من" : "Years of"}
              </div>

              {/* Label row 2 — serif italic, slightly brighter */}
              <div
                className={serif}
                style={{
                  color: "rgba(245,242,234,0.74)",
                  fontSize: isArabic
                    ? "clamp(14px, 1.35vw, 20px)"
                    : "clamp(13px, 1.2vw, 18px)",
                  fontStyle: isArabic ? "normal" : "italic",
                  fontWeight: 300,
                  letterSpacing: isArabic ? "0.02em" : "0.005em",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {isArabic ? "التميّز" : "Excellence"}
              </div>
            </motion.div>

            {/* ── SUPPORTING METRICS — steps 7, 8, 9 ── */}
            {supporting.map((metric, i) => {
              const isLast = i === 2;
              const pL = isArabic ? (isLast ? 0 : INNER_GAP) : INNER_GAP;
              const pR = isArabic ? INNER_GAP : (isLast ? 0 : INNER_GAP);
              const delay = (i + 1) * 0.15;

              return (
                <motion.div
                  key={metric.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.90, delay, ease: EASE }}
                  className="cr-support-metric"
                  style={{
                    paddingTop: "clamp(36px, 4.5vw, 56px)",
                    paddingBottom: "clamp(28px, 3.5vw, 44px)",
                    paddingLeft: pL,
                    paddingRight: pR,
                    borderLeft: !isArabic
                      ? `1px solid rgba(199,154,59,${i === 0 ? 0.24 : 0.12})`
                      : "none",
                    borderRight: isArabic
                      ? `1px solid rgba(199,154,59,${i === 0 ? 0.24 : 0.12})`
                      : "none",
                  }}
                >
                  {/* Number */}
                  <div
                    className={`${serif} font-light`}
                    style={{
                      color: "rgba(199,154,59,0.85)",
                      fontSize: isArabic
                        ? "clamp(25px, 3.4vw, 46px)"
                        : "clamp(24px, 3.2vw, 44px)",
                      fontStyle: isArabic ? "normal" : "italic",
                      fontWeight: 300,
                      lineHeight: 1.06,
                      letterSpacing: isArabic ? 0 : "-0.02em",
                      marginBottom: "clamp(10px, 1.2vw, 16px)",
                      textAlign: isArabic ? "right" : "left",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {metric.num}
                  </div>

                  {/* Label */}
                  <p
                    className={isArabic ? "font-arabic" : ""}
                    style={{
                      color: CREAM_MUTED,
                      fontSize: isArabic
                        ? "clamp(10.5px, 0.88vw, 13px)"
                        : "clamp(9.5px, 0.80vw, 12px)",
                      lineHeight: isArabic ? 1.82 : 1.65,
                      fontWeight: 300,
                      letterSpacing: isArabic ? "0.04em" : "0.07em",
                      whiteSpace: "pre-line",
                      textAlign: isArabic ? "right" : "left",
                      textTransform: isArabic ? "none" : "uppercase",
                    }}
                  >
                    {metric.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
