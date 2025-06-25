document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form")
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")
  const loginBtn = document.getElementById("login-btn")
  const errorMessage = document.getElementById("error-message")

  // Validar formulario en tiempo real
  function validateForm() {
    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()

    loginBtn.disabled = !(email && password)
  }

  emailInput.addEventListener("input", validateForm)
  passwordInput.addEventListener("input", validateForm)

  // Manejar envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()

    if (!email || !password) return

    // Obtener usuarios registrados
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]")

    // Buscar usuario
    const user = users.find((u) => u.email === email && u.password === password)

    if (user) {
      // Guardar usuario actual
      localStorage.setItem("currentUser", JSON.stringify(user))
      window.location.href = "../index.html"
    } else {
      errorMessage.textContent = "Email o contraseña incorrectos"
      errorMessage.classList.remove("hidden")
    }
  })
})
