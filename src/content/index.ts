/**
 * Content module — single import surface for the static catalog.
 *
 * Import from `@/content` rather than reaching into individual files. Keeps
 * route/component code stable if files split or move later.
 */

export * from "./types";
export { categories, categoryIds } from "./categories";
export { dishes, dishIds } from "./dishes";
export { events, eventIds } from "./events";
export { collections, collectionIds } from "./collections";
export { testimonials, testimonialIds } from "./testimonials";
export { gallery, galleryIds } from "./gallery";
