/* ————————————————————————————————————————————————
   Sky Beach Club — content layer
   All facts, rates, copy and imagery sourced from the
   official website: https://skybeachclub.com/
———————————————————————————————————————————————— */

export const SITE = {
  name: "Sky Beach Club",
  place: "Eleuthera, The Bahamas",
  tagline: "Where the Sky Meets the Beach",
  reservations: { label: "Reservations", phone: "623-224-7523", tel: "+16232247523" },
  office: { label: "Sky Beach Club Office", phone: "242-820-5996", tel: "+12428205996" },
  pascals: { label: "Pascal's Restaurant & Pool Bar", phone: "242-359-7755", tel: "+12423597755" },
  gettingHere: { label: "Getting Here Assistance", phone: "800-605-9869", tel: "+18006059869" },
  email: "reservations@skybeachclub.com",
  mailing:
    "Sky Beach Club · c/o Sterling Organization · 340 Royal Poinciana Plaza, Suite 316 · Palm Beach, FL 33480 · USA",
  official: "https://skybeachclub.com",
  tripadvisor:
    "http://www.tripadvisor.com/Hotel_Review-g147428-d1546410-Reviews-Sky_Beach_Club-Eleuthera_Out_Islands_Bahamas.html",
};

/* ——— High-resolution property photography ——— */
const HD_PHOTOS = [
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/14/26/54/aerial-view-of-sky-beach.jpg?w=1600&h=1000&s=1",
    alt: "Aerial view of Sky Beach Club",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/38/dc/14/beachfront-infinity-pool.jpg?w=1200&h=-1&s=1",
    alt: "Beachfront infinity pool at Sky Beach Club",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/24/f5/e3/sky-beach-club.jpg?w=2400&h=2400&s=1",
    alt: "Poolside bar at Sky Beach Club",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/24/f4/f9/sky-beach-club.jpg?w=2400&h=2400&s=1",
    alt: "Sky Beach Club property view",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/b4/59/94/caption.jpg?w=2200&h=2200&s=1",
    alt: "Sky Beach Club property photo",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/9d/1c/ab/caption.jpg?w=2200&h=2200&s=1",
    alt: "Sky Beach Club property photo",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/d7/13/fd/caption.jpg?w=1400&h=1400&s=1",
    alt: "Sky Beach Club property photo",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/b3/68/0c/caption.jpg?w=1400&h=1400&s=1",
    alt: "Sky Beach Club property photo",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/d7/14/09/caption.jpg?w=1200&h=1200&s=1",
    alt: "Sky Beach Club property photo",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/d7/14/02/caption.jpg?w=1100&h=1100&s=1",
    alt: "Sky Beach Club property photo",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/d7/14/00/caption.jpg?w=1100&h=1100&s=1",
    alt: "Sky Beach Club property photo",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/17/c0/80/caption.jpg?w=1200&h=1200&s=1",
    alt: "Sky Beach Club property photo",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/24/f5/e0/view-from-inside-one.jpg?w=2400&h=2400&s=1",
    alt: "Interior view at Sky Beach Club",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/88/79/59/sky-beach-club.jpg?w=1800&h=1200&s=1",
    alt: "Room and suite at Sky Beach Club",
  },
  {
    src: "https://content.savvy.com/gallery_assets/01HXAXSJX47M73HE410RAFC7DY/raw.jpg?1715163280",
    alt: "Split-level residence at Sky Beach Club",
  },
  {
    src: "https://skybeachclub.com/wp-content/uploads/2009/08/SB-Bathroom-1-sm.jpg",
    alt: "Bathroom interior at Sky Beach Club",
  },
];

const ROTATION_PHOTO: Record<string, number> = {
  bedroom: 13,
  bathroom: 15,
  kitchen: 12,
  familyroom: 14,
  luxury: 12,
  ocean1: 0,
  ocean2: 3,
  pool: 1,
  snorkelingr: 11,
  sunset: 10,
  wedding: 8,
  forever: 9,
};

