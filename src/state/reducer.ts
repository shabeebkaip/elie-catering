import type { EventId, MyEventContact, MyEventState } from "@/content/types";
import { EMPTY_STATE } from "./storage";

export type MyEventAction =
  | { type: "hydrate"; payload: MyEventState }
  | { type: "setEventType"; id: EventId | null }
  | { type: "setGuestCount"; n: number | null }
  | { type: "setEventDate"; date: string | null }
  | { type: "setVenue"; venue: string | null }
  | { type: "addDish"; dishId: string }
  | { type: "removeDish"; dishId: string }
  | { type: "setDishNote"; dishId: string; note: string }
  | { type: "useCollection"; collectionId: string; dishIds: string[] }
  | { type: "clearSelections" }
  | { type: "setContact"; patch: Partial<MyEventContact> }
  | { type: "clearContact" }
  | { type: "setNotes"; notes: string }
  | { type: "clearAll" };

export function myEventReducer(state: MyEventState, action: MyEventAction): MyEventState {
  switch (action.type) {
    case "hydrate":
      return action.payload;

    case "setEventType":
      return { ...state, eventTypeId: action.id };

    case "setGuestCount":
      return { ...state, guestCount: action.n };

    case "setEventDate":
      return { ...state, eventDate: action.date };

    case "setVenue":
      return { ...state, venue: action.venue };

    case "addDish": {
      if (state.selections.some((s) => s.dishId === action.dishId)) return state;
      return {
        ...state,
        selections: [...state.selections, { dishId: action.dishId }],
      };
    }

    case "removeDish":
      return {
        ...state,
        selections: state.selections.filter((s) => s.dishId !== action.dishId),
      };

    case "setDishNote":
      return {
        ...state,
        selections: state.selections.map((s) =>
          s.dishId === action.dishId ? { ...s, note: action.note } : s,
        ),
      };

    case "useCollection": {
      // Replace selections with the collection's dishes, preserve other state.
      return {
        ...state,
        collectionId: action.collectionId,
        selections: action.dishIds.map((dishId) => ({ dishId })),
      };
    }

    case "clearSelections":
      return { ...state, selections: [], collectionId: null };

    case "setContact":
      return { ...state, contact: { ...state.contact, ...action.patch } };

    case "clearContact":
      return { ...state, contact: EMPTY_STATE.contact };

    case "setNotes":
      return { ...state, notes: action.notes };

    case "clearAll":
      return EMPTY_STATE;
  }
}
