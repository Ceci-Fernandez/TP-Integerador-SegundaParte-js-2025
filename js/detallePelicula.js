// 🎬 SISTEMA DINÁMICO DE DETALLES DE PELÍCULA + FAVORITOS - CILA MOVIES

// 🔍 Función para obtener parámetros de la URL
function obtenerParametroURL(nombre) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(nombre)
}

// 🎯 Función para obtener ID de película desde URL o usar por defecto
function obtenerIdPelicula() {
  const idFromURL = obtenerParametroURL("id")

  // Si no hay ID en URL, usar película por defecto (primera del catálogo)
  if (!idFromURL && window.catalogoCompleto) {
    return window.catalogoCompleto.peliculas[0]?.id || "pelicula-1"
  }

  return idFromURL || "pelicula-1"
}

// 🎬 Función para generar HTML del trailer
function generarTrailerHTML(pelicula) {
  // Extrae el ID del video de YouTube
  const videoId = extraerIdYouTube(pelicula.trailer)

  return `
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/${videoId}"
        title="Trailer de ${pelicula.titulo}"
        allowfullscreen
        loading="lazy"
        aria-label="Video trailer de la película ${pelicula.titulo}"
      ></iframe>
    </div>
  `
}

// 🔗 Función para extraer ID de YouTube de una URL
function extraerIdYouTube(url) {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
  const match = url.match(regex)
  return match ? match[1] : "dQw4w9WgXcQ" 
}

// 👥 Función para generar HTML de actores con enlaces a Wikipedia
function generarActoresHTML(actores) {
  return actores
    .map(
      (actor) =>
        `<a href="${actor.wikipedia}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="actor-link"
        aria-label="Ver información de ${actor.nombre} en Wikipedia">
      ${actor.nombre}
    </a>`,
    )
    .join(", ")
}

// 💖 Función que genera botón de favoritos
function generarBotonFavoritos(pelicula) {
  return `
    <button 
      id="btnFavorito" 
      class="btn-favorito" 
      data-pelicula-id="${pelicula.id}"
      data-titulo="${pelicula.titulo}"
      data-año="${pelicula.año}"
      data-genero="${pelicula.genero.join(", ")}"
      data-imagen="${pelicula.imagen}"
      data-tipo="pelicula"
      onclick="toggleFavorito(this)"
      aria-label="Agregar a favoritos"
      title="Agregar a favoritos"
    >
      <svg class="corazon-icon" 
           viewBox="0 0 24 24" 
           fill="none" 
           stroke="currentColor" 
           stroke-width="2"
           aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
      <span class="favorito-texto">Favorito</span>
    </button>
  `
}

// 🎠 Función para generar carrusel de películas similares
function generarCarruselSimilares(peliculaActual) {
  if (!window.catalogoCompleto) return ""

  // Obtener películas del mismo género (excluyendo la actual)
  const generosPelicula = peliculaActual.genero
  let peliculasSimilares = window.catalogoCompleto.peliculas.filter(
    (p) => p.id !== peliculaActual.id && p.genero.some((g) => generosPelicula.includes(g)),
  )

  // Si no hay suficientes similares, agregar películas aleatorias
  if (peliculasSimilares.length < 5) {
    const peliculasRestantes = window.catalogoCompleto.peliculas.filter(
      (p) => p.id !== peliculaActual.id && !peliculasSimilares.some((ps) => ps.id === p.id),
    )

    peliculasSimilares = [...peliculasSimilares, ...peliculasRestantes.slice(0, 5 - peliculasSimilares.length)]
  }

  // Tomar solo las primeras 5
  peliculasSimilares = peliculasSimilares.slice(0, 5)

  const tarjetasHTML = peliculasSimilares
    .map(
      (pelicula) => `
    <div class="carrusel-item">
      <article class="pelicula-card">
        <a href="detallePelicula.html?id=${pelicula.id}" 
           class="pelicula-card__enlace"
           aria-label="Ver detalles de ${pelicula.titulo}">
          <img src="${pelicula.imagen}" 
               alt="Póster de ${pelicula.titulo}"
               class="pelicula-card__imagen"
               loading="lazy">
          <div class="pelicula-card__overlay">
            <span class="pelicula-card__titulo">${pelicula.titulo}</span>
            <span class="pelicula-card__año">${pelicula.año}</span>
          </div>
        </a>
      </article>
    </div>
  `,
    )
    .join("")

  return `
    <section class="similares" aria-labelledby="titulo-similares">
      <div class="container">
        <header class="similares__header">
          <h2 id="titulo-similares" class="similares__titulo">Películas Similares</h2>
        </header>

        <div class="carrusel-container">
          <button class="carrusel-btn carrusel-btn--prev" 
                  onclick="moverCarrusel(-1)"
                  aria-label="Ver películas anteriores">
            &#8249;
          </button>
          
          <div class="carrusel-wrapper">
            <div class="carrusel-track" id="carrusel-track">
              ${tarjetasHTML}
            </div>
          </div>
          
          <button class="carrusel-btn carrusel-btn--next" 
                  onclick="moverCarrusel(1)"
                  aria-label="Ver más películas">
            &#8250;
          </button>
        </div>
      </div>
    </section>
  `
}

