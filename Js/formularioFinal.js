document.getElementById("Alto").addEventListener("click", function () {
  document.body.classList.toggle("alto-contraste");

  if (document.body.classList.contains("alto-contraste")) {
    this.textContent = "Contraste Normal";
  } else {
    this.textContent = "Alto Contraste";
  }
});

document.getElementById("datosForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const fecha = document.getElementById("fecha").value;
  const pais = document.getElementById("pais").value.trim();

  let formatoValido = true;
  if (nombre === "" || !/^[a-zA-Z]+$/.test(nombre)) {
    alert("Por favor, ingresa un nombre válido.");
    formatoValido = false;
  }
  if (apellido === "" || !/^[a-zA-Z]+$/.test(apellido)) {
    alert("Por favor, ingresa un apellido válido.");
    formatoValido = false;
  }
  //////////////////////////////////////////////////////////
  if (email.length < 5 || email.length > 50) {
    alert("El correo debe tener entre 5 y 50 caracteres.");
    formatoValido = false;
  } else {
    if (!validacionEmail(email)) {
      //se hizo la correccion
      alert("Por favor, ingresa un correo electrónico válido.");
      formatoValido = false; //corregido
    }
    function validacionEmail(email) {
      const expr = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return expr.test(email);
    }
  }

  ///////////////////////////////////////////////////////////////
  if (fecha === "") {
    alert("Por favor, selecciona una fecha de nacimiento.");
    formatoValido = false;
  }

  if (pais === "" || !/^[a-zA-Z]+$/.test(pais)) {
    alert("Por favor, ingresa un país de residencia válido.");
    formatoValido = false;
  }
  if (formatoValido) {
    document.getElementById("mensaje").innerHTML =
      "Formulario enviado correctamente.<br>Serás redirigido a la página de inicio en unos segundos...";

    setTimeout(function () {
      window.location.href = "../index.html";
    }, 3000);
  }
});
