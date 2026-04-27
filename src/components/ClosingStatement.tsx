"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ClosingStatement() {
  return (
    <section className="relative px-6 py-24 md:py-40 bg-accent text-primary overflow-hidden">
      {/* Subtle top-right capsule pair */}
      <div className="absolute top-[-60px] right-[-50px] w-[160px] md:w-[200px] h-[320px] md:h-[400px] rounded-full bg-cream/90 rotate-[-22deg] pointer-events-none" />
      <div className="absolute top-[80px] right-[80px] md:right-[110px] w-[90px] md:w-[120px] h-[180px] md:h-[240px] rounded-full bg-primary/20 rotate-[-22deg] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="space-y-10 md:space-y-12">
            <p className="text-[15px] md:text-[18px] leading-relaxed text-white/90 max-w-2xl pl-6 md:pl-8 border-l-4 border-primary font-light">
              <strong className="font-semibold text-primary">
                At Elie Catering and Event Planning,
              </strong>{" "}
              we believe in creating extraordinary experiences through luxury,
              creativity and impeccable service. Whether it is a wedding,
              corporate event, or private gathering, we are committed to making
              your event a masterpiece of sophistication and elegance.
            </p>

            <h2 className="font-serif font-light text-[clamp(72px,12vw,140px)] text-white uppercase leading-[0.85] tracking-tight">
              Book your
              <br />
              event.
            </h2>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 rounded-full text-[11px] md:text-[12px] tracking-[0.25em] uppercase font-bold bg-primary text-cream no-underline transition-all hover:scale-105 hover:bg-white hover:text-primary active:scale-95 shadow-xl"
            >
              Begin a conversation →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
