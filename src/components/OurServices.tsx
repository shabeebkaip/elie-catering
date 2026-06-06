"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const CATEGORIES = [
  {
    badge: "Our Signature",
    badgeAr: "توقيعنا المميز",
    category: "Food & Beverage",
    categoryAr: "الأغذية والمشروبات",
    title: "Catering",
    titleAr: "التموين",
    slug: "catering",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Full-Service Catering",
      "Buffet & Live Stations",
      "Luxury Menu Creation",
      "Fine Dining Setup",
      "Arabic Coffee & Dates",
      "Seafood & Sushi Bar",
      "Live Cooking Stations",
    ],
    itemsAr: [
      "تموين متكامل",
      "بوفيه ومحطات حية",
      "تصميم قوائم فاخرة",
      "إعداد العشاء الراقي",
      "قهوة عربية وتمر",
      "بار مأكولات بحرية وسوشي",
      "محطات طهي حي",
    ],
  },
  {
    badge: "Most Booked",
    badgeAr: "الأكثر حجزاً",
    category: "Full Coordination",
    categoryAr: "تنسيق كامل",
    title: "Event Planning",
    titleAr: "تنظيم الفعاليات",
    slug: "planning",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Wedding Planning",
      "Corporate Events",
      "Private Dinners",
      "Royal Ceremonies",
      "Gala & Cocktail Events",
      "Destination Events",
      "Event Management",
    ],
    itemsAr: [
      "تخطيط حفلات الزفاف",
      "الفعاليات المؤسسية",
      "العشاء الخاص",
      "المراسم الملكية",
      "حفلات الغالا والكوكتيل",
      "فعاليات الوجهات",
      "إدارة الفعاليات",
    ],
  },
  {
    badge: "Explore",
    badgeAr: "استكشف",
    category: "Ambiance & Aesthetics",
    categoryAr: "الأجواء والجماليات",
    title: "Décor & Design",
    titleAr: "الديكور والتصميم",
    slug: "decor",
    img: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Floral Arrangements",
      "Display & Dessert Tables",
      "Luxury Cakes",
      "Lighting Design",
      "Venue Dressing & Styling",
      "Exclusive Accessories",
      "Stage & Backdrop Design",
    ],
    itemsAr: [
      "تنسيق الزهور",
      "طاولات العرض والحلوى",
      "كعكات فاخرة",
      "تصميم الإضاءة",
      "تزيين المكان وتصميمه",
      "إكسسوارات حصرية",
      "تصميم المسرح والخلفيات",
    ],
  },
  {
    badge: "Exclusive",
    badgeAr: "حصري",
    category: "Elevate Your Event",
    categoryAr: "ارفع مستوى فعاليتك",
    title: "Premium Add-ons",
    titleAr: "الإضافات المميزة",
    slug: "addons",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Professional Photography",
      "Entertainment & Live Music",
      "Valet Parking (Valia)",
      "Stage & AV Solutions",
      "Branded Luxury Details",
      "Silverware & Tableware",
      "Hall Coordination",
    ],
    itemsAr: [
      "التصوير الاحترافي",
      "الترفيه والموسيقى الحية",
      "صف السيارات (فاليا)",
      "حلول المسرح والصوت والصورة",
      "تفاصيل فاخرة مميزة",
      "أدوات الفضة والمائدة",
      "تنسيق القاعة",
    ],
  },
];

