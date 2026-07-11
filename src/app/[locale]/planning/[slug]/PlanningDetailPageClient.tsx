"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getPlanningBySlug, planningServices } from "@/lib/planning";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GOLD      = "#C9A15B";
const CREAM     = "#F5F1E8";
const GRAD_HERO = "linear-gradient(to top, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.62) 45%, rgba(5,5,5,0.18) 72%, transparent 100%)";

const HERO_IMG: Record<string, string> = {
  "wedding-planning":  "/images/services/wedding.png",
  "event-planning":    "/images/services/coorperate-events.png",
  "party-planning":    "/images/services/private-gathering.png",
};

const GALLERY_IMGS: Record<string, string[]> = {
  "wedding-planning":  ["/images/services/wedding.png", "/images/services/event-styling.png", "/images/services/private-gathering.png", "/images/services/luxury-catering.png"],
  "event-planning":    ["/images/services/coorperate-events.png", "/images/services/wedding.png", "/images/services/event-styling.png", "/images/services/vip.png"],
  "party-planning":    ["/images/services/private-gathering.png", "/images/services/event-styling.png", "/images/services/wedding.png", "/images/services/luxury-catering.png"],
};

const PROCESS: Record<string, { num: string; t: string; tAr: string; d: string; dAr: string }[]> = {
  "wedding-planning": [
    { num: "01", t: "Initial Consultation",  tAr: "الاستشارة الأولى",     d: "We meet to understand your vision, style, budget, and guest count.",           dAr: "نلتقي لنفهم رؤيتك وأسلوبك وميزانيتك وعدد ضيوفك." },
    { num: "02", t: "Concept & Design",      tAr: "المفهوم والتصميم",       d: "A bespoke event concept — décor direction, mood board, palette — is crafted.", dAr: "تصميم مفهوم فريد للحفل — الديكور والألوان والأجواء." },
    { num: "03", t: "Vendor Coordination",   tAr: "تنسيق الموردين",         d: "We secure the venue, florists, photographers, catering, and all logistics.",   dAr: "نؤمن القاعة والزهور والتصوير والتموين وكل اللوجستيات." },
    { num: "04", t: "Your Day",              tAr: "يوم الحفل",              d: "Our team is on-site from first setup to final farewell — every moment managed.", dAr: "فريقنا حاضر من أول إعداد حتى آخر لحظة — كل شيء تحت السيطرة." },
  ],
  "event-planning": [
    { num: "01", t: "Brief & Discovery",     tAr: "الاستيعاب والاكتشاف",   d: "We learn your event objectives, audience, brand, and desired atmosphere.",     dAr: "نفهم أهداف فعاليتك وجمهورك وعلامتك التجارية وأجوائها." },
    { num: "02", t: "Creative Direction",    tAr: "التوجيه الإبداعي",       d: "A tailored event concept with full venue, staging, and production plan.",       dAr: "مفهوم فعالية مخصص مع خطة كاملة للقاعة والمسرح والإنتاج." },
    { num: "03", t: "Production & Logistics",tAr: "الإنتاج واللوجستيات",   d: "End-to-end coordination of all suppliers, AV, catering, and guest flow.",      dAr: "تنسيق شامل لجميع الموردين والتقنيات والتموين وتدفق الضيوف." },
    { num: "04", t: "Live Event Management", tAr: "إدارة الفعالية الحية",   d: "Our producers are on-site — briefed, positioned, and ready for every scenario.", dAr: "منظمونا في الموقع — جاهزون لكل سيناريو." },
  ],
  "party-planning": [
    { num: "01", t: "Vision Session",        tAr: "جلسة الرؤية",            d: "We discuss the occasion, theme, guest list, and the moments that matter most.", dAr: "نناقش المناسبة والفكرة وقائمة الضيوف والأوقات الأهم." },
    { num: "02", t: "Theme & Styling",       tAr: "المظهر والتصميم",         d: "Full creative direction — décor, flowers, lighting, colour palette, and flow.", dAr: "توجيه إبداعي كامل — الديكور والزهور والإضاءة والألوان." },
    { num: "03", t: "Arrangement & Booking", tAr: "الترتيب والحجز",          d: "We handle all bookings, supplier negotiations, and timeline building.",          dAr: "نتولى كل الحجوزات والتفاوض مع الموردين وبناء الجدول الزمني." },
    { num: "04", t: "Day-of Execution",      tAr: "تنفيذ يوم الحفل",         d: "Your team arrives, sets up, and manages so you enjoy every moment.",            dAr: "فريقنا يصل ويُعدّ ويدير كل شيء لتستمتع بكل لحظة." },
  ],
};

