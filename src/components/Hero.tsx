"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative min-h-svh flex flex-col overflow-hidden" style={{ backgroundColor: "#06040c" }}>

      {/* ── Cinematic background image ── */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.8, ease: [0.19, 1, 0.22, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/elie-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Overlay layers — charcoal-neutral, reduced purple tint ── */}
      {/* Center radial: lightened to let photography breathe */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 100% 85% at 50% 50%, rgba(6,4,12,0.12) 0%, rgba(6,4,12,0.42) 52%, rgba(6,4,12,0.82) 100%)" }} />
      {/* Bottom vignette: anchors text, slightly reduced */}
      <div className="absolute inset-x-0 bottom-0 h-[58%]" style={{ background: "linear-gradient(to top, rgba(6,4,12,0.96) 0%, rgba(6,4,12,0.72) 30%, rgba(6,4,12,0.2) 65%, transparent 100%)" }} />
      {/* Top vignette: navigation breathing room */}
      <div className="absolute inset-x-0 top-0 h-[28%]" style={{ background: "linear-gradient(to bottom, rgba(6,4,12,0.5) 0%, transparent 100%)" }} />

      {/* ── Gold shimmer top line ── */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(187,138,60,0.5) 30%, rgba(187,138,60,0.88) 50%, rgba(187,138,60,0.5) 70%, transparent 100%)" }} />

      {/* ── Ambient gold warmth — barely visible ── */}
      <div className="absolute top-[18%] left-[6%] w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(187,138,60,0.055) 0%, transparent 68%)" }} />

      {/* ── Main content ── */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center text-cream px-6 pt-28 md:pt-32 lg:pt-36 2xl:pt-44 pb-24 md:pb-32 lg:pb-36">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="flex items-center justify-center gap-4 mb-10 md:mb-12 lg:mb-14"
        >
          <div className="w-10 md:w-14 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(187,138,60,0.6))" }} />
          <span className="text-[9px] md:text-[10px] tracking-[0.52em] uppercase font-bold" style={{ color: "#bb8a3c" }}>{t("eyebrow")}</span>
          <div className="w-10 md:w-14 h-px" style={{ background: "linear-gradient(90deg, rgba(187,138,60,0.6), transparent)" }} />
        </motion.div>

        {/* Headline — reduced ~10%, subtle text shadow for cinematic depth */}
        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.22, ease: [0.19, 1, 0.22, 1] }}
          className="font-serif font-light leading-[0.88] tracking-tight uppercase text-cream text-[clamp(28px,7.4vw,108px)]"
          style={{ textShadow: "0 2px 36px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.35)" }}
        >
          {isRTL ? (
            <>
              <span className="block">{t("headline1")}</span>
              <em className="block text-accent italic">{t("headline2")}</em>
            </>
          ) : (
            <>
              <span className="block">{t("headline1")}</span>
              <em className="block text-accent italic">{t("headline2")}</em>
              <span className="block">{t("headline3")}</span>
            </>
          )}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.6 }}
          className="w-20 h-px my-8 md:my-10 lg:my-12 origin-center"
          style={{ background: "linear-gradient(90deg, transparent, rgba(187,138,60,0.8), transparent)" }}
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72 }}
          className="text-[clamp(14px,1.4vw,16px)] leading-[1.9] font-light max-w-[400px] md:max-w-[480px]"
          style={{ color: "rgba(237,229,255,0.62)", textShadow: "0 1px 14px rgba(0,0,0,0.45)" }}
        >
          {t("body")}
        </motion.p>

        {/* CTA — refined, no scale, elegant glow transition */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.88 }}
          className="mt-10 md:mt-14 lg:mt-16"
        >
          <Link
            href="#booking"
            className="inline-flex items-center gap-[14px] px-12 py-[19px] rounded-full text-[10px] tracking-[0.36em] uppercase font-bold text-primary no-underline transition-all duration-600 hover:brightness-[1.08] hover:shadow-[0_14px_44px_rgba(187,138,60,0.32),0_0_0_1px_rgba(212,168,78,0.28)] active:brightness-95 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #d4a84e 0%, #bb8a3c 100%)",
              boxShadow: "0 6px 28px rgba(187,138,60,0.18), inset 0 1px 0 rgba(255,255,255,0.16)",
            }}
          >
            {t("cta1")} <span className="text-[11px] font-light opacity-80">{isRTL ? "←" : "→"}</span>
          </Link>
        </motion.div>
      </div>

      {/* ── Trust line ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 1.05 }}
        className="relative z-10 py-[22px] md:py-6 flex items-center justify-center"
        style={{ borderTop: "1px solid rgba(187,138,60,0.15)" }}
      >
        <span className="text-[8px] md:text-[8.5px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.45)" }}>
          {t("band")}
        </span>
      </motion.div>
    </section>
  );
}
