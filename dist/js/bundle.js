/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/anim.js":
/*!********************************!*\
  !*** ./src/js/modules/anim.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anim);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   modalCLose: () => (/* binding */ modalCLose)
/* harmony export */ });
const trigger = document.querySelector('#menu__trigger')
const menu = document.querySelector('#menu__burger');

function modalCLose() {
	menu.classList.remove('menu-open')
		document.body.style.overflow = '';
}

function modalOpen() {
	menu.classList.add('menu-open')
	document.body.style.overflow = 'hidden';
}

function burger() {

trigger.addEventListener('click', () => {
	if (menu.classList.contains('menu-open')) {
		modalCLose();
	} else
	modalOpen();
});
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);



/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const forms = document.forms.main;
const nameInput = forms.nameInput;
const nameTel = forms.nameTel;
const form = document.getElementById("form");

console.log(nameTel.value);

const nameInputPlaceholder = nameInput.placeholder;

nameInput.addEventListener("focus", function () {
  nameInput.placeholder = "";
});
nameInput.addEventListener("blur", function () {
  nameInput.placeholder = nameInputPlaceholder;
});

const nameTelPlaceholder = nameTel.placeholder;

nameTel.addEventListener("focus", function () {
  nameTel.placeholder = "";
});
nameTel.addEventListener("blur", function () {
  nameTel.placeholder = nameTelPlaceholder;
});

nameInput.addEventListener("submit", function (event) {
  if (!nameInput.value) {
    console.log("Не заполнено");
    event.preventDefault();
  }
});

form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);
  let formData = new FormData(form);
  if (error === 0) {
    form.classList.add("_sending");

    let respone = await fetch("sendmmail.php", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      let result = await respone.json();
      alert(result.message);
      form.reset();
      form.classList.remove("_sending");
    } else {
      alert("Ошибка");
      form.classList.remove("_sending");
    }
  } else {
    alert("Проверьте правильность данных");
  }
}
function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll("._req");
  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);

    if (input.classList.contains("_tel")) {
      if (telTest(input)) {
        formAddError(input);
        error++;
      }
    } else {
      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  function telTest(input) {
    return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(
      input.value
    );
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/js/modules/nav.js":
/*!*******************************!*\
  !*** ./src/js/modules/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger */ "./src/js/modules/burger.js");


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
		(0,_burger__WEBPACK_IMPORTED_MODULE_0__.modalCLose)();
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);

/***/ }),

/***/ "./src/js/modules/popUp.js":
/*!*********************************!*\
  !*** ./src/js/modules/popUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Popup
function popUp() {
const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const timeout = 300; // таймаут активности кнопки открыть

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}
// Закрытие popup
const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}
function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}
//
function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = "0px";
      }
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
	}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUp);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_anim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/anim */ "./src/js/modules/anim.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_popUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popUp */ "./src/js/modules/popUp.js");
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/nav */ "./src/js/modules/nav.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");






(0,_modules_popUp__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_modules_burger__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_nav__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_anim__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map