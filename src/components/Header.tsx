"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Catering", href: "#catering" },
    { name: "Venues", href: "#venues" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://elie-catering.webcrowdsolutions.com/images/header_logos/header_logo_1775112023_c1eff258.webp"
            alt="Elie Catering Logo"
            width={180}
            height={60}
            className="object-contain h-12 w-auto md:h-16"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-accent transition-colors text-sm uppercase tracking-wider font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section (Language & CTA) */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="flex items-center gap-1 text-white hover:text-accent transition-colors">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase">En</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <Link
            href="#book"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-sm uppercase tracking-widest text-sm font-semibold transition-all duration-300 shadow-md"
          >
            Book An Event
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-primary border-t border-white/10 shadow-xl">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-accent transition-colors text-sm uppercase tracking-wider font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
              <button className="flex items-center gap-2 text-white hover:text-accent transition-colors w-fit">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase">English</span>
              </button>
              <Link
                href="#book"
                className="bg-accent text-white px-6 py-3 rounded-sm uppercase tracking-widest text-sm font-semibold text-center w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book An Event
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
