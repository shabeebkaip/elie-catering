"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
/* ── Planning Mega Menu Data ── */
const PLANNING_ITEMS = [
  {
    title: "Event Planning",
    titleAr: "تنظيم الفعاليات",
    eyebrow: "Corporate & Institutional",
    eyebrowAr: "المؤسسي والحكومي",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
    color: "from-violet-900/80",
    tag: "Full Service",
    tagAr: "خدمة شاملة",
    desc: "End-to-end planning for galas, product launches, conferences, and government ceremonies across Saudi Arabia.",
    descAr: "تخطيط شامل للحفلات الكبرى وإطلاق المنتجات والمؤتمرات والمراسم الحكومية في جميع أنحاء المملكة.",
    slug: "event-planning",
  },
  {
    title: "Party Planning",
    titleAr: "تنظيم الحفلات",
    eyebrow: "Celebrations & Private Gatherings",
    eyebrowAr: "الاحتفالات والتجمعات الخاصة",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    color: "from-rose-900/70",
    tag: "Bespoke",
    tagAr: "مخصص",
    desc: "Milestone birthdays, Eid celebrations, engagements and private parties — crafted with Khaleeji warmth and luxury production.",
    descAr: "أعياد الميلاد الفارقة واحتفالات العيد والخطوبة والحفلات الخاصة — بدفء خليجي وإنتاج فاخر.",
    slug: "party-planning",
  },
  {
    title: "Wedding Planning",
    titleAr: "تخطيط حفلات الزفاف",
    eyebrow: "Bridal & Luxury Ceremonies",
    eyebrowAr: "العروس والمراسم الفاخرة",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    color: "from-amber-900/80",
    tag: "Most Booked",
    tagAr: "الأكثر حجزاً",
    desc: "From the zaffa to the last dance — full Saudi and Gulf wedding planning with floral, feast, and flawless coordination.",
    descAr: "من الزفة إلى آخر رقصة — تخطيط كامل للأعراس السعودية والخليجية بالزهور والوليمة والتنسيق المثالي.",
    slug: "wedding-planning",
  },
];

/* ── Decorating Mega Menu Data ── */
const DECORATING_ITEMS = [
  {
    slug: "event-decorating",
    title: "Event Decorating",
    titleAr: "تزيين الفعاليات",
    eyebrow: "Corporate & Gala",
    eyebrowAr: "المؤسسي والحفلات الكبرى",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
    color: "from-violet-900/80",
    tag: "Signature",
    tagAr: "مميز",
    desc: "Grand setups, stage backdrops, lighting design, and full venue transformations for corporate events and galas.",
    descAr: "إعدادات كبرى وخلفيات مسرح وتصميم إضاءة وتحويل شامل للمكان للفعاليات المؤسسية والحفلات.",
  },
  {
    slug: "party-decorating",
    title: "Party Decorating",
    titleAr: "تزيين الحفلات",
    eyebrow: "Celebrations & Themes",
    eyebrowAr: "الاحتفالات والموضوعات",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    color: "from-rose-900/70",
    tag: "Bespoke",
    tagAr: "مخصص",
    desc: "Themed decor, balloon art, custom centrepieces, and vibrant setups for birthdays and private celebrations.",
    descAr: "ديكور موضوعي وبالونات وقطع مركزية مخصصة وإعدادات نابضة لأعياد الميلاد والتجمعات الخاصة.",
  },
  {
    slug: "wedding-decorating",
    title: "Wedding Decorating",
    titleAr: "تزيين حفلات الزفاف",
    eyebrow: "Bridal & Luxury",
    eyebrowAr: "العروس والفخامة",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    color: "from-amber-900/80",
    tag: "Most Booked",
    tagAr: "الأكثر حجزاً",
    desc: "Floral arches, bridal table styling, aisle arrangements, and full venue dressing for an unforgettable day.",
    descAr: "أقواس زهرية وتنسيق طاولة العروس وترتيبات الممر وتجليل كامل للمكان ليوم لا يُنسى.",
  },
];

