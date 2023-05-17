
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Verificar si el modo oscuro está activado en el almacenamiento local
var isDarkMode = localStorage.getItem("darkMode") === "true";

// Aplicar el modo oscuro si está activado
if (isDarkMode) {
  body.classList.add("dark-mode");
}

// Manejar el evento del botón para alternar el modo oscuro
darkModeToggle.addEventListener("click", function() {
  // Alternar la clase "dark-mode" en el body
  body.classList.toggle("dark-mode");

  // Almacenar la preferencia en el almacenamiento local
  var isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
});
