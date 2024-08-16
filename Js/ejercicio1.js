document.getElementById("Alto").addEventListener("click", function () {
  document.body.classList.toggle("alto-contraste");

  if (document.body.classList.contains("alto-contraste")) {
    this.textContent = "Contraste Normal";
  } else {
    this.textContent = "Alto Contraste";
  }
});
