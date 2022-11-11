// Grab elements from DOM
const carousel = document.querySelectorAll(".container img");

const backwards = document.querySelector("#prev-btn");
const forward = document.querySelector("#next-btn");

let slideIndex = 0;
let length = carousel.length - 1;

addImage(0); // initial image

function addImage(index) {
	carousel.forEach((image) => {
		image.style.opacity = 0;
	});

	carousel[index].style.opacity = 1;
}

// #prev-btn
backwards.addEventListener("click", () => {
	slideIndex--;

	if (slideIndex < 0) {
		slideIndex = length;
	}

	//   slideIndex is now !
	addImage(slideIndex);
});

// #next-btn
forward.addEventListener("click", () => {
	slideIndex++;

	if (slideIndex > length) {
		slideIndex = 0;
	}

	addImage(slideIndex);
});
