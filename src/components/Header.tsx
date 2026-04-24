"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ElieLogo from "./ElieLogo";

const NAV = ["Atelier", "Menus", "Services", "Journal", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-14 py-4 md:py-5 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-primary md:bg-transparent"
      }`}
      style={{
        background: scrolled ? undefined : scrolled === false && typeof window !== 'undefined' && window.innerWidth < 768 ? "#3B2A5A" : undefined
      }}
    >
      <Link href="/" className="relative z-50 no-underline">
        <ElieLogo size={24} color="#C89B3C" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.2em] uppercase">
        {NAV.map((l) => (
          <Link
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-cream no-underline transition-colors hover:text-accent"
          >
            {l}
          </Link>
        ))}
      </nav>

      {/* Reserve button */}
      <Link
        href="#book"
        className="hidden md:inline-flex items-center px-7 py-3 rounded-full text-[10px] tracking-[0.15em] uppercase font-medium bg-accent text-primary no-underline transition-transform hover:scale-105 active:scale-95"
      >
        Reserve
      </Link>

      {/* Mobile toggle */}
      <button
        className="md:hidden relative z-50 text-cream bg-transparent border-none cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {NAV.map((l, i) => (
          <Link
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className={`text-cream no-underline text-2xl tracking-[0.1em] uppercase font-light transition-all duration-300 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {l}
          </Link>
        ))}
        <Link
          href="#book"
          onClick={() => setOpen(false)}
          className={`mt-4 px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase font-medium bg-accent text-primary no-underline transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${NAV.length * 50}ms` }}
        >
          Reserve
        </Link>
      </div>
    </header>
  );
}
