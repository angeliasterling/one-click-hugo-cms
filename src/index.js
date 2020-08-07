// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("Welcome \u03B8's");

document.querySelector('.hamburger').addEventListener('click', _onHamburgerClick);

// listener methods
function _onHamburgerClick() {
	var mobileNav = document.querySelector('.mobile-nav');
	if (mobileNav.classList.contains('mobile-active')) {
		mobileNav.classList.remove('mobile-active');
		mobileNav.classList.add('mobile-inactive');
	} else {
		mobileNav.classList.remove('mobile-inactive');
		mobileNav.classList.add('mobile-active');
	}
}

document.querySelector('.mobile-nav a').addEventListener('click', _onNavLinkClick);

// listener methods
function _onNavLinkClick() {
	document.querySelector('.mobile-nav').classList.remove('mobile-active');;
}