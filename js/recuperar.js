document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recuperar-form")
  const emailInput = document.getElementById("email")
  const usuarioInput = document.getElementById("usuario")
  const recuperarBtn = document.getElementById("recuperar-btn")
  const errorMessage = document.getElementById("error-message")
  const successMessage = document.getElementById("success-message")

  // Validar formulario en tiempo real
  function validateForm() {
    const email = emailInput.value.trim()
    const usuario = usuarioInput.value.trim()

    recuperarBtn.disabled = !(email && usuario)
  }

  emailInput.addEventListener("input", validateForm)
  usuarioInput.addEventListener("input", validateForm)

  // Manejar envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = emailInput.value.trim()
    const usuario = usuarioInput.value.trim()

    if (!email || !usuario) return

    // Verificar si el usuario existe
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]")
    const user = users.find((u) => u.email === email && u.usuario === usuario)

    if (user) {
      successMessage.textContent = "Se ha enviado un email con instrucciones para restablecer tu contraseña"
      successMessage.classList.remove("hidden")
      errorMessage.classList.add("hidden")

      setTimeout(() => {
        window.location.href = "login.html"
      }, 2000)
    } else {
      errorMessage.textContent = "Email o nombre de usuario no encontrados"
      errorMessage.classList.remove("hidden")
      successMessage.classList.add("hidden")
    }
  })
})