"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CARDS = [
  {
    id: "catering",
    num: "01",
    eyebrow: "Food & Beverage",
    eyebrowAr: "الأغذية والمشروبات",
    h1: "Culinary",
    h2: "Excellence.",
    h1Ar: "التميز",
    h2Ar: "الطهوي.",
    desc: "Crafted menus and impeccable culinary artistry for every scale of occasion.",
    descAr: "قوائم طعام راقية وإبداع طهوي لا يُضاهى في كل المناسبات.",
    img: "/images/services/luxury-catering.webp",
    href: "services/full-service-catering",
    offerings: [
      { en: "Full-Service Catering", ar: "التموين الشامل",   slug: "full-service-catering" },
      { en: "Buffet Events",         ar: "فعاليات البوفيه",  slug: "buffet-events"         },
      { en: "Luxury Dishes",         ar: "الأطباق الفاخرة", slug: "luxury-dishes"         },
    ],
  },
  {
    id: "planning",
    num: "02",
    eyebrow: "Full Coordination",
    eyebrowAr: "التنسيق الكامل",
    h1: "Event",
    h2: "Planning.",
    h1Ar: "تنظيم",
    h2Ar: "الفعاليات.",
    desc: "From concept to final curtain — every detail orchestrated to perfection.",
    descAr: "من المفهوم حتى اللحظة الأخيرة — كل تفصيلة منسقة بإتقان.",
    img: "/images/services/wedding.webp",
    href: "planning",
    offerings: [
      { en: "Wedding Planning", ar: "تخطيط الأعراس",      slug: "wedding-planning" },
      { en: "Corporate Events", ar: "الفعاليات المؤسسية",  slug: "corporate-events" },
      { en: "Event Management", ar: "إدارة الفعاليات",     slug: "event-management" },
    ],
  },
] as const;

const DECOR = {
  id: "decor",
  num: "03",
  eyebrow: "Ambiance & Aesthetics",
  eyebrowAr: "الأجواء والجماليات",
  h1: "Décor &",
  h2: "Design.",
  h1Ar: "الديكور",
  h2Ar: "والتصميم.",
  desc: "Florals, lighting, and staging — every venue a breathtaking masterpiece.",
  descAr: "الأزهار والإضاءة والإخراج — كل مكان تحفة تأخذ الأنفاس.",
  img: "/images/services/event-styling.webp",
  href: "decorating",
  offerings: [
    { en: "Décor Preparation", ar: "تحضير الديكور",  slug: "decor-preparation" },
    { en: "Display Tables",    ar: "طاولات العرض",   slug: "display-tables"    },
    { en: "Luxury Cakes",      ar: "الكعك الفاخر",   slug: "luxury-cakes"      },
  ],
} as const;

const PREMIUM = {
  id: "addons",
  num: "04",
  eyebrow: "Elevate Every Moment",
  eyebrowAr: "ارفع كل لحظة",
  h1: "Premium",
  h2: "Extras.",
  h1Ar: "تجارب",
  h2Ar: "مميزة.",
  desc: "Photography, entertainment, and valet — the details that define perfection.",
  descAr: "التصوير والترفيه والفاليه — التفاصيل التي تحدد الكمال.",
  img: "/images/services/vip.webp",
  href: "services/professional-photography",
  offerings: [
    { en: "Photography",   ar: "التصوير",       slug: "professional-photography" },
    { en: "Entertainment", ar: "الترفيه",        slug: "entertainment-live-music" },
    { en: "Valet Service", ar: "خدمة الفاليه",   slug: "valet-parking"           },
  ],
} as const;

