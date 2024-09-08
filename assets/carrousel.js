
counter.i = 0;

function counter(arrow) {
    const totalSlides = slides.length;  // Nombre total d'images dans le carrousel

    if (arrow.className === "arrow_left") {
        (counter.i === 0) ? (counter.i = totalSlides - 1) : counter.i--;
    } else if(arrow.className === "arrow_right") {
        (counter.i === totalSlides - 1) ? (counter.i = 0) : counter.i++;
    }

    return counter.i;
}

clickOnArrow = (arrow) => {
    let banner = document.getElementById("the_banner");
    let banner_tagLine = document.getElementById("carousel-tagline");

    let j = counter(arrow);

    let imgSrc = "./assets/images/slideshow/" + slides[j].image;

    banner.setAttribute('src', imgSrc);
    banner_tagLine.innerHTML = slides[j].tagLine;

    // Mise à jour des points
    switchSelectedDot(j);
};

let previousImg = document.querySelector('.arrow_left');
previousImg.addEventListener('click', function () {
	let x = clickOnArrow(previousImg);
});

let nextImg = document.querySelector('.arrow_right');
nextImg.addEventListener('click', function () {
	clickOnArrow(nextImg);
});