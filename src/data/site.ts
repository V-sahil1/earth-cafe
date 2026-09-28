export const IMG = {
  logo: "/images/logo.png",
  amaranth: "/images/amaranth.jpg",
  skewers: "/images/skewers.jpg",
  marbleWall: "/images/marble-wall.jpg",
  bruschetta: "/images/bruschetta.jpg",
  reading: "/images/reading.jpg",
  falafel: "/images/falafel.jpg",
  tofu: "/images/tofu-scramble.jpg",
  coffee: "/images/coffee.jpg",
} as const;

export const INSTAGRAM_URL = "https://instagram.com/earthcafeindia";

export const navLinks = [
  { href: "/menu", label: "Menu", mobileLabel: "Menu" },
  { href: "/our-story", label: "Our Story", mobileLabel: "Our Story" },
  { href: "/food", label: "Food", mobileLabel: "Food & Nutrition" },
  { href: "/coffee", label: "Coffee", mobileLabel: "Artisan Coffee" },
  { href: "/journal", label: "Journal", mobileLabel: "The Journal" },
  { href: "/visit-us", label: "Visit Us", mobileLabel: "Visit Mumbai Cafés" },
];

export type MenuCategory = "breakfast" | "toasts" | "wraps" | "bowls" | "beverages";

export const menuCategories: { id: "all" | MenuCategory; label: string }[] = [
  { id: "all", label: "All Dishes" },
  { id: "breakfast", label: "Breakfast & Porridge" },
  { id: "toasts", label: "Toasts & Bruschetta" },
  { id: "wraps", label: "Wraps & Rolls" },
  { id: "bowls", label: "Nourish Bowls & Mains" },
  { id: "beverages", label: "Coffee & Sips" },
];

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  tag: string;
  accent?: boolean;
  category: MenuCategory;
  featured?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: "amaranth-berry-superbowl",
    name: "Amaranth Berry Superbowl",
    price: 420,
    description:
      "Slow-cooked puffed amaranth, almond mylk, forest blueberries, dried cranberries, toasted pumpkin seeds, raw organic honey drizzle.",
    tag: "GF • Plant-Based",
    category: "breakfast",
    featured: true,
  },
  {
    id: "heirloom-pomodoro-bruschetta",
    name: "Heirloom Pomodoro Bruschetta",
    price: 480,
    description:
      "Toasted multigrain sourdough, garlic-rubbed, marinated sun-ripened heritage tomatoes, house cashew whipped cream, Genovese basil.",
    tag: "100% Vegan",
    category: "toasts",
    featured: true,
  },
  {
    id: "ruby-beetroot-falafel-roll",
    name: "Ruby Beetroot Falafel Roll",
    price: 510,
    description:
      "Beetroot-infused flatbread, golden baked chickpea & coriander patties, pickled turnip relish, shaved cucumber, lemony tahini.",
    tag: "High Protein • Bestseller",
    category: "wraps",
    featured: true,
  },
  {
    id: "tandoori-cottage-cheese-satay",
    name: "Tandoori Cottage Cheese Satay",
    price: 560,
    description:
      "Smoked marinated paneer skewers, wok-tossed broccoli and haricot beans, aromatic herb wild rice, roasted spicy peanut sauce.",
    tag: "Chef Recommendation",
    accent: true,
    category: "bowls",
    featured: true,
  },
  {
    id: "golden-turmeric-tofu-hash",
    name: "Golden Turmeric Tofu Hash",
    price: 460,
    description:
      "Organic soft tofu scramble with fresh turmeric, baby spinach, roasted garlic baby potatoes, thick-cut sourdough toast with churned vegan butter.",
    tag: "Vegan • High Protein",
    category: "breakfast",
    featured: true,
  },
  {
    id: "earth-botanical-oat-flat-white",
    name: "Earth Botanical Oat Flat White",
    price: 290,
    description:
      "Single-estate Chikmagalur washed Arabica, silky steam-frosted Swedish oat milk, raw coconut sugar dust.",
    tag: "Artisan Roast",
    category: "beverages",
    featured: true,
  },
  {
    id: "overnight-chia-parfait",
    name: "Overnight Chia & Mango Parfait",
    price: 380,
    description:
      "Coconut-soaked chia pudding layered with Alphonso mango, house granola crunch and toasted coconut flakes.",
    tag: "Vegan • No Refined Sugar",
    category: "breakfast",
  },
  {
    id: "smashed-avocado-sourdough",
    name: "Smashed Avocado Sourdough",
    price: 520,
    description:
      "Hass avocado, chilli flakes, lime, heirloom cherry tomatoes and dukkah on slow-ferment sourdough.",
    tag: "100% Vegan",
    category: "toasts",
  },
  {
    id: "mushroom-truffle-toast",
    name: "Wild Mushroom & Thyme Toast",
    price: 540,
    description:
      "Pan-roasted wild mushrooms, garlic confit, thyme and cashew parmesan on toasted country bread.",
    tag: "Chef Special",
    accent: true,
    category: "toasts",
  },
  {
    id: "paneer-tikka-wrap",
    name: "Charred Paneer Tikka Wrap",
    price: 490,
    description:
      "Tandoor-spiced paneer, mint yoghurt, pickled onions and crunchy slaw rolled in a whole-wheat lavash.",
    tag: "High Protein",
    category: "wraps",
  },
  {
    id: "buddha-bowl",
    name: "Green Goddess Buddha Bowl",
    price: 540,
    description:
      "Quinoa, roasted sweet potato, edamame, pickled beets, avocado and a bright herb-tahini dressing.",
    tag: "GF • Vegan",
    category: "bowls",
  },
  {
    id: "ceremonial-matcha",
    name: "Ceremonial Matcha Latte",
    price: 340,
    description: "Uji, Kyoto first-harvest matcha whisked to order and topped with oat foam.",
    tag: "Oat Milk",
    category: "beverages",
  },
  {
    id: "cold-brew",
    name: "16-Hour Cold Brew",
    price: 280,
    description: "Slow-steeped single origin with notes of cacao nibs & sun-dried fig.",
    tag: "Artisan Roast",
    category: "beverages",
  },
  {
    id: "golden-mylk",
    name: "Golden Mylk Elixir",
    price: 260,
    description: "Lakadong turmeric, cardamom and black pepper in warm almond mylk.",
    tag: "Caffeine-Free",
    category: "beverages",
  },
];

