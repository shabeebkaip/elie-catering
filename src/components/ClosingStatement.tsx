"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ElieLogo from "./ElieLogo";

export default function ClosingStatement() {
  return (
    <section className="relative px-6 py-20 md:py-36 lg:py-44 bg-accent text-primary overflow-hidden">

      {/* Capsule cluster — top right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 80, y: -80 }}
          whileInView={{ opacity: 0.92, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-[-80px] right-[-50px] w-[160px] md:w-[200px] h-[320px] md:h-[400px] rounded-full bg-cream rotate-[-26deg]"
        />
        <motion.div
          initial={{ opacity: 0, x: 100, y: -40 }}
          whileInView={{ opacity: 0.55, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.18, ease: "easeOut" }}
          className="absolute top-[60px] right-[90px] md:right-[130px] w-[90px] md:w-[120px] h-[190px] md:h-[250px] rounded-full bg-primary rotate-[-26deg]"
        />
        {/* Outline capsule — bottom left */}
        <div className="absolute bottom-[-40px] left-[8%] w-[90px] h-[220px] border border-primary/18 rounded-full rotate-[18deg] hidden md:block" />
        <div className="absolute bottom-[10%] left-[18%] w-[50px] h-[120px] border border-primary/10 rounded-full rotate-[18deg] hidden lg:block" />
      </div>

      {/* Giant watermark logo */}
      <div className="absolute bottom-[-12%] right-[-2%] opacity-35 pointer-events-none select-none rotate-[-10deg] z-0 hidden lg:block">
        <ElieLogo size={760} color="#fff" onlyName={true} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10 md:mb-12">
            <div className="w-8 h-px bg-primary/40" />
            <span className="text-primary/70 text-[9px] tracking-[0.4em] uppercase font-bold">Begin the journey</span>
          </div>

          {/* Quote / intro paragraph */}
          <div className="relative pl-6 md:pl-8 border-l-4 border-primary/30 mb-12 md:mb-16 max-w-2xl">
            <p className="text-[clamp(15px,1.7vw,18px)] leading-relaxed text-white font-light">
              <strong className="font-semibold text-primary">At Elie Catering and Event Planning,</strong> we believe in creating
              extraordinary experiences through luxury, creativity and impeccable
              service. Whether it is a wedding, corporate event, or private
              gathering, we are committed to making your event a masterpiece of
              sophistication and elegance.
            </p>
          </div>

          {/* Main headline */}
          <h2 className="font-serif font-light text-[clamp(60px,11vw,130px)] text-white uppercase leading-[0.87] tracking-tight mb-12 md:mb-16">
            Book your<br />
            <span className="text-primary">event.</span>
          </h2>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 rounded-full text-[10px] md:text-[11px] tracking-[0.28em] uppercase font-bold bg-primary text-cream no-underline transition-all hover:bg-white hover:text-primary hover:scale-105 active:scale-95 shadow-[0_16px_48px_rgba(28,20,40,0.3)]"
            >
              Begin a conversation
              <span className="text-[9px]">→</span>
            </Link>
            <span className="text-primary/55 text-[11px] tracking-[0.2em] uppercase font-light">
              +966 54 435 6564
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
