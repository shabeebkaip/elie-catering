"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getServiceBySlug, getRelatedServices } from "@/lib/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GOLD      = "#C9A15B";
const CREAM     = "#F5F1E8";
const GRAD_HERO = "linear-gradient(to top, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.62) 45%, rgba(5,5,5,0.18) 72%, transparent 100%)";

type Props = { slug: string; locale: string };

export default function ServiceDetailPageClient({ slug, locale }: Props) {
  const isAr = locale === "ar";

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug, 3);

  return (
    <>
      {/* Marble fixed background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Image src="/images/about/marble.webp" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.92)" }} />
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

          {/* ── Hero ─────────────────────────────────────────────── */}
          <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden flex items-end">
            <Image
              src={service.heroImg}
              alt={isAr ? service.titleAr : service.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: GRAD_HERO }} />
            <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.22)" }} />

            {/* Back link */}
            <div className="absolute top-28 left-6 md:left-14 z-20">
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center gap-2 hover:text-accent transition-colors no-underline text-[11px] tracking-[0.2em] uppercase font-bold group"
                style={{ color: "rgba(245,241,232,0.55)" }}
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">
                  {isAr ? "→" : "←"}
                </span>
                {isAr ? "جميع الخدمات" : "All Services"}
              </Link>
            </div>

            {/* Hero text */}
            <div className="relative z-10 px-6 md:px-14 pb-16 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="px-4 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold backdrop-blur-sm"
                    style={{
                      background: "rgba(201,161,91,0.15)",
                      border: "1px solid rgba(201,161,91,0.35)",
                      color: GOLD,
                    }}
                  >
                    {isAr ? service.categoryLabelAr : service.categoryLabel}
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold backdrop-blur-sm"
                    style={{
                      background: "rgba(245,241,232,0.08)",
                      border: "1px solid rgba(245,241,232,0.15)",
                      color: "rgba(245,241,232,0.6)",
                    }}
                  >
                    {isAr ? service.tagAr : service.tag}
                  </span>
                </div>

                <h1
                  className="font-serif font-light leading-[0.9] tracking-tight mb-4"
                  style={{ fontSize: "clamp(44px, 8vw, 100px)", color: CREAM }}
                >
                  <em>{isAr ? service.titleAr : service.title}</em>
                </h1>

                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: "clamp(15px, 1.8vw, 20px)", color: "rgba(245,241,232,0.55)" }}
                >
                  {isAr ? service.taglineAr : service.tagline}
                </p>
              </motion.div>
            </div>
          </section>

          {/* ── Description & Included ────────────────────────────── */}
          <section className="px-6 md:px-14 py-24 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-20">

              {/* Left: Description */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-px" style={{ background: GOLD }} />
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: GOLD }}>
                    {isAr ? "نبذة عن الخدمة" : "About This Service"}
                  </span>
                </div>

                <p
                  className="font-light leading-relaxed mb-8"
                  style={{ fontSize: "clamp(16px, 1.8vw, 20px)", color: "rgba(245,241,232,0.85)" }}
                >
                  {isAr ? service.descriptionAr : service.description}
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: "clamp(14px, 1.5vw, 17px)", color: "rgba(245,241,232,0.52)" }}
                >
                  {isAr ? service.bodyAr : service.body}
                </p>

                <div className="mt-12 flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}#booking`}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
                      color: "#050505",
                      boxShadow: "0 8px 32px rgba(201,161,91,0.38)",
                    }}
                  >
                    {isAr ? "احجز الآن" : "Book this service"}
                    <span>{isAr ? "←" : "→"}</span>
                  </Link>
                  <Link
                    href={`/${locale}/services`}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold no-underline transition-all duration-300"
                    style={{
                      color: "rgba(245,241,232,0.55)",
                      border: "1px solid rgba(245,241,232,0.15)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,161,91,0.4)";
                      (e.currentTarget as HTMLElement).style.color = GOLD;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,241,232,0.15)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(245,241,232,0.55)";
                    }}
                  >
                    {isAr ? "← جميع الخدمات" : "All services →"}
                  </Link>
                </div>
              </motion.div>

              {/* Right: What's Included */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              >
                <div
                  className="rounded-2xl p-8 sticky top-32"
                  style={{
                    background: "rgba(10,10,10,0.9)",
                    border: "1px solid rgba(201,161,91,0.1)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-5 h-px" style={{ background: GOLD }} />
                    <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: GOLD }}>
                      {isAr ? "ما يشمله" : "What's Included"}
                    </span>
                  </div>

                  <ul className="space-y-4">
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
                        <span className="text-[14px] leading-snug" style={{ color: "rgba(245,241,232,0.68)" }}>
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div
                    className="mt-8 pt-6"
                    style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}
                  >
                    <p
                      className="text-[11px] tracking-[0.15em] uppercase leading-relaxed"
                      style={{ color: "rgba(245,241,232,0.3)" }}
                    >
                      {isAr
                        ? "سيتواصل فريقنا معك لمناقشة احتياجاتك المحددة."
                        : "Our team will be in touch to discuss your specific requirements."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── Gallery ───────────────────────────────────────────── */}
          <section className="px-6 md:px-14 pb-24">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.5)" }} />
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.65)" }}>
                  {isAr ? "معرض الصور" : "Gallery"}
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {service.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`relative overflow-hidden rounded-2xl group ${
                      i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                    }`}
                    style={{ height: i === 0 ? "380px" : "180px" }}
                  >
                    <Image
                      src={img}
                      alt={`${isAr ? service.titleAr : service.title} gallery ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div
                      className="absolute inset-0 transition-colors duration-500"
                      style={{ background: "rgba(5,5,5,0.2)" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Related Services ─────────────────────────────────── */}
          {related.length > 0 && (
            <section
              className="px-6 md:px-14 pb-28 pt-20"
              style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}
            >
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                      <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.65)" }}>
                        {isAr ? "خدمات ذات صلة" : "Related Services"}
                      </span>
                    </div>
                    <h2
                      className="font-serif font-light leading-tight"
                      style={{ fontSize: "clamp(28px, 4vw, 48px)", color: CREAM }}
                    >
                      <em>{isAr ? "قد يعجبك أيضاً" : "You might also like"}</em>
                    </h2>
                  </div>
                  <Link
                    href={`/${locale}/services`}
                    className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase no-underline font-bold transition-colors duration-300 hover:text-accent"
                    style={{ color: "rgba(201,161,91,0.55)" }}
                  >
                    {isAr ? "← عرض الكل" : "View all →"}
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {related.map((rel, i) => (
                    <motion.div
                      key={rel.slug}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: i * 0.08 }}
                    >
                      <Link
                        href={`/${locale}/services/${rel.slug}`}
                        className="group block no-underline rounded-2xl overflow-hidden transition-all duration-500"
                        style={{
                          background: "rgba(10,10,10,0.82)",
                          border: "1px solid rgba(201,161,91,0.08)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,161,91,0.28)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,161,91,0.08)";
                        }}
                      >
                        <div className="relative overflow-hidden rounded-t-2xl" style={{ height: "220px" }}>
                          <Image
                            src={rel.img}
                            alt={isAr ? rel.titleAr : rel.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            sizes="(max-width: 640px) 100vw, 33vw"
                          />
                          <div
                            className="absolute inset-0 transition-colors duration-500"
                            style={{ background: "rgba(5,5,5,0.28)" }}
                          />
                          <div className="absolute top-4 left-4">
                            <span
                              className="px-2.5 py-1 rounded-full text-[9px] tracking-[0.18em] uppercase font-bold backdrop-blur-sm"
                              style={{
                                background: "rgba(201,161,91,0.15)",
                                border: "1px solid rgba(201,161,91,0.3)",
                                color: GOLD,
                              }}
                            >
                              {isAr ? rel.categoryLabelAr : rel.categoryLabel}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3
                            className="font-serif font-light italic leading-tight transition-colors duration-300 group-hover:text-accent"
                            style={{ fontSize: "18px", color: CREAM }}
                          >
                            {isAr ? rel.titleAr : rel.title}
                          </h3>
                          <p className="text-[12px] mt-1.5 line-clamp-1" style={{ color: "rgba(245,241,232,0.38)" }}>
                            {isAr ? rel.descriptionAr : rel.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── Final CTA ─────────────────────────────────────────── */}
          <section
            className="relative px-6 py-24 overflow-hidden"
            style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}
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
                transition={{ duration: 0.7 }}
              >
                <p
                  className="text-[10px] tracking-[0.4em] uppercase font-bold mb-6"
                  style={{ color: "rgba(201,161,91,0.65)" }}
                >
                  {isAr ? "احجز فعاليتك" : "Reserve Your Date"}
                </p>
                <h2
                  className="font-serif font-light leading-[0.9] tracking-tight mb-5"
                  style={{ fontSize: "clamp(36px, 6vw, 72px)", color: CREAM }}
                >
                  <em>
                    {isAr ? `احجز ${service.titleAr}` : `Book ${service.title}`}
                  </em>
                </h2>
                <p
                  className="font-light max-w-md mx-auto mb-10"
                  style={{ fontSize: "15px", color: "rgba(245,241,232,0.38)", lineHeight: 1.75 }}
                >
                  {isAr
                    ? "تواصل معنا لنبدأ في تصميم فعاليتك الاستثنائية."
                    : "Get in touch and let us begin crafting your extraordinary event."}
                </p>
                <Link
                  href={`/${locale}#booking`}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-[12px] tracking-[0.22em] uppercase font-bold no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
                    color: "#050505",
                    boxShadow: "0 12px 44px rgba(201,161,91,0.36)",
                  }}
                >
                  {isAr ? "ابدأ المحادثة" : "Start a conversation"}
                  <span>{isAr ? "←" : "→"}</span>
                </Link>
              </motion.div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
