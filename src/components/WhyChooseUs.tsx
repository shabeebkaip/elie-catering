"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const expertiseRows = [
  {
    t: "Unparalleled expertise",
    d: "With years of experience, Elie Catering has earned a reputation for excellence in event management and catering. Our seasoned professionals are committed to bringing your vision to life with creativity, precision and professionalism.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Luxury and elegance",
    d: "We ensure luxury in every detail, from concept to presentation, creating sophisticated and elegant experiences that leave a lasting impression.",
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Customized solutions",
    d: "Every event is built from a blank page. Allergens, stories, the wine your grandfather loved — a menu made once, exactly for you.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
  {
    t: "Culinary excellence",
    d: "We cook from a pantry built each week at market, guided by the season and the chef's notebook. No dish is ever served twice in quite the same way.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
  },
  {
    t: "Seamless execution",
    d: "One producer. One timeline. One standard. The seams you usually see between vendors simply disappear.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Commitment to quality",
    d: "Quality is not a claim — it is the list of names of the farmers we buy from, the suppliers we've kept for a decade, and the people we trained ourselves.",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
  },
];

const whyCards = [
  { t: "A single point of contact", d: "One producer from first call to last candle. No vendor seams." },
  { t: "In-house craftspeople", d: "Chefs, florists, service — trained under one roof, to one standard." },
  { t: "Fourteen years of memory", d: "Institutional knowledge you can only build by doing this for a long time." },
];

export default function WhyChooseUs() {
  return (
    <div id="why-us" className="overflow-hidden">
      {/* Marble intro */}
      <section className="section-padding bg-gradient-to-br from-[#F3F0EB] to-[#ebe6db] relative text-center">
        {/* Capsule outline accents */}
        <div className="hidden md:block absolute top-20 right-16 w-30 h-70 rounded-full border border-primary/15 rotate-18" />
        <div className="hidden md:block absolute top-50 right-44 w-20 h-50 rounded-full border border-accent/25 rotate-18" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-sans font-extrabold tracking-[-0.04em] leading-[0.9] uppercase text-accent mx-auto max-w-4xl text-[clamp(48px,12vw,110px)]"
        >
          Why<br className="md:hidden" /> Choose Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="text-base md:text-[17px] leading-relaxed text-body max-w-2xl mx-auto mt-10 mb-16 md:mb-20"
        >
          Choosing Elie Catering and Event Planning means selecting a partner
          who understands the nuances of crafting unforgettable events. Here
          is why clients across the region choose us.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {whyCards.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-[32px] p-8 md:p-10 text-left shadow-sm border border-ink/10 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-accent flex items-center justify-center font-serif italic text-xl mb-6">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-2xl text-primary mb-3 font-normal tracking-tight">
                {v.t}
              </h3>
              <p className="text-sm leading-relaxed text-body m-0">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Alternating expertise rows */}
      <section>
        {expertiseRows.map((f, i) => {
          const imgLeft = i % 2 === 0;
          return (
            <motion.div
              key={f.t}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 min-h-[450px] md:min-h-[500px]"
            >
              {/* Image side */}
              <div className={`relative min-h-[300px] md:min-h-full overflow-hidden ${imgLeft ? "md:order-1" : "md:order-2"}`}>
                <Image src={f.img} alt={f.t} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>

              {/* Text side */}
              <div className={`relative overflow-hidden flex flex-col justify-center p-8 md:p-16 lg:p-20 ${
                imgLeft ? "md:order-2 bg-primary text-cream" : "md:order-1 bg-cream text-ink"
              }`}>
                {/* Background decoration */}
                <div className={`absolute w-40 h-80 rounded-full opacity-10 rotate-[22deg] ${
                  imgLeft ? "-top-20 -right-20 bg-accent" : "-bottom-20 -left-20 bg-primary"
                }`} />

                <div className="relative max-w-lg">
                  <div className={`text-[10px] tracking-[0.3em] uppercase font-semibold mb-6 ${
                    imgLeft ? "text-accent" : "text-accent"
                  }`}>
                    0{i + 1} &nbsp;·&nbsp; Expertise
                  </div>
                  <h3 className={`font-sans font-extrabold tracking-tight leading-none uppercase mb-6 text-[clamp(28px,5vw,48px)] ${
                    imgLeft ? "text-accent" : "text-primary"
                  }`}>
                    {f.t}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed opacity-90">{f.d}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
