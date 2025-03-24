const conceptsSlider = new Swiper(".concepts__slider", {
	spaceBetween: 20,
	navigation: {
		nextEl: ".concepts__slider-wrapper .slider-controls__next",
		prevEl: ".concepts__slider-wrapper .slider-controls__prev",
	},

	on: {
		slideChange: createVisibleCounter(
			".concepts__slider-controls-wrapper [data-progress='current']",
			".concepts__slider-controls-wrapper [data-progress='all']"
		),
		init: createVisibleCounter(
			".concepts__slider-controls-wrapper [data-progress='current']",
			".concepts__slider-controls-wrapper [data-progress='all']"
		),
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

// Функция для обновления счетчика видимых слайдов
function createVisibleCounter(currentSelector, allSelector) {
	return function () {
		const currentElement = document.querySelector(currentSelector);
		const allElement = document.querySelector(allSelector);

		if (!currentElement || !allElement) return;

		const swiper = this;
		const totalSlides = swiper.slides.length;

		// Пытаемся найти видимые слайды
		const visibleSlides = Array.from(swiper.slides).filter(slide =>
			slide.classList.contains("swiper-slide-visible")
		);

		// Если есть видимые слайды - берём последний, если нет - берём активный
		const lastIndex =
			visibleSlides.length > 0
				? Array.from(swiper.slides).indexOf(
						visibleSlides[visibleSlides.length - 1]
					)
				: swiper.activeIndex;

		currentElement.textContent = lastIndex + 1;
		allElement.textContent = totalSlides;
	};
}

const contentCardSlider1 = new Swiper(
	".content-card--1 .content-card__slider",
	{
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 15,
		watchSlidesProgress: true, // Важно для определения видимых слайдов

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
			slideChange: createVisibleCounter(
				".content-card--1 [data-progress='current']",
				".content-card--1 [data-progress='all']"
			),
			init: createVisibleCounter(
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
		watchSlidesProgress: true, // Важно для определения видимых слайдов

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
			slideChange: createVisibleCounter(
				".content-card--2 [data-progress='current']",
				".content-card--2 [data-progress='all']"
			),
			init: createVisibleCounter(
				".content-card--2 [data-progress='current']",
				".content-card--2 [data-progress='all']"
			),
		},
	}
);
