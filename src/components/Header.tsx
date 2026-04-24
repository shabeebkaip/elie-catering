"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = ["Atelier", "Menus", "Services", "Journal", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center justify-between px-6 md:px-14 ${
        scrolled
          ? "py-3 bg-primary/97 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.3)]"
          : "py-5 md:py-6 bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="relative z-[60] no-underline flex items-center gap-3">
        <img
          src="/images/elite-logo.webp"
          className={`transition-all duration-500 ${scrolled ? "w-12" : "w-16"}`}
          alt="Elie Logo"
        />

      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10 text-[10px] tracking-[0.28em] uppercase">
        {NAV.map((l) => (
          <Link
            key={l}
            href={`#${l.toLowerCase()}`}
            className="relative text-cream/70 no-underline transition-all duration-300 hover:text-accent group"
          >
            {l}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>

      {/* Reserve CTA */}
      <Link
        href="#book"
        className="hidden md:inline-flex items-center gap-2 px-7 py-3 rounded-full text-[10px] tracking-[0.22em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-lg"
      >
        Reserve
        <span className="text-[8px]">→</span>
      </Link>

      {/* Mobile toggle */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        className="md:hidden relative z-[60] text-accent bg-transparent border-none cursor-pointer p-2"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-primary z-[50] flex flex-col items-center justify-center md:hidden overflow-hidden"
          >
            {/* Capsule decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-15%] right-[-10%] w-[160px] h-[400px] bg-accent/10 rounded-full rotate-[-30deg]" />
              <div className="absolute top-[-5%] right-[5%] w-[80px] h-[200px] border border-accent/20 rounded-full rotate-[-30deg]" />
              <div className="absolute bottom-[-15%] left-[-10%] w-[160px] h-[400px] bg-accent/8 rounded-full rotate-[30deg]" />
              <div className="absolute bottom-[-5%] left-[5%] w-[80px] h-[200px] border border-accent/15 rounded-full rotate-[30deg]" />
            </div>

            <nav className="relative z-10 flex flex-col items-center gap-7">
              {NAV.map((l, i) => (
                <motion.div
                  key={l}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.08, ease: "easeOut" }}
                >
                  <Link
                    href={`#${l.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-cream/80 no-underline text-[clamp(28px,8vw,40px)] tracking-[0.15em] uppercase font-serif italic transition-all hover:text-accent"
                  >
                    {l}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, ease: "easeOut" }}
                className="mt-8"
              >
                <Link
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="px-12 py-5 rounded-full text-[11px] tracking-[0.28em] uppercase font-bold bg-accent text-primary no-underline shadow-2xl transition-all hover:bg-cream active:scale-95"
                >
                  Reserve Now
                </Link>
              </motion.div>
            </nav>

            <div className="absolute bottom-10 text-accent/30 text-[9px] tracking-[0.35em] uppercase">
              Elie Catering &amp; Event Planning
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
