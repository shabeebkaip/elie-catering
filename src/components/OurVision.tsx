"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: [0.19, 1, 0.22, 1] as number[] },
});

export default function OurVision() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          VISION + MISSION — Continuous Capsule Spine
          Both sections share one bg-primary canvas; the capsule
          shapes on the left span across the invisible V→M border,
          creating the "connected" visual the user requested.
          ══════════════════════════════════════════════════════ */}
      <section id="vision-mission" className="relative bg-primary text-cream overflow-hidden">

        {/* ── Ambient background decorations ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-right Hanging Gold Capsules (User requested) */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="absolute z-20 top-[-200px] right-[15%] w-[120px] h-[620px] rounded-full bg-accent/15 rotate-[0deg] border border-accent/20"
          />
          <motion.div
            initial={{ opacity: 0, y: -120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.4 }}
            className="absolute top-[-150px] right-[4%] w-[80px] h-[540px] rounded-full bg-accent/10 rotate-[0deg] border border-accent/15"
          />
          
          <div className="absolute top-[2%] right-[12%] w-[65px] h-[280px] rounded-full border border-accent/8 rotate-[30deg]" />
          <div className="absolute bottom-[12%] left-[-5%] w-[90px] h-[340px] rounded-full bg-white/3 rotate-[0deg]" />
          <div className="absolute bottom-[0%] right-[30%] w-[50px] h-[130px] rounded-full border border-accent/8 rotate-[-18deg]" />
        </div>

        <div className="container-custom px-6 md:px-14 lg:px-20 relative z-10">
          <div className="relative grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-0 lg:min-h-[1120px]">

            {/* ════════════════════════════════════
                LEFT: Capsule Spine — desktop only
                Three connected arch capsules that
                span from Vision into Mission area
                ════════════════════════════════════ */}
            <div className="relative hidden lg:block">

              {/* Subtle vertical connecting line */}
              <div className="absolute top-[5%] bottom-[5%] left-[31%] w-px bg-accent/12" />
              {/* Spine dots */}
              <div className="absolute top-[5%] left-[31%] -translate-x-1/2 w-2 h-2 rounded-full bg-accent/40 border border-accent/60" />
              <div className="absolute top-[50%] left-[31%] -translate-x-1/2 w-2 h-2 rounded-full bg-accent/40 border border-accent/60" />
              <div className="absolute bottom-[5%] left-[31%] -translate-x-1/2 w-2 h-2 rounded-full bg-accent/40 border border-accent/60" />

              {/* ─ Capsule 1: Tall image — covers Vision + bridges into Mission ─ */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
                className="absolute top-[5%] left-[7%] z-20"
              >
                <div
                  className="relative w-[190px] h-[565px] overflow-hidden border-[6px] border-accent/35 shadow-[0_50px_100px_rgba(0,0,0,0.38)]"
                  style={{ borderRadius: "9999px 9999px 64px 64px" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury event"
                    fill
                    className="object-cover"
                    sizes="190px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-primary/55" />
                </div>
              </motion.div>

              {/* ─ Capsule 2: Gold fill — offset, overlaps Vision bottom + Mission ─ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.26 }}
                className="absolute top-[37%] left-[50%] z-10"
              >
                <div
                  className="relative w-[152px] h-[435px] overflow-hidden border-[8px] border-accent shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
                  style={{ borderRadius: "9999px 9999px 56px 56px" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                    alt="Exquisite plating"
                    fill
                    className="object-cover transition-transform duration-[4s] group-hover:scale-110"
                    sizes="152px"
                  />
                  {/* Gold shimmer overlay */}
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent" />
                </div>
              </motion.div>

              {/* ─ Capsule 3: Small image — anchors the bottom of Mission ─ */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.42 }}
                className="absolute bottom-[5%] left-[4%] z-30"
              >
                <div
                  className="relative w-[104px] h-[268px] overflow-hidden border-4 border-white/16 shadow-xl"
                  style={{ borderRadius: "9999px 9999px 44px 44px", transform: "rotate(7deg)" }}
                >
                  <div style={{ transform: "rotate(-7deg) scale(1.28)" }} className="absolute inset-0">
                    <Image
                      src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop"
                      alt="Dessert artistry"
                      fill
                      className="object-cover"
                      sizes="104px"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Outline capsule — decorative ─ */}
              <div
                className="absolute top-[17%] right-[5%] w-[60px] h-[160px] border border-accent/14"
                style={{ borderRadius: "9999px 9999px 30px 30px", transform: "rotate(-14deg)" }}
              />
            </div>

            {/* ════════════════════════════════════
                RIGHT: Vision + Mission content
                ════════════════════════════════════ */}
            <div className="relative pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28">

              {/* ─────────────────────────
                  VISION
                  ───────────────────────── */}
              <div className="pb-16 md:pb-20 lg:pb-24 border-b border-accent/12">

                <motion.div {...fadeUp(0.06)}>
                  <div className="flex items-center gap-3 mb-5">

                    <div className="w-5 h-px bg-accent/40 mx-1" />
                    <span className="text-[9px] tracking-[0.42em] uppercase text-cream/38 font-bold">
                      Our Vision
                    </span>
                  </div>
                </motion.div>

                <motion.h2
                  {...fadeUp(0.13)}
                  className="font-serif font-light tracking-tight leading-[0.88] text-cream text-[clamp(52px,8vw,104px)]"
                >
                  Our<br />
                  <em className="text-accent italic">Vision.</em>
                </motion.h2>

                <motion.div
                  {...fadeUp(0.21)}
                  className="mt-8 md:mt-10 space-y-5 max-w-[520px]"
                >
                  <p className="text-[clamp(15px,1.6vw,17px)] leading-relaxed text-cream/75 font-light">
                    Our vision is to be the leading name in luxury event management, planning and catering
                    within the region — redefining excellence by setting new industry benchmarks.
                  </p>
                  <p className="text-[clamp(15px,1.6vw,17px)] leading-relaxed text-cream/52 font-light">
                    To be the premier provider of extraordinary event experiences globally, setting the
                    standard for sophistication and impeccable service.
                  </p>
                </motion.div>


              </div>

              {/* ─────────────────────────
                  CAPSULE BRIDGE ORNAMENT
                  ───────────────────────── */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
                className="py-8 md:py-10 flex items-center gap-4 origin-left"
              >
                <div className="w-8 h-px bg-accent/22" />
                <div className="w-1.5 h-7 rounded-full bg-accent/32" />
                <div className="flex-1 h-px bg-accent/8" />
                <div className="w-1.5 h-7 rounded-full bg-accent/32" />
                <div className="w-8 h-px bg-accent/22" />
              </motion.div>

              {/* ─────────────────────────
                  MISSION
                  ───────────────────────── */}
              <div className="pb-4">

                <motion.div {...fadeUp(0.06)}>
                  <div className="flex items-center gap-3 mb-5">

                    <div className="w-5 h-px bg-accent/40 mx-1" />
                    <span className="text-[9px] tracking-[0.42em] uppercase text-cream/38 font-bold">
                      Our Mission
                    </span>
                  </div>
                </motion.div>

                <motion.h2
                  {...fadeUp(0.13)}
                  className="font-serif font-light tracking-tight leading-[0.88] text-cream text-[clamp(52px,8vw,104px)]"
                >
                  Our<br />
                  <em className="text-accent italic">Mission.</em>
                </motion.h2>

                <motion.div
                  {...fadeUp(0.21)}
                  className="mt-8 md:mt-10 space-y-5 max-w-[520px]"
                >
                  <p className="text-[clamp(15px,1.6vw,17px)] leading-relaxed text-cream/75 font-light">
                    <strong className="text-accent font-semibold italic">
                      At Elie Catering and Event Planning,
                    </strong>{" "}
                    our mission is to create sophisticated and memorable events that exceed expectations.
                  </p>
                  <p className="text-[clamp(15px,1.6vw,17px)] leading-relaxed text-cream/52 font-light">
                    We blend culinary artistry with meticulous event planning — ensuring every event is a
                    masterpiece of luxury and professionalism.
                  </p>
                </motion.div>

                <motion.div {...fadeUp(0.3)} className="mt-10 md:mt-12">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[10px] tracking-[0.26em] uppercase font-bold border border-accent/40 text-accent no-underline transition-all duration-300 hover:bg-accent hover:text-primary hover:border-accent hover:scale-[1.04] active:scale-95"
                  >
                    Explore our services <span>→</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Arch transition down to CoreValues (bg-cream) ── */}
        <div className="relative mt-6 md:mt-10">
          <div className="h-16 md:h-24 bg-cream rounded-t-[80px] md:rounded-t-[120px]" />
        </div>
      </section>
    </>
  );
}
