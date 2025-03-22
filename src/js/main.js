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

const tabInit = () => {
	const tabs = document.querySelectorAll("[data-tab]");

	tabs.forEach(tab => {
		const btns = tab.querySelectorAll("[data-tab-btn]");
		const panels = tab.querySelectorAll("[data-tab-panel]");

		btns.forEach(btn => {
			btn.addEventListener("click", () => {
				const id = btn.dataset.id;

				toggler(id);
			});
		});

		const toggler = id => {
			btns.forEach(btn => {
				if (btn.dataset.id === id) {
					btn.dataset.active = "true";
				} else {
					btn.dataset.active = "false";
				}
			});

			panels.forEach(panel => {
				if (panel.dataset.id === id) {
					panel.dataset.active = "true";
				} else {
					panel.dataset.active = "false";
				}
			});
		};
	});
};

tabInit();