export interface SBCImg {
  src: string;
  fallback: string;
  alt: string;
}

const imageIndex = (path: string): number => {
  const wow = /untitled(\d+)\.jpg$/.exec(path);
  if (wow) return (Number(wow[1]) - 1) % 12;

  const gallery = /\/(?:16|20)_(\d+)\.jpg$/.exec(path);
  if (gallery) return 4 + ((Number(gallery[1]) - 1) % 8);

  const rotation = /\/([a-z0-9]+)imagerotaorsplitlevel\.jpg$/.exec(path);
  if (rotation) return ROTATION_PHOTO[rotation[1]] ?? 12;

  if (path.includes("pool-img")) return 1;
  if (path.includes("bistro")) return 2;
  if (path.includes("single-unit") || path.includes("bedroom")) return 13;
  if (path.includes("split-level")) return 14;
  if (path.includes("bungalow")) return 12;
  if (path.includes("reservations")) return 0;
  if (path.includes("contact")) return 3;
  if (path.includes("blog")) return 4;
  if (path.includes("accomodations")) return 13;
  if (path.includes("amenities")) return 1;
  return 5;
};

const img = (path: string, _stamp: string, _alt: string): SBCImg => {
  const index = imageIndex(path);
  return {
    src: HD_PHOTOS[index].src,
    fallback: HD_PHOTOS[(index + 1) % HD_PHOTOS.length].src,
    alt: HD_PHOTOS[index].alt,
  };
};

const gal = (n: number, alt: string) => img(`/i/gallery/16_${n}.jpg`, "20231110", alt);
const wow = (n: number, alt: string) => img(`/wowslider/data1/images/untitled${n}.jpg`, "20231110", alt);
const rot = (name: string, alt: string) =>
  img(`/split-level-rotator/data1/images/${name}imagerotaorsplitlevel.jpg`, "20231110", alt);

export const IMAGES = {
  hero: [
    wow(1, "Sky Beach Club oceanfront — Eleuthera, The Bahamas"),
    wow(3, "Turquoise water meets pink sand at Sky Beach Club"),
    wow(5, "Aerial view over Sky Beach Club, Eleuthera"),
  ],
  beach: wow(2, "The pink-sand shoreline of Sky Beach, Eleuthera"),
  poolView: img("/i/downloads/pool-img__11.jpg", "20231110033338", "Infinity-edge beachfront pool at Sky Beach Club"),
  pascals: img("/i/downloads/bistro1__13.png", "20231110050924", "Pascal's Oceanfront Restaurant and Bar at Sky Beach Club"),
  oneStory: img("/i/downloads/single-unit-crop-top__19.jpg", "20231110052003", "One-story luxury oceanview villa at Sky Beach Club"),
  splitLevel: img("/i/downloads/split-levelpagetop__21.png", "20231110125716", "Split-level luxury oceanview villa at Sky Beach Club"),
  bungalow: img("/i/downloads/bungalow-inside-pic__17.jpg", "20231110101931", "Oceanfront bungalow interior at Sky Beach Club"),
  reservations: img("/i/downloads/reservations-img__5.jpg", "20231110110745", "Palm-lined path toward the sea at Sky Beach Club"),
  contact: img("/i/downloads/contact-img__7.jpg", "20231110023326", "Sky Beach Club, Eleuthera"),
  blog: img("/i/downloads/blog-img__39.jpg", "20231110062959", "Views from Sky Beach Club, Eleuthera"),
  miniAccom: img("/i/downloads/accomodations-mini-new__1.png", "20200605", "Oceanview accommodations at Sky Beach Club"),
  miniAmenities: img("/i/downloads/amenities-mini-fron-new2__1.png", "20200605", "Amenities at Sky Beach Club"),
  miniIsland: img("/i/downloads/amenities-mini-front-new__1.png", "20200605", "Island time in Eleuthera"),
  villaBedroom: rot("bedroom", "Villa bedroom with ocean view at Sky Beach Club"),
  villaBath: rot("bathroom", "Villa bathroom at Sky Beach Club"),
  villaKitchen: rot("kitchen", "Villa kitchen at Sky Beach Club"),
  villaLiving: rot("familyroom", "Villa living and dining area at Sky Beach Club"),
  villaLuxury: rot("luxury", "Villa interior at Sky Beach Club"),
  oceanOne: rot("ocean1", "Atlantic Ocean view from Sky Beach Club"),
  oceanTwo: rot("ocean2", "Ocean vista from Sky Beach Club"),
  villaPool: rot("pool", "Private infinity-edge plunge pool at a Sky Beach Club villa"),
  snorkel: rot("snorkelingr", "Snorkeling the reefs off Eleuthera"),
  sunset: rot("sunset", "Sunset over Eleuthera from Sky Beach Club"),
  wedding: rot("wedding", "Beachfront wedding at Sky Beach Club, Eleuthera"),
  forever: rot("forever", "A celebration on the sand at Sky Beach Club"),
};

