import {modalCLose} from './burger'

function nav() {
	// Прокрутка при клике
const menuLinks = document.querySelectorAll(
	".header__item-text[data-goto], .btn[data-goto]"
  );
  if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
	  menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
	  const menuLink = e.target;
	  if (
		menuLink.dataset.goto &&
		document.querySelector(menuLink.dataset.goto)
	  ) {
		modalCLose();
		const gotoBlock = document.querySelector(menuLink.dataset.goto);
		const gotoBlockValue =
		  gotoBlock.getBoundingClientRect().top +
		  scrollY -
		  document.querySelector("header").offsetHeight;
		window.scrollTo({
		  top: gotoBlockValue,
		  behavior: "smooth",
		});
		e.preventDefault();
	  }
	}
  }
}
export default nav