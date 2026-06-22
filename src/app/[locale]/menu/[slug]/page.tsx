import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuSectionTabs, { type SectionTab } from "@/components/MenuSectionTabs";
import MenuInquiryForm from "@/components/MenuInquiryForm";
import { getMenuCategory, menuCategories } from "@/lib/menu";

export function generateStaticParams() {
  return menuCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getMenuCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} | Elie Catering`,
    description: category.description,
  };
}

/* ── Dish image maps ──────────────────────────────────────── */

const FINGER_FOOD_IMAGES: Record<string, string> = {
  "salmon blinis with cream cheese":
    "/menu/finger%20foods/Smoked-Salmon-and-Cream-Cheese-Blinis-01.jpeg",
  "bruschetta with tomato & basil":
    "/menu/finger%20foods/Bruschetta-Tomato-Basil.webp",
  "smoked turkey mini rolls": "/menu/finger%20foods/smoked-turkey.webp",
  "caprese skewers": "/menu/finger%20foods/caprese-skewers.jpg",
  "prawn cocktail bites": "/menu/finger%20foods/Prawn-cocktail.webp",
  "mini chicken samosas": "/menu/finger%20foods/mini-chicken-samosas.jpg",
  "cheese borek": "/menu/finger%20foods/cheese-borek.webp",
  "meat spring rolls": "/menu/finger%20foods/meat-spring-rolls.jpg",
  "mini quiche lorraine": "/menu/finger%20foods/Mini-Quiche-Lorraine.jpg",
  "stuffed mushrooms": "/menu/finger%20foods/Stuffed-Mushrooms.jpg",
  "mini chocolate eclairs":
    "/menu/finger%20foods/mini-chocolate-eclairs.webp",
  "fruit tartlets": "/menu/finger%20foods/fruit-tarlets.jpg",
  macarons: "/menu/finger%20foods/macarons.jpg",
  "mini cheesecakes": "/menu/finger%20foods/mini-cheese-cakes.jpg",
};

const COFFEE_BREAK_IMAGES: Record<string, string> = {
  "mini milk bread with turkey and pickled cucumber":
    "/menu/coffee%20break/sandwiches/Mini%20milk%20bread%20with%20turkey%20and%20cucumber.webp",
  "mini baguette bread with feta cheese and fresh cucumber":
    "/menu/coffee%20break/sandwiches/Mini%20baguette%20bread%20with%20feta%20cheese%20and%20fresh%20cucumber.webp",
  "mini olive balls with tuna and corn":
    "/menu/coffee%20break/sandwiches/ChatGPT%20Image%20May%208%2C%202026%2C%2003_56_18%20AM%20%281%29.webp",
  "cucumber and feta roll with shrimp":
    "/menu/coffee%20break/salads/Cucumber-and-Feta-Roll-with-Shrimp.webp",
  "cranberry pecan cheese ball":
    "/menu/coffee%20break/salads/Nuts%20and%20cranberries%20cheese%20appetizer.webp",
  "mini tart chicken & cheese quiches":
    "/menu/coffee%20break/salads/Mini%20tarts%20with%20chicken%20and%20cheese.webp",
  "gorgonzola cheese canapés with walnut":
    "/menu/coffee%20break/salads/Gorgonzola%20cheese%20canap%C3%A9s%20with%20walnut.webp",
  "meat & cheese sambuusa":
    "/menu/coffee%20break/appetizers/ChatGPT%20Image%20May%208%2C%202026%2C%2004_22_29%20AM%20%281%29.webp",
  "assorted french pastry":
    "/menu/coffee%20break/dessert/Assorted%20French%20Pastry.webp",
  "assorted danish pastry":
    "/menu/coffee%20break/dessert/Assorted%20Danish%20Pastry.webp",
  "mini croissants": "/menu/coffee%20break/dessert/Mini%20Croissants.webp",
  "fresh-cut fruits": "/menu/coffee%20break/dessert/Fresh-cut%20Fruits.webp",
  "mineral water":
    "/menu/coffee%20break/beverages/689dfc618fefcf4041d9c01e.webp",
  "assorted juices":
    "/menu/coffee%20break/beverages/ChatGPT%20Image%20May%208%2C%202026%2C%2011_02_30%20AM.webp",
  coffee:
    "/menu/coffee%20break/beverages/ChatGPT%20Image%20May%208%2C%202026%2C%2011_06_21%20AM.webp",
  tea: "/menu/coffee%20break/beverages/ChatGPT%20Image%20May%208%2C%202026%2C%2011_08_11%20AM.webp",
};

const LIVE_COOKING_IMAGES: Record<string, string> = {
  "lamb ousal": "/menu/live-cooking/lamp%26fish/Lamb%20Ousal.webp",
  "lamb kebab": "/menu/live-cooking/lamp%26fish/lamb%20kebab.webp",
  "fish sabach": "/menu/live-cooking/lamp%26fish/Fish%20Sabach.webp",
  "served with: tahini sauce & cream sauce":
    "/menu/live-cooking/lamp%26fish/tahini.webp",
  "chicken tikka":
    "https://www.eitanbernath.com/wp-content/uploads/2020/10/Chicken-Tikka-LOW-RES-1-819x1024.jpg",
  "chicken kebab":
    "https://www.kitchensanctuary.com/wp-content/uploads/2016/04/Honey-Garlic-Chicken-Skewers-square-FS-21.jpg",
  "shish tawook (red + white)":
    "https://mamaslebanesekitchen.com/wp-content/uploads/2011/10/skewered-shish-tawook-chicken-kabobs.jpg",
  "served with: full grilled potatoes & potato cubes":
    "https://www.allrecipes.com/thmb/2A1wFJnDdnku9LgCgF60oX_Ck-8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20963-oven-roasted-potatoes-DDMFS-4x3-ada74550e9454bd3afc343a1bf88270f.jpg",
  "lamb neck ribs":
    "https://img.delicious.com.au/L2auynZx/del/2023/07/lamb-neck-roast-with-rough-cut-chermoula-193255-4.jpg",
  "lamb arayes":
    "https://urbanfarmandkitchen.com/wp-content/uploads/2023/11/arayes-meat-stuffed-pitas-5.jpg",
  "served with: special bbq bread & rocket salad":
    "https://www.sprinklesandsprouts.com/wp-content/uploads/2023/12/rocket-salad-sq.jpg",
  "grilled fish steak":
    "https://sauers.com/cdn/shop/articles/20220527163322-grilled_fish_fillets_1024x_d8c1f4f0-a64f-4b1b-89f0-8cea38e46718_1024x.webp?v=1669236149",
  "grilled chicken leg":
    "https://shewearsmanyhats.com/wp-content/uploads/2015/05/grilled-bbq-chicken-3.jpg",
  "served with: lebanese bread & corn":
    "https://www.allrecipes.com/thmb/M4uGXoJpt9Q3ld_Ay2Bx_xbAqo4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/259099-Lebanese-Mountain-Bread-ddmfs-4x3-step-13-cafb72da0b3f4893b3771e7caa6e47e5.jpg",
  "sandwich bread":
    "https://thesaltedpepper.com/wp-content/uploads/2024/07/Butter-Bread-sq.jpg",
  "manoush bread":
    "https://www.elmundoeats.com/wp-content/uploads/2024/02/Lebanese-flatbreads-manoushe-zaatar.jpg",
  lettuce:
    "https://www.tasteofhome.com/wp-content/uploads/2025/06/Mandarin-Orange-Romaine-Salad_EXPS_TOHD25_45715_RatulaChakraborti_06.jpg?w=700",
};

const CATEGORY_DISH_IMAGES: Record<string, Record<string, string>> = {
  "finger-food": FINGER_FOOD_IMAGES,
  "coffee-break": COFFEE_BREAK_IMAGES,
  "live-cooking-stations": LIVE_COOKING_IMAGES,
};

function getDishImage(slug: string, itemName: string): string | null {
  const map = CATEGORY_DISH_IMAGES[slug];
  if (!map) return null;
  return map[itemName.toLowerCase().trim()] ?? null;
}

/* ── Section fallback images ──────────────────────────────── */

const SECTION_IMAGES: Record<string, string> = {
  "bread & wraps":
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
  sandwiches:
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
  tableside:
    "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
  "tableside appetizers":
    "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
  "salads & cold appetizers":
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
  "cold appetizers & salad":
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
  salad:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
  "appetizers and salads":
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
  "cold canapés":
    "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop",
  "cold seafood":
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
  appetizers:
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
  "hot appetizers":
    "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop",
  "hot bites":
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
  "mini snacks":
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
  "omelette live section":
    "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
  "main courses":
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
  "main course":
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop",
  "party food":
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3df1?q=80&w=800&auto=format&fit=crop",
  "grilled meats":
    "https://images.unsplash.com/photo-1544025162-d76538f54073?q=80&w=800&auto=format&fit=crop",
  "lamb selection":
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
  "chicken selection":
    "https://images.unsplash.com/photo-1598103442097-8b74394b95c4?q=80&w=800&auto=format&fit=crop",
  "specialty cuts":
    "https://images.unsplash.com/photo-1544025162-d76538f54073?q=80&w=800&auto=format&fit=crop",
  burgers:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
  "served with":
    "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?q=80&w=800&auto=format&fit=crop",
  "station 1 — lamb & fish":
    "https://images.unsplash.com/photo-1544025162-d76538f54073?q=80&w=800&auto=format&fit=crop",
  "station 2 — chicken & potatoes":
    "https://images.unsplash.com/photo-1598103442097-8b74394b95c4?q=80&w=800&auto=format&fit=crop",
  "station 3 — lamb neck & arayes":
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
  "station 4 — seafood & chicken":
    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
  toppings:
    "https://images.unsplash.com/photo-1549637642-90187f64f420?q=80&w=800&auto=format&fit=crop",
  sauces:
    "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?q=80&w=800&auto=format&fit=crop",
  "seafood mains":
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
  "sushi station":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
  dessert:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
  "dessert bites":
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
  "candy corner":
    "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?q=80&w=800&auto=format&fit=crop",
  beverages:
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
  "hot & cold beverages":
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
  "live section drinks":
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
  "arabic coffee":
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
  "specialty coffee":
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
  accompaniments:
    "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?q=80&w=800&auto=format&fit=crop",
};

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop";

function getSectionImage(title: string): string {
  const key = title.toLowerCase().trim();
  if (SECTION_IMAGES[key]) return SECTION_IMAGES[key];
  for (const [k, v] of Object.entries(SECTION_IMAGES)) {
    if (key.includes(k) || k.includes(key.split(" ")[0])) return v;
  }
  return FALLBACK_IMAGE;
}

/* ── Event tags per category ──────────────────────────────── */

const CATEGORY_TAGS: Record<string, string[]> = {
  "finger-food": ["Cocktail Receptions", "Corporate Events", "Weddings"],
  "coffee-break": ["Corporate Meetings", "Conferences", "Training Days"],
  "live-cooking-stations": ["Weddings", "Gala Dinners", "Outdoor Events"],
  "bbq-section": ["Outdoor Gatherings", "Family Events", "Corporate BBQs"],
  "eastern-italian-cuisine": ["Weddings", "Gala Dinners", "Banquets"],
  "seafood-sushi": ["Cocktail Parties", "Business Dinners", "VIP Gatherings"],
  "specialty-arabic-coffee": ["Majlis", "Corporate Events", "Weddings"],
  "birthday-menu": ["Birthday Parties", "Family Gatherings", "Private Events"],
};

/* ── Design tokens ────────────────────────────────────────── */

const BG = "#0f0823";
const PAGE = "#FAF8F5";
const CHARCOAL = "#1C1917";
const STONE = "#78716C";
const GOLD = "#B8945A";
const BORDER = "rgba(0,0,0,0.07)";

/* ── Page component ───────────────────────────────────────── */

export default async function MenuCategoryPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const category = getMenuCategory(slug);
  if (!category) notFound();

  const localePath = `/${locale}`;
  const eventTags = CATEGORY_TAGS[slug] ?? [];
  const totalDishes = category.packages.reduce(
    (acc, p) => acc + p.sections.reduce((s, sec) => s + sec.items.length, 0),
    0
  );

  // Build flat section tab list for sticky tabs
  const tabs: SectionTab[] = category.packages.flatMap((pkg, pi) =>
    pkg.sections.map((sec, si) => ({
      id: `section-${pi}-${si}`,
      title: sec.title,
    }))
  );

  return (
    <>
      <Header />

      <div style={{ background: PAGE, minHeight: "100vh" }}>

        {/* ── Compact header ──────────────────────────────── */}
        <div
          style={{
            background: BG,
            paddingTop: "clamp(80px, 9.5vw, 104px)",
            paddingBottom: "clamp(18px, 2.5vw, 28px)",
            paddingLeft: "clamp(24px, 6vw, 96px)",
            paddingRight: "clamp(24px, 6vw, 96px)",
          }}
        >
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 mb-4"
            style={{ fontSize: "10.5px", letterSpacing: "0.07em", textTransform: "uppercase" }}
          >
            <Link
              href={`${localePath}/menu`}
              style={{ color: "rgba(184,148,90,0.55)", textDecoration: "none" }}
              className="hover:text-accent transition-colors"
            >
              Menu
            </Link>
            <span style={{ color: "rgba(184,148,90,0.30)" }}>›</span>
            <span style={{ color: "rgba(184,148,90,0.75)" }}>{category.title}</span>
          </nav>

          {/* Title row */}
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-2">
            <h1
              className="font-serif font-light"
              style={{
                color: "#ede5ff",
                fontSize: "clamp(24px, 3.6vw, 42px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {category.title}
            </h1>
            <span
              style={{
                color: "rgba(184,148,90,0.65)",
                fontSize: "10.5px",
                fontWeight: 600,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
              }}
            >
              {totalDishes} dishes
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              color: "rgba(237,229,255,0.42)",
              fontSize: "clamp(12px, 0.95vw, 13.5px)",
              fontWeight: 300,
              lineHeight: 1.65,
              maxWidth: "460px",
              marginBottom: eventTags.length > 0 ? "clamp(14px, 2vw, 20px)" : "0",
            }}
          >
            {category.description}
          </p>

          {/* Event tags */}
          {eventTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {eventTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    border: "1px solid rgba(184,148,90,0.22)",
                    color: "rgba(184,148,90,0.62)",
                    fontSize: "9.5px",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "4px 11px",
                    borderRadius: "999px",
                    background: "rgba(184,148,90,0.04)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ── Sticky section tabs ─────────────────────────── */}
        <MenuSectionTabs tabs={tabs} />

        {/* ── Dish sections ───────────────────────────────── */}
        <div
          style={{
            padding: "clamp(28px, 4vw, 56px) clamp(24px, 6vw, 96px)",
          }}
        >
         <div className="md:max-w-3xl">
          {category.packages.map((pkg, pkgIndex) => (
            <div key={pkg.id}>
              {/* Package heading (only shown when multiple packages) */}
              {category.packages.length > 1 && (
                <div className="mb-8">
                  <div
                    style={{
                      height: "1px",
                      background: BORDER,
                      marginBottom: "24px",
                    }}
                  />
                  <h2
                    className="font-serif font-light"
                    style={{ color: CHARCOAL, fontSize: "clamp(20px, 2.5vw, 30px)" }}
                  >
                    {pkg.name}
                  </h2>
                  {pkg.tier && (
                    <p style={{ color: "rgba(187,138,60,0.65)", fontSize: "11px", marginTop: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      {pkg.tier}
                    </p>
                  )}
                  {pkg.note && (
                    <p style={{ color: STONE, fontSize: "13px", marginTop: "8px", maxWidth: "480px", lineHeight: 1.65 }}>
                      {pkg.note}
                    </p>
                  )}
                </div>
              )}

              {/* Sections */}
              {pkg.sections.map((section, sIdx) => {
                const sectionId = `section-${pkgIndex}-${sIdx}`;
                const fallbackImg = getSectionImage(section.title);

                return (
                  <div
                    key={section.title}
                    id={sectionId}
                    style={{
                      marginBottom: "clamp(24px, 3.5vw, 40px)",
                      scrollMarginTop: "140px",
                    }}
                  >
                    {/* Section heading */}
                    <div
                      className="flex items-baseline gap-3 mb-3 md:mb-5"
                      style={{ paddingTop: sIdx > 0 ? "clamp(28px, 4vw, 48px)" : undefined }}
                    >
                      <div style={{ width: "22px", height: "1.5px", background: GOLD, flexShrink: 0, borderRadius: "999px", transform: "translateY(-4px)" }} />
                      <h3
                        className="font-serif font-light"
                        style={{ color: CHARCOAL, fontSize: "clamp(15px, 1.7vw, 21px)", letterSpacing: "-0.005em" }}
                      >
                        {section.title}
                      </h3>
                      <span
                        style={{
                          color: STONE,
                          fontSize: "10.5px",
                          fontWeight: 500,
                          letterSpacing: "0.04em",
                          opacity: 0.5,
                        }}
                      >
                        {section.items.length} items
                      </span>
                    </div>

                    {/* Dish list — editorial single column */}
                    <div>
                      {section.items.map((item, itemIdx) => {
                        const specificImg = getDishImage(slug, item);
                        const imgSrc = specificImg ?? fallbackImg;
                        const isLast = itemIdx === section.items.length - 1;

                        return (
                          <div
                            key={item}
                            className="flex items-center group cursor-default transition-colors duration-300
                                       gap-4 py-3.5
                                       md:gap-7 md:py-6 md:-mx-3 md:px-3 md:rounded-2xl
                                       md:hover:bg-[rgba(184,148,90,0.035)]"
                            style={{
                              borderBottom: isLast ? "none" : `1px solid ${BORDER}`,
                            }}
                          >
                            {/* Thumbnail */}
                            <div
                              className="relative shrink-0 overflow-hidden
                                         w-[76px] h-[76px] rounded-xl
                                         md:w-[168px] md:h-[126px] md:rounded-2xl"
                            >
                              <Image
                                src={imgSrc}
                                alt={item}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                sizes="(max-width: 768px) 76px, 168px"
                                style={specificImg ? undefined : { filter: "brightness(0.82) saturate(1.05)" }}
                              />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <p
                                className="font-serif font-light leading-snug"
                                style={{
                                  color: CHARCOAL,
                                  fontSize: "clamp(14px, 1.6vw, 21px)",
                                  letterSpacing: "-0.005em",
                                  marginBottom: "clamp(6px, 0.7vw, 10px)",
                                }}
                              >
                                {item}
                              </p>
                              <div className="flex items-center gap-2.5">
                                <span
                                  style={{
                                    color: GOLD,
                                    fontSize: "9.5px",
                                    fontWeight: 600,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                  }}
                                >
                                  {section.title}
                                </span>
                              </div>
                            </div>

                            {/* Arrow — desktop hover only */}
                            <span
                              className="hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0"
                              style={{ color: GOLD, fontSize: "16px" }}
                            >
                              →
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Package divider */}
              {pkgIndex < category.packages.length - 1 && (
                <div style={{ height: "1px", background: BORDER, margin: "clamp(20px, 3vw, 40px) 0" }} />
              )}
            </div>
          ))}
         </div>
        </div>

        {/* ── Inquiry form ────────────────────────────────── */}
        <MenuInquiryForm menuTitle={category.title} />

        {/* ── Explore other menus strip ───────────────────── */}
        <div
          style={{
            background: PAGE,
            borderTop: `1px solid ${BORDER}`,
            padding: "clamp(20px, 2.5vw, 30px) clamp(24px, 6vw, 96px)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p style={{ color: STONE, fontSize: "13px", fontWeight: 300 }}>
              Looking for something different?
            </p>
            <Link
              href={`${localePath}/menu`}
              className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-x-0.5"
              style={{
                color: CHARCOAL,
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Explore All Menus
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