/* Gallery (official site photo gallery + page photography) */
export type GalleryCat = "property" | "beach" | "accommodations" | "dining" | "pool" | "eleuthera" | "weddings";

export interface GalleryItem extends SBCImg {
  cat: GalleryCat;
}

export const GALLERY: GalleryItem[] = [
  { ...wow(1, "Sky Beach Club from the water"), cat: "property" },
  { ...wow(2, "Shoreline at Sky Beach"), cat: "beach" },
  { ...wow(3, "Turquoise water at Sky Beach Club"), cat: "beach" },
  { ...wow(4, "Sky Beach Club coastline"), cat: "beach" },
  { ...wow(5, "Above Sky Beach Club, Eleuthera"), cat: "property" },
  { ...wow(6, "Sky Beach Club, Eleuthera"), cat: "property" },
  { ...wow(7, "Sky Beach Club resort view"), cat: "property" },
  { ...wow(8, "Sky Beach Club oceanfront"), cat: "property" },
  { ...wow(9, "Sky Beach Club, Eleuthera, The Bahamas"), cat: "property" },
  { ...wow(10, "Sky Beach Club by the sea"), cat: "property" },
  { ...IMAGES.poolView, cat: "pool" },
  { ...IMAGES.villaPool, cat: "pool" },
  { ...IMAGES.pascals, cat: "dining" },
  { ...IMAGES.oneStory, cat: "accommodations" },
  { ...IMAGES.splitLevel, cat: "accommodations" },
  { ...IMAGES.bungalow, cat: "accommodations" },
  { ...IMAGES.villaBedroom, cat: "accommodations" },
  { ...IMAGES.villaBath, cat: "accommodations" },
  { ...IMAGES.villaKitchen, cat: "accommodations" },
  { ...IMAGES.villaLiving, cat: "accommodations" },
  { ...IMAGES.wedding, cat: "weddings" },
  { ...IMAGES.forever, cat: "weddings" },
  { ...IMAGES.snorkel, cat: "eleuthera" },
  { ...IMAGES.sunset, cat: "eleuthera" },
  { ...IMAGES.oceanOne, cat: "beach" },
  { ...IMAGES.oceanTwo, cat: "beach" },
  { ...gal(4, "Sky Beach Club photo gallery"), cat: "property" },
  { ...gal(7, "Sky Beach Club photo gallery"), cat: "property" },
  { ...gal(10, "Sky Beach Club photo gallery"), cat: "property" },
  { ...gal(14, "Sky Beach Club photo gallery"), cat: "property" },
  { ...gal(19, "Sky Beach Club photo gallery"), cat: "property" },
  { ...gal(23, "Sky Beach Club photo gallery"), cat: "property" },
  { ...gal(30, "Sky Beach Club photo gallery"), cat: "property" },
  { ...gal(35, "Sky Beach Club photo gallery"), cat: "property" },
];