// 🎠 Variables para el carrusel
let carruselPosicion = 0
const itemsPorVista = 3

// 🎠 Función para mover el carrusel
function moverCarrusel(direccion) {
  const track = document.getElementById("carrusel-track")
  const items = track.querySelectorAll(".carrusel-item")
  const totalItems = items.length
  const maxPosicion = Math.max(0, totalItems - itemsPorVista)

  carruselPosicion += direccion

  // Controlar límites
  if (carruselPosicion < 0) {
    carruselPosicion = 0
  } else if (carruselPosicion > maxPosicion) {
    carruselPosicion = maxPosicion
  }

  // Aplicar transformación
  const desplazamiento = -(carruselPosicion * (100 / itemsPorVista))
  track.style.transform = `translateX(${desplazamiento}%)`

  // Actualizar estado de botones
  actualizarBotonesCarrusel(maxPosicion)
}

//  Función para actualizar estado de botones del carrusel
function actualizarBotonesCarrusel(maxPosicion) {
  const btnPrev = document.querySelector(".carrusel-btn--prev")
  const btnNext = document.querySelector(".carrusel-btn--next")

  if (btnPrev) btnPrev.disabled = carruselPosicion === 0
  if (btnNext) btnNext.disabled = carruselPosicion >= maxPosicion
}

//  Función principal para generar contenido de la película
function generarContenidoPelicula(pelicula) {
  return `
    <section class="pelicula-detalle" aria-labelledby="titulo-pelicula">
      <div class="container">
        <div class="pelicula-detalle__contenido">
          
          <!-- Trailer de la película -->
          <div class="pelicula-detalle__video">
            ${generarTrailerHTML(pelicula)}
          </div>

          <!-- Información de la película -->
          <div class="pelicula-detalle__info">
            <header class="pelicula-info__header">
              <h1 id="titulo-pelicula" class="pelicula-info__titulo">
                ${pelicula.titulo} (${pelicula.año})
              </h1>
            </header>

            <div class="pelicula-info__detalles">
              <div class="detalle-item">
                <span class="detalle-item__label">Duración:</span>
                <span class="detalle-item__valor">${pelicula.duracion}</span>
              </div>
              
              <div class="detalle-item">
                <span class="detalle-item__label">Género:</span>
                <span class="detalle-item__valor">${pelicula.genero.join(", ")}</span>
              </div>
              
              <div class="detalle-item">
                <span class="detalle-item__label">Director:</span>
                <span class="detalle-item__valor">${pelicula.director}</span>
              </div>
              
              <div class="detalle-item">
                <span class="detalle-item__label">Actores:</span>
                <div class="actores-lista">
                  ${generarActoresHTML(pelicula.actores)}
                </div>
              </div>
              
              <div class="detalle-item">
                <span class="detalle-item__label">Calificación:</span>
                <div class="calificacion">
                  <span class="estrella">⭐</span>
                  <span class="detalle-item__valor">${pelicula.calificacion}/10</span>
                </div>
              </div>
              
              <div class="detalle-item detalle-item--resumen">
                <span class="detalle-item__label">Resumen:</span>
                <p class="detalle-item__resumen">
                  ${pelicula.resumen}
                </p>
              </div>
            </div>

            <!-- Botones de acción -->
            <div class="pelicula-acciones">
              <a class="btn btn--reproducir" 
                 href="${pelicula.trailer}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Comenzar a ver ${pelicula.titulo}">
                <span class="btn__icono" aria-hidden="true">▶</span>
                <span class="btn__texto">Comenzar</span>
              </a>
              
              ${generarBotonFavoritos(pelicula)}
            </div>
          </div>
        </div>
      </div>
    </section>

    ${generarCarruselSimilares(pelicula)}
  `
}