export const favourites = [
  {
    name: "Amaranth Bowl",
    price: 420,
    image: IMG.amaranth,
    badge: "Bestseller",
    badgeAccent: false,
    description: "Popped amaranth seeds, fresh berries, toasted pumpkin pepitas and pure wild maple nectar.",
    tag: "Organic • GF",
  },
  {
    name: "Ruby Falafel Wrap",
    price: 510,
    image: IMG.falafel,
    badge: "100% Vegan",
    badgeAccent: false,
    description: "House beetroot lavash, herb falafel crunch, cucumber ribbons, fermented tahini dressing.",
    tag: "Protein Rich",
  },
  {
    name: "Heirloom Bruschetta",
    price: 480,
    image: IMG.bruschetta,
    badge: "Chef Special",
    badgeAccent: true,
    description: "Slow-ferment sourdough base, balsamic glazed tomatoes, whipped cashew ricotta and fresh basil.",
    tag: "Artisanal",
  },
  {
    name: "Grilled Satay Platter",
    price: 560,
    image: IMG.skewers,
    badge: "Crowd Loved",
    badgeAccent: false,
    description: "Charred organic paneer skewers, wild brown rice, buttered garden veggies, roasted peanut jus.",
    tag: "Gluten-Free",
  },
];

export const coffeeHighlights = [
  { name: "Matcha • Ceremonial", note: "Uji, Kyoto first harvest with oat foam." },
  { name: "16-Hour Cold Brew", note: "Notes of cacao nibs & sun-dried fig." },
  { name: "Golden Mylk Elixir", note: "Lakadong turmeric, cardamom, black pepper." },
  { name: "Pour Over V60", note: "Single origin floral and citrus profiles." },
];

export const locations = [
  {
    slug: "bandra",
    name: "Bandra",
    badge: "Flagship Café",
    icon: "storefront",
    address: "Waterfield Road, Bandra West",
    short: "Pali Hill, Waterfield",
    hours: "Open Daily: 8:00 AM – 11:00 PM",
    perk: "Outdoor Pet Friendly Seating",
  },
  {
    slug: "juhu",
    name: "Juhu",
    badge: "Coastal Vibes",
    icon: "beach_access",
    address: "Juhu Tara Road, near Juhu Beach",
    short: "VM Road, 10th Lane",
    hours: "Open Daily: 8:30 AM – 11:30 PM",
    perk: "Sunlit Botanical Patio",
  },
  {
    slug: "bkc",
    name: "BKC",
    badge: "Business Meets Mindful",
    icon: "business_center",
    address: "Maker Maxity, Bandra Kurla Complex",
    short: "Maker Maxity",
    hours: "Open Mon–Sun: 9:00 AM – 10:30 PM",
    perk: "Power Lunches & High-Speed WiFi",
  },
  {
    slug: "churchgate",
    name: "Churchgate",
    badge: "South Mumbai",
    icon: "location_city",
    address: "Veer Nariman Road, Marine Drive Enclave",
    short: "Marine Drive Enclave",
    hours: "Open Daily: 8:00 AM – 11:00 PM",
    perk: "Art Deco Architecture Nostalgia",
  },
  {
    slug: "palladium",
    name: "Palladium",
    badge: "Palladium Luxury",
    icon: "shopping_bag",
    address: "Level 3, High Street Phoenix, Lower Parel",
    short: "High Street Phoenix",
    hours: "Open Daily: 11:00 AM – 11:00 PM",
    perk: "Bespoke Dessert & Coffee Bar",
  },
];

