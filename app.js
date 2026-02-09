// ---------------- Helpers ----------------
function toRad(deg) { return (deg * Math.PI) / 180; }

// Haversine distance (km)
function distanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function fmtKm(km) {
  if (!isFinite(km)) return "—";
  return km < 10 ? `${km.toFixed(1)} km` : `${km.toFixed(0)} km`;
}

// ---------------- UI State ----------------
let currentArea = null;
let filtered = [];
let modalPhotoIndex = 0;
let modalPlace = null;

// ---------------- Elements ----------------
const areaSelector = document.getElementById("areaSelector");
const toolbar = document.getElementById("toolbar");
const currentAreaEl = document.getElementById("currentArea");
const backBtn = document.getElementById("backBtn");
const cardsGrid = document.getElementById("cardsGrid");
const searchInput = document.getElementById("searchInput");

// Modal
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalImg = document.getElementById("modalImg");
const modalCredit = document.getElementById("modalCredit");
const modalDesc = document.getElementById("modalDesc");
const modalThings = document.getElementById("modalThings");
const modalMaps = document.getElementById("modalMaps");
const modalNextPhoto = document.getElementById("modalNextPhoto");

// ---------------- Render ----------------
function getAreaPlaces(area) {
  return PLACES
    .filter(p => p.area === area)
    .map(p => ({
      ...p,
      km: distanceKm(BASE.lat, BASE.lng, p.lat, p.lng),
    }))
    .sort((a,b) => a.km - b.km);
}

function renderCards(list) {
  cardsGrid.innerHTML = "";

  list.forEach((p, idx) => {
    const img = (p.photos && p.photos.length) ? p.photos[0] : "";
    const tags = (p.things || []).slice(0,3).map(t => t.split("(")[0].trim());

    const card = document.createElement("button");
    card.className =
      "text-left rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition glass shadow-soft";
    card.innerHTML = `
      <div class="h-44 bg-white/5 border-b border-white/10">
        ${img ? `<img src="${img}" alt="${p.title}" class="w-full h-full object-cover">` : ""}
      </div>
      <div class="p-5">
        <div class="flex items-start justify-between gap-3">
          <div class="text-lg font-semibold leading-snug">${p.title}</div>
          <div class="shrink-0 text-xs px-2 py-1 rounded-lg bg-white/10 border border-white/10">
            ${fmtKm(p.km)}
          </div>
        </div>
        <div class="mt-2 text-slate-300/80 text-sm line-clamp-2">${p.desc}</div>
        <div class="mt-3 flex flex-wrap gap-2">
          ${tags.map(t => `<span class="text-xs px-2 py-1 rounded-lg bg-white/5 border border-white/10">${t}</span>`).join("")}
        </div>
        <div class="mt-4 text-sm text-slate-200/90">View details →</div>
      </div>
    `;

    card.addEventListener("click", () => openModal(p));
    cardsGrid.appendChild(card);
  });
}

function showArea(area) {
  currentArea = area;
  areaSelector.classList.add("hidden");
  toolbar.classList.remove("hidden");
  currentAreaEl.textContent = area;

  filtered = getAreaPlaces(area);
  searchInput.value = "";
  renderCards(filtered);
}

function backToAreas() {
  currentArea = null;
  areaSelector.classList.remove("hidden");
  toolbar.classList.add("hidden");
  cardsGrid.innerHTML = "";
}

// ---------------- Modal ----------------
function openModal(place) {
  modalPlace = place;
  modalPhotoIndex = 0;

  modalTitle.textContent = place.title;
  modalMeta.textContent = `${place.area} • ${fmtKm(place.km)} from ${BASE.name}`;
  modalDesc.textContent = place.desc;
  modalMaps.href = place.maps || "#";
  modalCredit.textContent = place.credit || "";

  modalThings.innerHTML = "";
  (place.things || []).forEach(t => {
    const li = d
