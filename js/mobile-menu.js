const mobileMenu = document.querySelector("#mobile-menu");
const openMobileMenuButton = document.querySelector(".mobile-menu-toggle");
const closeMobileMenuButton = document.querySelector(".mobile-menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

function openMobileMenu() {
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  openMobileMenuButton.setAttribute("aria-expanded", "true");
  document.body.classList.add("mobile-menu-open");
  closeMobileMenuButton.focus();
}

function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  openMobileMenuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("mobile-menu-open");
  openMobileMenuButton.focus();
}

openMobileMenuButton.addEventListener("click", openMobileMenu);
closeMobileMenuButton.addEventListener("click", closeMobileMenu);
mobileMenuLinks.forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
    closeMobileMenu();
  }
});
