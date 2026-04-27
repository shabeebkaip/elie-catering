"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { planningServices } from "@/lib/planning";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PlanningPage() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <>
      <Header />
      <main className="bg-primary min-h-screen">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-40 pb-24 px-6">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] right-[-4%] w-[100px] h-[480px] bg-accent/8 rounded-full rotate-[-30deg]" />
            <div className="absolute top-[-2%] right-[9%] w-[50px] h-[240px] border border-accent/10 rounded-full rotate-[-30deg]" />
            <div className="absolute bottom-[-8%] left-[-3%] w-[80px] h-[380px] bg-cream/3 rounded-full rotate-[32deg]" />
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
                  {isAr ? "خدمات التخطيط" : "Planning Services"}
                </span>
                <div className="w-8 h-px bg-accent/60" />
              </div>

              <h1 className="font-serif font-light text-[clamp(52px,10vw,120px)] text-cream uppercase leading-[0.88] tracking-tight mb-6">
                {isAr ? (
                  "التخطيط"
                ) : (
                  <>
                    Event
                    <br />
                    <em className="not-italic text-accent">Planning.</em>
                  </>
                )}
              </h1>

              <p className="text-cream/50 text-[clamp(15px,1.6vw,18px)] max-w-xl font-light leading-relaxed">
                {isAr
                  ? "من تنظيم الفعاليات المؤسسية الكبرى إلى حفلات الزفاف الحميمة والاحتفالات الخاصة — نخطط لكل لحظة بعناية فائقة."
                  : "From grand corporate events to intimate weddings and private celebrations — every moment planned with meticulous care."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Three Planning Cards ─────────────────────────────── */}
        <section className="px-6 pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {planningServices.map((service, i) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                >
                  <Link
                    href={`/${locale}/planning/${service.slug}`}
                    className="group block no-underline rounded-t-full rounded-b-3xl overflow-hidden border border-white/8 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_28px_64px_rgba(0,0,0,0.55)] hover:-translate-y-3"
                    style={{ background: "rgba(255,255,255,0.025)" }}
                  >
                    {/* Capsule image */}
                    <div className="relative overflow-hidden rounded-t-full" style={{ height: "340px" }}>
                      <Image
                        src={service.img}
                        alt={isAr ? service.titleAr : service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} via-primary/20 to-transparent`} />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-colors duration-500" />

                      {/* Tag pill */}
                      <div className="absolute top-6 left-6">
                        <span className="px-3.5 py-2 rounded-full text-[10px] tracking-[0.22em] uppercase font-bold bg-accent/20 border border-accent/35 text-accent backdrop-blur-sm">
                          {isAr ? service.tagAr : service.tag}
                        </span>
                      </div>

                      {/* Capsule accent */}
                      <div className="absolute top-5 right-8 w-5 h-11 rounded-full border border-white/15 rotate-[-12deg] group-hover:border-accent/30 transition-colors duration-400" />

                      {/* Hover arrow */}
                      <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                        <span className="text-primary text-[14px] font-bold">{isAr ? "←" : "→"}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <p className="text-[10px] tracking-[0.38em] uppercase text-accent/60 font-bold mb-2.5">
                        {isAr ? service.eyebrowAr : service.eyebrow}
                      </p>
                      <h2 className="font-serif text-cream text-[clamp(24px,3vw,32px)] font-light italic leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                        {isAr ? service.titleAr : service.title}
                      </h2>
                      <p className="text-[13.5px] text-cream/50 leading-relaxed line-clamp-3 group-hover:text-cream/70 transition-colors duration-300 mb-6">
                        {isAr ? service.descriptionAr : service.description}
                      </p>

                      {/* Included preview */}
                      <ul className="space-y-2 mb-6">
                        {(isAr ? service.includedAr : service.included).slice(0, 4).map((item) => (
                          <li key={item} className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/45 flex-shrink-0 group-hover:bg-accent transition-colors duration-300" />
                            <span className="text-[12.5px] text-cream/50 group-hover:text-cream/70 transition-colors duration-300 leading-snug">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-accent/50 group-hover:text-accent transition-colors duration-300 font-bold">
                        <span>{isAr ? "استكشف الخدمة" : "Explore service"}</span>
                        <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">
                          {isAr ? "←" : "→"}
                        </span>
                      </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="h-[2px] w-0 group-hover:w-full bg-accent transition-all duration-700" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────── */}
        <section className="relative px-6 py-28 overflow-hidden border-t border-white/8">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-18%] right-[-5%] w-[70px] h-[320px] bg-accent/7 rounded-full rotate-[-28deg]" />
            <div className="absolute bottom-[-12%] left-[-3%] w-[55px] h-[260px] bg-cream/3 rounded-full rotate-[32deg]" />
          </div>
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
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
                    Plan your
                    <br />
                    <em className="not-italic text-accent">Event.</em>
                  </>
                )}
              </h2>
              <p className="text-cream/40 text-[clamp(14px,1.5vw,16px)] max-w-sm mx-auto font-light leading-relaxed mb-10">
                {isAr
                  ? "أخبرنا عن رؤيتك وسنبدأ في تصميم شيء استثنائي معاً."
                  : "Tell us about your vision and we will begin designing something extraordinary together."}
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
