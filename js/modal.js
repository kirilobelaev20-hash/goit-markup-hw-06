const modal = document.querySelector("#modal");
const openModalButton = document.querySelector(
  ".main-button[aria-controls='modal']",
);
const closeModalButton = document.querySelector(".modal-close");
const firstModalInput = document.querySelector("#user-name");

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  openModalButton.setAttribute("aria-expanded", "true");
  firstModalInput.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  openModalButton.setAttribute("aria-expanded", "false");
  openModalButton.focus();
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});