/* ——— Accommodations (real categories from official site) ——— */
export interface Accommodation {
  id: string;
  index: string;
  name: string;
  short: string;
  count: string;
  size: string;
  guests: string;
  from: string;
  hero: SBCImg;
  description: string[];
  features: string[];
  gallery: SBCImg[];
  note?: string;
}

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: "one-story-villa",
    index: "01",
    name: "Luxury Oceanview Villa · One Story",
    short: "Four-bedroom residence with private infinity-edge pool",
    count: "Three residences",
    size: "3,200 sq. ft.",
    guests: "Up to 8 guests",
    from: "$560",
    hero: IMAGES.oneStory,
    description: [
      "One of the finest oceanview accommodations in the whole of the Out Islands — perfect for families, couples, or small groups.",
      "A master king-bedded suite with separate shower, dual vanities and private water closet, one additional king guest suite and two queen guest suites, each with full bath and shower. Spacious living and dining areas open to a large oceanfront veranda, pool side.",
    ],
    features: [
      "Master king suite with separate shower, dual vanities & private water closet",
      "One king-bedded and two queen-bedded guest suites, each with full bath",
      "Large patio with private infinity-edge pool (unheated)",
      "State-of-the-art kitchen, wet bar & chilled wine storage",
      "Fully equipped — fine china, glassware, silverware & utensils",
      "Custom furnishings · Hansgrohe & Duravit fixtures",
      "55\" flat-screen satellite TV · WiFi internet access",
      "Interior dining table & exterior patio dining table",
      "Laundry room with washer & dryer · iron, board & hair dryer",
    ],
    gallery: [IMAGES.oneStory, IMAGES.villaLiving, IMAGES.villaBedroom, IMAGES.villaKitchen, IMAGES.villaPool],
  },
  {
    id: "split-level-villa",
    index: "02",
    name: "Luxury Oceanview Villa · Split Level",
    short: "Split-level four-bedroom residence with ocean-view balconies",
    count: "One residence",
    size: "3,200 sq. ft.",
    guests: "Up to 8 guests",
    from: "$560",
    hero: IMAGES.splitLevel,
    description: [
      "A 3,200 sq. ft. split-level design — ideal for families with small children, as this residence does not have a pool.",
      "A master king-bedded suite with beautiful ocean views, plus two king-bedded and one queen-bedded guest suites, each with full bath and shower — two with spectacular ocean views and private ocean-view balconies.",
    ],
    features: [
      "Master king suite with ocean views, dual vanities & private water closet",
      "Two king-bedded and one queen-bedded guest suites, each with full bath",
      "Private ocean-view balconies & outdoor patio",
      "State-of-the-art kitchen, wet bar & chilled wine storage",
      "Fully equipped — fine china, glassware, silverware & utensils",
      "Custom furnishings · Hansgrohe & Duravit fixtures",
      "55\" flat-screen satellite TV · WiFi with business desk",
      "Spacious living & dining areas open to oceanfront veranda",
      "Laundry room with washer & dryer · iron, board & hair dryer",
    ],
    gallery: [IMAGES.splitLevel, IMAGES.villaLuxury, IMAGES.villaBedroom, IMAGES.villaBath, IMAGES.oceanTwo],
    note: "Ideal for families with small children — this residence does not have a pool.",
  },
  {
    id: "bungalow",
    index: "03",
    name: "Oceanfront Bungalow · Poolside",
    short: "King master guest suite beside the infinity pool",
    count: "Three bungalows",
    size: "549 sq. ft.",
    guests: "Up to 2 guests",
    from: "$235",
    hero: IMAGES.bungalow,
    description: [
      "Ideal for weddings, honeymooners, or romantic and adventure-oriented couples who enjoy the sound of the sea.",
      "One king master guest suite with ocean and pool views, a spacious private patio adjacent to the infinity pool, and a glass-enclosed rain shower — footsteps from Pascal's Restaurant, Bar and Grille.",
    ],
    features: [
      "King master guest suite with ocean & pool views",
      "Large whirlpool tub for two",
      "Glass-enclosed rain shower with separate hand-held rinser",
      "Spacious private patio with outdoor sphere love seat",
      "Individually controlled air conditioning, two systems",
      "Flat-screen satellite TV · WiFi internet · beverage center",
      "Daily coffee replenished · small lounge area",
      "Light-touch housekeeping every other day",
      "Hansgrohe & Duravit fixtures · private water closet",
    ],
    gallery: [IMAGES.bungalow, IMAGES.poolView, IMAGES.oceanOne, IMAGES.sunset],
  },
];

