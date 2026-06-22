"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "next-intl";

/* ═══════════════════════════════════════════════════════
   PALETTE
═══════════════════════════════════════════════════════ */
const GOLD = "#C79A3B";
const CREAM = "#F5F2EA";
const CREAM_BODY = "rgba(245,242,234,0.72)";
const CREAM_MUTED = "rgba(245,242,234,0.42)";
const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`;

/* ═══════════════════════════════════════════════════════
   MOTION
═══════════════════════════════════════════════════════ */
const EASE: [number, number, number, number] = [0.22, 0.08, 0.24, 1.0];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 1.0, delay, ease: EASE },
});

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
   HAIRLINE DIVIDER
═══════════════════════════════════════════════════════ */
function ServiceDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.2, ease: EASE }}
      style={{
        height: "1px",
        background:
          "linear-gradient(to right, transparent 0%, rgba(199,154,59,0.12) 20%, rgba(199,154,59,0.22) 50%, rgba(199,154,59,0.12) 80%, transparent 100%)",
        margin: "clamp(48px, 6.5vw, 88px) 0",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════
   SERVICE ROW
═══════════════════════════════════════════════════════ */
function ServiceRow({
  service,
  index,
  isArabic,
  locale,
}: {
  service: ServiceData;
  index: number;
  isArabic: boolean;
  locale: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  /* Subtle parallax drift on the image */
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const serif = isArabic ? "font-arabic" : "font-serif";

  /* Visual alternation — same in both languages (dir="ltr" forces layout) */
  const imageLeft = index % 2 === 0;

  return (
    <div
      ref={rowRef}
      dir="ltr"
      className={`flex flex-col items-start ${
        imageLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      style={{ gap: "clamp(32px, 5vw, 72px)", alignItems: "stretch" }}
    >
      {/* ── IMAGE ── */}
      <motion.div
        initial={{ opacity: 0, x: imageLeft ? -28 : 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.5, ease: EASE }}
        className="relative overflow-hidden group shrink-0"
        style={{
          flexBasis: "58%",
          aspectRatio: "4/3",
          borderRadius: "10px",
          boxShadow: [
            "0 70px 140px -35px rgba(0,0,0,0.60)",
            "0 30px 60px -20px rgba(0,0,0,0.28)",
            "0 0 80px -15px rgba(199,154,59,0.11)",
            "inset 0 0 0 1px rgba(199,154,59,0.07)",
          ].join(", "),
        }}
      >
        {/* Parallax image */}
        <motion.div
          style={{
            y,
            scale: 1.12,
            position: "absolute",
            inset: 0,
            willChange: "transform",
          }}
        >
          <Image
            src={service.img}
            alt={service.alt}
            fill
            className="object-cover transition-transform duration-3000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 58vw"
            style={{ filter: "saturate(1.06) contrast(1.03)" }}
          />
        </motion.div>

        {/* Cinematic vignette */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,0,34,0.16) 0%, transparent 18%, transparent 78%, rgba(9,0,34,0.28) 100%)",
          }}
        />
      </motion.div>

      {/* ── CONTENT ── */}
      <div className="flex-1 flex items-center">
        <div
          dir={isArabic ? "rtl" : "ltr"}
          style={{
            maxWidth: "380px",
            width: "100%",
            paddingTop: "clamp(8px, 2vw, 0px)",
            margin: isArabic ? "0 0 0 auto" : "0 auto 0 0",
          }}
        >
          {/* Number */}
          <motion.span
            {...fadeUp(0.10)}
            style={{
              display: "block",
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "11px",
              letterSpacing: "0.50em",
              color: GOLD,
              opacity: 0.70,
              marginBottom: "16px",
              direction: "ltr",
            }}
          >
            {service.num}
          </motion.span>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.16, ease: EASE }}
            style={{
              width: "32px",
              height: "1px",
              background: GOLD,
              opacity: 0.50,
              marginBottom: "22px",
              transformOrigin: isArabic ? "right center" : "left center",
              ...(isArabic ? { marginLeft: "auto", marginRight: 0 } : {}),
            }}
          />

          {/* Title */}
          <motion.h3
            {...fadeUp(0.20)}
            className={`${serif} font-light`}
            style={{
              color: CREAM,
              fontSize: isArabic
                ? "clamp(28px, 3.4vw, 48px)"
                : "clamp(28px, 3.4vw, 48px)",
              lineHeight: isArabic ? 1.45 : 1.06,
              letterSpacing: isArabic ? 0 : "-0.025em",
              marginBottom: "clamp(16px, 1.8vw, 24px)",
            }}
          >
            {isArabic ? service.title : <em>{service.title}</em>}
          </motion.h3>

          {/* Description */}
          <motion.p
            {...fadeUp(0.28)}
            className={isArabic ? "font-arabic" : ""}
            style={{
              color: CREAM_BODY,
              fontSize: isArabic
                ? "clamp(14px, 1.2vw, 17px)"
                : "clamp(13.5px, 1.1vw, 16px)",
              lineHeight: isArabic ? 1.95 : 1.82,
              fontWeight: 300,
              marginBottom: "clamp(24px, 2.8vw, 36px)",
              maxWidth: isArabic ? "360px" : "300px",
            }}
          >
            {service.desc}
          </motion.p>

          {/* CTA link */}
          <motion.div {...fadeUp(0.36)}>
            <Link
              href={`/${locale}/services`}
              className="group inline-flex items-center gap-2"
              style={{ textDecoration: "none" }}
            >
              <span
                className={isArabic ? "font-arabic" : ""}
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: isArabic ? "0.08em" : "0.40em",
                  textTransform: isArabic ? "none" : "uppercase",
                  color: GOLD,
                  opacity: 0.68,
                  transition: "opacity 0.35s ease",
                }}
              >
                {isArabic ? "اكتشف الخدمة" : "Explore Service"}
              </span>
              <span
                style={{
                  color: GOLD,
                  opacity: 0.68,
                  fontSize: "13px",
                  display: "inline-block",
                  transition: "transform 0.35s ease, opacity 0.35s ease",
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
        </div>
      </div>
    </div>
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
            top: "4%",
            right: "-5%",
            width: "46%",
            height: "46%",
            background:
              "radial-gradient(ellipse, rgba(199,154,59,0.07) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "-6%",
            width: "50%",
            height: "50%",
            background:
              "radial-gradient(ellipse, rgba(199,154,59,0.05) 0%, transparent 62%)",
            filter: "blur(95px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            right: "8%",
            width: "42%",
            height: "42%",
            background:
              "radial-gradient(ellipse, rgba(199,154,59,0.06) 0%, transparent 60%)",
            filter: "blur(75px)",
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
          opacity: 0.030,
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
            SECTION HEADER — left-anchored
        ══════════════════════════════════════ */}
        <div
          className={isArabic ? "text-right" : "text-left"}
          style={{ marginBottom: "clamp(60px, 8vw, 100px)" }}
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
            style={{ marginBottom: "clamp(20px, 2.5vw, 30px)" }}
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

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, delay: 0.08, ease: EASE }}
            className={`${serif} font-light`}
            style={{
              color: CREAM,
              fontSize: isArabic
                ? "clamp(36px, 5.4vw, 74px)"
                : "clamp(36px, 5.2vw, 72px)",
              lineHeight: isArabic ? 1.38 : 1.04,
              letterSpacing: isArabic ? 0 : "-0.025em",
              marginBottom: "clamp(18px, 2.2vw, 28px)",
              maxWidth: isArabic ? "800px" : "680px",
            }}
          >
            {isArabic ? (
              "صياغة تجارب ضيافة\nاستثنائية."
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
                ? "clamp(15px, 1.3vw, 18px)"
                : "clamp(14px, 1.2vw, 17px)",
              lineHeight: isArabic ? 1.9 : 1.7,
              fontWeight: 300,
              maxWidth: isArabic ? "500px" : "460px",
              letterSpacing: isArabic ? 0 : "0.01em",
              ...(isArabic ? { marginLeft: "auto", marginRight: 0 } : {}),
            }}
          >
            {isArabic
              ? "ستة تخصصات راقية تحمل معها مستوى الإتقان الذي اشتهرنا به منذ أربعة عشر عاماً في المملكة."
              : "Six extraordinary specialities, each carrying the same standard of excellence upheld for fourteen years across Saudi Arabia."}
          </motion.p>
        </div>

        {/* ══════════════════════════════════════
            EDITORIAL SERVICE GALLERY
        ══════════════════════════════════════ */}
        <div>
          {services.map((service, i) => (
            <div key={service.num}>
              {i > 0 && <ServiceDivider />}
              <ServiceRow
                service={service}
                index={i}
                isArabic={isArabic}
                locale={locale}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
