document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  Swal.fire({
    title: "¡Listo!",
    text: "Mensaje enviado correctamente",
    icon: "success",
    confirmButtonText: "Aceptar",
  });
  this.reset();
});
