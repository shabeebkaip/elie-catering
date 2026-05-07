"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import CapsuleImage from "./CapsuleImage";
import CapsuleGraphic from "./CapsuleGraphic";

const IMAGES = [
  "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2070&auto=format&fit=crop",
];

const SLUGS = [
  "finger-food",
  "coffee-break",
  "live-cooking-stations",
  "bbq-section",
  "eastern-italian-cuisine",
  "seafood-sushi",
  "specialty-arabic-coffee",
];

export default function CateringOptions() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = useTranslations("catering");
  const items = t.raw("items") as { t: string; d: string }[];

  return (
    <section className="bg-violet py-32 relative overflow-hidden text-primary">

      {/* Background Decorative Capsules */}
      <CapsuleGraphic color="accent" className="w-[600px] h-[150px] bottom-[5%] -right-[15%] opacity-30 shadow-xl" angle="-rotate-[35deg]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary uppercase tracking-[0.15em] text-sm font-semibold mb-4 drop-shadow-sm"
          >
            {t("eyebrow")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl text-accent drop-shadow-md italic "
          >
            {t("headline")}
          </motion.h2>
        </div>

        {/* Items — flex wrap so incomplete last row stays centered */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-14">
          {items.map((option, index) => (
            <motion.div
              key={option.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              className="group flex flex-col items-center text-center w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
            >
              <Link href={`/${locale}/menu/${SLUGS[index]}`} className="contents">
                <div className="mb-6 w-[180px] sm:w-[200px] md:w-[220px] mx-auto relative transition-transform duration-500 group-hover:scale-105">
                  <CapsuleImage
                    src={IMAGES[index]}
                    alt={option.t}
                    widthClass="w-full"
                    heightClass="h-[280px] sm:h-[320px] md:h-[360px]"
                  />
                </div>

                <h3 className="font-serif text-xl md:text-2xl mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                  {option.t}
                </h3>
                <p className="text-primary/60 text-[12px] md:text-[13px] leading-relaxed max-w-[220px]">
                  {option.d}
                </p>
                <p className="mt-3 text-primary uppercase tracking-widest text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5">
                  {isAr ? "استكشف القائمة" : "Explore Menu"}{" "}
                  <span>{isAr ? "←" : "→"}</span>
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Link
            href={`/${locale}/menu`}
            className="inline-flex items-center gap-2 border border-primary/30 text-primary px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300"
          >
            {isAr ? "عرض القائمة الكاملة" : "View Full Menu"}{" "}
            <span>{isAr ? "←" : "→"}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
