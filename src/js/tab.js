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
