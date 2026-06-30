import type { MyEventState } from "@/content/types";

/**
 * My Event — localStorage persistence layer.
 *
 *  - One key, one JSON blob.
 *  - Versioned schema. Bump SCHEMA_VERSION on any breaking shape change;
 *    old state hard-resets on load.
 *  - SSR-safe: every browser-API call is guarded.
 *  - iOS Safari Private Browsing throws on setItem — wrapped in try/catch.
 *  - Stale state (>60 days) is reset on load so dish renames/removals
 *    don't surface zombie selections.
 *  - We store IDs only, never resolved dish objects.
 */

const STORAGE_KEY = "elie:my-event";
const SCHEMA_VERSION = 1 as const;
const MAX_AGE_DAYS = 60;
const MAX_AGE_MS = MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

export const EMPTY_STATE: MyEventState = {
  version: SCHEMA_VERSION,
  eventTypeId: null,
  guestCount: null,
  eventDate: null,
  hijriDate: null,
  venue: null,
  selections: [],
  collectionId: null,
  contact: {
    name: "",
    phone: "",
    email: "",
    preferredContact: "whatsapp",
  },
  notes: "",
  updatedAt: "",
};

export function loadState(): MyEventState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    const parsed = JSON.parse(raw) as MyEventState;
    if (parsed?.version !== SCHEMA_VERSION) return EMPTY_STATE;
    if (parsed.updatedAt) {
      const age = Date.now() - new Date(parsed.updatedAt).getTime();
      if (Number.isFinite(age) && age > MAX_AGE_MS) return EMPTY_STATE;
    }
    return parsed;
  } catch {
    return EMPTY_STATE;
  }
}

export function saveState(state: MyEventState): void {
  if (typeof window === "undefined") return;
  try {
    const stamped: MyEventState = { ...state, updatedAt: new Date().toISOString() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stamped));
  } catch {
    // Quota exceeded or iOS Private mode — degrade silently.
    // State is still kept in React; we just lose persistence for this user.
  }
}

export function clearState(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Best effort.
  }
}
