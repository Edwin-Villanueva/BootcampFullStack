document.getElementById("datosForm").addEventListener("submit", function (e) {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const fecha = document.getElementById("fecha").value;
  const pais = document.getElementById("pais").value.trim();

  let formatoValido = true;
  if (nombre === "" || !/^[a-zA-Z\s]+$/.test(nombre)) {
    alert("Por favor, ingresa un nombre válido.");
    formatoValido = false;
  }
  if (apellido === "" || !/^[a-zA-Z\s]+$/.test(apellido)) {
    alert("Por favor, ingresa un apellido válido.");
    formIsValid = false;
  }
  if (validacionEmail(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    formIsValid = false;
  }
  if (email.length < 5 || email.length > 50) {
    alert("El correo debe tener entre 5 y 50 caracteres.");
    formIsValid = false;
  }
  if (fecha === "") {
    alert("Por favor, selecciona una fecha de nacimiento.");
    formIsValid = false;
  }

  if (pais === "" || !/^[a-zA-Z\s]+$/.test(pais)) {
    alert("Por favor, ingresa un país de residencia válido.");
    formIsValid = false;
  }
  if (!formatoValido) {
    e.preventDefault();
  }

  function validacionEmail(email) {
    const expr = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return expr.test(email);
  }
});
