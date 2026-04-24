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
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center justify-between px-6 md:px-14 py-5 md:py-6 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-2xl py-4" : "bg-transparent"
      }`}
    >
      {/* Background fill for mobile when NOT scrolled but menu is closed - ensured by bg-transparent above */}
      
      <Link href="/" className="relative z-[60] no-underline">
        <img src="/images/elite-logo.webp" className={`transition-all duration-500 ${scrolled ? "w-14" : "w-18"}`} alt="Elie Logo" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.25em] uppercase">
        {NAV.map((l) => (
          <Link
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-accent no-underline transition-all duration-300 hover:text-white hover:tracking-[0.35em]"
          >
            {l}
          </Link>
        ))}
      </nav>

      {/* Reserve button */}
      <Link
        href="#book"
        className="hidden md:inline-flex items-center px-8 py-3.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95 shadow-lg"
      >
        Reserve
      </Link>

      {/* Mobile toggle */}
      <button
        className="md:hidden relative z-[60] text-accent bg-transparent border-none cursor-pointer p-2 transition-transform hover:scale-110 active:scale-90"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-primary z-[50] flex flex-col items-center justify-center md:hidden"
          >
            {/* Geometric background accents for mobile menu */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
              <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[600px] bg-accent rounded-full rotate-45" />
              <div className="absolute bottom-[-10%] left-[-20%] w-[300px] h-[600px] bg-accent rounded-full rotate-45" />
            </div>

            <nav className="relative z-10 flex flex-col items-center gap-8">
              {NAV.map((l, i) => (
                <motion.div
                  key={l}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={`#${l.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-white no-underline text-3xl tracking-[0.2em] uppercase font-serif italic transition-all hover:text-accent"
                  >
                    {l}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-12"
              >
                <Link
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="px-12 py-5 rounded-full text-[12px] tracking-[0.3em] uppercase font-bold bg-accent text-primary no-underline shadow-2xl"
                >
                  Reserve Now
                </Link>
              </motion.div>
            </nav>

            {/* Bottom info for mobile menu */}
            <div className="absolute bottom-12 text-accent/40 text-[10px] tracking-[0.3em] uppercase">
              Elie Catering &copy; 2024
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
