document.addEventListener('DOMContentLoaded', () => {
    function renderPlaces(location, containerId) {
        const container = document.getElementById(containerId);
        let placeIndex = 0;
        places[location].forEach(place => {
            const carouselId = `${location}-carousel-${placeIndex}`;
            const collapseId = `${location}-collapse-${placeIndex++}`;
            const card = document.createElement('div');
            card.className = 'col-md-4 mb-4';
            let carouselHtml = `
                <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        ${place.photos.map((photo, photoIndex) => `
                            <div class="carousel-item ${photoIndex === 0 ? 'active' : ''}">
                                <img src="${photo}" class="d-block w-100" style="height: 200px; object-fit: cover;" alt="${place.name} photo ${photoIndex + 1}">
                            </div>
                        `).join('')}
                    </div>
            `;
            if (place.photos.length > 1) {
                carouselHtml += `
                    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                `;
            }
            carouselHtml += `</div>`;
            if (location === 'menu') {
                card.innerHTML = `
                    <div class="card">
                        <div class="card-header" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                            <h5 class="card-title mb-0">${place.name}</h5>
                        </div>
                        <div id="${collapseId}" class="collapse">
                            <div class="card-body p-0">
                                ${carouselHtml}
                            </div>
                        </div>
                    </div>
                `;
            } else {
                card.innerHTML = `
                    <div class="card">
                        ${carouselHtml}
                        <div class="card-body">
                            <h5 class="card-title">${place.name}</h5>
                            <p class="card-text">${place.description}</p>
                            <p><strong>Distance from SLAF Koggala:</strong> ${place.distance}</p>
                            <p><strong>Price:</strong> ${place.price}</p>
                            <p><strong>Opening Hours:</strong> ${place.opening}</p>
                            <p><strong>Contact:</strong> ${place.contact}</p>
                            ${place.mapUrl ? `<a href="${place.mapUrl}" target="_blank" class="btn btn-primary">Google Maps</a>` : ''}
                        </div>
                    </div>
                `;
            }
            container.appendChild(card);
        });
    }

    renderPlaces('koggala', 'koggala-places');
    renderPlaces('galle', 'galle-places');
    renderPlaces('matara', 'matara-places');
    renderPlaces('restaurants', 'restaurants-places');
    renderPlaces('menu', 'menu-places');
});