/* ── Mega Menu Data ── */

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [decoratingOpen, setDecoratingOpen] = useState(false);
  const [planningOpen, setPlanningOpen] = useState(false);
  const decoratingLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const planningLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const NAV = [
    { key: "home",        label: t("home"),        href: `/${locale}`,            mega: false          },
    { key: "about",       label: t("about"),        href: `/${locale}/about`,      mega: false          },
    { key: "services",    label: t("services"),     href: `/${locale}/services`,   mega: false          },
    { key: "decorating",  label: t("decorating"),   href: `/${locale}/decorating`, mega: "decorating"   },
    { key: "planning",    label: t("planning"),     href: `/${locale}/planning`,   mega: "planning"     },
    { key: "menu",        label: "Menu",            href: `/${locale}/menu`,       mega: false          },
    { key: "contact",     label: t("contact"),      href: `/${locale}/contact`,    mega: false          },
  ] as const;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileOpen]);

  function handleDecoratingEnter() {
    if (decoratingLeaveTimer.current) clearTimeout(decoratingLeaveTimer.current);
    setPlanningOpen(false);
    setDecoratingOpen(true);
  }
  function handleDecoratingLeave() {
    decoratingLeaveTimer.current = setTimeout(() => setDecoratingOpen(false), 120);
  }
  function handlePlanningEnter() {
    if (planningLeaveTimer.current) clearTimeout(planningLeaveTimer.current);
    setDecoratingOpen(false);
    setPlanningOpen(true);
  }
  function handlePlanningLeave() {
    planningLeaveTimer.current = setTimeout(() => setPlanningOpen(false), 120);
  }

  return (
    <>
      <style>{`
        .hdr-bar {
          transition:
            padding 650ms cubic-bezier(0.19,1,0.22,1),
            background 650ms cubic-bezier(0.19,1,0.22,1),
            box-shadow 650ms cubic-bezier(0.19,1,0.22,1),
            border-color 650ms cubic-bezier(0.19,1,0.22,1);
        }
        .hdr-gold-line {
          transition: opacity 650ms cubic-bezier(0.19,1,0.22,1);
        }
        .hdr-logo {
          transition: width 650ms cubic-bezier(0.19,1,0.22,1);
        }
        .hdr-nav-ind {
          transform-origin: center;
          transition: transform 380ms cubic-bezier(0.19,1,0.22,1);
        }
        .hdr-cta {
          background: linear-gradient(135deg, #c49a42 0%, #d8b05a 50%, #c49a42 100%);
          box-shadow: 0 4px 20px rgba(187,138,60,0.28);
          transition: box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.19,1,0.22,1);
          will-change: transform;
        }
        .hdr-cta:hover {
          box-shadow: 0 8px 36px rgba(187,138,60,0.55);
          transform: translateY(-2px) scale(1.02);
        }
        .hdr-cta:active {
          transform: scale(0.96);
          transition-duration: 0.15s;
        }
        .hdr-ham span {
          display: block;
          height: 1px;
          background: #bb8a3c;
          transition: all 380ms cubic-bezier(0.19,1,0.22,1);
        }
      `}</style>

      <header
        className={`hdr-bar fixed top-0 left-0 right-0 z-50 ${scrolled ? "py-[14px]" : "py-8 md:py-10"}`}
        style={{
          background: scrolled ? "rgba(18,9,42,0.90)" : "transparent",
          backdropFilter: scrolled ? "blur(14px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px) saturate(160%)" : "none",
          boxShadow: scrolled ? "0 8px 48px rgba(0,0,0,0.38), 0 1px 0 rgba(187,138,60,0.09)" : "none",
          borderBottom: scrolled ? "1px solid rgba(187,138,60,0.08)" : "1px solid transparent",
        }}
      >
        {/* Gold top highlight — fades in on scroll */}
        <div
          className="hdr-gold-line absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(187,138,60,0.6) 30%, rgba(187,138,60,0.6) 70%, transparent 100%)",
            opacity: scrolled ? 1 : 0,
          }}
        />

        <div className="relative flex items-center justify-between px-6 md:px-14 max-w-[1440px] 2xl:max-w-[1600px] mx-auto">

          {/* Logo */}
          <Link href={`/${locale}`} className="relative z-[60] no-underline flex items-center flex-shrink-0">
            <img
              src="/images/elite-logo.webp"
              className="hdr-logo"
              style={{ width: scrolled ? "44px" : "68px" }}
              alt="Elie Logo"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[10.5px] tracking-[0.15em] uppercase">
            {NAV.map((item) => {
              const isActive = item.href !== `/${locale}`
                ? pathname.startsWith(item.href)
                : pathname === `/${locale}` || pathname === `/${locale}/`;

              if (item.mega === "decorating") {
                const active = pathname.startsWith(`/${locale}/decorating`);
                return (
                  <div key={item.key} onMouseEnter={handleDecoratingEnter} onMouseLeave={handleDecoratingLeave} className="relative">
                    <button className={`relative text-[10.5px] tracking-[0.15em] uppercase font-medium transition-colors duration-300 whitespace-nowrap bg-transparent border-none cursor-pointer flex items-center gap-1.5 ${active || decoratingOpen ? "text-accent" : "text-cream/65 hover:text-cream"}`}>
                      {item.label}
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-350 ease-out ${decoratingOpen ? "rotate-180 text-accent" : ""}`}>
                        <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className={`hdr-nav-ind absolute -bottom-[3px] left-0 right-0 h-px bg-accent ${active || decoratingOpen ? "scale-x-100" : "scale-x-0"}`} />
                    </button>
                  </div>
                );
              }
              if (item.mega === "planning") {
                const active = pathname.startsWith(`/${locale}/planning`);
                return (
                  <div key={item.key} onMouseEnter={handlePlanningEnter} onMouseLeave={handlePlanningLeave} className="relative">
                    <button className={`relative text-[10.5px] tracking-[0.15em] uppercase font-medium transition-colors duration-300 whitespace-nowrap bg-transparent border-none cursor-pointer flex items-center gap-1.5 ${active || planningOpen ? "text-accent" : "text-cream/65 hover:text-cream"}`}>
                      {item.label}
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-350 ease-out ${planningOpen ? "rotate-180 text-accent" : ""}`}>
                        <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className={`hdr-nav-ind absolute -bottom-[3px] left-0 right-0 h-px bg-accent ${active || planningOpen ? "scale-x-100" : "scale-x-0"}`} />
                    </button>
                  </div>
                );
              }
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`relative no-underline transition-colors duration-300 group whitespace-nowrap ${isActive ? "text-accent" : "text-cream/65 hover:text-cream"}`}
                >
                  {item.label}
                  <span className={`hdr-nav-ind absolute -bottom-[3px] left-0 right-0 h-px bg-accent ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <LanguageSwitcher />
            <Link
              href="#booking"
              className="hdr-cta inline-flex items-center gap-2.5 px-7 py-[13px] rounded-full text-[10px] tracking-[0.18em] uppercase font-bold text-primary no-underline whitespace-nowrap"
            >
              {t("bookCta")}
              <span className="text-[10px] opacity-70">{isRTL ? "←" : "→"}</span>
            </Link>
          </div>

          {/* Mobile toggle — animated gold hamburger */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="hdr-ham lg:hidden relative z-[60] flex flex-col items-end justify-center gap-[5px] w-10 h-10 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span style={{ width: "22px", transform: mobileOpen ? "rotate(45deg) translateY(6px)" : undefined }} />
            <span style={{ width: mobileOpen ? "0px" : "14px", opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ width: "22px", transform: mobileOpen ? "rotate(-45deg) translateY(-6px)" : undefined }} />
          </button>
        </div>
      </header>

      {/* ══════════════════════════════════
          MEGA MENU — Decorating
          ══════════════════════════════════ */}
      <AnimatePresence>
        {decoratingOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.19, 1, 0.22, 1] }}
            onMouseEnter={handleDecoratingEnter}
            onMouseLeave={handleDecoratingLeave}
            className="fixed top-[72px] left-0 right-0 z-40 px-6 md:px-10 pb-6"
          >
            <div
              className="relative w-full rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10),0_4px_20px_rgba(187,138,60,0.08)] border border-accent/20"
              style={{ background: "#1e1347", backdropFilter: "blur(28px)" }}
            >
              {/* Bg accents */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 right-[25%] w-[50px] h-[180px] bg-accent/6 rounded-full rotate-[-18deg]" />
                <div className="absolute bottom-0 left-[8%] w-[36px] h-[120px] border border-accent/12 rounded-full rotate-[22deg]" />
              </div>

              {/* Header row */}
              <div className="relative z-10 px-8 pt-7 pb-5 border-b border-accent/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-px bg-accent opacity-60" />
                  <span className="text-[9px] tracking-[0.45em] uppercase font-bold" style={{ color: "rgba(199,154,59,0.6)" }}>
                    {isRTL ? "الديكور والتصميم" : "Décor & Design"}
                  </span>
                </div>
                <p className="font-serif italic" style={{ fontSize: "11px", color: "rgba(245,242,234,0.2)" }}>
                  {isRTL ? "تحويل كل مكان إلى لوحة فنية" : "Transforming every space into a work of art"}
                </p>
              </div>

              {/* 3 editorial panels — no images */}
              <div className="relative z-10 grid grid-cols-3 min-h-[300px] divide-x divide-accent/10">
                {DECORATING_ITEMS.map((item, ci) => (
                  <motion.div
                    key={item.slug}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + ci * 0.07, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <Link
                      href={`/${locale}/decorating/${item.slug}`}
                      onClick={() => setDecoratingOpen(false)}
                      className="group/card flex flex-col h-full min-h-[300px] px-8 py-7 no-underline transition-colors duration-300 hover:bg-white/[0.03]"
                    >
                      {/* Number */}
                      <span className="font-serif font-light leading-none mb-5 block tabular-nums" style={{ fontSize: "46px", color: "rgba(199,154,59,0.16)" }}>
                        0{ci + 1}
                      </span>

                      {/* Gold rule */}
                      <div className="w-7 h-px mb-5" style={{ background: "rgba(199,154,59,0.55)" }} />

                      {/* Eyebrow */}
                      <p className="mb-3 font-bold" style={{ fontSize: "9px", letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(199,154,59,0.55)" }}>
                        {isRTL ? item.eyebrowAr : item.eyebrow}
                      </p>

                      {/* Title */}
                      <h3 className="font-serif italic font-light leading-tight mb-4 transition-colors duration-300 group-hover/card:text-accent" style={{ fontSize: "24px", color: "#F5F2EA" }}>
                        {isRTL ? item.titleAr : item.title}
                      </h3>

                      {/* Description */}
                      <p className="flex-1 transition-colors duration-300 group-hover/card:text-cream/65" style={{ fontSize: "12px", color: "rgba(245,242,234,0.40)", lineHeight: 1.78 }}>
                        {isRTL ? item.descAr : item.desc}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 font-bold transition-colors duration-200 group-hover/card:text-accent mt-6" style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(199,154,59,0.58)" }}>
                        <span>{isRTL ? "اكتشف" : "Explore"}</span>
                        <span className="translate-x-0 group-hover/card:translate-x-1 transition-transform inline-block">
                          {isRTL ? "←" : "→"}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom strip */}
              <div className="border-t border-accent/15 px-6 py-4 flex items-center justify-between">
                <p className="text-[11px] text-cream/25 tracking-[0.15em] uppercase">
                  {isRTL ? "إيلي للتموين وتنظيم الفعاليات — الرياض، المملكة العربية السعودية" : "Elie Catering & Event Planning — Riyadh, Saudi Arabia"}
                </p>
                <Link
                  href={`/${locale}/decorating`}
                  onClick={() => setDecoratingOpen(false)}
                  className="text-[12px] tracking-[0.15em] uppercase text-accent/70 hover:text-accent transition-colors no-underline font-semibold"
                >
                  {isRTL ? "← جميع خدمات التزيين" : "View all decorating →"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════
          MEGA MENU — Planning
          ══════════════════════════════════ */}
      <AnimatePresence>
        {planningOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.19, 1, 0.22, 1] }}
            onMouseEnter={handlePlanningEnter}
            onMouseLeave={handlePlanningLeave}
            className="fixed top-[72px] left-0 right-0 z-40 px-6 md:px-10 pb-6"
          >
            <div
              className="relative w-full rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10),0_4px_20px_rgba(187,138,60,0.08)] border border-accent/20"
              style={{ background: "#1e1347", backdropFilter: "blur(28px)" }}
            >
              {/* Bg accents */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 right-[30%] w-[50px] h-[180px] bg-accent/6 rounded-full rotate-[-18deg]" />
                <div className="absolute bottom-0 left-[10%] w-[36px] h-[120px] border border-accent/12 rounded-full rotate-[22deg]" />
              </div>

              {/* 3 tall cinematic full-bleed cards */}
              <div className="relative z-10 grid grid-cols-3 min-h-[400px]">
                {PLANNING_ITEMS.map((item, ci) => (
                  <motion.div
                    key={item.slug}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.04 + ci * 0.08, ease: [0.19, 1, 0.22, 1] }}
                    className="relative"
                  >
                    <Link
                      href={`/${locale}/planning/${item.slug}`}
                      onClick={() => setPlanningOpen(false)}
                      className="group/card relative flex h-full min-h-[400px] overflow-hidden no-underline border-r border-white/10 last:border-0"
                    >
                      <Image
                        src={item.img}
                        alt={isRTL ? item.titleAr : item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                        sizes="500px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,6,20,0.92)] via-[rgba(10,6,20,0.35)] to-[rgba(10,6,20,0.05)]" />
                      <div className="absolute inset-0 bg-accent/0 group-hover/card:bg-accent/8 transition-colors duration-500" />

                      <div className="absolute top-5 left-5">
                        <span className="bg-accent text-primary px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase font-bold">
                          {isRTL ? item.tagAr : item.tag}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-7">
                        <p className="text-[9px] tracking-[0.35em] uppercase text-accent font-bold mb-2">
                          {isRTL ? item.eyebrowAr : item.eyebrow}
                        </p>
                        <h3 className="font-serif text-white text-[26px] font-light italic leading-tight mb-3">
                          {isRTL ? item.titleAr : item.title}
                        </h3>
                        <p className="text-[12px] text-white/55 leading-relaxed line-clamp-2 mb-5 group-hover/card:text-white/75 transition-colors">
                          {isRTL ? item.descAr : item.desc}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-accent/70 group-hover/card:text-accent transition-colors font-bold">
                          <span>{isRTL ? "اكتشف" : "Explore"}</span>
                          <span className="translate-x-0 group-hover/card:translate-x-1 transition-transform">
                            {isRTL ? "←" : "→"}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom strip */}
              <div className="border-t border-accent/15 px-6 py-4 flex items-center justify-between">
                <p className="text-[11px] text-cream/25 tracking-[0.15em] uppercase">
                  {isRTL ? "إيلي للتموين وتنظيم الفعاليات — الرياض، المملكة العربية السعودية" : "Elie Catering & Event Planning — Riyadh, Saudi Arabia"}
                </p>
                <Link
                  href={`/${locale}/planning`}
                  onClick={() => setPlanningOpen(false)}
                  className="text-[12px] tracking-[0.15em] uppercase text-accent/70 hover:text-accent transition-colors no-underline font-semibold"
                >
                  {isRTL ? "← جميع خدمات التخطيط" : "View all planning →"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.65, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[50] flex flex-col items-center justify-center lg:hidden overflow-hidden"
            style={{ background: "#12092a" }}
          >
            {/* Background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-15%] right-[-10%] w-[160px] h-[400px] bg-accent/10 rounded-full rotate-[-30deg]" />
              <div className="absolute top-[-5%] right-[5%] w-[80px] h-[200px] border border-accent/20 rounded-full rotate-[-30deg]" />
              <div className="absolute bottom-[-15%] left-[-10%] w-[160px] h-[400px] bg-accent/8 rounded-full rotate-[30deg]" />
              <div className="absolute bottom-[-5%] left-[5%] w-[80px] h-[200px] border border-accent/15 rounded-full rotate-[30deg]" />
            </div>

            {/* Logo watermark */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none">
              <img src="/images/elite-logo.webp" className="w-14 opacity-40" alt="" aria-hidden="true" />
            </div>

            <nav className="relative z-10 flex flex-col items-center gap-5">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`no-underline text-[clamp(22px,6vw,36px)] tracking-[0.12em] uppercase font-serif italic transition-all hover:text-accent block text-center ${
                      (item.href !== `/${locale}` ? pathname.startsWith(item.href) : pathname === `/${locale}` || pathname === `/${locale}/`)
                        ? "text-accent"
                        : "text-cream/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.72, ease: "easeOut" }}
                className="mt-4"
              >
                <LanguageSwitcher />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, ease: "easeOut" }}
                className="mt-2"
              >
                <Link
                  href="#booking"
                  onClick={() => setMobileOpen(false)}
                  className="px-10 py-4 rounded-full text-[10px] tracking-[0.24em] uppercase font-bold text-primary no-underline shadow-2xl transition-opacity hover:opacity-90 active:scale-95 inline-block"
                  style={{ background: "linear-gradient(135deg, #c49a42, #d8b05a)" }}
                >
                  {t("bookCta")}
                </Link>
              </motion.div>
            </nav>

            <div className="absolute bottom-10 text-accent/30 text-[9px] tracking-[0.35em] uppercase">
              {t("tagline")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
