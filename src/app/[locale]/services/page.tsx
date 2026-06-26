"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PILLARS = [
  {
    id: "catering",
    num: "01",
    eyebrow: "Food & Beverage",
    eyebrowAr: "الأغذية والمشروبات",
    h1: "Culinary",
    h2: "Excellence.",
    h1Ar: "التميز",
    h2Ar: "الطهوي.",
    desc: "From intimate private dinners to grand royal feasts — every dish crafted with precision and artistry.",
    descAr: "من العشاء الخاص إلى المآدب الملكية — كل طبق يُصاغ بدقة وفن.",
    img: "/images/services/luxury-catering.webp",
    exploreHref: "services/full-service-catering",
    offerings: [
      { en: "Full-Service Catering",   ar: "التموين الشامل",     slug: "full-service-catering" },
      { en: "Buffet Events",           ar: "فعاليات البوفيه",    slug: "buffet-events"         },
      { en: "Luxury & Elite Dishes",   ar: "الأطباق الفاخرة",   slug: "luxury-dishes"         },
    ],
  },
  {
    id: "planning",
    num: "02",
    eyebrow: "Full Coordination",
    eyebrowAr: "التنسيق الكامل",
    h1: "Flawless",
    h2: "Orchestration.",
    h1Ar: "تنسيق",
    h2Ar: "لا تشوبه شائبة.",
    desc: "From first consultation to final flourish — we handle every detail so you can be fully present.",
    descAr: "من أول استشارة حتى اللمسة الأخيرة — نتولى كل تفصيلة لتحضر بالكامل في لحظتك.",
    img: "/images/services/wedding.webp",
    exploreHref: "planning",
    offerings: [
      { en: "Wedding Planning",  ar: "تخطيط حفلات الزفاف",  slug: "wedding-planning"  },
      { en: "Event Management",  ar: "إدارة الفعاليات",      slug: "event-management"  },
      { en: "Corporate Events",  ar: "الفعاليات المؤسسية",   slug: "corporate-events"  },
    ],
  },
  {
    id: "decor",
    num: "03",
    eyebrow: "Ambiance & Aesthetics",
    eyebrowAr: "الأجواء والجماليات",
    h1: "Spaces",
    h2: "Transformed.",
    h1Ar: "مساحات",
    h2Ar: "مُحوَّلة.",
    desc: "Every venue transformed into an immersive environment — florals, lighting, and design in perfect harmony.",
    descAr: "كل مكان يتحول إلى بيئة غامرة — الأزهار والإضاءة والتصميم في تناغم مثالي.",
    img: "/images/services/event-styling.webp",
    exploreHref: "decorating",
    offerings: [
      { en: "Décor Preparation",  ar: "تحضير الديكور",   slug: "decor-preparation" },
      { en: "Display Tables",     ar: "طاولات العرض",    slug: "display-tables"    },
      { en: "Luxury Cakes",       ar: "الكعك الفاخر",    slug: "luxury-cakes"      },
    ],
  },
  {
    id: "addons",
    num: "04",
    eyebrow: "Elevate Every Moment",
    eyebrowAr: "ارفع كل لحظة",
    h1: "Beyond",
    h2: "the Ordinary.",
    h1Ar: "ما وراء",
    h2Ar: "العادي.",
    desc: "Photography, entertainment, valet, and production — the finishing details that make the extraordinary effortless.",
    descAr: "تصوير وترفيه وفاليه وإنتاج — التفاصيل الأخيرة التي تجعل الاستثنائي سهلاً.",
    img: "/images/services/vip.webp",
    exploreHref: "services/professional-photography",
    offerings: [
      { en: "Professional Photography",    ar: "التصوير الاحترافي",        slug: "professional-photography"  },
      { en: "Entertainment & Live Music",  ar: "الترفيه والموسيقى الحية",  slug: "entertainment-live-music"  },
      { en: "Stage & AV Solutions",        ar: "المسرح والصوت والصورة",    slug: "stage-av-solutions"        },
    ],
  },
] as const;

