(() => {
	const initSliders = () => {
		const slideshows = document.querySelectorAll(".slideshow__swiper");
		slideshows.forEach((slideshow) => {
			const autoplay =
				slideshow.getAttribute("data-autoplay") === "true" ? true : false;
			const slideshowSwiper = new Swiper(slideshow, {
				navigation: {
					nextEl: '.slideshow__button--next',
					prevEl: '.slideshow__button--prev',
				},
				simulateTouch: true,
				allowTouchMove: true,
				watchSlidesProgress: true,
				preventInteractionOnTransition: true,
				mousewheel: {
					forceToAxis: true,
				},
				pagination: {
					el: '.slideshow__navigation',
					type: 'fraction',
				},
				loop: true,
				autoHeight: false,
			})
			if (autoplay) {
				slideshowSwiper.autoplay.run();
				slideshowSwiper.autoplay.running = true;
				slideshow.addEventListener("mouseenter", () => {
					slideshowSwiper.autoplay.pause();
				});
				slideshow.addEventListener("mouseleave", () => {
					slideshowSwiper.autoplay.run();
				});
			}
		});
	};
	initSliders();

	document.addEventListener("shopify:section:load", function () {
		initSliders();
	});
})();
