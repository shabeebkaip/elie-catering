"use client";

import { useLocale } from "next-intl";
import { useMyEvent, useIsInMyEvent } from "@/state/MyEventProvider";

const GOLD = "#C9A15B";

type Variant = "ghost" | "card" | "inline";

interface Props {
  dishId: string;
  /** ghost = subtle plus icon (dish grids), card = labelled button (dish detail),
   *  inline = small text-only (collection lists) */
  variant?: Variant;
  className?: string;
}

/** "Add to My Event" — toggles. Idempotent: adding an already-added dish is a no-op,
 *  tapping when added removes. Per spec: this is NEVER "Add to Cart". */
export default function AddToEventButton({ dishId, variant = "ghost", className }: Props) {
  const locale = useLocale();
  const isAr = locale === "ar";
  const { dispatch, isHydrated } = useMyEvent();
  const isIn = useIsInMyEvent(dishId);

  // Pre-hydration: render a neutral placeholder so SSR & client agree.
  const ready = isHydrated;

  const onClick = () => {
    if (!ready) return;
    if (isIn) dispatch({ type: "removeDish", dishId });
    else dispatch({ type: "addDish", dishId });
  };

  const labelAdd    = isAr ? "أضف إلى فعاليتي" : "Add to My Event";
  const labelInEvent = isAr ? "في فعاليتي"    : "In My Event";
  const ariaLabel = isIn ? labelInEvent : labelAdd;

  if (variant === "ghost") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        aria-pressed={isIn}
        disabled={!ready}
        className={className}
        style={{
          width: 36,
          height: 36,
          borderRadius: 999,
          background: isIn ? GOLD : "rgba(201,161,91,0.10)",
          border: `1px solid ${isIn ? GOLD : "rgba(201,161,91,0.28)"}`,
          color: isIn ? "#050505" : GOLD,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: ready ? "pointer" : "default",
          transition: "background-color 200ms cubic-bezier(0.22,1,0.36,1), color 200ms",
        }}
      >
        {isIn ? (
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
            <path d="M3 6.5L5.5 9L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
            <path d="M6.5 2.5V10.5M2.5 6.5H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>
    );
  }

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={!ready}
        aria-pressed={isIn}
        className={className}
        style={{
          background: "transparent",
          border: "none",
          color: isIn ? GOLD : "rgba(245,241,232,0.62)",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 600,
          cursor: ready ? "pointer" : "default",
          padding: "4px 0",
          transition: "color 200ms",
        }}
      >
        {isIn ? `✓ ${labelInEvent}` : `+ ${labelAdd}`}
      </button>
    );
  }

  // card variant — labelled button for dish detail pages
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!ready}
      aria-pressed={isIn}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 22px",
        borderRadius: 2,
        background: isIn ? GOLD : "transparent",
        color: isIn ? "#050505" : GOLD,
        border: `1px solid ${GOLD}`,
        fontSize: 11,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        fontWeight: 600,
        cursor: ready ? "pointer" : "default",
        transition: "background-color 200ms cubic-bezier(0.22,1,0.36,1), color 200ms",
      }}
    >
      <span aria-hidden style={{ display: "inline-flex" }}>
        {isIn ? (
          <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
            <path d="M3 6.5L5.5 9L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
            <path d="M6.5 2.5V10.5M2.5 6.5H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </span>
      {isIn ? labelInEvent : labelAdd}
    </button>
  );
}
