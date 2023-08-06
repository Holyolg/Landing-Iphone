import anim from './modules/anim';
import form from './modules/form';
import popUp from './modules/popUp';
import nav from './modules/nav';
import burger from './modules/burger';

popUp()
burger();
nav();
anim();

new Swiper(".image-slider", {
	//стрелки
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	// прогрессбар
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	spaceBetween: 30,
	effect: "fade",
	fadeEffect: {
	  crossFade: true,
	},
	loop: true,
	observer: true,
	observerParents: true,
	observerSlideChildren: true,
  });