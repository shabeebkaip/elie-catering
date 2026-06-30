import type { Category } from "./types";

/**
 * Menu categories — the cuisine catalog.
 *
 * `popularFor` powers the cross-link strip on each category page.
 * `order` controls display on the Menu landing page (low → high).
 */
export const categories: Category[] = [
  {
    id: "finger-food",
    slug: "finger-food",
    name: {
      en: "Finger Food",
      ar: "المقبلات الراقية",
    },
    eyebrow: {
      en: "Elegant Receptions",
      ar: "حفلات الاستقبال الأنيقة",
    },
    description: {
      en: "Delicate, hand-crafted bites for receptions, cocktails, and welcome gatherings — designed to mingle, never to weigh.",
      ar: "مقبلات راقية مصنوعة يدوياً لحفلات الاستقبال والكوكتيل ومجالس الترحيب — مصممة للتذوّق دون إثقال.",
    },
    heroImage: "/images/generated/finger-food.jpg",
    cardImage: "/images/generated/finger-food.jpg",
    popularFor: ["weddings", "vip", "corporate", "private"],
    order: 1,
  },
  {
    id: "coffee-break",
    slug: "coffee-break",
    name: {
      en: "Coffee Break",
      ar: "استراحة القهوة",
    },
    eyebrow: {
      en: "Premium Refreshments",
      ar: "ضيافة فاخرة",
    },
    description: {
      en: "Sophisticated coffee, savouries and pastries for seamless event interludes — refined, efficient, and beautifully presented.",
      ar: "قهوة راقية ومقبلات ومعجنات لاستراحات الفعاليات — أناقة وكفاءة وعرض ساحر.",
    },
    heroImage: "/images/generated/coffee-break.png",
    cardImage: "/images/generated/coffee-break.png",
    popularFor: ["corporate", "government", "private"],
    order: 2,
  },
  {
    id: "live-stations",
    slug: "live-stations",
    name: {
      en: "Live Cooking Stations",
      ar: "محطات الطهي الحي",
    },
    eyebrow: {
      en: "Interactive Culinary",
      ar: "تجربة طهي تفاعلية",
    },
    description: {
      en: "Our chefs prepare dishes in front of your guests — theatre and feast in one. The signature moment of any Elie event.",
      ar: "يُعدّ طهاتنا الأطباق أمام ضيوفك — عرض ووليمة في آنٍ واحد. اللحظة المميزة في فعاليات إيلي.",
    },
    heroImage: "/images/generated/live-stations.png",
    cardImage: "/images/generated/live-stations.png",
    popularFor: ["weddings", "vip", "corporate", "ramadan-eid"],
    order: 3,
  },
  {
    id: "bbq",
    slug: "bbq",
    name: {
      en: "BBQ Section",
      ar: "قسم المشاوي",
    },
    eyebrow: {
      en: "Grilled Specialties",
      ar: "أطباق مشوية مميزة",
    },
    description: {
      en: "Premium grilled meats, seafood and Middle Eastern classics — built around the rituals of charcoal, smoke and shared plates.",
      ar: "لحوم ومأكولات بحرية ومشاوي شرقية كلاسيكية — تجمع طقوس الفحم والدخان والأطباق المشتركة.",
    },
    heroImage: "/images/generated/bbq.png",
    cardImage: "/images/generated/bbq.png",
    popularFor: ["private", "weddings", "birthdays", "ramadan-eid"],
    order: 4,
  },
  {
    id: "eastern",
    slug: "eastern-cuisine",
    name: {
      en: "Eastern Cuisine",
      ar: "المطبخ الشرقي",
    },
    eyebrow: {
      en: "Levantine & Gulf",
      ar: "الشام والخليج",
    },
    description: {
      en: "Authentic Levantine and Khaleeji cooking — mezze tables, slow-cooked grains and signature mansaf, kabsa and maqluba dishes.",
      ar: "مطبخ شامي وخليجي أصيل — موائد المزة، الحبوب المطهوة على نار هادئة، وأطباق المنسف والكبسة والمقلوبة.",
    },
    heroImage: "/images/generated/eastern.png",
    cardImage: "/images/generated/eastern.png",
    popularFor: ["weddings", "ramadan-eid", "government", "private"],
    order: 5,
  },
  {
    id: "italian",
    slug: "italian-cuisine",
    name: {
      en: "Italian Cuisine",
      ar: "المطبخ الإيطالي",
    },
    eyebrow: {
      en: "Mediterranean Classics",
      ar: "كلاسيكيات البحر الأبيض",
    },
    description: {
      en: "Trattoria-grade pasta, wood-fired pizza, and Mediterranean classics — handled by chefs trained in Milan and Rome.",
      ar: "معكرونة وبيتزا على الحطب وكلاسيكيات متوسطية — يعدّها طهاة تدربوا في ميلانو وروما.",
    },
    heroImage: "/images/generated/italian.png",
    cardImage: "/images/generated/italian.png",
    popularFor: ["corporate", "vip", "private", "birthdays"],
    order: 6,
  },
  {
    id: "seafood-sushi",
    slug: "seafood-sushi",
    name: {
      en: "Seafood & Sushi",
      ar: "المأكولات البحرية والسوشي",
    },
    eyebrow: {
      en: "Fresh Ocean Selections",
      ar: "اختيارات بحرية طازجة",
    },
    description: {
      en: "Daily-caught fish, hand-rolled sushi and cold seafood platters — sourced from the Red Sea and the Arabian Gulf.",
      ar: "أسماك يومية الصيد، سوشي مُحضّر يدوياً، وأطباق بحرية باردة — مصدرها البحر الأحمر والخليج العربي.",
    },
    heroImage: "/images/generated/sushi.png",
    cardImage: "/images/generated/sushi.png",
    popularFor: ["vip", "weddings", "corporate"],
    order: 7,
  },
  {
    id: "arabic-coffee",
    slug: "arabic-coffee",
    name: {
      en: "Specialty & Arabic Coffee",
      ar: "القهوة العربية والمختصة",
    },
    eyebrow: {
      en: "Arabian Hospitality",
      ar: "كرم الضيافة العربية",
    },
    description: {
      en: "Traditional gahwa with saffron and cardamom, alongside specialty espresso — served with dates, lokum and petit fours.",
      ar: "القهوة العربية الأصيلة بالزعفران والهيل، إلى جانب الإسبريسو المختص — تُقدَّم مع التمور والملبن والبتي فور.",
    },
    heroImage: "/images/generated/specialty.png",
    cardImage: "/images/generated/specialty.png",
    popularFor: ["weddings", "ramadan-eid", "government", "vip"],
    order: 8,
  },
  {
    id: "desserts",
    slug: "desserts",
    name: {
      en: "Desserts",
      ar: "الحلويات",
    },
    eyebrow: {
      en: "Patisserie & Sweets",
      ar: "المعجنات والحلويات",
    },
    description: {
      en: "From hand-piped patisserie to umm ali and kunafa trios — the final note that lingers long after guests leave.",
      ar: "من المعجنات المُحضّرة يدوياً إلى أم علي وثلاثية الكنافة — اللمسة الأخيرة التي تبقى في الذاكرة.",
    },
    heroImage: "/images/generated/desserts.png",
    cardImage: "/images/generated/desserts.png",
    popularFor: ["weddings", "birthdays", "ramadan-eid", "vip"],
    order: 9,
  },
];

export const categoryIds = categories.map((c) => c.id);
