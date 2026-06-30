import type { GalleryItem } from "./types";

/**
 * Curated gallery — surfaced as a filterable grid.
 *
 * Tag each image with `eventTypeIds` so the gallery page can filter by event.
 * Keep this list intentionally small (~30–60 hand-picked images). Bigger
 * archives belong in a CMS — this is a curated showcase, not an album.
 */
export const gallery: GalleryItem[] = [
  {
    id: "wedding-kosha-1",
    image: "/images/gallery/wedding-kosha-1.webp",
    alt: {
      en: "Bridal kosha with floral arch at a Riyadh wedding",
      ar: "كوشة العروس بقوس زهري في حفل زفاف بالرياض",
    },
    eventTypeIds: ["weddings"],
    aspect: "landscape",
  },
  {
    id: "wedding-table-1",
    image: "/images/gallery/wedding-table-1.webp",
    alt: {
      en: "Long banquet table with crystal and gold accents",
      ar: "مائدة طويلة بمسات الكريستال والذهب",
    },
    eventTypeIds: ["weddings"],
    aspect: "wide",
  },
  {
    id: "corporate-launch-1",
    image: "/images/gallery/corporate-launch-1.webp",
    alt: {
      en: "Branded coffee station at a product launch",
      ar: "محطة قهوة بعلامة تجارية في حفل إطلاق منتج",
    },
    eventTypeIds: ["corporate"],
    aspect: "square",
  },
  {
    id: "ramadan-tent-1",
    image: "/images/gallery/ramadan-tent-1.webp",
    alt: {
      en: "Iftar tent at sunset with date palms",
      ar: "خيمة إفطار عند الغروب مع نخيل التمر",
    },
    eventTypeIds: ["ramadan-eid"],
    aspect: "landscape",
  },
  {
    id: "vip-tableside-1",
    image: "/images/gallery/vip-tableside-1.webp",
    alt: {
      en: "Lamb ouzi carved tableside at a private residence",
      ar: "أوزي الخروف يُقطّع على المائدة في مسكن خاص",
    },
    eventTypeIds: ["vip", "weddings"],
    aspect: "portrait",
  },
];

export const galleryIds = gallery.map((g) => g.id);
