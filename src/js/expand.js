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
