import type { EventType } from "./types";

/**
 * Event types — the seven services Elie offers.
 *
 * Each event page is built from this record. Service pages share the same
 * skeleton (hero → what's provided → capacity → sample menu → process →
 * gallery → testimonial → CTA), so the data shape is identical across all.
 */
export const events: EventType[] = [
  {
    id: "weddings",
    slug: "weddings",
    name: { en: "Luxury Weddings", ar: "حفلات الزفاف الفاخرة" },
    eyebrow: { en: "Bridal Catering & Planning", ar: "تموين وتنظيم الأعراس" },
    tagline: {
      en: "Your love story, served on a plate worth remembering.",
      ar: "قصة حبك، تُقدَّم في طبق يستحق التذكّر.",
    },
    description: {
      en: "Full-service wedding catering for 50 to 2,000 guests — from intimate kosha receptions to grand ballroom feasts, executed with the discretion and detail Riyadh's most demanding hosts require.",
      ar: "تموين زفاف متكامل من 50 إلى 2000 ضيف — من حفلات الكوشة الحميمية إلى ولائم القاعات الكبرى، يُنفّذ بالسرية والاهتمام بالتفاصيل التي يطلبها أكثر مستضيفي الرياض تطلباً.",
    },
    body: {
      en: "A wedding is a single day that lives in memory for a lifetime. Our wedding team coordinates with you and your planner from menu tasting through final guest departure. We bring our own white-glove service staff, transport, and Arabic coffee ceremony — and adapt every detail to honour your family's traditions, whether you're hosting a Najdi-style men's majlis, a women's reception, or a mixed international gathering.",
      ar: "حفل الزفاف يوم واحد يبقى في الذاكرة طوال العمر. ينسّق فريق الأعراس لدينا معك ومع منظّمك من جلسة التذوّق وحتى مغادرة آخر ضيف. نأتي بطاقم خدمتنا الراقي ونقل خاص ومراسم القهوة العربية — ونُكيّف كل تفصيلة لاحترام تقاليد عائلتك، سواء كنت تستضيف مجلس رجال نجدياً، استقبال نساء، أو تجمعاً دولياً مختلطاً.",
    },
    capacity: { min: 50, max: 2000 },
    heroImage: "/images/events/weddings-hero.webp",
    cardImage: "/images/events/weddings-card.webp",
    gallery: [
      "/images/events/weddings-1.webp",
      "/images/events/weddings-2.webp",
      "/images/events/weddings-3.webp",
      "/images/events/weddings-4.webp",
      "/images/events/weddings-5.webp",
    ],
    sampleCategoryIds: ["finger-food", "live-stations", "eastern", "desserts"],
    recommendedCollectionIds: [
      "royal-wedding-collection",
      "kosha-reception-collection",
      "garden-wedding-collection",
    ],
    testimonialIds: ["weddings-1", "weddings-2"],
    included: [
      { en: "Bilingual menu consultation and chef tasting", ar: "استشارة قائمة ثنائية اللغة وجلسة تذوّق مع الشيف" },
      { en: "Full white-glove service staff in tailored uniforms", ar: "طاقم خدمة راقٍ كامل بزي مصمّم خصيصاً" },
      { en: "Arabic coffee and dates welcome ceremony", ar: "مراسم استقبال بالقهوة العربية والتمور" },
      { en: "Crystal, china, and bespoke table dressing", ar: "كريستال وصيني وتنسيق مائدة مصمّم خصيصاً" },
      { en: "On-site culinary brigade and live stations", ar: "فرقة طهي في الموقع ومحطات حية" },
      { en: "Discreet coordination with venue, planner and family", ar: "تنسيق سري مع المكان والمنظّم والعائلة" },
    ],
    seo: {
      title: {
        en: "Luxury Wedding Catering in Riyadh | Elie Catering",
        ar: "تموين أعراس فاخر في الرياض | إيلي للتموين",
      },
      description: {
        en: "Bespoke wedding catering for 50–2,000 guests in Riyadh. Live stations, Arabic coffee ceremony, white-glove service. Request a quotation.",
        ar: "تموين زفاف مخصص من 50 إلى 2000 ضيف في الرياض. محطات حية، مراسم القهوة العربية، خدمة راقية. اطلب عرض سعر.",
      },
    },
  },
  {
    id: "corporate",
    slug: "corporate",
    name: { en: "Corporate Events", ar: "الفعاليات المؤسسية" },
    eyebrow: { en: "Business Catering", ar: "تموين الأعمال" },
    tagline: {
      en: "Coffee, canapés, and conferences — handled with the precision your boardroom expects.",
      ar: "قهوة وكنابيه ومؤتمرات — تُدار بالدقة التي تتوقعها قاعة اجتماعاتك.",
    },
    description: {
      en: "Coffee breaks, working lunches, conference catering and gala dinners for 20 to 500 guests — discreet, on-brand, and on time. Trusted by Riyadh's leading firms and ministry contractors.",
      ar: "استراحات قهوة، غداء عمل، تموين مؤتمرات وحفلات عشاء من 20 إلى 500 ضيف — بسرية واحترافية وفي الوقت المحدد. شريك ثقة لكبرى شركات الرياض ومتعاقدي الوزارات.",
    },
    body: {
      en: "Corporate hospitality is a conversation about your brand. We provide branded napery, custom menu cards, and presentation that matches the formality of your event — from a quarterly board meeting to a 500-guest product launch. Recurring contracts available for offices that host weekly.",
      ar: "ضيافة الأعمال محادثة عن علامتك التجارية. نوفر مفارش بعلامتك التجارية، وبطاقات قائمة مخصصة، وعرضاً يتناسب مع رسمية فعاليتك — من اجتماع مجلس إدارة ربع سنوي إلى إطلاق منتج بـ500 ضيف. تتوفر عقود متكررة للمكاتب التي تستضيف أسبوعياً.",
    },
    capacity: { min: 20, max: 500 },
    heroImage: "/images/events/corporate-hero.webp",
    cardImage: "/images/events/corporate-card.webp",
    gallery: [
      "/images/events/corporate-1.webp",
      "/images/events/corporate-2.webp",
      "/images/events/corporate-3.webp",
      "/images/events/corporate-4.webp",
    ],
    sampleCategoryIds: ["coffee-break", "finger-food", "italian", "arabic-coffee"],
    recommendedCollectionIds: [
      "executive-coffee-break-collection",
      "boardroom-luncheon-collection",
      "product-launch-gala-collection",
    ],
    testimonialIds: ["corporate-1"],
    included: [
      { en: "Branded menu cards and napery options", ar: "بطاقات قائمة ومفارش بعلامتك التجارية" },
      { en: "Premium coffee station with barista on request", ar: "محطة قهوة فاخرة مع باريستا عند الطلب" },
      { en: "Setup, service and breakdown within your time window", ar: "إعداد وخدمة وتفكيك ضمن إطارك الزمني" },
      { en: "Discretion and NDA-ready operations", ar: "سرية واستعداد لاتفاقيات عدم الإفصاح" },
      { en: "Recurring weekly/monthly contract pricing", ar: "تسعير عقود أسبوعية/شهرية متكررة" },
    ],
    seo: {
      title: {
        en: "Corporate Event Catering in Riyadh | Elie Catering",
        ar: "تموين الفعاليات المؤسسية في الرياض | إيلي للتموين",
      },
      description: {
        en: "Discreet, on-brand corporate catering in Riyadh. Coffee breaks, working lunches, product launches, gala dinners for 20–500 guests.",
        ar: "تموين مؤسسي راقٍ ومصمّم لعلامتك التجارية في الرياض. استراحات قهوة، غداء عمل، إطلاق منتجات، حفلات عشاء من 20 إلى 500 ضيف.",
      },
    },
  },
  {
    id: "vip",
    slug: "vip-receptions",
    name: { en: "VIP Receptions", ar: "حفلات الاستقبال الخاصة" },
    eyebrow: { en: "Private & Discreet", ar: "خاص وسري" },
    tagline: {
      en: "For events you do not want photographed.",
      ar: "للفعاليات التي لا تريد تصويرها.",
    },
    description: {
      en: "Bespoke catering for royal residences, diplomatic receptions and ultra-high-net-worth gatherings. White-glove service, signed NDAs, and the kind of detail that does not appear on Instagram.",
      ar: "تموين مخصص للمساكن الملكية والاستقبالات الدبلوماسية والتجمعات الخاصة. خدمة راقية، اتفاقيات سرية موقّعة، والعناية بتفاصيل لا تظهر على إنستغرام.",
    },
    body: {
      en: "Our VIP division operates with the discretion of a private kitchen and the capability of a five-star hotel. Standing arrangements with rare-ingredient suppliers — Beluga caviar, A5 wagyu, white truffle in season. Background-checked staff. No photography, no social posting, no traces. The brief is yours; we deliver it without a paper trail.",
      ar: "يعمل قسمنا الخاص بسرية مطبخ خاص وقدرة فندق خمس نجوم. ترتيبات قائمة مع موردي مكونات نادرة — كافيار البيلوغا، واغيو A5، الكمأة البيضاء في موسمها. طاقم مدقّق الخلفيات. لا تصوير، لا نشر اجتماعي، لا آثار. الإيجاز إيجازك؛ ننفّذه بدون أي سجلات.",
    },
    capacity: { min: 10, max: 300 },
    heroImage: "/images/events/vip-hero.webp",
    cardImage: "/images/events/vip-card.webp",
    gallery: [
      "/images/events/vip-1.webp",
      "/images/events/vip-2.webp",
      "/images/events/vip-3.webp",
    ],
    sampleCategoryIds: ["seafood-sushi", "italian", "live-stations", "desserts"],
    recommendedCollectionIds: [
      "royal-table-collection",
      "diplomatic-reception-collection",
      "private-residence-collection",
    ],
    included: [
      { en: "Private chef consultation at your residence", ar: "استشارة شيف خاصة في مقر إقامتك" },
      { en: "Signed non-disclosure with every team member", ar: "اتفاقية عدم إفصاح موقّعة مع كل عضو فريق" },
      { en: "Rare and seasonal ingredient sourcing", ar: "توريد مكونات نادرة وموسمية" },
      { en: "Discreet uniformed service staff", ar: "طاقم خدمة بزي موحّد وبسرية تامة" },
      { en: "No photography, no social-media presence", ar: "لا تصوير، لا حضور على وسائل التواصل" },
      { en: "Last-minute and rolling-brief capability", ar: "قدرة على الإيجازات المتأخرة والمتجددة" },
    ],
    seo: {
      title: {
        en: "VIP & Private Catering in Riyadh | Elie Catering",
        ar: "تموين الفعاليات الخاصة والـ VIP في الرياض | إيلي للتموين",
      },
      description: {
        en: "Discreet VIP catering for royal residences, diplomats and ultra-high-net-worth events in Riyadh. NDAs, rare ingredients, white-glove service.",
        ar: "تموين خاص للمساكن الملكية والدبلوماسيين والفعاليات شديدة الخصوصية في الرياض. اتفاقيات سرية، مكونات نادرة، خدمة راقية.",
      },
    },
  },
  {
    id: "private",
    slug: "private-gatherings",
    name: { en: "Private Gatherings", ar: "المناسبات الخاصة" },
    eyebrow: { en: "Intimate Hosting", ar: "ضيافة حميمة" },
    tagline: {
      en: "From majlis dinners to villa receptions — hosting made effortless.",
      ar: "من عشاء المجلس إلى استقبالات الفيلا — استضافة بلا عناء.",
    },
    description: {
      en: "Family dinners, engagement parties, milestone anniversaries and home gatherings — catering brought to your majlis, garden or rented venue with full setup and service.",
      ar: "عشاء العائلة، حفلات الخطوبة، الذكرى السنوية، التجمعات المنزلية — تموين يصل إلى مجلسك أو حديقتك أو المكان المؤجّر مع إعداد وخدمة كاملة.",
    },
    body: {
      en: "Private hosting is where Elie began. We bring the kitchen to your home — whether that's a fifty-guest villa engagement, a Friday family dinner, or a return-from-Hajj welcome. Everything is set up, served, and cleaned up before the night ends. You host. We make sure nothing else has to.",
      ar: "الاستضافة الخاصة هي ما بدأت منه إيلي. نأتي بالمطبخ إلى منزلك — سواء كانت خطوبة بـ50 ضيفاً في الفيلا، أو عشاء عائلة يوم الجمعة، أو استقبال عودة من الحج. كل شيء يُعدّ ويُقدَّم ويُنظّف قبل انتهاء الليلة. أنت تستضيف. ونحن نتأكد ألا تحتاج فعل شيء آخر.",
    },
    capacity: { min: 15, max: 300 },
    heroImage: "/images/events/private-hero.webp",
    cardImage: "/images/events/private-card.webp",
    gallery: [
      "/images/events/private-1.webp",
      "/images/events/private-2.webp",
      "/images/events/private-3.webp",
      "/images/events/private-4.webp",
    ],
    sampleCategoryIds: ["bbq", "eastern", "live-stations", "desserts"],
    recommendedCollectionIds: [
      "family-majlis-collection",
      "villa-engagement-collection",
      "anniversary-dinner-collection",
    ],
    included: [
      { en: "Home, garden or venue setup and breakdown", ar: "إعداد وتفكيك في المنزل أو الحديقة أو المكان" },
      { en: "Full crockery, glassware and table linens", ar: "أواني وزجاجيات ومفارش مائدة كاملة" },
      { en: "Trained service staff in muted-tone uniforms", ar: "طاقم خدمة مدرّب بزي بألوان هادئة" },
      { en: "Live stations or buffet — your choice", ar: "محطات حية أو بوفيه — اختيارك" },
      { en: "Discreet operations — entry through service door", ar: "عمليات بسرية — دخول من باب الخدمة" },
    ],
    seo: {
      title: {
        en: "Private Home & Villa Catering in Riyadh | Elie Catering",
        ar: "تموين المنازل والفلل في الرياض | إيلي للتموين",
      },
      description: {
        en: "Catering brought to your majlis, villa or garden in Riyadh. Engagement parties, family dinners, anniversaries from 15 to 300 guests.",
        ar: "تموين يصل إلى مجلسك أو فيلتك أو حديقتك في الرياض. حفلات خطوبة، عشاء عائلة، ذكرى سنوية من 15 إلى 300 ضيف.",
      },
    },
  },
  {
    id: "birthdays",
    slug: "birthdays",
    name: { en: "Birthday Celebrations", ar: "حفلات أعياد الميلاد" },
    eyebrow: { en: "Children & Adults", ar: "للأطفال والكبار" },
    tagline: {
      en: "From a child's first birthday to a fortieth that deserves the works.",
      ar: "من عيد الميلاد الأول للطفل إلى الأربعين الذي يستحق كل شيء.",
    },
    description: {
      en: "Birthday catering with a complete celebration package — mini snacks, candy corner, custom cake, beverages and party-styled service for every age.",
      ar: "تموين أعياد الميلاد مع باقة احتفال كاملة — مقبلات صغيرة، ركن الحلوى، كيكة مخصصة، مشروبات وخدمة بطابع الحفل لكل الأعمار.",
    },
    body: {
      en: "Birthdays are special because they're personal. Our birthday package adapts entirely — themed kids' menus with mini burgers and chocolate fountains, sophisticated grown-up celebrations with sushi and wine-pairing mocktails, or a multi-generational family celebration that has something for everyone at the table.",
      ar: "أعياد الميلاد مميزة لأنها شخصية. تتكيّف باقتنا تماماً — قوائم أطفال بمواضيع تشمل برغر صغير ونوافير الشوكولاتة، احتفالات راقية للكبار بالسوشي ومشروبات مع نكهات، أو احتفال عائلي متعدد الأجيال يحتوي شيئاً للجميع على المائدة.",
    },
    capacity: { min: 10, max: 250 },
    heroImage: "/images/events/birthdays-hero.webp",
    cardImage: "/images/events/birthdays-card.webp",
    gallery: [
      "/images/events/birthdays-1.webp",
      "/images/events/birthdays-2.webp",
      "/images/events/birthdays-3.webp",
    ],
    sampleCategoryIds: ["finger-food", "bbq", "live-stations", "desserts"],
    recommendedCollectionIds: [
      "kids-birthday-collection",
      "milestone-birthday-collection",
      "sweet-sixteen-collection",
    ],
    included: [
      { en: "Custom celebration cake — chocolate-stuffed signature", ar: "كيكة احتفال مخصصة — حشوة الشوكولاتة المميزة" },
      { en: "Candy and chocolate fountain corner", ar: "ركن الحلوى ونافورة الشوكولاتة" },
      { en: "Balloon styling and entrance décor", ar: "تنسيق البالونات وديكور المدخل" },
      { en: "Age-tailored menu — kids, teens or adult palette", ar: "قائمة حسب العمر — للأطفال أو المراهقين أو الكبار" },
      { en: "Photo backdrop and Instagram-ready styling", ar: "خلفية للتصوير وتنسيق جاهز لإنستغرام" },
    ],
    seo: {
      title: {
        en: "Birthday Party Catering in Riyadh | Elie Catering",
        ar: "تموين حفلات أعياد الميلاد في الرياض | إيلي للتموين",
      },
      description: {
        en: "Complete birthday catering in Riyadh — custom cake, candy corner, themed menus for kids, teens and adults from 10 to 250 guests.",
        ar: "تموين أعياد ميلاد كامل في الرياض — كيكة مخصصة، ركن حلوى، قوائم بمواضيع للأطفال والمراهقين والكبار من 10 إلى 250 ضيف.",
      },
    },
  },
  {
    id: "ramadan-eid",
    slug: "ramadan-eid",
    name: { en: "Ramadan & Eid Events", ar: "فعاليات رمضان والعيد" },
    eyebrow: { en: "Iftar, Suhoor & Eid Hosting", ar: "الإفطار والسحور وضيافة العيد" },
    tagline: {
      en: "Ramadan tables that bring everyone — and everything — together.",
      ar: "موائد رمضان التي تجمع الجميع — وكل شيء — معاً.",
    },
    description: {
      en: "Family Iftar and Suhoor catering, corporate Ramadan tents, and Eid celebration menus. Seasonal expertise for the most important hosting weeks of the year.",
      ar: "تموين إفطار وسحور العائلة، خيام رمضان المؤسسية، وقوائم احتفال العيد. خبرة موسمية لأهم أسابيع الاستضافة في السنة.",
    },
    body: {
      en: "Ramadan is our busiest season for a reason. We plan months in advance to deliver Iftars that begin on the maghrib call, Suhoors that hold the table through the night, and Eid gatherings that honour returning family. Pricing accommodates the seasonal scale — speak to us early to lock your dates.",
      ar: "رمضان هو موسمنا الأكثر ازدحاماً لسبب وجيه. نخطّط قبل أشهر لتقديم إفطار يبدأ مع أذان المغرب، سحور يحافظ على المائدة طوال الليل، وتجمعات عيد تكرّم العائلة العائدة. التسعير يستوعب الحجم الموسمي — تحدّث معنا مبكراً لتأمين تواريخك.",
    },
    capacity: { min: 20, max: 1500 },
    heroImage: "/images/events/ramadan-eid-hero.webp",
    cardImage: "/images/events/ramadan-eid-card.webp",
    gallery: [
      "/images/events/ramadan-eid-1.webp",
      "/images/events/ramadan-eid-2.webp",
      "/images/events/ramadan-eid-3.webp",
      "/images/events/ramadan-eid-4.webp",
    ],
    sampleCategoryIds: ["eastern", "arabic-coffee", "desserts", "live-stations"],
    recommendedCollectionIds: [
      "ramadan-iftar-collection",
      "corporate-ramadan-tent-collection",
      "eid-family-feast-collection",
    ],
    included: [
      { en: "Iftar-time precision — service begins at maghrib", ar: "دقة وقت الإفطار — الخدمة تبدأ مع أذان المغرب" },
      { en: "Dates, Arabic coffee and breaking-of-fast ceremony", ar: "تمور وقهوة عربية ومراسم كسر الصوم" },
      { en: "Suhoor menu hot through to imsak", ar: "قائمة سحور تبقى ساخنة حتى الإمساك" },
      { en: "Majlis-style seating and ground service available", ar: "جلسات على طريقة المجلس وخدمة أرضية متوفرة" },
      { en: "Tented venue setup for outdoor Ramadan gatherings", ar: "إعداد خيام لتجمعات رمضان الخارجية" },
    ],
    seo: {
      title: {
        en: "Ramadan Iftar & Eid Catering in Riyadh | Elie Catering",
        ar: "تموين إفطار رمضان والعيد في الرياض | إيلي للتموين",
      },
      description: {
        en: "Family Iftars, Suhoors, corporate Ramadan tents and Eid feasts in Riyadh — 20 to 1,500 guests. Book early; the season fills fast.",
        ar: "إفطار عائلي، سحور، خيام رمضان مؤسسية، وولائم عيد في الرياض — 20 إلى 1500 ضيف. احجز مبكراً؛ الموسم يمتلئ بسرعة.",
      },
    },
  },
  {
    id: "government",
    slug: "government",
    name: { en: "Government Events", ar: "الفعاليات الحكومية" },
    eyebrow: { en: "Ministerial & Official", ar: "وزاري ورسمي" },
    tagline: {
      en: "Protocol-grade catering for ministries and official delegations.",
      ar: "تموين بمستوى البروتوكول للوزارات والوفود الرسمية.",
    },
    description: {
      en: "Catering for ministry events, foreign delegations, official ceremonies and state-level hosting. Protocol-aware, security-cleared, and operationally invisible.",
      ar: "تموين فعاليات الوزارات والوفود الأجنبية والمراسم الرسمية والاستضافة على مستوى الدولة. واعٍ للبروتوكول، أمنياً مؤهّل، وعمليات غير ملحوظة.",
    },
    body: {
      en: "Government catering is judged by what does not happen. No delays. No incidents. No surprises. Our team has cleared security for major ministries, hosted foreign delegations, and supported state ceremonies for several years. We know the protocols — including dietary, religious, and diplomatic sensitivities — and we deliver against them quietly.",
      ar: "التموين الحكومي يُحكم عليه بما لا يحدث. لا تأخير. لا حوادث. لا مفاجآت. فريقنا حصل على التصاريح الأمنية لوزارات كبرى، واستضاف وفوداً أجنبية، ودعم مراسم دولة لعدة سنوات. نعرف البروتوكولات — بما فيها الحساسيات الغذائية والدينية والدبلوماسية — وننفّذها بهدوء.",
    },
    capacity: { min: 50, max: 1500 },
    heroImage: "/images/events/government-hero.webp",
    cardImage: "/images/events/government-card.webp",
    gallery: [
      "/images/events/government-1.webp",
      "/images/events/government-2.webp",
      "/images/events/government-3.webp",
    ],
    sampleCategoryIds: ["eastern", "arabic-coffee", "live-stations", "desserts"],
    recommendedCollectionIds: [
      "ministry-reception-collection",
      "state-banquet-collection",
      "delegation-luncheon-collection",
    ],
    included: [
      { en: "Security-cleared staff with national ID verification", ar: "طاقم بتصاريح أمنية وتحقق من الهوية الوطنية" },
      { en: "Protocol-trained service for diplomatic hosting", ar: "خدمة مدرّبة على البروتوكول للاستضافة الدبلوماسية" },
      { en: "Dietary, religious and cultural compliance", ar: "التزام غذائي وديني وثقافي" },
      { en: "Full Arabic coffee and dates protocol ceremony", ar: "مراسم كاملة للقهوة العربية والتمور بالبروتوكول" },
      { en: "Written run-of-show and minute-by-minute timeline", ar: "خطة عرض مكتوبة وجدول زمني دقيقة بدقيقة" },
    ],
    seo: {
      title: {
        en: "Government & Ministry Catering in Riyadh | Elie Catering",
        ar: "التموين الحكومي والوزاري في الرياض | إيلي للتموين",
      },
      description: {
        en: "Protocol-grade catering for ministries, foreign delegations and state ceremonies in Riyadh. Security-cleared, dietary-compliant, invisible execution.",
        ar: "تموين بمستوى البروتوكول للوزارات والوفود الأجنبية ومراسم الدولة في الرياض. طاقم بتصاريح أمنية، توافق غذائي، تنفيذ غير ملحوظ.",
      },
    },
  },
];

export const eventIds = events.map((e) => e.id);
