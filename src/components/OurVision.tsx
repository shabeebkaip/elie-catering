"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
});

export default function OurVision() {
  const t = useTranslations("vision");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <>
      <section
        id="vision-mission"
        className="relative text-cream overflow-hidden"
        style={{ backgroundColor: "#30205f" }}
      >
        {/* ── Bold visible ambient blobs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Bright gold spotlight — upper center right */}
          <div
            className="absolute"
            style={{
              top: "-10%", right: "10%",
              width: "700px", height: "700px",
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(187,138,60,0.22) 0%, rgba(187,138,60,0.08) 40%, transparent 70%)",
            }}
          />
          {/* Warm lighter-purple glow — far right */}
          <div
            className="absolute"
            style={{
              top: "20%", right: "-5%",
              width: "500px", height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(90,55,150,0.55) 0%, transparent 70%)",
            }}
          />
          {/* Deep shadow — left edge behind images */}
          <div
            className="absolute"
            style={{
              top: 0, left: 0,
              width: "420px", height: "100%",
              background: "linear-gradient(90deg, rgba(18,9,42,0.45) 0%, transparent 100%)",
            }}
          />
          {/* Gold shimmer line — top */}
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(187,138,60,0.6) 35%, rgba(187,138,60,0.8) 50%, rgba(187,138,60,0.6) 65%, transparent 100%)" }}
          />
          {/* Subtle grid dot texture — right half */}
          <div
            className="absolute inset-y-0 right-0 w-[55%] opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(212,168,78,1) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="container-custom px-6 md:px-14 lg:px-20 relative z-10">
          <div className="relative grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-0 lg:min-h-[1120px]">

            {/* ── Left: Image spine column ── */}
            <div className="relative hidden lg:block">

              {/* Spine line */}
              <div
                className="absolute top-[5%] bottom-[5%] left-[31%] w-px"
                style={{ background: "linear-gradient(180deg, transparent, rgba(187,138,60,0.7) 15%, rgba(187,138,60,0.9) 50%, rgba(187,138,60,0.7) 85%, transparent)" }}
              />
              {/* Spine dots */}
              {([{ top: "5%" }, { top: "50%" }, { bottom: "5%" }] as React.CSSProperties[]).map((pos, i) => (
                <div key={i} className="absolute left-[31%] -translate-x-1/2 w-[11px] h-[11px] rounded-full"
                  style={{ ...pos, background: "linear-gradient(135deg, #d4a84e, #bb8a3c)", boxShadow: "0 0 20px rgba(187,138,60,0.8), 0 0 6px rgba(187,138,60,1)" }}
                />
              ))}

              {/* Tall arch — main image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.08 }}
                className="absolute top-[5%] left-[7%] z-20"
              >
                <div style={{
                  borderRadius: "9999px 9999px 64px 64px",
                  padding: "5px",
                  background: "linear-gradient(160deg, #d4a84e 0%, #bb8a3c 40%, #7a5520 70%, #bb8a3c 100%)",
                  boxShadow: "0 60px 120px rgba(0,0,0,0.7), 0 0 60px rgba(187,138,60,0.3), inset 0 0 0 1px rgba(255,255,255,0.05)",
                }}>
                  <div style={{ borderRadius: "9999px 9999px 60px 60px", overflow: "hidden", width: "184px", height: "557px", position: "relative" }}>
                    <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" alt="Luxury event" fill className="object-cover" sizes="190px" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(48,32,95,0.25) 0%, transparent 40%, rgba(18,9,42,0.6) 100%)" }} />
                  </div>
                </div>
              </motion.div>

              {/* Medium arch — food */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.26 }}
                className="absolute top-[37%] left-[50%] z-10"
              >
                <div style={{
                  borderRadius: "9999px 9999px 56px 56px",
                  padding: "6px",
                  background: "linear-gradient(135deg, #d4a84e 0%, #bb8a3c 50%, #8b6225 100%)",
                  boxShadow: "0 44px 100px rgba(0,0,0,0.7), 0 0 50px rgba(187,138,60,0.35)",
                }}>
                  <div style={{ borderRadius: "9999px 9999px 52px 52px", overflow: "hidden", width: "144px", height: "427px", position: "relative" }}>
                    <Image src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" alt="Exquisite plating" fill className="object-cover" sizes="152px" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(18,9,42,0.85) 100%)" }} />
                  </div>
                </div>
              </motion.div>

              {/* Small rotated arch */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.42 }}
                className="absolute bottom-[5%] left-[4%] z-30"
              >
                <div style={{
                  borderRadius: "9999px 9999px 44px 44px",
                  transform: "rotate(7deg)",
                  padding: "3px",
                  background: "linear-gradient(135deg, rgba(212,168,78,0.6), rgba(187,138,60,0.25))",
                  boxShadow: "0 24px 55px rgba(0,0,0,0.6)",
                }}>
                  <div style={{ borderRadius: "9999px 9999px 42px 42px", overflow: "hidden", width: "100px", height: "264px", position: "relative" }}>
                    <div style={{ transform: "rotate(-7deg) scale(1.28)", position: "absolute", inset: 0 }}>
                      <Image src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop" alt="Dessert artistry" fill className="object-cover" sizes="104px" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Outline capsule decoration */}
              <div className="absolute top-[17%] right-[5%] w-[55px] h-[155px]"
                style={{ borderRadius: "9999px 9999px 28px 28px", transform: "rotate(-14deg)", border: "1px solid rgba(187,138,60,0.3)" }}
              />
            </div>

            {/* ── Right: Text column ── */}
            <div className="relative pt-16 md:pt-20 lg:pt-24 2xl:pt-32 pb-20 md:pb-28 2xl:pb-36">

              {/* Subtle right-panel glass surface */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none hidden lg:block"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, transparent 60%)", border: "1px solid rgba(187,138,60,0.08)", backdropFilter: "blur(2px)" }}
              />

              {/* ── VISION ── */}
              <div className="relative pb-16 md:pb-20 lg:pb-24" style={{ borderBottom: "1px solid rgba(187,138,60,0.22)" }}>
                {/* Gold corner ornament */}
                <div className="absolute top-0 right-0 hidden lg:block">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M48 0 L48 48" stroke="rgba(187,138,60,0.25)" strokeWidth="1" />
                    <path d="M0 0 L48 0" stroke="rgba(187,138,60,0.25)" strokeWidth="1" />
                    <circle cx="48" cy="0" r="3" fill="rgba(187,138,60,0.5)" />
                  </svg>
                </div>

                <motion.div {...fadeUp(0.06)}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-px" style={{ background: "linear-gradient(90deg, #bb8a3c, rgba(187,138,60,0.1))" }} />
                    <span className="text-[9px] tracking-[0.52em] uppercase font-bold" style={{ color: "#bb8a3c" }}>{t("eyebrow")}</span>
                  </div>
                </motion.div>

                <motion.h2 {...fadeUp(0.13)} className="font-serif font-light tracking-tight leading-[0.88] text-cream text-[clamp(52px,8vw,104px)]">
                  {isRTL ? (
                    <em className="text-accent italic">{t("headline1")}</em>
                  ) : (
                    <>{t("headline1")}<br /><em className="text-accent italic">{t("headline2")}</em></>
                  )}
                </motion.h2>

                <motion.div {...fadeUp(0.21)} className="mt-9 md:mt-11 space-y-5 max-w-[520px]">
                  <p className="text-[clamp(15px,1.6vw,17px)] leading-[1.82] font-light text-cream/75">{t("p1")}</p>
                  <p className="text-[clamp(15px,1.6vw,17px)] leading-[1.82] font-light text-cream/50">{t("p2")}</p>
                </motion.div>
              </div>

              {/* ── Divider ornament ── */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="py-9 md:py-11 flex items-center gap-3 origin-left"
              >
                <div className="w-8 h-px bg-accent/40" />
                <div className="w-1.5 h-7 rounded-full bg-accent/45" />
                <div className="w-3 h-3 rounded-full" style={{ background: "linear-gradient(135deg, #d4a84e, #bb8a3c)", boxShadow: "0 0 18px rgba(187,138,60,0.7)" }} />
                <div className="w-1.5 h-7 rounded-full bg-accent/45" />
                <div className="flex-1 h-px bg-accent/15" />
                <div className="w-1.5 h-7 rounded-full bg-accent/30" />
                <div className="w-3 h-3 rounded-full" style={{ background: "linear-gradient(135deg, rgba(187,138,60,0.7), rgba(212,168,78,0.5))", boxShadow: "0 0 14px rgba(187,138,60,0.5)" }} />
                <div className="w-1.5 h-7 rounded-full bg-accent/30" />
                <div className="w-8 h-px bg-accent/25" />
              </motion.div>

              {/* ── MISSION ── */}
              <div className="pb-4">
                <motion.div {...fadeUp(0.06)}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-px" style={{ background: "linear-gradient(90deg, #bb8a3c, rgba(187,138,60,0.1))" }} />
                    <span className="text-[9px] tracking-[0.52em] uppercase font-bold" style={{ color: "#bb8a3c" }}>{t("missionEyebrow")}</span>
                  </div>
                </motion.div>

                <motion.h2 {...fadeUp(0.13)} className="font-serif font-light tracking-tight leading-[0.88] text-cream text-[clamp(52px,8vw,104px)]">
                  {isRTL ? (
                    <em className="text-accent italic">{t("missionH1")}</em>
                  ) : (
                    <>{t("missionH1")}<br /><em className="text-accent italic">{t("missionH2")}</em></>
                  )}
                </motion.h2>

                <motion.div {...fadeUp(0.21)} className="mt-9 md:mt-11 space-y-5 max-w-[520px]">
                  <p className="text-[clamp(15px,1.6vw,17px)] leading-[1.82] font-light text-cream/75">
                    <strong className="text-accent font-semibold italic">{t("missionBrand")}</strong>{t("missionP1")}
                  </p>
                  <p className="text-[clamp(15px,1.6vw,17px)] leading-[1.82] font-light text-cream/50">{t("missionP2")}</p>
                </motion.div>

                <motion.div {...fadeUp(0.3)} className="mt-10 md:mt-12">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-3 px-9 py-[17px] rounded-full text-[10px] tracking-[0.3em] uppercase font-bold text-accent no-underline transition-all duration-300 hover:bg-accent hover:text-primary hover:scale-[1.05] active:scale-95"
                    style={{
                      border: "1px solid rgba(187,138,60,0.55)",
                      background: "rgba(187,138,60,0.1)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(212,168,78,0.2)",
                    }}
                  >
                    {t("missionCta")} <span>{isRTL ? "←" : "→"}</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Arch transition ── */}
        <div className="relative mt-6 md:mt-10">
          <div className="h-16 md:h-24 bg-surface rounded-t-[80px] md:rounded-t-[120px]" />
        </div>
      </section>
    </>
  );
}
