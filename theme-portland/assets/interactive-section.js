(function () {
	const initMarqueeSlider1 = () => {
		let slider1 = new Swiper('.js-marquee', {
			slidesPerView: 4,
			spaceBetween: 20,
			direction: 'vertical',
			loop: true,
			shortSwipes: false,
			longSwipes: false,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
			},
			simulateTouch: true,
			mousewheel: false,
			freeMode: true,
			speed: 21000,
			breakpoints: {
				0: {
					slidesPerView: 4,
				},
				576: {
					spaceBetween: 30,
				},
				750: {
					spaceBetween: 50,
				},
				990: {
					spaceBetween: 70,
				},
				1100: {
					spaceBetween: 80,
					slidesPerView: 2,
				},
			},
		})
	}

	const initMarqueeSlider2 = () => {
		let slider2 = new Swiper('.js-marquee-reverse', {
			slidesPerView: 4,
			spaceBetween: 20,
			direction: 'vertical',
			loop: true,
			shortSwipes: false,
			longSwipes: false,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
			},
			simulateTouch: true,
			mousewheel: false,
			freeMode: true,
			speed: 21000,
			breakpoints: {
				0: {
					slidesPerView: 4,
				},
				576: {
					spaceBetween: 30,
				},
				750: {
					spaceBetween: 50,
				},
				990: {
					spaceBetween: 70,
				},
				1100: {
					spaceBetween: 80,
					slidesPerView: 2,
				},
			},
		})
	}

	let w = 0;

	const setMarqueeAnimation = () => {
		initMarqueeSlider1();
		initMarqueeSlider2();
	};

	document.addEventListener('shopify:section:load', () => {
		setTimeout(() => {
			setMarqueeAnimation();

			w = window.innerWidth;
		}, 100);
	});

	/* Update swiper only when resize in x axis */

	window.addEventListener('resize', function () {
		if (w !== window.innerWidth) {
			$('.js-marquee').each(function () {
				this.swiper?.destroy();
			});
			$('.js-marquee-reverse').each(function () {
				this.swiper?.destroy();
			});
			setMarqueeAnimation();

			w = window.innerWidth;
		}
	});

	document.addEventListener('visibilitychange', function() {
		if (!document.hidden) {
			$('.js-marquee').each(function () {
				this.swiper?.destroy();
			});
			$('.js-marquee-reverse').each(function () {
				this.swiper?.destroy();
			});
			setMarqueeAnimation();
		}
	});

	setTimeout(() => {
		setMarqueeAnimation();

		w = window.innerWidth;
	}, 100);
})();