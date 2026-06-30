/**
 * Elie Catering — Content Model
 *
 * Single source of truth for the static content layer.
 * Consumed by Server Components for SSG and by Client Components
 * (My Event, Quote Form) via lookup helpers in src/lib/content.ts.
 *
 * Hard rules:
 *  - No prices, calories, weights, stock, or per-person costs.
 *  - All user-facing strings are bilingual.
 *  - IDs are stable slugs — never reuse, never rename without a migration.
 */

export type Locale = "en" | "ar";

export interface Bilingual {
  en: string;
  ar: string;
}

/* ─── EVENT TYPES (Services) ─────────────────────────────────────────── */

export type EventId =
  | "weddings"
  | "corporate"
  | "vip"
  | "private"
  | "birthdays"
  | "ramadan-eid"
  | "government";

export interface EventType {
  id: EventId;
  slug: string;
  name: Bilingual;
  eyebrow: Bilingual;
  tagline: Bilingual;
  description: Bilingual;
  body: Bilingual;
  capacity: { min: number; max: number };
  heroImage: string;
  cardImage: string;
  gallery: string[];
  /** Categories surfaced as "A typical Elie [event] includes…" sample blocks. */
  sampleCategoryIds: CategoryId[];
  /** Collection IDs recommended on this event's page. */
  recommendedCollectionIds: string[];
  /** Testimonial IDs (optional). */
  testimonialIds?: string[];
  /** What's included in this event's signature service. */
  included: Bilingual[];
  seo: {
    title: Bilingual;
    description: Bilingual;
  };
}

/* ─── MENU CATEGORIES ────────────────────────────────────────────────── */

export type CategoryId =
  | "finger-food"
  | "coffee-break"
  | "live-stations"
  | "bbq"
  | "eastern"
  | "italian"
  | "seafood-sushi"
  | "arabic-coffee"
  | "desserts";

export interface Category {
  id: CategoryId;
  slug: string;
  name: Bilingual;
  eyebrow: Bilingual;
  description: Bilingual;
  heroImage: string;
  cardImage: string;
  /** Cross-link strip on the category page: "Popular for: Weddings · Corporate…" */
  popularFor: EventId[];
  /** Display order on the Menu landing page. */
  order: number;
}

/* ─── DISHES ─────────────────────────────────────────────────────────── */

export type ServingStyle =
  | "passed"
  | "station"
  | "plated"
  | "buffet"
  | "tableside";

export type DishTag =
  | "vegetarian"
  | "vegan"
  | "seafood"
  | "spicy"
  | "cold"
  | "hot"
  | "signature"
  | "halal-certified"
  | "gluten-free"
  | "dairy-free"
  | "saudi"
  | "international";

export interface Dish {
  id: string;
  slug: string;
  categoryId: CategoryId;
  name: Bilingual;
  description: Bilingual;
  image: string;
  servingStyle?: ServingStyle;
  tags?: DishTag[];
  /** Event types this dish is most often selected for — used for recommendations. */
  recommendedFor?: EventId[];
  signature?: boolean;
}

/* ─── COLLECTIONS ────────────────────────────────────────────────────── */

export interface Collection {
  id: string;
  slug: string;
  name: Bilingual;
  eyebrow: Bilingual;
  description: Bilingual;
  /** Event types this collection is curated for. */
  forEventIds: EventId[];
  /** Ordered list of dish IDs that make up the collection. */
  dishIds: string[];
  image: string;
  heroImage: string;
  /** Marks the flagship collection per event. Surfaced first. */
  signature?: boolean;
  /** Approximate guest range this collection scales well for. */
  guestRange: { min: number; max: number };
  /** Optional service notes (display only — not commercial). */
  notes?: Bilingual;
}

/* ─── TESTIMONIALS ───────────────────────────────────────────────────── */

export interface Testimonial {
  id: string;
  author: Bilingual;
  role?: Bilingual;
  quote: Bilingual;
  eventTypeIds: EventId[];
  /** Optional author image (initials-only fallback in UI if absent). */
  image?: string;
}

/* ─── GALLERY ────────────────────────────────────────────────────────── */

export interface GalleryItem {
  id: string;
  image: string;
  alt: Bilingual;
  eventTypeIds: EventId[];
  /** Optional caption surfaced on hover/lightbox. */
  caption?: Bilingual;
  /** Optional aspect-ratio hint for masonry/grid layout. */
  aspect?: "square" | "portrait" | "landscape" | "wide";
}

/* ─── MY EVENT (localStorage) ────────────────────────────────────────── */

export type PreferredContact = "whatsapp" | "phone" | "email";

export interface MyEventContact {
  name: string;
  phone: string;
  email: string;
  preferredContact: PreferredContact;
}

export interface MyEventSelection {
  dishId: string;
  /** Optional per-dish note ("vegetarian variant?", "extra spicy", …). */
  note?: string;
}

export interface MyEventState {
  /** Schema version. Bump on breaking changes — clears stored state on read. */
  version: 1;
  eventTypeId: EventId | null;
  guestCount: number | null;
  /** ISO date string (YYYY-MM-DD), Gregorian. */
  eventDate: string | null;
  /** Optional Hijri date the user typed in. Never auto-converted. */
  hijriDate: string | null;
  venue: string | null;
  selections: MyEventSelection[];
  /** Set when the user started from a collection (for analytics/context). */
  collectionId: string | null;
  contact: MyEventContact;
  notes: string;
  updatedAt: string;
}

/* ─── QUOTE REQUEST (internal payload) ───────────────────────────────── */

export type QuoteSource =
  | "home"
  | "service-page"
  | "menu"
  | "my-event"
  | "collection"
  | "whatsapp-direct";

export interface QuoteRequest {
  submittedAt: string;
  locale: Locale;
  source: QuoteSource;

  event: {
    typeId: EventId | null;
    date: string | null;
    hijriDate: string | null;
    guestCount: number | null;
    venue: string | null;
  };

  selections: {
    collectionId: string | null;
    dishes: Array<{
      dishId: string;
      categoryId: CategoryId;
      note?: string;
    }>;
  };

  contact: MyEventContact;

  notes: string;
}
