export type DecoratingService = {
  slug: string;
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
  blocks: {
    title: string;
    titleAr: string;
    icon: string;
    items: string[];
    itemsAr: string[];
  }[];
  included: string[];
  includedAr: string[];
  occasions: string[];
  occasionsAr: string[];
  gallery: string[];
};

export const decoratingServices: DecoratingService[] = [

  /* ─── EVENT DECORATING ───────────────────────────────────── */
  {
    slug: "event-decorating",
    title: "Event Decorating",
    titleAr: "تزيين الفعاليات",
    eyebrow: "Corporate & Gala",
    eyebrowAr: "المؤسسي والحفلات الكبرى",
    tag: "Signature",
    tagAr: "مميز",
    tagline: "Grand environments that command attention before a single word is spoken.",
    taglineAr: "بيئات فارهة تستأثر بالانتباه قبل أن تُقال كلمة واحدة.",
    heroImg: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
    color: "from-violet-900/80",
    description:
      "Full venue transformation for corporate events, galas, product launches, and government ceremonies — stage design, lighting architecture, branded environments, and exquisite floral displays.",
    descriptionAr:
      "تحويل شامل للمكان للفعاليات المؤسسية والحفلات الكبرى وإطلاق المنتجات والمراسم الحكومية — تصميم مسرح وهندسة إضاءة وبيئات ذات علامة تجارية وعروض زهرية رائعة.",
    intro:
      "The moment guests walk into an Elie-decorated event, they know they are somewhere extraordinary. Our event decorating team works at the intersection of architecture, design, and theatrical production — crafting environments that reinforce your brand identity, captivate your audience, and elevate every moment of the occasion. From the grand entrance through to the centrepiece stage, every visual element is intentional, cohesive, and executed with precision. We have transformed blank ballrooms into immersive branded worlds, desert venues into crystal palaces, and rooftops into candlelit garden terraces for the Kingdom's most prestigious corporate gatherings.",
    introAr:
      "في اللحظة التي يدخل فيها الضيوف إلى فعالية مزيّنة من قِبل إيلي، يعلمون أنهم في مكان استثنائي. يعمل فريق تزيين الفعاليات لدينا عند تقاطع الهندسة المعمارية والتصميم والإنتاج المسرحي — صانعاً بيئات تعزز هوية علامتك التجارية وتأسر جمهورك وترفع كل لحظة من المناسبة. من المدخل الكبير إلى المسرح المحوري، كل عنصر بصري متعمَّد ومتسق ومنفَّذ بدقة. لقد حوّلنا قاعات فارغة إلى عوالم ذات علامة تجارية غامرة، ومواقع صحراوية إلى قصور كريستالية، وأسطح مبانٍ إلى شرفات حدائق مضاءة بالشموع لأرقى التجمعات المؤسسية في المملكة.",

    blocks: [
      {
        title: "Concept & Vision Design",
        titleAr: "تصميم المفهوم والرؤية",
        icon: "✦",
        items: [
          "Discovery sessions to understand brand, audience and objectives",
          "Full concept development with mood boards and visual references",
          "3D layout visualisation and space planning",
          "Colour palette, material and texture direction",
          "Budget allocation strategy across all decorating elements",
          "Phased presentation with client sign-off at each stage",
        ],
        itemsAr: [
          "جلسات اكتشاف لفهم العلامة التجارية والجمهور والأهداف",
          "تطوير مفهوم كامل مع ألواح مزاج ومراجع بصرية",
          "تصور تخطيط ثلاثي الأبعاد وتخطيط المساحة",
          "لوحة الألوان واتجاه المواد والملمس",
          "استراتيجية توزيع الميزانية على جميع عناصر التزيين",
          "عرض مرحلي مع موافقة العميل في كل مرحلة",
        ],
      },
      {
        title: "Stage & Backdrop Design",
        titleAr: "تصميم المسرح والخلفية",
        icon: "◈",
        items: [
          "Custom stage builds scaled to the venue and audience size",
          "LED screen integration and media wall design",
          "Fabric, floral and sculptural backdrop creation",
          "Branded podium, lectern and speaker staging",
          "VIP and VVIP seating areas with bespoke styling",
          "Red carpet, entrance archway and arrival experience design",
        ],
        itemsAr: [
          "بناء مسرح مخصص متناسب مع المكان وحجم الجمهور",
          "دمج شاشات LED وتصميم جدران الوسائط",
          "إنشاء خلفيات من الأقمشة والزهور والمنحوتات",
          "منصة بيانات ومنبر وتأهيل المتحدثين ذو علامة تجارية",
          "مناطق جلوس VIP وVVIP بتنسيق خاص",
          "السجادة الحمراء ومدخل القوس وتصميم تجربة الوصول",
        ],
      },
      {
        title: "Lighting Architecture",
        titleAr: "هندسة الإضاءة",
        icon: "◇",
        items: [
          "Full venue lighting design from ambient to architectural",
          "Gobo projections and custom pattern work",
          "Colour wash and dynamic scene programming",
          "Pin spot and feature lighting for key display elements",
          "Uplighting for drapery, columns and structural features",
          "LED canopy, starfield ceiling and overhead installations",
        ],
        itemsAr: [
          "تصميم إضاءة كاملة للمكان من المحيطة إلى المعمارية",
          "إسقاطات الجوبو وأعمال النمط المخصصة",
          "غسيل الألوان وبرمجة المشاهد الديناميكية",
          "إضاءة Pin Spot وميزات لعناصر العرض الرئيسية",
          "إضاءة علوية للستائر والأعمدة والعناصر الهيكلية",
          "مظلة LED وسقف المجرة والتركيبات العلوية",
        ],
      },
      {
        title: "Floral & Display Design",
        titleAr: "تصميم الزهور والعروض",
        icon: "◉",
        items: [
          "Statement floral centrepieces for dining and reception areas",
          "Entrance floral arches and sculptural installations",
          "Suspended floral chandeliers and ceiling arrangements",
          "Display tables with seasonal produce and artisan elements",
          "Table linen, runner and place-setting coordination",
          "Living walls, topiary and structural greenery design",
        ],
        itemsAr: [
          "قطع مركزية زهرية بارزة لمناطق الطعام والاستقبال",
          "أقواس زهرية للمدخل وتركيبات منحوتة",
          "ثريات زهرية معلقة وترتيبات السقف",
          "طاولات عرض بمنتجات موسمية وعناصر حرفية",
          "تنسيق مفرش المائدة والرانر وإعداد مكان الجلوس",
          "جدران حية وتوبياري وتصميم الخضرة الهيكلية",
        ],
      },
      {
        title: "Branded Environment Design",
        titleAr: "تصميم البيئة ذات العلامة التجارية",
        icon: "◎",
        items: [
          "Brand-aligned colour, texture and material application",
          "Custom printed backdrops, banners and signage",
          "Branded table centres, name cards and printed collateral",
          "Photo wall, selfie station and activation point design",
          "Welcome gift display and VIP gifting coordination",
          "Digital screen content direction and looping visuals",
        ],
        itemsAr: [
          "تطبيق الألوان والملمس والمواد المتوافقة مع العلامة التجارية",
          "خلفيات ولافتات مطبوعة مخصصة",
          "مراكز طاولات ذات علامة تجارية وبطاقات الأسماء والمطبوعات",
          "جدار الصور ومحطة السيلفي وتصميم نقطة التفعيل",
          "عرض هدية الترحيب وتنسيق الهدايا VIP",
          "توجيه محتوى الشاشة الرقمية ومرئيات التكرار",
        ],
      },
      {
        title: "Installation & Breakdown",
        titleAr: "التركيب والتفكيك",
        icon: "⬡",
        items: [
          "Full installation team for day-before and day-of setup",
          "Specialist rigging and structural installation crew",
          "Pre-event quality inspection and styling final touches",
          "On-call team throughout the event for adjustments",
          "Complete post-event breakdown and venue restoration",
          "Waste management and sustainable disposal",
        ],
        itemsAr: [
          "فريق تركيب كامل لإعداد ما قبل اليوم ويوم الفعالية",
          "طاقم تعليق متخصص وتركيب هيكلي",
          "فحص الجودة قبل الفعالية ولمسات نهائية للتنسيق",
          "فريق متاح طوال الفعالية للتعديلات",
          "تفكيك كامل بعد الفعالية واستعادة المكان",
          "إدارة النفايات والتخلص المستدام",
        ],
      },
    ],

    included: [
      "Dedicated senior decorator & design lead",
      "Concept development & mood board presentation",
      "Stage and backdrop design & build",
      "Full lighting architecture design",
      "Floral design & installation",
      "Branded environment elements",
      "Full installation & on-day team",
      "Post-event breakdown & removal",
    ],
    includedAr: [
      "مزيّن أول مخصص وقائد تصميم",
      "تطوير المفهوم وعرض لوح المزاج",
      "تصميم وبناء المسرح والخلفية",
      "تصميم هندسة الإضاءة الكاملة",
      "تصميم وتركيب الزهور",
      "عناصر البيئة ذات العلامة التجارية",
      "فريق تركيب كامل ويوم الفعالية",
      "التفكيك والإزالة بعد الفعالية",
    ],

    occasions: [
      "Corporate Gala Dinners",
      "Product Launches",
      "Government Ceremonies",
      "Brand Activations",
      "Award Nights",
      "Conference & Summits",
      "Royal Receptions",
      "Annual Celebrations",
    ],
    occasionsAr: [
      "حفلات العشاء المؤسسية الكبرى",
      "إطلاق المنتجات",
      "المراسم الحكومية",
      "تفعيلات العلامات التجارية",
      "حفلات توزيع الجوائز",
      "المؤتمرات والقمم",
      "الاستقبالات الملكية",
      "الاحتفالات السنوية",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    ],
  },

  /* ─── PARTY DECORATING ───────────────────────────────────── */
  {
    slug: "party-decorating",
    title: "Party Decorating",
    titleAr: "تزيين الحفلات",
    eyebrow: "Celebrations & Themes",
    eyebrowAr: "الاحتفالات والموضوعات",
    tag: "Bespoke",
    tagAr: "مخصص",
    tagline: "Vibrant, joyful spaces that make every celebration feel truly special.",
    taglineAr: "مساحات نابضة بالحياة تجعل كل احتفال يشعر بأنه حقاً استثنائي.",
    heroImg: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    color: "from-rose-900/70",
    description:
      "Bespoke themed décor for birthdays, Eid celebrations, engagements, graduation parties and private gatherings — from elegant minimalism to lavish statement designs infused with Saudi cultural touches.",
    descriptionAr:
      "ديكور موضوعي خاص لأعياد الميلاد واحتفالات العيد والخطوبة وحفلات التخرج والتجمعات الخاصة — من الأناقة البسيطة إلى التصاميم الفارهة المشبعة باللمسات الثقافية السعودية.",
    intro:
      "Every private celebration deserves a setting as unique as the moment it honours. Elie's party decorating team creates themed environments that feel personal, joyful, and carefully crafted — from the first glimpse at the entrance to the last detail on the dessert table. We work closely with you to understand the mood you want to create: intimate and elegant, vibrant and playful, or richly traditional. Our installations blend contemporary design with Saudi cultural warmth — incorporating Arabic calligraphy, ornate lanterns, Khaleeji patterns, and artisan-crafted details that make your celebration feel both luxurious and deeply personal.",
    introAr:
      "تستحق كل احتفالية خاصة مكاناً فريداً كاللحظة التي تكرّمها. يخلق فريق تزيين الحفلات في إيلي بيئات موضوعية تبدو شخصية ومبهجة ومصنوعة بعناية — من أول لمحة عند المدخل إلى آخر تفصيلة على طاولة الحلويات. نعمل معك عن كثب لفهم الأجواء التي تريد إيجادها: حميمية وأنيقة، أو نابضة بالحياة ومرحة، أو غنية تقليدياً. تمزج تركيباتنا بين التصميم المعاصر والدفء الثقافي السعودي — دمج الخط العربي والفوانيس المزخرفة والأنماط الخليجية والتفاصيل الحرفية التي تجعل احتفالك يشعر بالفخامة والشخصية العميقة في آنٍ واحد.",

    blocks: [
      {
        title: "Theme Concept & Styling",
        titleAr: "مفهوم الموضوع والتنسيق",
        icon: "✦",
        items: [
          "In-depth consultation to develop your celebration's theme",
          "Mood board and full styling direction presentation",
          "Colour palette, material and prop selection",
          "Custom theme development — modern, traditional, Khaleeji, fusion",
          "Venue walk-through and spatial planning",
          "Budget strategy and phased spend allocation",
        ],
        itemsAr: [
          "استشارة معمّقة لتطوير موضوع احتفالك",
          "تقديم لوح المزاج واتجاه التنسيق الكامل",
          "اختيار لوحة الألوان والمواد والدعائم",
          "تطوير موضوع مخصص — عصري أو تقليدي أو خليجي أو مدمج",
          "جولة استطلاعية للمكان والتخطيط المكاني",
          "استراتيجية الميزانية وتخصيص الإنفاق المرحلي",
        ],
      },
      {
        title: "Entrance & Feature Styling",
        titleAr: "تنسيق المدخل والميزة",
        icon: "◈",
        items: [
          "Statement entrance archways — floral, balloon or sculptural",
          "Welcome signage, neon or acrylic name installations",
          "Photo wall and Instagrammable backdrop design",
          "Balloon columns, organic garlands and cloud installations",
          "Illuminated letters, marquee numbers and feature lighting",
          "Red carpet, step-and-repeat and arrival moment design",
        ],
        itemsAr: [
          "أقواس مدخل بارزة — زهرية أو بالونات أو منحوتة",
          "لافتات ترحيب وتركيبات أسماء نيون أو أكريليك",
          "جدار صور وتصميم خلفية صالحة للتصوير",
          "أعمدة بالونات وأكاليل عضوية وتركيبات سحابية",
          "حروف مضيئة وأرقام ماركيه وإضاءة مميزة",
          "السجادة الحمراء والخطوة والتكرار وتصميم لحظة الوصول",
        ],
      },
      {
        title: "Table & Centrepiece Design",
        titleAr: "تصميم الطاولات والقطع المركزية",
        icon: "◇",
        items: [
          "Custom floral centrepieces scaled to each table",
          "Luxury linen, napery and charger plate coordination",
          "Personalised place cards and menu card design",
          "Candle arrangements — pillar, taper and tea-light clusters",
          "Crystal, mirror and metallic decorative elements",
          "Guest favour displays and personalised gifting setup",
        ],
        itemsAr: [
          "قطع مركزية زهرية مخصصة متناسبة مع كل طاولة",
          "تنسيق مفرش فاخر ومناديل وأطباق شاحنة",
          "تصميم بطاقات الأسماء وبطاقات القائمة الشخصية",
          "ترتيبات شموع — أعمدة وتناهيد وتجمعات شموع صغيرة",
          "عناصر ديكور كريستالية ومرايا ومعدنية",
          "عروض هدايا الضيوف وإعداد الهدايا الشخصية",
        ],
      },
      {
        title: "Dessert Table & Candy Display",
        titleAr: "طاولة الحلويات وعرض الحلوى",
        icon: "◉",
        items: [
          "Styled dessert table concept with floral and prop styling",
          "Luxury cake as the table centrepiece",
          "Cupcake towers, macaron displays and petit four stands",
          "Arabic sweets, luqaimat and traditional confection displays",
          "Custom signage, labels and themed table elements",
          "Continuous replenishment and maintenance throughout event",
        ],
        itemsAr: [
          "مفهوم طاولة حلويات منسق بتنسيق زهري ودعائم",
          "كعكة فاخرة كمحور الطاولة",
          "أبراج كب كيك وعروض ماكارون ومنصات بتي فور",
          "حلويات عربية ولقيمات وعروض حلوى تقليدية",
          "لافتات مخصصة وملصقات وعناصر طاولة موضوعية",
          "إعادة تعبئة مستمرة وصيانة طوال الفعالية",
        ],
      },
      {
        title: "Lighting & Atmosphere",
        titleAr: "الإضاءة والأجواء",
        icon: "◎",
        items: [
          "Fairy light canopies, festoon strings and Edison bulb rigs",
          "Coloured LED wash to set the celebration mood",
          "Uplighting on feature walls, trees and structural elements",
          "Laser and projection effects for dramatic moments",
          "Custom gobos — names, monograms or celebration themes",
          "Candlelight and lantern arrangements for intimate warmth",
        ],
        itemsAr: [
          "مظلات أضواء خيالية وخيوط مهرجانية وتركيبات لمبات Edison",
          "غسيل LED ملون لضبط مزاج الاحتفال",
          "إضاءة علوية على الجدران المميزة والأشجار والعناصر الهيكلية",
          "تأثيرات ليزر وإسقاط للحظات الدرامية",
          "جوبو مخصص — أسماء أو أحرف أولى أو موضوعات احتفال",
          "ترتيبات شموع وفوانيس للدفء الحميم",
        ],
      },
      {
        title: "Cultural & Personalised Touches",
        titleAr: "اللمسات الثقافية والشخصية",
        icon: "⬡",
        items: [
          "Arabic calligraphy installations — names, verses or dedications",
          "Khaleeji-pattern fabric and textile elements",
          "Ornate Arabian lanterns and traditional lighting",
          "Oud incense, bakhoor stations and fragrance curation",
          "Personalised monogram details throughout the venue",
          "Cultural ceremony and tradition integration",
        ],
        itemsAr: [
          "تركيبات خط عربي — أسماء أو آيات أو إهداءات",
          "عناصر قماش ومنسوجات بأنماط خليجية",
          "فوانيس عربية مزخرفة وإضاءة تقليدية",
          "محطات عود وبخور وتقييم العطر",
          "تفاصيل مونوغرام شخصية في جميع أنحاء المكان",
          "دمج المراسم الثقافية والتقاليد",
        ],
      },
    ],

    included: [
      "Dedicated party stylist & design team",
      "Theme concept & mood board development",
      "Entrance & feature element design",
      "Table & centrepiece styling",
      "Dessert table design & curation",
      "Lighting & atmosphere design",
      "Cultural & personalised touches",
      "Full installation & post-event removal",
    ],
    includedAr: [
      "منسق حفلات مخصص وفريق تصميم",
      "تطوير مفهوم الموضوع ولوح المزاج",
      "تصميم المدخل وعناصر الميزة",
      "تنسيق الطاولات والقطع المركزية",
      "تصميم وتقييم طاولة الحلويات",
      "تصميم الإضاءة والأجواء",
      "لمسات ثقافية وشخصية",
      "تركيب كامل وإزالة بعد الفعالية",
    ],

    occasions: [
      "Milestone Birthdays",
      "Eid Celebrations",
      "Engagement Parties",
      "Graduation Parties",
      "Baby Celebrations",
      "Gender Reveal Events",
      "Anniversary Dinners",
      "Private Themed Parties",
    ],
    occasionsAr: [
      "أعياد الميلاد الفارقة",
      "احتفالات العيد",
      "حفلات الخطوبة",
      "حفلات التخرج",
      "احتفالات المولود",
      "فعاليات الكشف عن الجنس",
      "عشاءات الذكرى السنوية",
      "الحفلات الخاصة الموضوعية",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
    ],
  },

  /* ─── WEDDING DECORATING ─────────────────────────────────── */
  {
    slug: "wedding-decorating",
    title: "Wedding Decorating",
    titleAr: "تزيين حفلات الزفاف",
    eyebrow: "Bridal & Luxury",
    eyebrowAr: "العروس والفخامة",
    tag: "Most Booked",
    tagAr: "الأكثر حجزاً",
    tagline: "Every petal, every candle, every detail — placed with love and perfected with artistry.",
    taglineAr: "كل بتلة، كل شمعة، كل تفصيلة — وُضعت بمحبة وأُتقنت بفن.",
    heroImg: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    color: "from-amber-900/80",
    description:
      "Full wedding venue dressing for Saudi and Gulf weddings — floral arches, bridal table design, aisle arrangements, zaffa entrance, majlis setup, and complete venue transformation into your dream setting.",
    descriptionAr:
      "تجليل شامل لمكان الزفاف للأعراس السعودية والخليجية — أقواس زهرية وتصميم طاولة العروس وترتيبات الممر وتزيين مدخل الزفة وإعداد المجلس وتحويل كامل للمكان إلى بيئة أحلامك.",
    intro:
      "A wedding is the most sacred celebration of a lifetime — and every element of its décor should reflect that significance. Elie's bridal decorating team brings decades of experience in Saudi and Gulf wedding traditions, blending the richness of Khaleeji heritage with contemporary luxury design. From the first consultation, we listen deeply to your vision and translate it into a complete visual narrative: the grandeur of the entrance, the romance of the ceremony arch, the intimacy of the bridal table, and the warmth of the majlis. Our team handles every flower, every candle, every length of drapery — leaving you free to experience the most beautiful day of your life.",
    introAr:
      "الزفاف هو أقدس احتفال في العمر — ويجب أن يعكس كل عنصر من عناصر ديكوره هذه الأهمية. يجلب فريق التزيين النسائي في إيلي عقوداً من الخبرة في تقاليد الأعراس السعودية والخليجية، ويمزج بين ثراء التراث الخليجي وتصميم الفخامة المعاصرة. منذ الاستشارة الأولى، نستمع عميقاً لرؤيتك ونترجمها إلى سرد بصري متكامل: فخامة المدخل ورومانسية قوس المراسم وحميمية طاولة العروس ودفء المجلس. يتولى فريقنا كل زهرة وكل شمعة وكل متر من الستائر — تاركاً لك الحرية لتعيشي أجمل يوم في حياتك.",

    blocks: [
      {
        title: "Bridal Design Consultation",
        titleAr: "استشارة التصميم النسائي",
        icon: "✦",
        items: [
          "In-depth bridal consultation to capture the full vision",
          "Styled mood board and full colour palette presentation",
          "Venue walk-through and spatial design planning",
          "Floral direction — style, palette and seasonal availability",
          "Cultural traditions and family preferences incorporated",
          "Detailed quote, timeline and sign-off process",
        ],
        itemsAr: [
          "استشارة عميقة للعروس لالتقاط الرؤية الكاملة",
          "تقديم لوح مزاج منسق ولوحة ألوان كاملة",
          "جولة استطلاعية للمكان وتخطيط التصميم المكاني",
          "توجيه الزهور — الأسلوب ولوحة الألوان والتوافر الموسمي",
          "دمج التقاليد الثقافية وتفضيلات الأسرة",
          "عرض أسعار مفصل وجدول زمني وعملية موافقة",
        ],
      },
      {
        title: "Ceremony & Aisle Styling",
        titleAr: "تنسيق المراسم والممر",
        icon: "◈",
        items: [
          "Ceremony arch design — floral, geometric, draped or sculptural",
          "Aisle runner selection and petal arrangement",
          "Pew-end and chair-back floral installations",
          "Altar or stage floral arrangement",
          "Unity ceremony décor — candles, sand or flower elements",
          "Zaffa entrance arch and bridal procession styling",
        ],
        itemsAr: [
          "تصميم قوس المراسم — زهري أو هندسي أو مسدل أو منحوت",
          "اختيار ممر السجادة وترتيب البتلات",
          "تركيبات زهرية على المقاعد والكراسي الخلفية",
          "ترتيب زهري للمذبح أو المسرح",
          "ديكور مراسم الوحدة — شموع أو رمل أو عناصر زهرية",
          "قوس مدخل الزفة وتنسيق موكب العروس",
        ],
      },
      {
        title: "Floral Architecture",
        titleAr: "الهندسة الزهرية",
        icon: "◇",
        items: [
          "Grand floral arch — fresh or preserved florals at scale",
          "Suspended floral chandeliers and ceiling cloud installations",
          "Floral walls and living wall backdrops",
          "Tall pedestal arrangements for reception and dining areas",
          "Cascading and trailing floral compositions",
          "Seasonal bloom sourcing and exotic flower procurement",
        ],
        itemsAr: [
          "قوس زهري كبير — زهور طازجة أو محفوظة على نطاق واسع",
          "ثريات زهرية معلقة وتركيبات سحاب السقف",
          "جدران زهرية وخلفيات جدار حي",
          "ترتيبات منصة طويلة لمناطق الاستقبال والطعام",
          "تراكيب زهرية متتالية ومتدلية",
          "توفير أزهار موسمية وشراء زهور غريبة",
        ],
      },
      {
        title: "Bridal Table & Sweetheart Styling",
        titleAr: "تنسيق طاولة العروس والعريس",
        icon: "◉",
        items: [
          "Sweetheart table design as the visual anchor of the room",
          "Custom chair design — gold throne, floral or draped styles",
          "Bridal table floral garlands and trailing arrangements",
          "Crystal candelabras, gold tableware and luxury linens",
          "Personalised signage, monogram and name elements",
          "Dessert table coordination adjacent to the bridal area",
        ],
        itemsAr: [
          "تصميم طاولة الحبيبَين كمحور بصري للغرفة",
          "تصميم كرسي مخصص — عرش ذهبي أو أنماط زهرية أو مسدلة",
          "أكاليل زهرية على طاولة العروس وترتيبات متتالية",
          "شمعدانات كريستالية وأدوات مائدة ذهبية وكتان فاخر",
          "لافتات شخصية ومونوغرام وعناصر أسماء",
          "تنسيق طاولة الحلويات المجاورة لمنطقة العروس",
        ],
      },
      {
        title: "Venue Dressing & Drapery",
        titleAr: "تجليل المكان والستائر",
        icon: "◎",
        items: [
          "Full ceiling drapery — chiffon, silk or organza",
          "Wall drapery, swag and gathered fabric treatments",
          "Pillar and column wrapping with fabric and florals",
          "Fairy light and Edison bulb canopy installations",
          "Entrance drapery, foyer and pre-function area styling",
          "Dance floor surround and entertainment area dressing",
        ],
        itemsAr: [
          "ستائر سقف كاملة — شيفون أو حرير أو أورجانزا",
          "ستائر جدارية ومعالجات قماش متدلية ومجمّعة",
          "لف الأعمدة والأركان بالقماش والزهور",
          "تركيبات مظلة أضواء خيالية ولمبات Edison",
          "تنسيق ستائر المدخل والردهة ومنطقة ما قبل الفعالية",
          "إحاطة حلبة الرقص وتزيين منطقة الترفيه",
        ],
      },
      {
        title: "Majlis & Cultural Elements",
        titleAr: "المجلس والعناصر الثقافية",
        icon: "⬡",
        items: [
          "Traditional Saudi majlis setup for family seating areas",
          "Arabic lanterns, mashrabiyas and ornate metalwork",
          "Khaleeji-pattern cushions, rugs and textile elements",
          "Bakhoor and oud incense stations throughout the venue",
          "Arabic calligraphy — names, Quranic verses or dedications",
          "Date and Arabic coffee welcome stations for arriving guests",
        ],
        itemsAr: [
          "إعداد مجلس سعودي تقليدي لمناطق الجلوس العائلية",
          "فوانيس عربية ومشربيات وأعمال معدنية مزخرفة",
          "وسائد وسجاجيد وعناصر نسيجية بأنماط خليجية",
          "محطات بخور وعود في جميع أنحاء المكان",
          "خط عربي — أسماء أو آيات قرآنية أو إهداءات",
          "محطات تمر وقهوة عربية لاستقبال الضيوف القادمين",
        ],
      },
    ],

    included: [
      "Dedicated senior bridal decorator",
      "Bridal design consultation & mood board",
      "Ceremony & aisle styling",
      "Full floral architecture design",
      "Bridal & sweetheart table styling",
      "Full venue dressing & drapery",
      "Majlis & cultural elements",
      "Installation team & post-wedding removal",
    ],
    includedAr: [
      "مزيّن نسائي أول مخصص",
      "استشارة التصميم النسائي ولوح المزاج",
      "تنسيق المراسم والممر",
      "تصميم هندسة زهرية كاملة",
      "تنسيق طاولة العروس والعريس",
      "تجليل المكان الكامل والستائر",
      "المجلس والعناصر الثقافية",
      "فريق التركيب والإزالة بعد الزفاف",
    ],

    occasions: [
      "Saudi Traditional Weddings",
      "Khaleeji Ceremonies",
      "Luxury Ballroom Receptions",
      "Garden & Outdoor Weddings",
      "Intimate Nikah Ceremonies",
      "Destination Weddings",
      "Multi-day Wedding Celebrations",
      "Royal-Style Ceremonies",
    ],
    occasionsAr: [
      "الأعراس التقليدية السعودية",
      "المراسم الخليجية",
      "حفلات استقبال قاعات الكرة الفاخرة",
      "أعراس الحدائق والهواء الطلق",
      "حفلات عقد النكاح الحميمة",
      "أعراس الوجهات السياحية",
      "احتفالات الزفاف متعددة الأيام",
      "مراسم على الطراز الملكي",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    ],
  },
];

export function getDecoratingBySlug(slug: string): DecoratingService | undefined {
  return decoratingServices.find((d) => d.slug === slug);
}
