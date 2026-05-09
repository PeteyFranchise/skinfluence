(function () {
	const initSection = (section) => {
		let parent;
		if (document.currentScript) {
			parent = document.currentScript.parentElement;
		} else {
			parent = section;
		}

		let swiperMulticolumn;
		const multicolumnSwipeEnabled = parent.querySelector(
			".swiper--multicolumn",
		);

		const initSlider = () => {
			if (multicolumnSwipeEnabled) {
				const slides = parent.querySelectorAll(".multicolumn-list__item");

				slides.forEach((slide) => {
					slide.classList.add("swiper-slide");
				});

				const btnPrev = multicolumnSwipeEnabled.querySelector(
					".swiper-button-prev",
				);
				const btnNext = multicolumnSwipeEnabled.querySelector(
					".swiper-button-next",
				);
				const pagination =
					multicolumnSwipeEnabled.querySelector(".swiper-pagination");

				swiperMulticolumn = new Swiper(multicolumnSwipeEnabled, {
					loop: true,
					pagination: {
						el: pagination,
						type: 'fraction',
					},
					navigation: {
						nextEl: btnNext,
						prevEl: btnPrev,
					},
					simulateTouch: true,
					allowTouchMove: true,
					watchSlidesProgress: true,
					preventInteractionOnTransition: true,
					mousewheel: {
						forceToAxis: true,
					},
				})
			}
		};

		const destroySlider = () => {
			const slides = parent.querySelectorAll(".multicolumn-list__item");

			swiperMulticolumn.destroy(true, true);
			swiperMulticolumn = null;
			slides.forEach((slide) => {
				slide.removeAttribute("style");
				slide.classList.remove("swiper-slide");
			});
		};

		const initMulticolumn = () => {
			const sectionResizeObserver = new ResizeObserver((entries) => {
				const [entry] = entries;

				if (entry.contentRect.width < 991 && multicolumnSwipeEnabled) {
					initSlider();
				} else if (swiperMulticolumn) {
					destroySlider();
				}
			});

			sectionResizeObserver.observe(parent);
		};

		if (swiperMulticolumn) {
			destroySlider();
		}

		initMulticolumn();
		initSlider();
	};

	initSection();

	document.addEventListener("shopify:section:load", function (section) {
		initSection(section.target);
	});
})();
