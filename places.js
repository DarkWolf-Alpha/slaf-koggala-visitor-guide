/* Base point for distance: Koggala Air Force Base (approx.) 5.9932, 80.3214 */
const BASE = { name: "SLAF Station Koggala", lat: 5.9932, lng: 80.3214 };

const PLACES = [
  // ---------------- KOGGALA ----------------
  {
    area: "Koggala",
    title: "Koggala Lake (Lagoon) Boat Safari",
    lat: 5.9915, lng: 80.3255, // approx town center
    maps: "https://www.google.com/maps/search/?api=1&query=Koggala%20Lake",
    desc: "A calm lagoon experience with mangrove islands and birdlife. A boat trip is one of the easiest half-day activities near the station.",
    things: ["Boat ride through the lagoon", "See mangrove islands", "Birdwatching and photography"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Koggala_Lagoon.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Koggala%20Lagoon%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Koggala%20Lake%20Sri%20Lanka.jpg?width=1400"
    ],
    credit: "Photos: Wikimedia Commons (search: Koggala Lagoon)."
  },
  {
    area: "Koggala",
    title: "Martin Wickramasinghe Folk Museum",
    lat: 5.9940, lng: 80.3195, // near Koggala/Habaraduwa belt (approx)
    maps: "https://www.google.com/maps/search/?api=1&query=Martin%20Wickramasinghe%20Folk%20Museum%20Koggala",
    desc: "A museum complex connected to renowned Sri Lankan author Martin Wickramasinghe, showcasing folk life and cultural artefacts.",
    things: ["Walk through the folk museum", "See traditional artefacts", "Quiet cultural visit"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Martin%20Wickramasinghe%20Folk%20Museum%20Complex.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Wickramasinghe%20House%20Koggala.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Martin%20Wickramasinghe%20Museum%20Koggala.jpg?width=1400"
    ],
    credit: "Museum is in Koggala. :contentReference[oaicite:2]{index=2}"
  },
  {
    area: "Koggala",
    title: "Handunugoda Tea Estate (Virgin White Tea)",
    lat: 5.9700, lng: 80.3700, // approx Ahangama/Tittagalla belt
    maps: "https://www.google.com/maps/search/?api=1&query=Handunugoda%20Tea%20Estate",
    desc: "A coastal-belt tea estate known for specialty teas and a short factory-style tour experience.",
    things: ["Estate walk and factory tour", "Tea tasting", "Buy packaged tea gifts"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tea%20plantation%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tea%20factory%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tea%20leaves%20Sri%20Lanka.jpg?width=1400"
    ],
    credit: "About the estate/tea. :contentReference[oaicite:3]{index=3}"
  },
  {
    area: "Koggala",
    title: "Koggala Beach (Easy Sunset Walk)",
    lat: 5.9886, lng: 80.3286,
    maps: "https://www.google.com/maps/search/?api=1&query=Koggala%20Beach",
    desc: "A relaxed beach for walking and sunset views. Keep an eye on sea conditions before entering the water.",
    things: ["Sunset walk", "Photography", "Relax by the shore"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Koggala%20Beach.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20in%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sunset%20Sri%20Lanka%20beach.jpg?width=1400"
    ],
    credit: "Koggala coordinate reference (town). :contentReference[oaicite:4]{index=4}"
  },

  // ---------------- GALLE ----------------
  {
    area: "Galle",
    title: "Galle Fort (Ramparts Walk)",
    lat: 6.028624, lng: 80.216797,
    maps: "https://www.google.com/maps/search/?api=1&query=Galle%20Fort",
    desc: "A historic fort area ideal for an evening walk on the ramparts, cafes, small shops, and ocean views.",
    things: ["Walk the ramparts", "Cafes and boutiques", "Sunset photography"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Galle%20Fort%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Galle%20Fort%20Ramparts.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Galle%20Fort%20aerial%20view.jpg?width=1400"
    ],
    credit: "Fort background. :contentReference[oaicite:5]{index=5}"
  },
  {
    area: "Galle",
    title: "Unawatuna Beach",
    lat: 6.0212, lng: 80.2503,
    maps: "https://www.google.com/maps/search/?api=1&query=Unawatuna%20Beach",
    desc: "A popular beach town close to Galle, known for swimming areas and beachside dining.",
    things: ["Beach time and swimming (conditions apply)", "Beach restaurants", "Short scenic trip"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Unawatuna%20Beach.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Unawatuna%20Sri%20Lanka%20beach.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Unawatuna%20coastline.jpg?width=1400"
    ],
    credit: "Unawatuna coordinates reference. :contentReference[oaicite:6]{index=6}"
  },
  {
    area: "Galle",
    title: "Japanese Peace Pagoda (Rumassala)",
    lat: 6.0158032, lng: 80.2378171,
    maps: "https://www.google.com/maps/search/?api=1&query=Japanese%20Peace%20Pagoda%20Rumassala",
    desc: "A peaceful viewpoint and landmark on Rumassala Hill with panoramic sea views.",
    things: ["Viewpoint photos", "Quiet visit", "Short drive + walk"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese%20Peace%20Pagoda%20Unawatuna.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Peace%20Pagoda%20Rumassala.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Unawatuna%20pagoda%20Sri%20Lanka.jpg?width=1400"
    ],
    credit: "Pagoda coordinates reference. :contentReference[oaicite:7]{index=7}"
  },
  {
    area: "Galle",
    title: "Jungle Beach (Unawatuna)",
    lat: 6.0155, lng: 80.2444,
    maps: "https://www.google.com/maps/search/?api=1&query=Jungle%20Beach%20Unawatuna",
    desc: "A smaller beach tucked behind Rumassala—great for a short escape and photos. Check access path and sea state.",
    things: ["Short hike to the beach", "Swimming/snorkeling (conditions apply)", "Photography"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jungle%20Beach%20in%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Unawatuna%20coast%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20cove%20Sri%20Lanka.jpg?width=1400"
    ],
    credit: "Jungle Beach photo on Commons. :contentReference[oaicite:8]{index=8}"
  },

  // ---------------- MATARA ----------------
  {
    area: "Matara",
    title: "Mirissa Beach",
    lat: 5.94655, lng: 80.45831,
    maps: "https://www.google.com/maps/search/?api=1&query=Mirissa%20Beach",
    desc: "A lively beach area known for ocean views and a relaxed vibe—good for an evening trip.",
    things: ["Beach walk", "Sunset viewing", "Restaurants nearby"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mirissa%20Beach%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mirissa%20coastline.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Southern%20coast%20Sri%20Lanka.jpg?width=1400"
    ],
    credit: "Mirissa coordinates reference. :contentReference[oaicite:9]{index=9}"
  },
  {
    area: "Matara",
    title: "Coconut Tree Hill (Mirissa Viewpoint)",
    lat: 5.9468, lng: 80.4660, // close to Mirissa bay (approx)
    maps: "https://www.google.com/maps/search/?api=1&query=Coconut%20Tree%20Hill%20Mirissa",
    desc: "A famous viewpoint for sunrise/sunset photos above Mirissa’s coastline.",
    things: ["Sunrise/sunset photos", "Short walk", "Panoramic ocean view"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Coconut%20Tree%20Hill,%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mirissa%20red%20cliffs.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mirissa%20headland%20Sri%20Lanka.jpg?width=1400"
    ],
    credit: "About Coconut Tree Hill (Mirissa). :contentReference[oaicite:10]{index=10}"
  },
  {
    area: "Matara",
    title: "Weligama Bay (Surf-Friendly Beach Town)",
    lat: 5.97501, lng: 80.42968,
    maps: "https://www.google.com/maps/search/?api=1&query=Weligama%20Bay",
    desc: "A well-known bay for beginner-friendly surfing areas and long sandy shoreline.",
    things: ["Surf lessons (beginner-friendly areas)", "Beach walk", "Cafes & local shops"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Weligama%20Beach%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Surfing%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Southern%20Sri%20Lanka%20beach.jpg?width=1400"
    ],
    credit: "Weligama coordinates reference. :contentReference[oaicite:11]{index=11}"
  },
  {
    area: "Matara",
    title: "Hiriketiya Beach (Dickwella Bay)",
    lat: 5.9624, lng: 80.7068,
    maps: "https://www.google.com/maps/search/?api=1&query=Hiriketiya%20Beach",
    desc: "A small crescent-shaped bay popular for swimming and surf culture, with a relaxed atmosphere.",
    things: ["Swim in the bay (conditions apply)", "Surfing", "Food spots nearby"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hiriketiya%20Beach%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Dickwella%20coast%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20bay%20Sri%20Lanka.jpg?width=1400"
    ],
    credit: "Hiriketiya coordinates reference. :contentReference[oaicite:12]{index=12}"
  },
  {
    area: "Matara",
    title: "Dondra Head (Southern Tip) Lighthouse Area",
    lat: 5.916666, lng: 80.583333,
    maps: "https://www.google.com/maps/search/?api=1&query=Dondra%20Head%20Lighthouse",
    desc: "The southernmost cape area near Matara. A scenic coastal drive with landmark lighthouse zone.",
    things: ["Coastal drive", "Landmark photos", "Short local exploration"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Dondra%20Head%20Lighthouse.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Southernmost%20point%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Matara%20coastline.jpg?width=1400"
    ],
    credit: "Dondra Head coordinates reference. :contentReference[oaicite:13]{index=13}"
  },
  {
    area: "Matara",
    title: "Paravi Duwa Temple (Matara) – Golden Island Pathway",
    lat: 5.94155, lng: 80.54917,
    maps: "https://www.google.com/maps/search/?api=1&query=Paravi%20Duwa%20Temple%20Matara",
    desc: "A coastal temple area reached by a short walkway—popular for calm visits and sea views.",
    things: ["Temple visit", "Sea view photos", "Short city stop"],
    photos: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Matara%20Sri%20Lanka%20coast.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Temple%20Sri%20Lanka.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Matara%20beachfront.jpg?width=1400"
    ],
    credit: "Paravi Duwa coordinate reference. :contentReference[oaicite:14]{index=14}"
  }
];
