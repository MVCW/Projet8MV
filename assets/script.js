const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let currentIndex = 0;
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

/** Event listeners */
// Tester le clic sur la flèche droite
document.querySelector(".arrow_right").addEventListener("click", () => {
    console.log("Flèche droite cliquée");  // Message dans la console
    // alert("Flèche droite cliquée");  // Ou utilisez un pop-up avec alert
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

// Tester le clic sur la flèche gauche
document.querySelector(".arrow_left").addEventListener("click", () => {
    console.log("Flèche gauche cliquée");  // Message dans la console
    // alert("Flèche gauche cliquée");  // Ou utilisez un pop-up avec alert
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

updateCarousel();  // Initialize carousel