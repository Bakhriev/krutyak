import { focusTrap } from "./focusTrap.js";

function initModal(modalSelector, triggersSelector) {
	const modal = document.querySelector(modalSelector);
	const triggers = document.querySelectorAll(triggersSelector);
	const body = document.body;
	let cleanup;

	// For focus on leave
	let entryElement = null;

	if (!modal) return;

	const destroyer = modal.querySelector("[data-destroyer]");

	function show() {
		modal.classList.add("show");
		body.classList.add("scroll-lock");
		entryElement = document.activeElement;

		cleanup = focusTrap(modal, true);

		window.addEventListener("keydown", onPressEscape);
	}

	function hide() {
		modal.classList.remove("show");
		body.classList.remove("scroll-lock");

		entryElement.focus();
		window.removeEventListener("keydown", onPressEscape);
		cleanup();
	}

	function onPressEscape(e) {
		if (e.key === "Escape") hide();
	}

	function init() {
		destroyer?.addEventListener("click", hide);

		modal.addEventListener("click", e => {
			if (e.target === modal) hide();
		});

		if (triggers.length) {
			triggers.forEach(trigger => {
				trigger.addEventListener("click", show);
			});
		}
	}

	init();

	return { show, hide };
}

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
