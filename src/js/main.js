import { initModal } from "./modal.js";

// Sliders
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

// Инициализация слайдеров
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

//
//
//
//
//
//
//
//
//

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

		const TEXT = {
			expanded: "Скрыть",
			collapsed: "Полное описание",
		};

		let isInitiallyExpanded = container.dataset.expanded === "true";

		if (isInitiallyExpanded) {
			btnText.textContent = TEXT.expanded;
		}

		btn.addEventListener("click", () => {
			isInitiallyExpanded = container.dataset.expanded === "true";

			if (isInitiallyExpanded) {
				btnText.textContent = TEXT.collapsed;
				container.dataset.expanded = "false";
			} else {
				btnText.textContent = TEXT.expanded;
				container.dataset.expanded = "true";
			}
		});
	});
};
expandInit();

//
//
//
//
//
//
//
//
//

// Fancy Init
Fancybox.bind('[data-fancybox="concepts-gallery"]', {});
Fancybox.bind('[data-fancybox="content-card--1-gallery"]', {});
Fancybox.bind('[data-fancybox="content-card--2-gallery"]', {});

//
//
//
//
//
//
//
//

// Imask
const mask = new IMask(document.getElementById("user-phone"), {
	mask: "+7(000)000-00-00",
	lazy: true,
});

const mask2 = new IMask(document.getElementById("user-phone-2"), {
	mask: "+7(000)000-00-00",
	lazy: true,
});

//
//
//
//
//
//
//
//

// Aos animations
AOS.init({
	duration: 600,
	once: true,
});

//
//
//
//
//
//
//
//

// Модалка с текстом Спасибо! Мы получили вашу заявку и скоро с Вами свяжемся
const thanksModal = initModal('[data-modal="thanks-modal"]');

// Форма в конце страницы
const contactsForm = document.querySelector('[data-form="contacts-form"]');
contactsForm.addEventListener("submit", e => {
	e.preventDefault();
	const btn = contactsForm.querySelector(".form__btn");

	btn.classList.add("loading");

	//
	setTimeout(() => {
		thanksModal.show();
		contactsForm.reset();

		btn.classList.remove("loading");
	}, 700);
});

// Инициализация модалки с формой
const callbackModal = initModal(
	'[data-modal="callback-modal"]',
	'[data-trigger="callback-modal"]'
);

const callbackForm = document.querySelector('[data-form="callback-form"]');
callbackForm.addEventListener("submit", e => {
	e.preventDefault();
	const btn = callbackForm.querySelector(".form__btn");

	btn.classList.add("loading");

	//
	setTimeout(() => {
		thanksModal.show();
		callbackForm.reset();
		callbackModal.hide();

		btn.classList.remove("loading");
	}, 700);
});