// Función principal para cargar y mostrar película
async function cargarPelicula() {
  console.log("🎬 Iniciando carga de película...")

  const loadingState = document.getElementById("loading-state")
  const errorState = document.getElementById("error-state")
  const contentContainer = document.getElementById("pelicula-content")

  try {
    // Esperar a que se cargue el catálogo
    if (!window.catalogoCompleto) {
      console.log("⏳ Esperando catálogo...")
      await esperarCatalogo()
    }

    const peliculaId = obtenerIdPelicula()
    console.log("🔍 Buscando película:", peliculaId)

    // Busca la película en el catálogo
    const pelicula = window.catalogoCompleto.peliculas.find((p) => p.id === peliculaId)

    if (!pelicula) {
      throw new Error(`Película con ID "${peliculaId}" no encontrada`)
    }

    console.log("✅ Película encontrada:", pelicula.titulo)

    // Generar contenido
    const contenidoHTML = generarContenidoPelicula(pelicula)
    contentContainer.innerHTML = contenidoHTML

    // Actualizar título de la página
    document.getElementById("page-title").textContent = `CILA Movies - ${pelicula.titulo}`
    document.title = `CILA Movies - ${pelicula.titulo}`

    // Mostrar contenido y ocultar loading
    loadingState.style.display = "none"
    contentContainer.style.display = "block"

    // Verificar estado de favoritos
    setTimeout(() => {
      verificarEstadoFavorito()
    }, 100)

    // Inicializar carrusel
    setTimeout(() => {
      actualizarBotonesCarrusel(Math.max(0, 5 - itemsPorVista))
    }, 200)

    console.log("🎉 Película cargada exitosamente")
  } catch (error) {
    console.error("❌ Error cargando película:", error)

    // Mostrar estado de error
    loadingState.style.display = "none"
    errorState.style.display = "block"

    // Actualizar título
    document.getElementById("page-title").textContent = "CILA Movies - Error"
  }
}

// ⏳ Función para esperar a que se cargue el catálogo
function esperarCatalogo(maxIntentos = 50) {
  return new Promise((resolve, reject) => {
    let intentos = 0

    const verificar = () => {
      if (window.catalogoCompleto) {
        resolve()
      } else if (intentos >= maxIntentos) {
        reject(new Error("Timeout esperando catálogo"))
      } else {
        intentos++
        setTimeout(verificar, 100)
      }
    }

    verificar()
  })
}

// 🔄 Función para actualizar película cuando cambia la URL
function actualizarPeliculaPorURL() {
  const nuevaId = obtenerIdPelicula()
  const tituloActual = document.getElementById("titulo-pelicula")?.textContent || ""

  // Solo recargar si cambió la película
  if (!tituloActual.includes(nuevaId)) {
    cargarPelicula()
  }
}

// ===== SISTEMA DE FAVORITOS =====

// Función principal para toggle de favoritos
function toggleFavorito(boton) {
  console.log("=== TOGGLE FAVORITO ===")

  // 🔍 Verificar si hay usuario logueado
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))
  if (!usuarioLogueado || !usuarioLogueado.email) {
    mostrarMensajeFavorito("Debes iniciar sesión para agregar favoritos", "error")
    // Redirigir al login después de 2 segundos
    setTimeout(() => {
      window.location.href = "../html/login.html"
    }, 2000)
    return
  }

  // Obtener datos de la película/serie desde el botón
  const datosPelicula = {
    id: boton.dataset.peliculaId,
    titulo: boton.dataset.titulo,
    año: boton.dataset.año,
    genero: boton.dataset.genero,
    imagen: boton.dataset.imagen,
    tipo: boton.dataset.tipo || "pelicula", // Por defecto película
  }

  console.log("Datos de la película:", datosPelicula)

  // Verifica que tengamos todos los datos necesarios
  if (!datosPelicula.id || !datosPelicula.titulo) {
    console.error("Faltan datos de la película")
    mostrarMensajeFavorito("Error: Faltan datos de la película", "error")
    return
  }

  //Obtener favoritos actuales del usuario
  const claveUsuario = `favoritos_${usuarioLogueado.email}`
  const favoritosUsuario = JSON.parse(localStorage.getItem(claveUsuario)) || {
    peliculas: [],
    series: [],
  }

  console.log("Favoritos actuales:", favoritosUsuario)

  // Determinar si es película o serie
  const tipoContenido = datosPelicula.tipo === "serie" ? "series" : "peliculas"
  const listaFavoritos = favoritosUsuario[tipoContenido]

  //Verificar si ya está en favoritos
  const indiceExistente = listaFavoritos.findIndex((item) => item.id === datosPelicula.id)
  const yaEsFavorito = indiceExistente !== -1

  if (yaEsFavorito) {
    // Quitar de favoritos
    listaFavoritos.splice(indiceExistente, 1)
    actualizarBotonFavorito(boton, false)
    mostrarMensajeFavorito(`"${datosPelicula.titulo}" eliminado de favoritos`, "info")
    console.log("Eliminado de favoritos")
  } else {
    // Agregar a favoritos
    listaFavoritos.push(datosPelicula)
    actualizarBotonFavorito(boton, true)
    mostrarMensajeFavorito(`"${datosPelicula.titulo}" agregado a favoritos`, "success")
    console.log("Agregado a favoritos")
  }

  // Guardar favoritos actualizados
  localStorage.setItem(claveUsuario, JSON.stringify(favoritosUsuario))

  // Actualizar interfaz si existe la función global
  if (typeof window.actualizarDespuesDeFavoritos === "function") {
    window.actualizarDespuesDeFavoritos()
  }

  console.log("Favoritos actualizados:", favoritosUsuario)
}

