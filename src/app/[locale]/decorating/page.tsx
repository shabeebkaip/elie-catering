"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { decoratingServices } from "@/lib/decorating";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DecoratingPage() {
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
            <div className="absolute top-[25%] left-[28%] w-[36px] h-[150px] border border-accent/6 rounded-full rotate-[-18deg]" />
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
                  {isAr ? "خدمات التزيين" : "Decorating Services"}
                </span>
                <div className="w-8 h-px bg-accent/60" />
              </div>

              <h1 className="font-serif font-light text-[clamp(52px,10vw,120px)] text-cream uppercase leading-[0.88] tracking-tight mb-6">
                {isAr ? (
                  "التزيين"
                ) : (
                  <>
                    Event
                    <br />
                    <em className="not-italic text-accent">Decorating.</em>
                  </>
                )}
              </h1>

              <p className="text-cream/50 text-[clamp(15px,1.6vw,18px)] max-w-xl font-light leading-relaxed mb-10">
                {isAr
                  ? "من تزيين الفعاليات المؤسسية الكبرى إلى الأعراس الفاخرة والاحتفالات الخاصة — كل مكان يتحول إلى تحفة فنية."
                  : "From grand corporate galas to luxury weddings and private celebrations — every venue transformed into a masterpiece."}
              </p>

              {/* Inline CTA */}
              <Link
                href={`/${locale}#booking`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-[0_8px_32px_rgba(187,138,60,0.4)]"
              >
                {isAr ? "احجز استشارة" : "Book a consultation"}
                <span>{isAr ? "←" : "→"}</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Three Decorating Cards ───────────────────────────── */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {decoratingServices.map((service, i) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Link
                    href={`/${locale}/decorating/${service.slug}`}
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

                      <div className="absolute top-6 left-6">
                        <span className="px-3.5 py-2 rounded-full text-[10px] tracking-[0.22em] uppercase font-bold bg-accent/20 border border-accent/35 text-accent backdrop-blur-sm">
                          {isAr ? service.tagAr : service.tag}
                        </span>
                      </div>

                      <div className="absolute top-5 right-8 w-5 h-11 rounded-full border border-white/15 rotate-[-12deg] group-hover:border-accent/30 transition-colors duration-400" />

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

                    <div className="h-[2px] w-0 group-hover:w-full bg-accent transition-all duration-700" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Elie Strip ────────────────────────────── */}
        <section className="px-6 pb-24 border-t border-white/8 pt-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-6 h-px bg-accent/50" />
                <span className="text-accent/70 text-[10px] tracking-[0.4em] uppercase font-bold">
                  {isAr ? "لماذا إيلي" : "Why Elie"}
                </span>
                <div className="w-6 h-px bg-accent/50" />
              </div>
              <h2 className="font-serif font-light text-[clamp(32px,5vw,60px)] text-cream leading-tight">
                <em>{isAr ? "التميز في كل تفصيلة." : "Excellence in every detail."}</em>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: "◇",
                  title: isAr ? "خبرة عميقة" : "Deep Expertise",
                  body: isAr
                    ? "فريقنا يجمع بين الموهبة الإبداعية والحرفة الدقيقة عبر مئات الفعاليات في المملكة."
                    : "Our team combines creative talent and precise craftsmanship across hundreds of events across the Kingdom.",
                },
                {
                  icon: "✦",
                  title: isAr ? "تراث خليجي" : "Khaleeji Heritage",
                  body: isAr
                    ? "نزيّن بعمق — دمج التقاليد السعودية والأنماط الخليجية والعناصر الثقافية مع الفخامة المعاصرة."
                    : "We decorate with depth — blending Saudi traditions, Khaleeji patterns and cultural elements with contemporary luxury.",
                },
                {
                  icon: "◉",
                  title: isAr ? "من الألف إلى الياء" : "End-to-End",
                  body: isAr
                    ? "من لوح المزاج الأول إلى التنظيف النهائي — نتولى كل خطوة حتى لا تكون لديك أي قلق."
                    : "From the first mood board to the final clean-up — we handle every step so you have nothing to worry about.",
                },
                {
                  icon: "◎",
                  title: isAr ? "دقة لا تُنسى" : "Lasting Impression",
                  body: isAr
                    ? "نصمم للحظات التي يتحدث عنها ضيوفك طويلاً بعد انتهاء الفعالية."
                    : "We design for the moments your guests talk about long after the event has ended.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="rounded-2xl p-6 border border-white/8 hover:border-accent/20 transition-colors duration-300"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                >
                  <span className="text-accent text-[20px] mb-4 block">{item.icon}</span>
                  <h3 className="font-serif text-cream text-[17px] font-light italic mb-3">{item.title}</h3>
                  <p className="text-[13px] text-cream/50 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mid-page CTA Banner ──────────────────────────────── */}
        <section className="relative mx-6 mb-20 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop"
              alt="Decorating"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
          </div>

          {/* Capsule accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] right-[12%] w-[40px] h-[180px] rounded-full border border-accent/18 rotate-[-18deg]" />
            <div className="absolute bottom-[-10%] right-[20%] w-[28px] h-[120px] rounded-full border border-cream/10 rotate-[-18deg]" />
          </div>

          <div className="relative z-10 px-10 py-14 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-4">
                {isAr ? "احجز تاريخك" : "Reserve Your Date"}
              </p>
              <h2 className="font-serif font-light text-[clamp(28px,4vw,52px)] text-cream leading-tight mb-4">
                <em>{isAr ? "تحدّث مع فريق التزيين لدينا." : "Talk to our decorating team."}</em>
              </h2>
              <p className="text-cream/55 text-[14px] max-w-md leading-relaxed mb-8">
                {isAr
                  ? "كل فعالية تبدأ بمحادثة. أخبرنا عن رؤيتك وسنحولها إلى واقع استثنائي."
                  : "Every extraordinary event begins with a conversation. Tell us your vision and we will make it reality."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${locale}#booking`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-[0_8px_32px_rgba(187,138,60,0.4)]"
                >
                  {isAr ? "ابدأ المحادثة" : "Start a conversation"}
                  <span>{isAr ? "←" : "→"}</span>
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-bold text-cream/70 border border-white/25 no-underline transition-all duration-300 hover:border-accent/50 hover:text-accent"
                >
                  {isAr ? "جميع الخدمات" : "All services"}
                  <span>{isAr ? "←" : "→"}</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
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
                  "زيّن فعاليتك"
                ) : (
                  <>
                    Decorate your
                    <br />
                    <em className="not-italic text-accent">Event.</em>
                  </>
                )}
              </h2>
              <p className="text-cream/40 text-[clamp(14px,1.5vw,16px)] max-w-sm mx-auto font-light leading-relaxed mb-10">
                {isAr
                  ? "أخبرنا عن مناسبتك وسيتواصل فريقنا خلال 24 ساعة لبدء التصميم."
                  : "Tell us about your event and our team will reach out within 24 hours to begin designing."}
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
