"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { services } from "@/lib/services";

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
const MEGA_CATS = [
  { id: "catering", title: "Catering",         titleAr: "التموين",              eyebrow: "Food & Beverage",      eyebrowAr: "الأغذية والمشروبات",  color: "from-amber-900/80",  tag: "Our Signature", tagAr: "علامتنا المميزة" },
  { id: "planning", title: "Event Planning",   titleAr: "تنظيم الفعاليات",      eyebrow: "Full Coordination",    eyebrowAr: "التنسيق الكامل",       color: "from-violet-900/80", tag: "Most Booked",   tagAr: "الأكثر حجزاً"   },
  { id: "decor",    title: "Décor & Design",   titleAr: "الديكور والتصميم",     eyebrow: "Ambiance & Aesthetics",eyebrowAr: "الأجواء والجماليات",   color: "from-rose-900/70",   tag: "Bespoke",       tagAr: "مخصص"            },
  { id: "addons",   title: "Premium Add-ons",  titleAr: "الإضافات المميزة",     eyebrow: "Elevate Your Event",   eyebrowAr: "ارفع مستوى فعاليتك",  color: "from-slate-900/80",  tag: "Exclusive",     tagAr: "حصري"            },
] as const;

const MEGA_FEATURED = {
  img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
  tag: "Signature Experience",
  tagAr: "تجربة مميزة",
  title: "Crafted for the extraordinary.",
  titleAr: "مصمم للاستثنائيين.",
  cta: "Book a Consultation",
  ctaAr: "احجز استشارة",
};

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [decoratingOpen, setDecoratingOpen] = useState(false);
  const [planningOpen, setPlanningOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const decoratingLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const planningLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const NAV = [
    { key: "home",        label: t("home"),        href: `/${locale}`,            mega: false          },
    { key: "about",       label: t("about"),        href: `/${locale}/about`,      mega: false          },
    { key: "services",    label: t("services"),     href: `/${locale}/services`,   mega: "services"     },
    { key: "decorating",  label: t("decorating"),   href: `/${locale}/decorating`, mega: "decorating"   },
    { key: "planning",    label: t("planning"),     href: `/${locale}/planning`,   mega: "planning"     },
    { key: "contact",     label: t("contact"),      href: `/${locale}/contact`,    mega: false          },
  ] as const;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileOpen]);

  function handleServicesEnter() {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setDecoratingOpen(false);
    setMegaOpen(true);
  }

  function handleServicesLeave() {
    leaveTimer.current = setTimeout(() => setMegaOpen(false), 120);
  }

  function handleDecoratingEnter() {
    if (decoratingLeaveTimer.current) clearTimeout(decoratingLeaveTimer.current);
    setMegaOpen(false);
    setDecoratingOpen(true);
  }

  function handleDecoratingLeave() {
    decoratingLeaveTimer.current = setTimeout(() => setDecoratingOpen(false), 120);
  }

  function handlePlanningEnter() {
    if (planningLeaveTimer.current) clearTimeout(planningLeaveTimer.current);
    setMegaOpen(false);
    setDecoratingOpen(false);
    setPlanningOpen(true);
  }

  function handlePlanningLeave() {
    planningLeaveTimer.current = setTimeout(() => setPlanningOpen(false), 120);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center justify-between px-6 md:px-14 ${
          scrolled
            ? "py-3 bg-primary/97 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.3)]"
            : "py-5 md:py-6 bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href={`/${locale}`} className="relative z-[60] no-underline flex items-center gap-3 flex-shrink-0">
          <img
            src="/images/elite-logo.webp"
            className={`transition-all duration-500 ${scrolled ? "w-12" : "w-16"}`}
            alt="Elie Logo"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] tracking-[0.14em] uppercase">
          {NAV.map((item) => {
            const isActive = item.href !== `/${locale}` && item.href !== "#booking"
              ? pathname.startsWith(item.href)
              : pathname === `/${locale}` || pathname === `/${locale}/`;

            if (item.mega === "services") {
              const active = pathname.startsWith(`/${locale}/services`);
              return (
                <div key={item.key} onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave} className="relative">
                  <button className={`relative text-[11px] tracking-[0.14em] uppercase font-medium transition-all duration-300 whitespace-nowrap bg-transparent border-none cursor-pointer flex items-center gap-1.5 ${active || megaOpen ? "text-accent" : "text-cream/70 hover:text-accent"}`}>
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}>
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${active || megaOpen ? "w-full" : "w-0"}`} />
                  </button>
                </div>
              );
            }
            if (item.mega === "decorating") {
              const active = pathname.startsWith(`/${locale}/decorating`);
              return (
                <div key={item.key} onMouseEnter={handleDecoratingEnter} onMouseLeave={handleDecoratingLeave} className="relative">
                  <button className={`relative text-[11px] tracking-[0.14em] uppercase font-medium transition-all duration-300 whitespace-nowrap bg-transparent border-none cursor-pointer flex items-center gap-1.5 ${active || decoratingOpen ? "text-accent" : "text-cream/70 hover:text-accent"}`}>
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-300 ${decoratingOpen ? "rotate-180" : ""}`}>
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${active || decoratingOpen ? "w-full" : "w-0"}`} />
                  </button>
                </div>
              );
            }
            if (item.mega === "planning") {
              const active = pathname.startsWith(`/${locale}/planning`);
              return (
                <div key={item.key} onMouseEnter={handlePlanningEnter} onMouseLeave={handlePlanningLeave} className="relative">
                  <button className={`relative text-[11px] tracking-[0.14em] uppercase font-medium transition-all duration-300 whitespace-nowrap bg-transparent border-none cursor-pointer flex items-center gap-1.5 ${active || planningOpen ? "text-accent" : "text-cream/70 hover:text-accent"}`}>
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-300 ${planningOpen ? "rotate-180" : ""}`}>
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${active || planningOpen ? "w-full" : "w-0"}`} />
                  </button>
                </div>
              );
            }
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative no-underline transition-all duration-300 hover:text-accent group whitespace-nowrap ${isActive ? "text-accent" : "text-cream/70"}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <LanguageSwitcher />
          <Link
            href="#booking"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[11px] tracking-[0.14em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
          >
            {t("bookCta")}
            <span className="text-[8px]">{isRTL ? "←" : "→"}</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="lg:hidden relative z-[60] text-accent bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </header>

      {/* ══════════════════════════════════
          MEGA MENU — Services
          ══════════════════════════════════ */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            ref={megaRef}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.19, 1, 0.22, 1] }}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
            className="fixed top-[72px] left-0 right-0 z-40 px-6 md:px-10 pb-6"
          >
            {/* Panel shell */}
            <div
              className="relative w-full rounded-[28px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.65)] border border-white/8"
              style={{ background: "rgba(22,14,34,0.98)", backdropFilter: "blur(28px)" }}
            >
              {/* Subtle capsule bg accents */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 right-[18%] w-[60px] h-[220px] bg-accent/5 rounded-full rotate-[-18deg]" />
                <div className="absolute bottom-0 left-[6%] w-[40px] h-[140px] border border-accent/8 rounded-full rotate-[22deg]" />
              </div>

              <div className="relative z-10 p-6 grid grid-cols-[1fr_260px] gap-5">

                {/* LEFT: 4 category columns */}
                <div className="grid grid-cols-4 gap-4">
                  {MEGA_CATS.map((cat, ci) => {
                    const catServices = services.filter((s) => s.category === cat.id);
                    const heroImg = catServices[0]?.img ?? "";
                    return (
                      <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 + ci * 0.06, ease: [0.19, 1, 0.22, 1] }}
                        className="group/card rounded-2xl overflow-hidden border border-white/8 hover:border-accent/35 transition-all duration-400 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] flex flex-col"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        {/* Category image header — links to category filter */}
                        <Link
                          href={`/${locale}/services?category=${cat.id}`}
                          onClick={() => setMegaOpen(false)}
                          className="relative block h-[150px] overflow-hidden flex-shrink-0 no-underline"
                        >
                          <Image
                            src={heroImg}
                            alt={isRTL ? cat.titleAr : cat.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                            sizes="240px"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-primary/30 to-transparent`} />
                          <div className="absolute inset-0 bg-primary/25 group-hover/card:bg-primary/10 transition-colors duration-500" />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase font-bold bg-accent/20 border border-accent/30 text-accent backdrop-blur-sm">
                              {isRTL ? cat.tagAr : cat.tag}
                            </span>
                          </div>
                          <div className="absolute top-3 right-3 w-4 h-8 rounded-full border border-white/15 rotate-[-12deg] group-hover/card:border-accent/30 transition-colors duration-400" />
                        </Link>

                        {/* Category title */}
                        <Link
                          href={`/${locale}/services?category=${cat.id}`}
                          onClick={() => setMegaOpen(false)}
                          className="block no-underline px-4 pt-3 pb-2"
                        >
                          <p className="text-[9px] tracking-[0.3em] uppercase text-accent/60 font-bold mb-1">
                            {isRTL ? cat.eyebrowAr : cat.eyebrow}
                          </p>
                          <h3 className="font-serif text-cream text-[17px] font-light italic leading-tight group-hover/card:text-accent transition-colors duration-300">
                            {isRTL ? cat.titleAr : cat.title}
                          </h3>
                        </Link>

                        {/* Individual service links */}
                        <ul className="flex-1 px-4 pb-4 space-y-1 mt-1">
                          {catServices.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/${locale}/services/${s.slug}`}
                                onClick={() => setMegaOpen(false)}
                                className="group/item flex items-center gap-2 no-underline py-0.5"
                              >
                                <span className="w-1 h-1 rounded-full bg-accent/35 flex-shrink-0 group-hover/item:bg-accent transition-colors duration-200" />
                                <span className="text-[12px] text-cream/55 group-hover/item:text-accent transition-colors duration-200 leading-snug">
                                  {isRTL ? s.titleAr : s.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>

                        {/* View all category link */}
                        <Link
                          href={`/${locale}/services?category=${cat.id}`}
                          onClick={() => setMegaOpen(false)}
                          className="block no-underline px-4 pb-4 pt-1 border-t border-white/6 mt-1"
                        >
                          <span className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-accent/45 hover:text-accent transition-colors duration-200 font-semibold">
                            {isRTL ? "استعرض الكل" : "View all"}
                            <span>{isRTL ? "←" : "→"}</span>
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* RIGHT: Featured panel */}
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                  className="relative rounded-2xl overflow-hidden border border-accent/20 flex flex-col"
                  style={{ minHeight: 360 }}
                >
                  <Image
                    src={MEGA_FEATURED.img}
                    alt="Featured"
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/10" />

                  {/* Capsule frame accents */}
                  <div className="absolute top-5 right-5 w-10 h-24 rounded-full border border-accent/22 rotate-[-14deg]" />
                  <div className="absolute top-8 right-9 w-6 h-14 rounded-full border border-accent/12 rotate-[-14deg]" />

                  {/* Content */}
                  <div className="relative z-10 mt-auto p-7">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-accent font-bold">
                      {isRTL ? MEGA_FEATURED.tagAr : MEGA_FEATURED.tag}
                    </span>
                    <h4 className="font-serif text-cream text-[26px] font-light italic leading-tight mt-2 mb-6">
                      {isRTL ? MEGA_FEATURED.titleAr : MEGA_FEATURED.title}
                    </h4>

                    <Link
                      href={`/${locale}/contact`}
                      onClick={() => setMegaOpen(false)}
                      className="inline-flex items-center gap-2 w-full justify-center px-5 py-3.5 rounded-full text-[12px] tracking-[0.18em] uppercase font-bold bg-accent text-primary no-underline transition-all duration-300 hover:bg-cream active:scale-95 shadow-[0_8px_28px_rgba(187,138,60,0.45)]"
                    >
                      {isRTL ? MEGA_FEATURED.ctaAr : MEGA_FEATURED.cta} <span>{isRTL ? "←" : "→"}</span>
                    </Link>

                    {/* Stats */}
                    <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
                      {(isRTL
                        ? [["14+", "سنة"], ["500+", "فعالية"]]
                        : [["14+", "Years"], ["500+", "Events"]]
                      ).map(([num, lbl]) => (
                        <div key={lbl}>
                          <p className="font-serif text-accent text-[28px] font-light leading-none">{num}</p>
                          <p className="text-[11px] tracking-[0.2em] uppercase text-cream/40 mt-1">{lbl}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom strip */}
              <div className="border-t border-white/6 px-6 py-4 flex items-center justify-between">
                <p className="text-[11px] text-cream/25 tracking-[0.15em] uppercase">
                  {isRTL ? "إيلي للتموين وتنظيم الفعاليات — الرياض، المملكة العربية السعودية" : "Elie Catering & Event Planning — Riyadh, Saudi Arabia"}
                </p>
                <Link
                  href={`/${locale}/services`}
                  onClick={() => setMegaOpen(false)}
                  className="text-[12px] tracking-[0.15em] uppercase text-accent/60 hover:text-accent transition-colors no-underline font-semibold"
                >
                  {isRTL ? "← جميع الخدمات" : "View all services →"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              className="relative w-full rounded-[28px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.65)] border border-white/8"
              style={{ background: "rgba(22,14,34,0.98)", backdropFilter: "blur(28px)" }}
            >
              {/* Bg accents */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 right-[25%] w-[50px] h-[180px] bg-accent/5 rounded-full rotate-[-18deg]" />
                <div className="absolute bottom-0 left-[8%] w-[36px] h-[120px] border border-accent/8 rounded-full rotate-[22deg]" />
              </div>

              <div className="relative z-10 p-6">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-px bg-accent" />
                  <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">Decorating</span>
                </div>

                {/* 3 cards */}
                <div className="grid grid-cols-3 gap-5">
                  {DECORATING_ITEMS.map((item, ci) => (
                    <motion.div
                      key={item.slug}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 + ci * 0.07, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <Link
                        href={`/${locale}/decorating/${item.slug}`}
                        onClick={() => setDecoratingOpen(false)}
                        className="group/card block no-underline rounded-2xl overflow-hidden border border-white/8 hover:border-accent/35 transition-all duration-400 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        {/* Image */}
                        <div className="relative h-[200px] overflow-hidden">
                          <Image
                            src={item.img}
                            alt={isRTL ? item.titleAr : item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                            sizes="360px"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-primary/30 to-transparent`} />
                          <div className="absolute inset-0 bg-primary/25 group-hover/card:bg-primary/10 transition-colors duration-500" />
                          <div className="absolute top-3 left-3">
                            <span className="px-3 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-bold bg-accent/20 border border-accent/30 text-accent backdrop-blur-sm">
                              {isRTL ? item.tagAr : item.tag}
                            </span>
                          </div>
                          <div className="absolute top-3 right-3 w-5 h-10 rounded-full border border-white/15 rotate-[-12deg] group-hover/card:border-accent/30 transition-colors duration-400" />
                          <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-accent/0 group-hover/card:bg-accent flex items-center justify-center transition-all duration-300 opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0">
                            <span className="text-primary text-[10px] font-bold">{isRTL ? "←" : "→"}</span>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="p-5">
                          <p className="text-[10px] tracking-[0.3em] uppercase text-accent/60 font-bold mb-1.5">
                            {isRTL ? item.eyebrowAr : item.eyebrow}
                          </p>
                          <h3 className="font-serif text-cream text-[20px] font-light italic leading-tight mb-3 group-hover/card:text-accent transition-colors duration-300">
                            {isRTL ? item.titleAr : item.title}
                          </h3>
                          <p className="text-[13px] text-cream/50 leading-relaxed group-hover/card:text-cream/70 transition-colors duration-300 line-clamp-3">
                            {isRTL ? item.descAr : item.desc}
                          </p>
                          <div className="mt-4 flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-accent/50 group-hover/card:text-accent transition-colors duration-300 font-semibold">
                            <span>{isRTL ? "اكتشف المزيد" : "Learn more"}</span>
                            <span className="translate-x-0 group-hover/card:translate-x-1 transition-transform duration-300">{isRTL ? "←" : "→"}</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom strip */}
              <div className="border-t border-white/6 px-6 py-4 flex items-center justify-between">
                <p className="text-[11px] text-cream/25 tracking-[0.15em] uppercase">
                  {isRTL ? "إيلي للتموين وتنظيم الفعاليات — الرياض، المملكة العربية السعودية" : "Elie Catering & Event Planning — Riyadh, Saudi Arabia"}
                </p>
                <Link
                  href={`/${locale}/decorating`}
                  onClick={() => setDecoratingOpen(false)}
                  className="text-[12px] tracking-[0.15em] uppercase text-accent/60 hover:text-accent transition-colors no-underline font-semibold"
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
              className="relative w-full rounded-[28px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.65)] border border-white/8"
              style={{ background: "rgba(22,14,34,0.98)", backdropFilter: "blur(28px)" }}
            >
              {/* Bg accents */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 right-[30%] w-[50px] h-[180px] bg-accent/5 rounded-full rotate-[-18deg]" />
                <div className="absolute bottom-0 left-[10%] w-[36px] h-[120px] border border-accent/8 rounded-full rotate-[22deg]" />
              </div>

              <div className="relative z-10 p-6">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-px bg-accent" />
                  <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">
                    {isRTL ? "التخطيط" : "Planning"}
                  </span>
                </div>

                {/* 3 cards */}
                <div className="grid grid-cols-3 gap-5">
                  {PLANNING_ITEMS.map((item, ci) => (
                    <motion.div
                      key={item.slug}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 + ci * 0.07, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <Link
                        href={`/${locale}/planning/${item.slug}`}
                        onClick={() => setPlanningOpen(false)}
                        className="group/card block no-underline rounded-2xl overflow-hidden border border-white/8 hover:border-accent/35 transition-all duration-400 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        {/* Image */}
                        <div className="relative h-[200px] overflow-hidden">
                          <Image
                            src={item.img}
                            alt={isRTL ? item.titleAr : item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                            sizes="360px"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-primary/30 to-transparent`} />
                          <div className="absolute inset-0 bg-primary/25 group-hover/card:bg-primary/10 transition-colors duration-500" />
                          <div className="absolute top-3 left-3">
                            <span className="px-3 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-bold bg-accent/20 border border-accent/30 text-accent backdrop-blur-sm">
                              {isRTL ? item.tagAr : item.tag}
                            </span>
                          </div>
                          <div className="absolute top-3 right-3 w-5 h-10 rounded-full border border-white/15 rotate-[-12deg] group-hover/card:border-accent/30 transition-colors duration-400" />
                          <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-accent/0 group-hover/card:bg-accent flex items-center justify-center transition-all duration-300 opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0">
                            <span className="text-primary text-[10px] font-bold">{isRTL ? "←" : "→"}</span>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="p-5">
                          <p className="text-[10px] tracking-[0.3em] uppercase text-accent/60 font-bold mb-1.5">
                            {isRTL ? item.eyebrowAr : item.eyebrow}
                          </p>
                          <h3 className="font-serif text-cream text-[20px] font-light italic leading-tight mb-3 group-hover/card:text-accent transition-colors duration-300">
                            {isRTL ? item.titleAr : item.title}
                          </h3>
                          <p className="text-[13px] text-cream/50 leading-relaxed group-hover/card:text-cream/70 transition-colors duration-300 line-clamp-3">
                            {isRTL ? item.descAr : item.desc}
                          </p>
                          <div className="mt-4 flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-accent/50 group-hover/card:text-accent transition-colors duration-300 font-semibold">
                            <span>{isRTL ? "اكتشف المزيد" : "Learn more"}</span>
                            <span className="translate-x-0 group-hover/card:translate-x-1 transition-transform duration-300">{isRTL ? "←" : "→"}</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom strip */}
              <div className="border-t border-white/6 px-6 py-4 flex items-center justify-between">
                <p className="text-[11px] text-cream/25 tracking-[0.15em] uppercase">
                  {isRTL ? "إيلي للتموين وتنظيم الفعاليات — الرياض، المملكة العربية السعودية" : "Elie Catering & Event Planning — Riyadh, Saudi Arabia"}
                </p>
                <Link
                  href={`/${locale}/planning`}
                  onClick={() => setPlanningOpen(false)}
                  className="text-[12px] tracking-[0.15em] uppercase text-accent/60 hover:text-accent transition-colors no-underline font-semibold"
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
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-primary z-[50] flex flex-col items-center justify-center lg:hidden overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-15%] right-[-10%] w-[160px] h-[400px] bg-accent/10 rounded-full rotate-[-30deg]" />
              <div className="absolute top-[-5%] right-[5%] w-[80px] h-[200px] border border-accent/20 rounded-full rotate-[-30deg]" />
              <div className="absolute bottom-[-15%] left-[-10%] w-[160px] h-[400px] bg-accent/8 rounded-full rotate-[30deg]" />
              <div className="absolute bottom-[-5%] left-[5%] w-[80px] h-[200px] border border-accent/15 rounded-full rotate-[30deg]" />
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
                className="mt-3"
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
                  className="px-10 py-4 rounded-full text-[10px] tracking-[0.24em] uppercase font-bold bg-accent text-primary no-underline shadow-2xl transition-all hover:bg-cream active:scale-95"
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
