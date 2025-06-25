let currentFilter = "";
let currentSearch = "";
let isLoggedIn = false;
let currentUser = null;
let currentSlide = 0;

// 🎯 SOLO 3 PELÍCULAS DESTACADAS CON IMÁGENES REALES
const featuredMovies = [
  { id: 21, type: "serie" }, // Breaking Bad
  { id: 15, type: "pelicula" }, // Matrix
  { id: 18, type: "pelicula" }, // El Caballero de la Noche
];

// Inicializar página
document.addEventListener("DOMContentLoaded", () => {
  checkLoginStatus();
  initHeroBanner();
  // Wait for allMovies to be available
  if (window.allMovies && window.allMovies.length > 0) {
    loadMovies(window.allMovies);
    loadTrending();
  } else {
    // Retry after a short delay if allMovies isn't ready
    setTimeout(() => {
      loadMovies(window.allMovies || []);
      loadTrending();
    }, 100);
  }
});

// Inicializar banner hero
function initHeroBanner() {
  createHeroBanner();
  setInterval(nextSlide, 6000); // Cambiar cada 6 segundos (más tiempo para 3 slides)
}

function createHeroBanner() {
  const heroSection =
    document.querySelector(".hero") || document.querySelector("#hero");
  if (!heroSection) return;

  // 🎯 IMÁGENES HORIZONTALES REALES Y VERIFICADAS
  const bannerImages = {
    21: "https://s-media-cache-ak0.pinimg.com/originals/26/1e/fb/261efbd9203c7ab3297bae26990ac4e5.jpg", // Drama/Crime
    15: "https://mediaplaynews.b-cdn.net/wp-content/uploads/2018/03/Matrixscreenshot-2.jpg", // Sci-fi
    18: "https://i0.wp.com/www.lacosacine.com/wp-content/uploads/2024/07/Batman-El-Caballero-de-la-Noche-Banner-1.jpg?resize=1024%2C576&ssl=1", // Dark city
  };

  const bannerHTML = `
    <div class="hero-banner">
      <div class="hero-slides">
        ${featuredMovies
          .map((movie, index) => {
            const movieData =
              movie.type === "serie"
                ? window.catalogoSeries[movie.id]
                : window.catalogoPeliculas[movie.id];
            const movieInfo = window.allMovies.find((m) => m.id === movie.id);
            const bannerImage = bannerImages[movie.id] || movieInfo?.image;

            return `
            <div class="hero-slide ${
              index === 0 ? "active" : ""
            }" style="background-image: url('${bannerImage}')">
              <div class="hero-overlay">
                <div class="hero-content">
                  <h1>${movieData?.titulo || movieInfo?.title}</h1>
                  <p class="hero-genre">${movieData?.genero}</p>
                  <p class="hero-summary">${movieData?.resumen}</p>
                  <div class="hero-buttons">
                    <button class="btn-primary" onclick="watchFeatured(${
                      movie.id
                    }, '${movie.type}')">
                      ▶ ${isLoggedIn ? "Ver Ahora" : "Suscribirse"}
                    </button>
                    <button class="btn-secondary" onclick="goToDetail(${
                      movie.id
                    }, '${movie.type}')">
                      ℹ Más Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;
          })
          .join("")}
      </div>
      
      <div class="hero-indicators">
        ${featuredMovies
          .map(
            (_, index) =>
              `<button class="indicator ${
                index === 0 ? "active" : ""
              }" onclick="goToSlide(${index})"></button>`
          )
          .join("")}
      </div>
      
      <button class="hero-nav prev" onclick="prevSlide()">‹</button>
      <button class="hero-nav next" onclick="nextSlide()">›</button>
    </div>
  `;

  heroSection.innerHTML = bannerHTML;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % featuredMovies.length;
  updateSlide();
}

function prevSlide() {
  currentSlide =
    currentSlide === 0 ? featuredMovies.length - 1 : currentSlide - 1;
  updateSlide();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlide();
}

function updateSlide() {
  const slides = document.querySelectorAll(".hero-slide");
  const indicators = document.querySelectorAll(".indicator");

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
}

function watchFeatured(id, type) {
  // Si no está logueado, redirigir a login
  if (!isLoggedIn) {
    window.location.href = "html/registro.html";
    return;
  }

  // Si está logueado, reproducir contenido
  if (type === "serie") {
    const serie = window.catalogoSeries[id];
    const temporadasSerie = window.temporadas[id];
    const videoId = temporadasSerie[1]?.videoId;
    window.open(
      `html/reproductor.html?video=${videoId}&title=${encodeURIComponent(
        serie.titulo
      )}`,
      "_blank"
    );
  } else {
    const pelicula = window.catalogoPeliculas[id];
    window.open(
      `html/reproductor.html?video=${
        pelicula.trailer
      }&title=${encodeURIComponent(pelicula.titulo)}`,
      "_blank"
    );
  }
}

function goToDetail(id, type) {
  const page =
    type === "serie" ? "detalle-serie.html" : "detalle-pelicula.html";
  window.location.href = `html/${page}?id=${id}`;
}

// Verificar estado de login
function checkLoginStatus() {
  const user = localStorage.getItem("currentUser");
  if (user) {
    isLoggedIn = true;
    currentUser = JSON.parse(user);
    updateUIForLoggedUser();
  }
}

// Actualizar UI para usuario logueado
function updateUIForLoggedUser() {
  const authSection = document.getElementById("auth-section");
  const footerAuth = document.getElementById("footer-auth");

  if (authSection) {
    authSection.innerHTML = `
      <a href="html/perfil.html">
        <img src="img/img-usuario.jpeg" alt="Avatar" class="user-avatar">
      </a>
    `;
  }

  if (footerAuth) {
    footerAuth.innerHTML = '<a href="html/perfil.html">Perfil</a>';
  }

  // Actualizar botones del banner
  updateBannerButtons();
}

// Actualizar botones del banner según estado de login
function updateBannerButtons() {
  const primaryButtons = document.querySelectorAll(".btn-primary");
  primaryButtons.forEach((button) => {
    button.innerHTML = `▶ ${isLoggedIn ? "Ver Ahora" : "Suscribirse"}`;
  });
}

// Cargar películas
function loadMovies(movies = window.allMovies || []) {
  const grid = document.getElementById("movies-grid");
  if (!grid) return;

  grid.innerHTML = "";

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.className = "pelicula";

    const detailPage =
      movie.type === "serie"
        ? "html/detalle-serie.html"
        : "html/detalle-pelicula.html";

    movieElement.innerHTML = `
      <a href="${detailPage}?id=${movie.id}">
        <img src="${movie.image}" alt="${movie.title}">
      </a>
      ${
        isLoggedIn
          ? `<i class="bi ${
              isFavorite(movie.id) ? "bi-heart-fill" : "bi-heart"
            } favorite-heart" onclick="toggleFavorite(${movie.id})" data-id="${
              movie.id
            }"></i>`
          : ""
      }
    `;

    grid.appendChild(movieElement);
  });
}

// Cargar tendencias
function loadTrending() {
  const grid = document.getElementById("trending-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const movies = window.allMovies || [];
  movies.slice(0, 5).forEach((movie, index) => {
    const trendingElement = document.createElement("a");
    trendingElement.className = "tendencia";
    trendingElement.href =
      movie.type === "serie"
        ? `html/detalle-serie.html?id=${movie.id}`
        : `html/detalle-pelicula.html?id=${movie.id}`;

    trendingElement.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <span class="numero">${index + 1}</span>
    `;

    grid.appendChild(trendingElement);
  });
}

