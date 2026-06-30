"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { dishes } from "@/content/dishes";
import { categories } from "@/content/categories";
import type { Dish, CategoryId } from "@/content/types";
import { useMyEvent } from "@/state/MyEventProvider";

const GOLD  = "#C9A15B";
const CREAM = "#F5F1E8";
const INK   = "#0a0a0a";

// One-time index. Stable across renders — module-level.
const dishIndex = new Map<string, Dish>(dishes.map((d) => [d.id, d]));
const categoryIndex = new Map<CategoryId, (typeof categories)[number]>(
  categories.map((c) => [c.id, c]),
);

export default function MyEventTray() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const { state, dispatch, isHydrated } = useMyEvent();
  const [open, setOpen] = useState(false);

  const count = state.selections.length;

  // Resolve dish IDs → grouped-by-category. Memo per selection change.
  const grouped = useMemo(() => {
    const map = new Map<CategoryId, Dish[]>();
    for (const sel of state.selections) {
      const dish = dishIndex.get(sel.dishId);
      if (!dish) continue;
      const list = map.get(dish.categoryId) ?? [];
      list.push(dish);
      map.set(dish.categoryId, list);
    }
    // Preserve category display order.
    return [...categories]
      .filter((c) => map.has(c.id))
      .map((c) => ({ category: c, items: map.get(c.id)! }));
  }, [state.selections]);

  // Close on Escape.
  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onKey]);

  // Pre-hydration: render nothing. SSR & client agree on absence.
  if (!isHydrated) return null;

  return (
    <>
      {/* ── TRAY ───────────────────────────────────────────────────── */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={isAr ? `فعاليتي (${count})` : `My Event (${count})`}
        className="my-event-trigger"
        style={{
          position: "fixed",
          bottom: "calc(20px + env(safe-area-inset-bottom))",
          // Pinned left in both LTR and RTL — WhatsApp owns the right side.
          left: 24,
          zIndex: 45,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 18px",
          borderRadius: 999,
          background: "rgba(10,10,10,0.92)",
          border: `1px solid ${count > 0 ? GOLD : "rgba(201,161,91,0.28)"}`,
          color: CREAM,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 16px 48px -12px rgba(0,0,0,0.48)",
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontWeight: 600,
          cursor: "pointer",
          transition: "border-color 200ms",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M3 5.5L8 2L13 5.5V11L8 14L3 11V5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M3 5.5L8 9L13 5.5M8 9V14" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
        <span>{isAr ? "فعاليتي" : "My Event"}</span>
        <span
          aria-hidden
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 22,
            height: 22,
            padding: "0 7px",
            borderRadius: 999,
            background: count > 0 ? GOLD : "rgba(201,161,91,0.18)",
            color: count > 0 ? "#050505" : "rgba(245,241,232,0.55)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0,
          }}
        >
          {count}
        </span>
      </button>

      {/* ── SHEET ──────────────────────────────────────────────────── */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            aria-hidden
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 60,
              background: "rgba(18,9,42,0.72)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          />

          {/* Sheet — full-screen on mobile, side panel on desktop */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label={isAr ? "فعاليتي" : "My Event"}
            className="my-event-sheet"
            style={{
              position: "fixed",
              zIndex: 65,
              background: INK,
              color: CREAM,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 32px 96px -16px rgba(0,0,0,0.64)",
            }}
          >
            {/* Header */}
            <header
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 24px 16px",
                borderBottom: "1px solid rgba(201,161,91,0.12)",
              }}
            >
              <div>
                <div
                  style={{
                    color: GOLD,
                    fontSize: 9,
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  {isAr ? "فعاليتي" : "My Event"}
                </div>
                <div
                  className="font-serif"
                  style={{ fontSize: 22, fontStyle: isAr ? "normal" : "italic", color: CREAM }}
                >
                  {count === 0
                    ? isAr ? "ابدأ تجميع فعاليتك" : "Begin your event"
                    : isAr ? `${count} طبق مختار` : `${count} dish${count === 1 ? "" : "es"} selected`}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={isAr ? "إغلاق" : "Close"}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: "transparent",
                  border: "1px solid rgba(201,161,91,0.22)",
                  color: CREAM,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            </header>

            {/* Body */}
            <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}>
              {count === 0 ? (
                <EmptyState isAr={isAr} onClose={() => setOpen(false)} locale={locale} />
              ) : (
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {grouped.map(({ category, items }) => (
                    <li key={category.id} style={{ marginBottom: 28 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          marginBottom: 12,
                        }}
                      >
                        <div style={{ width: 16, height: 1, background: GOLD }} />
                        <span
                          style={{
                            color: GOLD,
                            fontSize: 10,
                            letterSpacing: "0.32em",
                            textTransform: "uppercase",
                            fontWeight: 600,
                          }}
                        >
                          {isAr ? category.name.ar : category.name.en}
                        </span>
                      </div>
                      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                        {items.map((dish) => (
                          <li
                            key={dish.id}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 14,
                              padding: "12px 0",
                              borderBottom: "1px solid rgba(245,241,232,0.06)",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: 56,
                                height: 56,
                                borderRadius: 4,
                                overflow: "hidden",
                                background: "rgba(245,241,232,0.04)",
                                flexShrink: 0,
                              }}
                            >
                              <Image
                                src={dish.image}
                                alt=""
                                fill
                                sizes="56px"
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div
                                className="font-serif"
                                style={{
                                  color: CREAM,
                                  fontSize: 15,
                                  fontStyle: isAr ? "normal" : "italic",
                                  lineHeight: 1.3,
                                }}
                              >
                                {isAr ? dish.name.ar : dish.name.en}
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => dispatch({ type: "removeDish", dishId: dish.id })}
                              aria-label={isAr ? `إزالة ${dish.name.ar}` : `Remove ${dish.name.en}`}
                              style={{
                                background: "transparent",
                                border: "none",
                                color: "rgba(245,241,232,0.36)",
                                cursor: "pointer",
                                padding: 8,
                                fontSize: 14,
                              }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = GOLD; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(245,241,232,0.36)"; }}
                            >
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                                <path d="M2 4H12M5 4V2.5C5 2.2 5.2 2 5.5 2H8.5C8.8 2 9 2.2 9 2.5V4M3.5 4L4 12C4 12.3 4.2 12.5 4.5 12.5H9.5C9.8 12.5 10 12.3 10 12C10.2 9 10.5 4 10.5 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer — CTA + clear */}
            {count > 0 && (
              <footer
                style={{
                  padding: "16px 24px calc(20px + env(safe-area-inset-bottom))",
                  borderTop: "1px solid rgba(201,161,91,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setOpen(false)}
                  className="my-event-cta"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "14px 24px",
                    borderRadius: 999,
                    background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
                    color: "#050505",
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 12px 36px rgba(201,161,91,0.32)",
                  }}
                >
                  {isAr ? "اطلب عرض السعر" : "Request a Proposal"}
                  <span aria-hidden>{isAr ? "←" : "→"}</span>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== "undefined" && !window.confirm(isAr ? "إفراغ فعاليتي؟" : "Clear My Event?")) return;
                    dispatch({ type: "clearSelections" });
                  }}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "rgba(245,241,232,0.36)",
                    fontSize: 10.5,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: "4px 0",
                  }}
                >
                  {isAr ? "إفراغ التحديد" : "Clear selection"}
                </button>
              </footer>
            )}
          </aside>

          <style jsx>{`
            .my-event-sheet {
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
            }
            @media (min-width: 768px) {
              .my-event-sheet {
                top: 0;
                bottom: 0;
                ${isAr ? "left: 0;" : "right: 0;"}
                ${isAr ? "right: auto;" : "left: auto;"}
                width: 440px;
              }
            }
          `}</style>
        </>
      )}
    </>
  );
}

