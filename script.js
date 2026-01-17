document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("[data-modal]");
  const closeBtn = e.target.closest(".modal__close");
  const overlay = e.target.classList.contains("modal__overlay");

  if (openBtn) {
    document.getElementById(openBtn.dataset.modal).classList.add("is-open");
  }

  if (closeBtn || overlay) {
    e.target.closest(".modal").classList.remove("is-open");
  }
});
