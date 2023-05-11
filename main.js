// JavaScript Document
/*eslint-env es6*/
$(function () {


        });
				

function toggleFirst() {
	$("div42").toggle();
	$("div43").toggle();
}

$(document).ready(function () {
	$("div43").toggle();
	setInterval(toggleFirst, 10000)
});

const full = document.querySelector(".full");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");

previews.forEach((preview) => {
	preview.addEventListener("click",() => {
		full.classList.add("open");
		original.classList.add("open");
		const originalSrc = preview.getAttribute("data-original");
		original.src = `./${originalSrc}`;
	});
});

full.addEventListener("click", (e) => {
	if (e.target.classList.contains("full")) {
		full.classList.remove("open");
				original.classList.remove("open");
	}
});
