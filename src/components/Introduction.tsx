"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: [0.19, 1, 0.22, 1] as number[] },
});

export default function Introduction() {
  const t = useTranslations("intro");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const marquee = t.raw("marquee") as string[];
  const tags = t.raw("tags") as string[];

  return (
    <>
      <section className="py-4 md:py-5 bg-cream overflow-hidden border-y border-primary/8">
        <div className="flex gap-10 md:gap-16 whitespace-nowrap font-serif text-[clamp(13px,2.6vw,20px)] text-primary italic font-light animate-[elMarquee_38s_linear_infinite] w-max">
          {[0, 1, 2].map((k) =>
            marquee.map((w) => (
              <span key={`${k}-${w}`} className="inline-flex items-center gap-10 md:gap-16">
                <span>{w}</span>
                <span className="text-accent text-[0.55em] not-italic">✦</span>
              </span>
            ))
          )}
        </div>
      </section>

      <section className="relative bg-cream overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div initial={{ opacity: 0, rotate: -38 }} whileInView={{ opacity: 0.07, rotate: -38 }} viewport={{ once: true }} transition={{ duration: 1.4 }} className="absolute -top-24 -right-10 w-36 h-[560px] rounded-full bg-primary" />
          <motion.div initial={{ opacity: 0, rotate: -38 }} whileInView={{ opacity: 0.1, rotate: -38 }} viewport={{ once: true }} transition={{ duration: 1.6, delay: 0.15 }} className="absolute -top-8 right-20 w-20 h-72 rounded-full bg-accent" />
          <div className="absolute -bottom-16 -left-8 w-24 h-64 rounded-full bg-accent/8 rotate-[28deg]" />
        </div>

        <div className="container-custom px-6 md:px-14 lg:px-20 pt-16 md:pt-20">
          <motion.div {...fadeUp(0)} className="flex items-center gap-4 md:gap-6 border-b border-primary/10 pb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-accent/50" />
                <span className="text-[9px] tracking-[0.45em] uppercase text-body/50 font-bold">{t("eyebrow")}</span>
              </div>
              <h2 className="font-sans text-[clamp(13px,1.5vw,15px)] font-bold tracking-[0.35em] uppercase text-primary/60 mt-1">{t("label")}</h2>
            </div>
          </motion.div>
        </div>

        <div className="container-custom px-6 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_0.82fr] gap-0 lg:gap-16 xl:gap-24 pb-0">
          <div className="py-12 md:py-16 flex flex-col justify-between">
            <motion.div {...fadeUp(0.1)}>
              <h3 className="font-serif font-light text-[clamp(32px,5.5vw,64px)] leading-[0.92] tracking-tight text-primary max-w-[580px]">
                {t("headline")}{" "}
                <em className="text-accent italic">{t("headlineEm")}</em>
              </h3>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="mt-8 md:mt-10 space-y-5 text-[clamp(15px,1.6vw,17px)] leading-relaxed text-body/80 font-light max-w-[520px]">
              <p>{t("body1")}</p>
              <p>{t("body2")}</p>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="mt-8 md:mt-10 flex flex-wrap gap-2 md:gap-3">
              {tags.map((tag, i) => (
                <motion.span key={tag} initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.32 + i * 0.06 }} className="px-4 py-2 rounded-full text-[10px] md:text-[11px] tracking-[0.18em] uppercase font-semibold border border-primary/14 text-primary/65 bg-primary/4 hover:bg-primary hover:text-cream hover:border-primary transition-all duration-300 cursor-default">
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <div className="mt-10 md:mt-12">
              <motion.div {...fadeUp(0.42)}>
                <Link href="#services" className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-[10px] tracking-[0.26em] uppercase font-bold bg-primary text-cream no-underline transition-all duration-300 hover:bg-accent hover:text-primary hover:scale-[1.04] active:scale-95 shadow-[0_8px_28px_rgba(44,30,57,0.2)]">
                  {t("cta")} <span>{isRTL ? "←" : "→"}</span>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="relative hidden lg:flex items-stretch py-10 lg:py-14">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.18, ease: [0.19, 1, 0.22, 1] }} className="relative w-full rounded-t-full overflow-hidden shadow-[0_40px_80px_rgba(44,30,57,0.18)]" style={{ minHeight: 520 }}>
              <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" alt="Luxury event setup" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-cream/80 to-transparent" />
              <motion.div initial={{ opacity: 0, x: -24, y: 10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }} className="absolute bottom-8 left-6 right-6 rounded-2xl overflow-hidden" style={{ background: "rgba(250,246,239,0.22)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", border: "1px solid rgba(255,255,255,0.35)", boxShadow: "0 8px 32px rgba(44,30,57,0.18)" }}>
                <div className="px-5 py-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] tracking-[0.38em] uppercase font-bold text-primary/60 mb-1">{t("cardLabel")}</p>
                    <p className="font-serif text-[15px] italic text-primary font-light leading-snug">{t("cardSub")}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-primary text-sm font-serif italic font-light leading-none">A–Z</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.85, x: -16 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.4 }} className="absolute -left-12 top-[12%] z-10">
              <div className="relative w-[100px] h-[160px] rounded-full overflow-hidden border-8 border-cream shadow-xl rotate-[-12deg]">
                <div className="absolute inset-0 rotate-[12deg] scale-[1.4]">
                  <Image src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" alt="Event detail" fill className="object-cover" sizes="100px" />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.52 }} className="absolute -right-4 top-[8%] z-0">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
                <Image src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" alt="Floral" fill className="object-cover" sizes="64px" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
