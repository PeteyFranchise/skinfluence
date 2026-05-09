(function () {
	document.addEventListener('shopify:section:load', function () {
		const slider = new Swiper('.js-media-list', getSliderSettings);

		const subSlider = new Swiper('.js-media-sublist', getSubSliderProductSettings);

		setTimeout(function () {
			slider.update();
			subSlider.update();
		}, 100)
	});

  const initProductAccordion = () => {
		$('.about__accordion-button').off('click').click(function() {
			if (!$(this).hasClass('active')) {
				$('.about__accordion-button.active').removeClass('active');
				$(this).addClass('active');
				$('.about__accordion-text').stop().slideUp(300);
				$(this).siblings('.about__accordion-text').eq($(this).index()).stop().slideDown(300);
			} else {
				$(this).removeClass('active');
				$(this).siblings('.about__accordion-text').stop().slideUp(300);
			}
		});
	};

	document.addEventListener('shopify:section:load', function () {
		initProductAccordion();
	});

	initProductAccordion();
})();
