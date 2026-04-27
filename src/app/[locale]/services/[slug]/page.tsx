"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { use } from "react";
import { getServiceBySlug, getRelatedServices } from "@/lib/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = { params: Promise<{ slug: string }> };

export default function ServiceDetailPage({ params }: Props) {
  const { slug } = use(params);
  const locale = useLocale();
  const isAr = locale === "ar";

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug, 3);

  return (
    <>
      <Header />
      <main className="bg-primary min-h-screen">

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
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/15" />
          <div className="absolute inset-0 bg-primary/20" />

          {/* Capsule accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 right-16 w-[50px] h-[200px] rounded-full border border-accent/20 rotate-[-18deg]" />
            <div className="absolute top-28 right-24 w-[30px] h-[120px] rounded-full border border-accent/10 rotate-[-18deg]" />
            <div className="absolute bottom-40 left-10 w-[35px] h-[140px] rounded-full border border-cream/10 rotate-[22deg]" />
          </div>

          {/* Back link */}
          <div className="absolute top-28 left-6 md:left-14 z-20">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 text-cream/60 hover:text-accent transition-colors no-underline text-[11px] tracking-[0.2em] uppercase font-bold group"
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
                <span className="px-4 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold bg-accent/20 border border-accent/35 text-accent backdrop-blur-sm">
                  {isAr ? service.categoryLabelAr : service.categoryLabel}
                </span>
                <span className="px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold bg-white/10 border border-white/20 text-cream/70 backdrop-blur-sm">
                  {isAr ? service.tagAr : service.tag}
                </span>
              </div>

              <h1 className="font-serif font-light text-[clamp(44px,8vw,100px)] text-cream leading-[0.9] tracking-tight mb-4">
                <em>{isAr ? service.titleAr : service.title}</em>
              </h1>

              <p className="text-cream/60 text-[clamp(15px,1.8vw,20px)] max-w-2xl font-light leading-relaxed">
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
                <div className="w-6 h-px bg-accent" />
                <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">
                  {isAr ? "نبذة عن الخدمة" : "About This Service"}
                </span>
              </div>

              <p className="text-cream/85 text-[clamp(16px,1.8vw,20px)] font-light leading-relaxed mb-8">
                {isAr ? service.descriptionAr : service.description}
              </p>
              <p className="text-cream/55 text-[clamp(14px,1.5vw,17px)] font-light leading-relaxed">
                {isAr ? service.bodyAr : service.body}
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href={`/${locale}#booking`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-[0_8px_32px_rgba(187,138,60,0.4)]"
                >
                  {isAr ? "احجز الآن" : "Book this service"}
                  <span>{isAr ? "←" : "→"}</span>
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold text-cream/70 border border-white/20 no-underline transition-all duration-300 hover:border-accent/50 hover:text-accent"
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
              className="relative"
            >
              <div
                className="rounded-3xl p-8 border border-white/8 sticky top-32"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Capsule accent */}
                <div className="absolute top-4 right-4 w-6 h-14 rounded-full border border-accent/15 rotate-[-14deg]" />

                <div className="flex items-center gap-3 mb-7">
                  <div className="w-5 h-px bg-accent" />
                  <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">
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
                      transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
                      className="flex items-start gap-3.5"
                    >
                      <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path d="M2 4.5L3.8 6.3L7 3" stroke="#bb8a3c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[14px] text-cream/70 leading-snug">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="mt-8 pt-6 border-t border-white/8">
                  <p className="text-[11px] text-cream/35 tracking-[0.15em] uppercase leading-relaxed">
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
              <div className="w-6 h-px bg-accent/50" />
              <span className="text-accent/70 text-[10px] tracking-[0.4em] uppercase font-bold">
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
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Services ─────────────────────────────────── */}
        {related.length > 0 && (
          <section className="px-6 md:px-14 pb-28 border-t border-white/8 pt-20">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-px bg-accent/50" />
                    <span className="text-accent/70 text-[10px] tracking-[0.4em] uppercase font-bold">
                      {isAr ? "خدمات ذات صلة" : "Related Services"}
                    </span>
                  </div>
                  <h2 className="font-serif font-light text-[clamp(28px,4vw,48px)] text-cream leading-tight">
                    <em>{isAr ? "قد يعجبك أيضاً" : "You might also like"}</em>
                  </h2>
                </div>
                <Link
                  href={`/${locale}/services`}
                  className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-accent/60 hover:text-accent transition-colors no-underline font-bold"
                >
                  {isAr ? "← عرض الكل" : "View all →"}
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                      className="group block no-underline rounded-t-full rounded-b-2xl overflow-hidden border border-white/8 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_20px_48px_rgba(0,0,0,0.45)] hover:-translate-y-2"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      <div className="relative overflow-hidden rounded-t-full" style={{ height: "220px" }}>
                        <Image
                          src={rel.img}
                          alt={isAr ? rel.titleAr : rel.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors duration-500" />
                        <div className="absolute top-4 left-4">
                          <span className="px-2.5 py-1 rounded-full text-[9px] tracking-[0.18em] uppercase font-bold bg-accent/20 border border-accent/30 text-accent backdrop-blur-sm">
                            {isAr ? rel.categoryLabelAr : rel.categoryLabel}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-cream text-[18px] font-light italic leading-tight group-hover:text-accent transition-colors duration-300">
                          {isAr ? rel.titleAr : rel.title}
                        </h3>
                        <p className="text-[12px] text-cream/40 mt-1.5 line-clamp-1">
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
        <section className="relative px-6 py-24 overflow-hidden border-t border-white/8">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-15%] right-[-4%] w-[80px] h-[340px] bg-accent/7 rounded-full rotate-[-28deg]" />
            <div className="absolute bottom-[-12%] left-[-3%] w-[60px] h-[260px] bg-cream/3 rounded-full rotate-[32deg]" />
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-accent/70 font-bold mb-6">
                {isAr ? "احجز فعاليتك" : "Reserve Your Date"}
              </p>
              <h2 className="font-serif font-light text-[clamp(36px,6vw,72px)] text-cream leading-[0.9] tracking-tight mb-5">
                <em>
                  {isAr
                    ? `احجز ${service.titleAr}`
                    : `Book ${service.title}`}
                </em>
              </h2>
              <p className="text-cream/40 text-[15px] max-w-md mx-auto font-light mb-10">
                {isAr
                  ? "تواصل معنا لنبدأ في تصميم فعاليتك الاستثنائية."
                  : "Get in touch and let us begin crafting your extraordinary event."}
              </p>
              <Link
                href={`/${locale}#booking`}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-[12px] tracking-[0.22em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-[0_12px_40px_rgba(187,138,60,0.45)]"
              >
                {isAr ? "ابدأ المحادثة" : "Start a conversation"}
                <span>{isAr ? "←" : "→"}</span>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
