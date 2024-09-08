const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span> en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span> pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span> de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span> avec découpe laser sur mesure</span>"
	}
];
let currentIndex = 0;
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");


let theDiv = "";
for (let i = 0; i < slides.length; i++) {
    theDiv += `<div id="${i}" class='dot ${i === 0 ? 'dot_selected' : ''}'></div>`;
}
dotsContainer.innerHTML = theDiv;


function switchSelectedDot(actualImage) {
    let dots = document.querySelectorAll(".dot");
    dots.forEach(dot => {
        dot.classList.remove("dot_selected");
    });
    dots[actualImage].classList.add("dot_selected");
}


function updateCarousel() {
    bannerImg.src = slides[currentIndex].image;
    bannerText.innerHTML = slides[currentIndex].tagLine;
    switchSelectedDot(currentIndex);
}


document.querySelector(".arrow_right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

document.querySelector(".arrow_left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

updateCarousel(); 