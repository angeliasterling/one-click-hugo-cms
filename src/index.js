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

var navLinks = document.querySelector('.mobile-nav').querySelectorAll('a');
multiAddEventListener(navLinks, 'click', _onNavLinkClick);

// listener methods
function _onNavLinkClick() {
	document.querySelector('.mobile-nav').classList.remove('mobile-active');;
	document.querySelector('.mobile-nav').classList.add('mobile-inactive');
}

function multiAddEventListener(els, type, listener, limitOne = true) {
    if (els) {
        for (let i = 0; i < els.length; i++) {
            const $target = els[i];
            if (limitOne) {
                $target.removeEventListener(type, listener);
            }
            $target.addEventListener(type, listener);
        }
    }
}