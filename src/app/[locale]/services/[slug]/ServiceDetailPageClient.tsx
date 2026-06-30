"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getServiceBySlug, getComplementaryServices } from "@/lib/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GOLD  = "#C9A15B";
const CREAM = "#F5F1E8";

// ponytail: shared WA number — already used in WhatsAppFloat + Footer
const WA_NUMBER = "966544356564";
const buildWaLink = (service: string, isAr: boolean) => {
  const msg = isAr
    ? `مرحباً، أود الاستفسار عن خدمة ${service} في إيلي.`
    : `Hello, I'd like to enquire about Elie's ${service} service.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
};

// Event types this service is suitable for — surfaced as typographic chips
// beneath the hero tagline. Non-clickable until /events/[slug] routes ship.
const EVENT_SUITABILITY: Record<string, { en: string; ar: string }[]> = {
  catering: [
    { en: "Weddings",     ar: "حفلات الزفاف" },
    { en: "Corporate",    ar: "الفعاليات المؤسسية" },
    { en: "VIP",          ar: "كبار الشخصيات" },
    { en: "Private",      ar: "المناسبات الخاصة" },
    { en: "Ramadan & Eid", ar: "رمضان والعيد" },
  ],
  planning: [
    { en: "Weddings",     ar: "حفلات الزفاف" },
    { en: "Corporate",    ar: "الفعاليات المؤسسية" },
    { en: "Government",   ar: "الفعاليات الحكومية" },
    { en: "Private",      ar: "المناسبات الخاصة" },
  ],
  decor: [
    { en: "Weddings",     ar: "حفلات الزفاف" },
    { en: "VIP",          ar: "كبار الشخصيات" },
    { en: "Private",      ar: "المناسبات الخاصة" },
    { en: "Corporate",    ar: "الفعاليات المؤسسية" },
  ],
  addons: [
    { en: "Weddings",     ar: "حفلات الزفاف" },
    { en: "Corporate",    ar: "الفعاليات المؤسسية" },
    { en: "VIP",          ar: "كبار الشخصيات" },
    { en: "Government",   ar: "الفعاليات الحكومية" },
  ],
};

// "At a Glance" facts shown beneath the What's Included sticky card.
// Conservative defaults — the team should verify before launch.
const AT_A_GLANCE: Record<string, { label: { en: string; ar: string }; value: { en: string; ar: string } }[]> = {
  catering: [
    { label: { en: "Minimum Guests",  ar: "الحد الأدنى للضيوف" }, value: { en: "30",            ar: "30" } },
    { label: { en: "Lead Time",       ar: "الفترة المسبقة" },    value: { en: "6–8 weeks",      ar: "6–8 أسابيع" } },
    { label: { en: "Coverage",        ar: "النطاق الجغرافي" },   value: { en: "KSA & GCC",      ar: "السعودية والخليج" } },
    { label: { en: "Pricing",         ar: "التسعير" },           value: { en: "Bespoke quotation", ar: "عرض سعر مخصص" } },
  ],
  planning: [
    { label: { en: "Minimum Guests",  ar: "الحد الأدنى للضيوف" }, value: { en: "50",            ar: "50" } },
    { label: { en: "Lead Time",       ar: "الفترة المسبقة" },    value: { en: "10–12 weeks",    ar: "10–12 أسبوعاً" } },
    { label: { en: "Coverage",        ar: "النطاق الجغرافي" },   value: { en: "KSA & GCC",      ar: "السعودية والخليج" } },
    { label: { en: "Pricing",         ar: "التسعير" },           value: { en: "Bespoke quotation", ar: "عرض سعر مخصص" } },
  ],
  decor: [
    { label: { en: "Minimum Guests",  ar: "الحد الأدنى للضيوف" }, value: { en: "30",            ar: "30" } },
    { label: { en: "Lead Time",       ar: "الفترة المسبقة" },    value: { en: "4–6 weeks",      ar: "4–6 أسابيع" } },
    { label: { en: "Coverage",        ar: "النطاق الجغرافي" },   value: { en: "Riyadh & KSA",   ar: "الرياض والسعودية" } },
    { label: { en: "Pricing",         ar: "التسعير" },           value: { en: "Bespoke quotation", ar: "عرض سعر مخصص" } },
  ],
  addons: [
    { label: { en: "Availability",    ar: "التوفر" },            value: { en: "Year-round",     ar: "على مدار العام" } },
    { label: { en: "Lead Time",       ar: "الفترة المسبقة" },    value: { en: "2–4 weeks",      ar: "2–4 أسابيع" } },
    { label: { en: "Coverage",        ar: "النطاق الجغرافي" },   value: { en: "KSA & GCC",      ar: "السعودية والخليج" } },
    { label: { en: "Pricing",         ar: "التسعير" },           value: { en: "Per service",    ar: "حسب الخدمة" } },
  ],
};

// Quietly-entrusted metrics. Numbers chosen to be defensible for a 14-year brand.
// Verify with Elie before launch — easy edits in one place.
const METRICS: { value: { en: string; ar: string }; label: { en: string; ar: string } }[] = [
  { value: { en: "Est. 2012",   ar: "تأسست 2012" },    label: { en: "14 years in Riyadh",         ar: "14 عاماً في الرياض" } },
  { value: { en: "500+",        ar: "+500" },           label: { en: "Events delivered",            ar: "فعالية منفّذة" } },
  { value: { en: "2,000",       ar: "2,000" },          label: { en: "Largest single gathering",    ar: "أكبر تجمع منفرد" } },
];

// Override hero and gallery with branded local images per category
const CATEGORY_HERO: Record<string, string> = {
  catering: "/images/services/luxury-catering.webp",
  planning:  "/images/services/wedding.webp",
  decor:     "/images/services/event-styling.webp",
  addons:    "/images/services/vip.webp",
};

const CATEGORY_GALLERY: Record<string, string[]> = {
  catering: [
    "/images/services/luxury-catering.webp",
    "/images/services/wedding.webp",
    "/images/services/event-styling.webp",
    "/images/services/private-gathering.webp",
  ],
  planning: [
    "/images/services/wedding.webp",
    "/images/services/coorperate-events.webp",
    "/images/services/private-gathering.webp",
    "/images/services/event-styling.webp",
  ],
  decor: [
    "/images/services/event-styling.webp",
    "/images/services/wedding.webp",
    "/images/services/luxury-catering.webp",
    "/images/services/private-gathering.webp",
  ],
  addons: [
    "/images/services/vip.webp",
    "/images/services/coorperate-events.webp",
    "/images/services/wedding.webp",
    "/images/services/luxury-catering.webp",
  ],
};

// Trust benefits per category
const TRUST: Record<string, { t: string; tAr: string; d: string; dAr: string }[]> = {
  catering: [
    { t: "Custom Menu Creation",        tAr: "تصميم القائمة المخصص",  d: "Menus built around your event, guests, and culinary vision.",        dAr: "قوائم مبنية حول فعاليتك وضيوفك ورؤيتك الطهوية." },
    { t: "Premium Ingredient Sourcing", tAr: "توفير مكونات فاخرة",    d: "Named farms, trusted suppliers, and finest seasonal produce.",        dAr: "مزارع معروفة وموردون موثوقون وأجود المنتجات." },
    { t: "Dedicated Culinary Team",     tAr: "فريق طهوي مخصص",       d: "Trained chefs assigned exclusively to your event.",                   dAr: "طهاة مدربون مخصصون حصرياً لفعاليتك." },
    { t: "White-Glove Service",         tAr: "خدمة القفاز الأبيض",    d: "Uniformed, trained service staff who anticipate every need.",         dAr: "طاقم بزي موحد ومدرب يستبق كل احتياج." },
    { t: "Elegant Presentation",        tAr: "تقديم أنيق",            d: "Every dish plated with precision — beautiful before the first bite.", dAr: "كل طبق يُقدَّم بدقة — جميل قبل أول قضمة." },
    { t: "End-to-End Coordination",     tAr: "تنسيق شامل",            d: "From first call to final clear — we manage everything.",              dAr: "من أول مكالمة إلى التنظيف الأخير — ندير كل شيء." },
  ],
  planning: [
    { t: "Bespoke Concept",             tAr: "مفهوم خاص",             d: "Every event begins from a blank page — never templated.",            dAr: "كل فعالية تبدأ من صفحة بيضاء — لا قوالب." },
    { t: "Single Point of Contact",     tAr: "نقطة اتصال واحدة",      d: "One dedicated producer from first call to final curtain.",           dAr: "منتج مخصص واحد من أول مكالمة إلى الإسدال الأخير." },
    { t: "Complete Vendor Management",  tAr: "إدارة كاملة للموردين",  d: "We source, brief, and coordinate every supplier.",                   dAr: "نبحث ونوجّه وننسق كل مورد." },
    { t: "Real-Time Communication",     tAr: "تواصل فوري",            d: "Always informed — never chasing updates on your own event.",         dAr: "دائماً على علم — لا تطارد التحديثات." },
    { t: "Contingency Planning",        tAr: "تخطيط للطوارئ",         d: "Built-in protocols for every scenario — nothing left to chance.",    dAr: "بروتوكولات مدمجة لكل سيناريو — لا شيء للصدفة." },
    { t: "Flawless Execution",          tAr: "تنفيذ لا عيوب",         d: "14 years of institutional knowledge behind every event.",            dAr: "14 عاماً من المعرفة المؤسسية خلف كل فعالية." },
  ],
  decor: [
    { t: "Design Consultation",         tAr: "استشارة التصميم",       d: "A detailed session to align your vision with our creative direction.", dAr: "جلسة مفصلة لمواءمة رؤيتك مع اتجاهنا الإبداعي." },
    { t: "Material Sourcing",           tAr: "توفير المواد",           d: "Premium fabrics, florals, and props curated to your palette.",        dAr: "أقمشة فاخرة وزهور ودعائم منتقاة وفق لوحتك." },
    { t: "In-House Installation",       tAr: "تركيب داخلي",           d: "Our team installs everything — no third-party gaps.",                dAr: "فريقنا يركب كل شيء — لا ثغرات من أطراف ثالثة." },
    { t: "Ambient Lighting Design",     tAr: "تصميم إضاءة جوية",      d: "Lighting that transforms mood and atmosphere at every hour.",        dAr: "إضاءة تحول المزاج والأجواء في كل ساعة." },
    { t: "Floral Direction",            tAr: "توجيه زهري",            d: "Seasonal florals and centrepieces designed to the last petal.",     dAr: "زهور موسمية وقطع مركزية حتى آخر بتلة." },
    { t: "Complete Removal",            tAr: "إزالة كاملة",           d: "Full strike and cleanup — the venue left exactly as we found it.", dAr: "فك كامل وتنظيف — المكان كما وجدناه تماماً." },
  ],
  addons: [
    { t: "Professional Specialists",    tAr: "متخصصون محترفون",       d: "Trained to the highest standard in their respective craft.",        dAr: "مدربون على أعلى مستوى في حرفتهم." },
    { t: "Premium Equipment",           tAr: "معدات فاخرة",           d: "Industry-leading gear maintained to professional standards.",       dAr: "معدات رائدة محافظ عليها وفق معايير احترافية." },
    { t: "Seamless Integration",        tAr: "تكامل سلس",             d: "We work alongside your team — no handoff friction.",               dAr: "نعمل مع فريقك — لا احتكاك في التسليم." },
    { t: "White-Glove Delivery",        tAr: "تسليم القفاز الأبيض",   d: "Every service delivered with precision timing and elegance.",      dAr: "كل خدمة تُسلَّم بدقة توقيت وأناقة." },
    { t: "Dedicated Account Manager",   tAr: "مدير حساب مخصص",        d: "One contact from booking through the event night.",                dAr: "نقطة اتصال واحدة من الحجز حتى ليلة الفعالية." },
    { t: "Quality Guarantee",           tAr: "ضمان الجودة",           d: "Our standards never slip — every detail reviewed before delivery.", dAr: "معاييرنا لا تتراجع — كل تفصيلة مراجعة." },
  ],
};

// Process steps per category
const PROCESS: Record<string, { num: string; t: string; tAr: string; d: string; dAr: string }[]> = {
  catering: [
    { num: "01", t: "Discovery Call",          tAr: "مكالمة الاستكشاف",  d: "We learn your event, guest count, and culinary vision.",         dAr: "نتعرف على فعاليتك وعدد الضيوف ورؤيتك الطهوية." },
    { num: "02", t: "Menu Design",             tAr: "تصميم القائمة",     d: "Our culinary director crafts a bespoke menu for your brief.",    dAr: "مديرنا الطهوي يصنع قائمة خاصة لملخصك." },
    { num: "03", t: "Planning & Coordination", tAr: "التخطيط والتنسيق", d: "Logistics, staffing, and timelines confirmed to every detail.",  dAr: "اللوجستيات والطواقم والجداول مؤكدة لكل تفصيلة." },
    { num: "04", t: "Event Execution",         tAr: "تنفيذ الفعالية",    d: "Our team arrives early, executes flawlessly, leaves no trace.", dAr: "فريقنا يصل مبكراً وينفذ بلا عيوب ولا يترك أثراً." },
  ],
  planning: [
    { num: "01", t: "Discovery Call",    tAr: "مكالمة الاستكشاف", d: "We understand your vision and requirements in full detail.",   dAr: "نفهم رؤيتك ومتطلباتك بالتفصيل الكامل." },
    { num: "02", t: "Concept Design",    tAr: "تصميم المفهوم",    d: "Creative brief, mood board, and full concept presented to you.", dAr: "ملخص إبداعي ولوح مزاج ومفهوم كامل يُقدَّم إليك." },
    { num: "03", t: "Vendor Management", tAr: "إدارة الموردين",   d: "We source, brief, and coordinate every supplier on your behalf.", dAr: "نبحث ونوجّه وننسق كل مورد نيابةً عنك." },
    { num: "04", t: "Event Day",         tAr: "يوم الفعالية",     d: "Your producer on-site from first setup to final farewell.",    dAr: "المنتج في الموقع من أول إعداد إلى الوداع الأخير." },
  ],
  decor: [
    { num: "01", t: "Design Consultation", tAr: "استشارة التصميم", d: "We explore your aesthetic vision, theme, and venue together.",  dAr: "نستكشف رؤيتك الجمالية وموضوعك ومكانك معاً." },
    { num: "02", t: "Concept & Sourcing",  tAr: "المفهوم والتوريد",d: "Mood boards and material samples presented for your approval.", dAr: "ألواح المزاج وعينات المواد تُقدَّم لموافقتك." },
    { num: "03", t: "Preparation",         tAr: "التحضير",          d: "All elements produced and tested at our atelier.",            dAr: "جميع العناصر تُنتج وتُختبر في أتيليهنا." },
    { num: "04", t: "Installation",        tAr: "التركيب",          d: "We transform your venue — then remove everything after.",    dAr: "نحول مكانك — ثم نزيل كل شيء بعد ذلك." },
  ],
  addons: [
    { num: "01", t: "Discovery Call",   tAr: "مكالمة الاستكشاف", d: "We confirm scope, requirements, and event logistics.",              dAr: "نؤكد النطاق والمتطلبات واللوجستيات." },
    { num: "02", t: "Service Planning", tAr: "تخطيط الخدمة",     d: "Detailed timing and logistics aligned with your event brief.",     dAr: "التوقيت والخدمات التفصيلية متوافقة مع ملخصك." },
    { num: "03", t: "Coordination",     tAr: "التنسيق",           d: "Seamless integration with your venue, team, and suppliers.",       dAr: "تكامل سلس مع مكانك وفريقك وموردينك." },
    { num: "04", t: "Event Day",        tAr: "يوم الفعالية",      d: "Our specialists on-site and ready from arrival to departure.",    dAr: "متخصصونا في الموقع جاهزون من الوصول للمغادرة." },
  ],
};

type Props = { slug: string; locale: string };

export default function ServiceDetailPageClient({ slug, locale }: Props) {
  const isAr = locale === "ar";

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related   = getComplementaryServices(slug, 3);
  const heroImg   = CATEGORY_HERO[service.category]    ?? service.heroImg;
  const gallery   = CATEGORY_GALLERY[service.category] ?? service.gallery;
  const trust     = TRUST[service.category]    ?? TRUST.catering;
  const process   = PROCESS[service.category]  ?? PROCESS.catering;
  const eventChips = EVENT_SUITABILITY[service.category] ?? EVENT_SUITABILITY.catering;
  const facts      = AT_A_GLANCE[service.category]      ?? AT_A_GLANCE.catering;
  const waLink     = buildWaLink(isAr ? service.titleAr : service.title, isAr);
  const standVerb = service.category === "addons" ? "Stand" : "Stands";
  const trustHeading = isAr
    ? `لماذا خدمة ${service.categoryLabelAr} لدينا متميزة`
    : `Why Our ${service.categoryLabel} ${standVerb} Apart`;

  return (
    <>
      {/* Marble fixed background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Image src="/images/about/marble.webp" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.92)" }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 18% 22%, rgba(201,161,91,0.05), transparent)," +
              "radial-gradient(ellipse 55% 50% at 82% 78%, rgba(201,161,91,0.04), transparent)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />

        <main className="min-h-screen" style={{ background: "transparent" }}>

          {/* ══ MASTHEAD ══════════════════════════════════════════ */}
          <section className="px-6 md:px-14 pt-32 md:pt-44 pb-14 max-w-[1380px] mx-auto">
            {/* Back link + category badge */}
            <div className="flex items-center justify-between mb-14 md:mb-20">
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center gap-2 no-underline text-[11px] tracking-[0.2em] uppercase font-bold group transition-all duration-300"
                style={{ color: "rgba(245,241,232,0.36)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GOLD; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(245,241,232,0.36)"; }}
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">
                  {isAr ? "→" : "←"}
                </span>
                {isAr ? "جميع الخدمات" : "All Services"}
              </Link>
              <span
                className="px-4 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold"
                style={{
                  background: "rgba(201,161,91,0.08)",
                  border: "1px solid rgba(201,161,91,0.2)",
                  color: GOLD,
                }}
              >
                {isAr ? service.categoryLabelAr : service.categoryLabel}
              </span>
            </div>

            {/* Display title */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="font-serif font-light tracking-tight"
              style={{ fontSize: "clamp(52px, 10.5vw, 148px)", lineHeight: 0.87, color: CREAM }}
            >
              <em>{isAr ? service.titleAr : service.title}</em>
            </motion.h1>

            {/* Gold rule + tagline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className={`mt-8 md:mt-12 flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}
            >
              <div className="w-20 h-px flex-shrink-0" style={{ background: GOLD }} />
              <p
                className="font-light"
                style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "rgba(245,241,232,0.42)", lineHeight: 1.65, maxWidth: "520px" }}
              >
                {isAr ? service.taglineAr : service.tagline}
              </p>
            </motion.div>

            {/* Event suitability chips — answers "is this for my wedding?" */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36 }}
              className={`mt-10 md:mt-14 flex flex-wrap items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}
            >
              <span
                className="text-[9px] tracking-[0.32em] uppercase font-bold"
                style={{ color: "rgba(201,161,91,0.55)" }}
              >
                {isAr ? "مناسبة لـ" : "Suited For"}
              </span>
              {eventChips.map((chip) => (
                <span
                  key={chip.en}
                  className="px-3.5 py-1.5 text-[10.5px] tracking-[0.18em] uppercase font-medium"
                  style={{
                    color: "rgba(245,241,232,0.62)",
                    border: "1px solid rgba(201,161,91,0.18)",
                    borderRadius: "2px",
                  }}
                >
                  {isAr ? chip.ar : chip.en}
                </span>
              ))}
            </motion.div>
          </section>

          {/* Hairline */}
          <div className="px-6 md:px-14">
            <div style={{ height: "1px", background: `linear-gradient(${isAr ? "to left" : "to right"}, rgba(201,161,91,0.28), rgba(201,161,91,0.04))` }} />
          </div>

          {/* ══ EDITORIAL: Image + Description + Included ════════ */}
          <section className="px-6 md:px-14 py-16 md:py-24 max-w-[1380px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-14 lg:gap-20 items-start">

              {/* Left: contained image + description + CTA */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.06, ease: [0.19, 1, 0.22, 1] }}
                  className="relative overflow-hidden rounded-2xl mb-12"
                  style={{ height: "clamp(300px, 42vw, 600px)" }}
                >
                  <Image
                    src={heroImg}
                    alt={isAr ? service.titleAr : service.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 62vw"
                  />
                  <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.1)" }} />
                  <div className="absolute bottom-5 left-5">
                    <span
                      className="px-3 py-1.5 rounded-full text-[10px] tracking-[0.22em] uppercase font-bold backdrop-blur-sm"
                      style={{
                        background: "rgba(201,161,91,0.14)",
                        border: "1px solid rgba(201,161,91,0.28)",
                        color: GOLD,
                      }}
                    >
                      {isAr ? service.tagAr : service.tag}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <p
                    className="font-light leading-relaxed mb-10"
                    style={{ fontSize: "clamp(16px, 1.8vw, 21px)", color: "rgba(245,241,232,0.78)", lineHeight: 1.95 }}
                  >
                    {isAr ? service.descriptionAr : service.description}
                  </p>
                  <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${isAr ? "flex-row-reverse" : ""}`}>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 px-6 sm:px-8 py-4 rounded-full text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                      style={{
                        background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
                        color: "#050505",
                        boxShadow: "0 8px 32px rgba(201,161,91,0.38)",
                      }}
                    >
                      {isAr ? "احجز استشارة خاصة" : "Book a Consultation"}
                      <span>{isAr ? "←" : "→"}</span>
                    </Link>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.2em] uppercase font-bold no-underline transition-colors duration-300"
                      style={{ color: "rgba(245,241,232,0.38)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GOLD; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(245,241,232,0.38)"; }}
                    >
                      {isAr ? "أو تواصل عبر واتساب" : "Or send a brief via WhatsApp"}
                      <span>{isAr ? "←" : "→"}</span>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right: What's Included */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: [0.19, 1, 0.22, 1] }}
              >
                <div
                  className="rounded-2xl p-8 sticky top-32"
                  style={{
                    background: "rgba(10,10,10,0.9)",
                    border: "1px solid rgba(201,161,91,0.1)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-5 h-px" style={{ background: GOLD }} />
                    <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: GOLD }}>
                      {isAr ? "ما يشمله" : "What's Included"}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {(isAr ? service.includedAr : service.included).map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: isAr ? 12 : -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="flex items-start gap-3.5"
                      >
                        <div
                          className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{
                            background: "rgba(201,161,91,0.12)",
                            border: "1px solid rgba(201,161,91,0.28)",
                          }}
                        >
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <path d="M2 4.5L3.8 6.3L7 3" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[14px] leading-snug" style={{ color: "rgba(245,241,232,0.65)" }}>
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}>
                    <p className="text-[11px] tracking-[0.15em] uppercase leading-relaxed" style={{ color: "rgba(245,241,232,0.28)" }}>
                      {isAr
                        ? "سيتواصل فريقنا معك لمناقشة احتياجاتك المحددة."
                        : "Our concierge team will be in touch within 24 hours."}
                    </p>
                  </div>

                  {/* At a Glance — answers the silent questions */}
                  <div className="mt-7 pt-7" style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-5 h-px" style={{ background: GOLD }} />
                      <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: GOLD }}>
                        {isAr ? "نظرة سريعة" : "At a Glance"}
                      </span>
                    </div>
                    <dl className="space-y-3.5">
                      {facts.map((fact) => (
                        <div
                          key={fact.label.en}
                          className={`flex items-baseline justify-between gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                        >
                          <dt
                            className="text-[10px] tracking-[0.22em] uppercase font-medium flex-shrink-0"
                            style={{ color: "rgba(245,241,232,0.36)" }}
                          >
                            {isAr ? fact.label.ar : fact.label.en}
                          </dt>
                          <dd
                            className={`font-serif text-[14px] ${isAr ? "text-left" : "text-right"}`}
                            style={{ color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
                          >
                            {isAr ? fact.value.ar : fact.value.en}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ══ QUIETLY ENTRUSTED — metrics strip ════════════════ */}
          <section
            className="px-6 md:px-14 py-14 md:py-16"
            style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}
          >
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex items-center justify-center gap-3 mb-10"
              >
                <div className="w-7 h-px" style={{ background: "rgba(201,161,91,0.35)" }} />
                <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                  {isAr ? "ثقة هادئة" : "Quietly Entrusted"}
                </span>
                <div className="w-7 h-px" style={{ background: "rgba(201,161,91,0.35)" }} />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-6 relative">
                {METRICS.map((m, i) => (
                  <motion.div
                    key={m.value.en}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                    className="text-center relative"
                  >
                    {i > 0 && (
                      <div
                        className="hidden sm:block absolute top-1/2 -translate-y-1/2 w-px h-12"
                        style={{
                          background: "rgba(201,161,91,0.18)",
                          [isAr ? "right" : "left"]: 0,
                        }}
                      />
                    )}
                    <div
                      className="font-serif font-light leading-none mb-3"
                      style={{ fontSize: "clamp(34px, 4.5vw, 56px)", color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
                    >
                      {isAr ? m.value.ar : m.value.en}
                    </div>
                    <div
                      className="text-[10.5px] tracking-[0.28em] uppercase font-medium"
                      style={{ color: "rgba(245,241,232,0.42)" }}
                    >
                      {isAr ? m.label.ar : m.label.en}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ WHY WE STAND APART ════════════════════════════════ */}
          <section
            className="px-6 md:px-14 py-20 md:py-28"
            style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}
          >
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-12 md:mb-16"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                  <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                    {isAr ? "ما يميزنا" : "Our Difference"}
                  </span>
                </div>
                <h2
                  className="font-serif font-light"
                  style={{ fontSize: "clamp(28px, 4vw, 52px)", color: CREAM }}
                >
                  {isAr
                    ? <>{trustHeading.split("متميزة")[0]}<em className="italic" style={{ color: GOLD }}>متميزة</em></>
                    : <>{trustHeading.split("Apart")[0]}<em className="italic" style={{ color: GOLD }}>Apart.</em></>
                  }
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {trust.map((item, i) => (
                  <motion.div
                    key={item.t}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.07 }}
                    className="rounded-2xl p-7 group transition-colors duration-300"
                    style={{
                      background: "rgba(10,10,10,0.82)",
                      border: "1px solid rgba(201,161,91,0.08)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,161,91,0.22)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,161,91,0.08)"; }}
                  >
                    {/* Gold tick */}
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center mb-5"
                      style={{ background: "rgba(201,161,91,0.12)", border: "1px solid rgba(201,161,91,0.28)" }}
                    >
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M2 4.5L3.8 6.3L7 3" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <h3
                      className="font-serif font-light mb-3"
                      style={{ fontSize: "clamp(16px, 1.6vw, 19px)", color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
                    >
                      {isAr ? item.tAr : item.t}
                    </h3>
                    <div className="w-7 h-px mb-3" style={{ background: "rgba(201,161,91,0.2)" }} />
                    <p style={{ fontSize: "13px", color: "rgba(245,241,232,0.48)", lineHeight: 1.75 }}>
                      {isAr ? item.dAr : item.d}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ PROCESS ═══════════════════════════════════════════ */}
          <section
            className="px-6 md:px-14 py-20 md:py-28"
            style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}
          >
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-14"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                  <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                    {isAr ? "كيف نعمل" : "How We Work"}
                  </span>
                </div>
                <h2
                  className="font-serif font-light"
                  style={{ fontSize: "clamp(28px, 4vw, 52px)", color: CREAM }}
                >
                  {isAr
                    ? <>من أول مكالمة إلى <em style={{ color: GOLD, fontStyle: "normal" }}>اللحظة الأخيرة.</em></>
                    : <>From first call to <em className="italic" style={{ color: GOLD }}>last moment.</em></>
                  }
                </h2>
              </motion.div>

              {/* 4-step timeline */}
              <div className="relative">
                {/* Connector line (desktop) */}
                <div
                  className="absolute top-8 left-0 right-0 h-px hidden lg:block"
                  style={{ background: "linear-gradient(to right, transparent, rgba(201,161,91,0.2) 15%, rgba(201,161,91,0.2) 85%, transparent)" }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
                  {process.map((step, i) => (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                    >
                      {/* Step number */}
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative"
                        style={{
                          background: "rgba(10,10,10,0.9)",
                          border: "1px solid rgba(201,161,91,0.22)",
                        }}
                      >
                        <span
                          className="font-serif font-light"
                          style={{ fontSize: "15px", color: GOLD, letterSpacing: "0.08em" }}
                        >
                          {step.num}
                        </span>
                      </div>

                      <h3
                        className="font-serif font-light mb-3"
                        style={{ fontSize: "clamp(16px, 1.8vw, 20px)", color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
                      >
                        {isAr ? step.tAr : step.t}
                      </h3>
                      <p style={{ fontSize: "13px", color: "rgba(245,241,232,0.45)", lineHeight: 1.8 }}>
                        {isAr ? step.dAr : step.d}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══ GALLERY ═══════════════════════════════════════════ */}
          <section
            className="px-6 md:px-14 pb-24"
            style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}
          >
            <div className="max-w-6xl mx-auto pt-20">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.62)" }}>
                  {isAr ? "معرض الصور" : "Gallery"}
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
                    style={{ height: i === 0 ? "380px" : "180px" }}
                  >
                    <Image
                      src={img}
                      alt={`${isAr ? service.titleAr : service.title} ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div
                      className="absolute inset-0 transition-colors duration-500"
                      style={{ background: "rgba(5,5,5,0.18)" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ RELATED SERVICES ══════════════════════════════════ */}
          {related.length > 0 && (
            <section
              className="px-6 md:px-14 pb-28 pt-20"
              style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}
            >
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.4)" }} />
                      <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                        {isAr ? "أكمل التجربة" : "Complete the Experience"}
                      </span>
                    </div>
                    <h2
                      className="font-serif font-light leading-tight"
                      style={{ fontSize: "clamp(28px, 4vw, 48px)", color: CREAM }}
                    >
                      <em>{isAr ? "تنسجم بأناقة مع" : "Pair beautifully with"}</em>
                    </h2>
                  </div>
                  <Link
                    href={`/${locale}/services`}
                    className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase no-underline font-bold transition-colors duration-300 hover:text-accent"
                    style={{ color: "rgba(201,161,91,0.52)" }}
                  >
                    {isAr ? "← عرض الكل" : "View all →"}
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {related.map((rel, i) => (
                    <motion.div
                      key={rel.slug}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: i * 0.08 }}
                    >
                      <Link
                        href={`/${locale}/services/${rel.slug}`}
                        className="group block no-underline rounded-2xl overflow-hidden transition-all duration-400"
                        style={{
                          background: "rgba(10,10,10,0.82)",
                          border: "1px solid rgba(201,161,91,0.08)",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,161,91,0.28)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,161,91,0.08)"; }}
                      >
                        <div
                          className="relative overflow-hidden"
                          style={{ height: "200px" }}
                        >
                          <Image
                            src={CATEGORY_HERO[rel.category] ?? rel.img}
                            alt={isAr ? rel.titleAr : rel.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                            sizes="(max-width: 640px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 transition-colors duration-500" style={{ background: "rgba(5,5,5,0.25)" }} />
                          <div className="absolute top-4 left-4">
                            <span
                              className="px-2.5 py-1 rounded-full text-[9px] tracking-[0.18em] uppercase font-bold backdrop-blur-sm"
                              style={{
                                background: "rgba(201,161,91,0.15)",
                                border: "1px solid rgba(201,161,91,0.3)",
                                color: GOLD,
                              }}
                            >
                              {isAr ? rel.categoryLabelAr : rel.categoryLabel}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3
                            className="font-serif font-light italic leading-tight transition-colors duration-300 group-hover:text-accent mb-2"
                            style={{ fontSize: "17px", color: CREAM }}
                          >
                            {isAr ? rel.titleAr : rel.title}
                          </h3>
                          <p className="text-[12px] line-clamp-1" style={{ color: "rgba(245,241,232,0.36)" }}>
                            {isAr ? rel.taglineAr : rel.tagline}
                          </p>
                          <div className="mt-4 flex items-center gap-1.5">
                            <span className="text-[9px] tracking-[0.28em] uppercase font-bold transition-colors duration-300 group-hover:text-accent" style={{ color: "rgba(201,161,91,0.6)" }}>
                              {isAr ? "استكشف ←" : "Explore →"}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ══ CTA ═══════════════════════════════════════════════ */}
          <section
            className="relative px-6 py-28 md:py-36 overflow-hidden"
            style={{ borderTop: "1px solid rgba(201,161,91,0.08)" }}
          >
            <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.72)" }} />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(201,161,91,0.06), transparent)" }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(201,161,91,0.35), transparent)" }}
            />

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center justify-center gap-3 mb-10">
                  <div className="w-9 h-px" style={{ background: "rgba(201,161,91,0.32)" }} />
                  <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.52)" }}>
                    {isAr ? "احجز موعدك" : "Reserve Your Date"}
                  </span>
                  <div className="w-9 h-px" style={{ background: "rgba(201,161,91,0.32)" }} />
                </div>

                <h2
                  className="font-serif font-light leading-[0.9] tracking-tight mb-5"
                  style={{ fontSize: "clamp(40px, 7vw, 86px)", color: CREAM }}
                >
                  <em>
                    {isAr ? "حدّثنا عن فعاليتك" : "Tell us about your event"}
                  </em>
                </h2>

                <p
                  className="font-light mb-3"
                  style={{ fontSize: "clamp(13px, 1.4vw, 16px)", color: "rgba(201,161,91,0.7)", letterSpacing: "0.08em" }}
                >
                  {isAr
                    ? `استشارة خاصة لخدمة ${service.titleAr}`
                    : `A private consultation for ${service.title}`}
                </p>

                <p
                  className="font-light leading-relaxed mx-auto mb-12"
                  style={{ fontSize: "clamp(13px, 1.3vw, 15px)", color: "rgba(245,241,232,0.34)", maxWidth: "420px" }}
                >
                  {isAr
                    ? "فريق الاستقبال لدينا يرد خلال 24 ساعة. جميع الاستفسارات تُعالج بسرية تامة."
                    : "Our event concierge team responds within 24 hours. All enquiries handled with complete discretion."}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-3 px-6 sm:px-10 py-4 sm:py-5 rounded-full text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.24em] uppercase font-bold no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
                      color: "#050505",
                      boxShadow: "0 12px 44px rgba(201,161,91,0.36)",
                    }}
                  >
                    {isAr ? "ابدأ الاستشارة" : "Request a Proposal"}
                    <span className="opacity-60">{isAr ? "←" : "→"}</span>
                  </Link>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.2em] uppercase font-bold no-underline transition-colors duration-300"
                    style={{ color: "rgba(245,241,232,0.42)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GOLD; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(245,241,232,0.42)"; }}
                  >
                    {isAr ? "أو تواصل عبر واتساب" : "Or message us on WhatsApp"}
                    <span>{isAr ? "←" : "→"}</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
