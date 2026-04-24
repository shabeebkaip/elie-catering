"use client";

import Link from "next/link";

const cols = [
  {
    h: "Atelier",
    l: [
      { label: "Riyadh, Saudi Arabia", href: "#" },
      { label: "Sun–Thu · 10—18", href: "#" },
    ],
  },
  {
    h: "Contact",
    l: [
      { label: "+966 54 435 6564", href: "tel:+966544356564" },
      { label: "hello@eliecatering.com", href: "mailto:hello@eliecatering.com" },
      { label: "www.eliecatering.com", href: "#" },
    ],
  },
  {
    h: "Services",
    l: [
      { label: "Weddings", href: "#services" },
      { label: "Corporate", href: "#services" },
      { label: "Private dinners", href: "#services" },
      { label: "Galas", href: "#services" },
    ],
  },
  {
    h: "Journal",
    l: [
      { label: "A dispatch from the kitchen,", href: "#" },
      { label: "four times a year.", href: "#" },
      { label: "→ Subscribe", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-cream relative overflow-hidden">
      {/* Capsule decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-4%] w-[120px] h-[480px] bg-accent/6 rounded-full rotate-[-35deg]" />
        <div className="absolute top-[-2%] right-[10%] w-[60px] h-[240px] border border-accent/10 rounded-full rotate-[-35deg]" />
        <div className="absolute bottom-[-10%] left-[-3%] w-[100px] h-[380px] bg-white/3 rounded-full rotate-[30deg]" />
      </div>

      <div className="relative z-10 container-custom px-6 md:px-14 pt-16 md:pt-24 pb-10">

        {/* Top: logo + tagline */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-20">
          <Link href="/" className="no-underline inline-block mb-5">
            <img
              src="/images/elite-logo.webp"
              className="w-16 md:w-20 transition-all duration-300 hover:scale-110 hover:opacity-90"
              alt="Elie Logo"
            />
          </Link>
          <div className="text-[9px] md:text-[10px] tracking-[0.45em] uppercase text-accent/55 font-medium">
            Catering &nbsp;&amp;&nbsp; Event Planning
          </div>
          {/* Decorative capsule divider */}
          <div className="flex items-center gap-3 mt-6">
            <div className="w-12 h-px bg-white/10" />
            <div className="w-1.5 h-4 rounded-full bg-accent/30" />
            <div className="w-12 h-px bg-white/10" />
          </div>
        </div>

        {/* Grid columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 pt-12 border-t border-white/8">
          {cols.map((col) => (
            <div key={col.h} className="group">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-4 h-px bg-accent/40" />
                <span className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-accent font-bold">
                  {col.h}
                </span>
              </div>
              <div className="flex flex-col gap-3 text-[12px] md:text-[13px] text-cream/55 font-light">
                {col.l.map((x) => (
                  <Link
                    key={x.label}
                    href={x.href}
                    className="no-underline hover:text-cream transition-colors duration-200 cursor-pointer w-fit"
                  >
                    {x.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 md:mt-24 pt-7 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-5 text-[9px] md:text-[10px] text-white/30 tracking-[0.22em] uppercase">
          <div className="order-2 md:order-1">
            © 2026 Elie Catering &amp; Event Planning
          </div>
          <div className="order-1 md:order-2 flex items-center gap-6">
            <Link href="#" className="hover:text-accent transition-colors no-underline">Terms</Link>
            <Link href="#" className="hover:text-accent transition-colors no-underline">Privacy</Link>
            <Link href="#" className="hover:text-accent transition-colors no-underline">Instagram</Link>
          </div>
          <div className="order-3 hidden md:block">
            All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
