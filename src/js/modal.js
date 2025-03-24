import { focusTrap } from "./focusTrap.js";

export function initModal(modalSelector, triggersSelector) {
	const modal = document.querySelector(modalSelector);
	const triggers = document.querySelectorAll(triggersSelector);
	let cleanup;

	// For focus on leave
	let entryElement = null;

	if (!modal) return;

	const destroyer = modal.querySelector("[data-destroyer]");

	function show() {
		modal.classList.add("show");
		entryElement = document.activeElement;

		cleanup = focusTrap(modal, true);

		window.addEventListener("keydown", onPressEscape);
	}

	function hide() {
		modal.classList.remove("show");

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
