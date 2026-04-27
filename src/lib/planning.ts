export type PlanningService = {
  slug: string;
  path: string;
  title: string;
  titleAr: string;
  eyebrow: string;
  eyebrowAr: string;
  tag: string;
  tagAr: string;
  tagline: string;
  taglineAr: string;
  heroImg: string;
  img: string;
  color: string;
  description: string;
  descriptionAr: string;

  intro: string;
  introAr: string;

  /* Core service blocks */
  blocks: {
    title: string;
    titleAr: string;
    icon: string;
    items: string[];
    itemsAr: string[];
  }[];

  /* What's included list */
  included: string[];
  includedAr: string[];

  /* Event types / occasions */
  occasions: string[];
  occasionsAr: string[];

  gallery: string[];
};

export const planningServices: PlanningService[] = [
  /* ─── EVENT PLANNING ─────────────────────────────────────── */
  {
    slug: "event-planning",
    path: "/planning/event-planning",
    title: "Event Planning",
    titleAr: "تنظيم الفعاليات",
    eyebrow: "Corporate & Institutional",
    eyebrowAr: "المؤسسي والحكومي",
    tag: "Full Service",
    tagAr: "خدمة شاملة",
    tagline: "From product launches to grand galas — executed with flawless precision.",
    taglineAr: "من إطلاق المنتجات إلى الحفلات الكبرى — تُنفَّذ بدقة لا تشوبها شائبة.",
    heroImg: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
    color: "from-violet-900/80",
    description:
      "Full-service corporate and institutional event planning across Saudi Arabia. We manage every vendor, timeline, and contingency so your event unfolds flawlessly — from the first concept session to the final curtain call.",
    descriptionAr:
      "تنظيم شامل للفعاليات المؤسسية والحكومية في جميع أنحاء المملكة العربية السعودية. ندير كل مورد وجدول زمني وطارئ حتى تسير فعاليتك بسلاسة — من أول جلسة مفاهيمية إلى الإسدال الأخير.",

    intro:
      "Elie's corporate and institutional event planning division handles the Kingdom's most prestigious gatherings — from product launches at five-star venues to government ceremonies attended by senior dignitaries. Our senior planning team operates with absolute precision and complete discretion, transforming complex briefs into seamless, memorable experiences. We apply a rigorous strategy-first methodology: every decision — from venue selection to guest flow design — is made in service of a single goal: an event that exceeds every expectation.",
    introAr:
      "يتولى قسم تنظيم الفعاليات المؤسسية والحكومية في إيلي أرقى التجمعات في المملكة — من إطلاق المنتجات في فنادق خمس نجوم إلى المراسم الحكومية التي يحضرها كبار المسؤولين. يعمل فريق التخطيط الأول لدينا بدقة مطلقة وسرية تامة، محوِّلاً المتطلبات المعقدة إلى تجارب سلسة لا تُنسى. نطبق منهجية صارمة تبدأ بالاستراتيجية: كل قرار — من اختيار المكان إلى تصميم تدفق الضيوف — يُتخذ في خدمة هدف واحد: فعالية تفوق كل توقع.",

    blocks: [
      {
        title: "Vision & Concept Development",
        titleAr: "تطوير الرؤية والمفهوم",
        icon: "✦",
        items: [
          "Discovery sessions to align on objectives and audience",
          "Creative direction & thematic concept design",
          "Venue analysis and site visit management",
          "Guest journey mapping from arrival to departure",
          "Budget allocation strategy and phased spend planning",
          "Mood board and visual identity presentation",
        ],
        itemsAr: [
          "جلسات اكتشاف لمواءمة الأهداف والجمهور",
          "التوجيه الإبداعي وتصميم المفهوم الموضوعي",
          "تحليل المكان وإدارة زيارات الموقع",
          "رسم خريطة رحلة الضيف من الوصول إلى المغادرة",
          "استراتيجية توزيع الميزانية وخطط الإنفاق المرحلية",
          "تقديم لوح المزاج والهوية البصرية",
        ],
      },
      {
        title: "Full Project Management",
        titleAr: "إدارة المشروع الكاملة",
        icon: "◈",
        items: [
          "Dedicated senior event director and planning team",
          "Supplier sourcing, vetting and contract management",
          "Master timeline and run-of-show development",
          "Budget creation, tracking and variance reporting",
          "Risk assessment and contingency planning",
          "Regular progress briefings and client sign-offs",
        ],
        itemsAr: [
          "مدير فعاليات أول مخصص وفريق تخطيط",
          "توفير الموردين والتدقيق في عقودهم وإدارتها",
          "تطوير الجدول الزمني الرئيسي وسير العرض",
          "إنشاء الميزانية ومتابعتها وتقارير التباين",
          "تقييم المخاطر والتخطيط للطوارئ",
          "إحاطات منتظمة بالتقدم وموافقات العميل",
        ],
      },
      {
        title: "Styling & Design Direction",
        titleAr: "توجيه التنسيق والتصميم",
        icon: "◇",
        items: [
          "Custom décor concepts and branded environment design",
          "Furniture sourcing and luxury hire coordination",
          "Stage, backdrop and feature wall design",
          "Ambient, accent and architectural lighting design",
          "Floral arrangements and display table curation",
          "Branded signage, collateral and welcome gifts",
        ],
        itemsAr: [
          "مفاهيم ديكور مخصصة وتصميم بيئة ذات علامة تجارية",
          "توفير الأثاث وتنسيق الاستئجار الفاخر",
          "تصميم المسرح والخلفية وجدار الميزة",
          "تصميم إضاءة محيطية وبارزة ومعمارية",
          "ترتيبات زهرية وتقييم طاولات العرض",
          "لافتات ذات علامة تجارية ومطبوعات وهدايا ترحيب",
        ],
      },
      {
        title: "Day-of Coordination",
        titleAr: "تنسيق يوم الفعالية",
        icon: "◉",
        items: [
          "Full supplier coordination and delivery supervision",
          "VIP and VVIP guest management protocols",
          "Real-time troubleshooting and escalation management",
          "Entertainment and speaker supervision",
          "Guest flow and crowd management",
          "Post-event pack-down and debrief report",
        ],
        itemsAr: [
          "تنسيق كامل للموردين والإشراف على التوصيل",
          "بروتوكولات إدارة الضيوف VIP وVVIP",
          "إدارة استكشاف الأخطاء والتصعيد في الوقت الفعلي",
          "الإشراف على الترفيه والمتحدثين",
          "إدارة تدفق الضيوف والحشود",
          "التفكيك بعد الفعالية وتقرير الإحاطة",
        ],
      },
      {
        title: "Entertainment & Experience Design",
        titleAr: "الترفيه وتصميم التجربة",
        icon: "◎",
        items: [
          "Entertainment booking — live bands, oud players, percussionists",
          "Speaker and MC scheduling and briefing",
          "Interactive experience and activation design",
          "Sensory planning — scent, lighting, sound and texture",
          "AV planning and technical production management",
          "Livestream and hybrid event support",
        ],
        itemsAr: [
          "حجز الترفيه — فرق حية وعوازفو العود والقرقعة",
          "جدولة المتحدثين ومقدمي البرامج وإحاطتهم",
          "تصميم التجربة التفاعلية والتفعيل",
          "التخطيط الحسي — العطر والإضاءة والصوت والملمس",
          "تخطيط الصوت والصورة وإدارة الإنتاج التقني",
          "دعم البث المباشر والفعاليات الهجينة",
        ],
      },
    ],

    included: [
      "Dedicated senior event director",
      "Strategy & concept development sessions",
      "Full vendor sourcing and management",
      "Master timeline & run-of-show",
      "Styling direction & décor coordination",
      "Day-of coordination team",
      "VIP guest management protocols",
      "Post-event debrief report",
    ],
    includedAr: [
      "مدير فعاليات أول مخصص",
      "جلسات تطوير الاستراتيجية والمفهوم",
      "توفير وإدارة جميع الموردين",
      "الجدول الزمني الرئيسي وسير العرض",
      "توجيه التنسيق وتنسيق الديكور",
      "فريق تنسيق يوم الفعالية",
      "بروتوكولات إدارة الضيوف VIP",
      "تقرير إحاطة ما بعد الفعالية",
    ],

    occasions: [
      "Product Launches",
      "Gala Dinners",
      "Government Ceremonies",
      "Brand Activations",
      "Annual Celebrations",
      "Conferences & Summits",
      "Award Nights",
      "Royal Receptions",
    ],
    occasionsAr: [
      "إطلاق المنتجات",
      "حفلات العشاء الكبرى",
      "المراسم الحكومية",
      "تفعيلات العلامات التجارية",
      "الاحتفالات السنوية",
      "المؤتمرات والقمم",
      "حفلات توزيع الجوائز",
      "الاستقبالات الملكية",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    ],
  },

  /* ─── PARTY PLANNING ─────────────────────────────────────── */
  {
    slug: "party-planning",
    path: "/planning/party-planning",
    title: "Party Planning",
    titleAr: "تنظيم الحفلات",
    eyebrow: "Celebrations & Private Gatherings",
    eyebrowAr: "الاحتفالات والتجمعات الخاصة",
    tag: "Bespoke",
    tagAr: "مخصص",
    tagline: "Milestone moments crafted with Khaleeji warmth and world-class luxury.",
    taglineAr: "لحظات فارقة تُصاغ بدفء خليجي وفخامة عالمية.",
    heroImg: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    img: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
    color: "from-rose-900/70",
    description:
      "Bespoke private party planning for birthdays, Eid celebrations, engagements, and milestone events — infused with Saudi warmth and world-class luxury production.",
    descriptionAr:
      "تخطيط حفلات خاصة مخصصة لأعياد الميلاد واحتفالات العيد وحفلات الخطوبة والمناسبات الفارقة — مشبعة بالدفء السعودي وإنتاج عالمي المستوى.",

    intro:
      "Whether it's an intimate birthday gathering for fifty guests or a landmark Eid celebration for five hundred, our party planning team brings Khaleeji warmth and world-class production values to every occasion. We design every moment — from the arrival experience to the final farewell — blending Saudi cultural richness with contemporary luxury. Our approach begins with understanding your vision, your guests, and the feeling you want to create, then building every detail around that intention.",
    introAr:
      "سواء كان تجمعاً خاصاً لعيد ميلاد لخمسين ضيفاً أو احتفالاً بارزاً بعيد الفطر لخمسمئة ضيف، يجلب فريق تنظيم الحفلات لدينا الدفء الخليجي وقيم الإنتاج العالمية إلى كل مناسبة. نصمم كل لحظة — من تجربة الوصول إلى الوداع الأخير — مزيجاً بين الثراء الثقافي السعودي والفخامة المعاصرة. يبدأ نهجنا بفهم رؤيتك وضيوفك والشعور الذي تريد إيجاده، ثم بناء كل تفصيلة حول تلك النية.",

    blocks: [
      {
        title: "Celebration Vision & Vibe",
        titleAr: "رؤية الاحتفال وأجواؤه",
        icon: "✦",
        items: [
          "Discovery conversations about occasion, purpose and guest profile",
          "Creative direction and theme concept development",
          "Mood boards tailored to your aesthetic — modern, traditional or fusion",
          "Venue assessment and layout visualisation",
          "Guest experience journey from arrival to farewell",
          "Budget strategy and priority allocation",
        ],
        itemsAr: [
          "محادثات اكتشاف حول المناسبة والغرض وملف الضيوف",
          "التوجيه الإبداعي وتطوير مفهوم الموضوع",
          "ألواح مزاج مصممة لجمالياتك — عصري أو تقليدي أو دمج",
          "تقييم المكان وتصوير التخطيط",
          "رحلة تجربة الضيف من الوصول إلى الوداع",
          "استراتيجية الميزانية وتحديد الأولويات",
        ],
      },
      {
        title: "Full or Partial Party Planning",
        titleAr: "التخطيط الكامل أو الجزئي للحفلة",
        icon: "◈",
        items: [
          "End-to-end party management from concept to pack-down",
          "Supplier sourcing — caterers, florists, photographers, entertainers",
          "Venue sourcing, booking and contract negotiation",
          "Guest list management and invitation coordination",
          "Master timeline and detailed run-of-show",
          "Partial planning support if some suppliers are already booked",
        ],
        itemsAr: [
          "إدارة شاملة للحفلة من المفهوم إلى التفكيك",
          "توفير الموردين — المطبخيون والزهوريون والمصورون والفنانون",
          "توفير المكان وحجزه والتفاوض على العقد",
          "إدارة قائمة الضيوف وتنسيق الدعوات",
          "الجدول الزمني الرئيسي وسير العرض المفصل",
          "دعم التخطيط الجزئي إذا كان بعض الموردين محجوزين مسبقاً",
        ],
      },
      {
        title: "Décor, Styling & Ambiance",
        titleAr: "الديكور والتنسيق والأجواء",
        icon: "◇",
        items: [
          "Custom styling plans and full mood board presentation",
          "Furniture, prop and linen hire coordination",
          "Entrance styling, backdrop design and feature elements",
          "Ambient lighting and coloured wash design",
          "Floral arrangements, centrepieces and table styling",
          "Signage, personalised details and cultural touches",
        ],
        itemsAr: [
          "خطط تنسيق مخصصة وعرض لوح مزاج كامل",
          "تنسيق استئجار الأثاث والدعائم والكتان",
          "تنسيق المدخل وتصميم الخلفية والعناصر المميزة",
          "تصميم إضاءة محيطية وغسيل ملون",
          "ترتيبات زهرية وقطع مركزية وتنسيق الطاولات",
          "اللافتات والتفاصيل الشخصية واللمسات الثقافية",
        ],
      },
      {
        title: "On-the-Day Coordination",
        titleAr: "تنسيق يوم الحفلة",
        icon: "◉",
        items: [
          "Full supplier coordination and delivery supervision",
          "Setup and installation oversight",
          "Guest support and welcome management",
          "Entertainment and activity management",
          "Real-time troubleshooting and problem resolution",
          "Post-party pack-down and vendor sign-off",
        ],
        itemsAr: [
          "تنسيق كامل للموردين والإشراف على التوصيل",
          "الإشراف على الإعداد والتركيب",
          "دعم الضيوف وإدارة الاستقبال",
          "إدارة الترفيه والأنشطة",
          "استكشاف الأخطاء وحل المشكلات في الوقت الفعلي",
          "التفكيك بعد الحفلة وتوقيع الموردين",
        ],
      },
      {
        title: "Entertainment & Atmosphere",
        titleAr: "الترفيه والأجواء",
        icon: "◎",
        items: [
          "DJ, live music, oud and traditional percussion curation",
          "Henna artists, Arabic calligraphers and cultural performers",
          "Photo booth, interactive stations and guest engagement design",
          "Lighting direction — colour, mood and scene transitions",
          "Music playlist and atmosphere programming",
          "Sensory planning — fragrance, texture and sound layering",
        ],
        itemsAr: [
          "اختيار الدي جي والموسيقى الحية والعود والإيقاعات التقليدية",
          "فنانو الحناء والخطاطون العرب والفنانون الثقافيون",
          "كشك الصور ومحطات تفاعلية وتصميم تفاعل الضيوف",
          "توجيه الإضاءة — اللون والمزاج وتحولات المشهد",
          "قائمة تشغيل الموسيقى وبرمجة الأجواء",
          "التخطيط الحسي — الطبقات من العطر والملمس والصوت",
        ],
      },
    ],

    included: [
      "Dedicated party planning director",
      "Celebration vision & concept session",
      "Full or partial planning management",
      "Décor & styling coordination",
      "Supplier sourcing and management",
      "Entertainment curation",
      "On-the-day coordination team",
      "Cultural touches & personalised details",
    ],
    includedAr: [
      "مدير تنظيم حفلات مخصص",
      "جلسة رؤية وتصور الاحتفال",
      "إدارة تخطيط كاملة أو جزئية",
      "تنسيق الديكور والتنسيق",
      "توفير الموردين وإدارتهم",
      "اختيار الترفيه",
      "فريق تنسيق يوم الحفلة",
      "لمسات ثقافية وتفاصيل شخصية",
    ],

    occasions: [
      "Milestone Birthdays",
      "Eid Celebrations",
      "Engagement Announcements",
      "Baby Celebrations",
      "Graduation Parties",
      "Reunion Gatherings",
      "Anniversary Dinners",
      "Themed Private Parties",
    ],
    occasionsAr: [
      "أعياد الميلاد الفارقة",
      "احتفالات العيد",
      "إعلانات الخطوبة",
      "احتفالات المولود",
      "حفلات التخرج",
      "تجمعات العائلة",
      "عشاءات الذكرى السنوية",
      "حفلات خاصة موضوعية",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    ],
  },

  /* ─── WEDDING PLANNING ───────────────────────────────────── */
  {
    slug: "wedding-planning",
    path: "/planning/wedding-planning",
    title: "Wedding Planning",
    titleAr: "تخطيط حفلات الزفاف",
    eyebrow: "Bridal & Luxury Ceremonies",
    eyebrowAr: "العروس والمراسم الفاخرة",
    tag: "Most Booked",
    tagAr: "الأكثر حجزاً",
    tagline: "Your love story, choreographed from the zaffa to the final dance.",
    taglineAr: "قصة حبك، منسّقة من الزفة حتى آخر رقصة.",
    heroImg: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    color: "from-amber-900/80",
    description:
      "Complete wedding planning for Saudi and Gulf weddings — from the bridal consultation to the last dance. Intimate or grand, our team makes every moment unforgettable.",
    descriptionAr:
      "تخطيط شامل للأعراس السعودية والخليجية — من استشارة العروس إلى آخر رقصة. سواء كان الحفل حميمياً أو ضخماً، يجعل فريقنا كل لحظة لا تُنسى.",

    intro:
      "Elie's wedding planning service is built around one belief: your wedding day should feel as extraordinary as the love it celebrates. Our bridal team begins working months in advance — aligning every element of the celebration with your vision, your family's traditions, and the unique character of your relationship. From the sacred ceremony and the zaffa entrance to the feast and the final farewell, we are the invisible hand that makes everything look effortless. We take on the vendors, the nerves, the logistics, and the unexpected — so you can be completely present in every golden moment.",
    introAr:
      "خدمة تخطيط الأعراس في إيلي مبنية على اعتقاد واحد: يجب أن يشعر يوم زفافك باستثنائية الحب الذي يحتفي به. يبدأ فريقنا النسائي العمل قبل أشهر — مواءمة كل عنصر من عناصر الاحتفال مع رؤيتك وتقاليد عائلتك والطابع الفريد لعلاقتكما. من المراسم المقدسة وزفة الدخول إلى الوليمة والوداع الأخير، نحن اليد الخفية التي تجعل كل شيء يبدو سهلاً. نتولى الموردين والأعصاب واللوجستيات والمفاجآت — حتى تكون حاضراً تماماً في كل لحظة ذهبية.",

    blocks: [
      {
        title: "Full Wedding Planning",
        titleAr: "تخطيط الزفاف الكامل",
        icon: "✦",
        items: [
          "Comprehensive budget creation and spend tracking",
          "Venue sourcing, site visits and contract negotiation",
          "Full supplier management — catering, florals, photography, entertainment",
          "Bridal consultation sessions and vision alignment",
          "Guest experience strategy and seating management",
          "Timeline development and master run-of-show",
          "Day-of coordination from setup through pack-down",
        ],
        itemsAr: [
          "إنشاء ميزانية شاملة ومتابعة الإنفاق",
          "توفير المكان وزيارات الموقع والتفاوض على العقد",
          "إدارة شاملة للموردين — التموين والزهور والتصوير والترفيه",
          "جلسات استشارة للعروس ومواءمة الرؤية",
          "استراتيجية تجربة الضيوف وإدارة الجلوس",
          "تطوير الجدول الزمني وسير العرض الرئيسي",
          "تنسيق يوم الفعالية من الإعداد إلى التفكيك",
        ],
      },
      {
        title: "Partial Wedding Planning",
        titleAr: "تخطيط الزفاف الجزئي",
        icon: "◈",
        items: [
          "Support for couples who've booked key suppliers or a venue already",
          "Pulling together existing bookings into a cohesive plan",
          "Filling supplier gaps and managing remaining sourcing",
          "Timeline and run-of-show creation",
          "Styling guidance and décor direction",
          "Guest experience recommendations and flow management",
        ],
        itemsAr: [
          "دعم الأزواج الذين حجزوا موردين رئيسيين أو مكاناً مسبقاً",
          "دمج الحجوزات الموجودة في خطة متماسكة",
          "سد فجوات الموردين وإدارة التوفير المتبقي",
          "إنشاء الجدول الزمني وسير العرض",
          "توجيه التنسيق واتجاه الديكور",
          "توصيات تجربة الضيوف وإدارة التدفق",
        ],
      },
      {
        title: "Ceremony & Zaffa Coordination",
        titleAr: "تنسيق المراسم والزفة",
        icon: "◇",
        items: [
          "Ceremony structure, timeline and script coordination",
          "Zaffa choreography and cultural tradition integration",
          "Officiant, religious and cultural ceremony liaison",
          "Processional and recessional choreography",
          "Seating arrangement and ushering protocols",
          "Ceremony sound, lighting and AV coordination",
        ],
        itemsAr: [
          "هيكل المراسم والجدول الزمني وتنسيق النص",
          "تصميم حركات الزفة ودمج التقاليد الثقافية",
          "التواصل مع المأذون والمراسم الدينية والثقافية",
          "تصميم حركات الموكب والخروج",
          "ترتيب الجلوس وبروتوكولات الإرشاد",
          "تنسيق صوت المراسم والإضاءة والصوت والصورة",
        ],
      },
      {
        title: "Bridal Styling & Décor",
        titleAr: "تنسيق العروس والديكور",
        icon: "◉",
        items: [
          "Bridal table and sweetheart seating design",
          "Floral arches, aisle runners and centrepiece direction",
          "Full venue dressing — drapery, lighting and atmosphere",
          "Dessert table, luxury cake and sweet station design",
          "Bridal entrance feature and arrival moment design",
          "Cultural elements — majlis setup, Arabic lanterns, calligraphy",
        ],
        itemsAr: [
          "تصميم طاولة العروس ومقاعد العريس",
          "أقواس زهرية ومسارات الممر وتوجيه القطع المركزية",
          "تجليل المكان الكامل — ستائر وإضاءة وأجواء",
          "تصميم طاولة الحلويات وكعكة فاخرة ومحطة حلوى",
          "تصميم مدخل العروس ولحظة الوصول",
          "العناصر الثقافية — إعداد المجلس والفوانيس العربية والخط",
        ],
      },
      {
        title: "Guest Experience Management",
        titleAr: "إدارة تجربة الضيوف",
        icon: "◎",
        items: [
          "Venue layout optimised for flow, comfort and festivity",
          "Guest welcome, gifting and hospitality coordination",
          "Arabic coffee, dates and traditional arrival rituals",
          "Entertainment programming — live music, nasheed, tabla",
          "Children's zone planning and family-friendly considerations",
          "Post-wedding guest transport and farewell coordination",
        ],
        itemsAr: [
          "تخطيط المكان محسَّن للتدفق والراحة والاحتفال",
          "استقبال الضيوف والهدايا وتنسيق الضيافة",
          "القهوة العربية والتمر وطقوس الوصول التقليدية",
          "برمجة الترفيه — الموسيقى الحية والنشيد والطبلة",
          "تخطيط منطقة الأطفال والاعتبارات الملائمة للعائلة",
          "نقل الضيوف بعد الزفاف وتنسيق الوداع",
        ],
      },
    ],

    included: [
      "Dedicated senior wedding planner",
      "Full or partial planning management",
      "Bridal consultation & vision sessions",
      "Ceremony & zaffa coordination",
      "Bridal styling & décor direction",
      "Complete vendor management",
      "Guest experience management",
      "Day-of coordination team",
    ],
    includedAr: [
      "منسق زفاف أول مخصص",
      "إدارة تخطيط كاملة أو جزئية",
      "استشارة العروس وجلسات الرؤية",
      "تنسيق المراسم والزفة",
      "توجيه تنسيق العروس والديكور",
      "إدارة كاملة للموردين",
      "إدارة تجربة الضيوف",
      "فريق تنسيق يوم الفعالية",
    ],

    occasions: [
      "Saudi Traditional Weddings",
      "Khaleeji Ceremonies",
      "Luxury Private Nikah",
      "Destination Weddings",
      "Intimate Family Weddings",
      "Grand Ballroom Receptions",
      "Outdoor Garden Weddings",
      "Royal-Style Ceremonies",
    ],
    occasionsAr: [
      "الأعراس التقليدية السعودية",
      "المراسم الخليجية",
      "عقد النكاح الخاص الفاخر",
      "أعراس الوجهات السياحية",
      "الأعراس العائلية الحميمة",
      "حفلات استقبال قاعات الكرة الكبرى",
      "أعراس الحدائق الخارجية",
      "مراسم على الطراز الملكي",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    ],
  },
];

export function getPlanningBySlug(slug: string): PlanningService | undefined {
  return planningServices.find((p) => p.slug === slug);
}
