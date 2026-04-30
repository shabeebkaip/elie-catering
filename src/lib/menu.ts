export type MenuSection = {
  title: string;
  items: string[];
};

export type MenuPackage = {
  id: string;
  name: string;
  tier?: string;
  image: string;
  sections: MenuSection[];
  note?: string;
};

export type MenuCategory = {
  slug: string;
  title: string;
  titleAr: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  packages: MenuPackage[];
  gallery: string[];
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "finger-food",
    title: "Finger Food",
    titleAr: "مقبلات الإصبع",
    eyebrow: "Elegant Receptions",
    description:
      "Delicate and sophisticated bite-sized treats crafted for elegant receptions and cocktail gatherings",
    heroImage:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop",
    packages: [
      {
        id: "finger-food-classic",
        name: "Classic Finger Food Selection",
        image:
          "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Cold Canapés",
            items: [
              "Salmon Blinis with Cream Cheese",
              "Bruschetta with Tomato & Basil",
              "Smoked Turkey Mini Rolls",
              "Caprese Skewers",
              "Prawn Cocktail Bites",
            ],
          },
          {
            title: "Hot Bites",
            items: [
              "Mini Chicken Samosas",
              "Cheese Borek",
              "Meat Spring Rolls",
              "Mini Quiche Lorraine",
              "Stuffed Mushrooms",
            ],
          },
          {
            title: "Dessert Bites",
            items: [
              "Mini Chocolate Eclairs",
              "Fruit Tartlets",
              "Macarons",
              "Mini Cheesecakes",
            ],
          },
        ],
        note: "Menu customisable per event. Minimum 30 persons.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    slug: "coffee-break",
    title: "Coffee Break",
    titleAr: "استراحة القهوة",
    eyebrow: "Premium Refreshments",
    description:
      "Premium coffee and refreshments for seamless event interludes — elegant, efficient, and delightful",
    heroImage:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2070&auto=format&fit=crop",
    packages: [
      {
        id: "coffee-break-bronze-1",
        name: "Bronze — 1",
        tier: "Per Person · VAT Excluded",
        image: "https://images.unsplash.com/photo-1464979681340-bdd28a61699e?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Sandwiches",
            items: [
              "Mini milk bread with turkey and pickled cucumber",
              "Mini baguette bread with feta cheese and fresh cucumber",
              "Mini olive balls with tuna and corn",
            ],
          },
          {
            title: "Salads & Cold Appetizers",
            items: [
              "Cucumber and feta roll with shrimp",
              "Cranberry Pecan Cheese Ball",
              "Mini Tart Chicken & Cheese Quiches",
              "Gorgonzola cheese canapés with walnut",
            ],
          },
          {
            title: "Appetizers",
            items: ["Meat & Cheese Sambuusa"],
          },
          {
            title: "Dessert",
            items: [
              "Assorted French Pastry",
              "Assorted Danish Pastry",
              "Mini Croissants",
              "Fresh-cut Fruits",
            ],
          },
          {
            title: "Beverages",
            items: [
              "Assorted Juices",
              "Mineral Water",
              "Coffee",
              "Tea",
            ],
          },
        ],
        note: "Minimum 50 people. Tables and chairs not included.",
      },
    ],
    gallery: [
      "/menu/coffee-break-1.jpeg",
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    slug: "live-cooking-stations",
    title: "Live Cooking Stations",
    titleAr: "محطات الطبخ الحي",
    eyebrow: "Interactive Culinary",
    description:
      "Interactive culinary experiences where our chefs cook fresh before your guests — a show and a feast in one",
    heroImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
    packages: [
      {
        id: "live-bbq-station",
        name: "Barbecue Live Station",
        tier: "Live Experience · Al Riyadh",
        image: "https://images.unsplash.com/photo-1544025162-d76538f54073?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Station 1 — Lamb & Fish",
            items: [
              "Lamb Ousal",
              "Lamb Kebab",
              "Fish Sabach",
              "Served with: Tahini Sauce & Cream Sauce",
            ],
          },
          {
            title: "Station 2 — Chicken & Potatoes",
            items: [
              "Shish Tawook (Red + White)",
              "Chicken Tikka",
              "Chicken Kebab",
              "Served with: Full Grilled Potatoes & Potato Cubes",
            ],
          },
          {
            title: "Station 3 — Lamb Neck & Arayes",
            items: [
              "Lamb Neck Ribs",
              "Lamb Arayes",
              "Served with: Special BBQ Bread & Rocket Salad",
            ],
          },
          {
            title: "Station 4 — Seafood & Chicken",
            items: [
              "Grilled Fish Steak",
              "Grilled Chicken Leg",
              "Served with: Lebanese Bread & Corn",
            ],
          },
        ],
      },
      {
        id: "shawarma-station",
        name: "Shawarma Live Station",
        tier: "Live Experience · Al Riyadh",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Bread & Wraps",
            items: ["Sandwich Bread", "Manoush Bread"],
          },
          {
            title: "Toppings",
            items: [
              "Lettuce",
              "Tomatoes",
              "Fried Potatoes",
              "Pickled Cucumber",
            ],
          },
          {
            title: "Sauces",
            items: ["Mayonnaise Ketchup Mustard", "BBQ Sauce or Special Burger Sauce"],
          },
          {
            title: "Grilled Meats",
            items: ["Grilled Lamb", "Grilled Chicken"],
          },
        ],
      },
      {
        id: "burger-station",
        name: "Barbecue Burger Live Station",
        tier: "Live Experience · Al Riyadh",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Burgers",
            items: [
              "Beef Burger — Grilled",
              "Chicken Burger — Grilled",
              "Cheddar or American Cheese",
              "Fish Sabach",
            ],
          },
          {
            title: "Toppings",
            items: [
              "Lettuce",
              "Tomatoes",
              "White or Caramelized Onions",
              "Pickled Cucumber",
            ],
          },
          {
            title: "Sauces",
            items: [
              "Mayonnaise Ketchup Mustard",
              "BBQ Sauce or Special Burger Sauce",
            ],
          },
        ],
      },
    ],
    gallery: [
      "/menu/bbq-live-station-1.jpeg",
      "/menu/bbq-live-station-2.jpeg",
      "/menu/shawarma-station.jpeg",
      "/menu/bbq-burger-station.jpeg",
    ],
  },
  {
    slug: "bbq-section",
    title: "BBQ Section",
    titleAr: "قسم الباربيكيو",
    eyebrow: "Grilled Specialties",
    description:
      "High-end grilled specialties crafted with the finest meats and ingredients — a carnivore's paradise",
    heroImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop",
    packages: [
      {
        id: "bbq-live-1",
        name: "BBQ Live Station",
        tier: "Full Station Setup · Al Riyadh",
        image: "https://images.unsplash.com/photo-1544025162-d76538f54073?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Lamb Selection",
            items: ["Lamb Ousal", "Lamb Kebab", "Fish Sabach"],
          },
          {
            title: "Chicken Selection",
            items: ["Shish Tawook (Red + White)", "Chicken Tikka", "Chicken Kebab"],
          },
          {
            title: "Specialty Cuts",
            items: [
              "Lamb Neck Ribs",
              "Lamb Arayes",
              "Grilled Fish Steak",
              "Grilled Chicken Leg",
            ],
          },
        ],
      },
      {
        id: "bbq-burger-1",
        name: "Burger Live Station",
        tier: "Full Station Setup · Al Riyadh",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Burgers",
            items: [
              "Beef Burger",
              "Chicken Burger",
              "Cheddar or American Cheese",
              "Fish Sabach",
            ],
          },
          {
            title: "Served With",
            items: [
              "Lettuce, Tomato, Pickles",
              "BBQ Sauce · Special Sauce",
              "Caramelized Onions",
            ],
          },
        ],
      },
    ],
    gallery: [
      "/menu/bbq-live-station-1.jpeg",
      "/menu/bbq-live-station-2.jpeg",
      "/menu/bbq-burger-station.jpeg",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    slug: "eastern-italian-cuisine",
    title: "Eastern & Italian Cuisine",
    titleAr: "المطبخ الشرقي والإيطالي",
    eyebrow: "International Buffets",
    description:
      "Authentic Eastern flavors and exquisite Italian dishes prepared by master chefs — a true journey of taste",
    heroImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    packages: [
      {
        id: "buffet-bronze-1",
        name: "Bronze — 1",
        tier: "Buffet International · Per Person · VAT Excluded",
        image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Tableside Appetizers",
            items: [
              "Spicy Labneh with Nuts",
              "Muhammara with Eggplant",
              "Shrimp Cocktail",
              "Classic Hummus — Tahini",
              "Falafel Mille-Feuille",
              "Assorted Baked Goods",
            ],
          },
          {
            title: "Salads & Cold Appetizers",
            items: [
              "Salmon Sushi Cake",
              "Fresh Tofu Spring Rolls",
              "Fatta Eggplant with Kebba Balls & Pomegranate",
              "Caprese Salad with Tomato & Pesto Sauce",
              "Armenian Itch Salad",
              "Waldorf Salad with Chicken",
              "Pear Salad with Blue Cheese and Pomegranate",
              "Kale Edamame Salad",
              "Selection of Bread",
            ],
          },
          {
            title: "Hot Appetizers",
            items: [
              "Russian-Style Stroganoff Fillet",
              "Linguine al Pesto with Chicken",
              "Fish Rolls in Lemon Sauce",
              "Kibbeh with Yogurt & Coriander Sauce",
              "Shawarma with Beetroot Rice",
              "Chicken Biryani with Raita",
              "Seafood Lasagna",
              "Tandoori Prawn",
              "Cubed Potatoes with Indian Spices",
              "Vermicelli Rice",
            ],
          },
          {
            title: "Dessert",
            items: [
              "Mirror Fruits (Strawberry, Dragon Fruit, Mixed Berries, Mango, Kiwi, Pineapple)",
              "Mini Fruit Tarts",
              "Crème Brûlé Cups",
              "Umm Ali with Kunafa and Macaroons",
              "Tiramisu Cake",
              "Mixed Berry Cheesecake",
              "Passion Fruit Trifle",
              "Chocolate Cake",
              "Mango Cake — Pistachio Pudding",
            ],
          },
          {
            title: "Beverages",
            items: ["Mineral Water", "Saudi Champagne"],
          },
        ],
        note: "Tables and chairs included. Min 30 persons.",
      },
      {
        id: "buffet-bronze-2",
        name: "Bronze — 2",
        tier: "Buffet International · Per Person · VAT Excluded",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Tableside",
            items: [
              "Spicy Labneh with Nuts",
              "Muhammara with Eggplant",
              "Shrimp Cocktail",
              "Classic Hummus — Tahini",
              "Falafel Mille-Feuille",
              "Assorted Baked Goods",
            ],
          },
          {
            title: "Salads & Cold Appetizers",
            items: [
              "Salmon Sushi Cake with Pomegranate",
              "Fresh Tofu Spring Rolls",
              "Armenian Kibbeh with Pomegranate",
              "Fatta Chicken Msakhán",
              "Quinoa & Pomegranate Tabbouleh",
              "Caprese with Tomato & Pesto",
              "Crab with Mango Salad & Sesame",
              "Selection of Bread",
            ],
          },
          {
            title: "Omelette Live Section",
            items: [
              "Chicken Grille, Fresh Mushroom, Onion, Parsley, Tomato, Sausage, Mortadella",
            ],
          },
          {
            title: "Hot Appetizers",
            items: ["Meat Borek", "Cheese Borek", "Chicken Satay"],
          },
          {
            title: "Main Courses",
            items: [
              "Russian-Style Stroganoff Fillet",
              "Linguine al Pesto with Chicken",
              "Fish Rolls in Lemon Sauce",
              "Kibbeh with Yogurt & Dhahi Barak",
              "Mixed Stuffed Vegetables",
              "Chicken Biryani with Raita",
              "Seafood Lasagna",
              "Tandoori Prawn",
              "Cubed Potatoes / Indian Spices · Vermicelli Rice",
            ],
          },
          {
            title: "Dessert",
            items: [
              "Mirror Fruits · Mixed Berries",
              "Mini Fruit Tarts · Crème Brûlé Cups",
              "Umm Ali with Kunafa and Macaroons",
              "Tiramisu Cake · Mixed Berry Cheesecake",
              "Passion Fruit Trifle · Chocolate Cake",
              "Mango Cake · Pistachio Pudding",
            ],
          },
          {
            title: "Beverages",
            items: ["Mineral Water", "Saudi Champagne"],
          },
        ],
        note: "Tables and chairs included. Min 30 persons.",
      },
      {
        id: "saudi-cuisine-2",
        name: "Saudi Cuisine — 2",
        tier: "Traditional Saudi Dishes Buffet · Per Person · VAT Excluded",
        image: "https://images.unsplash.com/photo-1571167530149-c1105da4703d?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Cold Appetizers & Salad",
            items: [
              "Hummus Mix with Three Colors",
              "Fish with Harrah Sauce",
              "Moussaka Eggplant",
              "Vine Leaves",
              "Lentil Salad",
              "Traditional Saudi Salad",
              "Kochari Salad",
              "Kale Tabbouleh with Quinoa & Grenadine",
              "Fattoush Fusion with Pomegranate Molasses",
              "Assortment of Traditional Saudi Bread",
            ],
          },
          {
            title: "Hot Appetizers",
            items: ["Spring Rolls", "Cheese Samosa", "Kebbeh"],
          },
          {
            title: "Main Courses",
            items: [
              "Rad Jerish with Meat",
              "Hamour Biryani with Raita",
              "Kebbeh Labaniyeh & Shish Barak",
              "Sleek with Chicken",
              "Dried Fish with Gulf Spices",
              "Maklouba Chicken",
              "Mixed Stuffed Vegetables",
            ],
          },
          {
            title: "Dessert",
            items: [
              "Umm Ali with Raisins & Nuts",
              "Selection of Oriental & International Sweets",
              "Seasonal Fresh Fruits",
            ],
          },
          {
            title: "Beverages",
            items: [
              "Mineral Water",
              "Orange Juice",
              "Refreshing Mojito Drinks",
            ],
          },
        ],
        note: "Minimum 50 people. Tables and chairs not included. Lamb available on demand.",
      },
      {
        id: "traditional-buffet",
        name: "Cuisine — 2 Traditional Buffet",
        tier: "150 Persons · Per Person · VAT Excluded",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Appetizers and Salads",
            items: [
              "Hummus Mix with Three Colors",
              "Fish with Hot Sauce",
              "Spring Rolls — Cheese Samosas — Kibbeh",
              "Eggplant Moussaka",
              "Grape Leaves",
              "Lentil Salad · Popular Salad",
              "Kale Tabbouleh with Quinoa & Pomegranate",
              "Fattoush Fusion with Pomegranate Molasses",
              "Assortment of Traditional Saudi Breads",
            ],
          },
          {
            title: "Main Course",
            items: [
              "Red Jareesh with Meat (Saudi food)",
              "AL Qursan Meat",
              "Fish Hamour Biryani with Raita Sauce",
              "Chicken Butter",
              "Selig with Chicken (Saudi food)",
              "Dried Fish with Khaliji Spices",
              "Mutton Curry",
              "Assorted Vegetable Mahachi",
              "Rice with Saffron (Saudi food)",
              "Matbooz Meat",
              "Mansaf Meat",
            ],
          },
          {
            title: "Dessert",
            items: [
              "Mirror Fruits (Strawberry, Dragon Fruit, Mixed Berries, Mango, Kiwi, Pineapple)",
              "Crème Brûlé Cups",
              "Umm Ali with Kunefe and Mixed Nuts",
              "Tiramisu Cake",
              "Mixed Berry Cheesecake",
              "Chocolate Cake · Mango Cake · Pistachio Pudding",
            ],
          },
          {
            title: "Live Section Drinks",
            items: [
              "Mineral Water",
              "Orange Juice",
              "Tea · Saudi Champagne",
              "Coffee · Mojito Drink",
            ],
          },
        ],
        note: "Tables and chairs not included. Lamb available on demand.",
      },
    ],
    gallery: [
      "/menu/buffet-international-1.jpeg",
      "/menu/buffet-international-2.jpeg",
      "/menu/saudi-cuisine.jpeg",
      "/menu/traditional-buffet-en.jpeg",
      "/menu/sample-buffet-1.jpeg",
      "/menu/sample-buffet-2.jpeg",
    ],
  },
  {
    slug: "seafood-sushi",
    title: "Seafood & Sushi",
    titleAr: "المأكولات البحرية والسوشي",
    eyebrow: "Fresh Ocean Selections",
    description:
      "Fresh, premium seafood and artfully prepared vibrant sushi rolls — elegance from the ocean to your table",
    heroImage:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop",
    packages: [
      {
        id: "seafood-sushi-premium",
        name: "Premium Seafood & Sushi Selection",
        image:
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Seafood Mains",
            items: [
              "Grilled Hamour with Herbs",
              "Seafood Lasagna",
              "Tandoori Prawns",
              "Fish Rolls in Lemon Sauce",
              "Grilled Fish Steak",
            ],
          },
          {
            title: "Sushi Station",
            items: [
              "Salmon Sushi Cake",
              "Fresh Tofu Spring Rolls",
              "California Rolls",
              "Spicy Tuna Rolls",
              "Dragon Rolls",
              "Edamame Salad",
            ],
          },
          {
            title: "Cold Seafood",
            items: [
              "Shrimp Cocktail",
              "Crab with Mango Salad & Sesame",
              "Fresh Oysters on Request",
            ],
          },
        ],
        note: "Menu customisable per event. Minimum 30 persons.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606731219412-3e5e4e25bde7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    slug: "specialty-arabic-coffee",
    title: "Specialty & Arabic Coffee",
    titleAr: "القهوة المتخصصة والعربية",
    eyebrow: "Arabian Hospitality",
    description:
      "Authentic Arabian hospitality and specialty coffee served with elegance — the perfect closing to every gathering",
    heroImage:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2070&auto=format&fit=crop",
    packages: [
      {
        id: "arabic-coffee-station",
        name: "Arabic Coffee & Dates Station",
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Arabic Coffee",
            items: [
              "Traditional Saudi Qahwa (Cardamom Coffee)",
              "Arabic Coffee with Saffron",
              "Rose Water Infused Coffee",
              "Gahwa with Mixed Spices",
            ],
          },
          {
            title: "Specialty Coffee",
            items: [
              "Espresso & Americano",
              "Cappuccino & Latte",
              "Cold Brew",
              "Filter Coffee",
            ],
          },
          {
            title: "Accompaniments",
            items: [
              "Medjool Dates & Date Selection",
              "Assorted Baklava",
              "Arabic Sweets",
              "Lokum (Turkish Delight)",
              "Petit Fours",
            ],
          },
        ],
        note: "Station includes dispensers and traditional serving sets.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2070&auto=format&fit=crop",
      "/menu/sample-beverages.jpeg",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    slug: "birthday-menu",
    title: "Birthday Menu",
    titleAr: "قائمة أعياد الميلاد",
    eyebrow: "Celebrations",
    description:
      "A complete birthday celebration package — from mini snacks to candy corner, topped off with a chocolate-stuffed birthday cake",
    heroImage: "/menu/birthday-menu.jpeg",
    packages: [
      {
        id: "birthday-package",
        name: "Birthday Celebration Package",
        tier: "Includes Balloon Corner · Table & Décor",
        image: "https://images.unsplash.com/photo-1558636508-e0969431ddf3?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Salad",
            items: [
              "Chicken Caesar Salad",
              "Quinoa Salad with Lemon Confit",
              "Caprese with Tomato & Pesto Sauce",
              "Crunchy Noodle Salad",
              "Tuna with Pasta Salad",
            ],
          },
          {
            title: "Mini Snacks",
            items: [
              "Mix Mini Burger",
              "Mini Pizza",
              "Mini Tuna Sandwich",
              "Chicken Nuggets",
              "French Fries",
              "Mini Club Sandwich",
              "Mini Hot-Dog",
              "Puffiness Chips",
              "Baton Sale (Salted Crunchy & Butter)",
            ],
          },
          {
            title: "Party Food",
            items: [
              "Tagliatelle Alfredo",
              "Nouille ou Poulet",
              "Mater Paneer",
              "Kadi Pakoda",
              "Govind Gatta",
              "Malai Mogar",
              "Haldi Paneer",
            ],
          },
          {
            title: "Candy Corner",
            items: [
              "Cup of Fruit Salad",
              "Mix of Skewers Fresh Fruit",
              "Fontan Chocolate & White Chocolate",
              "Served with Marshmallow, Strawberry, Kiwi, Banana",
            ],
          },
          {
            title: "Hot & Cold Beverages",
            items: [
              "Hot Chocolate · Chocolate Banana",
              "Avocado Green Smoothie",
              "Mineral Water · Orange Juice",
              "Refreshing Mango Drinks",
              "Refreshing Mojito Drinks",
              "English Tea · Arabic Coffee",
            ],
          },
        ],
        note:
          "Birthday Cake — Cake Stuffed with Chocolate. Balloon Corner served with Table & Décor.",
      },
    ],
    gallery: [
      "/menu/birthday-menu.jpeg",
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558636508-e0969431ddf3?q=80&w=2070&auto=format&fit=crop",
    ],
  },
];

export function getMenuCategory(slug: string): MenuCategory | undefined {
  return menuCategories.find((c) => c.slug === slug);
}
