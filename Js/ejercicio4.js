document.getElementById("datosForm").addEventListener("submit", function (e) {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const fecha = document.getElementById("fecha").value;
  const pais = document.getElementById("pais").value.trim();

  let formatoValido = true;
  if (nombre === "" || !/^[a-zA-Z]+$/.test(nombre)) {
    //corregido
    alert("Por favor, ingresa un nombre válido.");
    formatoValido = false;
  }
  if (apellido === "" || !/^[a-zA-Z]+$/.test(apellido)) {
    //corregido
    alert("Por favor, ingresa un apellido válido.");
    formatoValido = false; //corregido
  }
  //////////////////////////////////////////////////////////
  if (email.length < 5 || email.length > 50) {
    // se corrigio para que luego de verificar la longitud se verifique que sea valido
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
    //corregido
    alert("Por favor, ingresa un país de residencia válido.");
    formatoValido = false;
  }
  if (!formatoValido) {
    e.preventDefault();
  }
});
