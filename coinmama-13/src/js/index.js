import "./import/modules";


const burger = document.querySelector('.navbar__toggle'),
	menu = document.querySelector('.header__buttons'),
	logo = document.querySelector('.header__logo');


// const openMenu = () => {
// 	burger.classList.toggle('is-active')
// 	menu.classList.toggle('is-active')
// 	logo.classList.toggle('is-active')
// }

// burger.addEventListener('click', function () {
// 	openMenu();
// })

// document.addEventListener('click', e => {
// 	let target = e.target;
// 	let its_menu = target == menu || menu.contains(target);
// 	let its_burger = target == burger || burger.contains(target);
// 	let menu_is_active = menu.classList.contains('is-active');
// 	if (!its_menu && !its_burger && menu_is_active) {
// 		openMenu();
// 	}
// })

const scrolling = () => {
	const header = document.querySelector('.header')

	window.addEventListener('scroll', function () {

		if (document.documentElement.scrollTop > 100) {
			header.style.borderBottom = '1px solid #dbe1ea'
			header.style.borderBottom = '0 5px 10px rgba(0,0,0,.05)'
		} else {
			header.style = ''
		}
	})
}
scrolling()

// // For example:
// // www.coinmama.com/lp/101/
// // ?hone=the-easiest-way-to-buy-&-sell-cryptocurrency&
// // htwo=trusted-by-over-2,400,000-people-across-188-countries-since-2013

// //site.ru/?utm_campaign=name&utm_replace=moscow

// const test1 = document.querySelector('.testh2'),
// 	test2 = document.querySelector('.testh3');

// function getUtms() {
// 	const utms = {};
// 	let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
// 		utms[key] = value;
// 	});
// 	return utms;
// }

// const utms = getUtms();

// for (let key in utms) {
// 	utms[key] = utms[key].replace(/[\-%]/g, ' ');
// }

// if (utms.hone) {
// 	test1.innerHTML = utms.hone;
// }
// if (utms.htwo) {
// 	test2.innerHTML = utms.htwo;
// }


