"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

// Brand palette — mirrors hero section
const BG = "#0f0823";
const GOLD = "#bb8a3c";
const SMOKED_GOLD = "#a8925a";
const CREAM = "#ede5ff";
const BODY_TEXT = "rgba(237,229,255,0.90)";
const EYEBROW_GOLD = "rgba(187,138,60,0.58)";
const RULE_FAINT = "rgba(187,138,60,0.20)";
const DIVIDER_GOLD = "rgba(187,138,60,0.62)";
const BAND_GOLD = "rgba(187,138,60,0.45)";
const VERT_SEP = "rgba(187,138,60,0.16)";

// SVG noise — ultra-faint cinematic grain, blended over the background
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

export default function BrandStory() {
  const t = useTranslations("story");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: [
          // Outer vignette — dimensional edges
          "radial-gradient(ellipse 120% 110% at 50% 50%, transparent 48%, rgba(0,0,0,0.40) 100%)",
          // Right-side shadow — grounds where image meets background
          "radial-gradient(ellipse 40% 80% at 100% 50%, rgba(0,0,0,0.22) 0%, transparent 60%)",
          // Smoked-gold ambient warmth — barely perceptible, feels atmospheric
          "radial-gradient(ellipse 48% 58% at 54% 68%, rgba(168,146,90,0.07) 0%, transparent 55%)",
          // Left ambient warmth — where the text lives
          "radial-gradient(ellipse 75% 65% at 24% 50%, rgba(28,16,58,0.56) 0%, transparent 65%)",
          // Subtle top shadow — grounds the composition from above
          "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, transparent 20%)",
          BG,
        ].join(", "),
      }}
    >

      {/* Cinematic grain — almost invisible, adds atmospheric texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_SVG,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.038,
          pointerEvents: "none",
          zIndex: 1,
          mixBlendMode: "overlay",
        }}
      />

      {/* Top shimmer gold line — visual bridge from hero */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(187,138,60,0.44) 20%, rgba(187,138,60,0.72) 50%, rgba(187,138,60,0.44) 80%, transparent 100%)",
        }}
      />

      {/* ── DESKTOP ─────────────────────────────────────────────────── */}
      <div
        className="relative hidden md:flex"
        style={{
          flexDirection: isRTL ? "row" : "row-reverse",
          minHeight: "clamp(560px, 82vh, 880px)",
          zIndex: 2,
        }}
      >

        {/* ── TEXT COLUMN ─────────────────────────────────────────── */}
        <div
          className={`relative flex flex-col justify-between ${isRTL ? "text-right" : "text-left"}`}
          style={{
            width: "52%",
            flexShrink: 0,
            paddingTop: "clamp(48px, 5.5vw, 88px)",
            paddingBottom: "clamp(48px, 5.5vw, 88px)",
            paddingLeft: isRTL
              ? "clamp(56px, 6.8vw, 108px)"
              : "clamp(40px, 4.8vw, 72px)",
            paddingRight: isRTL
              ? "clamp(32px, 4vw, 56px)"
              : "clamp(56px, 6.8vw, 108px)",
          }}
        >

          {/* Full-height editorial margin rule */}
          <div
            style={{
              position: "absolute",
              [isRTL ? "right" : "left"]: "clamp(32px, 3.8vw, 58px)",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "rgba(187,138,60,0.22)",
              pointerEvents: "none",
            }}
          />

          {/* TOP ANCHOR */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0, delay: 0.1 }}
            className="text-[15.5px] tracking-[0.5em] uppercase font-light shrink-0"
            style={{ color: "rgba(187,138,60,0.42)" }}
          >
            EST · 2010
          </motion.p>

          {/* CONTENT BLOCK */}
          <div>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.20 }}
              className="block text-[10.5px] tracking-[0.48em] uppercase font-medium"
              style={{
                color: EYEBROW_GOLD,
                marginBottom: "clamp(10px, 1vw, 14px)",
              }}
            >
              {t("eyebrow")}
            </motion.span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.28 }}
              className={isRTL ? "origin-right" : "origin-left"}
              style={{
                height: "1px",
                background: RULE_FAINT,
                marginBottom: "clamp(28px, 3.2vw, 44px)",
              }}
            />

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.36, ease: [0.19, 1, 0.22, 1] }}
              className="font-serif font-light leading-none tracking-[-0.022em]"
              style={{
                fontSize: "clamp(44px, 5.2vw, 75px)",
                color: CREAM,
                marginBottom: "clamp(28px, 3.4vw, 52px)",
              }}
            >
              {t("headline1")}
              <br />
              <em style={{ color: SMOKED_GOLD }}>{t("headline2")}</em>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.50 }}
              className={isRTL ? "origin-right ml-auto" : "origin-left"}
              style={{
                height: "1px",
                width: "36px",
                background: DIVIDER_GOLD,
                marginBottom: "clamp(24px, 3vw, 44px)",
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.58 }}
              className="font-light leading-[2.05]"
              style={{
                fontSize: "clamp(15px, 1.28vw, 17px)",
                color: BODY_TEXT,
                marginBottom: "clamp(32px, 4vw, 52px)",
                maxWidth: "clamp(300px, 28vw, 400px)",
              }}
            >
              {t("body")}
            </motion.p>

            {/* Editorial CTA — premium hover micro-interaction */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.68 }}
            >
              <Link
                href="#services"
                className="inline-flex items-center gap-4 text-[9px] tracking-[0.46em] uppercase font-medium no-underline group"
                style={{
                  color: GOLD,
                  transition: "opacity 0.6s ease",
                }}
              >
                <span className="relative">
                  {t("cta")}
                  <span
                    className={`absolute -bottom-0.75 ${
                      isRTL ? "right-0" : "left-0"
                    } w-0 h-px group-hover:w-full`}
                    style={{
                      background: GOLD,
                      transition: "width 0.7s cubic-bezier(0.19,1,0.22,1)",
                    }}
                  />
                </span>
                <span
                  className={`inline-block text-[11px] font-extralight opacity-50 ${
                    isRTL
                      ? "group-hover:-translate-x-2"
                      : "group-hover:translate-x-2"
                  }`}
                  style={{ transition: "transform 0.7s cubic-bezier(0.19,1,0.22,1), opacity 0.5s ease" }}
                >
                  {isRTL ? "←" : "→"}
                </span>
              </Link>
            </motion.div>

          </div>

          {/* BOTTOM ANCHOR */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className={`shrink-0 h-px ${isRTL ? "origin-right" : "origin-left"}`}
            style={{
              width: "clamp(56px, 7vw, 96px)",
              background: "rgba(187,138,60,0.18)",
            }}
          />

        </div>

        {/* ── IMAGE COLUMN ─────────────────────────────────────────── */}
        <div className="relative flex-1 overflow-hidden">

          {/* Thin vertical gold separator */}
          <div
            style={{
              position: "absolute",
              [isRTL ? "left" : "right"]: 0,
              top: 0,
              bottom: 0,
              width: "1px",
              background: VERT_SEP,
              zIndex: 3,
            }}
          />

          {/* Image — inset for editorial breathing room, ~8-10% reduced visual weight */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: isRTL ? 0 : "clamp(14px, 1.8vw, 28px)",
              right: isRTL ? "clamp(14px, 1.8vw, 28px)" : 0,
              top: "clamp(36px, 4.5vw, 60px)",
              bottom: "clamp(36px, 4.5vw, 60px)",
            }}
          >
            <Image
              src="/images/introduction-v2-copy.webp"
              alt=""
              fill
              className="object-cover"
              style={{ objectPosition: "58% center" }}
              sizes="(max-width: 768px) 100vw, 48vw"
              priority
            />
          </motion.div>

          {/* Edge blend — softens the image boundary toward text */}
          <div
            style={{
              position: "absolute",
              [isRTL ? "left" : "right"]: 0,
              top: 0,
              bottom: 0,
              width: "7%",
              background: isRTL
                ? `linear-gradient(to right, ${BG}, transparent)`
                : `linear-gradient(to left, ${BG}, transparent)`,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

        </div>

      </div>

      {/* ── BOTTOM BRAND BAND ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.2 }}
        className="relative hidden md:flex items-center justify-center"
        style={{
          borderTop: "1px solid rgba(187,138,60,0.15)",
          padding: "22px 0",
          zIndex: 2,
        }}
      >
        <span
          className="text-[11.5px] tracking-[0.44em] uppercase font-bold"
          style={{ color: BAND_GOLD }}
        >
          {t("trustLine")}
        </span>
      </motion.div>

      {/* ── MOBILE ──────────────────────────────────────────────────── */}
      <div className="relative md:hidden" style={{ zIndex: 2 }}>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          style={{ position: "relative", width: "100%", aspectRatio: "16/10" }}
        >
          <Image
            src="/images/introduction-v2-copy.webp"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "58% center" }}
            sizes="100vw"
            priority
          />
        </motion.div>

        <div style={{ height: "1px", background: "rgba(187,138,60,0.22)" }} />

        <div className={`px-6 pt-11 pb-10 ${isRTL ? "text-right" : "text-left"}`}>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="block text-[9px] tracking-[0.52em] uppercase font-medium"
            style={{ color: EYEBROW_GOLD, marginBottom: "12px" }}
          >
            {t("eyebrow")}
          </motion.span>

          <div style={{ height: "1px", background: RULE_FAINT, marginBottom: "26px" }} />

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.12, ease: [0.19, 1, 0.22, 1] }}
            className="font-serif font-light leading-[1.06] tracking-[-0.015em]"
            style={{
              fontSize: "clamp(34px, 9.5vw, 52px)",
              color: CREAM,
              marginBottom: "20px",
            }}
          >
            {t("headline1")}
            <br />
            <em style={{ color: SMOKED_GOLD }}>{t("headline2")}</em>
          </motion.h2>

          <div
            className={isRTL ? "ml-auto" : ""}
            style={{ height: "1px", width: "28px", background: DIVIDER_GOLD, marginBottom: "20px" }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.20 }}
            className="font-light leading-[2.05]"
            style={{ fontSize: "15px", color: BODY_TEXT, marginBottom: "30px" }}
          >
            {t("body")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.28 }}
          >
            <Link
              href="#services"
              className="inline-flex items-center gap-4 text-[8.5px] tracking-[0.5em] uppercase font-medium no-underline group"
              style={{ color: GOLD }}
            >
              <span className="relative">
                {t("cta")}
                <span
                  className={`absolute -bottom-0.75 ${isRTL ? "right-0" : "left-0"} w-0 h-px group-hover:w-full`}
                  style={{
                    background: GOLD,
                    transition: "width 0.7s cubic-bezier(0.19,1,0.22,1)",
                  }}
                />
              </span>
              <span
                className={`inline-block text-[10px] font-extralight opacity-50 ${
                  isRTL ? "group-hover:-translate-x-2" : "group-hover:translate-x-2"
                }`}
                style={{ transition: "transform 0.7s cubic-bezier(0.19,1,0.22,1)" }}
              >
                {isRTL ? "←" : "→"}
              </span>
            </Link>
          </motion.div>

        </div>

        <div
          className="flex items-center justify-center"
          style={{ borderTop: "1px solid rgba(187,138,60,0.15)", padding: "18px 0" }}
        >
          <span
            className="text-[11px] tracking-[0.44em] uppercase font-bold"
            style={{ color: BAND_GOLD }}
          >
            {t("trustLine")}
          </span>
        </div>

      </div>

    </section>
  );
}
