"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Camera, Music2, Sparkles, Car, MonitorSpeaker } from "lucide-react";

const services = [
  {
    icon: Camera,
    slug: "professional-photography",
    title: "Professional Photography",
    description:
      "Professional photography and videography services — including ground and aerial drone shots — to capture every exquisite moment with precision.",
  },
  {
    icon: Music2,
    slug: "entertainment-live-music",
    title: "Entertainment & Live Music",
    description:
      "Elevate your event with world-class entertainment, from professional soloists (Piano, Saxophone, Violin, Oud) to spectacular live bands.",
  },
  {
    icon: Sparkles,
    slug: "hall-decor-coordination",
    title: "Hall & Decor Coordination",
    description:
      "End-to-end planning of event halls, featuring bespoke table arrangements, exquisite décor, and fresh natural floral displays.",
  },
  {
    icon: Car,
    slug: "valet-parking",
    title: "Valet Parking — Valia",
    description:
      "Our premium 'Valia' valet team ensures a sophisticated, seamless experience for your guests from arrival to departure.",
  },
  {
    icon: MonitorSpeaker,
    slug: "stage-av-solutions",
    title: "Stage & AV Solutions",
    description:
      "Professional stage design equipped with state-of-the-art lighting and sound distribution systems for an immersive celebration.",
  },
];

export default function EliteServices() {
  const locale = useLocale();

  return (
    <section className="bg-primary relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-14 pt-24 md:pt-32 pb-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 md:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-accent text-[10px] tracking-[0.5em] uppercase font-bold mb-5"
            >
              Elite Event Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-[clamp(40px,6.5vw,84px)] text-cream font-light italic leading-[0.9] tracking-tight"
            >
              Beyond the Table
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href={`/${locale}/services?category=addons`}
              className="group flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-cream/40 hover:text-accent transition-colors duration-300 pb-1 border-b border-cream/15 hover:border-accent whitespace-nowrap no-underline"
            >
              View All Services
              <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Editorial service rows */}
      <div className="border-t border-white/8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: [0.19, 1, 0.22, 1] }}
              className="group relative border-b border-white/8"
            >
              <Link
                href={`/${locale}/services/${service.slug}`}
                className="block no-underline"
              >
              {/* Hover bg */}
              <div className="absolute inset-0 bg-white/[0.025] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

              <div className="relative flex items-center gap-5 md:gap-10 px-6 md:px-14 py-8 md:py-10">
                {/* Index */}
                <span className="font-mono text-[10px] tracking-[0.35em] text-accent/30 group-hover:text-accent/70 transition-colors duration-300 w-7 flex-shrink-0 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="flex-shrink-0 text-cream/25 group-hover:text-accent transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.4} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-[clamp(18px,2.2vw,30px)] text-cream font-light italic leading-tight flex-shrink-0 w-[clamp(180px,26vw,340px)] group-hover:text-accent transition-colors duration-400">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="hidden lg:block flex-shrink-0 w-10 h-px bg-white/10 group-hover:bg-accent/35 transition-colors duration-400" />

                {/* Description */}
                <p className="hidden md:block text-cream/35 text-[13px] leading-relaxed flex-1 group-hover:text-cream/60 transition-colors duration-400">
                  {service.description}
                </p>

                {/* Discover CTA */}
                <div className="ml-auto flex-shrink-0 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-accent opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300">
                  <span>Discover</span>
                  <span>→</span>
                </div>
              </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom padding */}
      <div className="pb-12 md:pb-20" />
    </section>
  );
}