type Props = { slug: string; locale: string };

export default function PlanningDetailPageClient({ slug, locale }: Props) {
  const isAr = locale === "ar";

  const service = getPlanningBySlug(slug);
  if (!service) notFound();

  const related = planningServices.filter((p) => p.slug !== slug);
  const heroImg = HERO_IMG[slug] ?? service.heroImg;
  const galleryImgs = GALLERY_IMGS[slug] ?? service.gallery;
  const process = PROCESS[slug] ?? PROCESS["event-planning"];

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

          {/* ── Hero ──────────────────────────────────────────────── */}
          <section className="relative h-[88vh] min-h-[580px] max-h-[860px] overflow-hidden flex items-end">
            <Image
              src={heroImg}
              alt={isAr ? service.titleAr : service.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: GRAD_HERO }} />
            <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.18)" }} />

            {/* Back link */}
            <div className="absolute top-28 left-6 md:left-14 z-20">
              <Link
                href={`/${locale}/planning`}
                className="inline-flex items-center gap-2 hover:text-accent transition-colors no-underline text-[11px] tracking-[0.2em] uppercase font-bold group"
                style={{ color: "rgba(245,241,232,0.55)" }}
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">
                  {isAr ? "→" : "←"}
                </span>
                {isAr ? "خدمات التخطيط" : "Planning Services"}
              </Link>
            </div>

            <div className="relative z-10 px-6 md:px-14 pb-16 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span
                    className="px-4 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold backdrop-blur-sm"
                    style={{
                      background: "rgba(201,161,91,0.15)",
                      border: "1px solid rgba(201,161,91,0.35)",
                      color: GOLD,
                    }}
                  >
                    {isAr ? "التخطيط" : "Planning"}
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold backdrop-blur-sm"
                    style={{
                      background: `rgba(201,161,91,0.9)`,
                      border: `1px solid ${GOLD}`,
                      color: "#050505",
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
                  style={{ fontSize: "clamp(15px, 1.8vw, 20px)", color: "rgba(245,241,232,0.52)" }}
                >
                  {isAr ? service.taglineAr : service.tagline}
                </p>
              </motion.div>
            </div>
          </section>

          {/* ── Intro ──────────────────────────────────────────────── */}
          <section className="px-6 md:px-14 py-20 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-px" style={{ background: GOLD }} />
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: GOLD }}>
                  {isAr ? "نبذة" : "Overview"}
                </span>
              </div>
              <p
                className="font-light leading-relaxed max-w-4xl"
                style={{ fontSize: "clamp(15px, 1.7vw, 19px)", color: "rgba(245,241,232,0.55)" }}
              >
                {isAr ? service.descriptionAr : service.description}
              </p>
            </motion.div>
          </section>

          {/* ── Service Blocks ──────────────────────────────────────── */}
          <section className="px-6 md:px-14 pb-24">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-14"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.65)" }}>
                    {isAr ? "ما نقدمه" : "Our Offering"}
                  </span>
                </div>
                <h2
                  className="font-serif font-light leading-tight"
                  style={{ fontSize: "clamp(32px, 5vw, 60px)", color: CREAM }}
                >
                  <em>{isAr ? "خدماتنا الشاملة" : "The complete service."}</em>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {service.blocks.map((block, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
                    className="rounded-2xl p-8 transition-colors duration-300"
                    style={{
                      background: "rgba(10,10,10,0.82)",
                      border: "1px solid rgba(201,161,91,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,161,91,0.22)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,161,91,0.08)";
                    }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span style={{ color: GOLD, fontSize: "18px" }}>{block.icon}</span>
                      <h3
                        className="font-serif font-light italic leading-tight"
                        style={{ fontSize: "clamp(16px, 2vw, 21px)", color: CREAM }}
                      >
                        {isAr ? block.titleAr : block.title}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {(isAr ? block.itemsAr : block.items).map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div
                            className="flex-shrink-0 mt-1.5 w-[5px] h-[5px] rounded-full"
                            style={{ background: "rgba(201,161,91,0.5)" }}
                          />
                          <span className="text-[13.5px] leading-snug" style={{ color: "rgba(245,241,232,0.58)" }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Approach + What's Included ─────────────────────────── */}
          <section
            className="px-6 md:px-14 pb-24 pt-20"
            style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">

              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-px" style={{ background: GOLD }} />
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: GOLD }}>
                    {isAr ? "نهجنا" : "Our Approach"}
                  </span>
                </div>

                <p
                  className="font-light leading-relaxed mb-10"
                  style={{ fontSize: "clamp(15px, 1.7vw, 18px)", color: "rgba(245,241,232,0.68)" }}
                >
                  {isAr ? service.introAr : service.intro}
                </p>

                {/* Occasions */}
                <div className="mb-10">
                  <p
                    className="text-[10px] tracking-[0.35em] uppercase font-bold mb-5"
                    style={{ color: "rgba(201,161,91,0.58)" }}
                  >
                    {isAr ? "المناسبات التي نغطيها" : "Occasions We Cover"}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {(isAr ? service.occasionsAr : service.occasions).map((occ) => (
                      <span
                        key={occ}
                        className="px-4 py-2 rounded-full text-[12px] transition-colors duration-300"
                        style={{
                          border: "1px solid rgba(245,241,232,0.1)",
                          color: "rgba(245,241,232,0.55)",
                        }}
                      >
                        {occ}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}#booking`}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
                      color: "#050505",
                      boxShadow: "0 8px 32px rgba(201,161,91,0.38)",
                    }}
                  >
                    {isAr ? "احجز استشارة" : "Book a consultation"}
                    <span>{isAr ? "←" : "→"}</span>
                  </Link>
                  <Link
                    href={`/${locale}/planning`}
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
                    {isAr ? "← جميع الخدمات" : "All planning services →"}
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
                        initial={{ opacity: 0, x: isAr ? 10 : -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.35 }}
                        className="flex items-start gap-3.5"
                      >
                        <div
                          className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{
                            background: "rgba(201,161,91,0.12)",
                            border: "1px solid rgba(201,161,91,0.28)",
                          }}
                        >
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <path d="M2 4.5L3.8 6.3L7 3" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[13.5px] leading-snug" style={{ color: "rgba(245,241,232,0.68)" }}>
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
                      className="text-[11px] tracking-[0.12em] leading-relaxed"
                      style={{ color: "rgba(245,241,232,0.28)" }}
                    >
                      {isAr
                        ? "يتواصل فريقنا معك لمناقشة احتياجاتك المحددة وبناء الباقة المثالية لمناسبتك."
                        : "Our team will be in touch to discuss your specific requirements and build the perfect package for your occasion."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── Process ───────────────────────────────────────────── */}
          <section
            className="px-6 md:px-14 py-20 md:py-28"
            style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}
          >
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-14 md:mb-20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                  <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                    {isAr ? "كيف نعمل" : "How We Work"}
                  </span>
                </div>
                <h2 className="font-serif font-light" style={{ fontSize: "clamp(28px, 4vw, 52px)", color: CREAM }}>
                  <em>
                    {isAr
                      ? <>من أول مكالمة إلى <span style={{ color: GOLD }}>آخر لحظة.</span></>
                      : <>From first call to <span style={{ fontStyle: "italic", color: GOLD }}>last moment.</span></>
                    }
                  </em>
                </h2>
              </motion.div>

              <div className="relative">
                {/* Connector line */}
                <div
                  className="hidden lg:block absolute top-8 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent 4%, rgba(201,161,91,0.18) 20%, rgba(201,161,91,0.18) 80%, transparent 96%)" }}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
                  {process.map((step, i) => (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: i * 0.1 }}
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative"
                        style={{ background: "rgba(10,10,10,0.9)", border: `1px solid rgba(201,161,91,0.22)` }}
                      >
                        <span
                          className="font-serif font-light"
                          style={{ fontSize: "22px", color: GOLD, fontStyle: "italic" }}
                        >
                          {step.num}
                        </span>
                      </div>
                      <h3
                        className="font-serif font-light mb-3"
                        style={{ fontSize: "clamp(16px, 1.6vw, 19px)", color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
                      >
                        {isAr ? step.tAr : step.t}
                      </h3>
                      <div className="w-6 h-px mb-3" style={{ background: "rgba(201,161,91,0.2)" }} />
                      <p style={{ fontSize: "13px", color: "rgba(245,241,232,0.48)", lineHeight: 1.75 }}>
                        {isAr ? step.dAr : step.d}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Gallery ───────────────────────────────────────────── */}
          <section className="px-6 md:px-14 pb-24">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.65)" }}>
                  {isAr ? "معرض الصور" : "Gallery"}
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {galleryImgs.map((img, i) => (
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

          {/* ── Related Planning Services ─────────────────────────── */}
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
                        {isAr ? "خدمات التخطيط الأخرى" : "Other Planning Services"}
                      </span>
                    </div>
                    <h2
                      className="font-serif font-light leading-tight"
                      style={{ fontSize: "clamp(26px, 4vw, 44px)", color: CREAM }}
                    >
                      <em>{isAr ? "استكشف المزيد" : "Explore more."}</em>
                    </h2>
                  </div>
                  <Link
                    href={`/${locale}/planning`}
                    className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase no-underline font-bold transition-colors duration-300"
                    style={{ color: "rgba(201,161,91,0.55)" }}
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
                        href={`/${locale}/planning/${rel.slug}`}
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
                        <div className="relative overflow-hidden rounded-t-2xl" style={{ height: "260px" }}>
                          <Image
                            src={rel.img}
                            alt={isAr ? rel.titleAr : rel.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                          <div
                            className="absolute inset-0 transition-colors duration-500"
                            style={{ background: "rgba(5,5,5,0.28)" }}
                          />
                          <div className="absolute top-5 left-5">
                            <span
                              className="px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold backdrop-blur-sm"
                              style={{
                                background: "rgba(201,161,91,0.15)",
                                border: "1px solid rgba(201,161,91,0.3)",
                                color: GOLD,
                              }}
                            >
                              {isAr ? rel.tagAr : rel.tag}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2" style={{ color: "rgba(201,161,91,0.5)" }}>
                            {isAr ? rel.eyebrowAr : rel.eyebrow}
                          </p>
                          <h3
                            className="font-serif font-light italic leading-tight transition-colors duration-300 group-hover:text-accent"
                            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: CREAM }}
                          >
                            {isAr ? rel.titleAr : rel.title}
                          </h3>
                          <p className="text-[12.5px] mt-2 line-clamp-2" style={{ color: "rgba(245,241,232,0.38)" }}>
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

          {/* ── CTA ───────────────────────────────────────────────── */}
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

            <div className="max-w-2xl mx-auto text-center relative z-10">
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
                  {isAr ? "احجز موعدك" : "Reserve Your Date"}
                </p>
                <h2
                  className="font-serif font-light leading-[0.92] tracking-tight mb-3"
                  style={{ fontSize: "clamp(36px, 6vw, 68px)", color: CREAM }}
                >
                  <em>
                    {isAr ? `احجز ${service.titleAr}` : `Reserve Your ${service.title}`}
                  </em>
                </h2>
                <p
                  className="text-[11px] tracking-[0.18em] uppercase font-bold mb-6"
                  style={{ color: "rgba(201,161,91,0.55)" }}
                >
                  {isAr ? "جدول استشارة خاصة" : "Schedule a Private Consultation"}
                </p>
                <p
                  className="font-light max-w-sm mx-auto mb-10 leading-relaxed"
                  style={{ fontSize: "13.5px", color: "rgba(245,241,232,0.34)" }}
                >
                  {isAr
                    ? "جميع الاستفسارات تُعالج بسرية تامة. يتواصل فريقنا خلال 24 ساعة."
                    : "All enquiries handled with complete discretion. Our team responds within 24 hours."}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href={`/${locale}#booking`}
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-[12px] tracking-[0.22em] uppercase font-bold no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
                      color: "#050505",
                      boxShadow: "0 12px 44px rgba(201,161,91,0.36)",
                    }}
                  >
                    {isAr ? "ابدأ استشارتك" : "Begin Your Consultation"}
                    <span>{isAr ? "←" : "→"}</span>
                  </Link>
                  <Link
                    href={`/${locale}/planning`}
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-bold no-underline transition-colors duration-300"
                    style={{ color: "rgba(245,241,232,0.36)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GOLD; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(245,241,232,0.36)"; }}
                  >
                    {isAr ? "← استكشف جميع الخدمات" : "Explore All Services →"}
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