// Función para actualizar el estado visual del botón
function actualizarBotonFavorito(boton, esFavorito) {
  if (esFavorito) {
    boton.classList.add("activo")
    boton.title = "Quitar de favoritos"
  } else {
    boton.classList.remove("activo")
    boton.title = "Agregar a favoritos"
  }
}

// Función para mostrar mensajes de feedback
function mostrarMensajeFavorito(mensaje, tipo = "info") {
  // Buscar contenedor de mensajes existente o crearlo
  let contenedorMensaje = document.getElementById("mensaje-favorito")

  if (!contenedorMensaje) {
    contenedorMensaje = document.createElement("div")
    contenedorMensaje.id = "mensaje-favorito"
    contenedorMensaje.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 20px;
      border-radius: 6px;
      color: white;
      font-weight: 500;
      z-index: 10000;
      max-width: 300px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `
    document.body.appendChild(contenedorMensaje)
  }

  // Aplicar estilos según el tipo
  const estilosTipo = {
    success: "background: #46d369; border-left: 4px solid #2e7d32;",
    error: "background: #e87c03; border-left: 4px solid #d84315;",
    info: "background: #2196f3; border-left: 4px solid #1565c0;",
  }

  contenedorMensaje.style.cssText += estilosTipo[tipo] || estilosTipo.info
  contenedorMensaje.textContent = mensaje

  // Animación de entrada
  setTimeout(() => {
    contenedorMensaje.style.transform = "translateX(0)"
  }, 100)

  // Auto-ocultar después de 3 segundos
  setTimeout(() => {
    contenedorMensaje.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (contenedorMensaje.parentNode) {
        contenedorMensaje.parentNode.removeChild(contenedorMensaje)
      }
    }, 300)
  }, 3000)
}

// Función para verificar estado inicial de favoritos al cargar la página
function verificarEstadoFavorito() {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))
  if (!usuarioLogueado || !usuarioLogueado.email) {
    return // No hay usuario logueado
  }

  // Buscar todos los botones de favorito en la página
  const botonesFavorito = document.querySelectorAll(".btn-favorito")

  botonesFavorito.forEach((boton) => {
    const peliculaId = boton.dataset.peliculaId
    const tipo = boton.dataset.tipo || "pelicula"

    if (peliculaId) {
      const esFavorito = verificarSiEsFavorito(usuarioLogueado.email, peliculaId, tipo)
      actualizarBotonFavorito(boton, esFavorito)
    }
  })
}

// Función auxiliar para verificar si un contenido es favorito
function verificarSiEsFavorito(emailUsuario, contenidoId, tipo = "pelicula") {
  const claveUsuario = `favoritos_${emailUsuario}`
  const favoritosUsuario = JSON.parse(localStorage.getItem(claveUsuario)) || {
    peliculas: [],
    series: [],
  }

  const tipoContenido = tipo === "serie" ? "series" : "peliculas"
  return favoritosUsuario[tipoContenido].some((item) => item.id === contenidoId)
}

// Inicialización cuando se carga el DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 DOM cargado - inicializando detalle de película")

  // Cargar película
  cargarPelicula()

  // Inicializar sistema de favoritos
  console.log("💖 Sistema de favoritos cargado")

  // Escuchar cambios en localStorage para sincronizar pestañas
  window.addEventListener("storage", (e) => {
    if (e.key && e.key.startsWith("favoritos_")) {
      verificarEstadoFavorito()
    }
  })
})

// Escuchar cambios en la URL (para navegación SPA)
window.addEventListener("popstate", actualizarPeliculaPorURL)

// Exportar funciones para uso global
window.moverCarrusel = moverCarrusel
window.cargarPelicula = cargarPelicula
window.toggleFavorito = toggleFavorito
window.verificarEstadoFavorito = verificarEstadoFavorito
window.verificarSiEsFavorito = verificarSiEsFavorito

console.log("detallePelicula.js dinámico + favoritos cargado correctamente")