/* ——— Rates (official 2026–2027 seasonal table) ——— */
export interface RateRow {
  season: string;
  dates: string;
  bungalow: string;
  villa: string;
  min: number;
}

export const RATES: RateRow[] = [
  { season: "Winter", dates: "Jan 4 – Feb 13, 2026", bungalow: "$325", villa: "$750", min: 3 },
  { season: "Spring", dates: "Feb 14 – Apr 18, 2026", bungalow: "$395", villa: "$950", min: 4 },
  { season: "Early Summer", dates: "Apr 19 – May 22, 2026", bungalow: "$325", villa: "$750", min: 3 },
  { season: "Summer", dates: "May 23 – Aug 8, 2026", bungalow: "$325", villa: "$800", min: 5 },
  { season: "Late Summer", dates: "Aug 9 – Aug 29, 2026", bungalow: "$325", villa: "$750", min: 2 },
  { season: "Fall", dates: "Aug 30 – Nov 20, 2026", bungalow: "$235", villa: "$560", min: 2 },
  { season: "Thanksgiving", dates: "Nov 21 – Nov 28, 2026", bungalow: "$325", villa: "$750", min: 3 },
  { season: "December", dates: "Nov 29 – Dec 17, 2026", bungalow: "$235", villa: "$560", min: 2 },
  { season: "Holiday", dates: "Dec 18, 2026 – Jan 3, 2027", bungalow: "$425", villa: "$1,460", min: 7 },
  { season: "Winter", dates: "Jan 4 – Feb 12, 2027", bungalow: "$325", villa: "$750", min: 3 },
  { season: "Spring", dates: "Feb 13 – Apr 17, 2027", bungalow: "$395", villa: "$950", min: 4 },
];

export const RATE_NOTES = [
  "Check-in 4 p.m. · Check-out 10:00 a.m. (please call in advance for check-in after 9 p.m.)",
  "Bungalow rates are for up to 2 guests — add $50/night for a third guest.",
  "Four-bedroom rates are for up to 8 guests — add $50/night per additional guest, up to 10.",
  "Rollaway beds available for a $25/night service charge.",
  "Pack-n-plays available upon request.",
  "Rates are subject to change until reservations are made.",
];

/* ——— Amenities (verified on official site) ——— */
export const AMENITIES = [
  {
    title: "Secluded Pink-Sand Beach",
    text: "Sky Beach is a magnificent pink-sand beach that stretches for more than a mile, with beautiful reefs offshore providing ideal snorkeling.",
  },
  {
    title: "Infinity-Edge Beachfront Pool",
    text: "Relax in the infinity-edge beachfront pool and swim up for a cocktail as the Atlantic rolls in beyond the deck.",
  },
  {
    title: "Swim-Up Cocktail Bar",
    text: "After a day of watersports or lounging on the beach, have our famous bartender fix that perfect cocktail or tropical drink.",
  },
  {
    title: "Pascal's Oceanfront Restaurant",
    text: "One of the island's most popular venues — contemporary dining in Pascal's Oceanfront Restaurant and Bar.",
  },
  {
    title: "Free WiFi",
    text: "Complimentary WiFi in all accommodations, around the pool, and in the restaurant and bar areas.",
  },
  {
    title: "Satellite TV",
    text: "Every accommodation includes flat-screen satellite television, custom furnishings and inspiring ocean views.",
  },
];

/* ——— Pascal's hours (from official Pascal's page) ——— */
export const PASCALS_HOURS = [
  { day: "Sunday", hours: "12 – 7 p.m.", note: "Pool Party & BBQ with live music" },
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "12 – 9 p.m." },
  { day: "Wednesday", hours: "12 – 7 p.m." },
  { day: "Thursday", hours: "12 – 9 p.m." },
  { day: "Friday", hours: "12 – 7 p.m." },
  { day: "Saturday", hours: "12 – 9 p.m." },
];

