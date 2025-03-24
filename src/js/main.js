import "./tab.js";
import "./expand.js";
import "./sliders.js";
import "./masks.js";
import "./modal.js";

Fancybox.bind('[data-fancybox="concepts-gallery"]', {});
Fancybox.bind('[data-fancybox="content-card--1-gallery"]', {});
Fancybox.bind('[data-fancybox="content-card--2-gallery"]', {});

AOS.init({
	duration: 600,
	once: true,
});
