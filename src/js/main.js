// Sliders
const conceptsSlider = new Swiper(".concepts__slider", {
	spaceBetween: 20,
	navigation: {
		nextEl: ".concepts__slider-wrapper .slider-controls__next",
		prevEl: ".concepts__slider-wrapper .slider-controls__prev",
	},
});

const experienceSlider = new Swiper(".experience__slider", {
	slidesPerView: "auto",
	spaceBetween: 30,

	navigation: {
		nextEl: ".experience__controls .slider-controls__next",
		prevEl: ".experience__controls .slider-controls__prev",
	},
});

const contentCardSlider1 = new Swiper(
	".content-card--1 .content-card__slider",
	{
		slidesPerView: 2,
		spaceBetween: 15,

		breakpoints: {
			481: {
				slidesPerView: 3,
			},
		},

		navigation: {
			nextEl: ".content-card--1 .slider-controls__next",
			prevEl: ".content-card--1 .slider-controls__prev",
		},
	}
);

const contentCardSlider2 = new Swiper(
	".content-card--2 .content-card__slider",
	{
		slidesPerView: 3,
		spaceBetween: 15,

		navigation: {
			nextEl: ".content-card--2 .slider-controls__next",
			prevEl: ".content-card--2 .slider-controls__prev",
		},
	}
);

const conceptsCurrent = document.querySelector(
	'.concepts__slider-wrapper [data-progress="current"]'
);
const conceptsAll = document.querySelector(
	'.concepts__slider-wrapper [data-progress="all"]'
);

// On first Init
setControlsProgress(conceptsSlider.activeIndex, conceptsCurrent, conceptsAll);

conceptsSlider.on("slideChange", () => {
	setControlsProgress(conceptsSlider.activeIndex, conceptsCurrent, conceptsAll);
});

function setControlsProgress(currentSlide, current, all) {
	current.textContent = currentSlide + 1;
	all.textContent = conceptsSlider.slides.length;
}

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

const expandInit = () => {
	const containers = document.querySelectorAll(".expandable-container");

	containers.forEach(container => {
		const btn = container.querySelector(".expandable-container__btn");
		const btnText = btn.querySelector("[data-text]");
		console.log(btnText);

		// For first Init
		let isExpanded = container.dataset.expanded === "true";
		if (isExpanded) {
			btnText.textContent = "Скрыть";
		}

		btn.addEventListener("click", () => {
			isExpanded = container.dataset.expanded === "true";

			if (isExpanded) {
				btnText.textContent = "Полное описание";
				container.dataset.expanded = "false";
			} else {
				btnText.textContent = "Скрыть";
				container.dataset.expanded = "true";
			}
		});
	});
};
expandInit();

// Fancy Init
Fancybox.bind('[data-fancybox="concepts-gallery"]', {});
Fancybox.bind('[data-fancybox="content-card--1-gallery"]', {});
Fancybox.bind('[data-fancybox="content-card--2-gallery"]', {});
