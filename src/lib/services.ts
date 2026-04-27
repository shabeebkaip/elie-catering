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
    img: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop",
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
