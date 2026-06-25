"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";

/* ═══════════════════════════════════════════════════════
   PALETTE
═══════════════════════════════════════════════════════ */
const GOLD = "#C79A3B";
const CREAM = "#F5F2EA";
const CREAM_BODY = "rgba(245,242,234,0.72)";
const CREAM_MUTED = "rgba(245,242,234,0.40)";
const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`;
const EASE: [number, number, number, number] = [0.22, 0.08, 0.24, 1.0];
const ZOOM_EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ═══════════════════════════════════════════════════════
   CONTENT
═══════════════════════════════════════════════════════ */
const SERVICES = {
  en: [
    {
      num: "01",
      title: "Weddings",
      desc: "From the first vow to the final dance, every moment is orchestrated with grace, precision, and unforgettable beauty.",
      img: "/images/services/wedding.png",
      alt: "Luxury wedding by Elie Catering",
    },
    {
      num: "02",
      title: "Corporate Events",
      desc: "Executive gatherings and corporate celebrations elevated to the highest standard of Saudi hospitality and discretion.",
      img: "/images/services/coorperate-events.png",
      alt: "Corporate events by Elie",
    },
    {
      num: "03",
      title: "Private Gatherings",
      desc: "Intimate occasions transformed into extraordinary memories, curated with complete discretion and personal care.",
      img: "/images/services/private-gathering.png",
      alt: "Private gatherings by Elie",
    },
    {
      num: "04",
      title: "Luxury Catering",
      desc: "Menus of rare distinction, crafted by culinary artisans for the most discerning tables across the Kingdom.",
      img: "/images/services/luxury-catering.png",
      alt: "Luxury catering by Elie",
    },
    {
      num: "05",
      title: "Event Styling & Décor",
      desc: "Environments of breathtaking beauty — composed, installed, and perfected from initial concept to final detail.",
      img: "/images/services/event-styling.png",
      alt: "Event styling and décor",
    },
    {
      num: "06",
      title: "VIP Hospitality",
      desc: "An invisible hand behind every extraordinary experience — seamless, sovereign, and impossible to forget.",
      img: "/images/services/vip.png",
      alt: "VIP hospitality by Elie",
    },
  ],
  ar: [
    {
      num: "01",
      title: "حفلات الزفاف",
      desc: "من أول لحظة حتى آخرها — ننسّق كل تفصيل بأناقة واحترافية لا مثيل لهما.",
      img: "/images/services/wedding.png",
      alt: "حفلات زفاف فاخرة",
    },
    {
      num: "02",
      title: "الفعاليات المؤسسية",
      desc: "تجمعات تنفيذية وفعاليات الشركات تُرتقى إلى أعلى معايير الضيافة السعودية الفاخرة.",
      img: "/images/services/coorperate-events.png",
      alt: "الفعاليات المؤسسية",
    },
    {
      num: "03",
      title: "التجمعات الخاصة",
      desc: "مناسبات حميمة تتحوّل إلى ذكريات استثنائية، تُقدَّم بسرية وعناية لا حدود لهما.",
      img: "/images/services/private-gathering.png",
      alt: "التجمعات الخاصة",
    },
    {
      num: "04",
      title: "الضيافة الراقية",
      desc: "قوائم طعام من مستوى استثنائي، تُعدّها أيدٍ فنية لأرفع الموائد وأكثرها تميزاً.",
      img: "/images/services/luxury-catering.png",
      alt: "الضيافة الراقية",
    },
    {
      num: "05",
      title: "تنسيق الفعاليات والديكور",
      desc: "بيئات من الجمال الباهر تُصمَّم وتُنفَّذ من الفكرة الأولى حتى آخر لمسة بإتقان عالٍ.",
      img: "/images/services/event-styling.png",
      alt: "تنسيق الفعاليات والديكور",
    },
    {
      num: "06",
      title: "ضيافة كبار الضيوف",
      desc: "يدٌ خفية تُحرّك كل تجربة استثنائية بسلاسة وسيادة لا تُنسى.",
      img: "/images/services/vip.png",
      alt: "ضيافة كبار الضيوف",
    },
  ],
};

type ServiceData = (typeof SERVICES.en)[0];

/* ═══════════════════════════════════════════════════════
   NAV ITEM — lives in the dedicated dark panel
═══════════════════════════════════════════════════════ */
function NavItem({
  service,
  isActive,
  isFirst,
  isArabic,
  onClick,
}: {
  service: ServiceData;
  isActive: boolean;
  isFirst: boolean;
  isArabic: boolean;
  onClick: () => void;
}) {
  const serif = isArabic ? "font-arabic" : "font-serif";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: isArabic ? -3 : 3, backgroundColor: "rgba(199,154,59,0.04)" }}
      transition={{ duration: 0.20, ease: EASE }}
      style={{
        direction: "ltr",
        display: "flex",
        flexDirection: isArabic ? "row-reverse" : "row",
        alignItems: "center",
        gap: "clamp(12px, 1.2vw, 18px)",
        width: "100%",
        /* Left/right padding provides the indent; accent bar is absolute */
        paddingTop: isActive ? "clamp(15px, 1.7vw, 22px)" : "clamp(13px, 1.5vw, 19px)",
        paddingBottom: isActive ? "clamp(15px, 1.7vw, 22px)" : "clamp(13px, 1.5vw, 19px)",
        paddingLeft: isArabic ? "0" : "clamp(22px, 2.5vw, 36px)",
        paddingRight: isArabic ? "clamp(22px, 2.5vw, 36px)" : "clamp(16px, 1.8vw, 24px)",
        background: "none",
        border: "none",
        outline: "none",
        borderTop: isFirst ? "none" : "1px solid rgba(245,242,234,0.07)",
        cursor: "pointer",
        position: "relative",
        borderRadius: "4px",
      }}
    >
      {/* Animated gold accent bar */}
      <motion.div
        animate={{
          height: isActive ? "clamp(22px, 2.4vw, 34px)" : "0px",
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.42, ease: EASE }}
        style={{
          position: "absolute",
          [isArabic ? "right" : "left"]: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "2px",
          background: GOLD,
          borderRadius: "1px",
        }}
      />

      {/* Number */}
      <motion.span
        animate={{
          opacity: isActive ? 1 : 0.55,
          color: isActive ? GOLD : "rgba(199,154,59,0.70)",
        }}
        transition={{ duration: 0.35 }}
        style={{
          fontSize: "10px",
          letterSpacing: "0.34em",
          fontFamily: "var(--font-fraunces), Georgia, serif",
          flexShrink: 0,
          lineHeight: 1,
        }}
      >
        {service.num}
      </motion.span>

      {/* Title */}
      <motion.span
        animate={{ opacity: isActive ? 1 : 0.62 }}
        transition={{ duration: 0.35 }}
        className={serif}
        style={{
          /* Active items are slightly larger to create hierarchy */
          fontSize: isActive
            ? isArabic
              ? "clamp(17px, 1.65vw, 26px)"
              : "clamp(16px, 1.55vw, 25px)"
            : isArabic
            ? "clamp(15px, 1.48vw, 23px)"
            : "clamp(14px, 1.40vw, 22px)",
          fontWeight: 300,
          color: CREAM,
          letterSpacing: isArabic ? 0 : isActive ? "-0.025em" : "-0.015em",
          lineHeight: 1.22,
          flex: 1,
          textAlign: isArabic ? "right" : "left",
          direction: isArabic ? "rtl" : "ltr",
          transition: "font-size 0.30s ease",
        }}
      >
        {isArabic
          ? service.title
          : isActive
          ? <em>{service.title}</em>
          : service.title}
      </motion.span>

      {/* Arrow — slides in for the active item */}
      <motion.span
        animate={{
          opacity: isActive ? 0.75 : 0,
          x: isActive ? 0 : isArabic ? 10 : -10,
        }}
        transition={{ duration: 0.42, ease: EASE }}
        style={{
          color: GOLD,
          fontSize: "12px",
          flexShrink: 0,
        }}
      >
        {isArabic ? "←" : "→"}
      </motion.span>
    </motion.button>
  );
}

/* ═══════════════════════════════════════════════════════
   MOBILE TAB
═══════════════════════════════════════════════════════ */
function MobileTab({
  service,
  isActive,
  onClick,
}: {
  service: ServiceData;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        flexShrink: 0,
        background: "none",
        border: "none",
        outline: "none",
        cursor: "pointer",
        padding: "12px 0",
        marginRight: "26px",
        position: "relative",
      }}
    >
      <span
        style={{
          fontSize: "9px",
          letterSpacing: "0.38em",
          textTransform: "uppercase",
          fontFamily: "var(--font-fraunces), Georgia, serif",
          color: isActive ? CREAM : CREAM_MUTED,
          display: "block",
          paddingBottom: "7px",
          transition: "color 0.35s ease",
        }}
      >
        {service.num}
      </span>
      <motion.div
        animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 0.80 : 0 }}
        transition={{ duration: 0.40, ease: EASE }}
        style={{
          position: "absolute",
          bottom: "5px",
          left: 0,
          right: 0,
          height: "1px",
          background: GOLD,
          transformOrigin: "left center",
        }}
      />
    </button>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION
═══════════════════════════════════════════════════════ */
export default function OurServices() {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const services = isArabic ? SERVICES.ar : SERVICES.en;
  const serif = isArabic ? "font-arabic" : "font-serif";
  const [active, setActive] = useState(0);
  const current = services[active];

  useEffect(() => {
    const id = setTimeout(() => {
      setActive(prev => (prev + 1) % services.length);
    }, 6000);
    return () => clearTimeout(id);
  }, [active, services.length]);

  return (
    <section
      id="services"
      style={{
        background:
          "linear-gradient(180deg, #090022 0%, #0C0026 35%, #0F002C 65%, #090022 100%)",
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
            top: "8%",
            right: "-5%",
            width: "42%",
            height: "52%",
            background:
              "radial-gradient(ellipse, rgba(199,154,59,0.07) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "-5%",
            width: "44%",
            height: "48%",
            background:
              "radial-gradient(ellipse, rgba(199,154,59,0.05) 0%, transparent 62%)",
            filter: "blur(95px)",
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
          opacity: 0.03,
          mixBlendMode: "overlay",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="relative max-w-360 mx-auto"
        style={{
          zIndex: 2,
          paddingTop: "clamp(80px, 10vw, 140px)",
          paddingBottom: "clamp(80px, 10vw, 140px)",
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 6vw, 96px)",
        }}
      >
        {/* ══════════════════════════════════════
            SECTION HEADER
        ══════════════════════════════════════ */}
        <div
          className={isArabic ? "text-right" : "text-left"}
          style={{ marginBottom: "clamp(40px, 5vw, 68px)" }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className={`flex items-center gap-3 ${
              isArabic ? "flex-row-reverse justify-end" : "justify-start"
            }`}
            style={{ marginBottom: "clamp(20px, 2.5vw, 28px)" }}
          >
            <div
              style={{
                width: "22px",
                height: "1px",
                background: GOLD,
                opacity: 0.48,
              }}
            />
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
              {isArabic ? "خدماتنا" : "Our Services"}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, delay: 0.08, ease: EASE }}
            className={`${serif} font-light`}
            style={{
              color: CREAM,
              fontSize: isArabic
                ? "clamp(34px, 5.2vw, 70px)"
                : "clamp(34px, 5.0vw, 68px)",
              lineHeight: isArabic ? 1.38 : 1.04,
              letterSpacing: isArabic ? 0 : "-0.025em",
              marginBottom: "clamp(16px, 2vw, 24px)",
              maxWidth: isArabic ? "760px" : "640px",
            }}
          >
            {isArabic ? (
              "صياغة تجارب ضيافة استثنائية."
            ) : (
              <>
                Crafting Extraordinary{" "}
                <em
                  style={{
                    color: "rgba(199,154,59,0.84)",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  Hospitality.
                </em>
              </>
            )}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.0, delay: 0.16, ease: EASE }}
            className={isArabic ? "font-arabic" : ""}
            style={{
              color: CREAM_MUTED,
              fontSize: isArabic
                ? "clamp(14px, 1.2vw, 17px)"
                : "clamp(13.5px, 1.1vw, 16px)",
              lineHeight: isArabic ? 1.9 : 1.7,
              fontWeight: 300,
              maxWidth: isArabic ? "480px" : "440px",
              letterSpacing: isArabic ? 0 : "0.01em",
              ...(isArabic ? { marginLeft: "auto", marginRight: 0 } : {}),
            }}
          >
            {isArabic
              ? "ستة تخصصات راقية تحمل مستوى الإتقان الذي اشتهرنا به منذ أربعة عشر عاماً."
              : "Six extraordinary specialities. One standard of excellence upheld for fourteen years across Saudi Arabia."}
          </motion.p>
        </div>

        {/* ══════════════════════════════════════
            MOBILE TABS
        ══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex md:hidden overflow-x-auto"
          style={{
            marginBottom: "clamp(14px, 2vw, 22px)",
            scrollbarWidth: "none",
            direction: isArabic ? "rtl" : "ltr",
          }}
        >
          {services.map((s, i) => (
            <MobileTab
              key={s.num}
              service={s}
              isActive={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </motion.div>

        {/* ══════════════════════════════════════
            UNIFIED SHOWCASE
            image panel (left) + nav panel (right)
            both children of one overflow-hidden container
        ══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, ease: EASE }}
          style={{
            display: "flex",
            flexDirection: isArabic ? "row-reverse" : "row",
            height: "clamp(480px, 72vh, 800px)",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: [
              "0 80px 160px -40px rgba(0,0,0,0.74)",
              "0 40px 80px -24px rgba(0,0,0,0.40)",
              "0 0 120px -24px rgba(199,154,59,0.14)",
              "inset 0 0 0 1px rgba(199,154,59,0.10)",
            ].join(", "),
          }}
        >
          {/* ── IMAGE PANEL ── */}
          <div
            className="relative overflow-hidden"
            style={{ flex: 1, minWidth: 0 }}
          >
            {/* Full-bleed image with luxury zoom crossfade */}
            <AnimatePresence initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.75, ease: EASE },
                  scale: { duration: 1.8, ease: ZOOM_EASE },
                }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={current.img}
                  alt={current.alt}
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(1.08) contrast(1.03)" }}
                  sizes="(max-width: 768px) 100vw, 63vw"
                  priority={active === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Strong bottom gradient — anchors the editorial content */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                pointerEvents: "none",
                background:
                  "linear-gradient(to top, rgba(6,0,18,0.98) 0%, rgba(6,0,18,0.80) 20%, rgba(6,0,18,0.28) 42%, transparent 60%)",
              }}
            />

            {/* Subtle left-edge ambient gradient for depth */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                pointerEvents: "none",
                background: isArabic
                  ? "linear-gradient(to left, rgba(9,0,28,0.38) 0%, transparent 40%)"
                  : "linear-gradient(to right, rgba(9,0,28,0.38) 0%, transparent 40%)",
              }}
            />

            {/* ── EDITORIAL CONTENT — bottom of image ── */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "clamp(28px, 4vw, 56px)",
                zIndex: 2,
              }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.50, ease: EASE }}
                >
                  {/* Service number */}
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontSize: "11px",
                      letterSpacing: "0.46em",
                      color: GOLD,
                      opacity: 0.72,
                      marginBottom: "clamp(12px, 1.4vw, 18px)",
                      direction: "ltr",
                    }}
                  >
                    {current.num}
                    <span style={{ opacity: 0.45, letterSpacing: "0.28em" }}> / 06</span>
                  </span>

                  {/* Large editorial title */}
                  <h3
                    className={`${serif} font-light`}
                    style={{
                      color: CREAM,
                      fontSize: isArabic
                        ? "clamp(34px, 4.8vw, 76px)"
                        : "clamp(34px, 4.6vw, 74px)",
                      lineHeight: isArabic ? 1.30 : 1.03,
                      letterSpacing: isArabic ? "0.01em" : "-0.03em",
                      marginBottom: "clamp(14px, 1.6vw, 20px)",
                    }}
                  >
                    {isArabic ? current.title : <em>{current.title}</em>}
                  </h3>

                  {/* Gold rule */}
                  <div
                    style={{
                      width: "28px",
                      height: "1px",
                      background: GOLD,
                      opacity: 0.44,
                      marginBottom: "clamp(14px, 1.6vw, 20px)",
                      ...(isArabic
                        ? { marginLeft: "auto", marginRight: 0 }
                        : {}),
                    }}
                  />

                  {/* Description */}
                  <p
                    className={isArabic ? "font-arabic" : ""}
                    style={{
                      color: CREAM_BODY,
                      fontSize: "clamp(12.5px, 0.92vw, 15px)",
                      lineHeight: isArabic ? 1.9 : 1.78,
                      fontWeight: 300,
                      marginBottom: "clamp(20px, 2.4vw, 32px)",
                      maxWidth: isArabic ? "340px" : "310px",
                    }}
                  >
                    {current.desc}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/${locale}/services`}
                    className="inline-flex items-center gap-2 group"
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      className={isArabic ? "font-arabic" : ""}
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: isArabic ? "0.08em" : "0.44em",
                        textTransform: isArabic ? "none" : "uppercase",
                        color: GOLD,
                        opacity: 0.82,
                        transition: "opacity 0.28s ease",
                      }}
                    >
                      {isArabic ? "اكتشف الخدمة" : "Explore Service"}
                    </span>
                    <span
                      style={{
                        color: GOLD,
                        opacity: 0.82,
                        fontSize: "11px",
                        display: "inline-block",
                        transition: "transform 0.28s ease",
                      }}
                      className={
                        isArabic
                          ? "group-hover:-translate-x-1"
                          : "group-hover:translate-x-1"
                      }
                    >
                      {isArabic ? "←" : "→"}
                    </span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── DEDICATED NAV PANEL — desktop only ── */}
          <div
            className="hidden md:flex flex-col justify-center relative overflow-hidden"
            style={{
              flexShrink: 0,
              width: "37%",
              /* Deep luxury dark — subtle purple-black depth */
              background:
                "linear-gradient(160deg, #0E0028 0%, #08001C 52%, #0C0024 100%)",
              /* Gold hairline joining to image */
              borderLeft: isArabic
                ? "none"
                : "1px solid rgba(199,154,59,0.15)",
              borderRight: isArabic
                ? "1px solid rgba(199,154,59,0.15)"
                : "none",
            }}
          >
            {/* Grain on the nav panel */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: NOISE,
                opacity: 0.045,
                mixBlendMode: "overlay",
                pointerEvents: "none",
              }}
            />

            {/* Subtle radial depth — warm centre */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(ellipse at 60% 35%, rgba(28,6,56,0.55) 0%, transparent 65%)",
              }}
            />

            {/* Inner left-edge shadow — adds perceived depth at the seam */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                [isArabic ? "right" : "left"]: 0,
                width: "48px",
                background: isArabic
                  ? "linear-gradient(to left, rgba(0,0,0,0.22), transparent)"
                  : "linear-gradient(to right, rgba(0,0,0,0.22), transparent)",
                pointerEvents: "none",
              }}
            />

            {/* Nav content */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                padding: "clamp(28px, 3.5vw, 52px) clamp(20px, 2.8vw, 40px)",
              }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {/* Animated service counter */}
              <div
                style={{
                  marginBottom: "clamp(22px, 3vw, 38px)",
                  direction: "ltr",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "10px",
                    letterSpacing: "0.32em",
                    color: CREAM_MUTED,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={active}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.28 }}
                      style={{ display: "inline-block" }}
                    >
                      {String(active + 1).padStart(2, "0")}
                    </motion.span>
                  </AnimatePresence>
                  <span style={{ opacity: 0.45 }}> / 06</span>
                </span>

                {/* Timer progress hairline — resets on each service change */}
                <div
                  style={{
                    marginTop: "10px",
                    height: "1px",
                    background: "rgba(245,242,234,0.08)",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "1px",
                  }}
                >
                  <motion.div
                    key={active}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      height: "100%",
                      background: GOLD,
                      opacity: 0.55,
                      transformOrigin: "left center",
                    }}
                  />
                </div>
              </div>

              {/* Service index */}
              <nav aria-label="Services navigation">
                {services.map((s, i) => (
                  <NavItem
                    key={s.num}
                    service={s}
                    isActive={i === active}
                    isFirst={i === 0}
                    isArabic={isArabic}
                    onClick={() => setActive(i)}
                  />
                ))}
              </nav>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
