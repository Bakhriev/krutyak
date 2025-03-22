const conceptsCurrent = document.querySelector(
	'.concepts__slider-wrapper [data-progress="current"]'
);
const conceptsAll = document.querySelector(
	'.concepts__slider-wrapper [data-progress="all"]'
);

const conceptsSlider = new Swiper(".concepts__slider", {
	spaceBetween: 20,
	navigation: {
		nextEl: ".concepts__slider-wrapper .slider-controls__next",
		prevEl: ".concepts__slider-wrapper .slider-controls__prev",
	},
});

// On first Init
setControlsProgress(conceptsSlider.activeIndex, conceptsCurrent, conceptsAll);

conceptsSlider.on("slideChange", () => {
	setControlsProgress(conceptsSlider.activeIndex, conceptsCurrent, conceptsAll);
});

function setControlsProgress(currentSlide, current, all) {
	current.textContent = currentSlide + 1;
	all.textContent = conceptsSlider.slides.length;
}

Fancybox.bind('[data-fancybox="concepts-gallery"]', {});
