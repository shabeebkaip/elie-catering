"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { services } from "@/lib/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SECTIONS = [
  {
    id: "catering",
    label: "Catering",
    labelAr: "التموين",
    eyebrow: "Food & Beverage",
    eyebrowAr: "الأغذية والمشروبات",
    desc: "World-class culinary experiences crafted for every occasion and scale.",
    descAr: "تجارب طهوية عالمية المستوى مصممة لكل مناسبة وحجم.",
  },
  {
    id: "planning",
    label: "Event Planning",
    labelAr: "تنظيم الفعاليات",
    eyebrow: "Full Coordination",
    eyebrowAr: "التنسيق الكامل",
    desc: "End-to-end planning that turns your vision into a flawless reality.",
    descAr: "تخطيط شامل يحول رؤيتك إلى واقع بلا عيوب.",
  },
  {
    id: "decor",
    label: "Décor & Design",
    labelAr: "الديكور والتصميم",
    eyebrow: "Ambiance & Aesthetics",
    eyebrowAr: "الأجواء والجماليات",
    desc: "Spaces transformed into immersive, breathtaking environments.",
    descAr: "مساحات تتحول إلى بيئات غامرة تأخذ الأنفاس.",
  },
  {
    id: "addons",
    label: "Premium Add-ons",
    labelAr: "الإضافات المميزة",
    eyebrow: "Elevate Every Moment",
    eyebrowAr: "ارفع كل لحظة",
    desc: "Exclusive services that complete your event with artistry and precision.",
    descAr: "خدمات حصرية تُكمل فعاليتك بالفن والدقة.",
  },
] as const;

function ServiceCard({ service, locale, isAr, index }: {
  service: (typeof services)[number];
  locale: string;
  isAr: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.19, 1, 0.22, 1] }}
    >
      <Link
        href={`/${locale}/services/${service.slug}`}
        className="group block no-underline rounded-t-full rounded-b-3xl overflow-hidden border border-white/8 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
        style={{ background: "rgba(255,255,255,0.025)" }}
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-full" style={{ height: "300px" }}>
          <Image
            src={service.img}
            alt={isAr ? service.titleAr : service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-colors duration-500" />

          <div className="absolute bottom-5 right-5 w-9 h-9 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
            <span className="text-primary text-[13px] font-bold">{isAr ? "←" : "→"}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          {/* Tag badge — moved here so arch overflow doesn't clip it */}
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-[9px] tracking-[0.22em] uppercase font-bold bg-accent/15 border border-accent/30 text-accent">
            {isAr ? service.tagAr : service.tag}
          </span>
          <p className="text-[10px] tracking-[0.35em] uppercase text-accent/60 font-bold mb-2">
            {isAr ? service.eyebrowAr : service.eyebrow}
          </p>
          <h3 className="font-serif text-cream text-[clamp(20px,2.2vw,26px)] font-light italic leading-tight mb-3 group-hover:text-accent transition-colors duration-300">
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

        <div className="h-[2px] w-0 group-hover:w-full bg-accent transition-all duration-700 flex-shrink-0" />
      </Link>
    </motion.div>
  );
}

export default function ServicesPage() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <>
      <Header />
      <main className="bg-primary min-h-screen">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-40 pb-20 px-6 md:px-14">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] right-[-4%] w-[120px] h-[560px] bg-accent/8 rounded-full rotate-[-30deg]" />
            <div className="absolute top-[-2%] right-[8%] w-[60px] h-[280px] border border-accent/10 rounded-full rotate-[-30deg]" />
            <div className="absolute bottom-[-8%] left-[-4%] w-[100px] h-[440px] bg-cream/3 rounded-full rotate-[32deg]" />
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
                {isAr ? "خدماتنا" : (
                  <>Our<br /><em className="not-italic text-accent">Services.</em></>
                )}
              </h1>

              <p className="text-cream/50 text-[clamp(15px,1.6vw,18px)] max-w-xl font-light leading-relaxed mb-12">
                {isAr
                  ? "من حفلات الزفاف الحميمة إلى الحفلات الكبرى — كل مناسبة مرفوعة إلى مستوى استثنائي."
                  : "From intimate weddings to grand galas — every occasion elevated to the extraordinary."}
              </p>

              {/* Jump-to anchors */}
              <div className="flex flex-wrap gap-3">
                {SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="px-5 py-2.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-bold border border-white/15 text-cream/55 hover:border-accent/50 hover:text-accent transition-all duration-300 no-underline"
                  >
                    {isAr ? sec.labelAr : sec.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Category Sections ──────────────────────────────── */}
        {SECTIONS.map((sec, si) => {
          const sectionServices = services.filter((s) => s.category === sec.id);
          return (
            <section
              key={sec.id}
              id={sec.id}
              className="px-6 md:px-14 pb-24 scroll-mt-24"
            >
              <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-16 pb-10 border-t border-white/8"
                >
                  <div>
                    <p className="text-accent text-[10px] tracking-[0.45em] uppercase font-bold mb-3">
                      {isAr ? sec.eyebrowAr : sec.eyebrow}
                    </p>
                    <h2 className="font-serif font-light text-[clamp(36px,5vw,64px)] text-cream italic leading-none">
                      {isAr ? sec.labelAr : sec.label}
                    </h2>
                  </div>
                  <p className="text-cream/40 text-[14px] leading-relaxed max-w-xs">
                    {isAr ? sec.descAr : sec.desc}
                  </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {sectionServices.map((service, i) => (
                    <ServiceCard
                      key={service.slug}
                      service={service}
                      locale={locale}
                      isAr={isAr}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

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
                {isAr ? "احجز فعاليتك" : (
                  <>Book your<br /><em className="not-italic text-accent">Event.</em></>
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
