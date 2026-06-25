"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";

const GOLD = "#C79A3B";
const CREAM = "#F5F2EA";
const CREAM_BODY = "rgba(245,242,234,0.68)";
const CREAM_MUTED = "rgba(245,242,234,0.34)";
const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`;
const EASE: [number, number, number, number] = [0.22, 0.08, 0.24, 1.0];

const STEPS = {
  en: [
    {
      num: "01",
      title: "Consultation",
      desc: "We listen to your vision, understand your guests, and translate your aspirations into a blueprint for an extraordinary experience.",
    },
    {
      num: "02",
      title: "Curation",
      desc: "Every detail is chosen with intention — menus, atmosphere, styling, and moments that speak before a word is said.",
    },
    {
      num: "03",
      title: "Preparation",
      desc: "Invisible precision behind every effortless moment — meticulous logistics, timing, and craft at the highest level.",
    },
    {
      num: "04",
      title: "Execution",
      desc: "The day arrives, and we disappear into the background — leaving only the extraordinary.",
    },
  ],
  ar: [
    {
      num: "01",
      title: "الاستشارة",
      desc: "نستمع إلى رؤيتك ونفهم ضيوفك ونترجم تطلعاتك إلى مخطط لتجربة استثنائية.",
    },
    {
      num: "02",
      title: "التصميم",
      desc: "كل تفصيل يُختار بقصد — قوائم الطعام والأجواء والتنسيق ولحظات تتكلم قبل أن يُقال أي كلام.",
    },
    {
      num: "03",
      title: "التحضير",
      desc: "دقة غير مرئية خلف كل لحظة سلسة — لوجستيات محكمة وتوقيت دقيق وحرفية عالية.",
    },
    {
      num: "04",
      title: "التنفيذ",
      desc: "يصل اليوم ونختفي في الخلفية — تاركين فقط ما هو استثنائي.",
    },
  ],
};

export default function OurProcess() {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const steps = isArabic ? STEPS.ar : STEPS.en;
  const serif = isArabic ? "font-arabic" : "font-serif";

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = steps[active];
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = useCallback(
    (index: number) => {
      setActive(index);
      setPaused(true);
      if (resumeRef.current) clearTimeout(resumeRef.current);
      resumeRef.current = setTimeout(() => setPaused(false), 8000);
    },
    []
  );

  /* Auto-advance every 4s unless user has interacted */
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearTimeout(id);
  }, [active, paused, steps.length]);

  /* Progress fill: spans from first marker to active marker */
  const fillPct = `${(active / (steps.length - 1)) * 75}%`;

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, #090022 0%, #0D0028 40%, #0F002E 70%, #090022 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Centred glow */}
      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
      >
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "65%",
            height: "90%",
            background:
              "radial-gradient(ellipse, rgba(199,154,59,0.050) 0%, transparent 62%)",
            filter: "blur(110px)",
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
            "radial-gradient(ellipse 72% 80% at 50% 50%, black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 72% 80% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Grain */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE,
          opacity: 0.026,
          mixBlendMode: "overlay",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="relative max-w-360 mx-auto"
        style={{
          zIndex: 2,
          paddingTop: "clamp(48px, 6vw, 80px)",
          paddingBottom: "clamp(48px, 6vw, 80px)",
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 6vw, 96px)",
        }}
      >
        {/* ══════════════════════════════════════
            HEADER
        ══════════════════════════════════════ */}
        <div
          className={isArabic ? "text-right" : "text-left"}
          style={{ marginBottom: "clamp(24px, 3.2vw, 40px)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: EASE }}
            className={`flex items-center gap-3 ${
              isArabic ? "flex-row-reverse justify-end" : "justify-start"
            }`}
            style={{ marginBottom: "clamp(12px, 1.6vw, 18px)" }}
          >
            <div
              style={{ width: "20px", height: "1px", background: GOLD, opacity: 0.44 }}
            />
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
              {isArabic ? "منهجيتنا" : "Our Process"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.0, delay: 0.07, ease: EASE }}
            className={`${serif} font-light`}
            style={{
              color: CREAM,
              fontSize: isArabic
                ? "clamp(24px, 3.4vw, 48px)"
                : "clamp(22px, 3.0vw, 44px)",
              lineHeight: isArabic ? 1.40 : 1.06,
              letterSpacing: isArabic ? 0 : "-0.024em",
              marginBottom: "clamp(8px, 1.2vw, 14px)",
            }}
          >
            {isArabic ? (
              "صياغة تجارب استثنائية."
            ) : (
              <>
                Crafting{" "}
                <em
                  style={{
                    color: "rgba(199,154,59,0.86)",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  Extraordinary
                </em>{" "}
                Experiences.
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.95, delay: 0.14, ease: EASE }}
            className={isArabic ? "font-arabic" : ""}
            style={{
              color: CREAM_MUTED,
              fontSize: isArabic
                ? "clamp(12.5px, 1.05vw, 15px)"
                : "clamp(12px, 0.98vw, 14px)",
              lineHeight: isArabic ? 1.88 : 1.72,
              fontWeight: 300,
              maxWidth: "460px",
              letterSpacing: isArabic ? 0 : "0.006em",
              ...(isArabic ? { marginLeft: "auto" } : {}),
            }}
          >
            {isArabic
              ? "كل احتفال يتكشّف عبر رحلة منسّقة من التخطيط والضيافة والتنسيق والتنفيذ المثالي."
              : "Every celebration unfolds through a carefully curated journey of planning, hospitality, styling, and flawless execution."}
          </motion.p>
        </div>

        {/* ══════════════════════════════════════
            ACTIVE STAGE CONTENT
        ══════════════════════════════════════ */}
        <div
          style={{
            minHeight: "clamp(86px, 9vw, 112px)",
            marginBottom: "clamp(20px, 2.8vw, 34px)",
          }}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.36, ease: EASE }}
            >
              {/* Step number */}
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "9px",
                  letterSpacing: "0.46em",
                  color: GOLD,
                  opacity: 0.68,
                  marginBottom: "clamp(6px, 0.8vw, 10px)",
                  direction: "ltr",
                }}
              >
                {current.num}
                <span style={{ opacity: 0.40 }}> / 04</span>
              </span>

              {/* Stage title */}
              <h3
                className={`${serif} font-light`}
                style={{
                  color: CREAM,
                  fontSize: isArabic
                    ? "clamp(18px, 2.2vw, 30px)"
                    : "clamp(17px, 2.0vw, 28px)",
                  lineHeight: isArabic ? 1.38 : 1.08,
                  letterSpacing: isArabic ? 0 : "-0.022em",
                  fontStyle: isArabic ? "normal" : "italic",
                  marginBottom: "clamp(6px, 0.9vw, 10px)",
                }}
              >
                {current.title}
              </h3>

              {/* Gold rule */}
              <div
                style={{
                  width: "22px",
                  height: "1px",
                  background: GOLD,
                  opacity: 0.40,
                  marginBottom: "clamp(6px, 0.9vw, 10px)",
                  ...(isArabic ? { marginLeft: "auto" } : {}),
                }}
              />

              {/* Description */}
              <p
                className={isArabic ? "font-arabic" : ""}
                style={{
                  color: CREAM_BODY,
                  fontSize: isArabic
                    ? "clamp(11.5px, 0.9vw, 13px)"
                    : "clamp(11px, 0.86vw, 12.5px)",
                  lineHeight: isArabic ? 1.90 : 1.80,
                  fontWeight: 300,
                  maxWidth: isArabic ? "420px" : "400px",
                  letterSpacing: isArabic ? 0 : "0.004em",
                  ...(isArabic ? { marginLeft: "auto" } : {}),
                }}
              >
                {current.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ══════════════════════════════════════
            JOURNEY TIMELINE
        ══════════════════════════════════════ */}
        <div>
          {/* Markers + connecting line */}
          <div
            style={{
              display: "flex",
              position: "relative",
              marginBottom: "clamp(10px, 1.3vw, 16px)",
              direction: isArabic ? "rtl" : "ltr",
            }}
          >
            {/* Background line — spans between outer marker centres */}
            <div
              style={{
                position: "absolute",
                left: "12.5%",
                right: "12.5%",
                top: "50%",
                transform: "translateY(-50%)",
                height: "1px",
                background: "rgba(199,154,59,0.14)",
                pointerEvents: "none",
              }}
            />

            {/* Animated gold progress fill */}
            <motion.div
              animate={{ width: fillPct }}
              transition={{ duration: 0.65, ease: EASE }}
              style={{
                position: "absolute",
                [isArabic ? "right" : "left"]: "12.5%",
                top: "50%",
                transform: "translateY(-50%)",
                height: "1px",
                background: GOLD,
                opacity: 0.62,
                pointerEvents: "none",
              }}
            />

            {/* Stage markers */}
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  padding: "8px 0",
                }}
              >
                <button
                  onClick={() => handleClick(i)}
                  aria-label={step.title}
                  style={{
                    background: "none",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <motion.div
                    animate={{
                      width: i === active ? "13px" : "7px",
                      height: i === active ? "13px" : "7px",
                      background: i <= active ? GOLD : "rgba(199,154,59,0.20)",
                      opacity: i === active ? 1 : 0.55,
                      boxShadow:
                        i === active
                          ? "0 0 10px rgba(199,154,59,0.50)"
                          : "none",
                    }}
                    transition={{ duration: 0.38, ease: EASE }}
                    style={{ borderRadius: "50%" }}
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Stage name labels */}
          <div
            style={{
              display: "flex",
              direction: isArabic ? "rtl" : "ltr",
            }}
          >
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => handleClick(i)}
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  textAlign: "center",
                  padding: "0 4px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "8.5px",
                    letterSpacing: "0.36em",
                    color: GOLD,
                    opacity: i === active ? 0.82 : 0.32,
                    marginBottom: "4px",
                    transition: "opacity 0.30s ease",
                  }}
                >
                  {step.num}
                </span>
                <motion.span
                  animate={{
                    opacity: i === active ? 1 : 0.36,
                    color: i === active ? CREAM : CREAM_MUTED,
                  }}
                  transition={{ duration: 0.30 }}
                  className={serif}
                  style={{
                    display: "block",
                    fontSize: isArabic
                      ? "clamp(10.5px, 1.05vw, 14px)"
                      : "clamp(10px, 1.0vw, 13.5px)",
                    fontWeight: 300,
                    fontStyle: i === active && !isArabic ? "italic" : "normal",
                    letterSpacing: isArabic
                      ? 0
                      : i === active
                      ? "-0.018em"
                      : "-0.01em",
                    lineHeight: 1.28,
                  }}
                >
                  {step.title}
                </motion.span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
