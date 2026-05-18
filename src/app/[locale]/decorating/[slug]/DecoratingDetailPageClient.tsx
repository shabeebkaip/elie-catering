"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getDecoratingBySlug, decoratingServices } from "@/lib/decorating";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = { slug: string; locale: string };

export default function DecoratingDetailPageClient({ slug, locale }: Props) {
  const isAr = locale === "ar";

  const service = getDecoratingBySlug(slug);
  if (!service) notFound();

  const related = decoratingServices.filter((d) => d.slug !== slug);

  return (
    <>
      <Header />
      <main className="bg-primary min-h-screen">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative h-[88vh] min-h-[580px] max-h-[900px] overflow-hidden flex items-end">
          <Image
            src={service.heroImg}
            alt={isAr ? service.titleAr : service.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/10" />
          <div className="absolute inset-0 bg-primary/15" />

          {/* Capsule accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 right-16 w-[50px] h-[200px] rounded-full border border-accent/18 rotate-[-18deg]" />
            <div className="absolute top-28 right-24 w-[28px] h-[110px] rounded-full border border-accent/10 rotate-[-18deg]" />
            <div className="absolute bottom-32 left-10 w-[32px] h-[130px] rounded-full border border-cream/8 rotate-[22deg]" />
          </div>

          {/* Back link */}
          <div className="absolute top-28 left-6 md:left-14 z-20">
            <Link
              href={`/${locale}/decorating`}
              className="inline-flex items-center gap-2 text-cream/60 hover:text-accent transition-colors no-underline text-[11px] tracking-[0.2em] uppercase font-bold group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">
                {isAr ? "→" : "←"}
              </span>
              {isAr ? "خدمات التزيين" : "Decorating Services"}
            </Link>
          </div>

          <div className="relative z-10 px-6 md:px-14 pb-16 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="px-4 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold bg-accent/20 border border-accent/35 text-accent backdrop-blur-sm">
                  {isAr ? "التزيين" : "Decorating"}
                </span>
                <span className="px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold bg-accent/90 border border-accent text-primary backdrop-blur-sm">
                  {isAr ? service.tagAr : service.tag}
                </span>
              </div>

              <h1 className="font-serif font-light text-[clamp(44px,8vw,100px)] text-cream leading-[0.9] tracking-tight mb-4">
                <em>{isAr ? service.titleAr : service.title}</em>
              </h1>
              <p className="text-cream/55 text-[clamp(15px,1.8vw,20px)] max-w-2xl font-light leading-relaxed">
                {isAr ? service.taglineAr : service.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Hero CTA Strip ────────────────────────────────────── */}
        <section className="px-6 md:px-14 py-8 border-b border-white/8">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <p className="text-cream/50 text-[13px] font-light max-w-md leading-relaxed">
              {isAr ? service.descriptionAr : service.description}
            </p>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href={`/${locale}#booking`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-[0_6px_24px_rgba(187,138,60,0.4)]"
              >
                {isAr ? "احجز الآن" : "Book this service"}
                <span>{isAr ? "←" : "→"}</span>
              </Link>
              <Link
                href={`/${locale}/decorating`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-bold text-cream/60 border border-white/18 no-underline transition-all duration-300 hover:border-accent/45 hover:text-accent"
              >
                {isAr ? "جميع الخدمات" : "All decorating"}
              </Link>
            </div>
          </div>
        </section>

        {/* ── Overview ──────────────────────────────────────────── */}
        <section className="px-6 md:px-14 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-accent" />
              <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">
                {isAr ? "نبذة" : "Overview"}
              </span>
            </div>
            <p className="text-cream/60 text-[clamp(15px,1.7vw,19px)] font-light leading-relaxed max-w-4xl">
              {isAr ? service.introAr : service.intro}
            </p>
          </motion.div>
        </section>

        {/* ── Service Blocks ──────────────────────────────────────── */}
        <section className="px-6 md:px-14 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-accent/50" />
                <span className="text-accent/70 text-[10px] tracking-[0.4em] uppercase font-bold">
                  {isAr ? "ما نقدمه" : "The Full Offering"}
                </span>
              </div>
              <h2 className="font-serif font-light text-[clamp(32px,5vw,60px)] text-cream leading-tight">
                <em>{isAr ? "خدماتنا الشاملة" : "Every detail covered."}</em>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.blocks.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
                  className="rounded-3xl p-7 border border-white/8 hover:border-accent/20 transition-colors duration-400 relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                >
                  <div className="absolute top-4 right-4 w-4 h-9 rounded-full border border-accent/12 rotate-[-14deg]" />

                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-accent text-[18px]">{block.icon}</span>
                    <h3 className="font-serif text-cream text-[clamp(15px,1.8vw,19px)] font-light italic leading-tight">
                      {isAr ? block.titleAr : block.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {(isAr ? block.itemsAr : block.items).map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1.5 w-[5px] h-[5px] rounded-full bg-accent/50" />
                        <span className="text-[13px] text-cream/58 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mid CTA Banner ───────────────────────────────────── */}
        <section className="relative mx-6 mb-20 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={service.gallery[1] ?? service.heroImg}
              alt={isAr ? service.titleAr : service.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/88 to-primary/35" />
          </div>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-12%] right-[15%] w-[40px] h-[160px] rounded-full border border-accent/18 rotate-[-18deg]" />
            <div className="absolute bottom-[-12%] right-[25%] w-[28px] h-[110px] rounded-full border border-cream/10 rotate-[-18deg]" />
          </div>
          <div className="relative z-10 px-10 py-14 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-4">
                {isAr ? "اجعل رؤيتك واقعاً" : "Make your vision real"}
              </p>
              <h2 className="font-serif font-light text-[clamp(26px,4vw,48px)] text-cream leading-tight mb-5">
                <em>
                  {isAr
                    ? `دعنا نصمم ${service.titleAr} لمناسبتك.`
                    : `Let us design your ${service.title}.`}
                </em>
              </h2>
              <p className="text-cream/50 text-[13.5px] max-w-sm leading-relaxed mb-8">
                {isAr
                  ? "فريقنا مستعد لتحويل رؤيتك إلى بيئة تترك الضيوف يفقدون أنفاسهم."
                  : "Our team is ready to transform your vision into an environment that leaves guests breathless."}
              </p>
              <Link
                href={`/${locale}#booking`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-[0_8px_28px_rgba(187,138,60,0.45)]"
              >
                {isAr ? "ابدأ المحادثة" : "Start a conversation"}
                <span>{isAr ? "←" : "→"}</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Approach + What's Included ────────────────────────── */}
        <section className="px-6 md:px-14 pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-accent" />
                <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">
                  {isAr ? "المناسبات التي نغطيها" : "Occasions We Cover"}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {(isAr ? service.occasionsAr : service.occasions).map((occ) => (
                  <span
                    key={occ}
                    className="px-4 py-2 rounded-full text-[12.5px] border border-white/12 text-cream/60 hover:border-accent/35 hover:text-cream/85 transition-colors duration-300 cursor-default"
                  >
                    {occ}
                  </span>
                ))}
              </div>

              {/* Quote */}
              <div className="border-l-2 border-accent/40 pl-6 mb-10">
                <p className="font-serif text-cream/70 text-[clamp(16px,2vw,22px)] italic font-light leading-relaxed">
                  {isAr
                    ? `"${service.taglineAr}"`
                    : `"${service.tagline}"`}
                </p>
                <p className="text-[11px] tracking-[0.2em] uppercase text-accent/50 mt-3 font-bold">
                  — {isAr ? "إيلي للتموين وتنظيم الفعاليات" : "Elie Catering & Event Planning"}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${locale}#booking`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-[0_8px_32px_rgba(187,138,60,0.4)]"
                >
                  {isAr ? "احجز استشارة" : "Book a consultation"}
                  <span>{isAr ? "←" : "→"}</span>
                </Link>
                <Link
                  href={`/${locale}/decorating`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold text-cream/70 border border-white/20 no-underline transition-all duration-300 hover:border-accent/50 hover:text-accent"
                >
                  {isAr ? "← جميع خدمات التزيين" : "All decorating →"}
                </Link>
              </div>
            </motion.div>

            {/* Right: Included */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div
                className="rounded-3xl p-8 border border-white/8 sticky top-32 relative"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="absolute top-4 right-4 w-5 h-12 rounded-full border border-accent/15 rotate-[-14deg]" />

                <div className="flex items-center gap-3 mb-7">
                  <div className="w-5 h-px bg-accent" />
                  <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">
                    {isAr ? "ما يشمله" : "What's Included"}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {(isAr ? service.includedAr : service.included).map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: isAr ? 10 : -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.35 }}
                      className="flex items-start gap-3.5"
                    >
                      <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path d="M2 4.5L3.8 6.3L7 3" stroke="#bb8a3c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[13.5px] text-cream/70 leading-snug">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA inside panel */}
                <Link
                  href={`/${locale}#booking`}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full text-[11px] tracking-[0.18em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream active:scale-95 shadow-[0_6px_24px_rgba(187,138,60,0.4)]"
                >
                  {isAr ? "احجز هذه الخدمة" : "Book this service"}
                  <span>{isAr ? "←" : "→"}</span>
                </Link>

                <div className="mt-5 pt-5 border-t border-white/8">
                  <p className="text-[11px] text-cream/30 tracking-[0.1em] leading-relaxed">
                    {isAr
                      ? "يتواصل فريقنا خلال 24 ساعة لمناقشة متطلباتك وبناء الباقة المثالية."
                      : "Our team responds within 24 hours to discuss your requirements and build the perfect package."}
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
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
                  style={{ height: i === 0 ? "380px" : "182px" }}
                >
                  <Image
                    src={img}
                    alt={`${isAr ? service.titleAr : service.title} ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Decorating Services ───────────────────────── */}
        {related.length > 0 && (
          <section className="px-6 md:px-14 pb-28 border-t border-white/8 pt-20">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-px bg-accent/50" />
                    <span className="text-accent/70 text-[10px] tracking-[0.4em] uppercase font-bold">
                      {isAr ? "خدمات تزيين أخرى" : "Other Decorating Services"}
                    </span>
                  </div>
                  <h2 className="font-serif font-light text-[clamp(26px,4vw,44px)] text-cream leading-tight">
                    <em>{isAr ? "استكشف المزيد." : "Explore more."}</em>
                  </h2>
                </div>
                <Link
                  href={`/${locale}/decorating`}
                  className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-accent/60 hover:text-accent transition-colors no-underline font-bold"
                >
                  {isAr ? "← عرض الكل" : "View all →"}
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      className="group block no-underline rounded-t-full rounded-b-2xl overflow-hidden border border-white/8 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_20px_48px_rgba(0,0,0,0.45)] hover:-translate-y-2"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      <div className="relative overflow-hidden rounded-t-full" style={{ height: "260px" }}>
                        <Image
                          src={rel.img}
                          alt={isAr ? rel.titleAr : rel.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${rel.color} via-primary/20 to-transparent`} />
                        <div className="absolute inset-0 bg-primary/25 group-hover:bg-primary/8 transition-colors duration-500" />
                        <div className="absolute top-5 left-5">
                          <span className="px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold bg-accent/20 border border-accent/30 text-accent backdrop-blur-sm">
                            {isAr ? rel.tagAr : rel.tag}
                          </span>
                        </div>
                        <div className="absolute bottom-5 right-5 w-9 h-9 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span className="text-primary text-[12px] font-bold">{isAr ? "←" : "→"}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-accent/55 font-bold mb-2">
                          {isAr ? rel.eyebrowAr : rel.eyebrow}
                        </p>
                        <h3 className="font-serif text-cream text-[clamp(20px,2.5vw,28px)] font-light italic leading-tight group-hover:text-accent transition-colors duration-300">
                          {isAr ? rel.titleAr : rel.title}
                        </h3>
                        <p className="text-[12.5px] text-cream/40 mt-2 line-clamp-2">
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
            <div className="absolute top-[-12%] right-[-3%] w-[70px] h-[300px] bg-accent/7 rounded-full rotate-[-28deg]" />
            <div className="absolute bottom-[-10%] left-[-3%] w-[55px] h-[240px] bg-cream/3 rounded-full rotate-[32deg]" />
          </div>
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-accent/70 font-bold mb-6">
                {isAr ? "ابدأ الرحلة" : "Begin the journey"}
              </p>
              <h2 className="font-serif font-light text-[clamp(36px,6vw,68px)] text-cream leading-[0.92] tracking-tight mb-5">
                <em>
                  {isAr
                    ? `احجز ${service.titleAr}`
                    : `Book ${service.title}`}
                </em>
              </h2>
              <p className="text-cream/40 text-[14px] max-w-sm mx-auto font-light mb-10 leading-relaxed">
                {isAr
                  ? "تواصل معنا وسيرد فريقنا خلال 24 ساعة لبدء تصميم مناسبتك."
                  : "Get in touch and our team will respond within 24 hours to begin designing your occasion."}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href={`/${locale}#booking`}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-[12px] tracking-[0.22em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-[0_12px_40px_rgba(187,138,60,0.45)]"
                >
                  {isAr ? "ابدأ المحادثة" : "Start a conversation"}
                  <span>{isAr ? "←" : "→"}</span>
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center gap-2 px-8 py-5 rounded-full text-[11px] tracking-[0.18em] uppercase font-bold text-cream/60 border border-white/18 no-underline transition-all duration-300 hover:border-accent/45 hover:text-accent"
                >
                  {isAr ? "جميع الخدمات" : "All services"}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