/* ——— Island experiences (Eleuthera / adventure pages) ——— */
export const EXPERIENCES = [
  {
    title: "Pink-Sand Beaches",
    text: "Seventy miles of beaches and a few dozen hotel rooms — regular visitors are surprised to find anyone on their favorite beach.",
  },
  {
    title: "Diving & Snorkeling",
    text: "The Devil's Backbone, the Current Cut — rated one of the ten best dives in the world — and reefs home to everything from butterfly fish to dolphins and rays.",
  },
  {
    title: "Fishing & Boating",
    text: "Eleuthera is famous for bonefishing and deep-sea fishing; reef fishing and spear-fishing are popular, with sailing, kayaking and boat rentals along the calm Caribbean side.",
  },
  {
    title: "Island Sightseeing",
    text: "The Glass Window Bridge, Hatchet Bay Cave, Preacher's Cave, the Queen's Baths and the Rock Sound Ocean Hole — all in their pristine state.",
  },
  {
    title: "Horseback Riding",
    text: "Beach and lake trail rides leave from Oceanview Farm on the Banks Road, south of Tippy's, Monday through Saturday.",
  },
  {
    title: "Villages & Harbour Island",
    text: "Gregory Town's Pineapple Festival, Governor's Harbour's Friday night fish fry, and Harbour Island — a five-minute water-taxi ride away.",
  },
];

/* ——— Getting here (official travel info) ——— */
export const AIRLINES = [
  {
    region: "From Nassau",
    rows: [
      "BahamasAir · 800-222-4262 — daily flights to Governor's Harbour",
      "Pineapple Air · 242-377-0140 — multiple daily flights",
      "Southern Air · 242-377-2014 — multiple daily flights",
    ],
  },
  {
    region: "From Florida",
    rows: [
      "Aztec Airways · 1-844-359-2982 — Ft. Lauderdale to Governor's Harbour",
      "American Airlines · 800-433-7300 — Miami to North Eleuthera",
    ],
  },
  {
    region: "Non-stop to North Eleuthera (ELH)",
    rows: [
      "Delta Airlines from Atlanta — twice weekly, Saturday & Wednesday",
      "American Airlines from Charlotte — twice weekly, Saturday & Wednesday",
    ],
  },
];

/* ——— Testimonials (verbatim from official site posts) ——— */
export const TESTIMONIALS = [
  {
    quote:
      "We walked the beach for miles in either direction, with our footprints being the only prints in the sand. We were treated as family. Chavala, Hubert, Eugene, Selena, Alexis, Theo and all the others… were all so friendly, inviting, caring, and happy.",
    source: "Message from a Guest",
    detail: "Sky Beach Club journal · February 2012",
  },
  {
    quote:
      "It is a gorgeous resort, with scenic views that are postcard perfect. I have stayed in the villas and they are immaculate… a small private pool and patio overlooking the ocean — perfect.",
    source: "Best Resort on Eleuthera",
    detail: "Sky Beach Club journal · July 2011",
  },
  {
    quote:
      "When my husband proposed to me, Sky Beach Club was the first place we both thought of as a perfect reception site for our wedding. We reserved the whole resort… it was the perfect wedding because it was at Sky Beach Club.",
    source: "Best Resort on Eleuthera",
    detail: "Sky Beach Club journal · July 2011",
  },
  {
    quote:
      "The food was delicious. You could taste the freshness and the passion put into the preparation… Eleuthera is a beautiful island that thrives off its secluded environs. This is definitely the jackpot.",
    source: "Message from a Guest",
    detail: "Sky Beach Club journal · February 2012",
  },
];

/* ——— Journal (real blog posts, skybeachclub.com/blog/) ——— */
export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: SBCImg;
}

