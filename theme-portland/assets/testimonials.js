(function () {
	const testimonials = (isUpdate) => {
		const testimonialsSections = document.querySelectorAll('.testimonials-section');
		const cardsSliders = document.querySelectorAll('.testimonials__cards');
		const textSliders = document.querySelectorAll('.testimonials__slider');
		const prevArrows = document.querySelectorAll('.testimonials__button--prev');
		const nextArrows = document.querySelectorAll('.testimonials__button--next');
		const navigation = document.querySelectorAll('.testimonials__navigation');

		const initSliders = margin => {
			textSliders.forEach((slider, index) => {
				const textSlider = new Swiper(slider, {
					slidesPerView: 1,
					loop: true,
					loopedSlides: loopedSlides,
					simulateTouch: true,
					allowTouchMove: true,
					watchSlidesProgress: true,
					preventInteractionOnTransition: true,
					mousewheel: {
						forceToAxis: true,
					},
					navigation: {
						nextEl: nextArrows[index],
						prevEl: prevArrows[index],
					},
					pagination: {
						el: navigation[index],
						type: 'fraction',
					},
					createElements: true,
					effect: 'fade',
					fadeEffect: {
						crossFade: true,
					},
				})

				const cardSlider = new Swiper(cardsSliders[index], {
					slidesPerView: 1,
					loopedSlides: loopedSlides,
					loopedSlidesLimit: loopedSlides,
					loop: true,
					variableWidth: true,
					effect: 'creative',
					simulateTouch: true,
					allowTouchMove: true,
					watchSlidesProgress: true,
					preventInteractionOnTransition: true,
					mousewheel: {
						forceToAxis: true,
					},
					creativeEffect: {
						limitProgress: loopedSlides - 1,
						prev: {
							opacity: 0,
							translate: [-margin, 0, 0],
						},
						next: {
							translate: [margin, 0, 0],
							scale: 0.94,
						},
					},
				})

				cardSlider.controller.control = textSlider;
				textSlider.controller.control = cardSlider;

				if (isUpdate) {
					setTimeout(function () {
						cardSlider.update();
						textSlider.update();
					}, 800);
				}
			});
		}


		const testimonialsResizeObserver = new ResizeObserver((entries) => {
			const [entry] = entries;

			if (entry.contentRect.width < 991) {
				initSliders(40);
			} else if (entry.contentRect.width > 991) {
				initSliders(110);
			}
		});

		testimonialsSections.forEach(section => {
			testimonialsResizeObserver.observe(section);
		})

	};

	testimonials();

	document.addEventListener('shopify:section:load', function () {
		testimonials(true);
	});

})();
