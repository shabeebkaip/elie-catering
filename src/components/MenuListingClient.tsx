"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export type MenuCategoryItem = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  dishCount: number;
  tags?: string[];
};

/* ── Design tokens ── */
const BG = "#0f0823";
const PAGE = "#FAF8F5";
const CARD = "#FFFEFB";
const CHARCOAL = "#1C1917";
const STONE = "#78716C";
const GOLD = "#B8945A";
const TAG_BG = "#F5F0E8";
const CARD_BORDER = "rgba(184,148,90,0.14)";
const CARD_SHADOW = "0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)";
const CARD_SHADOW_HOVER = "0 8px 28px rgba(184,148,90,0.14), 0 2px 8px rgba(0,0,0,0.04)";
const PILL_BORDER = "rgba(0,0,0,0.10)";

/* ── Category tags map ── */
const CATEGORY_TAGS: Record<string, string[]> = {
  "finger-food": ["Cocktail", "Corporate", "Weddings"],
  "coffee-break": ["Corporate", "Conferences", "Seminars"],
  "live-cooking-stations": ["Weddings", "Gala", "Outdoor"],
  "bbq-section": ["Outdoor", "Family", "Corporate"],
  "eastern-italian-cuisine": ["Weddings", "Gala", "Banquets"],
  "seafood-sushi": ["Cocktail", "VIP", "Business"],
  "specialty-arabic-coffee": ["Majlis", "Corporate", "Weddings"],
  "birthday-menu": ["Birthdays", "Family", "Private"],
};

export default function MenuListingClient({
  categories,
  locale,
}: {
  categories: MenuCategoryItem[];
  locale: string;
}) {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("all");
  const base = `/${locale}`;

  const visible = useMemo(() => {
    const q = search.toLowerCase();
    return categories.filter((c) => {
      const matchQ =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.eyebrow.toLowerCase().includes(q);
      const matchCat = active === "all" || c.slug === active;
      return matchQ && matchCat;
    });
  }, [categories, search, active]);

  return (
    <div style={{ background: PAGE, minHeight: "100vh" }}>

      {/* ── Compact dark header ────────────────────────── */}
      <div
        style={{
          background: BG,
          paddingTop: "clamp(80px, 9.5vw, 104px)",
          paddingBottom: "clamp(18px, 2.5vw, 28px)",
          paddingLeft: "clamp(20px, 6vw, 96px)",
          paddingRight: "clamp(20px, 6vw, 96px)",
        }}
      >
        <p
          style={{
            color: "rgba(184,148,90,0.55)",
            fontSize: "10px",
            letterSpacing: "0.44em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "10px",
          }}
        >
          Elie Catering · Menu
        </p>
        <h1
          className="font-serif font-light"
          style={{
            color: "#ede5ff",
            fontSize: "clamp(24px, 3.6vw, 42px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "6px",
          }}
        >
          Our Menu
        </h1>
        <p
          style={{
            color: "rgba(237,229,255,0.42)",
            fontSize: "clamp(12px, 0.95vw, 13.5px)",
            fontWeight: 300,
            lineHeight: 1.65,
            marginBottom: "clamp(14px, 2vw, 22px)",
          }}
        >
          Curated culinary experiences for every occasion
        </p>

        {/* Search */}
        <div style={{ position: "relative", maxWidth: "400px" }}>
          <svg
            width="13" height="13"
            viewBox="0 0 24 24" fill="none"
            stroke="rgba(184,148,90,0.55)"
            strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
            style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search dishes or categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full font-light outline-none"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(184,148,90,0.20)",
              borderRadius: "999px",
              padding: "12px 18px 12px 42px",
              color: "#ede5ff",
              fontSize: "13px",
              letterSpacing: "0.01em",
            }}
          />
        </div>
      </div>

      {/* ── Sticky category pills ──────────────────────── */}
      <div
        className="sticky z-20 overflow-x-auto"
        style={{
          top: "72px",
          background: PAGE,
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          scrollbarWidth: "none",
        }}
      >
        <div style={{ display: "flex", gap: "8px", padding: "11px clamp(20px, 6vw, 96px)", width: "max-content" }}>
          {[{ slug: "all", title: "All" }, ...categories].map((c) => (
            <button
              key={c.slug}
              onClick={() => setActive(c.slug)}
              style={{
                background: active === c.slug ? CHARCOAL : "transparent",
                color: active === c.slug ? "#fff" : STONE,
                border: `1px solid ${active === c.slug ? CHARCOAL : PILL_BORDER}`,
                borderRadius: "999px",
                padding: "6px 17px",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
              }}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      {/* ── Category cards grid ───────────────────────── */}
      <div style={{ padding: "clamp(24px, 4vw, 48px) clamp(20px, 6vw, 96px) clamp(48px, 8vw, 88px)" }}>
        {visible.length === 0 ? (
          <div className="py-20 text-center" style={{ color: STONE }}>
            <p style={{ fontSize: "14px" }}>No results for &ldquo;{search}&rdquo;</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {visible.map((cat, i) => {
              const tags = CATEGORY_TAGS[cat.slug] ?? [];
              return (
                <Link
                  key={cat.slug}
                  href={`${base}/menu/${cat.slug}`}
                  className="group"
                  style={{ textDecoration: "none" }}
                >
                  <article
                    style={{
                      background: CARD,
                      borderRadius: "28px",
                      border: `1px solid ${CARD_BORDER}`,
                      boxShadow: CARD_SHADOW,
                      overflow: "hidden",
                      transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                    className="group-hover:-translate-y-0.5"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = CARD_SHADOW_HOVER;
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,148,90,0.28)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = CARD_SHADOW;
                      (e.currentTarget as HTMLElement).style.borderColor = CARD_BORDER;
                    }}
                  >
                    {/* Image — square 1:1 */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                      <Image
                        src={cat.heroImage}
                        alt={cat.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/15 to-transparent" />
                      <span
                        className="absolute top-4 left-4 font-serif font-light select-none"
                        style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)", letterSpacing: "0.04em" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Card body */}
                    <div style={{ padding: "18px 20px 20px" }}>

                      {/* Title row */}
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3
                          className="font-serif font-light leading-snug"
                          style={{ color: CHARCOAL, fontSize: "17px" }}
                        >
                          {cat.title}
                        </h3>
                        <span
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 mt-0.5"
                          style={{ color: GOLD, fontSize: "14px" }}
                        >
                          →
                        </span>
                      </div>

                      {/* Dish count */}
                      <p
                        style={{
                          color: STONE,
                          fontSize: "12px",
                          fontWeight: 400,
                          marginBottom: "12px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {cat.dishCount} dishes
                        <span
                          style={{
                            display: "inline-block",
                            width: "3px",
                            height: "3px",
                            borderRadius: "999px",
                            background: STONE,
                            opacity: 0.4,
                            verticalAlign: "middle",
                            margin: "0 7px 1px",
                          }}
                        />
                        {cat.eyebrow}
                      </p>

                      {/* Tags */}
                      {tags.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                          {tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              style={{
                                background: TAG_BG,
                                border: "1px solid rgba(184,148,90,0.20)",
                                color: STONE,
                                fontSize: "9.5px",
                                fontWeight: 500,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                padding: "3px 10px",
                                borderRadius: "999px",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
