"use client";

import { motion } from "framer-motion";

const values = [
  { t: "Excellence", d: "We strive for perfection in every detail, from planning to execution." },
  { t: "Innovation", d: "Creativity and fresh ideas are at the heart of everything we do." },
  { t: "Luxury", d: "We specialize in curating high-end experiences that exude sophistication and elegance." },
  { t: "Integrity", d: "Trust and transparency are the foundation of our client relationships." },
  { t: "Client-centered service", d: "Every event is uniquely tailored to reflect our clients’ visions and preferences." },
  { t: "Discretion", d: "The evening belongs to you. We are the quiet architects of it." },
];

export default function CoreValues() {
  return (
    <section className="relative bg-cream overflow-hidden section-padding min-h-[600px] md:min-h-[760px]">
      {/* Tilted capsule cluster top-right — hidden on mobile for cleaner look or adjusted */}
      <div className="absolute -top-20 -right-20 w-[300px] md:w-[420px] h-[450px] md:h-[620px] pointer-events-none opacity-20 md:opacity-100">
        <div className="absolute top-10 right-32 w-32 md:w-40 h-72 md:h-[380px] rounded-full bg-primary rotate-[-20deg]" />
        <div className="absolute top-40 md:top-52 right-8 md:right-10 w-24 md:w-30 h-56 md:h-[280px] rounded-full bg-accent rotate-[-20deg]" />
        <div className="absolute top-80 md:top-[420px] right-40 md:right-44 w-20 md:w-24 h-44 md:h-[220px] rounded-full bg-accent rotate-[-20deg] opacity-85" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-sans font-extrabold tracking-[-0.04em] leading-[0.9] uppercase text-primary m-0 max-w-2xl text-[clamp(64px,12vw,140px)]">
            Core<br />Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-12 md:gap-y-14 max-w-4xl mt-16 md:mt-20">
          {values.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="pl-6 md:pl-8 border-l-[3px] border-accent"
            >
              <h3 className="font-sans text-xl md:text-2xl font-extrabold text-ink mb-3 uppercase tracking-tight">
                {v.t}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-body m-0">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