function EmptyState({
  isAr,
  onClose,
  locale,
}: {
  isAr: boolean;
  onClose: () => void;
  locale: string;
}) {
  return (
    <div style={{ padding: "40px 8px", textAlign: "center" }}>
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 999,
          background: "rgba(201,161,91,0.08)",
          border: "1px solid rgba(201,161,91,0.22)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M3 5.5L8 2L13 5.5V11L8 14L3 11V5.5Z" stroke={GOLD} strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M3 5.5L8 9L13 5.5M8 9V14" stroke={GOLD} strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      </div>
      <p
        className="font-serif"
        style={{
          color: CREAM,
          fontSize: 17,
          lineHeight: 1.5,
          fontStyle: isAr ? "normal" : "italic",
          marginBottom: 8,
          maxWidth: 280,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {isAr ? "ابدأ من تشكيلة منسّقة" : "Start from a curated collection"}
      </p>
      <p
        style={{
          color: "rgba(245,241,232,0.42)",
          fontSize: 13,
          lineHeight: 1.6,
          marginBottom: 24,
          maxWidth: 280,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {isAr
          ? "اختر تشكيلة من قائمتنا وستظهر أطباقها هنا — قابلة للتعديل قبل طلب العرض."
          : "Pick a collection from our menu and its dishes appear here — edit freely before requesting a proposal."}
      </p>
      <Link
        href={`/${locale}/menu`}
        onClick={onClose}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 22px",
          borderRadius: 2,
          background: "transparent",
          color: GOLD,
          border: `1px solid ${GOLD}`,
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        {isAr ? "تصفّح المجموعات" : "Browse Collections"}
        <span aria-hidden>{isAr ? "←" : "→"}</span>
      </Link>
    </div>
  );
}
