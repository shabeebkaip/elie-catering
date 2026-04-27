"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { services, categories } from "@/lib/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>(
    searchParams.get("category") ?? "all"
  );

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <Header />
      <main className="bg-primary min-h-screen">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-40 pb-24 px-6">
          {/* Capsule bg accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] right-[-4%] w-[120px] h-[560px] bg-accent/8 rounded-full rotate-[-30deg]" />
            <div className="absolute top-[-2%] right-[8%] w-[60px] h-[280px] border border-accent/10 rounded-full rotate-[-30deg]" />
            <div className="absolute bottom-[-8%] left-[-4%] w-[100px] h-[440px] bg-cream/3 rounded-full rotate-[32deg]" />
            <div className="absolute top-[20%] left-[30%] w-[40px] h-[160px] border border-accent/6 rounded-full rotate-[-15deg]" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-accent/60" />
                <span className="text-accent/80 text-[10px] tracking-[0.4em] uppercase font-bold">
                  {isAr ? "ما نقدمه" : "What We Offer"}
                </span>
                <div className="w-8 h-px bg-accent/60" />
              </div>

              <h1 className="font-serif font-light text-[clamp(52px,10vw,120px)] text-cream uppercase leading-[0.88] tracking-tight mb-6">
                {isAr ? (
                  "خدماتنا"
                ) : (
                  <>
                    Our
                    <br />
                    <em className="not-italic text-accent">Services.</em>
                  </>
                )}
              </h1>

              <p className="text-cream/50 text-[clamp(15px,1.6vw,18px)] max-w-xl font-light leading-relaxed">
                {isAr
                  ? "من حفلات الزفاف الحميمة إلى الحفلات الكبرى — كل مناسبة مرفوعة إلى مستوى استثنائي."
                  : "From intimate weddings to grand galas — every occasion elevated to the extraordinary."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Category Filter ───────────────────────────────── */}
        <section className="px-6 pb-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-bold transition-all duration-300 border cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-accent text-primary border-accent shadow-[0_4px_20px_rgba(187,138,60,0.4)]"
                      : "bg-transparent text-cream/55 border-white/15 hover:border-accent/40 hover:text-cream"
                  }`}
                >
                  {isAr ? cat.labelAr : cat.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Services Grid ─────────────────────────────────── */}
        <section className="px-6 pb-32">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {filtered.map((service, i) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: (i % 6) * 0.06,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                  >
                    <Link
                      href={`/${locale}/services/${service.slug}`}
                      className="group block no-underline rounded-t-full rounded-b-3xl overflow-hidden border border-white/8 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
                      style={{ background: "rgba(255,255,255,0.025)" }}
                    >
                      {/* Image — capsule arch top */}
                      <div className="relative overflow-hidden rounded-t-full" style={{ height: "300px" }}>
                        <Image
                          src={service.img}
                          alt={isAr ? service.titleAr : service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-colors duration-500" />

                        {/* Tag pill */}
                        <div className="absolute top-5 left-5">
                          <span className="px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold bg-accent/20 border border-accent/35 text-accent backdrop-blur-sm">
                            {isAr ? service.tagAr : service.tag}
                          </span>
                        </div>

                        {/* Category badge */}
                        <div className="absolute top-5 right-5">
                          <span className="px-2.5 py-1 rounded-full text-[9px] tracking-[0.15em] uppercase font-semibold bg-white/10 border border-white/15 text-cream/70 backdrop-blur-sm">
                            {isAr ? service.categoryLabelAr : service.categoryLabel}
                          </span>
                        </div>

                        {/* Hover arrow */}
                        <div className="absolute bottom-5 right-5 w-9 h-9 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                          <span className="text-primary text-[13px] font-bold">
                            {isAr ? "←" : "→"}
                          </span>
                        </div>

                        {/* Capsule accent */}
                        <div className="absolute top-4 right-16 w-4 h-9 rounded-full border border-white/15 rotate-[-12deg] group-hover:border-accent/30 transition-colors duration-400" />
                      </div>

                      {/* Content */}
                      <div className="p-7">
                        <p className="text-[10px] tracking-[0.35em] uppercase text-accent/60 font-bold mb-2">
                          {isAr ? service.eyebrowAr : service.eyebrow}
                        </p>
                        <h3 className="font-serif text-cream text-[clamp(20px,2.5vw,26px)] font-light italic leading-tight mb-3 group-hover:text-accent transition-colors duration-300">
                          {isAr ? service.titleAr : service.title}
                        </h3>
                        <p className="text-[13px] text-cream/50 leading-relaxed line-clamp-2 group-hover:text-cream/70 transition-colors duration-300">
                          {isAr ? service.descriptionAr : service.description}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-accent/50 group-hover:text-accent transition-colors duration-300 font-bold">
                          <span>{isAr ? "اكتشف المزيد" : "Explore service"}</span>
                          <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                            {isAr ? "←" : "→"}
                          </span>
                        </div>
                      </div>

                      {/* Bottom progress bar */}
                      <div className="h-[2px] w-0 group-hover:w-full bg-accent transition-all duration-700 flex-shrink-0" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────── */}
        <section className="relative px-6 py-28 overflow-hidden border-t border-white/8">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] right-[-6%] w-[80px] h-[360px] bg-accent/7 rounded-full rotate-[-28deg]" />
            <div className="absolute bottom-[-15%] left-[-4%] w-[60px] h-[280px] bg-cream/3 rounded-full rotate-[32deg]" />
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-6 h-px bg-accent/50" />
                <span className="text-accent/70 text-[10px] tracking-[0.4em] uppercase font-bold">
                  {isAr ? "ابدأ الرحلة" : "Begin the journey"}
                </span>
                <div className="w-6 h-px bg-accent/50" />
              </div>

              <h2 className="font-serif font-light text-[clamp(40px,7vw,88px)] text-cream uppercase leading-[0.9] tracking-tight mb-6">
                {isAr ? (
                  "احجز فعاليتك"
                ) : (
                  <>
                    Book your
                    <br />
                    <em className="not-italic text-accent">Event.</em>
                  </>
                )}
              </h2>

              <p className="text-cream/45 text-[clamp(14px,1.5vw,17px)] max-w-md mx-auto font-light leading-relaxed mb-10">
                {isAr
                  ? "أخبرنا عن رؤيتك — سنتواصل معك خلال 24 ساعة لنصنع معاً شيئاً استثنائياً."
                  : "Tell us about your vision — we will reach out within 24 hours to craft something extraordinary together."}
              </p>

              <Link
                href={`/${locale}#booking`}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-[12px] tracking-[0.22em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-[0_12px_40px_rgba(187,138,60,0.5)]"
              >
                {isAr ? "ابدأ المحادثة" : "Start a conversation"}
                <span className="text-[10px]">{isAr ? "←" : "→"}</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