// Filtrar por tipo (película/serie)
function filterMovies(type) {
  currentFilter = type;
  applyFilters();
}

// Filtrar por categoría
function filterByCategory() {
  const category = document.getElementById("categoria").value;
  currentFilter = category;
  applyFilters();
}

// Buscar películas
function searchMovies() {
  const searchTerm = document.getElementById("search-input").value;
  currentSearch = searchTerm;
  applyFilters();
}

// Aplicar filtros
function applyFilters() {
  let filtered = [...(window.allMovies || [])];

  // Filtrar por búsqueda
  if (currentSearch) {
    filtered = filtered.filter((movie) =>
      movie.title.toLowerCase().includes(currentSearch.toLowerCase())
    );
  }

  // Filtrar por tipo o categoría
  if (currentFilter) {
    if (currentFilter === "pelicula" || currentFilter === "serie") {
      filtered = filtered.filter((movie) => movie.type === currentFilter);
    } else {
      filtered = filtered.filter((movie) => movie.category === currentFilter);
    }
  }

  loadMovies(filtered);
}

// Verificar si es favorito
function isFavorite(movieId) {
  if (!isLoggedIn) return false;
  const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
  const userFavorites = favorites[currentUser.email] || [];
  return userFavorites.includes(movieId);
}

// Toggle favorito
function toggleFavorite(movieId) {
  if (!isLoggedIn) return;

  const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
  const userFavorites = favorites[currentUser.email] || [];

  const index = userFavorites.indexOf(movieId);
  if (index === -1) {
    userFavorites.push(movieId);
  } else {
    userFavorites.splice(index, 1);
  }

  favorites[currentUser.email] = userFavorites;
  localStorage.setItem("favorites", JSON.stringify(favorites));
  loadMovies();
}

// Event listener para búsqueda en tiempo real
const searchInput = document.getElementById("search-input");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    currentSearch = this.value;
    applyFilters();
  });
}
