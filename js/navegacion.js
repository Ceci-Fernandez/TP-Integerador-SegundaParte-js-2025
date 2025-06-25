function estaLogueado() {
  try {
    const usuarioLogueado = localStorage.getItem("usuarioLogueado");
    return (
      usuarioLogueado !== null &&
      usuarioLogueado !== "null" &&
      usuarioLogueado !== ""
    );
  } catch (error) {
    console.error("Error verificando login:", error);
    return false;
  }
}

function obtenerUsuarioLogueado() {
  try {
    const usuarioData = localStorage.getItem("usuarioLogueado");
    return usuarioData ? JSON.parse(usuarioData) : null;
  } catch (error) {
    console.error("Error obteniendo usuario logueado:", error);
    return null;
  }
}

function obtenerPaginaActual() {
  const path = window.location.pathname;
  const pagina = path.split("/").pop() || "index.html";
  return pagina;
}

function obtenerUltimoContenidoVisto() {
  try {
    const usuarioLogueado = obtenerUsuarioLogueado();
    if (!usuarioLogueado) return null;

    const favoritos = JSON.parse(
      localStorage.getItem(`favoritos_${usuarioLogueado.email}`)
    ) || {
      peliculas: [],
      series: [],
    };

    const historial =
      JSON.parse(localStorage.getItem(`historial_${usuarioLogueado.email}`)) ||
      [];

    if (favoritos.series.length > 0) {
      return {
        tipo: "serie",
        titulo: favoritos.series[0].titulo,
        url: `/html/detalleSerie.html?id=${favoritos.series[0].id}`,
      };
    }

    if (favoritos.peliculas.length > 0) {
      return {
        tipo: "pelicula",
        titulo: favoritos.peliculas[0].titulo,
        url: `/html/detallePelicula.html?id=${favoritos.peliculas[0].id}`,
      };
    }

    return {
      tipo: "serie",
      titulo: "El Eternauta",
      url: "/html/detalleSerie.html?id=eternauta",
    };
  } catch (error) {
    console.error("Error obteniendo último contenido:", error);
    // Contenido por defecto en caso de error
    return {
      tipo: "serie",
      titulo: "El Eternauta",
      url: "/html/detalleSerie.html?id=eternauta",
    };
  }
}

function actualizarHeader() {
  console.log("Actualizando header...");

  const btnHeader =
    document.querySelector("#btnCerrarSesion") ||
    document.querySelector("#btnIniciarSesion") ||
    document.querySelector("a[href*='login.html']") ||
    document.querySelector(".header__li-btn") ||
    document.querySelector(".header__li.btn a");

  if (btnHeader) {
    const logueado = estaLogueado();
    console.log("Estado login:", logueado);

    if (logueado) {
      // Si el usuario esta logeado mostrar boton perfil
      btnHeader.textContent = "Perfil";
      btnHeader.href = "/html/perfilUsuario.html";
      btnHeader.id = "btnPerfil";

      // Si ya estamos en el perfil cambiar a cerrar seesion
      const paginaActual = obtenerPaginaActual();
      if (paginaActual === "perfilUsuario.html") {
        btnHeader.textContent = "Cerrar sesión";
        btnHeader.href = "#";
        btnHeader.id = "btnCerrarSesion";

        // Agregar evento para cerrar sesion
        btnHeader.onclick = (e) => {
          e.preventDefault();
          cerrarSesion();
        };
      }
    } else {
      // 🚪 Usuario no logueado mostrar iniciar sesion
      btnHeader.textContent = "Iniciar Sesion";
      btnHeader.href = "/html/login.html";
      btnHeader.id = "btnIniciarSesion";
      btnHeader.className = "header__li-btn";
      btnHeader.onclick = null;
    }

    console.log("Header actualizado:", btnHeader.textContent);
  } else {
    console.warn("No se encontró botón en el header");
  }
}

function actualizarBannerHero() {
  const paginaActual = obtenerPaginaActual();

  if (
    paginaActual !== "index.html" &&
    window.location.pathname !== "/" &&
    paginaActual !== ""
  ) {
    return;
  }

  console.log("Actualizando banner hero...");

  const btnHero =
    document.querySelector(".hero__btn") ||
    document.querySelector("a[href*='registroUsuario.html']");

  if (btnHero) {
    const logueado = estaLogueado();

    if (logueado) {
      const ultimoContenido = obtenerUltimoContenidoVisto();

      btnHero.textContent = "Seguir viendo";
      btnHero.href = ultimoContenido.url;
      btnHero.className = "hero__btn hero__btn--continuar";

      btnHero.setAttribute("data-tipo", ultimoContenido.tipo);
      btnHero.setAttribute("data-titulo", ultimoContenido.titulo);

      console.log(
        `Banner actualizado: "Seguir viendo" → ${ultimoContenido.titulo}`
      );
    } else {
      btnHero.textContent = "Suscribete";
      btnHero.href = "/html/registroUsuario.html";
      btnHero.className = "hero__btn";

      btnHero.removeAttribute("data-tipo");
      btnHero.removeAttribute("data-titulo");

      console.log('Banner actualizado: "Suscribete"');
    }
  } else {
    console.warn("No se encontró botón del hero");
  }
}

