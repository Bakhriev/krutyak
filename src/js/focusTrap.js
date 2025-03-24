export const focusTrap = (parent, withArrows = false) => {
	if (!parent) return () => {};

	const selectors =
		"a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])";

	const getFocusableElements = () => {
		return [...parent.querySelectorAll(selectors)].filter(
			el =>
				!el.disabled &&
				el.offsetParent !== null &&
				getComputedStyle(el).visibility !== "hidden" &&
				getComputedStyle(el).display !== "none"
		);
	};

	const focusableElements = getFocusableElements();
	if (focusableElements.length === 0) return () => {};

	let currentIndex = focusableElements.findIndex(
		el => el === document.activeElement
	);
	if (currentIndex === -1) currentIndex = 0;

	const focusCurrentElement = () => {
		focusableElements[currentIndex].focus();
	};

	focusCurrentElement();

	const handleKeyDown = e => {
		if (e.key === "Tab") {
			e.preventDefault();
			currentIndex += e.shiftKey ? -1 : 1;

			if (currentIndex >= focusableElements.length) {
				currentIndex = 0;
			} else if (currentIndex < 0) {
				currentIndex = focusableElements.length - 1;
			}

			focusCurrentElement();
		}

		if (withArrows && (e.key === "ArrowDown" || e.key === "ArrowRight")) {
			e.preventDefault();
			currentIndex = (currentIndex + 1) % focusableElements.length;
			focusCurrentElement();
		}

		if (withArrows && (e.key === "ArrowUp" || e.key === "ArrowLeft")) {
			e.preventDefault();
			currentIndex =
				(currentIndex - 1 + focusableElements.length) %
				focusableElements.length;
			focusCurrentElement();
		}
	};

	parent.addEventListener("keydown", handleKeyDown);

	// Return cleanup function
	return () => {
		parent.removeEventListener("keydown", handleKeyDown);
	};
};
