"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { services } from "@/lib/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── Data ──────────────────────────────────────────────────────── */

const PILLARS = [
  {
    id: "catering",
    num: "01",
    label: "Catering",
    labelAr: "التموين",
    eyebrow: "Food & Beverage",
    eyebrowAr: "الأغذية والمشروبات",
    h1: "Culinary",
    h2: "Excellence.",
    h1Ar: "التميز",
    h2Ar: "الطهوي.",
    desc: "From intimate private dinners to grand royal feasts — our culinary team crafts each dish with precision, artistry, and an unwavering commitment to excellence.",
    descAr: "من العشاء الخاص الحميم إلى المآدب الملكية الكبرى — يصيغ فريقنا الطهوي كل طبق بدقة وفن والتزام راسخ بالتميز.",
    img: "/images/services/luxury-catering.webp",
  },
  {
    id: "planning",
    num: "02",
    label: "Event Planning",
    labelAr: "تنظيم الفعاليات",
    eyebrow: "Full Coordination",
    eyebrowAr: "التنسيق الكامل",
    h1: "Flawless",
    h2: "Orchestration.",
    h1Ar: "تنسيق",
    h2Ar: "لا تشوبه شائبة.",
    desc: "From the first consultation to the final flourish — we plan, coordinate, and execute every detail so you can be fully present in the moment.",
    descAr: "من أول استشارة حتى اللمسة الأخيرة — نخطط وننسق وننفذ كل تفصيلة حتى تتمكن من التواجد الكامل في اللحظة.",
    img: "/images/services/wedding.webp",
  },
  {
    id: "decor",
    num: "03",
    label: "Décor & Design",
    labelAr: "الديكور والتصميم",
    eyebrow: "Ambiance & Aesthetics",
    eyebrowAr: "الأجواء والجماليات",
    h1: "Spaces",
    h2: "Transformed.",
    h1Ar: "مساحات",
    h2Ar: "مُحوَّلة.",
    desc: "We transform venues into immersive environments where every element — from florals to lighting to table settings — tells a story of elegance.",
    descAr: "نحول الأماكن إلى بيئات غامرة حيث كل عنصر — من الأزهار إلى الإضاءة إلى ترتيبات الطاولات — يحكي قصة من الرقي.",
    img: "/images/services/event-styling.webp",
  },
  {
    id: "addons",
    num: "04",
    label: "Premium Experiences",
    labelAr: "تجارب مميزة",
    eyebrow: "Elevate Every Moment",
    eyebrowAr: "ارفع كل لحظة",
    h1: "Beyond",
    h2: "the Ordinary.",
    h1Ar: "ما وراء",
    h2Ar: "العادي.",
    desc: "Exclusive curated services — photography, entertainment, valet, AV — that complete your event and make the extraordinary feel effortless.",
    descAr: "خدمات حصرية منسقة — التصوير والترفيه والفاليه والصوت والصورة — تُكمل فعاليتك وتجعل الاستثنائي يبدو عفويًا.",
    img: "/images/services/vip.webp",
  },
] as const;

const PROCESS = [
  {
    num: "01",
    en: "Discovery",
    ar: "الاكتشاف",
    enD: "We listen. Your vision, your story, your guests — every detail that matters.",
    arD: "نصغي. رؤيتك، قصتك، ضيوفك — كل تفصيلة تهم.",
  },
  {
    num: "02",
    en: "Concept",
    ar: "المفهوم",
    enD: "A bespoke concept emerges — mood, palette, cuisine, florals, atmosphere.",
    arD: "يظهر مفهوم مخصص — المزاج واللوحة اللونية والمأكولات والزهور والأجواء.",
  },
  {
    num: "03",
    en: "Coordination",
    ar: "التنسيق",
    enD: "Every vendor, timeline, and logistical detail — managed with precision.",
    arD: "كل مورد وجدول زمني وتفصيل لوجستي — مُدار بدقة.",
  },
  {
    num: "04",
    en: "Execution",
    ar: "التنفيذ",
    enD: "Our team on the ground, managing every moment flawlessly.",
    arD: "فريقنا في الميدان يدير كل لحظة بإتقان تام.",
  },
  {
    num: "05",
    en: "Celebration",
    ar: "الاحتفال",
    enD: "You arrive, you are present, you remember. We handle everything else.",
    arD: "تصل، تكون حاضرًا، تتذكر. نحن نتولى كل شيء آخر.",
  },
] as const;

