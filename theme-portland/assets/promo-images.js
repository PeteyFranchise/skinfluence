(function () {
	const promoSections = document.querySelectorAll('.promo-images-section');


	const promoSectionObserver = new ResizeObserver(entries => {
		const [entry] = entries;

		let arr = [-30, -150, 70];

		if (entry.contentRect.width < 990) {
			arr = [-30, -30, 30];
		}

		promoSections.forEach(section => {
			const images = section.querySelectorAll('.js-parallax');
			images.forEach((image, i) => {
				image.setAttribute('data-parallax-property-value', arr[i]);
			});
		})
	});

	promoSections.forEach(section => {
		promoSectionObserver.observe(section);
	})


})();
