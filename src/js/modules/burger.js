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
export default burger;
export {modalCLose}
