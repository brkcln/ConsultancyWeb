//Anime js

//Get the button:
mybutton = document.getElementById("myBtn");
head = document.getElementById("header");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
		head.classList.add("fix");
	} else {
		mybutton.style.display = "none";
		head.classList.remove("fix");
	}
}
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav__links");
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}
//slider
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 4500,
	},
	loop: true,
	loopedSlides: 6,
}); // When the user clicks on the button, scroll to the top of the document
let hero = document.querySelectorAll(".anime-hero");
anime({
	targets: hero,
	opacity: 1,
	delay: 500,
	translateX: -35,
	ease: "linear",
});
