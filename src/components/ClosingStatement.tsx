"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const GOLD = "#C79A3B";
const CREAM = "#F5F2EA";
const CREAM_BODY = "rgba(245,242,234,0.65)";
const CREAM_MUTED = "rgba(245,242,234,0.38)";

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`;

const EASE: [number, number, number, number] = [0.22, 0.08, 0.24, 1.0];

const CONTENT = {
  en: {
    eyebrow: "PRIVATE HOSPITALITY",
    quote: "Every extraordinary celebration begins with a conversation.",
    headline1: "Your Celebration",
    headline2: "Awaits.",
    supporting:
      "Available across Saudi Arabia for weddings, executive hospitality, private gatherings, and bespoke celebrations.",
    cta: "Begin the Journey",
    phoneLabel: "Private Consultation",
    phone: "+966 54 435 6564",
  },
  ar: {
    eyebrow: "ضيافة خاصة",
    quote: "كل احتفال استثنائي يبدأ بحديث.",
    headline1: "احتفالك",
    headline2: "بانتظارك.",
    supporting:
      "نخدم مناطق المملكة العربية السعودية كافة — للأعراس، والضيافة التنفيذية، والتجمعات الخاصة، والمناسبات الراقية.",
    cta: "ابدأ الرحلة",
    phoneLabel: "استشارة خاصة",
    phone: "+966 54 435 6564",
  },
} as const;

function fade(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.05 as number },
    transition: { duration: 0.85, delay, ease: EASE },
  };
}

export default function ClosingStatement() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const c = isAr ? CONTENT.ar : CONTENT.en;

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, #090022 0%, #0C0026 35%, #0F002E 65%, #090022 100%)",
        overflow: "hidden",
      }}
    >
      {/* Grain */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE,
          backgroundSize: "180px 180px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 55% at 50% 60%, rgba(199,154,59,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Architectural grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(199,154,59,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(199,154,59,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ── Content wrapper ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "clamp(72px,10vw,128px) clamp(24px,6vw,80px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "clamp(48px, 7vw, 96px)",
          }}
        >

          {/* ── LEFT (EN) / RIGHT (AR): Editorial Content ── */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>

            {/* Eyebrow */}
            <motion.div {...fade(0)} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "clamp(28px,3.5vw,44px)" }}>
              <div style={{ width: 36, height: 1, background: GOLD, opacity: 0.6, flexShrink: 0 }} />
              <span
                style={{
                  color: GOLD,
                  opacity: 0.85,
                  fontSize: 10,
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontFamily: "inherit",
                }}
              >
                {c.eyebrow}
              </span>
            </motion.div>

            {/* Quote */}
            <motion.p
              {...fade(0.12)}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontSize: "clamp(16px,1.8vw,22px)",
                color: CREAM_BODY,
                lineHeight: 1.65,
                marginBottom: "clamp(28px,3.5vw,44px)",
                maxWidth: isAr ? 460 : 420,
                fontWeight: 300,
              }}
            >
              {c.quote}
            </motion.p>

            {/* Headline */}
            <motion.h2
              {...fade(0.22)}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 300,
                fontSize: "clamp(36px,5.8vw,88px)",
                color: CREAM,
                textTransform: "uppercase",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                marginBottom: "clamp(20px,3vw,40px)",
                overflowWrap: "break-word",
              }}
            >
              {isAr ? (
                <>
                  {c.headline1}
                  <br />
                  <em style={{ color: GOLD, fontStyle: "italic" }}>{c.headline2}</em>
                </>
              ) : (
                <>
                  Your<br />
                  Celebration<br />
                  <em style={{ color: GOLD, fontStyle: "italic" }}>Awaits.</em>
                </>
              )}
            </motion.h2>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                height: 1,
                background: GOLD,
                opacity: 0.3,
                transformOrigin: isAr ? "right center" : "left center",
                maxWidth: 480,
                marginBottom: "clamp(24px,3vw,36px)",
              }}
            />

            {/* Supporting sentence */}
            <motion.p
              {...fade(0.38)}
              style={{
                fontSize: "clamp(12px,1.15vw,15px)",
                color: CREAM_MUTED,
                lineHeight: 1.7,
                maxWidth: isAr ? 440 : 400,
                marginBottom: "clamp(36px,5vw,56px)",
                letterSpacing: isAr ? "0.01em" : "0.02em",
              }}
            >
              {c.supporting}
            </motion.p>

            {/* CTA Group */}
            <motion.div
              {...fade(0.48)}
              className="closing-cta-group"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "clamp(24px,3vw,40px)",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="#contact"
                className="closing-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "18px clamp(28px,3vw,44px)",
                  borderRadius: 9999,
                  fontSize: 11,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  background: GOLD,
                  color: "#0C0026",
                  textDecoration: "none",
                  transition: "background 0.35s, transform 0.25s",
                  boxShadow: "0 16px 48px rgba(199,154,59,0.28)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = CREAM;
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = GOLD;
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                {c.cta}
                <span style={{ display: "inline-block", transition: "transform 0.2s" }}>
                  {isAr ? "←" : "→"}
                </span>
              </Link>

              <div className="closing-phone" style={{ display: "flex", flexDirection: "column", alignItems: isAr ? "flex-end" : "flex-start" }}>
                <span
                  style={{
                    color: GOLD,
                    opacity: 0.5,
                    fontSize: 9,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: 5,
                  }}
                >
                  {c.phoneLabel}
                </span>
                <span
                  style={{
                    color: CREAM,
                    fontSize: 15,
                    letterSpacing: "0.05em",
                    fontWeight: 300,
                    direction: "ltr",
                    unicodeBidi: "embed",
                  }}
                >
                  {c.phone}
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT (EN) / LEFT (AR): Arch Image ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.0, delay: 0.18, ease: EASE }}
            style={{
              flexShrink: 0,
              width: "clamp(260px,32vw,420px)",
              display: "none",
            }}
            className="closing-image-panel"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: "clamp(80px,10vw,140px) clamp(80px,10vw,140px) 48px 48px",
                overflow: "hidden",
                border: `1px solid rgba(199,154,59,0.22)`,
                boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
              }}
            >
              <Image
                src="/images/services/wedding.png"
                alt="Elegant wedding celebration"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 0px"
                style={{ transition: "transform 2s ease-out" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.06)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(9,0,34,0.45) 0%, transparent 50%)",
                }}
              />
              {/* Gold accent line at base */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "10%",
                  right: "10%",
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                  opacity: 0.55,
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .closing-image-panel {
            display: block !important;
          }
        }
        @media (max-width: 639px) {
          .closing-cta-group {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 20px !important;
          }
          .closing-cta-btn {
            text-align: center !important;
            justify-content: center !important;
            width: 100% !important;
          }
          .closing-phone {
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}
