"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
} from "react";
import type { MyEventState } from "@/content/types";
import { EMPTY_STATE, loadState, saveState } from "./storage";
import { myEventReducer, type MyEventAction } from "./reducer";

interface MyEventContextValue {
  state: MyEventState;
  dispatch: Dispatch<MyEventAction>;
  /** True once we've read localStorage. Use this to gate count-badge UI etc.
   *  Before hydration: render a stable placeholder to avoid SSR mismatch. */
  isHydrated: boolean;
}

const Ctx = createContext<MyEventContextValue | null>(null);

const SAVE_DEBOUNCE_MS = 300;

export function MyEventProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(myEventReducer, EMPTY_STATE);
  const [isHydrated, setIsHydrated] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hydrate from localStorage once on mount.
  useEffect(() => {
    const stored = loadState();
    if (stored !== EMPTY_STATE) {
      dispatch({ type: "hydrate", payload: stored });
    }
    setIsHydrated(true);
  }, []);

  // Debounced persistence. Only writes after hydration so we don't
  // overwrite stored state with the empty initial value.
  useEffect(() => {
    if (!isHydrated) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => saveState(state), SAVE_DEBOUNCE_MS);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [state, isHydrated]);

  return <Ctx.Provider value={{ state, dispatch, isHydrated }}>{children}</Ctx.Provider>;
}

export function useMyEvent(): MyEventContextValue {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useMyEvent must be used within MyEventProvider");
  return ctx;
}

/** Derived selector — true when this dish is in the current event. */
export function useIsInMyEvent(dishId: string): boolean {
  const { state } = useMyEvent();
  return state.selections.some((s) => s.dishId === dishId);
}
