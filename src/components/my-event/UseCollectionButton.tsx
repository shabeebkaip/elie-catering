"use client";

import { useLocale } from "next-intl";
import { useMyEvent } from "@/state/MyEventProvider";

const GOLD = "#C9A15B";

interface Props {
  collectionId: string;
  collectionName: string;
  dishIds: string[];
  variant?: "primary" | "secondary";
  className?: string;
}

/** "Use this collection" — loads the entire collection into My Event.
 *  Confirms before replacing existing selections. */
export default function UseCollectionButton({
  collectionId,
  collectionName,
  dishIds,
  variant = "primary",
  className,
}: Props) {
  const locale = useLocale();
  const isAr = locale === "ar";
  const { state, dispatch, isHydrated } = useMyEvent();

  const onClick = () => {
    if (!isHydrated) return;

    const hasExisting = state.selections.length > 0;
    if (hasExisting) {
      const ok = window.confirm(
        isAr
          ? `استبدال ${state.selections.length} طبق في فعاليتي بأطباق "${collectionName}"؟`
          : `Replace your ${state.selections.length} selected dish${state.selections.length === 1 ? "" : "es"} with "${collectionName}"?`,
      );
      if (!ok) return;
    }

    dispatch({ type: "useCollection", collectionId, dishIds });
    // Soft confirmation via tray opening would be ideal — for v1, the count badge
    // updating in the tray is feedback enough. Future: emit an event the tray listens to.
  };

  const label = isAr ? "استخدم هذه التشكيلة" : "Use this collection";

  if (variant === "secondary") {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={!isHydrated}
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 22px",
          borderRadius: 2,
          background: "transparent",
          color: GOLD,
          border: `1px solid ${GOLD}`,
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontWeight: 600,
          cursor: isHydrated ? "pointer" : "default",
          transition: "background-color 200ms",
        }}
      >
        {label}
        <span aria-hidden>{isAr ? "←" : "→"}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!isHydrated}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 28px",
        borderRadius: 999,
        background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
        color: "#050505",
        border: "none",
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        fontWeight: 700,
        cursor: isHydrated ? "pointer" : "default",
        boxShadow: "0 12px 36px rgba(201,161,91,0.32)",
        transition: "transform 200ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {label}
      <span aria-hidden>{isAr ? "←" : "→"}</span>
    </button>
  );
}