export default function OurServices() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = useTranslations("ourServices");

  return (
    <section id="services" className="relative bg-primary overflow-hidden py-16 md:py-24">

      {/* Section header */}
      <div className="container-custom px-6 md:px-14 lg:px-20 mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent/60" />
              <span className="text-accent/80 text-[9px] tracking-[0.42em] uppercase font-bold">{t("eyebrow")}</span>
            </div>
            <h2 className="font-serif font-light text-[clamp(44px,8vw,96px)] text-cream uppercase leading-[0.88] tracking-tight">
              {t("headline")}
            </h2>
          </div>
          <p className="text-cream/40 text-[13px] md:text-[14px] max-w-xs font-light leading-relaxed md:text-right pb-2">
            {t("tagline")}
          </p>
        </motion.div>
      </div>

      {/* Cards row — horizontal scroll on mobile, grid on desktop */}
      <div className="px-6 md:px-14 lg:px-20">
        <div className="flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Service category cards */}
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative flex-shrink-0 w-[280px] sm:w-[300px] lg:w-auto snap-start"
            >
              <Link
                href={`/${locale}/services?category=${cat.slug}`}
                className="no-underline block h-full rounded-2xl overflow-hidden border border-white/8 hover:border-accent/30 transition-all duration-500 flex flex-col hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] hover:-translate-y-1"
                style={{ minHeight: 540 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ height: 200 }}>
                  <Image
                    src={cat.img}
                    alt={isAr ? cat.titleAr : cat.title}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                    sizes="(max-width: 1024px) 300px, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/70" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full text-[9px] tracking-[0.28em] uppercase font-bold bg-accent/90 text-primary backdrop-blur-sm">
                      {isAr ? cat.badgeAr : cat.badge}
                    </span>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-primary text-[12px] font-bold">{isAr ? "←" : "→"}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6 bg-[#1e1230]">
                  {/* Category label */}
                  <p className="text-[9px] tracking-[0.36em] uppercase text-accent/60 font-bold mb-2">
                    {isAr ? cat.categoryAr : cat.category}
                  </p>

                  {/* Title */}
                  <h3
                    className="text-cream text-[clamp(22px,2.8vw,28px)] leading-tight mb-5 font-light group-hover:text-accent transition-colors duration-300"
                    style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                  >
                    {isAr ? cat.titleAr : cat.title}
                  </h3>

                  {/* Service list */}
                  <ul className="flex-1 space-y-2 mb-6">
                    {(isAr ? cat.itemsAr : cat.items).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-cream/55 leading-snug">
                        <span className="text-accent/60 mt-[3px] flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase font-bold text-accent/70 group-hover:text-accent transition-colors duration-300">
                    {t("exploreAll")}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {isAr ? "←" : "→"}
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* 5th card — Signature Experience */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="relative flex-shrink-0 w-[280px] sm:w-[300px] lg:w-auto snap-start rounded-2xl overflow-hidden flex flex-col"
            style={{ minHeight: 540 }}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                alt="Signature Experience"
                fill
                className="object-cover opacity-30"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50" />
            </div>

            <div className="relative flex-1 flex flex-col justify-between p-6">
              {/* Top label */}
              <p className="text-[9px] tracking-[0.36em] uppercase text-accent/70 font-bold">
                {t("signatureEyebrow")}
              </p>

              {/* Headline */}
              <div>
                <h3
                  className="font-serif text-cream text-[clamp(28px,3.5vw,40px)] leading-[1.1] mb-8 font-light"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  {t("signatureHeadline")}
                </h3>

                {/* CTA button */}
                <Link
                  href={`/${locale}#booking`}
                  className="inline-flex items-center justify-between gap-3 w-full px-5 py-4 rounded-full bg-accent text-primary text-[10px] tracking-[0.22em] uppercase font-bold no-underline transition-all duration-300 hover:bg-cream hover:scale-[1.02] active:scale-95 mb-8"
                >
                  {t("bookCta")}
                  <span className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-[12px]">
                    {isAr ? "←" : "→"}
                  </span>
                </Link>

                {/* Stats */}
                <div className="flex gap-8">
                  <div>
                    <p className="font-serif text-accent text-[clamp(28px,3vw,40px)] font-light leading-none">14+</p>
                    <p className="text-[9px] tracking-[0.22em] uppercase text-cream/40 font-bold mt-1">{t("yearsLabel")}</p>
                  </div>
                  <div>
                    <p className="font-serif text-accent text-[clamp(28px,3vw,40px)] font-light leading-none">500+</p>
                    <p className="text-[9px] tracking-[0.22em] uppercase text-cream/40 font-bold mt-1">{t("eventsLabel")}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom link */}
      <div className="container-custom px-6 md:px-14 lg:px-20 mt-8 flex justify-end">
        <Link
          href={`/${locale}/services`}
          className="text-[10px] tracking-[0.32em] uppercase font-bold text-accent/50 hover:text-accent transition-colors duration-300 flex items-center gap-2"
        >
          {t("viewAll")} {isAr ? "←" : "→"}
        </Link>
      </div>
    </section>
  );
}
