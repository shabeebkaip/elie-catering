/**
 * Content lookup helpers + build-time validators.
 *
 * Server Components import these to resolve IDs to records. Client Components
 * call them after hydrating localStorage selections. Validators run from a
 * unit test or a `next build` hook to catch dangling IDs early.
 */

import {
  categories,
  collections,
  dishes,
  events,
  gallery,
  testimonials,
  type Category,
  type CategoryId,
  type Collection,
  type Dish,
  type EventId,
  type EventType,
  type GalleryItem,
  type Testimonial,
} from "@/content";

/* ─── INDEXES (built once, reused) ───────────────────────────────────── */

const eventIndex = new Map<EventId, EventType>(events.map((e) => [e.id, e]));
const categoryIndex = new Map<CategoryId, Category>(
  categories.map((c) => [c.id, c]),
);
const dishIndex = new Map<string, Dish>(dishes.map((d) => [d.id, d]));
const collectionIndex = new Map<string, Collection>(
  collections.map((c) => [c.id, c]),
);
const testimonialIndex = new Map<string, Testimonial>(
  testimonials.map((t) => [t.id, t]),
);

/* ─── LOOKUPS ────────────────────────────────────────────────────────── */

export function getEvent(id: EventId): EventType | undefined {
  return eventIndex.get(id);
}

export function getEventBySlug(slug: string): EventType | undefined {
  return events.find((e) => e.slug === slug);
}

export function getCategory(id: CategoryId): Category | undefined {
  return categoryIndex.get(id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getDish(id: string): Dish | undefined {
  return dishIndex.get(id);
}

export function getDishBySlug(slug: string): Dish | undefined {
  return dishes.find((d) => d.slug === slug);
}

export function getDishesByCategory(id: CategoryId): Dish[] {
  return dishes.filter((d) => d.categoryId === id);
}

export function getCollection(id: string): Collection | undefined {
  return collectionIndex.get(id);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getCollectionsForEvent(id: EventId): Collection[] {
  // Signature first, then by insertion order.
  return collections
    .filter((c) => c.forEventIds.includes(id))
    .sort((a, b) => Number(!!b.signature) - Number(!!a.signature));
}

export function getDishesInCollection(collection: Collection): Dish[] {
  return collection.dishIds
    .map((id) => dishIndex.get(id))
    .filter((d): d is Dish => Boolean(d));
}

export function getTestimonial(id: string): Testimonial | undefined {
  return testimonialIndex.get(id);
}

export function getTestimonialsForEvent(id: EventId): Testimonial[] {
  return testimonials.filter((t) => t.eventTypeIds.includes(id));
}

export function getGalleryForEvent(id: EventId): GalleryItem[] {
  return gallery.filter((g) => g.eventTypeIds.includes(id));
}

export function getSignatureDishes(): Dish[] {
  return dishes.filter((d) => d.signature);
}

/* ─── VALIDATORS (call from tests / build hook) ──────────────────────── */

/**
 * Validates referential integrity across the content graph.
 * Throws an aggregated error listing all dangling IDs.
 *
 * Run from a Vitest `test()` or a Node script invoked in `prebuild`.
 */
export function assertContentIntegrity(): void {
  const errors: string[] = [];

  // Every dish belongs to a known category.
  for (const dish of dishes) {
    if (!categoryIndex.has(dish.categoryId)) {
      errors.push(`Dish "${dish.id}" references unknown category "${dish.categoryId}"`);
    }
    for (const eventId of dish.recommendedFor ?? []) {
      if (!eventIndex.has(eventId)) {
        errors.push(`Dish "${dish.id}" recommendedFor unknown event "${eventId}"`);
      }
    }
  }

  // Every collection references real dishes and real events.
  for (const collection of collections) {
    for (const dishId of collection.dishIds) {
      if (!dishIndex.has(dishId)) {
        errors.push(`Collection "${collection.id}" references unknown dish "${dishId}"`);
      }
    }
    for (const eventId of collection.forEventIds) {
      if (!eventIndex.has(eventId)) {
        errors.push(`Collection "${collection.id}" references unknown event "${eventId}"`);
      }
    }
  }

  // Every event's recommended collections + sample categories resolve.
  for (const event of events) {
    for (const collectionId of event.recommendedCollectionIds) {
      if (!collectionIndex.has(collectionId)) {
        errors.push(`Event "${event.id}" recommends unknown collection "${collectionId}"`);
      }
    }
    for (const categoryId of event.sampleCategoryIds) {
      if (!categoryIndex.has(categoryId)) {
        errors.push(`Event "${event.id}" samples unknown category "${categoryId}"`);
      }
    }
    for (const testimonialId of event.testimonialIds ?? []) {
      if (!testimonialIndex.has(testimonialId)) {
        errors.push(`Event "${event.id}" references unknown testimonial "${testimonialId}"`);
      }
    }
  }

  // Dish/category/collection/event slugs and IDs must be unique.
  assertUnique(dishes.map((d) => d.id), "dish id", errors);
  assertUnique(dishes.map((d) => d.slug), "dish slug", errors);
  assertUnique(categories.map((c) => c.id), "category id", errors);
  assertUnique(categories.map((c) => c.slug), "category slug", errors);
  assertUnique(collections.map((c) => c.id), "collection id", errors);
  assertUnique(collections.map((c) => c.slug), "collection slug", errors);
  assertUnique(events.map((e) => e.id), "event id", errors);
  assertUnique(events.map((e) => e.slug), "event slug", errors);

  if (errors.length > 0) {
    throw new Error(
      `Content integrity check failed:\n - ${errors.join("\n - ")}`,
    );
  }
}

function assertUnique(values: string[], label: string, errors: string[]): void {
  const seen = new Set<string>();
  for (const v of values) {
    if (seen.has(v)) errors.push(`Duplicate ${label}: "${v}"`);
    seen.add(v);
  }
}
