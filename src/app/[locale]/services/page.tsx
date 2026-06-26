"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GOLD  = "#C9A15B";
const CREAM = "#F5F1E8";
// Strong gradient — bottom 80% darkened so text is always legible
const GRAD_CARD = "linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.88) 30%, rgba(5,5,5,0.5) 58%, rgba(5,5,5,0.1) 82%, transparent 100%)";

const BENTO = [
  {
    id: "catering",
    num: "01",
    eyebrow: "Food & Beverage",
    eyebrowAr: "الأغذية والمشروبات",
    title: "Catering",
    titleAr: "التموين",
    desc: "World-class culinary artistry — from intimate private dinners to grand royal banquets.",
    descAr: "إبداع طهوي عالمي — من العشاء الخاص الحميم إلى المآدب الملكية الكبرى.",
    img: "/images/services/luxury-catering.webp",
    href: "services/full-service-catering",
    span: "lg:col-span-7",
    large: true,
  },
  {
    id: "planning",
    num: "02",
    eyebrow: "Full Coordination",
    eyebrowAr: "التنسيق الكامل",
    title: "Event Planning",
    titleAr: "تنظيم الفعاليات",
    desc: "From concept to final curtain — every detail orchestrated so you can be present.",
    descAr: "من المفهوم حتى اللحظة الأخيرة — كل تفصيلة منسقة لتكون حاضرًا بالكامل.",
    img: "/images/services/wedding.webp",
    href: "planning",
    span: "lg:col-span-5",
    large: true,
  },
  {
    id: "decor",
    num: "03",
    eyebrow: "Ambiance & Aesthetics",
    eyebrowAr: "الأجواء والجماليات",
    title: "Décor & Design",
    titleAr: "الديكور والتصميم",
    desc: "Every venue transformed — florals, lighting, and staging in perfect harmony.",
    descAr: "كل مكان يتحول — الأزهار والإضاءة والإخراج في تناغم مثالي.",
    img: "/images/services/event-styling.webp",
    href: "decorating",
    span: "lg:col-span-5",
    large: false,
  },
  {
    id: "addons",
    num: "04",
    eyebrow: "Elevate Every Moment",
    eyebrowAr: "ارفع كل لحظة",
    title: "Premium Add-ons",
    titleAr: "الإضافات المميزة",
    desc: "Photography, entertainment, and valet — the finishing details that define perfection.",
    descAr: "التصوير والترفيه والفاليه — التفاصيل الأخيرة التي تحدد الكمال.",
    img: "/images/services/vip.webp",
    href: "services/professional-photography",
    span: "lg:col-span-7",
    large: false,
  },
] as const;

const WHY = [
  {
    title: "Bespoke Planning",
    titleAr: "التخطيط المخصص",
    desc: "Every event designed from a blank canvas — never templated, always singular.",
    descAr: "كل فعالية مُصممة من الصفر — لا قوالب جاهزة، دائماً فريدة.",
  },
  {
    title: "Culinary Excellence",
    titleAr: "التميز الطهوي",
    desc: "Seasonal menus crafted with precision and artistry, for any scale of occasion.",
    descAr: "قوائم موسمية تُصاغ بدقة وفن، لأي حجم من المناسبات.",
  },
  {
    title: "Luxury Execution",
    titleAr: "التنفيذ الفاخر",
    desc: "White-glove service from the first conversation to the final flourish.",
    descAr: "خدمة بالقفاز الأبيض من أول محادثة حتى اللمسة الأخيرة.",
  },
  {
    title: "Saudi Expertise",
    titleAr: "الخبرة السعودية",
    desc: "Fourteen years across the Kingdom — the culture, the clients, the craft.",
    descAr: "أربعة عشر عامًا في أرجاء المملكة — الثقافة والعملاء والحرفة.",
  },
] as const;