const EXPERIENCES = [
  {
    label: "Luxury Wedding",
    labelAr: "حفل زفاف فاخر",
    sub: "An intimate ceremony crafted to endure a lifetime.",
    subAr: "حفل زواج حميم مصمم ليدوم مدى الحياة.",
    img: "/images/services/wedding.webp",
    href: "planning",
  },
  {
    label: "Private Gala",
    labelAr: "حفلة خاصة",
    sub: "Grand scale. Flawless execution. Every guest, an experience.",
    subAr: "نطاق واسع. تنفيذ مثالي. كل ضيف تجربة.",
    img: "/images/services/private-gathering.webp",
    href: "planning",
  },
  {
    label: "Corporate Reception",
    labelAr: "استقبال مؤسسي",
    sub: "Sophistication and precision — the hallmark of your brand.",
    subAr: "الرقي والدقة — علامة مميزة لعلامتك التجارية.",
    img: "/images/services/coorperate-events.webp",
    href: "planning",
  },
] as const;

/* ── Page ───────────────────────────────────────────────────────── */

export default function ServicesPage() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <>
      <Header />
      <main className="bg-primary min-h-screen overflow-x-hidden">

        {/* ══════════════════════════════════════════════════════
            HERO — cinematic full-screen
            ══════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Background */}
          <Image
            src="/images/elie-hero.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Gradient layers */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(9,6,26,0.55) 0%, rgba(9,6,26,0.35) 40%, rgba(9,6,26,0.92) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "rgba(9,6,26,0.25)" }} />

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="flex items-center justify-center gap-3 mb-10"
            >
              <div className="w-10 h-px" style={{ background: "rgba(187,138,60,0.6)" }} />
              <span className="text-[9.5px] tracking-[0.45em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.8)" }}>
                {isAr ? "ما نقدمه" : "What We Offer"}
              </span>
              <div className="w-10 h-px" style={{ background: "rgba(187,138,60,0.6)" }} />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="font-serif font-light text-cream leading-[0.88] tracking-tight mb-8"
              style={{ fontSize: "clamp(54px, 11vw, 132px)" }}
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

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-light mx-auto mb-12"
              style={{ fontSize: "clamp(15px, 1.6vw, 18px)", color: "rgba(245,242,234,0.5)", maxWidth: "460px", lineHeight: 1.8 }}
            >
              {isAr
                ? "من حفلات الزفاف الحميمة إلى الحفلات الملكية الكبرى — كل مناسبة مرفوعة إلى مستوى استثنائي."
                : "From intimate weddings to grand royal ceremonies — every occasion elevated to the extraordinary."}
            </motion.p>

            {/* Anchor pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {PILLARS.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="px-5 py-2.5 rounded-full text-[11px] tracking-[0.16em] uppercase font-bold border border-white/15 text-cream/50 hover:border-accent/50 hover:text-accent transition-all duration-300 no-underline"
                >
                  {isAr ? p.labelAr : p.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[9px] tracking-[0.38em] uppercase" style={{ color: "rgba(187,138,60,0.4)" }}>
              {isAr ? "اكتشف" : "Discover"}
            </span>
            <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(187,138,60,0.4), transparent)" }} />
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PILLAR SECTIONS — four alternating editorial splits
            ══════════════════════════════════════════════════════ */}
        {PILLARS.map((pillar, i) => {
          const isOdd = i % 2 === 1;
          const pillarServices = services.filter((s) => s.category === pillar.id);

          return (
            <section
              key={pillar.id}
              id={pillar.id}
              className="relative scroll-mt-24 border-t border-white/[0.06]"
            >
              <div className="flex flex-col lg:flex-row min-h-[88vh]">

                {/* ── Image column ── */}
                <div
                  className={`relative min-h-[52vh] lg:min-h-0 lg:w-[54%] overflow-hidden ${isOdd ? "lg:order-2" : "lg:order-1"}`}
                >
                  <Image
                    src={pillar.img}
                    alt={isAr ? pillar.labelAr : pillar.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 54vw"
                  />
                  {/* Gradient toward text column */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isOdd
                        ? "linear-gradient(to left, rgba(9,6,26,0.65) 0%, rgba(9,6,26,0.1) 55%, transparent 100%)"
                        : "linear-gradient(to right, rgba(9,6,26,0.65) 0%, rgba(9,6,26,0.1) 55%, transparent 100%)",
                    }}
                  />
                  {/* Bottom gradient for mobile */}
                  <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to top, rgba(9,6,26,0.9) 0%, transparent 60%)" }} />

                  {/* Large ghost number */}
                  <div className="absolute inset-0 flex items-end justify-start p-6 lg:p-10 pointer-events-none">
                    <span
                      className="font-serif font-light tabular-nums select-none leading-none"
                      style={{ fontSize: "clamp(120px, 18vw, 220px)", color: "rgba(187,138,60,0.08)", letterSpacing: "-0.05em", lineHeight: 1 }}
                    >
                      {pillar.num}
                    </span>
                  </div>
                </div>

                {/* ── Text column ── */}
                <div
                  className={`lg:w-[46%] flex flex-col justify-center px-8 md:px-12 xl:px-16 py-16 lg:py-24 ${isOdd ? "lg:order-1" : "lg:order-2"}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isOdd ? 24 : -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  >
                    {/* Eyebrow row */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-5 h-px" style={{ background: "rgba(187,138,60,0.55)" }} />
                      <span className="text-[9px] tracking-[0.42em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.65)" }}>
                        {isAr ? pillar.eyebrowAr : pillar.eyebrow}
                      </span>
                    </div>

                    {/* Category badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border" style={{ borderColor: "rgba(187,138,60,0.2)", background: "rgba(187,138,60,0.06)" }}>
                      <span className="text-[9px] tracking-[0.22em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.55)" }}>{pillar.num}</span>
                      <div className="w-px h-3" style={{ background: "rgba(187,138,60,0.2)" }} />
                      <span className="text-[9px] tracking-[0.22em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.55)" }}>
                        {isAr ? pillar.labelAr : pillar.label}
                      </span>
                    </div>

                    {/* Headline */}
                    <h2
                      className="font-serif font-light text-cream leading-[0.9] tracking-tight mb-5"
                      style={{ fontSize: "clamp(42px, 5vw, 76px)" }}
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

                    {/* Animated gold rule */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
                      className="mb-5"
                      style={{
                        transformOrigin: isAr ? "right" : "left",
                        width: "72px",
                        height: "1px",
                        background: "linear-gradient(90deg, rgba(187,138,60,0.8), rgba(187,138,60,0.15))",
                      }}
                    />

                    {/* Description */}
                    <p
                      className="font-light leading-relaxed mb-10"
                      style={{ fontSize: "clamp(13px, 1.35vw, 15.5px)", color: "rgba(245,242,234,0.48)", maxWidth: "380px" }}
                    >
                      {isAr ? pillar.descAr : pillar.desc}
                    </p>
                  </motion.div>

                  {/* Service list — editorial numbered */}
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    {pillarServices.map((svc, si) => (
                      <motion.div
                        key={svc.slug}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: si * 0.055, ease: [0.19, 1, 0.22, 1] }}
                      >
                        <Link
                          href={`/${locale}/services/${svc.slug}`}
                          className="group flex items-center justify-between py-[14px] no-underline transition-all duration-300"
                          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                        >
                          <div className="flex items-center gap-4">
                            {/* Index */}
                            <span
                              className="font-serif tabular-nums shrink-0 text-[11px]"
                              style={{ color: "rgba(187,138,60,0.28)", lineHeight: 1 }}
                            >
                              {String(si + 1).padStart(2, "0")}
                            </span>
                            <div>
                              {/* Tag */}
                              <span
                                className="block mb-0.5 text-[8px] tracking-[0.3em] uppercase font-bold"
                                style={{ color: "rgba(187,138,60,0.42)" }}
                              >
                                {isAr ? svc.tagAr : svc.tag}
                              </span>
                              {/* Title */}
                              <span
                                className="block text-[14.5px] leading-tight transition-colors duration-250 group-hover:text-accent"
                                style={{ color: "rgba(245,242,234,0.78)", fontFamily: "var(--font-serif, Georgia, serif)", fontStyle: isAr ? "normal" : "italic" }}
                              >
                                {isAr ? svc.titleAr : svc.title}
                              </span>
                            </div>
                          </div>
                          {/* Arrow */}
                          <span
                            className="shrink-0 text-[13px] transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                            style={{ color: "rgba(187,138,60,0.35)" }}
                          >
                            {isAr ? "←" : "→"}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </section>
          );
        })}

        {/* ══════════════════════════════════════════════════════
            PROCESS — 5-step horizontal timeline
            ══════════════════════════════════════════════════════ */}
        <section className="relative px-6 md:px-14 py-28 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Top hairline */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(187,138,60,0.2), transparent)" }} />

          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="text-center mb-20"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ background: "rgba(187,138,60,0.5)" }} />
                <span className="text-[9.5px] tracking-[0.42em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.7)" }}>
                  {isAr ? "كيف نعمل" : "How We Work"}
                </span>
                <div className="w-8 h-px" style={{ background: "rgba(187,138,60,0.5)" }} />
              </div>
              <h2 className="font-serif font-light text-cream leading-tight" style={{ fontSize: "clamp(36px, 6vw, 70px)" }}>
                {isAr ? (
                  <>من الرؤية <span style={{ color: "#c49a42" }}>إلى الكمال.</span></>
                ) : (
                  <>From Vision <em className="italic" style={{ color: "#c49a42" }}>to Perfection.</em></>
                )}
              </h2>
            </motion.div>

            {/* Steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-px">
              {/* Horizontal connecting line — desktop only */}
              <div
                className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(187,138,60,0.18) 20%, rgba(187,138,60,0.18) 80%, transparent)" }}
              />

              {PROCESS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                  className="relative flex flex-col items-center text-center px-5 py-8 md:py-0 border-b border-white/[0.05] md:border-0 last:border-0"
                >
                  {/* Circle */}
                  <div
                    className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-6 shrink-0"
                    style={{ background: "#09061a", border: "1px solid rgba(187,138,60,0.28)" }}
                  >
                    <span className="font-serif text-[13px] tabular-nums" style={{ color: "rgba(187,138,60,0.75)" }}>
                      {step.num}
                    </span>
                  </div>

                  <h3
                    className="font-serif font-light text-cream mb-3"
                    style={{ fontSize: "17px", fontStyle: isAr ? "normal" : "italic" }}
                  >
                    {isAr ? step.ar : step.en}
                  </h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "rgba(245,242,234,0.38)" }}>
                    {isAr ? step.arD : step.enD}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SIGNATURE EXPERIENCES — 3 cinematic panels
            ══════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Header */}
          <div className="px-6 md:px-14 pt-24 pb-14 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ background: "rgba(187,138,60,0.5)" }} />
                <span className="text-[9.5px] tracking-[0.42em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.7)" }}>
                  {isAr ? "تجارب مميزة" : "Signature Experiences"}
                </span>
                <div className="w-8 h-px" style={{ background: "rgba(187,138,60,0.5)" }} />
              </div>
              <h2 className="font-serif font-light text-cream leading-tight" style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}>
                {isAr ? (
                  <>لحظات تدوم <span style={{ color: "#c49a42" }}>للأبد.</span></>
                ) : (
                  <>Moments That <em className="italic" style={{ color: "#c49a42" }}>Endure.</em></>
                )}
              </h2>
            </motion.div>
          </div>

          {/* 3-panel grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.14 }}
                className="relative overflow-hidden group"
                style={{ minHeight: "58vh" }}
              >
                <Image
                  src={exp.img}
                  alt={isAr ? exp.labelAr : exp.label}
                  fill
                  className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlays */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(9,6,26,0.96) 0%, rgba(9,6,26,0.45) 45%, rgba(9,6,26,0.1) 100%)" }} />
                <div className="absolute inset-0 transition-colors duration-700 group-hover:bg-accent/[0.04]" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <p className="mb-3 font-bold text-[9px] tracking-[0.38em] uppercase" style={{ color: "rgba(187,138,60,0.65)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="font-serif font-light text-cream leading-tight mb-3"
                    style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontStyle: isAr ? "normal" : "italic" }}
                  >
                    {isAr ? exp.labelAr : exp.label}
                  </h3>
                  <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(245,242,234,0.48)" }}>
                    {isAr ? exp.subAr : exp.sub}
                  </p>
                  <Link
                    href={`/${locale}/${exp.href}`}
                    className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase font-bold no-underline transition-colors duration-300 hover:text-accent"
                    style={{ color: "rgba(187,138,60,0.58)" }}
                  >
                    <span>{isAr ? "اكتشف" : "Explore"}</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      {isAr ? "←" : "→"}
                    </span>
                  </Link>
                </div>

                {/* Vertical divider between panels */}
                {i < 2 && (
                  <div className="absolute top-0 right-0 w-px h-full hidden md:block" style={{ background: "rgba(255,255,255,0.05)" }} />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CTA — luxury closing section
            ══════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden px-6 md:px-14 py-32 md:py-40"
          style={{ background: "#09061a" }}
        >
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          />
          {/* Warm gold radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(187,138,60,0.07), transparent)" }} />
          {/* Corner ornaments */}
          <svg className="absolute top-8 left-8 opacity-20" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M0 16 L16 0 M0 0 L32 0 L32 16" stroke="#c49a42" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <svg className="absolute bottom-8 right-8 opacity-20" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M32 16 L16 32 M32 32 L0 32 L0 16" stroke="#c49a42" strokeWidth="1" strokeLinecap="round" />
          </svg>
          {/* Top hairline */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(187,138,60,0.4), transparent)" }} />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            >
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="w-10 h-px" style={{ background: "rgba(187,138,60,0.4)" }} />
                <span className="text-[9.5px] tracking-[0.42em] uppercase font-bold" style={{ color: "rgba(187,138,60,0.6)" }}>
                  {isAr ? "ابدأ الرحلة" : "Begin the journey"}
                </span>
                <div className="w-10 h-px" style={{ background: "rgba(187,138,60,0.4)" }} />
              </div>

              {/* Headline */}
              <h2
                className="font-serif font-light text-cream leading-[0.88] tracking-tight mb-8"
                style={{ fontSize: "clamp(48px, 9vw, 110px)" }}
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

              {/* Animated gold divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                className="mx-auto mb-8"
                style={{
                  width: "80px",
                  height: "1px",
                  transformOrigin: "center",
                  background: "linear-gradient(90deg, transparent, rgba(187,138,60,0.7), transparent)",
                }}
              />

              {/* Body */}
              <p
                className="font-light leading-relaxed mx-auto mb-12"
                style={{ fontSize: "clamp(14px, 1.45vw, 17px)", color: "rgba(245,242,234,0.42)", maxWidth: "460px" }}
              >
                {isAr
                  ? "أخبرنا عن رؤيتك — سنتواصل معك خلال 24 ساعة لنصنع معاً شيئاً استثنائياً."
                  : "Tell us about your vision — we will reach out within 24 hours to craft something extraordinary together."}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/${locale}#booking`}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-[11px] tracking-[0.22em] uppercase font-bold text-primary no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #c49a42 0%, #d8b05a 50%, #c49a42 100%)",
                    boxShadow: "0 12px 48px rgba(187,138,60,0.42)",
                  }}
                >
                  {isAr ? "ابدأ محادثة" : "Start a Conversation"}
                  <span className="opacity-70">{isAr ? "←" : "→"}</span>
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-bold no-underline transition-colors duration-300 hover:text-accent"
                  style={{ color: "rgba(245,242,234,0.38)" }}
                >
                  {isAr ? "تعرف علينا" : "Discover Our Story"}
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
