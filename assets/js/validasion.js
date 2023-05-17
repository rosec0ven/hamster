function validateForm() {
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;
  var message = document.getElementById("message").value;
  var newsletter = document.getElementById("newsletter").checked;

  if (
    name.trim() === "" ||
    lastname.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    phone.trim() === "" ||
    address.trim() === "" ||
    city.trim() === "" ||
    country.trim() === "" ||
    message.trim() === ""
  ) {
    alert("Por favor, completa todos los campos del formulario.");
    return false;
  }

  var message = "Datos ingresados:\n\n" +
    "Nombre: " + name + "\n" +
    "Apellido: " + lastname + "\n" +
    "Correo electrónico: " + email + "\n" +
    "Contraseña: " + password + "\n" +
    "Teléfono: " + phone + "\n" +
    "Dirección: " + address + "\n" +
    "Ciudad: " + city + "\n" +
    "País: " + country + "\n" +
    "Mensaje: " + message + "\n" +
    "Suscripción al boletín: " + (newsletter ? "Sí" : "No");

  alert(message);
  return true;
}

  