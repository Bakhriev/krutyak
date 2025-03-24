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

	pagination: {
		el: ".experience .swiper-pagination",
		clickable: true,
	},
});

const contentCardSlider1 = new Swiper(
	".content-card--1 .content-card__slider",
	{
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 15,

		breakpoints: {
			481: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
		},

		navigation: {
			nextEl: ".content-card--1 .slider-controls__next",
			prevEl: ".content-card--1 .slider-controls__prev",
		},

		on: {
			slideChange: updateCounter(
				conceptsSlider,
				".content-card--1 [data-progress='current']",
				".content-card--1 [data-progress='all']"
			),
			init: updateCounter(
				conceptsSlider,
				".content-card--1 [data-progress='current']",
				".content-card--1 [data-progress='all']"
			),
		},
	}
);

const contentCardSlider2 = new Swiper(
	".content-card--2 .content-card__slider",
	{
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 15,

		breakpoints: {
			481: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
		},

		navigation: {
			nextEl: ".content-card--2 .slider-controls__next",
			prevEl: ".content-card--2 .slider-controls__prev",
		},

		on: {
			slideChange: updateCounter(
				conceptsSlider,
				".content-card--2 [data-progress='current']",
				".content-card--2 [data-progress='all']"
			),
			init: updateCounter(
				conceptsSlider,
				".content-card--2 [data-progress='current']",
				".content-card--2 [data-progress='all']"
			),
		},
	}
);

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

// Imask
const mask = new IMask(document.getElementById("user-phone"), {
	mask: "+7(000)000-00-00",
	lazy: true,
});

AOS.init({
	duration: 600,
	once: true,
	offset: 200,
});

function updateCounter(slider, currentSelector, allSelector) {
	const totalSlides = slider.slides.length; // Общее количество слайдов
	const slidesPerView = slider.params.slidesPerView; // Видимые слайды
	const currentStart = slider.realIndex + 1; // Первый видимый слайд
	const currentEnd = Math.min(currentStart + slidesPerView - 1, totalSlides); // Последний видимый слайд

	const current = document.querySelector(currentSelector);
	const all = document.querySelector(allSelector);

	current.textContent = `${currentStart}-${currentEnd}`;
	all.textContent = totalSlides;
}
