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
  avocadoToast: "/images/avocado-toast.jpg",
  aglioOlio: "/images/aglio-olio.jpg",
  thaiRollPadThai: "/images/thai-roll-pad-thai.jpg",
  berryBowl: "/images/berry-bowl.jpg",
  falaffair: "/images/falaffair.jpg",
  mangoChia: "/images/mango-chia.jpg",
  masalaChai: "/images/masala-chai.jpg",
  mongolianRice: "/images/mongolian-rice.jpg",
  mushroomSoup: "/images/mushroom-soup.jpg",
  locationBandra: "/images/location-bandra.jpg",
  locationJuhu: "/images/location-juhu.jpg",
  locationBkc: "/images/location-bkc.jpg",
  locationChurchgate: "/images/location-churchgate.jpg",
  locationPalladium: "/images/location-palladium.jpg",
  founder: "/images/founder.jpg",
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
  image?: string;
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
    image: IMG.berryBowl,
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
    image: IMG.bruschetta,
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
    image: IMG.falafel,
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
    image: IMG.skewers,
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
    image: IMG.tofu,
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
    image: IMG.coffee,
  },
  {
    id: "overnight-chia-parfait",
    name: "Overnight Chia & Mango Parfait",
    price: 380,
    description:
      "Coconut-soaked chia pudding layered with Alphonso mango, house granola crunch and toasted coconut flakes.",
    tag: "Vegan • No Refined Sugar",
    category: "breakfast",
    image: IMG.mangoChia,
  },
  {
    id: "smashed-avocado-sourdough",
    name: "Smashed Avocado Sourdough",
    price: 520,
    description:
      "Hass avocado, chilli flakes, lime, heirloom cherry tomatoes and dukkah on slow-ferment sourdough, with a crisp garden slaw.",
    tag: "100% Vegan",
    category: "toasts",
    image: IMG.avocadoToast,
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
    id: "crispy-thai-rolls",
    name: "Crispy Thai Rolls",
    price: 380,
    description: "Golden spring rolls packed with glass noodles, cabbage and carrot, served with sweet chilli dip.",
    tag: "100% Vegan",
    category: "wraps",
    image: IMG.thaiRollPadThai,
  },
  {
    id: "falaffair-platter",
    name: "Falaffair Mezze Platter",
    price: 560,
    description: "Herbed falafel over whipped hummus with pomegranate and harissa, served with garlic lavash crisps.",
    tag: "High Protein • Sharing",
    category: "wraps",
    image: IMG.falaffair,
  },
  {
    id: "aglio-olio",
    name: "Aglio Olio",
    price: 520,
    description: "Spaghetti tossed with garlic confit, chilli flakes, olives, cherry tomatoes, bell peppers and parsley.",
    tag: "Chef Special",
    accent: true,
    category: "bowls",
    image: IMG.aglioOlio,
  },
  {
    id: "pad-thai-bowl",
    name: "Pad Thai Bowl",
    price: 540,
    description: "Rice noodles in tamarind sauce with red cabbage, edamame, carrot ribbons and crushed peanuts.",
    tag: "Vegan • GF",
    category: "bowls",
    image: IMG.thaiRollPadThai,
  },
  {
    id: "mongolian-rice",
    name: "Mongolian Rice Bowl",
    price: 540,
    description: "Glazed tofu steaks in a sticky soy-ginger sauce over wok-fried burnt garlic rice.",
    tag: "High Protein",
    category: "bowls",
    image: IMG.mongolianRice,
  },
  {
    id: "wild-mushroom-soup",
    name: "Wild Mushroom Soup",
    price: 340,
    description: "Velvety mushroom and thyme soup with sautéed mushrooms, microgreens and toasted garlic bread.",
    tag: "Comfort Bowl",
    category: "bowls",
    image: IMG.mushroomSoup,
  },
  {
    id: "masala-chai",
    name: "Masala Chai",
    price: 180,
    description: "Assam tea slow-brewed with ginger, cardamom, cinnamon and black pepper — with oat or dairy milk.",
    tag: "House Favourite",
    category: "beverages",
    image: IMG.masalaChai,
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
    image: IMG.berryBowl,
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
    image: IMG.locationBandra,
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
    image: IMG.locationJuhu,
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
    image: IMG.locationBkc,
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
    image: IMG.locationChurchgate,
  },
  {
    slug: "palladium",
    name: "Palladium",
    badge: "Palladium Luxury",
    icon: "shopping_bag",
    address: "Gourmet Village, Phoenix Palladium, Lower Parel",
    short: "Phoenix Palladium",
    hours: "Open Daily: 11:00 AM – 11:00 PM",
    perk: "Bespoke Dessert & Coffee Bar",
    image: IMG.locationPalladium,
  },
];