const EXPERIENCES = [
  {
    title: "Luxury Weddings",
    titleAr: "حفلات الزفاف الفاخرة",
    sub: "From the zaffa to the last dance — crafted with love and precision.",
    subAr: "من الزفة إلى آخر رقصة — مُصممة بحب ودقة.",
    img: "/images/services/wedding.webp",
    href: "planning/wedding-planning",
  },
  {
    title: "Corporate Events",
    titleAr: "الفعاليات المؤسسية",
    sub: "Conferences, product launches, and galas that carry your brand's prestige.",
    subAr: "مؤتمرات وإطلاق منتجات وحفلات تحمل مكانة علامتك التجارية.",
    img: "/images/services/coorperate-events.webp",
    href: "planning/corporate-events",
  },
  {
    title: "Private Gatherings",
    titleAr: "التجمعات الخاصة",
    sub: "Intimate celebrations where every guest feels like the only guest.",
    subAr: "احتفالات حميمة يشعر فيها كل ضيف بأنه الضيف الوحيد.",
    img: "/images/services/private-gathering.webp",
    href: "planning/event-planning",
  },
] as const;

export default function ServicesPage() {
  const locale = useLocale();
  const isAr  = locale === "ar";

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

        <main className="overflow-x-hidden" style={{ background: "transparent" }}>

          {/* ══ 1. HERO ══════════════════════════════════════════════ */}
          <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
            <div className="absolute inset-0">
              <Image src="/images/elie-hero.webp" alt="" fill className="object-cover" priority />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.28) 42%, rgba(5,5,5,0.95) 100%)",
                }}
              />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto pt-28">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center gap-3 mb-10"
              >
                <div className="w-9 h-px" style={{ background: "rgba(201,161,91,0.55)" }} />
                <span className="text-[9px] tracking-[0.45em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.75)" }}>
                  {isAr ? "ما نقدمه" : "What We Offer"}
                </span>
                <div className="w-9 h-px" style={{ background: "rgba(201,161,91,0.55)" }} />
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.05, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="font-serif font-light leading-[0.86] tracking-tight mb-8"
                style={{ fontSize: "clamp(54px, 11.5vw, 136px)", color: CREAM }}
              >
                {isAr ? (
                  <>
                    <span className="block">كل تفصيلة.</span>
                    <span className="block" style={{ color: GOLD, fontSize: "1.06em" }}>منسقة</span>
                    <span className="block">بإتقان.</span>
                  </>
                ) : (
                  <>
                    <span className="block uppercase">Every Detail.</span>
                    <span className="block italic" style={{ color: GOLD, fontSize: "1.06em" }}>Perfectly</span>
                    <span className="block uppercase">Orchestrated.</span>
                  </>
                )}
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.32 }}
                className="font-light mx-auto mb-10"
                style={{
                  fontSize: "clamp(14px, 1.5vw, 17px)",
                  color: "rgba(245,241,232,0.46)",
                  maxWidth: "400px",
                  lineHeight: 1.85,
                }}
              >
                {isAr
                  ? "تموين فاخر وتخطيط استثنائي — من الرياض إلى كل أرجاء المملكة."
                  : "Luxury catering and event planning — from Riyadh to every corner of the Kingdom."}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.48 }}
                className="mb-14"
              >
                <Link
                  href={`/${locale}#booking`}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-[11px] tracking-[0.24em] uppercase font-bold no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
                    color: "#050505",
                    boxShadow: "0 12px 48px rgba(201,161,91,0.38)",
                  }}
                >
                  {isAr ? "احجز استشارة" : "Book a Consultation"}
                  <span className="opacity-60">{isAr ? "←" : "→"}</span>
                </Link>
              </motion.div>

              {/* Service quick index — answers "what does Elie offer?" in the hero */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.65 }}
                className="flex items-center justify-center gap-3 flex-wrap"
              >
                {(isAr
                  ? ["التموين", "تنظيم الفعاليات", "الديكور والتصميم", "الإضافات المميزة"]
                  : ["Catering", "Event Planning", "Décor & Design", "Premium Add-ons"]
                ).map((s, i, arr) => (
                  <span key={s} className="flex items-center gap-3">
                    <span
                      className="text-[9.5px] tracking-[0.22em] uppercase"
                      style={{ color: "rgba(245,241,232,0.38)" }}
                    >
                      {s}
                    </span>
                    {i < arr.length - 1 && (
                      <span style={{ color: "rgba(201,161,91,0.3)" }}>·</span>
                    )}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-9 left-1/2 -translate-x-1/2">
              <div
                className="w-px h-10"
                style={{ background: "linear-gradient(to bottom, rgba(201,161,91,0.35), transparent)" }}
              />
            </div>
          </section>

          {/* ══ 2. BENTO SERVICE GRID ════════════════════════════════ */}
          <section className="px-4 md:px-7 xl:px-10 pt-7 pb-10">
            <div className="max-w-[1480px] mx-auto">

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-5"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-7 h-px" style={{ background: "rgba(201,161,91,0.38)" }} />
                  <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.58)" }}>
                    {isAr ? "خدماتنا" : "Our Services"}
                  </span>
                  <div className="w-7 h-px" style={{ background: "rgba(201,161,91,0.38)" }} />
                </div>
                <h2
                  className="font-serif font-light"
                  style={{ fontSize: "clamp(24px, 3vw, 38px)", color: CREAM }}
                >
                  {isAr
                    ? <>مصممة <span style={{ color: GOLD }}>للاستثنائيين.</span></>
                    : <>Crafted for the <em className="italic" style={{ color: GOLD }}>extraordinary.</em></>}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
                {BENTO.map((card, i) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: i * 0.07 }}
                    className={card.span}
                  >
                    <Link
                      href={`/${locale}/${card.href}`}
                      className="group relative flex overflow-hidden rounded-2xl no-underline"
                      style={{
                        height: card.large ? "clamp(420px, 54vh, 560px)" : "clamp(340px, 44vh, 460px)",
                        outline: "1px solid rgba(201,161,91,0.12)",
                      }}
                    >
                      <Image
                        src={card.img}
                        alt={isAr ? card.titleAr : card.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 58vw"
                      />

                      {/* Strong gradient — text legible without hover */}
                      <div className="absolute inset-0" style={{ background: GRAD_CARD }} />

                      {/* Gold border on hover */}
                      <div className="absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 pointer-events-none group-hover:border-[rgba(201,161,91,0.3)]" />

                      {/* Content: number at top, title+desc+cta at bottom */}
                      <div className="relative z-10 flex flex-col justify-between p-7 md:p-9 w-full h-full">

                        {/* Top-left: number · eyebrow */}
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[8px] tracking-[0.42em] uppercase font-bold"
                            style={{ color: "rgba(201,161,91,0.55)" }}
                          >
                            {card.num}
                          </span>
                          <span style={{ color: "rgba(201,161,91,0.25)" }}>·</span>
                          <span
                            className="text-[8px] tracking-[0.32em] uppercase font-bold"
                            style={{ color: "rgba(201,161,91,0.4)" }}
                          >
                            {isAr ? card.eyebrowAr : card.eyebrow}
                          </span>
                        </div>

                        {/* Bottom: service name + desc + explore */}
                        <div>
                          <h3
                            className="font-serif font-light leading-[0.88] mb-4"
                            style={{
                              fontSize: card.large ? "clamp(40px, 5vw, 64px)" : "clamp(32px, 3.8vw, 50px)",
                              color: CREAM,
                              fontStyle: isAr ? "normal" : "italic",
                            }}
                          >
                            {isAr ? card.titleAr : card.title}
                          </h3>

                          <p
                            className="leading-relaxed mb-5"
                            style={{ fontSize: "13.5px", color: "rgba(245,241,232,0.62)", maxWidth: "300px" }}
                          >
                            {isAr ? card.descAr : card.desc}
                          </p>

                          {/* Always visible CTA — not hover-only */}
                          <span
                            className="inline-flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase font-bold transition-opacity duration-300 group-hover:opacity-100"
                            style={{ color: "rgba(201,161,91,0.72)" }}
                          >
                            {isAr ? "استكشف الخدمة ←" : "Explore Service →"}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ 3. WHY CHOOSE ELIE ═══════════════════════════════════ */}
          <section className="px-4 md:px-7 xl:px-10 py-20 md:py-28">
            <div className="max-w-[1480px] mx-auto">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">

                {/* Left: section heading */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="lg:col-span-4 mb-12 lg:mb-0 lg:sticky lg:top-28"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                    <span
                      className="text-[9px] tracking-[0.44em] uppercase font-bold"
                      style={{ color: "rgba(201,161,91,0.6)" }}
                    >
                      {isAr ? "لماذا إيلي" : "Why Elie"}
                    </span>
                  </div>
                  <h2
                    className="font-serif font-light"
                    style={{ fontSize: "clamp(36px, 5vw, 62px)", color: CREAM }}
                  >
                    {isAr ? (
                      <>
                        لماذا يختار<br />
                        عملاؤنا{" "}
                        <span style={{ color: GOLD }}>إيلي.</span>
                      </>
                    ) : (
                      <>
                        Why clients<br />
                        choose{" "}
                        <em className="italic" style={{ color: GOLD }}>Elie.</em>
                      </>
                    )}
                  </h2>
                </motion.div>

                {/* Right: 2×2 grid of reasons */}
                <div
                  className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px"
                  style={{ background: "rgba(201,161,91,0.07)" }}
                >
                  {WHY.map((w, i) => (
                    <motion.div
                      key={w.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      className="p-8 md:p-10"
                      style={{ background: "rgba(10,10,10,0.9)" }}
                    >
                      <h3
                        className="font-serif font-light mb-3"
                        style={{
                          fontSize: "clamp(18px, 1.8vw, 22px)",
                          color: CREAM,
                          fontStyle: isAr ? "normal" : "italic",
                        }}
                      >
                        {isAr ? w.titleAr : w.title}
                      </h3>
                      <div className="w-8 h-px mb-4" style={{ background: "rgba(201,161,91,0.25)" }} />
                      <p style={{ fontSize: "14px", color: "rgba(245,241,232,0.52)", lineHeight: 1.75 }}>
                        {isAr ? w.descAr : w.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══ 4. SIGNATURE EXPERIENCES ═════════════════════════════ */}
          <section className="px-4 md:px-7 xl:px-10 pb-20 md:pb-28">
            <div className="max-w-[1480px] mx-auto">

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-8 md:mb-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                  <span
                    className="text-[9px] tracking-[0.44em] uppercase font-bold"
                    style={{ color: "rgba(201,161,91,0.6)" }}
                  >
                    {isAr ? "الفعاليات المميزة" : "Signature Experiences"}
                  </span>
                </div>
                <h2
                  className="font-serif font-light"
                  style={{ fontSize: "clamp(30px, 4.5vw, 56px)", color: CREAM }}
                >
                  {isAr
                    ? <>لحظات تدوم <span style={{ color: GOLD }}>للأبد.</span></>
                    : <>Moments that <em className="italic" style={{ color: GOLD }}>endure.</em></>}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {EXPERIENCES.map((exp, i) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: i * 0.1 }}
                  >
                    <Link
                      href={`/${locale}/${exp.href}`}
                      className="group relative flex overflow-hidden rounded-2xl no-underline"
                      style={{
                        height: "clamp(380px, 52vh, 540px)",
                        outline: "1px solid rgba(201,161,91,0.08)",
                      }}
                    >
                      <Image
                        src={exp.img}
                        alt={isAr ? exp.titleAr : exp.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0" style={{ background: GRAD_CARD }} />
                      <div className="absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 pointer-events-none group-hover:border-[rgba(201,161,91,0.25)]" />

                      <div className="relative z-10 flex flex-col justify-between p-7 md:p-8 w-full h-full">

                        {/* Index */}
                        <p
                          className="text-[9px] tracking-[0.4em] uppercase font-bold"
                          style={{ color: "rgba(201,161,91,0.5)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </p>

                        {/* Content */}
                        <div>
                          <h3
                            className="font-serif font-light leading-tight mb-3"
                            style={{
                              fontSize: "clamp(26px, 2.8vw, 36px)",
                              color: CREAM,
                              fontStyle: isAr ? "normal" : "italic",
                            }}
                          >
                            {isAr ? exp.titleAr : exp.title}
                          </h3>
                          <p
                            className="leading-relaxed mb-5"
                            style={{ fontSize: "13.5px", color: "rgba(245,241,232,0.58)" }}
                          >
                            {isAr ? exp.subAr : exp.sub}
                          </p>
                          <span
                            className="inline-flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase font-bold"
                            style={{ color: "rgba(201,161,91,0.72)" }}
                          >
                            {isAr ? "اكتشف المزيد ←" : "Explore →"}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ 5. CONSULTATION CTA ══════════════════════════════════ */}
          <section
            className="relative px-6 md:px-14 py-28 md:py-40 overflow-hidden"
            style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}
          >
            <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.72)" }} />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(201,161,91,0.06), transparent)" }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(201,161,91,0.35), transparent)" }}
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center justify-center gap-3 mb-10">
                  <div className="w-9 h-px" style={{ background: "rgba(201,161,91,0.32)" }} />
                  <span
                    className="text-[9px] tracking-[0.44em] uppercase font-bold"
                    style={{ color: "rgba(201,161,91,0.52)" }}
                  >
                    {isAr ? "ابدأ الرحلة" : "Begin the journey"}
                  </span>
                  <div className="w-9 h-px" style={{ background: "rgba(201,161,91,0.32)" }} />
                </div>

                <h2
                  className="font-serif font-light leading-[0.88] tracking-tight mb-7"
                  style={{ fontSize: "clamp(48px, 9vw, 110px)", color: CREAM }}
                >
                  {isAr ? (
                    <>
                      <span className="block">مناسبتك</span>
                      <span className="block" style={{ color: GOLD, fontSize: "1.1em" }}>القادمة</span>
                      <span className="block">تبدأ هنا.</span>
                    </>
                  ) : (
                    <>
                      <span className="block">Your Next</span>
                      <span className="block italic" style={{ color: GOLD, fontSize: "1.1em" }}>Celebration</span>
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
                    width: "68px",
                    height: "1px",
                    transformOrigin: "center",
                    background: "linear-gradient(90deg, transparent, rgba(201,161,91,0.6), transparent)",
                  }}
                />

                <p
                  className="font-light leading-relaxed mx-auto mb-12"
                  style={{
                    fontSize: "clamp(13.5px, 1.4vw, 16px)",
                    color: "rgba(245,241,232,0.38)",
                    maxWidth: "400px",
                  }}
                >
                  {isAr
                    ? "أخبرنا عن رؤيتك — سنتواصل معك خلال 24 ساعة لنصنع معاً شيئاً استثنائياً."
                    : "Tell us about your vision — we will reach out within 24 hours to craft something extraordinary."}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href={`/${locale}#booking`}
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-[11px] tracking-[0.24em] uppercase font-bold no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
                      color: "#050505",
                      boxShadow: "0 12px 44px rgba(201,161,91,0.36)",
                    }}
                  >
                    {isAr ? "احجز استشارة" : "Book a Consultation"}
                    <span className="opacity-60">{isAr ? "←" : "→"}</span>
                  </Link>
                  <Link
                    href={`/${locale}/about`}
                    className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.2em] uppercase font-bold no-underline transition-colors duration-300 hover:text-[#C9A15B]"
                    style={{ color: "rgba(245,241,232,0.26)" }}
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
      </div>
    </>
  );
}
