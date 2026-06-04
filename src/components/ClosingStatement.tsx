"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import ElieLogo from "./ElieLogo";

export default function ClosingStatement() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = useTranslations("closing");

  return (
    <section className="relative bg-primary text-cream overflow-hidden">

      {/* ── Background cinematic image layer ── */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury event atmosphere"
          fill
          className="object-cover opacity-25 grayscale-[20%]"
          sizes="100vw"
        />
        {/* Deep vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />
      </div>

      {/* ── Decorative capsule cluster ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 0.12, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-[-10%] right-[-5%] w-48 h-[600px] bg-accent rounded-full rotate-[-32deg]"
        />
        <div className="absolute bottom-[15%] left-[-2%] w-24 h-80 rounded-full border border-white/8 rotate-[22deg]" />
      </div>

      <div className="container-custom px-6 md:px-14 lg:px-20 relative z-10 py-24 md:py-36 lg:py-48 2xl:py-60">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-center">

          {/* LEFT: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-10 md:mb-14">
              <div className="w-10 h-px bg-accent/60" />
              <span className="text-accent/80 text-[10px] tracking-[0.45em] uppercase font-bold">
                {t("eyebrow")}
              </span>
            </div>

            {/* Intro text */}
            <p className="font-serif italic text-[clamp(18px,2.2vw,26px)] text-cream/70 leading-relaxed mb-10 md:mb-14 max-w-xl font-light">
              {t("quote")}
            </p>

            {/* Headline */}
            <h2 className="font-serif font-light text-[clamp(64px,10vw,140px)] text-cream uppercase leading-[0.82] tracking-tighter mb-12 md:mb-16">
              {isAr ? (
                <>{t("headline1")}<br /><em className="text-accent italic not-italic">{t("headline2")}</em></>
              ) : (
                <>Book your<br /><em className="text-accent italic not-italic">Event.</em></>
              )}
            </h2>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full text-[11px] tracking-[0.32em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-500 hover:bg-cream hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(187,138,60,0.35)]"
              >
                {t("cta")}
                <span className="group-hover:translate-x-1 transition-transform">
                  {isAr ? "←" : "→"}
                </span>
              </Link>

              <div className="flex flex-col">
                <span className="text-accent/40 text-[9px] tracking-[0.2em] uppercase font-bold mb-1">
                  {t("directLine")}
                </span>
                <span className="text-cream text-[15px] tracking-[0.05em] font-light">
                  +966 54 435 6564
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Iconic Arch Capsule Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative hidden lg:block"
          >
            <div
              className="relative w-full aspect-[3/4] overflow-hidden border-[12px] border-white/5 shadow-2xl"
              style={{ borderRadius: "9999px 9999px 64px 64px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
                alt="Table detail"
                fill
                className="object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating accent badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-10 w-24 h-24 rounded-full bg-accent text-primary flex items-center justify-center p-4 shadow-xl border-4 border-primary z-20"
            >
              <ElieLogo size={52} color="#1c1428" onlyName={false} />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