export const mapsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Earth Cafe ${address} Mumbai`)}`;

export type Article = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  volume: string;
  image: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "why-colour-belongs-on-your-plate",
    category: "Nutrition",
    readTime: "4 min read",
    title: "Why Colour Belongs on Your Plate",
    excerpt:
      "How naturally pigmented reds, greens, and golden spices elevate cellular health, mood, and satiety.",
    volume: "Volume 04",
    image: IMG.bruschetta,
    body: [
      "Walk into any of our kitchens at 7am and the first thing you notice is colour: crates of ruby beetroot, sun-ripened tomatoes, bunches of coriander and knobs of fresh turmeric. That palette is not decoration — it is nutrition you can see.",
      "The deep reds of beetroot and tomato come from betalains and lycopene. The greens of spinach, basil and edamame carry chlorophyll, folate and magnesium. The golden hue of turmeric is curcumin, prized in Indian kitchens for generations. Each colour family brings a different set of phytonutrients, which is why we build plates that span the spectrum.",
      "A colourful plate is also a more satisfying one. Variety of texture and flavour slows us down, invites us to notice what we are eating, and helps us feel full without feeling heavy. That is the quiet idea behind every Earth Café bowl: let the food be the colour.",
    ],
  },
  {
    slug: "slow-mornings-at-earth-cafe",
    category: "Lifestyle",
    readTime: "6 min read",
    title: "Slow Mornings at Earth Café",
    excerpt:
      "The art of unhurried 10am flat whites, journaling on honed marble, and starting the workday with clarity.",
    volume: "Volume 03",
    image: IMG.reading,
    body: [
      "Mumbai rarely slows down, which is exactly why a slow morning feels like such a luxury. Our cafés were designed as small sanctuaries: fluted sage walls, cool marble tables and light that moves gently across the room.",
      "Our regulars have their rituals. An oat flat white and a notebook. A bowl of amaranth porridge before a big meeting. A ceremonial matcha shared with a friend who has not been seen in weeks. None of it is rushed.",
      "We think the first hour of the day sets the tone for the rest of it. Come in, put the phone face down, and give yourself ten unhurried minutes. The emails will still be there.",
    ],
  },
  {
    slug: "food-that-feels-like-home",
    category: "Heritage",
    readTime: "5 min read",
    title: "Food That Feels Like Home",
    excerpt:
      "Reinterpreting classic Indian spices, amaranth traditions, and warming masalas without culinary compromises.",
    volume: "Volume 02",
    image: IMG.amaranth,
    body: [
      "Rajgira — amaranth — has been part of Indian fasting kitchens for centuries, puffed into laddoos or cooked into warming porridge. Our Amaranth Superbowl is a love letter to that tradition, finished with seasonal berries and seeds.",
      "The same thinking runs through the menu. Tandoori marinades on paneer satay, turmeric in our tofu hash, cardamom in the golden mylk. Familiar flavours, cooked with whole ingredients and no shortcuts.",
      "Healthy food should never feel foreign. It should taste like the kitchen you grew up in — just a little lighter, a little brighter.",
    ],
  },
  {
    slug: "the-art-of-the-pour-over",
    category: "Coffee",
    readTime: "3 min read",
    title: "The Art of the Pour Over",
    excerpt:
      "From shade-grown Karnataka estates to your cup — why we brew single origins slowly, by hand.",
    volume: "Volume 01",
    image: IMG.coffee,
    body: [
      "Our coffee comes from shade-grown estates in Karnataka and Kerala, roasted in micro-batches so each origin keeps its character.",
      "A V60 pour over is the clearest way to taste that character. Hot water, a steady hand, three minutes of patience — and the florals and citrus that a milk drink would hide come forward.",
      "Ask your barista which origin is on the bar today. They will happily talk you through it.",
    ],
  },
];

export const pillars = [
  {
    title: "01. Wholesome",
    tag: "Unprocessed",
    text: "Fresh organic produce, cold-pressed nut butters, and ancient whole grains without chemical shortcuts.",
  },
  {
    title: "02. Mindful",
    tag: "Pure Intent",
    text: "Plates crafted thoughtfully to sustain daily cognitive vitality, digestion, and harmony with nature.",
  },
  {
    title: "03. Delicious",
    tag: "Craveable",
    text: "Healthy never means dull. Expect pungent house tahini, crispy falafels, flaky bakes, and vibrant salsas.",
  },
];
