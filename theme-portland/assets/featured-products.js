(function () {
  const initSliders = () =>  {
    const featuredProductsSlidersVertical = document.querySelectorAll('.swiper-featured-products--vertical');
    const featuredProductsSlidersHorizontal = document.querySelectorAll('.swiper-featured-products--horizontal');
    const prevArrowsVertical = document.querySelectorAll('.swiper-featured-products--vertical + .featured-products__buttons .swiper-btn--prev');
    const nextArrowsVertical = document.querySelectorAll('.swiper-featured-products--vertical + .featured-products__buttons .swiper-btn--next');
    const prevArrowsHorizontal = document.querySelectorAll('.swiper-featured-products--horizontal + .featured-products__buttons .swiper-btn--prev');
    const nextArrowsHorizontal = document.querySelectorAll('.swiper-featured-products--horizontal + .featured-products__buttons .swiper-btn--next');
    const paginationVertical = document.querySelectorAll('.swiper-featured-products--vertical .swiper-bullets');
    const paginationHorizontal = document.querySelectorAll('.swiper-featured-products--horizontal .swiper-bullets');

    featuredProductsSlidersVertical.forEach((slider, index) => {
      const swiperFeaturedProductsVertical = new Swiper(slider, {
				slidesPerView: '1',
				spaceBetween: 24,
				watchOverflow: true,
				dynamicBullets: true,
				pagination: {
					el: paginationVertical[index],
					clickable: true,
					type: 'bullets',
				},
				navigation: {
					nextEl: nextArrowsVertical[index],
					prevEl: prevArrowsVertical[index],
				},
				breakpoints: {
					750: {
						slidesPerView: '2',
						slidesPerGroup: 2,
					},
					1200: {
						slidesPerView: '3',
						slidesPerGroup: 3,
					},
				},
				simulateTouch: true,
				allowTouchMove: true,
				watchSlidesProgress: true,
				preventInteractionOnTransition: true,
				mousewheel: {
					forceToAxis: true,
				},
			})

      swiperFeaturedProductsVertical.on('slideChange', function() {
        swiperFeaturedProductsVertical.pagination.render();
        swiperFeaturedProductsVertical.pagination.update();
      });
    });

    featuredProductsSlidersHorizontal.forEach((slider, index) => {
      const swiperFeaturedProductsHorizontal = new Swiper(slider, {
				slidesPerView: '1',
				spaceBetween: -1,
				watchOverflow: true,
				slidesOffsetAfter: 0,
				slidesOffsetBefore: 1,
				pagination: {
					el: paginationHorizontal[index],
					clickable: true,
					type: 'bullets',
				},
				navigation: {
					nextEl: nextArrowsHorizontal[index],
					prevEl: prevArrowsHorizontal[index],
				},
				breakpoints: {
					989: {
						slidesPerView: '2',
						slidesPerGroup: 2,
					},
					1359: {
						slidesPerView: '3',
						slidesPerGroup: 3,
					},
				},
				simulateTouch: true,
				allowTouchMove: true,
				watchSlidesProgress: true,
				preventInteractionOnTransition: true,
				mousewheel: {
					forceToAxis: true,
				},
			})

      swiperFeaturedProductsHorizontal.on('slideChange', function() {
        swiperFeaturedProductsHorizontal.pagination.render();
        swiperFeaturedProductsHorizontal.pagination.update();
      });
    })
  }

  const toggleButton = () => {
    const swiperPagination = document.querySelectorAll('.swiper-pagination--products.swiper-bullets');
    if (swiperPagination) {
      swiperPagination.forEach(element => {
        if (element.querySelectorAll('.swiper-pagination-bullet').length <=1 ) {
          element.parentElement.parentElement.querySelector('.featured-products__buttons').classList.add('hide');
        }
        else {
          element.parentElement.parentElement.querySelector('.featured-products__buttons').classList.remove('hide');
        }
      });
    }
  }

  const calcHeight = () => {
    const featuredProductsSectionBottom = document.querySelectorAll('.featured-products--bottom');
    featuredProductsSectionBottom.forEach(section => {
      const card = section.querySelector('.featured-products__products-item');
      const cardWrapper = section.querySelector('.featured-products__products-wrapper');
      const featuredProducts = section.querySelector('.featured-products__products');
      if (section && card) {
        const cardHeight = card.getBoundingClientRect().height;
        const cardWrapperHeight = cardWrapper.getBoundingClientRect().height;
        const bullets =  section.querySelector('.swiper-pagination--products');

        let bulletsHeight = 0;
        if (bullets) {
          bulletsHeight =  bullets.getBoundingClientRect().height + parseFloat(window.getComputedStyle(bullets, null).getPropertyValue("margin-top"));
        }
        
        let featuredProductsHeight = featuredProducts.getBoundingClientRect().height;
        const marginTop = parseFloat(window.getComputedStyle(featuredProducts, null).getPropertyValue("margin-top"));
        featuredProductsHeight = featuredProductsHeight + marginTop;

        section.style.paddingBottom = '0';
        section.style.marginBottom = '0';
        section.style.paddingBottom = `${cardHeight / 2 + featuredProductsHeight - cardHeight - bulletsHeight}px`;
        section.style.marginBottom = `${cardHeight / 2 + cardWrapperHeight - featuredProductsHeight}px`;
      }
    });
	};

  const hoverProductList = () => {
    document.querySelectorAll('.featured-products__products-wrapper').forEach(element => {
      const productList = element.querySelector('.featured-products__products-list');
      productList.addEventListener('mouseenter', (event) => {
        event.target.parentElement.parentElement.querySelector('.featured-products__buttons').classList.add('active');
      });

      productList.addEventListener('mouseleave', (event) => {
        if (event.relatedTarget != event.target.parentElement.parentElement.querySelector('.featured-products__buttons .swiper-btn--next') 
          && event.relatedTarget != event.target.parentElement.parentElement.querySelector('.featured-products__buttons .swiper-btn--prev')) {
          event.target.parentElement.parentElement.querySelector('.featured-products__buttons').classList.remove('active');
        }
      });

      element.querySelectorAll('.swiper-btn').forEach(btn => {
        btn.addEventListener('mouseleave', event => {
          event.target.parentElement.classList.remove('active');
        })
      })
    })
  }

  const positionButtons = () => {
    const featuredProductsSection = document.querySelectorAll('.featured-products');
    featuredProductsSection.forEach(section => {
      const cardItemHeight = section.querySelector('.featured-products__products-item').getBoundingClientRect().height;
      section.querySelector('.featured-products__buttons').style.top = cardItemHeight / 2 +'px';
    })
  }

  const resizeFeaturedProducts = () => {
    const featuredProductsSection = document.querySelectorAll('.featured-products-section');

    const sectionResizeObserver = new ResizeObserver((entries) => {  
      initSliders();
      toggleButton();
      setTimeout(function () {
        calcHeight();
      }, 500);
      positionButtons();
      hoverProductList();
    });

    featuredProductsSection.forEach(section => {  
      sectionResizeObserver.observe(section);
    });
  }


  document.addEventListener('shopify:section:load', function () {
    resizeFeaturedProducts();
  });

  resizeFeaturedProducts();
})();