"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
});

export default function Introduction() {
  const t = useTranslations("intro");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const marquee = t.raw("marquee") as string[];
  const tags = t.raw("tags") as string[];

  return (
    <>
      {/* ── Marquee strip ── */}
      <section className="py-[18px] bg-surface overflow-hidden relative" style={{ borderTop: "1px solid rgba(187,138,60,0.18)", borderBottom: "1px solid rgba(187,138,60,0.18)" }}>
        {/* Subtle gold shimmer line at very top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="flex gap-12 md:gap-20 whitespace-nowrap font-serif text-[clamp(13px,2.4vw,18px)] text-cream/60 italic font-light animate-[elMarquee_42s_linear_infinite] w-max">
          {[0, 1, 2].map((k) =>
            marquee.map((w) => (
              <span key={`${k}-${w}`} className="inline-flex items-center gap-12 md:gap-20">
                <span className="tracking-wide">{w}</span>
                <span className="text-accent text-[0.5em] not-italic opacity-80">✦</span>
              </span>
            ))
          )}
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </section>

      {/* ── Main section ── */}
      <section className="relative bg-surface overflow-hidden">

        {/* ── Ambient lighting layer ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Gold bloom — upper right, behind the image column */}
          <div className="absolute top-[-10%] right-[15%] w-[500px] h-[500px] rounded-full bg-accent/[0.07] blur-[140px]" />
          {/* Navy glow — lower left */}
          <div className="absolute bottom-[5%] left-[-5%] w-[380px] h-[380px] rounded-full bg-navy/[0.12] blur-[120px]" />
          {/* Deep purple center bloom */}
          <div className="absolute top-[30%] left-[35%] w-[300px] h-[300px] rounded-full bg-primary/[0.25] blur-[100px]" />

          {/* Decorative capsules — right side */}
          <motion.div
            initial={{ opacity: 0, rotate: -38 }}
            whileInView={{ opacity: 0.15, rotate: -38 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
            className="absolute -top-24 -right-10 w-32 h-[520px] rounded-full"
            style={{ background: "linear-gradient(180deg, rgba(115,135,194,0.3) 0%, rgba(187,138,60,0.15) 100%)" }}
          />
          <motion.div
            initial={{ opacity: 0, rotate: -38 }}
            whileInView={{ opacity: 0.18, rotate: -38 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.15 }}
            className="absolute -top-8 right-20 w-16 h-60 rounded-full bg-accent"
          />
          {/* Bottom-left accent capsule */}
          <div className="absolute -bottom-16 -left-8 w-20 h-56 rounded-full rotate-[28deg]" style={{ background: "linear-gradient(135deg, rgba(187,138,60,0.12) 0%, rgba(115,135,194,0.08) 100%)" }} />
          {/* Thin outline capsule — right edge */}
          <div className="absolute top-[20%] right-[2%] w-8 h-48 rounded-full rotate-[-22deg]" style={{ border: "1px solid rgba(187,138,60,0.15)" }} />
        </div>

        {/* ── Section header ── */}
        <div className="container-custom px-6 md:px-14 lg:px-20 pt-16 md:pt-20 2xl:pt-28">
          <motion.div {...fadeUp(0)} className="flex items-center gap-4 md:gap-6 pb-6" style={{ borderBottom: "1px solid rgba(187,138,60,0.14)" }}>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, rgba(187,138,60,0.8) 0%, rgba(187,138,60,0.2) 100%)" }} />
                <span className="text-[9px] tracking-[0.52em] uppercase text-cream/45 font-bold">{t("eyebrow")}</span>
              </div>
              <h2 className="font-sans text-[clamp(12px,1.3vw,14px)] font-bold tracking-[0.42em] uppercase mt-1.5" style={{ color: "rgba(197,184,232,0.55)" }}>{t("label")}</h2>
            </div>
            {/* Decorative number */}
            <span className="hidden md:block font-mono text-[10px] tracking-[0.3em] text-accent/20 font-bold select-none">01</span>
          </motion.div>
        </div>

        {/* ── Content grid ── */}
        <div className="container-custom px-6 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_0.82fr] gap-0 lg:gap-16 xl:gap-24 pb-0">

          {/* Left: Text column */}
          <div className="py-12 md:py-16 2xl:py-24 flex flex-col justify-between">

            <motion.div {...fadeUp(0.1)}>
              <h3 className="font-serif font-light text-[clamp(34px,5.8vw,68px)] leading-[0.9] tracking-tight text-cream max-w-[580px]">
                {t("headline")}{" "}
                <em className="text-accent italic">{t("headlineEm")}</em>
              </h3>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="mt-9 md:mt-11 space-y-5 text-[clamp(15px,1.6vw,17px)] leading-[1.75] font-light max-w-[520px]" style={{ color: "rgba(237,229,255,0.62)" }}>
              <p>{t("body1")}</p>
              <p>{t("body2")}</p>
            </motion.div>

            {/* Tags */}
            <motion.div {...fadeUp(0.3)} className="mt-9 md:mt-11 flex flex-wrap gap-2 md:gap-2.5">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.85, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.32 + i * 0.07 }}
                  className="px-4 py-[9px] rounded-full text-[10px] md:text-[10.5px] tracking-[0.2em] uppercase font-semibold cursor-default transition-all duration-350 hover:bg-accent hover:text-primary hover:border-transparent hover:scale-[1.04]"
                  style={{
                    border: "1px solid rgba(197,184,232,0.18)",
                    color: "rgba(237,229,255,0.6)",
                    background: "rgba(237,229,255,0.04)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA */}
            <div className="mt-10 md:mt-12">
              <motion.div {...fadeUp(0.42)}>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-3 px-9 py-[17px] rounded-full text-[10px] tracking-[0.3em] uppercase font-bold text-cream no-underline transition-all duration-300 hover:bg-accent hover:text-primary hover:scale-[1.05] active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #30205f 0%, #241547 100%)",
                    border: "1px solid rgba(187,138,60,0.35)",
                    boxShadow: "0 12px 40px rgba(48,32,95,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  {t("cta")} <span>{isRTL ? "←" : "→"}</span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right: Image column */}
          <div className="relative hidden lg:flex items-stretch py-10 lg:py-14">

            {/* Main arch image */}
            <motion.div
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.18, ease: [0.19, 1, 0.22, 1] }}
              className="relative w-full rounded-t-full overflow-hidden"
              style={{
                minHeight: 540,
                boxShadow: "0 50px 120px rgba(0,0,0,0.55), 0 0 0 1px rgba(187,138,60,0.12), 0 0 60px rgba(48,32,95,0.4)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury event setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              {/* Multi-layer overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
              {/* Gold edge shimmer */}
              <div className="absolute inset-0 rounded-t-full" style={{ boxShadow: "inset 0 0 0 1px rgba(187,138,60,0.18)" }} />

              {/* Glass card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="absolute bottom-8 left-5 right-5 rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(30,19,71,0.72) 0%, rgba(18,9,42,0.82) 100%)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(187,138,60,0.22)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                {/* Gold shimmer top edge */}
                <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(187,138,60,0.5) 40%, rgba(187,138,60,0.5) 60%, transparent 100%)" }} />
                <div className="px-5 py-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[8.5px] tracking-[0.44em] uppercase font-bold mb-1.5" style={{ color: "rgba(187,138,60,0.7)" }}>{t("cardLabel")}</p>
                    <p className="font-serif text-[15px] italic text-cream/90 font-light leading-snug">{t("cardSub")}</p>
                  </div>
                  {/* A-Z badge */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #bb8a3c 0%, #d4a84e 100%)",
                      boxShadow: "0 8px 24px rgba(187,138,60,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                  >
                    <span className="text-primary text-[13px] font-serif italic font-semibold leading-none">A–Z</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating small image — left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="absolute -left-14 top-[11%] z-10"
            >
              {/* Gold ring outer */}
              <div
                className="p-[3px] rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(187,138,60,0.7) 0%, rgba(115,135,194,0.4) 60%, rgba(187,138,60,0.2) 100%)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.45), 0 0 20px rgba(187,138,60,0.2)",
                }}
              >
                <div className="relative w-[94px] h-[154px] rounded-full overflow-hidden rotate-[-12deg]"
                  style={{ border: "3px solid rgba(30,19,71,0.8)" }}
                >
                  <div className="absolute inset-0 rotate-[12deg] scale-[1.4]">
                    <Image
                      src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
                      alt="Event detail"
                      fill
                      className="object-cover"
                      sizes="100px"
                      loading="eager"
                    />
                  </div>
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-primary/20" />
                </div>
              </div>
            </motion.div>

            {/* Floating small image — top right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.54 }}
              className="absolute -right-5 top-[7%] z-0"
            >
              <div
                className="p-[2px] rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(187,138,60,0.6) 0%, rgba(115,135,194,0.3) 100%)",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.4), 0 0 14px rgba(187,138,60,0.15)",
                }}
              >
                <div className="relative w-[62px] h-[62px] rounded-full overflow-hidden"
                  style={{ border: "2px solid rgba(30,19,71,0.9)" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                    alt="Floral"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
