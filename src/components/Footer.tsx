"use client";

import Link from "next/link";
import ElieLogo from "./ElieLogo";

const cols = [
  { h: "Atelier", l: ["Riyadh, Saudi Arabia", "Sun–Thu · 10—18"] },
  { h: "Contact", l: ["+966 54 435 6564", "hello@eliecatering.com", "www.eliecatering.com"] },
  { h: "Services", l: ["Weddings", "Corporate", "Private dinners", "Galas"] },
  { h: "Journal", l: ["A dispatch from the kitchen,", "four times a year.", "→ Subscribe"] },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-cream pt-20 md:pt-32 pb-10 px-6 md:px-14 relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Top section: Logo and Branding */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex justify-center mb-6">
            <Link href="/">
              <img src="/images/elite-logo.webp" className="w-20 md:w-24 transition-transform hover:scale-110" alt="Elie Logo" />
            </Link>
          </div>
          <div className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-accent/60 font-medium">
            Catering &nbsp;&amp;&nbsp; Event Planning
          </div>
        </div>

        {/* Middle section: Grid Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 pt-16 border-t border-white/10">
          {cols.map((col) => (
            <div key={col.h} className="group">
              <div className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-accent mb-6 md:mb-8 font-bold group-hover:translate-x-2 transition-transform">
                {col.h}
              </div>
              <div className="flex flex-col gap-3 md:gap-4 text-[13px] md:text-[14px] text-cream/70 font-light">
                {col.l.map((x) => (
                  <span key={x} className="hover:text-white transition-colors cursor-default">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section: Copyright and Watermark */}
        <div className="mt-20 md:mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-[11px] text-white/40 tracking-[0.2em] uppercase">
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
