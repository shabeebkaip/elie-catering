"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    n: "01",
    t: "A single point of contact",
    d: "One producer from first call to last candle. No vendor seams, no surprises.",
  },
  {
    n: "02",
    t: "In-house craftspeople",
    d: "Chefs, florists, service staff — trained under one roof, to one standard.",
  },
  {
    n: "03",
    t: "Fourteen years of memory",
    d: "Institutional knowledge you can only build by doing this for a long time.",
  },
];

const expertise = [
  {
    t: "Unparalleled expertise",
    d: "Years of experience in event management and catering. Our seasoned professionals bring your vision to life with creativity, precision and professionalism.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Luxury and elegance",
    d: "We ensure luxury in every detail — from concept to presentation, creating sophisticated experiences that leave a lasting impression.",
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Customized solutions",
    d: "Every event is built from a blank page. Allergens, stories, the wine your grandfather loved — a menu made once, exactly for you.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
  {
    t: "Culinary excellence",
    d: "We cook from a pantry built each week at market, guided by the season and the chef's notebook.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
  },
  {
    t: "Seamless execution",
    d: "One producer. One timeline. One standard. The seams you usually see between vendors simply disappear.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Commitment to quality",
    d: "Quality is not a claim — it is the names of the farmers we buy from, the suppliers we've kept for a decade.",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
  },
];

export default function WhyChooseUs() {
  return (
    <div id="why-us">
      {/* Why Choose Us — numbered reasons */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-20"
          >
            <div className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-8 flex items-center gap-4">
              <div className="w-8 h-px bg-accent" />
              Why Elie
            </div>
            <h2 className="font-serif font-light tracking-tight leading-[0.88] uppercase text-accent text-[clamp(56px,10vw,110px)]">
              Why
              <br />
              Choose Us
            </h2>
            <p className="text-base md:text-xl leading-relaxed text-body max-w-xl mt-8 font-light opacity-80">
              Choosing Elie Catering and Event Planning means selecting a
              partner who understands the nuances of crafting unforgettable
              events.
            </p>
          </motion.div>

          <div className="divide-y divide-primary/10">
            {reasons.map((r, i) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12 py-10 md:py-12 group"
              >
                <span className="font-serif italic text-accent text-lg md:text-xl opacity-70 pt-1">
                  {r.n}
                </span>
                <h3 className="font-serif font-light text-2xl md:text-3xl text-primary uppercase tracking-tight leading-tight self-center">
                  {r.t}
                </h3>
                <p className="col-span-2 md:col-span-1 text-[15px] md:text-base leading-relaxed text-body font-light opacity-75 self-center">
                  {r.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise grid */}
      <section className="bg-primary py-20 md:py-32 px-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-20 text-center"
          >
            <div className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-6 flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-accent" />
              Our Strengths
              <div className="w-8 h-px bg-accent" />
            </div>
            <h2 className="font-serif font-light tracking-tight leading-[0.88] uppercase text-white text-[clamp(40px,7vw,80px)]">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {expertise.map((e, i) => (
              <motion.div
                key={e.t}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-primary p-8 md:p-10 group hover:bg-primary/80 transition-colors duration-300"
              >
                {/* Thumbnail */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={e.img}
                    alt={e.t}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="text-[9px] tracking-[0.35em] uppercase text-accent font-bold mb-4 flex items-center gap-3">
                  <div className="w-5 h-px bg-accent/60" />
                  Expertise 0{i + 1}
                </div>
                <h3 className="font-serif font-light text-xl md:text-2xl text-white uppercase leading-tight tracking-tight mb-4">
                  {e.t}
                </h3>
                <p className="text-[14px] leading-relaxed text-cream/65 font-light">
                  {e.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
