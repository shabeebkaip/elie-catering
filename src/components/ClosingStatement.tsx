"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ElieLogo from "./ElieLogo";

export default function ClosingStatement() {
  return (
    <section className="relative px-6 py-24 md:py-40 bg-accent text-primary overflow-hidden">
      {/* Dynamic Background Capsules */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: 100, y: -100 }}
          whileInView={{ opacity: 0.95, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-[-100px] right-[-80px] w-[180px] md:w-[220px] h-[360px] md:h-[440px] rounded-full bg-cream rotate-[-25deg]" 
        />
        <motion.div 
          initial={{ opacity: 0, x: 150, y: -50 }}
          whileInView={{ opacity: 0.5, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute top-[100px] right-[100px] md:right-[140px] w-[110px] md:w-[140px] h-[220px] md:h-[280px] rounded-full bg-primary rotate-[-25deg]" 
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="space-y-10 md:space-y-12">
            <p className="text-[15px] md:text-[18px] leading-relaxed text-white max-w-2xl pl-6 md:pl-8 border-l-4 border-primary font-light">
              <strong className="font-semibold text-primary">At Elie Catering and Event Planning,</strong> we believe in creating
              extraordinary experiences through luxury, creativity and impeccable
              service. Whether it is a wedding, corporate event, or private
              gathering, we are committed to making your event a masterpiece of
              sophistication and elegance.
            </p>

            <h2 className="font-serif font-light text-6xl sm:text-8xl md:text-[clamp(100px,12vw,140px)] text-white uppercase leading-[0.85] tracking-tight py-4">
              Book your<br />event.
            </h2>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 rounded-full text-[11px] md:text-[12px] tracking-[0.25em] uppercase font-bold bg-primary text-cream no-underline transition-all hover:scale-105 hover:bg-white hover:text-primary active:scale-95 shadow-2xl"
            >
              Begin a conversation →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Giant Elie watermark bottom-right - Enlarged and focused only on name */}
      <div className="absolute bottom-[-10%] right-[-5%] opacity-40 pointer-events-none select-none rotate-[-10deg] z-0">
        <ElieLogo size={800} color="#fff" onlyName={true} />
      </div>
    </section>
  );
}