/* Shared card internals for the two large top cards */
function CardContent({
  card,
  locale,
  isAr,
}: {
  card: (typeof CARDS)[number];
  locale: string;
  isAr: boolean;
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[8.5px] tracking-[0.36em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.52)" }}>
          {card.num}
        </span>
        <div className="w-3 h-px" style={{ background: "rgba(187,138,60,0.35)" }} />
        <span className="text-[8.5px] tracking-[0.36em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.52)" }}>
          {isAr ? card.eyebrowAr : card.eyebrow}
        </span>
      </div>

      <h3
        className="font-serif font-light text-cream leading-[0.9] mb-2"
        style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
      >
        {isAr ? (
          <>{card.h1Ar}<br />{card.h2Ar}</>
        ) : (
          <>{card.h1}<br /><em className="italic" style={{ color: "#c49a42" }}>{card.h2}</em></>
        )}
      </h3>

      <p className="mb-4 leading-relaxed" style={{ fontSize: "12px", color: "rgba(245,242,234,0.4)", maxWidth: "300px" }}>
        {isAr ? card.descAr : card.desc}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {card.offerings.map((o) => (
          <Link
            key={o.slug}
            href={`/${locale}/services/${o.slug}`}
            className="text-[9px] tracking-[0.1em] no-underline rounded-full px-2.5 py-1 transition-colors duration-200 hover:text-accent"
            style={{ border: "1px solid rgba(255,255,255,0.11)", color: "rgba(245,242,234,0.5)" }}
          >
            {isAr ? o.ar : o.en}
          </Link>
        ))}
      </div>

      <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <Link
          href={`/${locale}/${card.href}`}
          className="inline-flex items-center gap-2 text-[9.5px] tracking-[0.24em] uppercase font-bold no-underline transition-colors hover:text-accent"
          style={{ color: "rgba(187,138,60,0.68)" }}
        >
          <span>{isAr ? "استكشف الخدمة" : "Explore Service"}</span>
          <span>{isAr ? "←" : "→"}</span>
        </Link>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const GRAD_BOTTOM = "linear-gradient(to top, rgba(5,3,12,0.97) 0%, rgba(5,3,12,0.65) 35%, rgba(5,3,12,0.1) 70%, transparent 100%)";
  const BORDER_HOVER = "absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/[0.22] transition-colors duration-500 pointer-events-none";

  return (
    <>
      <Header />
      <main className="bg-primary overflow-x-hidden">

        {/* ══ HERO ══════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
          <Image src="/images/elie-hero.webp" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,3,12,0.5) 0%, rgba(5,3,12,0.28) 40%, rgba(5,3,12,0.9) 100%)" }} />

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-10"
            >
              <div className="w-10 h-px" style={{ background: "rgba(187,138,60,0.6)" }} />
              <span className="text-[9.5px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.8)" }}>
                {isAr ? "ما نقدمه" : "What We Offer"}
              </span>
              <div className="w-10 h-px" style={{ background: "rgba(187,138,60,0.6)" }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="font-serif font-light text-cream leading-[0.88] tracking-tight mb-8"
              style={{ fontSize: "clamp(52px, 11vw, 130px)" }}
            >
              {isAr ? (
                <>
                  <span className="block">كل تفصيلة.</span>
                  <span className="block" style={{ color: "#c49a42", fontSize: "1.08em" }}>منسقة</span>
                  <span className="block">بإتقان.</span>
                </>
              ) : (
                <>
                  <span className="block uppercase">Every Detail.</span>
                  <span className="block italic" style={{ color: "#c49a42", fontSize: "1.08em" }}>Perfectly</span>
                  <span className="block uppercase">Orchestrated.</span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="font-light mx-auto mb-12"
              style={{ fontSize: "clamp(14px, 1.5vw, 17px)", color: "rgba(245,242,234,0.46)", maxWidth: "420px", lineHeight: 1.85 }}
            >
              {isAr
                ? "من حفلات الزفاف الحميمة إلى الحفلات الملكية الكبرى — كل مناسبة مرفوعة إلى مستوى استثنائي."
                : "From intimate weddings to grand royal ceremonies — every occasion elevated to the extraordinary."}
            </motion.p>

            <motion.a
              href="#services"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.24em] uppercase font-bold no-underline transition-colors duration-300 hover:text-accent"
              style={{ color: "rgba(245,242,234,0.32)" }}
            >
              <span>{isAr ? "استكشف خدماتنا" : "Explore Our Services"}</span>
              <div className="w-px h-4" style={{ background: "rgba(187,138,60,0.38)" }} />
              <span style={{ color: "rgba(187,138,60,0.55)" }}>↓</span>
            </motion.a>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(187,138,60,0.38), transparent)" }} />
          </div>
        </section>

        {/* ══ BENTO GRID ════════════════════════════════════════ */}
        <section id="services" className="px-4 md:px-7 xl:px-10 pt-6 pb-8 scroll-mt-20">
          <div className="max-w-[1460px] mx-auto">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-5"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-7 h-px" style={{ background: "rgba(187,138,60,0.4)" }} />
                <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.62)" }}>
                  {isAr ? "خدماتنا المميزة" : "Signature Services"}
                </span>
                <div className="w-7 h-px" style={{ background: "rgba(187,138,60,0.4)" }} />
              </div>
              <h2 className="font-serif font-light text-cream" style={{ fontSize: "clamp(24px, 3vw, 40px)" }}>
                {isAr
                  ? <>مصممة <span style={{ color: "#c49a42" }}>للاستثنائيين.</span></>
                  : <>Crafted for the <em className="italic" style={{ color: "#c49a42" }}>extraordinary.</em></>}
              </h2>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

              {/* ─ TOP ROW: Catering + Event Planning ─ */}
              {CARDS.map((card, i) => (
                <motion.div
                  key={card.id}
                  id={card.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="md:col-span-2 relative group overflow-hidden rounded-2xl"
                  style={{ height: "clamp(380px, 46vh, 500px)" }}
                >
                  <Image
                    src={card.img}
                    alt={isAr ? card.h1Ar : card.h1}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.046]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0" style={{ background: GRAD_BOTTOM }} />
                  <div className={BORDER_HOVER} />
                  <CardContent card={card} locale={locale} isAr={isAr} />
                </motion.div>
              ))}

              {/* ─ SECOND ROW: Décor (wide) + Premium (narrow) ─ */}

              {/* Décor — col-span-3, wide horizontal layout */}
              <motion.div
                id="decor"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.16 }}
                className="md:col-span-3 relative group overflow-hidden rounded-2xl"
                style={{ height: "clamp(280px, 34vh, 380px)" }}
              >
                <Image
                  src={DECOR.img}
                  alt={isAr ? DECOR.h1Ar : DECOR.h1}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, rgba(5,3,12,0.96) 0%, rgba(5,3,12,0.68) 32%, rgba(5,3,12,0.18) 65%, transparent 100%), linear-gradient(to top, rgba(5,3,12,0.6) 0%, transparent 40%)" }}
                />
                <div className={BORDER_HOVER} />

                <div className="absolute inset-0 flex items-end px-7 md:px-9 pb-7 md:pb-9">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[8.5px] tracking-[0.36em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.52)" }}>{DECOR.num}</span>
                      <div className="w-3 h-px" style={{ background: "rgba(187,138,60,0.35)" }} />
                      <span className="text-[8.5px] tracking-[0.36em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.52)" }}>
                        {isAr ? DECOR.eyebrowAr : DECOR.eyebrow}
                      </span>
                    </div>
                    <h3 className="font-serif font-light text-cream leading-[0.9] mb-2" style={{ fontSize: "clamp(26px, 2.8vw, 40px)" }}>
                      {isAr
                        ? <>{DECOR.h1Ar}<br />{DECOR.h2Ar}</>
                        : <>{DECOR.h1}<br /><em className="italic" style={{ color: "#c49a42" }}>{DECOR.h2}</em></>}
                    </h3>
                    <p className="mb-4 leading-relaxed" style={{ fontSize: "12px", color: "rgba(245,242,234,0.4)", maxWidth: "360px" }}>
                      {isAr ? DECOR.descAr : DECOR.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {DECOR.offerings.map((o) => (
                        <Link
                          key={o.slug}
                          href={`/${locale}/services/${o.slug}`}
                          className="text-[9px] tracking-[0.1em] no-underline rounded-full px-2.5 py-1 transition-colors duration-200 hover:text-accent"
                          style={{ border: "1px solid rgba(255,255,255,0.11)", color: "rgba(245,242,234,0.5)" }}
                        >
                          {isAr ? o.ar : o.en}
                        </Link>
                      ))}
                    </div>
                    <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Link href={`/${locale}/${DECOR.href}`} className="inline-flex items-center gap-2 text-[9.5px] tracking-[0.24em] uppercase font-bold no-underline hover:text-accent transition-colors" style={{ color: "rgba(187,138,60,0.68)" }}>
                        <span>{isAr ? "استكشف الخدمة" : "Explore Service"}</span>
                        <span>{isAr ? "←" : "→"}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Premium — col-span-1, narrow */}
              <motion.div
                id="addons"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="md:col-span-1 relative group overflow-hidden rounded-2xl"
                style={{ height: "clamp(280px, 34vh, 380px)" }}
              >
                <Image
                  src={PREMIUM.img}
                  alt={isAr ? PREMIUM.h1Ar : PREMIUM.h1}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,3,12,0.98) 0%, rgba(5,3,12,0.72) 40%, rgba(5,3,12,0.18) 72%, transparent 100%)" }} />
                <div className={BORDER_HOVER} />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[8.5px] tracking-[0.36em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.52)" }}>{PREMIUM.num}</span>
                  </div>
                  <h3 className="font-serif font-light text-cream leading-[0.9] mb-2" style={{ fontSize: "clamp(22px, 2.2vw, 32px)" }}>
                    {isAr
                      ? <>{PREMIUM.h1Ar}<br />{PREMIUM.h2Ar}</>
                      : <>{PREMIUM.h1}<br /><em className="italic" style={{ color: "#c49a42" }}>{PREMIUM.h2}</em></>}
                  </h3>
                  <p className="mb-4 leading-relaxed" style={{ fontSize: "11.5px", color: "rgba(245,242,234,0.38)" }}>
                    {isAr ? PREMIUM.descAr : PREMIUM.desc}
                  </p>
                  <div className="flex flex-col gap-1.5 mb-4">
                    {PREMIUM.offerings.map((o) => (
                      <Link
                        key={o.slug}
                        href={`/${locale}/services/${o.slug}`}
                        className="text-[9.5px] no-underline transition-colors duration-200 hover:text-accent"
                        style={{ color: "rgba(245,242,234,0.46)" }}
                      >
                        <span style={{ color: "rgba(187,138,60,0.38)", marginRight: "6px" }}>·</span>
                        {isAr ? o.ar : o.en}
                      </Link>
                    ))}
                  </div>
                  <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Link href={`/${locale}/${PREMIUM.href}`} className="inline-flex items-center gap-2 text-[9.5px] tracking-[0.24em] uppercase font-bold no-underline hover:text-accent transition-colors" style={{ color: "rgba(187,138,60,0.68)" }}>
                      <span>{isAr ? "استكشف" : "Explore"}</span>
                      <span>{isAr ? "←" : "→"}</span>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* ─ SIGNATURE — panoramic full-width ─ */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.32 }}
                className="md:col-span-4 relative group overflow-hidden rounded-2xl"
                style={{ height: "clamp(150px, 18vh, 210px)" }}
              >
                <Image
                  src="/images/services/private-gathering.webp"
                  alt={isAr ? "الأعراس الفاخرة" : "Luxury Weddings"}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="100vw"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(5,3,12,0.95) 0%, rgba(5,3,12,0.62) 30%, rgba(5,3,12,0.12) 62%, transparent 100%)" }} />
                <div className={BORDER_HOVER} />

                <div className="absolute inset-0 flex items-center px-8 md:px-12">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-px" style={{ background: "rgba(187,138,60,0.48)" }} />
                      <span className="text-[8.5px] tracking-[0.42em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.62)" }}>
                        {isAr ? "الفعاليات المميزة" : "Signature Events"}
                      </span>
                    </div>
                    <h3
                      className="font-serif font-light text-cream leading-tight mb-3"
                      style={{ fontSize: "clamp(18px, 2.2vw, 28px)", fontStyle: isAr ? "normal" : "italic" }}
                    >
                      {isAr ? "الأعراس الفاخرة والحفلات الخاصة" : "Luxury Weddings & Private Galas"}
                    </h3>
                    <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Link
                        href={`/${locale}/planning/wedding-planning`}
                        className="inline-flex items-center gap-2 text-[9.5px] tracking-[0.22em] uppercase font-bold no-underline hover:text-accent transition-colors"
                        style={{ color: "rgba(187,138,60,0.65)" }}
                      >
                        <span>{isAr ? "اكتشف المزيد" : "Explore Weddings"}</span>
                        <span>{isAr ? "←" : "→"}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ══ CTA ═══════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden px-6 md:px-14 py-24 md:py-36"
          style={{ background: "#09061a" }}
        >
          <div
            className="absolute inset-0 opacity-[0.028] pointer-events-none"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }}
          />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(187,138,60,0.07), transparent)" }} />
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(187,138,60,0.35), transparent)" }} />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="w-8 h-px" style={{ background: "rgba(187,138,60,0.35)" }} />
                <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.55)" }}>
                  {isAr ? "ابدأ الرحلة" : "Begin the journey"}
                </span>
                <div className="w-8 h-px" style={{ background: "rgba(187,138,60,0.35)" }} />
              </div>

              <h2
                className="font-serif font-light text-cream leading-[0.88] tracking-tight mb-7"
                style={{ fontSize: "clamp(46px, 9vw, 106px)" }}
              >
                {isAr ? (
                  <>
                    <span className="block">مناسبتك</span>
                    <span className="block" style={{ color: "#c49a42", fontSize: "1.1em" }}>القادمة</span>
                    <span className="block">تبدأ هنا.</span>
                  </>
                ) : (
                  <>
                    <span className="block">Your Next</span>
                    <span className="block italic" style={{ color: "#c49a42", fontSize: "1.1em" }}>Celebration</span>
                    <span className="block">Begins Here.</span>
                  </>
                )}
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mx-auto mb-8"
                style={{ width: "68px", height: "1px", transformOrigin: "center", background: "linear-gradient(90deg, transparent, rgba(187,138,60,0.62), transparent)" }}
              />

              <p
                className="font-light leading-relaxed mx-auto mb-12"
                style={{ fontSize: "clamp(13px, 1.4vw, 16px)", color: "rgba(245,242,234,0.38)", maxWidth: "400px" }}
              >
                {isAr
                  ? "أخبرنا عن رؤيتك — سنتواصل معك خلال 24 ساعة لنصنع معاً شيئاً استثنائياً."
                  : "Tell us about your vision — we will reach out within 24 hours to craft something extraordinary together."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/${locale}#booking`}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-[11px] tracking-[0.22em] uppercase font-bold text-primary no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{ background: "linear-gradient(135deg, #c49a42, #d8b05a)", boxShadow: "0 12px 44px rgba(187,138,60,0.38)" }}
                >
                  {isAr ? "ابدأ محادثة" : "Start a Conversation"}
                  <span className="opacity-70">{isAr ? "←" : "→"}</span>
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.2em] uppercase font-bold no-underline transition-colors duration-300 hover:text-accent"
                  style={{ color: "rgba(245,242,234,0.28)" }}
                >
                  {isAr ? "تعرف علينا" : "Our Story"}
                  <span>{isAr ? "←" : "→"}</span>
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