export const POSTS: Post[] = [
  {
    slug: "https://skybeachclub.com/things-to-do-on-eleuthera/",
    title: "Things to Do on Eleuthera",
    date: "February 18, 2013",
    excerpt:
      "With seventy miles of beaches, coral reefs, the Glass Window Bridge and the Friday night fish fry in Governor's Harbour — an island guide from the Club.",
    image: IMAGES.oceanOne,
  },
  {
    slug: "https://skybeachclub.com/couple-from-london-win-a-dream-wedding-at-sky-beach-club/",
    title: "Couple from London Win a Dream Wedding at Sky Beach Club",
    date: "May 2012",
    excerpt:
      "The Bahamas 16 Islands Wedding Invitation: Jill & Phillip of London won their dream beach wedding — the 'Barefoot Lovers' Bliss' package on Eleuthera.",
    image: IMAGES.wedding,
  },
  {
    slug: "https://skybeachclub.com/message-from-a-guest/",
    title: "Message from a Guest",
    date: "February 5, 2012",
    excerpt:
      "We were fortunate enough to be at Sky Beach during a full moon. It was a clear night, live band playing by the pool, perfect weather — it was magical.",
    image: IMAGES.sunset,
  },
  {
    slug: "https://skybeachclub.com/discovering-eleuthera-bahamas/",
    title: "Discovering Eleuthera, Bahamas",
    date: "July 11, 2011",
    excerpt:
      "110 miles long with a population of just 8,000 — rolling green hills, sleepy villages and not a single traffic light. By Matthew Simon.",
    image: IMAGES.snorkel,
  },
  {
    slug: "https://skybeachclub.com/think-pink-pink-beaches-and-picturestic-sunsets/",
    title: "Think Pink… Pink Beaches and Picturesque Sunsets",
    date: "December 31, 2009",
    excerpt:
      "Discover Eleuthera's most secluded resort — 22 acres with views of the Atlantic on one side and the Caribbean on the other.",
    image: IMAGES.beach,
  },
  {
    slug: "https://skybeachclub.com/sky-beach-club-appears-in-the-schramsberg-winery-newsletter/",
    title: "Sky Beach Club in the Schramsberg Winery Newsletter",
    date: "November 19, 2011",
    excerpt:
      "A party of wine aficionados stayed at Sky Beach Club and reported their adventures in the Schramsberg Riddler's Circle Club newsletter.",
    image: IMAGES.pascals,
  },
];

/* ——— FAQ (from official policies) ——— */
export const FAQS = [
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is at 4 p.m. and check-out is at 10:00 a.m. Please call in advance if you expect to arrive after 9 p.m.",
  },
  {
    q: "How do I get to Sky Beach Club?",
    a: "Sky Beach Club is about seven minutes south of Governor's Harbour Airport (GHB) — approximately a 25-minute flight from Nassau or 45 minutes from Ft. Lauderdale. Taxis meet arriving flights at GHB (about $20), and car rentals are available. North Eleuthera Airport (ELH) is another option for schedule flexibility.",
  },
  {
    q: "How many guests can each accommodation sleep?",
    a: "Bungalow rates cover up to 2 guests (a third guest may be added at $50/night). Four-bedroom villa rates cover up to 8 guests, with up to 2 additional guests at $50/night each, to a maximum of 10. Rollaway beds are available for $25/night and pack-n-plays upon request.",
  },
  {
    q: "Is there WiFi at the resort?",
    a: "Yes — complimentary WiFi is available in all accommodations, around the pool, and in the restaurant and bar areas. Satellite TV is also provided.",
  },
  {
    q: "Can I host my wedding at Sky Beach Club?",
    a: "Sky Beach Club hosts more beach weddings than any Out Island resort of its size, with ceremony settings from the secluded pink-sand beach to the oceanfront poolside. Call the office at 242-820-5996 to begin planning.",
  },
  {
    q: "What should I know about driving on the property?",
    a: "The driveways at Sky Beach Club are unpaved and rough, so the Club recommends renting a Jeep-type vehicle. Please also note that traffic in The Bahamas flows on the left side of the road.",
  },
];
