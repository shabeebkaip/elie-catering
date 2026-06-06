export type Service = {
  slug: string;
  title: string;
  titleAr: string;
  eyebrow: string;
  eyebrowAr: string;
  category: "catering" | "planning" | "decor" | "addons";
  categoryLabel: string;
  categoryLabelAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  body: string;
  bodyAr: string;
  img: string;
  heroImg: string;
  gallery: string[];
  included: string[];
  includedAr: string[];
  tag: string;
  tagAr: string;
};

export const services: Service[] = [
  /* ─── CATERING ─────────────────────────────────────────────────── */
  {
    slug: "full-service-catering",
    title: "Full-Service Catering",
    titleAr: "التموين الشامل",
    eyebrow: "Food & Beverage",
    eyebrowAr: "الطعام والمشروبات",
    category: "catering",
    categoryLabel: "Catering",
    categoryLabelAr: "التموين",
    tagline: "Culinary excellence from concept to the last course.",
    taglineAr: "التميز الطهوي من المفهوم إلى آخر طبق.",
    description:
      "World-class catering tailored to your event's scale, style, and cuisine preferences — handled end-to-end by our culinary team.",
    descriptionAr:
      "تموين عالمي المستوى مصمم وفق نطاق فعاليتك وأسلوبها وتفضيلاتك الطهوية — يتولاه فريقنا الطهوي من البداية إلى النهاية.",
    body: "Our full-service catering offering covers every aspect of the dining experience: custom menu design, ingredient sourcing, on-site preparation, professional service staff, and elegant table presentation. Whether it's an intimate private dinner for twelve or a grand gala for a thousand guests, our culinary team crafts each dish with precision and artistry.",
    bodyAr:
      "تغطي خدمة التموين الشاملة لدينا كل جانب من جوانب تجربة الطعام: تصميم القائمة المخصصة، توفير المكونات، الإعداد في الموقع، طاقم خدمة احترافي، وتقديم المائدة بأناقة فائقة. سواء كان الأمر عشاءً خاصاً لاثني عشر شخصاً أو حفلاً كبيراً لألف ضيف، يصنع فريقنا الطهوي كل طبق بدقة وإبداع.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
    ],
    included: [
      "Custom menu consultation & design",
      "Premium ingredient sourcing",
      "On-site chef team & preparation",
      "Full front-of-house service staff",
      "Elegant crockery & tableware",
      "Setup, service & breakdown",
      "Post-event waste management",
    ],
    includedAr: [
      "استشارة وتصميم قائمة مخصصة",
      "توفير مكونات فاخرة",
      "فريق طهاة وإعداد في الموقع",
      "طاقم خدمة احترافي",
      "أواني وأدوات مائدة أنيقة",
      "الإعداد والخدمة والتفكيك",
      "إدارة النفايات بعد الفعالية",
    ],
    tag: "Our Signature",
    tagAr: "خدمتنا المميزة",
  },
  {
    slug: "buffet-events",
    title: "Buffet Events",
    titleAr: "فعاليات البوفيه",
    eyebrow: "Food & Beverage",
    eyebrowAr: "الطعام والمشروبات",
    category: "catering",
    categoryLabel: "Catering",
    categoryLabelAr: "التموين",
    tagline: "Lavish spreads that become the centrepiece of every gathering.",
    taglineAr: "موائد فاخرة تصبح محور كل تجمع.",
    description:
      "Lavish buffet spreads presented with visual artistry — perfect for weddings, corporate functions, and large-scale celebrations.",
    descriptionAr:
      "موائد بوفيه فاخرة تُقدَّم بفن بصري رائع — مثالية للأعراس والفعاليات المؤسسية والاحتفالات الكبرى.",
    body: "Our buffet setups go far beyond the ordinary. Each station is designed as a visual centrepiece — curated display platters, live carving, artisan bread baskets, and intricate garnishes that transform food into décor. We cater for events of all scales, with menus spanning international cuisines, gourmet meze, and signature Elie creations.",
    bodyAr:
      "إعداداتنا للبوفيه تتجاوز المألوف كثيراً. كل محطة مصممة لتكون محوراً بصرياً — أطباق عرض منتقاة، نحت اللحوم الحي، سلال خبز الحرفيين، وزينة دقيقة تحول الطعام إلى ديكور. نقدم خدماتنا لفعاليات بمختلف الأحجام، مع قوائم تمتد عبر المأكولات الدولية والمزة الراقية وإبداعات إيلي الحصرية.",
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
    ],
    included: [
      "Multi-cuisine buffet stations",
      "Live carving & action stations",
      "Artisan display & garnishing",
      "Replenishment throughout the event",
      "Dietary-conscious menu options",
      "Uniformed service attendants",
      "Full equipment supply",
    ],
    includedAr: [
      "محطات بوفيه متعددة المأكولات",
      "محطات النحت الحي والإعداد",
      "عرض الحرفيين والزينة",
      "إعادة التوريد خلال الفعالية",
      "خيارات قائمة مراعية للنظام الغذائي",
      "موظفو خدمة بزي موحد",
      "توفير كامل للمعدات",
    ],
    tag: "Grand Scale",
    tagAr: "نطاق واسع",
  },
  {
    slug: "luxury-dishes",
    title: "Luxury & Elite Dishes",
    titleAr: "الأطباق الفاخرة والنخبوية",
    eyebrow: "Gourmet",
    eyebrowAr: "الطعام الراقي",
    category: "catering",
    categoryLabel: "Catering",
    categoryLabelAr: "التموين",
    tagline: "High-end gourmet dishes elevating every dining experience.",
    taglineAr: "أطباق راقية ترفع مستوى كل تجربة طعام.",
    description:
      "Signature gourmet creations using the world's finest ingredients — truffle, wagyu, saffron, and beyond — for the most discerning palates.",
    descriptionAr:
      "إبداعات راقية حصرية باستخدام أجود المكونات العالمية — الكمأة والواغيو والزعفران وما هو أبعد — لأرهف الأذواق.",
    body: "Elie's luxury dishes programme brings Michelin-level artistry to your event. Each dish is an experience in itself — precisely plated, beautifully presented, and crafted from the rarest ingredients. Our menus feature seasonal tasting courses, à la carte fine dining, and theatrical presentations including tableside flambé and gold-leaf garnishes.",
    bodyAr:
      "يجلب برنامج أطباق إيلي الفاخرة الفن المطبخي بمستوى ميشلان إلى فعاليتك. كل طبق تجربة في حد ذاته — مقدَّم بدقة، جميل العرض، مصنوع من أندر المكونات. تضم قوائمنا أطباق تذوق موسمية وعشاء راقٍ à la carte وعروضاً مسرحية تشمل الفلامبيه على المائدة وزينة أوراق الذهب.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
    ],
    included: [
      "Tasting menu consultation",
      "Premium & rare ingredient sourcing",
      "Michelin-trained chef team",
      "Precision plating presentation",
      "Gold-leaf & truffle garnishes",
      "Theatrical tableside service",
      "Paired non-alcoholic beverage service",
    ],
    includedAr: [
      "استشارة قائمة التذوق",
      "توفير مكونات فاخرة ونادرة",
      "فريق طهاة مدرَّب بأسلوب ميشلان",
      "تقديم دقيق للأطباق",
      "زينة أوراق الذهب والكمأة",
      "خدمة مسرحية على المائدة",
      "خدمة مشروبات غير كحولية متناسقة",
    ],
    tag: "Prestige",
    tagAr: "مرموق",
  },
  {
    slug: "menu-creation",
    title: "Menu Creation",
    titleAr: "إعداد القوائم",
    eyebrow: "Culinary Design",
    eyebrowAr: "التصميم الطهوي",
    category: "catering",
    categoryLabel: "Catering",
    categoryLabelAr: "التموين",
    tagline: "Menus designed around your story, not off the shelf.",
    taglineAr: "قوائم مصممة حول قصتك، لا من الرف.",
    description:
      "Custom menu design aligned with your event's theme, your guests' dietary needs, and your culinary aspirations.",
    descriptionAr:
      "تصميم قائمة مخصصة تتوافق مع موضوع فعاليتك واحتياجات ضيوفك الغذائية وتطلعاتك الطهوية.",
    body: "A great event begins with a great menu. Our culinary directors work with you to design a bespoke menu that reflects your vision — from themed seven-course tasting menus to culturally inspired spreads. We consider seasonality, dietary requirements, venue logistics, and your personal tastes to craft something that is truly yours.",
    bodyAr:
      "تبدأ الفعالية العظيمة بقائمة عظيمة. يعمل مديرونا الطهويون معك لتصميم قائمة خاصة تعكس رؤيتك — من قوائم التذوق الموضوعية ذات السبعة أطباق إلى الموائد المستوحاة ثقافياً. نراعي الموسمية والاحتياجات الغذائية ولوجستيات المكان وأذواقك الشخصية لصياغة شيء هو حقاً خاصك.",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    ],
    included: [
      "1:1 culinary director consultation",
      "Tailored menu concept & structure",
      "Dietary & allergen planning",
      "Tasting session prior to event",
      "Printed custom menu cards",
      "Cultural & seasonal alignment",
      "Full recipe development",
    ],
    includedAr: [
      "استشارة مع المدير الطهوي فردياً",
      "مفهوم وهيكل قائمة مصمم خصيصاً",
      "تخطيط الحمية ومسببات الحساسية",
      "جلسة تذوق قبل الفعالية",
      "بطاقات قائمة مخصصة مطبوعة",
      "التوافق الثقافي والموسمي",
      "تطوير الوصفات الكاملة",
    ],
    tag: "Bespoke",
    tagAr: "مخصص",
  },

  /* ─── EVENT PLANNING ────────────────────────────────────────────── */
  {
    slug: "event-management",
    title: "Event Management & Planning",
    titleAr: "إدارة وتنظيم الفعاليات",
    eyebrow: "Full Coordination",
    eyebrowAr: "التنسيق الكامل",
    category: "planning",
    categoryLabel: "Event Planning",
    categoryLabelAr: "تنظيم الفعاليات",
    tagline: "From the first concept to the final curtain call.",
    taglineAr: "من المفهوم الأول إلى الإسدال الأخير.",
    description:
      "End-to-end event management ensuring every detail is executed flawlessly — so you can be present in every moment.",
    descriptionAr:
      "إدارة شاملة للفعاليات تضمن تنفيذ كل تفصيلة بلا عيوب — حتى تتمكن من الحضور في كل لحظة.",
    body: "Our event management service places a dedicated team at the heart of your event. From initial concept workshops through venue sourcing, vendor coordination, day-of logistics, and final breakdown — we are the invisible hand that makes everything look effortless. Our planners maintain real-time communication and contingency protocols so nothing is left to chance.",
    bodyAr:
      "تضع خدمة إدارة فعالياتنا فريقاً مخصصاً في قلب فعاليتك. من ورش العمل المفاهيمية الأولى عبر البحث عن أماكن والتنسيق مع الموردين واللوجستيات اليومية وحتى التفكيك النهائي — نحن اليد الخفية التي تجعل كل شيء يبدو سهلاً. يحافظ مخططونا على تواصل فوري وبروتوكولات طوارئ حتى لا يُترك شيء للصدفة.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    ],
    included: [
      "Dedicated event director & team",
      "Concept development & moodboards",
      "Venue sourcing & site visits",
      "Full vendor management",
      "Timeline & run-of-show creation",
      "On-site day-of coordination",
      "Post-event debrief report",
    ],
    includedAr: [
      "مدير فعاليات مخصص وفريق",
      "تطوير المفهوم والأجواء",
      "البحث عن أماكن وزيارات الموقع",
      "إدارة كاملة للموردين",
      "إنشاء الجدول الزمني وسير العرض",
      "تنسيق يوم الفعالية في الموقع",
      "تقرير إحاطة ما بعد الفعالية",
    ],
    tag: "Most Booked",
    tagAr: "الأكثر حجزاً",
  },
  {
    slug: "wedding-planning",
    title: "Wedding Planning",
    titleAr: "تخطيط حفلات الزفاف",
    eyebrow: "Bridal & Luxury",
    eyebrowAr: "العروس والفخامة",
    category: "planning",
    categoryLabel: "Event Planning",
    categoryLabelAr: "تنظيم الفعاليات",
    tagline: "Your love story, flawlessly choreographed.",
    taglineAr: "قصة حبك، منسّقة بلا عيوب.",
    description:
      "Flawlessly coordinated weddings that reflect your love story — from the first dance to the last petal.",
    descriptionAr:
      "أعراس منسقة بلا عيوب تعكس قصة حبك — من الرقصة الأولى إلى آخر بتلة.",
    body: "Elie's wedding planning service is the most intimate, most personal, and most celebrated service we offer. Our bridal team works months in advance to align every element — flowers, feast, fashion, and festivity — into a single, seamless narrative. We handle the vendors, the nerves, the logistics, and the unexpected so you can savour every moment of the day you've always dreamed of.",
    bodyAr:
      "خدمة تخطيط الأعراس من إيلي هي أكثر خدماتنا حميمية وشخصية واحتفاءً. يعمل فريقنا النسائي أشهراً مسبقاً لمواءمة كل عنصر — الزهور والوليمة والأزياء والاحتفال — في سرد واحد متسق. نتولى الموردين والأعصاب واللوجستيات والمفاجآت حتى تتذوق كل لحظة من اليوم الذي طالما حلمت به.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    ],
    included: [
      "Full wedding planning & management",
      "Bridal consultation sessions",
      "Venue selection & styling",
      "Complete catering coordination",
      "Floral & décor direction",
      "Ceremony & reception logistics",
      "On-day coordination team",
    ],
    includedAr: [
      "تخطيط وإدارة كامل للزفاف",
      "جلسات استشارة للعروس",
      "اختيار المكان وتنسيقه",
      "تنسيق تموين كامل",
      "توجيه الزهور والديكور",
      "لوجستيات مراسم الاستقبال",
      "فريق تنسيق يوم الحفل",
    ],
    tag: "Signature",
    tagAr: "مميز",
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    titleAr: "الفعاليات المؤسسية",
    eyebrow: "Business & Professional",
    eyebrowAr: "الأعمال والمهنية",
    category: "planning",
    categoryLabel: "Event Planning",
    categoryLabelAr: "تنظيم الفعاليات",
    tagline: "Professional experiences that leave lasting impressions.",
    taglineAr: "تجارب احترافية تترك انطباعات دائمة.",
    description:
      "Professional and creative corporate event solutions — conferences, product launches, retreats, and gala dinners — discreetly and flawlessly delivered.",
    descriptionAr:
      "حلول فعاليات مؤسسية احترافية وإبداعية — مؤتمرات وإطلاق منتجات واستراحات وعشاء حفلات — تُقدَّم بسرية وإتقان.",
    body: "Corporate events demand a blend of professionalism, precision, and memorable impact. Our corporate division specialises in producing events that align with your brand identity — from branded luxury details and AV production to curated catering that impresses the most senior stakeholders. We work in complete discretion and deliver on brief, on time, and on budget.",
    bodyAr:
      "تتطلب الفعاليات المؤسسية مزيجاً من الاحترافية والدقة والتأثير الذي لا يُنسى. يتخصص قسمنا المؤسسي في إنتاج فعاليات تتوافق مع هوية علامتك التجارية — من التفاصيل الفاخرة ذات العلامة التجارية وإنتاج الصوت والصورة إلى التموين المنتقى الذي يبهر أكبر المسؤولين. نعمل بسرية تامة ونلتزم بالملخص والوقت والميزانية.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    ],
    included: [
      "Brand-aligned event concept",
      "Venue sourcing & branding",
      "Stage & AV production",
      "Corporate catering menus",
      "Registration & guest management",
      "Branded stationery & collateral",
      "Full on-site execution team",
    ],
    includedAr: [
      "مفهوم فعالية يتوافق مع العلامة التجارية",
      "البحث عن مكان والعلامة التجارية",
      "إنتاج المسرح والصوت والصورة",
      "قوائم تموين مؤسسية",
      "التسجيل وإدارة الضيوف",
      "القرطاسية والمطبوعات ذات العلامة التجارية",
      "فريق تنفيذ كامل في الموقع",
    ],
    tag: "Executive",
    tagAr: "تنفيذي",
  },

  /* ─── DÉCOR & DESIGN ────────────────────────────────────────────── */
  {
    slug: "decor-preparation",
    title: "Décor Preparation",
    titleAr: "تحضير الديكور",
    eyebrow: "Ambiance & Aesthetics",
    eyebrowAr: "الأجواء والجماليات",
    category: "decor",
    categoryLabel: "Décor & Design",
    categoryLabelAr: "الديكور والتصميم",
    tagline: "Spaces transformed into immersive worlds of luxury.",
    taglineAr: "مساحات تتحول إلى عوالم غامرة من الفخامة.",
    description:
      "Beautifully designed décor tailored to your event's theme — transforming any venue into an extraordinary world.",
    descriptionAr:
      "ديكور مصمم بجمال يتوافق مع موضوع فعاليتك — يحول أي مكان إلى عالم استثنائي.",
    body: "Elie's décor preparation service covers everything from concept mood-boarding through prop sourcing, installation, and post-event removal. Our design team curates every visual element — drapery, lighting, centrepieces, floor treatments, and ceiling installations — to create a total atmosphere that leaves guests breathless the moment they walk in.",
    bodyAr:
      "تغطي خدمة تحضير الديكور من إيلي كل شيء من تصميم مزاج المفهوم عبر توفير الدعائم والتركيب والإزالة بعد الفعالية. يجمع فريق التصميم لدينا كل عنصر بصري — الستائر والإضاءة والقطع المركزية ومعالجات الأرضيات وتركيبات السقف — لخلق أجواء شاملة تجعل الضيوف يفقدون أنفاسهم لحظة دخولهم.",
    img: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    ],
    included: [
      "Design concept & moodboard",
      "Prop & furniture sourcing",
      "Floral centrepiece design",
      "Drapery & backdrop installation",
      "Ambient & accent lighting",
      "On-site installation team",
      "Post-event removal & cleanup",
    ],
    includedAr: [
      "مفهوم التصميم ولوح المزاج",
      "توفير الدعائم والأثاث",
      "تصميم القطعة المركزية الزهرية",
      "تركيب الستائر والخلفية",
      "إضاءة محيطية وبارزة",
      "فريق تركيب في الموقع",
      "الإزالة والتنظيف بعد الفعالية",
    ],
    tag: "Bespoke",
    tagAr: "مخصص",
  },
  {
    slug: "display-tables",
    title: "Display Tables",
    titleAr: "طاولات العرض",
    eyebrow: "Visual Excellence",
    eyebrowAr: "التميز البصري",
    category: "decor",
    categoryLabel: "Décor & Design",
    categoryLabelAr: "الديكور والتصميم",
    tagline: "Edible artistry, elegantly displayed.",
    taglineAr: "فن صالح للأكل، معروض بأناقة.",
    description:
      "Elegant display tables that blend visual artistry with culinary excellence — enhancing the sophistication of any event.",
    descriptionAr:
      "طاولات عرض أنيقة تمزج بين الفن البصري والتميز الطهوي — ترفع مستوى رقي أي فعالية.",
    body: "Our display tables are styled showpieces that anchor the room. From towering tiered arrangements of seasonal fruits and artisan cheeses to floral-draped sweet tables and sculpted chocolate displays, every presentation is designed to elicit admiration before a single bite is taken. We handle all styling, propping, and continuous maintenance throughout the event.",
    bodyAr:
      "طاولات العرض لدينا قطع عرض أنيقة ترسّخ الغرفة. من الترتيبات المتعددة الطوابق الشاهقة من الفواكه الموسمية والجبن الحرفي إلى طاولات الحلويات المزينة بالزهور وعروض الشوكولاتة المنحوتة، كل عرض مصمم لإثارة الإعجاب قبل أن يُؤخذ قضمة واحدة. نتولى كل التنسيق والدعائم والصيانة المستمرة خلال الفعالية.",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=2071&auto=format&fit=crop",
    ],
    included: [
      "Styled display concept & design",
      "Fresh seasonal produce & artisan products",
      "Luxury props & decorative elements",
      "Chocolate & sugar art sculptures",
      "Tiered display structures",
      "Full event maintenance & replenishment",
      "Teardown & cleanup",
    ],
    includedAr: [
      "مفهوم وتصميم العرض المنسق",
      "منتجات موسمية طازجة وحرفية",
      "دعائم فاخرة وعناصر ديكور",
      "منحوتات فن الشوكولاتة والسكر",
      "هياكل عرض متعددة الطوابق",
      "صيانة وإعادة توريد كاملة خلال الفعالية",
      "التفكيك والتنظيف",
    ],
    tag: "Showpiece",
    tagAr: "قطعة عرض",
  },
  {
    slug: "luxury-cakes",
    title: "Luxury Cakes",
    titleAr: "الكعك الفاخر",
    eyebrow: "Patisserie",
    eyebrowAr: "المعجنات الراقية",
    category: "decor",
    categoryLabel: "Décor & Design",
    categoryLabelAr: "الديكور والتصميم",
    tagline: "Towering confections as beautiful as they are delicious.",
    taglineAr: "حلويات شاهقة بجمال مذاقها.",
    description:
      "Stunning statement cakes designed and crafted by our expert pastry chefs — the centrepiece of any celebration.",
    descriptionAr:
      "كعك استثنائي مصمم ومصنوع من قبل طهاة المعجنات الخبراء لدينا — محور أي احتفال.",
    body: "Elie's luxury cake studio produces confections that double as sculpture. Each cake is a bespoke creation — designed after a detailed consultation covering theme, flavour profile, and aesthetic vision. We work with the finest Belgian couverture, edible gold, hand-painted details, and fresh florals to produce tiers that are as unforgettable to taste as they are to behold.",
    bodyAr:
      "يُنتج استوديو كعك إيلي الفاخر حلويات تضاعف كمنحوتات. كل كعكة إبداع خاص — مصممة بعد استشارة مفصلة تغطي الموضوع وملف النكهة والرؤية الجمالية. نعمل بأجود الكوفرتور البلجيكي والذهب الصالح للأكل والتفاصيل المرسومة باليد والزهور الطازجة لإنتاج طوابق لا تُنسى في طعمها ومنظرها.",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    ],
    included: [
      "Bespoke design consultation",
      "Custom flavour & filling selection",
      "Hand-painted or sculptural finish",
      "Edible gold & sugar florals",
      "Delivery & on-site setup",
      "Cake cutting & service coordination",
      "Matching petits fours & cake pops",
    ],
    includedAr: [
      "استشارة تصميم خاصة",
      "اختيار نكهة وحشو مخصص",
      "تشطيب مرسوم باليد أو منحوت",
      "ذهب صالح للأكل وزهور سكرية",
      "التوصيل والإعداد في الموقع",
      "تنسيق تقطيع الكعكة وخدمتها",
      "مطابقة البتي فور وكعك العصا",
    ],
    tag: "Artisan",
    tagAr: "حرفي",
  },
  {
    slug: "silverware",
    title: "Silverware & Tableware",
    titleAr: "أدوات المائدة الفضية",
    eyebrow: "Table Elegance",
    eyebrowAr: "أناقة المائدة",
    category: "decor",
    categoryLabel: "Décor & Design",
    categoryLabelAr: "الديكور والتصميم",
    tagline: "Every detail on the table tells a story of refinement.",
    taglineAr: "كل تفصيلة على المائدة تروي قصة رقي.",
    description:
      "High-end silverware and tableware completely matched to your event's theme — because the table is the first impression.",
    descriptionAr:
      "أدوات مائدة فضية وصحون فاخرة تتطابق تماماً مع موضوع فعاليتك — لأن المائدة هي الانطباع الأول.",
    body: "The table is a canvas. Our silverware and tableware service curates complete table settings — from sterling silver cutlery and crystal glassware to custom-printed menu cards and silk napery — selected to harmonise with your event's colour story and aesthetic. Every piece is polished, positioned, and perfected before the first guest arrives.",
    bodyAr:
      "المائدة لوحة فنية. تجمع خدمة أدوات المائدة الفضية والصحون لدينا إعدادات مائدة كاملة — من أدوات المائدة الفضية الاسترلينية وأواني الكريستال إلى بطاقات القائمة المطبوعة بالتصميم الخاص والمناديل الحريرية — منتقاة لتنسجم مع قصة ألوان فعاليتك وجمالياتها. كل قطعة مصقولة ومرتبة ومثالية قبل وصول أول ضيف.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
    ],
    included: [
      "Sterling silver cutlery sets",
      "Crystal & fine glassware",
      "Luxury china & charger plates",
      "Custom menu card printing",
      "Silk & linen napery",
      "Floral napkin arrangements",
      "Full setup & polish team",
    ],
    includedAr: [
      "أطقم أدوات مائدة فضة استرلينية",
      "أواني زجاجية كريستالية وراقية",
      "صيني فاخر وأطباق شاحنة",
      "طباعة بطاقة قائمة مخصصة",
      "مناديل حريرية وكتانية",
      "ترتيبات مناديل زهرية",
      "فريق إعداد كامل وتلميع",
    ],
    tag: "Refined",
    tagAr: "مصقول",
  },

  /* ─── PREMIUM ADD-ONS ───────────────────────────────────────────── */
  {
    slug: "professional-photography",
    title: "Professional Photography",
    titleAr: "التصوير الاحترافي",
    eyebrow: "Photography & Videography",
    eyebrowAr: "التصوير والفيديو",
    category: "addons",
    categoryLabel: "Premium Add-ons",
    categoryLabelAr: "الإضافات المميزة",
    tagline: "Every moment, preserved with precision and artistry.",
    taglineAr: "كل لحظة محفوظة بدقة وفن.",
    description:
      "Professional photography and videography services — including ground and aerial drone shots — to capture every exquisite moment with precision.",
    descriptionAr:
      "خدمات تصوير فوتوغرافي واحترافي — بما في ذلك لقطات أرضية وجوية بالطائرة المسيّرة — لالتقاط كل لحظة رائعة بدقة.",
    body: "Your event deserves to be remembered in stunning detail. Our professional photography and videography team captures the atmosphere, the emotions, and the finest details — from candid moments to grand compositions. We deploy ground photographers and aerial drone operators to cover every angle, delivering a curated gallery and cinematic highlight reel that will last a lifetime.",
    bodyAr:
      "تستحق فعاليتك أن تُحفظ بتفاصيل مذهلة. يلتقط فريق التصوير الفوتوغرافي والفيديو الاحترافي لدينا الأجواء والمشاعر وأدق التفاصيل — من اللحظات العفوية إلى التركيبات الكبرى. نوظف مصورين أرضيين ومشغلي طائرات مسيّرة لتغطية كل زاوية، ونسلم معرضاً منتقى ومقطعاً سينمائياً يدوم مدى الحياة.",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
    ],
    included: [
      "Lead photographer & second shooter",
      "Aerial drone photography & video",
      "Full event coverage (setup to closedown)",
      "Cinematic highlight reel edit",
      "Curated high-resolution photo gallery",
      "Same-day preview slideshow",
      "Digital delivery & print-ready files",
    ],
    includedAr: [
      "المصور الرئيسي والمصور الثاني",
      "تصوير جوي بالطائرة المسيّرة وفيديو",
      "تغطية كاملة للفعالية (من الإعداد إلى الإغلاق)",
      "تعديل مقطع تسليط الضوء السينمائي",
      "معرض صور عالية الدقة منتقى",
      "عرض شرائح معاينة في نفس اليوم",
      "التسليم الرقمي وملفات جاهزة للطباعة",
    ],
    tag: "Capture",
    tagAr: "التوثيق",
  },
  {
    slug: "entertainment-live-music",
    title: "Entertainment & Live Music",
    titleAr: "الترفيه والموسيقى الحية",
    eyebrow: "Live Performance",
    eyebrowAr: "العروض الحية",
    category: "addons",
    categoryLabel: "Premium Add-ons",
    categoryLabelAr: "الإضافات المميزة",
    tagline: "World-class performance that elevates every occasion.",
    taglineAr: "عروض عالمية المستوى ترفع كل مناسبة.",
    description:
      "Elevate your event with world-class entertainment, from professional soloists (Piano, Saxophone, Violin, Oud) to spectacular live bands.",
    descriptionAr:
      "ارفع مستوى فعاليتك بترفيه عالمي المستوى، من العازفين المنفردين المحترفين (بيانو، ساكسوفون، كمان، عود) إلى الفرق الحية المذهلة.",
    body: "Music sets the soul of any event. Our entertainment division curates world-class live performances tailored to your event's mood, guest profile, and cultural preferences. From a soulful Arabic Oud soloist during a gourmet dinner to a full jazz ensemble for a corporate gala, or an elegant string quartet for a wedding ceremony — we source, manage, and brief every performer to ensure a seamless, unforgettable experience.",
    bodyAr:
      "الموسيقى تحدد روح أي فعالية. يجمع قسم الترفيه لدينا عروضاً حية عالمية المستوى مصممة وفق مزاج فعاليتك وملف ضيوفك وتفضيلاتك الثقافية. من عازف عود عربي شجي خلال عشاء راقٍ إلى فرقة جاز كاملة لحفل مؤسسي، أو رباعي أوتار أنيق لحفل زفاف — نبحث عن كل فنان وندير ونوجّه لضمان تجربة سلسة لا تُنسى.",
    img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    ],
    included: [
      "Bespoke entertainment consultation",
      "Soloist or full band booking & management",
      "Sound system & on-site sound engineer",
      "Setlist & repertoire curation",
      "Cultural & genre matching",
      "Rehearsal coordination",
      "MC & hosting services (optional)",
    ],
    includedAr: [
      "استشارة ترفيه خاصة",
      "حجز وإدارة عازف منفرد أو فرقة كاملة",
      "نظام صوتي ومهندس صوت في الموقع",
      "تنسيق قائمة الأغاني والمقطوعات",
      "التطابق الثقافي والجنس الموسيقي",
      "تنسيق البروفة",
      "خدمات مقدم البرامج والاستضافة (اختياري)",
    ],
    tag: "Live",
    tagAr: "حي",
  },
  {
    slug: "hall-decor-coordination",
    title: "Hall & Decor Coordination",
    titleAr: "تنسيق القاعة والديكور",
    eyebrow: "Venue Styling",
    eyebrowAr: "تنسيق المكان",
    category: "addons",
    categoryLabel: "Premium Add-ons",
    categoryLabelAr: "الإضافات المميزة",
    tagline: "Every hall transformed into a breathtaking experience.",
    taglineAr: "كل قاعة تتحول إلى تجربة آسرة.",
    description:
      "End-to-end planning of event halls, featuring bespoke table arrangements, exquisite décor, and fresh natural floral displays.",
    descriptionAr:
      "تخطيط شامل لقاعات الفعاليات، يتضمن ترتيبات طاولات خاصة وديكوراً رائعاً وعروضاً زهرية طبيعية طازجة.",
    body: "The hall is the stage, and we are the directors. Our Hall & Decor Coordination service takes complete ownership of your venue — from guest flow planning and table layout design to full floral installations, linen selection, ambient lighting, and final dressing. We work with your chosen venue's team or independently to ensure every inch of the space tells the story you want your guests to experience.",
    bodyAr:
      "القاعة هي المسرح، ونحن المخرجون. تتولى خدمة تنسيق القاعة والديكور لدينا كامل مسؤولية مكانك — من تخطيط تدفق الضيوف وتصميم تخطيط الطاولات إلى التركيبات الزهرية الكاملة واختيار الكتان وإضاءة الأجواء والتجليل النهائي. نعمل مع فريق المكان الذي اخترته أو بشكل مستقل لضمان أن كل شبر من المساحة يروي القصة التي تريد ضيوفك أن يعيشوها.",
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
    ],
    included: [
      "Venue layout & floor plan design",
      "Full floral installation & displays",
      "Table linen & chair cover selection",
      "Ambient & feature lighting",
      "Centrepiece design & placement",
      "On-site coordination on event day",
      "Full strike & cleanup post-event",
    ],
    includedAr: [
      "تصميم تخطيط المكان والمساقط الأرضية",
      "تركيبات وعروض زهرية كاملة",
      "اختيار مفارش الطاولات وأغطية الكراسي",
      "إضاءة محيطية ومميزة",
      "تصميم ووضع القطعة المركزية",
      "تنسيق في الموقع يوم الفعالية",
      "فك التركيب والتنظيف الكامل بعد الفعالية",
    ],
    tag: "Styling",
    tagAr: "التنسيق",
  },
  {
    slug: "valet-parking",
    title: "Valet Parking — Valia",
    titleAr: "خدمة الفاليه — فاليا",
    eyebrow: "Guest Experience",
    eyebrowAr: "تجربة الضيف",
    category: "addons",
    categoryLabel: "Premium Add-ons",
    categoryLabelAr: "الإضافات المميزة",
    tagline: "A seamless arrival that sets the tone for everything.",
    taglineAr: "وصول سلس يحدد أجواء كل شيء.",
    description:
      "Our premium 'Valia' valet team ensures a sophisticated, seamless experience for your guests from arrival to departure.",
    descriptionAr:
      "يضمن فريق الفاليه المميز 'فاليا' تجربة متطورة وسلسة لضيوفك من الوصول حتى المغادرة.",
    body: "First impressions are made at the entrance. Valia — Elie's bespoke valet service — is staffed by uniformed, trained professionals who greet each guest with warmth, handle vehicles with care, and manage traffic flow discreetly. We deploy for events of any scale, coordinating with venue security and managing vehicle logistics so your guests' experience begins the moment they arrive and ends on an equally elevated note.",
    bodyAr:
      "الانطباعات الأولى تُصنع عند المدخل. فاليا — خدمة الفاليه الخاصة من إيلي — يديرها محترفون بزي موحد ومدربون يرحبون بكل ضيف بدفء ويتعاملون مع السيارات بعناية ويديرون تدفق حركة المرور بسرية. نعمل لفعاليات بأي حجم، ننسق مع أمن المكان وندير لوجستيات السيارات حتى تبدأ تجربة ضيوفك لحظة وصولهم وتنتهي بنفس المستوى الراقي.",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    ],
    included: [
      "Uniformed & trained Valia team",
      "Guest greeting & vehicle handling",
      "Traffic & parking flow management",
      "Venue security coordination",
      "Ticket & key management system",
      "Dedicated team supervisor on-site",
      "Full coverage from arrival to last departure",
    ],
    includedAr: [
      "فريق فاليا بزي موحد ومدرب",
      "استقبال الضيوف والتعامل مع السيارات",
      "إدارة تدفق حركة المرور والمواقف",
      "تنسيق أمن المكان",
      "نظام إدارة التذاكر والمفاتيح",
      "مشرف فريق مخصص في الموقع",
      "تغطية كاملة من الوصول إلى آخر مغادرة",
    ],
    tag: "Valia",
    tagAr: "فاليا",
  },
  {
    slug: "stage-av-solutions",
    title: "Stage & AV Solutions",
    titleAr: "حلول المسرح والصوت والصورة",
    eyebrow: "Technical Production",
    eyebrowAr: "الإنتاج التقني",
    category: "addons",
    categoryLabel: "Premium Add-ons",
    categoryLabelAr: "الإضافات المميزة",
    tagline: "Immersive production that commands every room.",
    taglineAr: "إنتاج غامر يسيطر على كل قاعة.",
    description:
      "Professional stage design equipped with state-of-the-art lighting and sound distribution systems for an immersive celebration.",
    descriptionAr:
      "تصميم مسرح احترافي مزوّد بأحدث أنظمة توزيع الإضاءة والصوت لاحتفال غامر.",
    body: "Great production is invisible — it simply makes everything feel effortless and extraordinary. Our AV and stage team handles full technical production: custom stage builds and riser systems, LED wall installations, intelligent moving-head lighting rigs, professional sound distribution, wireless microphone systems, and broadcast-quality AV switching. From an intimate boardroom to an arena-scale gala, we engineer the perfect environment for every moment.",
    bodyAr:
      "الإنتاج العظيم غير مرئي — إنه ببساطة يجعل كل شيء يبدو سهلاً واستثنائياً. يتولى فريق الصوت والصورة والمسرح لدينا الإنتاج التقني الكامل: بناء مسارح مخصصة وأنظمة رافعات، تركيبات جدار LED، تركيبات إضاءة ذكية متحركة الرأس، توزيع صوت احترافي، أنظمة ميكروفون لاسلكي، وتحويل صوت وصورة بجودة البث. من غرفة اجتماعات حميمة إلى حفل بمستوى ملعب، نهندس البيئة المثالية لكل لحظة.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
    ],
    included: [
      "Custom stage & riser builds",
      "LED wall & video projection",
      "Intelligent moving-head lighting rig",
      "Full PA & sound distribution system",
      "Wireless microphone & IEM systems",
      "Dedicated AV engineer on-site",
      "Pre-event tech rehearsal & testing",
    ],
    includedAr: [
      "بناء مسارح ورافعات مخصصة",
      "جدار LED وعرض بالفيديو",
      "تركيب إضاءة ذكية متحركة الرأس",
      "نظام PA كامل وتوزيع الصوت",
      "أنظمة ميكروفون لاسلكي وIEM",
      "مهندس صوت وصورة مخصص في الموقع",
      "بروفة تقنية واختبار قبل الفعالية",
    ],
    tag: "Production",
    tagAr: "الإنتاج",
  },
  {
    slug: "exclusive-setup",
    title: "Exclusive Setup",
    titleAr: "الإعداد الحصري",
    eyebrow: "Signature Experience",
    eyebrowAr: "التجربة المميزة",
    category: "addons",
    categoryLabel: "Premium Add-ons",
    categoryLabelAr: "الإضافات المميزة",
    tagline: "One-of-a-kind environments crafted for the extraordinary.",
    taglineAr: "بيئات فريدة من نوعها مصممة للاستثنائي.",
    description:
      "One-of-a-kind event setups creating a distinctive atmosphere — exclusive configurations designed around your unique vision.",
    descriptionAr:
      "إعدادات فعاليات فريدة من نوعها تخلق أجواءً مميزة — تكوينات حصرية مصممة حول رؤيتك الفريدة.",
    body: "When a standard venue simply will not do, our exclusive setup team builds environments from scratch. We've transformed empty rooftops into candlelit gardens, desert landscapes into black-tie dining rooms, and warehouse spaces into crystal ballrooms. Our team handles structural elements, custom furniture, lighting rigs, and every atmospheric detail — turning blank canvas into breathtaking reality.",
    bodyAr:
      "عندما لا يكون المكان القياسي كافياً ببساطة، يبني فريق الإعداد الحصري لدينا بيئات من الصفر. لقد حولنا أسطح مبانٍ فارغة إلى حدائق مضيئة بالشموع، ومناظر صحراوية إلى قاعات طعام بالبدلة السوداء، ومساحات مستودعات إلى قاعات رقص كريستالية. يتولى فريقنا العناصر الهيكلية والأثاث المخصص وتركيبات الإضاءة وكل تفصيلة جوية — محولاً اللوحة الفارغة إلى واقع يأخذ الأنفاس.",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    ],
    included: [
      "Exclusive venue transformation",
      "Custom structural & furniture build",
      "Atmospheric lighting design",
      "Flooring & ceiling installation",
      "Branded elements & signage",
      "Generator & technical infrastructure",
      "Full build & breakdown team",
    ],
    includedAr: [
      "تحويل مكان حصري",
      "بناء هيكلي وأثاث مخصص",
      "تصميم إضاءة جوية",
      "تركيب الأرضية والسقف",
      "عناصر وعلامات ذات علامة تجارية",
      "بنية تحتية تقنية ومولدات",
      "فريق بناء وتفكيك كامل",
    ],
    tag: "Exclusive",
    tagAr: "حصري",
  },
];

export const categories = [
  { id: "all",      label: "All Services",    labelAr: "جميع الخدمات"    },
  { id: "catering", label: "Catering",         labelAr: "التموين"          },
  { id: "planning", label: "Event Planning",   labelAr: "تنظيم الفعاليات" },
  { id: "decor",    label: "Décor & Design",   labelAr: "الديكور والتصميم" },
  { id: "addons",   label: "Premium Add-ons",  labelAr: "الإضافات المميزة" },
] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  const current = getServiceBySlug(slug);
  if (!current) return [];
  const sameCategory = services.filter(
    (s) => s.slug !== slug && s.category === current.category
  );
  const others = services.filter(
    (s) => s.slug !== slug && s.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, count);
}
