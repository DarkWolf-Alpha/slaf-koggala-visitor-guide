// Base coordinate used for distance calculation (approx. SLAF Koggala / Koggala AFB area)
const BASE = { name: "SLAF Station Koggala", lat: 5.9932, lng: 80.3214 };

// Helper to build reliable photo URLs (always returns a valid image)
// Uses Unsplash Source (no API key required).
function U(w, h, keywords) {
  const k = encodeURIComponent(keywords);
  return `https://source.unsplash.com/${w}x${h}/?${k}`;
}

const PLACES = [
  // ===================== KOGGALA =====================
  {
    area: "Koggala",
    title: "Martin Wickramasinghe Folk Museum",
    lat: 5.9937, lng: 80.3199,
    maps: "https://www.google.com/maps/search/?api=1&query=Martin%20Wickramasinghe%20Folk%20Museum%20Koggala",
    hours: "Daily 09:00 – 17:00",
    ticket: "Sri Lankan adult: LKR 100 | Foreign adult: LKR 1,000",
    phone: "+94 91 228 3427 / +94 91 228 3428",
    desc: "A cultural museum complex showcasing Sri Lankan folk life and the legacy of author Martin Wickramasinghe.",
    things: ["Folk artefacts & rural technology exhibits", "Walk through the ancestral home area", "Ideal 1–2 hour cultural visit"],
    photos: [
      U(1200, 900, "museum,sri lanka,culture"),
      U(1200, 900, "traditional,artifacts,museum"),
      U(1200, 900, "sri lanka,heritage,museum"),
      U(1200, 900, "galle,matara road,koggala"),
      U(1200, 900, "architecture,colonial,sri lanka")
    ],
    credit: "Museum fees/hours/phone per official Martin Wickramasinghe Trust."
  },
  {
    area: "Koggala",
    title: "Koggala Lake (Lagoon) Boat Safari – Air Force Boat Service",
    // Set map location to Airforce boat yard (sea plane dock) using a Maps search query:
    lat: 5.9925, lng: 80.3235,
    maps: "https://www.google.com/maps/search/?api=1&query=Koggala%20seaplane%20dock%20boat%20yard",
    hours: "By arrangement (confirm by phone)",
    ticket: "By arrangement (confirm by phone)",
    phone: "0912283228",
    desc: "A calm lagoon safari experience near the station. Boat trips are arranged via Air Force boat service (Sea Plane Dock/Boat Yard area).",
    things: ["Lagoon boat ride", "Mangrove scenery & birdlife", "Photography-friendly calm water"],
    photos: [
      U(1200, 900, "koggala lake,sri lanka,lagoon"),
      U(1200, 900, "lagoon,boat,sri lanka"),
      U(1200, 900, "mangroves,lagoon,sri lanka"),
      U(1200, 900, "birdwatching,lagoon,sri lanka"),
      U(1200, 900, "lake,sunset,sri lanka")
    ],
    credit: "Contact number provided by SLAF Station guidance."
  },
  {
    area: "Koggala",
    title: "Koggala Beach (Easy Sunset Walk)",
    lat: 5.9886, lng: 80.3286,
    maps: "https://www.google.com/maps/search/?api=1&query=Koggala%20Beach",
    hours: "Open 24 hours (public beach)",
    ticket: "Free",
    phone: "N/A",
    desc: "A relaxed coastline for walking and sunset views. Check sea conditions before entering the water.",
    things: ["Sunset walk", "Photos & relaxation", "Short trip close to station"],
    photos: [
      U(1200, 900, "koggala beach,sri lanka"),
      U(1200, 900, "sri lanka,beach,sunset"),
      U(1200, 900, "tropical beach,sri lanka"),
      U(1200, 900, "ocean,waves,sri lanka"),
      U(1200, 900, "palm trees,beach,sri lanka")
    ],
    credit: "Public beach (no fixed ticket desk/phone line)."
  },
  {
    area: "Koggala",
    title: "Koggala Sea Turtle Hatchery / Conservation (Koggala Sea Turtle Farm)",
    lat: 5.9948, lng: 80.3145,
    maps: "https://www.google.com/maps/search/?api=1&query=Koggala%20Sea%20Turtle%20Farm",
    hours: "Daily 08:30 – 18:00 (confirm by phone)",
    ticket: "Commonly reported: ~LKR 1,500 per adult (confirm on arrival)",
    phone: "+94 77 311 1365",
    desc: "A conservation facility where visitors can learn about sea turtles and ongoing protection efforts.",
    things: ["See turtles at different life stages", "Learn about conservation and releases", "Family-friendly educational stop"],
    photos: [
      U(1200, 900, "sea turtle,hatchery,sri lanka"),
      U(1200, 900, "baby turtles,conservation"),
      U(1200, 900, "turtle,rehabilitation,center"),
      U(1200, 900, "sea turtle,sri lanka,coast"),
      U(1200, 900, "turtle,hatchlings,sri lanka")
    ],
    credit: "Contact from Koggala Sea Turtle Farm website; hours/fee vary—confirm at entry."
  },

  // ===================== GALLE =====================
  {
    area: "Galle",
    title: "Galle Fort (Ramparts Walk)",
    lat: 6.0286, lng: 80.2168,
    maps: "https://www.google.com/maps/search/?api=1&query=Galle%20Fort",
    hours: "Open 24 hours (Fort area; shops/museums have own hours)",
    ticket: "Free (Fort area walk)",
    phone: "N/A",
    desc: "A UNESCO-listed historic fort with ramparts, ocean views, cafes, and iconic streets for an evening walk.",
    things: ["Walk the ramparts", "Sunset photos", "Cafes and boutique shopping"],
    photos: [
      U(1200, 900, "galle fort,sri lanka"),
      U(1200, 900, "galle fort,ramparts"),
      U(1200, 900, "galle fort,lighthouse"),
      U(1200, 900, "colonial streets,galle fort"),
      U(1200, 900, "heritage,fort,sri lanka")
    ],
    credit: "Fort public area is open access; individual sites inside have separate fees."
  },
  {
    area: "Galle",
    title: "Galle Maritime Museum (National Maritime / Maritime Archaeology Museum)",
    lat: 6.0268, lng: 80.2160,
    maps: "https://www.google.com/maps/search/?api=1&query=Maritime%20Archeology%20Museum%20Galle",
    hours: "09:00 – 17:00",
    ticket: "Ticket (reported): LKR 300",
    phone: "+94 91 224 2261",
    desc: "A museum inside Galle Fort focusing on Sri Lanka’s maritime archaeology and seafaring heritage.",
    things: ["Maritime artefacts and exhibits", "Short educational visit", "Good add-on while touring the Fort"],
    photos: [
      U(1200, 900, "maritime museum,galle"),
      U(1200, 900, "museum,exhibits,maritime"),
      U(1200, 900, "galle fort,museum"),
      U(1200, 900, "ship artifacts,museum"),
      U(1200, 900, "heritage museum,sri lanka")
    ],
    credit: "Hours/phone/ticket are commonly listed—confirm at entry if needed."
  },
  {
    area: "Galle",
    title: "Dutch Reformed Church (Groote Kerk) – Galle Fort",
    lat: 6.0269, lng: 80.2171,
    maps: "https://www.google.com/maps/search/?api=1&query=Dutch%20Reformed%20Church%20Galle%20Fort",
    hours: "09:00 – 17:00 (may close during services)",
    ticket: "Free (donations welcomed)",
    phone: "N/A",
    desc: "One of the oldest Protestant churches still in use in Sri Lanka, located inside Galle Fort.",
    things: ["Historic interior and inscriptions", "Architecture & photo stop", "Quiet respectful visit"],
    photos: [
      U(1200, 900, "dutch reformed church,galle"),
      U(1200, 900, "church,colonial,sri lanka"),
      U(1200, 900, "galle fort,church"),
      U(1200, 900, "historic church,interior"),
      U(1200, 900, "architecture,church,galle")
    ],
    credit: "Public phone number not reliably published; best to visit during open hours."
  },
  {
    area: "Galle",
    title: "Japanese Peace Pagoda (Rumassala)",
    lat: 6.0158, lng: 80.2378,
    maps: "https://www.google.com/maps/search/?api=1&query=Japanese%20Peace%20Pagoda%20Rumassala",
    hours: "07:00 – 21:00",
    ticket: "Free",
    phone: "N/A",
    desc: "A peaceful white pagoda on Rumassala Hill with panoramic sea views toward Galle Fort.",
    things: ["Viewpoint photos", "Quiet visit", "Good for late afternoon/sunset"],
    photos: [
      U(1200, 900, "peace pagoda,rumassala"),
      U(1200, 900, "white pagoda,sri lanka"),
      U(1200, 900, "viewpoint,unawatuna,galle"),
      U(1200, 900, "buddhist,pagoda,sri lanka"),
      U(1200, 900, "sea view,pagoda")
    ],
    credit: "Temple-style site; no fixed ticket counter."
  },
  {
    area: "Galle",
    title: "Jungle Beach (Unawatuna/Rumassala)",
    lat: 6.0155, lng: 80.2444,
    maps: "https://www.google.com/maps/search/?api=1&query=Jungle%20Beach%20Unawatuna",
    hours: "Open 24 hours (public beach access)",
    ticket: "Free",
    phone: "+94 71 439 1628",
    desc: "A smaller cove-style beach near Rumassala. Great for a quieter beach stop and photos.",
    things: ["Short hike to the cove", "Swimming/snorkeling (conditions apply)", "Relax away from crowds"],
    photos: [
      U(1200, 900, "jungle beach,unawatuna"),
      U(1200, 900, "hidden beach,sri lanka"),
      U(1200, 900, "cove beach,sri lanka"),
      U(1200, 900, "snorkeling beach,sri lanka"),
      U(1200, 900, "tropical cove,beach")
    ],
    credit: "Public beach; phone is commonly listed for Jungle Beach queries (may not be official)."
  },
  {
    area: "Galle",
    title: "Sinharaja Forest Reserve",
    lat: 6.4050, lng: 80.4590,
    maps: "https://www.google.com/maps/search/?api=1&query=Sinharaja%20Forest%20Reserve",
    hours: "06:30 – 18:00",
    ticket: "Ticket (reported): LKR 664 (confirm at entrance)",
    phone: "+94 11 242 6900",
    desc: "UNESCO rainforest reserve famous for biodiversity. A longer day trip; guide arrangements are recommended.",
    things: ["Guided rainforest walk", "Birdwatching", "Nature photography"],
    photos: [
      U(1200, 900, "sinharaja forest,sri lanka"),
      U(1200, 900, "rainforest,sri lanka"),
      U(1200, 900, "jungle trail,sri lanka"),
      U(1200, 900, "tropical rainforest,waterfall"),
      U(1200, 900, "endemic birds,sri lanka")
    ],
    credit: "Reserve fees/policies can change—confirm at the gate before entry."
  },

  // ===================== MATARA =====================
  {
    area: "Matara",
    title: "Weligama Bay (Surf-Friendly Beach Town)",
    lat: 5.9750, lng: 80.4297,
    maps: "https://www.google.com/maps/search/?api=1&query=Weligama%20Bay",
    hours: "Open 24 hours (public beach)",
    ticket: "Free",
    phone: "N/A",
    desc: "A long sandy bay popular for beginner surfing zones and beachside cafés.",
    things: ["Surf lessons (operators on site)", "Beach walk", "Dining & cafes"],
    photos: [
      U(1200, 900, "weligama bay,sri lanka"),
      U(1200, 900, "surf,weligama,sri lanka"),
      U(1200, 900, "surfboard,beach,sri lanka"),
      U(1200, 900, "beach town,sri lanka"),
      U(1200, 900, "waves,surfing,sri lanka")
    ],
    credit: "Public beach; surf schools operate independently."
  },
  {
    area: "Matara",
    title: "Mirissa Beach",
    lat: 5.9466, lng: 80.4583,
    maps: "https://www.google.com/maps/search/?api=1&query=Mirissa%20Beach",
    hours: "Open 24 hours (public beach)",
    ticket: "Free",
    phone: "N/A",
    desc: "A popular beach town for relaxing, sunsets, and dining.",
    things: ["Sunset viewing", "Beach walk", "Restaurants nearby"],
    photos: [
      U(1200, 900, "mirissa beach,sri lanka"),
      U(1200, 900, "mirissa,sunset,sri lanka"),
      U(1200, 900, "tropical beach,mirissa"),
      U(1200, 900, "palm trees,mirissa"),
      U(1200, 900, "southern coast,sri lanka,beach")
    ],
    credit: "Public beach."
  },
  {
    area: "Matara",
    title: "Coconut Tree Hill (Mirissa Viewpoint)",
    lat: 5.9468, lng: 80.4660,
    maps: "https://www.google.com/maps/search/?api=1&query=Coconut%20Tree%20Hill%20Mirissa",
    hours: "Open 24 hours (outdoor viewpoint)",
    ticket: "Free",
    phone: "N/A",
    desc: "A famous viewpoint above Mirissa with iconic palm-tree skyline photos.",
    things: ["Sunrise/sunset photos", "Short walk", "Panoramic views"],
    photos: [
      U(1200, 900, "coconut tree hill,mirissa"),
      U(1200, 900, "palm hill,sri lanka,viewpoint"),
      U(1200, 900, "cliff viewpoint,sri lanka"),
      U(1200, 900, "coast viewpoint,mirissa"),
      U(1200, 900, "ocean view,palm trees")
    ],
    credit: "Outdoor viewpoint."
  },
  {
    area: "Matara",
    title: "Paravi Duwa Temple (Matara) – Golden Island Pathway",
    lat: 5.9416, lng: 80.5492,
    maps: "https://www.google.com/maps/search/?api=1&query=Paravi%20Duwa%20Temple%20Matara",
    hours: "Typically daytime (recommend 07:00 – 18:00)",
    ticket: "Free (donations welcomed)",
    phone: "N/A",
    desc: "A coastal temple reached by a short walkway—nice calm stop with sea views.",
    things: ["Temple visit", "Sea-view photos", "Short city stop"],
    photos: [
      U(1200, 900, "temple,matara,sri lanka"),
      U(1200, 900, "coastal temple,sri lanka"),
      U(1200, 900, "buddhist temple,sri lanka,sea"),
      U(1200, 900, "matara,coast,sri lanka"),
      U(1200, 900, "temple walkway,sri lanka")
    ],
    credit: "Temple etiquette applies."
  },
  {
    area: "Matara",
    title: "Dondra Head Lighthouse Area (Southern Tip)",
    lat: 5.9167, lng: 80.5833,
    maps: "https://www.google.com/maps/search/?api=1&query=Dondra%20Head%20Lighthouse",
    hours: "Outdoor area: daylight recommended",
    ticket: "Varies by access/zone (confirm locally)",
    phone: "N/A",
    desc: "A scenic coastal landmark area near Matara with lighthouse surroundings and coastal views.",
    things: ["Landmark photos", "Coastal drive", "Explore nearby viewpoints"],
    photos: [
      U(1200, 900, "dondra lighthouse,sri lanka"),
      U(1200, 900, "lighthouse,sri lanka,coast"),
      U(1200, 900, "southern tip,sri lanka"),
      U(1200, 900, "coastal landmark,sri lanka"),
      U(1200, 900, "ocean lighthouse,view")
    ],
    credit: "Access rules can vary; confirm on arrival."
  },
  {
    area: "Matara",
    title: "Hiriketiya Beach (Dickwella Bay)",
    lat: 5.9624, lng: 80.7068,
    maps: "https://www.google.com/maps/search/?api=1&query=Hiriketiya%20Beach",
    hours: "Open 24 hours (public beach)",
    ticket: "Free",
    phone: "N/A",
    desc: "A small crescent-shaped bay popular for swimming and surf culture.",
    things: ["Swimming (conditions apply)", "Surfing", "Food spots nearby"],
    photos: [
      U(1200, 900, "hiriketiya beach,sri lanka"),
      U(1200, 900, "dickwella bay,sri lanka"),
      U(1200, 900, "surf bay,sri lanka"),
      U(1200, 900, "cove beach,sri lanka"),
      U(1200, 900, "tropical bay,beach")
    ],
    credit: "Public beach."
  },
  {
    area: "Matara",
    title: "Mirissa Whale Watching (Book with Operator)",
    lat: 5.9469, lng: 80.4560,
    maps: "https://www.google.com/maps/search/?api=1&query=Mirissa%20Whale%20Watching",
    hours: "Morning departures (confirm by operator)",
    ticket: "Varies by operator/season (confirm by phone)",
    phone: "+94 77 637 6714 | +94 71 333 1811",
    desc: "Whale & dolphin watching trips are typically arranged via private operators departing from Mirissa.",
    things: ["Book in advance (weather dependent)", "Early start recommended", "Follow operator safety guidance"],
    photos: [
      U(1200, 900, "whale watching,mirissa"),
      U(1200, 900, "whale,sri lanka,ocean"),
      U(1200, 900, "boat trip,mirissa"),
      U(1200, 900, "dolphins,ocean,sri lanka"),
      U(1200, 900, "sea safari,sri lanka")
    ],
    credit: "Operator contact numbers are published on their websites; prices vary."
  },
  {
    area: "Matara",
    title: "Star Fort Matara",
    lat: 5.9480, lng: 80.5417,
    maps: "https://www.google.com/maps/search/?api=1&query=Star%20Fort%20Matara",
    hours: "09:00 – 16:00",
    ticket: "Free",
    phone: "N/A",
    desc: "A small Dutch-era star-shaped fort in Matara—quick historical stop with photo opportunities.",
    things: ["Walk the fort area", "Short museum-style visit (if open)", "Great for history photos"],
    photos: [
      U(1200, 900, "star fort,matara"),
      U(1200, 900, "dutch fort,sri lanka"),
      U(1200, 900, "historic fort,matara"),
      U(1200, 900, "colonial fort,sri lanka"),
      U(1200, 900, "heritage site,matara")
    ],
    credit: "Listed hours/free entry—confirm on arrival."
  }
];
