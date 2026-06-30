"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getDecoratingBySlug, decoratingServices } from "@/lib/decorating";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GOLD   = "#C9A15B";
const CREAM  = "#F5F1E8";
const BORDER = "rgba(201,161,91,0.10)";

type Props = { slug: string; locale: string };

export default function DecoratingDetailPageClient({ slug, locale }: Props) {
  const isAr = locale === "ar";

  const service = getDecoratingBySlug(slug);
  if (!service) notFound();

  const related = decoratingServices.filter((d) => d.slug !== slug);

  return (
    <>
      {/* Marble fixed background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Image src="/images/about/marble.webp" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.93)" }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 18% 22%, rgba(201,161,91,0.05), transparent)," +
              "radial-gradient(ellipse 55% 50% at 82% 78%, rgba(201,161,91,0.04), transparent)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />

        <main className="min-h-screen" style={{ background: "transparent" }}>

          {/* ══ MASTHEAD ══════════════════════════════════════════ */}
          <section className="px-6 md:px-14 pt-32 md:pt-44 pb-14 max-w-[1380px] mx-auto">
            {/* Back link + category badge */}
            <div className={`flex items-center justify-between mb-14 md:mb-20 ${isAr ? "flex-row-reverse" : ""}`}>
              <Link
                href={`/${locale}/decorating`}
                className="inline-flex items-center gap-2 no-underline text-[11px] tracking-[0.2em] uppercase font-bold group transition-all duration-300"
                style={{ color: "rgba(245,241,232,0.36)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GOLD; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(245,241,232,0.36)"; }}
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">
                  {isAr ? "→" : "←"}
                </span>
                {isAr ? "خدمات التزيين" : "Decorating Services"}
              </Link>
              <span
                className="px-4 py-2 text-[10px] tracking-[0.3em] uppercase font-bold"
                style={{
                  background: "rgba(201,161,91,0.08)",
                  border: "1px solid rgba(201,161,91,0.2)",
                  borderRadius: 4,
                  color: GOLD,
                }}
              >
                {isAr ? service.tagAr : service.tag}
              </span>
            </div>

            {/* Display title */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="font-serif font-light tracking-tight"
              style={{ fontSize: "clamp(52px, 10.5vw, 148px)", lineHeight: 0.87, color: CREAM }}
            >
              <em>{isAr ? service.titleAr : service.title}</em>
            </motion.h1>

            {/* Gold rule + tagline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className={`mt-8 md:mt-12 flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}
            >
              <div className="w-20 h-px flex-shrink-0" style={{ background: GOLD }} />
              <p
                className="font-light"
                style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "rgba(245,241,232,0.42)", lineHeight: 1.65, maxWidth: "520px" }}
              >
                {isAr ? service.taglineAr : service.tagline}
              </p>
            </motion.div>
          </section>

          {/* Hairline */}
          <div className="px-6 md:px-14">
            <div style={{ height: "1px", background: `linear-gradient(${isAr ? "to left" : "to right"}, rgba(201,161,91,0.28), rgba(201,161,91,0.04))` }} />
          </div>

          {/* ══ EDITORIAL: Image + Description + Included ════════ */}
          <section className="px-6 md:px-14 py-16 md:py-24 max-w-[1380px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-14 lg:gap-20 items-start">

              {/* Left: contained hero image + description + CTA */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.06, ease: [0.19, 1, 0.22, 1] }}
                  className="relative overflow-hidden mb-12"
                  style={{ height: "clamp(300px, 42vw, 600px)", borderRadius: 4 }}
                >
                  <Image
                    src={service.heroImg}
                    alt={isAr ? service.titleAr : service.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 62vw"
                  />
                  <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.1)" }} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <p
                    className="font-light leading-relaxed mb-10"
                    style={{ fontSize: "clamp(16px, 1.8vw, 21px)", color: "rgba(245,241,232,0.78)", lineHeight: 1.95 }}
                  >
                    {isAr ? service.descriptionAr : service.description}
                  </p>
                  <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${isAr ? "flex-row-reverse" : ""}`}>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 px-6 sm:px-8 py-4 rounded-full text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                      style={{
                        background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
                        color: "#050505",
                        boxShadow: "0 8px 32px rgba(201,161,91,0.38)",
                      }}
                    >
                      {isAr ? "احجز استشارة خاصة" : "Book a Consultation"}
                      <span>{isAr ? "←" : "→"}</span>
                    </Link>
                    <Link
                      href={`/${locale}/decorating`}
                      className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.2em] uppercase font-bold no-underline transition-colors duration-300"
                      style={{ color: "rgba(245,241,232,0.38)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GOLD; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(245,241,232,0.38)"; }}
                    >
                      {isAr ? "جميع خدمات التزيين" : "All Decorating Services"}
                      <span>{isAr ? "←" : "→"}</span>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Right: What's Included */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: [0.19, 1, 0.22, 1] }}
              >
                <div
                  className="p-8 sticky top-32"
                  style={{
                    background: "rgba(10,10,10,0.9)",
                    border: `1px solid ${BORDER}`,
                    borderRadius: 4,
                  }}
                >
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-5 h-px" style={{ background: GOLD }} />
                    <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: GOLD }}>
                      {isAr ? "ما يشمله" : "What's Included"}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {(isAr ? service.includedAr : service.included).map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: isAr ? 12 : -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="flex items-start gap-3.5"
                      >
                        <div
                          className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{
                            background: "rgba(201,161,91,0.12)",
                            border: "1px solid rgba(201,161,91,0.28)",
                          }}
                        >
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <path d="M2 4.5L3.8 6.3L7 3" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[14px] leading-snug" style={{ color: "rgba(245,241,232,0.65)" }}>
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="pt-6" style={{ borderTop: `1px solid ${BORDER}` }}>
                    <p className="text-[11px] tracking-[0.15em] uppercase leading-relaxed" style={{ color: "rgba(245,241,232,0.28)" }}>
                      {isAr
                        ? "يتواصل فريقنا خلال 24 ساعة لمناقشة متطلباتك."
                        : "Our team responds within 24 hours to discuss your requirements."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ══ THE FULL OFFERING ═════════════════════════════════ */}
          <section
            className="px-6 md:px-14 py-20 md:py-28"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <div className="max-w-[1380px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-12 md:mb-16"
              >
                <div className={`flex items-center gap-3 mb-4 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                  <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                    {isAr ? "ما نقدمه" : "The Full Offering"}
                  </span>
                </div>
                <h2
                  className={`font-serif font-light ${isAr ? "text-right" : ""}`}
                  style={{ fontSize: "clamp(28px, 4vw, 52px)", color: CREAM }}
                >
                  {isAr
                    ? <>كل تفصيلة <em style={{ color: GOLD, fontStyle: "normal" }}>مغطاة.</em></>
                    : <>Every detail <em className="italic" style={{ color: GOLD }}>covered.</em></>
                  }
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {service.blocks.map((block, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
                    className="p-7 transition-colors duration-300"
                    style={{
                      background: "rgba(10,10,10,0.82)",
                      border: `1px solid ${BORDER}`,
                      borderRadius: 4,
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,161,91,0.22)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; }}
                  >
                    <div className={`flex items-center gap-3 mb-5 ${isAr ? "flex-row-reverse" : ""}`}>
                      <span style={{ fontSize: 18 }}>{block.icon}</span>
                      <h3
                        className="font-serif font-light leading-tight"
                        style={{ fontSize: "clamp(15px, 1.8vw, 19px)", color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
                      >
                        {isAr ? block.titleAr : block.title}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {(isAr ? block.itemsAr : block.items).map((item, j) => (
                        <li key={j} className={`flex items-start gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                          <span
                            className="flex-shrink-0 mt-2"
                            style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(201,161,91,0.5)", display: "block" }}
                          />
                          <span className="text-[13px] leading-snug" style={{ color: "rgba(245,241,232,0.55)" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ OCCASIONS + QUOTE ════════════════════════════════ */}
          <section
            className="px-6 md:px-14 py-20 md:py-28"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Occasions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className={`flex items-center gap-3 mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-6 h-px" style={{ background: GOLD }} />
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: GOLD }}>
                    {isAr ? "المناسبات التي نغطيها" : "Occasions We Cover"}
                  </span>
                </div>

                <div className={`flex flex-wrap gap-2.5 ${isAr ? "justify-end" : ""}`}>
                  {(isAr ? service.occasionsAr : service.occasions).map((occ) => (
                    <span
                      key={occ}
                      className="px-4 py-2 text-[12px] tracking-[0.06em] transition-colors duration-300 cursor-default"
                      style={{
                        border: `1px solid rgba(201,161,91,0.18)`,
                        borderRadius: 2,
                        color: "rgba(245,241,232,0.60)",
                      }}
                    >
                      {occ}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div
                  className="pl-6"
                  style={{ borderLeft: `2px solid rgba(201,161,91,0.35)` }}
                >
                  <p
                    className="font-serif font-light leading-relaxed mb-5"
                    style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "rgba(245,241,232,0.70)", fontStyle: "italic" }}
                  >
                    {isAr ? `"${service.taglineAr}"` : `"${service.tagline}"`}
                  </p>
                  <p className="text-[11px] tracking-[0.2em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.5)" }}>
                    — {isAr ? "إيلي للتموين وتنظيم الفعاليات" : "Elie Catering & Event Planning"}
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ══ GALLERY ═══════════════════════════════════════════ */}
          <section
            className="px-6 md:px-14 pb-24"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <div className="max-w-[1380px] mx-auto pt-20">
              <div className={`flex items-center gap-3 mb-10 ${isAr ? "flex-row-reverse" : ""}`}>
                <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.62)" }}>
                  {isAr ? "معرض الصور" : "Gallery"}
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {service.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className={`relative overflow-hidden group ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
                    style={{ height: i === 0 ? "380px" : "182px", borderRadius: 4 }}
                  >
                    <Image
                      src={img}
                      alt={`${isAr ? service.titleAr : service.title} ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div
                      className="absolute inset-0 transition-colors duration-500"
                      style={{ background: "rgba(5,5,5,0.18)" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ RELATED DECORATING SERVICES ══════════════════════ */}
          {related.length > 0 && (
            <section
              className="px-6 md:px-14 pb-28 pt-20"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              <div className="max-w-[1380px] mx-auto">
                <div className={`flex items-center justify-between mb-12 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div>
                    <div className={`flex items-center gap-3 mb-3 ${isAr ? "flex-row-reverse" : ""}`}>
                      <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.4)" }} />
                      <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                        {isAr ? "خدمات تزيين أخرى" : "Other Decorating Services"}
                      </span>
                    </div>
                    <h2
                      className="font-serif font-light leading-tight"
                      style={{ fontSize: "clamp(28px, 4vw, 48px)", color: CREAM }}
                    >
                      <em>{isAr ? "استكشف المزيد." : "Explore more."}</em>
                    </h2>
                  </div>
                  <Link
                    href={`/${locale}/decorating`}
                    className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase no-underline font-bold transition-colors duration-300"
                    style={{ color: "rgba(201,161,91,0.52)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GOLD; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(201,161,91,0.52)"; }}
                  >
                    {isAr ? "← عرض الكل" : "View all →"}
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {related.map((rel, i) => (
                    <motion.div
                      key={rel.slug}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: i * 0.08 }}
                    >
                      <Link
                        href={`/${locale}/decorating/${rel.slug}`}
                        className="group block no-underline overflow-hidden transition-all duration-400"
                        style={{
                          background: "rgba(10,10,10,0.82)",
                          border: `1px solid ${BORDER}`,
                          borderRadius: 4,
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,161,91,0.28)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; }}
                      >
                        <div
                          className="relative overflow-hidden"
                          style={{ height: "240px" }}
                        >
                          <Image
                            src={rel.img}
                            alt={isAr ? rel.titleAr : rel.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 transition-colors duration-500" style={{ background: "rgba(5,5,5,0.25)" }} />
                          <div className="absolute top-4 left-4">
                            <span
                              className="px-3 py-1.5 text-[9px] tracking-[0.2em] uppercase font-bold"
                              style={{
                                background: "rgba(201,161,91,0.14)",
                                border: "1px solid rgba(201,161,91,0.28)",
                                borderRadius: 2,
                                color: GOLD,
                              }}
                            >
                              {isAr ? rel.tagAr : rel.tag}
                            </span>
                          </div>
                        </div>
                        <div className={`p-6 ${isAr ? "text-right" : ""}`}>
                          <p className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2" style={{ color: "rgba(201,161,91,0.55)" }}>
                            {isAr ? rel.eyebrowAr : rel.eyebrow}
                          </p>
                          <h3
                            className="font-serif font-light italic leading-tight mb-2 transition-colors duration-300 group-hover:text-accent"
                            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: CREAM }}
                          >
                            {isAr ? rel.titleAr : rel.title}
                          </h3>
                          <p className="text-[12.5px] line-clamp-2 mb-4" style={{ color: "rgba(245,241,232,0.38)" }}>
                            {isAr ? rel.descriptionAr : rel.description}
                          </p>
                          <span className="text-[9px] tracking-[0.28em] uppercase font-bold transition-colors duration-300 group-hover:text-accent" style={{ color: "rgba(201,161,91,0.6)" }}>
                            {isAr ? "استكشف ←" : "Explore →"}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ══ FINAL CTA ═════════════════════════════════════════ */}
          <section
            className="relative px-6 py-28 md:py-36 overflow-hidden"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.72)" }} />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(201,161,91,0.06), transparent)" }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(201,161,91,0.35), transparent)" }}
            />

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center justify-center gap-3 mb-10">
                  <div className="w-9 h-px" style={{ background: "rgba(201,161,91,0.32)" }} />
                  <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.52)" }}>
                    {isAr ? "ابدأ الرحلة" : "Begin the Journey"}
                  </span>
                  <div className="w-9 h-px" style={{ background: "rgba(201,161,91,0.32)" }} />
                </div>

                <h2
                  className="font-serif font-light leading-[0.9] tracking-tight mb-5"
                  style={{ fontSize: "clamp(40px, 7vw, 86px)", color: CREAM }}
                >
                  <em>{isAr ? "حدّثنا عن فعاليتك" : "Tell us about your event"}</em>
                </h2>

                <p
                  className="font-light mb-3"
                  style={{ fontSize: "clamp(13px, 1.4vw, 16px)", color: "rgba(201,161,91,0.7)", letterSpacing: "0.08em" }}
                >
                  {isAr
                    ? `استشارة خاصة لخدمة ${service.titleAr}`
                    : `A private consultation for ${service.title}`}
                </p>

                <p
                  className="font-light leading-relaxed mx-auto mb-12"
                  style={{ fontSize: "clamp(13px, 1.3vw, 15px)", color: "rgba(245,241,232,0.34)", maxWidth: "420px" }}
                >
                  {isAr
                    ? "فريق الاستقبال لدينا يرد خلال 24 ساعة. جميع الاستفسارات تُعالج بسرية تامة."
                    : "Our event concierge team responds within 24 hours. All enquiries handled with complete discretion."}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-3 px-6 sm:px-10 py-4 sm:py-5 rounded-full text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.24em] uppercase font-bold no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
                      color: "#050505",
                      boxShadow: "0 12px 44px rgba(201,161,91,0.36)",
                    }}
                  >
                    {isAr ? "اطلب عرض السعر" : "Request a Proposal"}
                    <span className="opacity-60">{isAr ? "←" : "→"}</span>
                  </Link>
                  <Link
                    href={`/${locale}/services`}
                    className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.2em] uppercase font-bold no-underline transition-colors duration-300"
                    style={{ color: "rgba(245,241,232,0.38)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GOLD; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(245,241,232,0.38)"; }}
                  >
                    {isAr ? "جميع الخدمات" : "All Services"}
                    <span>{isAr ? "←" : "→"}</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