export default function ServicesPage() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <>
      <Header />
      <main className="bg-primary overflow-x-hidden">

        {/* ══════════════════════════════════════════
            HERO
            ══════════════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
          <Image
            src="/images/elie-hero.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(5,3,12,0.5) 0%, rgba(5,3,12,0.3) 40%, rgba(5,3,12,0.88) 100%)" }}
          />

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
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
              style={{ fontSize: "clamp(14px, 1.5vw, 17px)", color: "rgba(245,242,234,0.48)", maxWidth: "420px", lineHeight: 1.85 }}
            >
              {isAr
                ? "من حفلات الزفاف الحميمة إلى الحفلات الملكية الكبرى — كل مناسبة مرفوعة إلى مستوى استثنائي."
                : "From intimate weddings to grand royal ceremonies — every occasion elevated to the extraordinary."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {PILLARS.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="px-5 py-2.5 rounded-full text-[10.5px] tracking-[0.16em] uppercase font-bold border border-white/14 text-cream/48 hover:border-accent/45 hover:text-accent transition-all duration-300 no-underline"
                >
                  {isAr ? p.eyebrowAr.split(" ")[0] : p.h1}
                </a>
              ))}
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(187,138,60,0.4), transparent)" }} />
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FOUR SERVICE PILLARS
            ══════════════════════════════════════════ */}
        {PILLARS.map((pillar, i) => {
          const atStart = i % 2 === 0;

          return (
            <section
              key={pillar.id}
              id={pillar.id}
              className="relative overflow-hidden scroll-mt-24"
              style={{ minHeight: "82vh", borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              {/* Full-bleed image */}
              <Image
                src={pillar.img}
                alt={isAr ? pillar.h1Ar : pillar.h1}
                fill
                className="object-cover"
                sizes="100vw"
              />

              {/* Cinematic gradient: side + bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background: atStart
                    ? "linear-gradient(to right, rgba(5,3,12,0.94) 0%, rgba(5,3,12,0.72) 30%, rgba(5,3,12,0.22) 62%, transparent 100%), linear-gradient(to top, rgba(5,3,12,0.75) 0%, transparent 42%)"
                    : "linear-gradient(to left, rgba(5,3,12,0.94) 0%, rgba(5,3,12,0.72) 30%, rgba(5,3,12,0.22) 62%, transparent 100%), linear-gradient(to top, rgba(5,3,12,0.75) 0%, transparent 42%)",
                }}
              />

              {/* Content */}
              <div
                className={`absolute inset-0 flex items-end px-8 md:px-14 xl:px-20 pb-14 md:pb-20 ${atStart ? "justify-start" : "justify-end"}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: [0.19, 1, 0.22, 1] }}
                  className="max-w-sm md:max-w-md"
                  style={{ textAlign: !atStart && !isAr ? "right" : undefined }}
                >
                  {/* Pillar number + eyebrow */}
                  <div
                    className={`flex items-center gap-2.5 mb-5 ${!atStart && !isAr ? "justify-end" : ""}`}
                  >
                    <span className="font-serif text-[11px] tabular-nums" style={{ color: "rgba(187,138,60,0.4)" }}>
                      {pillar.num}
                    </span>
                    <div className="w-4 h-px" style={{ background: "rgba(187,138,60,0.4)" }} />
                    <span className="text-[9px] tracking-[0.38em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.65)" }}>
                      {isAr ? pillar.eyebrowAr : pillar.eyebrow}
                    </span>
                  </div>

                  {/* Headline */}
                  <h2
                    className="font-serif font-light text-cream leading-[0.9] tracking-tight mb-4"
                    style={{ fontSize: "clamp(40px, 5.5vw, 74px)" }}
                  >
                    {isAr ? (
                      <>
                        <span className="block">{pillar.h1Ar}</span>
                        <span className="block">{pillar.h2Ar}</span>
                      </>
                    ) : (
                      <>
                        <span className="block">{pillar.h1}</span>
                        <span className="block italic" style={{ color: "#c49a42" }}>{pillar.h2}</span>
                      </>
                    )}
                  </h2>

                  {/* Gold rule */}
                  <div
                    className="mb-5"
                    style={{
                      width: "52px",
                      height: "1px",
                      background: "rgba(187,138,60,0.55)",
                      marginLeft: !atStart && !isAr ? "auto" : undefined,
                    }}
                  />

                  {/* Description */}
                  <p
                    className="font-light leading-relaxed mb-7"
                    style={{ fontSize: "clamp(13px, 1.3vw, 15px)", color: "rgba(245,242,234,0.5)" }}
                  >
                    {isAr ? pillar.descAr : pillar.desc}
                  </p>

                  {/* 3 offering pills */}
                  <div
                    className={`flex flex-wrap gap-2 mb-8 ${!atStart && !isAr ? "justify-end" : ""}`}
                  >
                    {pillar.offerings.map((o) => (
                      <Link
                        key={o.slug}
                        href={`/${locale}/services/${o.slug}`}
                        className="px-3.5 py-1.5 rounded-full text-[10.5px] tracking-[0.1em] no-underline transition-all duration-300 hover:text-accent"
                        style={{
                          border: "1px solid rgba(255,255,255,0.16)",
                          color: "rgba(245,242,234,0.62)",
                        }}
                      >
                        {isAr ? o.ar : o.en}
                      </Link>
                    ))}
                  </div>

                  {/* Explore CTA */}
                  <Link
                    href={`/${locale}/${pillar.exploreHref}`}
                    className="inline-flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase font-bold no-underline transition-colors duration-300 hover:text-accent group"
                    style={{ color: "rgba(187,138,60,0.65)" }}
                  >
                    <span>{isAr ? "استكشف الخدمة" : "Explore Service"}</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      {isAr ? "←" : "→"}
                    </span>
                  </Link>
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* ══════════════════════════════════════════
            CTA
            ══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden px-6 md:px-14 py-28 md:py-40"
          style={{ background: "#09061a" }}
        >
          {/* Grain */}
          <div
            className="absolute inset-0 opacity-[0.028] pointer-events-none"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(187,138,60,0.07), transparent)" }}
          />
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(187,138,60,0.38), transparent)" }} />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="w-8 h-px" style={{ background: "rgba(187,138,60,0.38)" }} />
                <span className="text-[9.5px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.58)" }}>
                  {isAr ? "ابدأ الرحلة" : "Begin the journey"}
                </span>
                <div className="w-8 h-px" style={{ background: "rgba(187,138,60,0.38)" }} />
              </div>

              <h2
                className="font-serif font-light text-cream leading-[0.88] tracking-tight mb-8"
                style={{ fontSize: "clamp(46px, 9vw, 108px)" }}
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
                style={{
                  width: "72px", height: "1px", transformOrigin: "center",
                  background: "linear-gradient(90deg, transparent, rgba(187,138,60,0.65), transparent)",
                }}
              />

              <p
                className="font-light leading-relaxed mx-auto mb-12"
                style={{ fontSize: "clamp(14px, 1.4vw, 16.5px)", color: "rgba(245,242,234,0.4)", maxWidth: "420px" }}
              >
                {isAr
                  ? "أخبرنا عن رؤيتك — سنتواصل معك خلال 24 ساعة لنصنع معاً شيئاً استثنائياً."
                  : "Tell us about your vision — we will reach out within 24 hours to craft something extraordinary together."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/${locale}#booking`}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-[11px] tracking-[0.22em] uppercase font-bold text-primary no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #c49a42 0%, #d8b05a 50%, #c49a42 100%)",
                    boxShadow: "0 12px 48px rgba(187,138,60,0.4)",
                  }}
                >
                  {isAr ? "ابدأ محادثة" : "Start a Conversation"}
                  <span className="opacity-70">{isAr ? "←" : "→"}</span>
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-bold no-underline transition-colors duration-300 hover:text-accent"
                  style={{ color: "rgba(245,242,234,0.32)" }}
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
