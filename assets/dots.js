/** Display the dots */
let container = document.querySelector("#banner .dots");
let theDiv = "";
for (let i = 0; i < slides.length; i++) {
	if (i !== 0) {
		theDiv += `<div id="` + i + `"class='dot'> </div>`;
	} else if(i === 0) {
		theDiv += `<div id="` + i + `"class='dot dot_selected'> </div>`;
	}
}
container.innerHTML = theDiv;