function actualizarFooter() {
  console.log("Actualizando footer...");

  const paginaActual = obtenerPaginaActual();
  const logueado = estaLogueado();

  const columnaHome =
    document.querySelector(".columna_footer:nth-child(2) ul") ||
    document.querySelector(".columna_footer ul");

  if (columnaHome) {
    let linkDinamico = columnaHome.querySelector(".link-dinamico");

    if (!linkDinamico) {
      linkDinamico = document.createElement("li");
      linkDinamico.className = "link-dinamico";
      columnaHome.appendChild(linkDinamico);
    }

    if (logueado) {
      linkDinamico.innerHTML =
        '<a href="#" onclick="cerrarSesionFooter(event)">Cerrar sesión</a>';
    } else {
      if (
        paginaActual === "index.html" ||
        paginaActual === "" ||
        window.location.pathname === "/"
      ) {
        linkDinamico.innerHTML =
          '<a href="/html/registroUsuario.html">Suscribirse</a>';
      } else if (
        paginaActual === "detalleSerie.html" ||
        paginaActual === "detallePelicula.html"
      ) {
        linkDinamico.innerHTML =
          '<a href="/html/registroUsuario.html">Suscribirse</a>';
      } else {
        linkDinamico.innerHTML = '<a href="/index.html">Home</a>';
      }
    }

    console.log("Footer actualizado:", linkDinamico.innerHTML);
  } else {
    console.warn("No se encontró columna Home en el footer");
  }
}

function cerrarSesionFooter(event) {
  event.preventDefault();
  console.log("Cerrando sesión desde footer...");
  cerrarSesion();
}

function cerrarSesion() {
  try {
    localStorage.removeItem("usuarioLogueado");
    localStorage.removeItem("tarjetaSeleccionada");
    localStorage.removeItem("cambioDePlan");

    console.log("Sesión cerrada exitosamente");

    window.location.href = "/html/login.html";
  } catch (error) {
    console.error("Error cerrando sesión:", error);
    alert("Error al cerrar sesión");
  }
}

function actualizarInterfazSegunLogin() {
  console.log("=== ACTUALIZANDO INTERFAZ SEGÚN LOGIN ===");
  console.log("Página actual:", obtenerPaginaActual());
  console.log("Usuario logueado:", estaLogueado());

  actualizarHeader();
  actualizarBannerHero(); //
  actualizarFooter();

  console.log("=== INTERFAZ ACTUALIZADA ===");
}

function actualizarDespuesDeLogin(email) {
  console.log("Usuario logueado:", email);
  setTimeout(() => {
    actualizarInterfazSegunLogin();
  }, 100);
}

function actualizarDespuesDeLogout() {
  console.log("Sesión cerrada");
  actualizarInterfazSegunLogin();
}

function actualizarDespuesDeFavoritos() {
  console.log("Favoritos actualizados");

  const paginaActual = obtenerPaginaActual();
  if (
    paginaActual === "index.html" ||
    window.location.pathname === "/" ||
    paginaActual === ""
  ) {
    actualizarBannerHero();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM cargado - inicializando auth-utils");

  setTimeout(() => {
    actualizarInterfazSegunLogin();
  }, 100);
});

window.addEventListener("focus", () => {
  actualizarInterfazSegunLogin();
});

window.addEventListener("storage", (e) => {
  if (e.key === "usuarioLogueado" || e.key?.startsWith("favoritos_")) {
    console.log("Cambio detectado en localStorage:", e.key);
    actualizarInterfazSegunLogin();
  }
});

window.actualizarInterfazDespuesDeLogin = actualizarDespuesDeLogin;
window.actualizarDespuesDeFavoritos = actualizarDespuesDeFavoritos;
window.estaLogueado = estaLogueado;
window.obtenerUsuarioLogueado = obtenerUsuarioLogueado;
window.cerrarSesion = cerrarSesion;
