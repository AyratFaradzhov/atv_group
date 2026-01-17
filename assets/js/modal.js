const modal = document.getElementById("certificate-modal");

const modalTitle = modal.querySelector(".modal__title");
const modalText = modal.querySelector(".modal__text");
const modalImage = modal.querySelector(".modal__image");
const modalButton = modal.querySelector(".modal__button");

document.addEventListener("click", (e) => {
  const card = e.target.closest(".about-atv__cert-card");
  const close = e.target.closest(".modal__close");
  const overlay = e.target.classList.contains("modal__overlay");

  if (card) {
    modalTitle.textContent = card.dataset.title;
    modalImage.src = card.dataset.image;
    modalButton.href = card.dataset.pdf;

    // если используешь i18n
    modalText.setAttribute("data-i18n", card.dataset.text);

    modal.classList.add("is-open");
  }

  if (close || overlay) {
    modal.classList.remove("is-open");
  }
});

// закрытие по Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("is-open");
  }
});
