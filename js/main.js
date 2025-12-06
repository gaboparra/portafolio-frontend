const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-bs-theme", newTheme);
});

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "¡Mensaje Enviado!",
      text: "Gracias por contactarme",
    });
    contactForm.reset();
  });
}