/* ---------- Our Story ---------- */
export const welcomeParagraphs = [
  "Earth Café is a place driven by a deep sense of passion and creativity. Our team is dedicated to bringing you the very best in food and drink, with a focus on quality, taste, and the use of only the finest ingredients. From our delicious food to our expertly crafted coffee, everything we offer is designed to bring you joy and satisfaction.",
  "At Earth Café, we believe that every interaction is an opportunity to spread love and happiness. Whether you’re a member of our team, a guest, or a partner in our local community, we’re here to share our warmth and positivity with you. We believe that every detail matters, from the carefully chosen decor to the friendly smile of our staff.",
  "We’re more than just a restaurant or a coffee shop. We’re a community of like-minded individuals who believe in the power of positivity and connection. We’re here to inspire you, uplift you, and help you feel more connected to the world around you.",
];

export const founderParagraphs = [
  "Vik and Pooja Khatwani have always shared a deep passion for healthy and delicious food. Their journey began with a simple dream: to create a place where quality ingredients and culinary creativity come together to offer an extraordinary dining experience. With backgrounds in both business and culinary arts, they combined their skills and vision to bring Earth Café to life.",
  "Their commitment to sustainability and well-being is at the heart of everything they do. Vik and Pooja believe that food should not only taste great but also nourish the body and soul. Earth Café is their way of sharing this philosophy with the world, creating a community space where everyone can enjoy wholesome, delightful meals in a warm and welcoming environment.",
];

/** Branch timeline — years are approximate, based on public coverage of each opening. */
export const journey = [
  {
    year: "Before 2021",
    place: "Bandra",
    area: "Waterfield Road",
    slug: "bandra",
    image: IMG.locationBandra,
    text: "Where it all began. Our original Mumbai home on Waterfield Road set the tone for everything that followed — warm interiors, marble tables and wholesome plates made with good energy.",
  },
  {
    year: "2021",
    place: "Juhu",
    area: "Near Juhu Beach",
    slug: "juhu",
    image: IMG.locationJuhu,
    text: "A breezy second home by the sea, bringing slow brunches, fresh sips and sunny afternoons to Juhu.",
  },
  {
    year: "2022–23",
    place: "BKC",
    area: "Bandra Kurla Complex",
    slug: "bkc",
    image: IMG.locationBkc,
    text: "Our new house in the heart of Mumbai’s business district — mindful power lunches and a calm corner between meetings.",
  },
  {
    year: "2024",
    place: "Churchgate",
    area: "South Mumbai",
    slug: "churchgate",
    image: IMG.locationChurchgate,
    text: "Opened in late 2024, bringing Earth Café to South Mumbai with a space full of character and a menu made for sharing.",
  },
  {
    year: "2025",
    place: "Phoenix Palladium",
    area: "Gourmet Village, Lower Parel",
    slug: "palladium",
    image: IMG.locationPalladium,
    text: "Our latest chapter, joining Gourmet Village at Phoenix Palladium — wholesome food and good vibes in the middle of the city’s buzz.",
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

/** Photo-led dishes for the "Fresh From the Kitchen" horizontal gallery. */
export const kitchenGallery = [
  { name: "Aglio Olio", note: "Garlic confit, chilli & olives", tag: "Chef Special", image: IMG.aglioOlio },
  { name: "Smashed Avocado Sourdough", note: "Dukkah, lime & garden slaw", tag: "100% Vegan", image: IMG.avocadoToast },
  { name: "Thai Roll & Pad Thai", note: "Crispy rolls, tamarind noodles", tag: "Vegan • GF", image: IMG.thaiRollPadThai },
  { name: "Berry Superbowl", note: "Seeds, nuts & fresh berries", tag: "GF • Plant-Based", image: IMG.berryBowl },
  { name: "Falaffair", note: "Falafel, hummus & lavash crisps", tag: "High Protein", image: IMG.falaffair },
  { name: "Mango Chia Parfait", note: "Alphonso mango & granola", tag: "No Refined Sugar", image: IMG.mangoChia },
  { name: "Mongolian Rice", note: "Glazed tofu, burnt garlic rice", tag: "High Protein", image: IMG.mongolianRice },
  { name: "Wild Mushroom Soup", note: "Thyme, microgreens & garlic bread", tag: "Comfort Bowl", image: IMG.mushroomSoup },
  { name: "Masala Chai", note: "Ginger, cardamom & cinnamon", tag: "House Favourite", image: IMG.masalaChai },
];
