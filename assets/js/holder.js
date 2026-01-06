document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".cooperation__panels");
  if (!section) return;

  const tabs = Array.from(section.querySelectorAll(".cooperation__tab"));
  const panels = Array.from(section.querySelectorAll(".cooperation__panel"));

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      const activeIndex = tabs.findIndex((t) =>
        t.classList.contains("cooperation__tab--active")
      );
      if (activeIndex === index) return;

      // 1) снять активные классы (старт анимации закрытия)
      tabs[activeIndex].classList.remove("cooperation__tab--active");
      panels[activeIndex].classList.remove("cooperation__panel--active");

      // 2) на следующем кадре включить новую панель (старт анимации открытия)
      requestAnimationFrame(() => {
        tab.classList.add("cooperation__tab--active");
        panels[index].classList.add("cooperation__panel--active");
      });
    });
  });
});
