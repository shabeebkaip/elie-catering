"use client";

import { motion } from "framer-motion";

const clients = [
  { label: "VIPs", icon: "◆" },
  { label: "Government Entities", icon: "◆" },
  { label: "Private Corporations", icon: "◆" },
  { label: "Royal Occasions", icon: "◆" },
  { label: "Exclusive Family Events", icon: "◆" },
];

const stats = [
  { num: "14+", label: "Years of Craft" },
  { num: "500+", label: "Events Delivered" },
  { num: "13", label: "Regions Covered" },
  { num: "100%", label: "Client Satisfaction" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] as number[] },
});

export default function ClientsReach() {
  return (
    <section className="relative bg-cream overflow-hidden py-24 md:py-32 lg:py-40">

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-10 w-48 h-[500px] rounded-full bg-primary/5 rotate-[18deg]" />
        <div className="absolute bottom-[-8%] right-[-4%] w-32 h-80 rounded-full bg-accent/8 rotate-[-20deg]" />
        <div className="absolute top-[40%] right-[20%] w-20 h-20 rounded-full border border-accent/15" />
      </div>

      <div className="container-custom px-6 md:px-14 lg:px-20 relative z-10">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent" />
            <span className="text-accent text-[10px] tracking-[0.45em] uppercase font-bold">
              Our Clients & Reach
            </span>
          </div>
          <h2 className="font-serif font-light text-[clamp(44px,7.5vw,100px)] text-primary uppercase leading-[0.85] tracking-tighter max-w-4xl">
            Trusted by<br />
            <em className="text-accent italic not-italic">Excellence.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Client categories */}
          <div>
            <motion.p {...fadeUp(0.1)} className="text-[clamp(15px,1.6vw,18px)] leading-relaxed text-body/70 font-light max-w-lg mb-10">
              We proudly extend our premium services to the most distinguished
              clientele across the Kingdom and beyond.
            </motion.p>

            <div className="space-y-3">
              {clients.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.12 + i * 0.08 }}
                  className="group flex items-center gap-5 py-4 border-b border-primary/8 hover:border-accent/30 transition-colors duration-300 cursor-default"
                >
                  <span className="text-accent text-[8px]">{c.icon}</span>
                  <span className="font-sans text-[clamp(14px,1.4vw,16px)] text-primary/75 tracking-wide font-medium group-hover:text-primary transition-colors duration-300">
                    {c.label}
                  </span>
                  <div className="ml-auto w-5 h-px bg-accent/0 group-hover:bg-accent/40 transition-all duration-400 group-hover:w-10" />
                </motion.div>
              ))}
            </div>

            {/* Geographic note */}
            <motion.div
              {...fadeUp(0.55)}
              className="mt-10 p-6 rounded-2xl bg-primary/4 border border-primary/8"
            >
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 rounded-full bg-accent flex-shrink-0 mt-1" />
                <p className="text-[clamp(13px,1.4vw,15px)] leading-relaxed text-body/65 font-light italic">
                  "Covering all regions of the Kingdom of Saudi Arabia — our specialized
                  team is fully equipped to handle high-profile events with immediate
                  readiness and unmatched professionalism."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 32, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className={`group relative overflow-hidden flex flex-col justify-end p-7 md:p-9 border transition-all duration-400 hover:-translate-y-1 cursor-default ${
                  i === 0
                    ? "bg-primary text-cream border-primary rounded-[40px_40px_16px_40px]"
                    : i === 1
                    ? "bg-accent text-primary border-accent rounded-[40px_40px_40px_16px]"
                    : "bg-cream text-primary border-primary/15 rounded-3xl hover:border-accent/30"
                }`}
                style={{ minHeight: "180px" }}
              >
                <div
                  className={`absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10 ${
                    i === 0 ? "bg-accent" : i === 1 ? "bg-primary" : "bg-accent"
                  }`}
                />
                <span
                  className={`font-serif text-[clamp(36px,5vw,56px)] font-light leading-none tracking-tight ${
                    i === 0 ? "text-accent" : i === 1 ? "text-primary" : "text-primary"
                  }`}
                >
                  {s.num}
                </span>
                <span
                  className={`text-[10px] tracking-[0.28em] uppercase font-bold mt-2 ${
                    i === 0 ? "text-cream/55" : i === 1 ? "text-primary/60" : "text-body/50"
                  }`}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
