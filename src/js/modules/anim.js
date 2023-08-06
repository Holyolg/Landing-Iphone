function anim() {
	// Анимация
const animItems = document.querySelectorAll(".__anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemsHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemsHeight / animStart;
      if (animItemsHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemsHeight / animStart;
      }
      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemsHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 100);
}
}
export default anim