(function () {
	const initSliders = (section) => {
		let  productSliderSection;
    if (document.currentScript) {
      productSliderSection = document.currentScript.parentElement;
    }
    else {
      productSliderSection = section;
    }
		const productSliders = productSliderSection.querySelector('.product-slider__swiper-product');
		const imageSliders = productSliderSection.querySelector('.product-slider__swiper-image');
		const prevArrows = productSliderSection.querySelector('.product-slider__buttons .swiper-btn--prev');
		const nextArrows = productSliderSection.querySelector('.product-slider__buttons .swiper-btn--next');
		const pagination = productSliderSection.querySelector('.product-slider__pagination');

		let productSlider;
		if (productSliders) {
			productSlider = new Swiper(productSliders, {
				slidesPerView: 1,
				loop: true,
				effect: 'fade',
				fadeEffect: {
					crossFade: true,
				},
				simulateTouch: true,
				allowTouchMove: true,
				watchSlidesProgress: true,
				preventInteractionOnTransition: true,
				mousewheel: {
					forceToAxis: true,
				},
				navigation: {
					nextEl: nextArrows,
					prevEl: prevArrows,
				},
				pagination: {
					el: pagination,
					clickable: true,
					type: 'bullets',
				},
			})
		}
			
		let imageSlider;
		if (imageSliders) {
			imageSlider = new Swiper(imageSliders, {
				slidesPerView: 1,
				loop: true,
				spaceBetween: -1,
				slidesOffsetAfter: 0,
				slidesOffsetBefore: 1,
				simulateTouch: true,
				allowTouchMove: true,
				watchSlidesProgress: true,
				preventInteractionOnTransition: true,
				mousewheel: {
					forceToAxis: true,
				},
			})
		}

		if (productSliders && imageSliders) {
			productSlider.on('slideNextTransitionStart', function() {
				imageSlider.slideNext(300, false);
				productSlider.pagination.render();
        productSlider.pagination.update();
			});

			productSlider.on('slidePrevTransitionStart', function() {
				imageSlider.slidePrev(300, false);
				productSlider.pagination.render();
        productSlider.pagination.update();
			});

			imageSlider.on('slideNextTransitionStart', function() {
				productSlider.slideNext(300, false);
				productSlider.pagination.render();
        productSlider.pagination.update();
			});

			imageSlider.on('slidePrevTransitionStart', function() {
				productSlider.slidePrev(300, false);
				productSlider.pagination.render();
        productSlider.pagination.update();
			});
		}
	}

	const scaleImage = (section) => {

		document.addEventListener('scroll', function () {
			const scroll = window.pageYOffset || document.documentElement.scrollTop;
			const elOffset = section.offsetTop;	

			section.querySelectorAll('.product-slider__image-wrapper').forEach(image => {
				image.style.transform = `scale3d(${(100 - (scroll - elOffset)/60)/100}, ${(100 - (scroll - elOffset)/60)/100}, ${(100 - (scroll - elOffset)/60)/100})`;
			})
		});

	}

	const resizeproductSlider = (section) => {
		let  productSliderSection;
    if (document.currentScript) {
      productSliderSection = document.currentScript.parentElement;
    }
    else {
      productSliderSection = section;
    }

		if (productSliderSection) {
			const sectionResizeObserver = new ResizeObserver((entries) => {

				const [entry] = entries;

				setTimeout(function(){
					scaleImage(productSliderSection);
				}, 100);
			});

			sectionResizeObserver.observe(productSliderSection);
		}
	}
	
	initSliders();
	resizeproductSlider();

	document.addEventListener('shopify:section:load', function (section) {
		initSliders(section.target);
		resizeproductSlider(section.target);
	})

	document.addEventListener('shopify:section:reorder', function (section) {
		initSliders(section.target);
		resizeproductSlider(section.target);
	})
})();