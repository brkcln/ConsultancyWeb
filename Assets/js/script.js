//Get the button:
mybutton = document.getElementById("myBtn");
header = document.getElementById("header-sticky");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
		header.classList.add("header-sticky");
	} else {
		mybutton.style.display = "none";
		header.classList.remove("header-sticky");
	}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
