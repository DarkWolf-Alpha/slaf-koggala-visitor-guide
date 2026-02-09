// ---------- Math helpers ----------
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

// Always-available placeholder
const FALLBACK_IMG = "https://source.unsplash.com/1200x900/?sri-lanka,travel";

// ---------- State ----------
let currentArea = null;
let filtered = [];
let modalPhotoIndex = 0;
let modalPlace = null;

// ---------- Elements ----------
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

const modalHours = document.getElementById("modalHours");
const modalTicket = document.getElementById("modalTicket");
const modalPhone = document.getElementById("modalPhone");
const modalDistance = document.getElementById("modalDistance");

// ---------- Data helpers ----------
function getAreaPlaces(area) {
  return PLACES
    .filter(p => p.area === area)
    .map(p => ({
      ...p,
      km: distanceKm(BASE.lat, BASE.lng, p.lat, p.lng),
    }))
    .sort((a, b) => a.km - b.km);
}

// ---------- Rendering ----------
function renderCards(list) {
  cardsGrid.innerHTML = "";

  list.forEach((p) => {
    const img = (p.photos && p.photos.length) ? p.photos[0] : FALLBACK_IMG;

    const card = document.createElement("button");
    card.className =
      "text-left rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition glass shadow-soft";

    card.innerHTML = `
      <div class="h-44 sm:h-48 bg-white/5 border-b border-white/10">
        <img src="${img}" alt="${p.title}"
             class="w-full h-full object-cover"
             loading="lazy"
             onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />
      </div>

      <div class="p-5">
        <div class="flex items-start justify-between gap-3">
          <div class="text-lg font-semibold leading-snug">${p.title}</div>
          <div class="shrink-0 text-xs px-2 py-1 rounded-xl bg-white/10 border border-white/10">
            ${fmtKm(p.km)}
          </div>
        </div>

        <div class="mt-2 text-slate-300/80 text-sm">
          ${p.desc}
        </div>

        <div class="mt-3 grid grid-cols-1 gap-2 text-xs text-slate-200/85">
          <div class="flex gap-2">
            <span class="px-2 py-1 rounded-xl bg-white/5 border border-white/10">Hours</span>
            <span class="truncate">${p.hours || "—"}</span>
          </div>
          <div class="flex gap-2">
            <span class="px-2 py-1 rounded-xl bg-white/5 border border-white/10">Ticket</span>
            <span class="truncate">${p.ticket || "—"}</span>
          </div>
          <div class="flex gap-2">
            <span class="px-2 py-1 rounded-xl bg-white/5 border border-white/10">Phone</span>
            <span class="truncate">${p.phone || "N/A"}</span>
          </div>
        </div>

        <div class="mt-4 text-sm text-slate-100/90">View details →</div>
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

// ---------- Modal ----------
function openModal(place) {
  modalPlace = place;
  modalPhotoIndex = 0;

  modalTitle.textContent = place.title;
  modalMeta.textContent = `${place.area} • ${BASE.name}`;
  modalDesc.textContent = place.desc;

  modalHours.textContent = place.hours || "—";
  modalTicket.textContent = place.ticket || "—";
  modalPhone.textContent = place.phone || "N/A";
  modalDistance.textContent = fmtKm(place.km);

  modalMaps.href = place.maps || "#";
  modalCredit.textContent = place.credit || "";

  modalThings.innerHTML = "";
  (place.things || []).forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    modalThings.appendChild(li);
  });

  updateModalPhoto();
  modalOverlay.classList.remove("hidden");
  modalOverlay.classList.add("flex");
}

function updateModalPhoto() {
  const photos = modalPlace?.photos || [];
  const src = photos.length ? photos[modalPhotoIndex % photos.length] : FALLBACK_IMG;

  modalImg.onerror = () => {
    modalImg.onerror = null;
    modalImg.src = FALLBACK_IMG;
  };
  modalImg.src = src;
}

function closeModal() {
  modalOverlay.classList.add("hidden");
  modalOverlay.classList.remove("flex");
}

// ---------- Events ----------
areaSelector.querySelectorAll("button[data-area]").forEach(btn => {
  btn.addEventListener("click", () => showArea(btn.dataset.area));
});

backBtn.addEventListener("click", backToAreas);

searchInput.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const baseList = getAreaPlaces(currentArea);

  if (!q) {
    filtered = baseList;
  } else {
    filtered = baseList.filter(p => {
      const hay = [
        p.title, p.desc, p.hours, p.ticket, p.phone,
        (p.things || []).join(" "), (p.area || "")
      ].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }
  renderCards(filtered);
});

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
modalNextPhoto.addEventListener("click", () => {
  modalPhotoIndex++;
  updateModalPhoto();
});
