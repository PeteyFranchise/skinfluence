function getSliderSettings() {
	return {
		slidesPerView: 1,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		simulateTouch: true,
		allowTouchMove: true,
		watchSlidesProgress: true,
		preventInteractionOnTransition: true,
		mousewheel: {
			forceToAxis: true,
		},
	};
}

function getSubSliderProductSettings() {
	return {
		slidesPerView: "auto",
		direction: "vertical",
		navigation: false,
		simulateTouch: true,
		allowTouchMove: true,
		watchSlidesProgress: true,
		preventInteractionOnTransition: true,
		mousewheel: {
			forceToAxis: true,
		},
	};
}

const sliderInit = (isUpdate) => {
	if (
		document.querySelectorAll(".js-media-list") &&
		document.querySelectorAll(".js-media-list").length > 0
	) {
		document.querySelectorAll(".js-media-list").forEach((elem, index) => {
			let slider = new Swiper(elem, {
				slidesPerView: 1,
				autoHeight: true,
				navigation: false,
				navigation: {
					nextEl: '.swiper-btn--next',
					prevEl: '.swiper-btn--prev',
				},
				simulateTouch: true,
				allowTouchMove: true,
				watchSlidesProgress: true,
				preventInteractionOnTransition: true,
				mousewheel: {
					forceToAxis: true,
				},
				thumbs: {
					swiper:
						document.querySelectorAll('.js-media-sublist').length > 0
							? document.querySelectorAll('.js-media-sublist')[index]?.swiper
							: '',
				},
				on: {
					slideChangeTransitionStart: function () {
						/*document
							.querySelectorAll(".js-media-sublist")[index]
							.swiper.slideTo(
								document.querySelectorAll(".js-media-list")[index].swiper.activeIndex,
							);*/
					},
					slideChange: function () {
						window.pauseAllMedia()
						this.params.noSwiping = false
					},
					slideChangeTransitionEnd: function () {
						if (this.slides[this.activeIndex].querySelector('model-viewer')) {
							this.slides[this.activeIndex]
								.querySelector('.shopify-model-viewer-ui__button--poster')
								.removeAttribute('hidden')
						}
					},
					touchStart: function (s, e) {
						if (this.slides[this.activeIndex].querySelector('model-viewer')) {
							if (
								!this.slides[this.activeIndex]
									.querySelector('model-viewer')
									.classList.contains('shopify-model-viewer-ui__disabled')
							) {
								this.params.noSwiping = true
								this.params.noSwipingClass = 'swiper-slide'
							}
						}
					},
				},
			})

			if (isUpdate) {
				setTimeout(function () {
					slider.update();
				}, 800);
			}
		})
	}
};

const subSliderInit = (isUpdate) => {
	if (
		document.querySelectorAll(".js-media-sublist") &&
		document.querySelectorAll(".js-media-sublist").length > 0
	) {
		document.querySelectorAll(".js-media-sublist").forEach((elem, index) => {
			let subSlider = new Swiper(elem, {
				centeredSlides: true,
				centeredSlidesBounds: true,
				slideToClickedSlide: true,
				watchSlidesProgress: true,
				updateOnWindowResize: true,
				slidesPerView: 3,
				spaceBetween: 8,
				direction: 'horizontal',
				navigation: false,
				freeMode: false,
				on: {
					afterInit: function () {
						if (window.matchMedia('(min-width: 1100px)').matches) {
							if (this.el.querySelector('.swiper-wrapper').scrollHeight > 586) {
								this.el.classList.add('delimiter')
							} else {
								this.el.classList.remove('delimiter')
							}
						}
					},
					touchEnd: function (s, e) {
						let range = 5
						let diff = (s.touches.diff = s.isHorizontal()
							? s.touches.currentX - s.touches.startX
							: s.touches.currentY - s.touches.startY)
						if (diff < range || diff > -range) s.allowClick = true

						setTimeout(() => {
							this.el
								.closest('.product__media-list-wrapper')
								.querySelector('.js-media-list')
								.swiper.slideTo(this.clickedIndex)
						}, 100)
					},
				},
				/*transitionStart: function () {
					document
						.querySelectorAll(".js-media-list")[index]
						.swiper.slideTo(
							document.querySelectorAll(".js-media-sublist")[index].swiper.activeIndex,
						);
				},*/
				breakpoints: {
					1100: {
						direction: 'vertical',
						slidesPerView: 'auto',
						centeredSlides: false,
						allowTouchMove: false,
					},
				},
			})

			if (isUpdate) {
				setTimeout(function () {
					subSlider.update();
				}, 800);
			}
		})
	}
};

function getFocusableElements(container) {
	return Array.from(
		container.querySelectorAll(
			"summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe",
		),
	);
}

document.querySelectorAll('[id^="Details-"] summary').forEach((summary) => {
	summary.setAttribute("role", "button");
	summary.setAttribute("aria-expanded", "false");

	if (summary.nextElementSibling.getAttribute("id")) {
		summary.setAttribute("aria-controls", summary.nextElementSibling.id);
	}

	summary.addEventListener("click", (event) => {
		event.currentTarget.setAttribute(
			"aria-expanded",
			!event.currentTarget.closest("details").hasAttribute("open"),
		);
	});

	if (summary.closest("header-drawer")) return;
	summary.parentElement.addEventListener("keyup", onKeyUpEscape);
});

function onKeyUpEscape(event) {
	if (event.code.toUpperCase() !== "ESCAPE") return;

	const openDetailsElement = event.target.closest("details[open]");
	if (!openDetailsElement) return;

	const summaryElement = openDetailsElement.querySelector("summary");
	openDetailsElement.removeAttribute("open");
	summaryElement.setAttribute("aria-expanded", false);
	summaryElement.focus();
}

const trapFocusHandlers = {};

function trapFocus(container, elementToFocus = container) {
	var elements = getFocusableElements(container);
	var first = elements[0];
	var last = elements[elements.length - 1];

	removeTrapFocus();

	trapFocusHandlers.focusin = (event) => {
		if (
			event.target !== container &&
			event.target !== last &&
			event.target !== first
		)
			return;

		document.addEventListener("keydown", trapFocusHandlers.keydown);
	};

	trapFocusHandlers.focusout = function () {
		document.removeEventListener("keydown", trapFocusHandlers.keydown);
	};

	trapFocusHandlers.keydown = function (event) {
		if (event.code.toUpperCase() !== "TAB") return; // If not TAB key
		// On the last focusable element and tab forward, focus the first element.
		if (event.target === last && !event.shiftKey) {
			event.preventDefault();
			first.focus();
		}

		//  On the first focusable element and tab backward, focus the last element.
		if (
			(event.target === container || event.target === first) &&
			event.shiftKey
		) {
			event.preventDefault();
			last.focus();
		}
	};

	document.addEventListener("focusout", trapFocusHandlers.focusout);
	document.addEventListener("focusin", trapFocusHandlers.focusin);

	elementToFocus.focus();
}

function pauseAllMedia() {
	document.querySelectorAll(".js-youtube").forEach((video) => {
		video.contentWindow.postMessage(
			'{"event":"command","func":"' + "pauseVideo" + '","args":""}',
			"*",
		);
	});
	document.querySelectorAll(".js-vimeo").forEach((video) => {
		video.contentWindow.postMessage('{"method":"pause"}', "*");
	});
	document.querySelectorAll("video").forEach((video) => video.pause());
	document.querySelectorAll("product-model").forEach((model) => {
		if (model.modelViewerUI) model.modelViewerUI.pause();
	});
}

function removeTrapFocus(elementToFocus = null) {
	document.removeEventListener("focusin", trapFocusHandlers.focusin);
	document.removeEventListener("focusout", trapFocusHandlers.focusout);
	document.removeEventListener("keydown", trapFocusHandlers.keydown);

	if (elementToFocus) elementToFocus.focus();
}

class QuantityInput extends HTMLElement {
	constructor() {
		super();
		this.input = this.querySelector("input");
		this.changeEvent = new Event("change", { bubbles: true });

		this.querySelectorAll("button").forEach((button) =>
			button.addEventListener("click", this.onButtonClick.bind(this)),
		);

		var eventList = ["paste", "input"];

		for (event of eventList) {
			this.input.addEventListener(event, function (e) {
				const numberRegex = /^0*?[1-9]\d*$/;

				if (
					numberRegex.test(e.currentTarget.value) ||
					e.currentTarget.value === ""
				) {
					e.currentTarget.value;
				} else {
					e.currentTarget.value = 1;
				}
			});
		}

		this.input.addEventListener("focusout", function (e) {
			if (e.currentTarget.value === "") {
				e.currentTarget.value = 1;
			}
		});
	}

	onButtonClick(event) {
		event.preventDefault();
		const previousValue = this.input.value;

		event.target.name === "plus" ? this.input.stepUp() : this.input.stepDown();
		if (previousValue !== this.input.value)
			this.input.dispatchEvent(this.changeEvent);
	}
}

customElements.define("quantity-input", QuantityInput);

function debounce(fn, wait) {
	let t;
	return (...args) => {
		clearTimeout(t);
		t = setTimeout(() => fn.apply(this, args), wait);
	};
}

const serializeForm = (form) => {
	const obj = {};
	const formData = new FormData(form);
	for (const key of formData.keys()) {
		obj[key] = formData.get(key);
	}
	return JSON.stringify(obj);
};

function fetchConfig(type = "json") {
	return {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: `application/${type}`,
		},
	};
}

/*
 * Shopify Common JS
 *
 */
if (typeof window.Shopify == "undefined") {
	window.Shopify = {};
}

Shopify.bind = function (fn, scope) {
	return function () {
		return fn.apply(scope, arguments);
	};
};

Shopify.setSelectorByValue = function (selector, value) {
	for (var i = 0, count = selector.options.length; i < count; i++) {
		var option = selector.options[i];
		if (value == option.value || value == option.innerHTML) {
			selector.selectedIndex = i;
			return i;
		}
	}
};

Shopify.addListener = function (target, eventName, callback) {
	target.addEventListener
		? target.addEventListener(eventName, callback, false)
		: target.attachEvent("on" + eventName, callback);
};

Shopify.postLink = function (path, options) {
	options = options || {};
	var method = options["method"] || "post";
	var params = options["parameters"] || {};

	var form = document.createElement("form");
	form.setAttribute("method", method);
	form.setAttribute("action", path);

	for (var key in params) {
		var hiddenField = document.createElement("input");
		hiddenField.setAttribute("type", "hidden");
		hiddenField.setAttribute("name", key);
		hiddenField.setAttribute("value", params[key]);
		form.appendChild(hiddenField);
	}
	document.body.appendChild(form);
	form.submit();
	document.body.removeChild(form);
};

Shopify.CountryProvinceSelector = function (
	country_domid,
	province_domid,
	options,
) {
	this.countryEl = document.getElementById(country_domid);
	this.provinceEl = document.getElementById(province_domid);
	this.provinceContainer = document.getElementById(
		options["hideElement"] || province_domid,
	);

	Shopify.addListener(
		this.countryEl,
		"change",
		Shopify.bind(this.countryHandler, this),
	);

	this.initCountry();
	this.initProvince();
};

Shopify.CountryProvinceSelector.prototype = {
	initCountry: function () {
		var value = this.countryEl.getAttribute("data-default");
		Shopify.setSelectorByValue(this.countryEl, value);
		this.countryHandler();
	},

	initProvince: function () {
		var value = this.provinceEl.getAttribute("data-default");
		if (value && this.provinceEl.options.length > 0) {
			Shopify.setSelectorByValue(this.provinceEl, value);
		}
	},

	countryHandler: function (e) {
		var opt = this.countryEl.options[this.countryEl.selectedIndex];
		var raw = opt.getAttribute("data-provinces");
		var provinces = JSON.parse(raw);

		this.clearOptions(this.provinceEl);
		if (provinces && provinces.length == 0) {
			this.provinceContainer.style.display = "none";
		} else {
			for (var i = 0; i < provinces.length; i++) {
				var opt = document.createElement("option");
				opt.value = provinces[i][0];
				opt.innerHTML = provinces[i][1];
				this.provinceEl.appendChild(opt);
			}

			this.provinceContainer.style.display = "";
		}
	},

	clearOptions: function (selector) {
		while (selector.firstChild) {
			selector.removeChild(selector.firstChild);
		}
	},

	setOptions: function (selector, values) {
		for (var i = 0, count = values.length; i < values.length; i++) {
			var opt = document.createElement("option");
			opt.value = values[i];
			opt.innerHTML = values[i];
			selector.appendChild(opt);
		}
	},
};

class MenuDrawer extends HTMLElement {
	constructor() {
		super();

		this.mainDetailsToggle = this.querySelector("details");
		const summaryElements = this.querySelectorAll("summary");
		this.addAccessibilityAttributes(summaryElements);

		if (navigator.platform === "iPhone")
			document.documentElement.style.setProperty(
				"--viewport-height",
				`${window.innerHeight}px`,
			);

		this.addEventListener("keyup", this.onKeyUp.bind(this));
		this.addEventListener("focusout", this.onFocusOut.bind(this));
		this.bindEvents();
	}

	bindEvents() {
		this.querySelectorAll("summary").forEach((summary) =>
			summary.addEventListener("click", this.onSummaryClick.bind(this)),
		);
		this.querySelectorAll("button").forEach((button) => {
			if (this.querySelector(".header__localization-button") === button) return;
			if (this.querySelector(".header__localization-lang-button") === button) return;
			button.addEventListener("click", this.onCloseButtonClick.bind(this));
		});
	}

	addAccessibilityAttributes(summaryElements) {
		summaryElements.forEach((element) => {
			element.setAttribute("role", "button");
			element.setAttribute("aria-expanded", false);
			element.setAttribute("aria-controls", element.nextElementSibling.id);
		});
	}

	onKeyUp(event) {
		if (event.code.toUpperCase() !== "ESCAPE") return;

		const openDetailsElement = event.target.closest("details[open]");
		if (!openDetailsElement) return;

		openDetailsElement === this.mainDetailsToggle
			? this.closeMenuDrawer(this.mainDetailsToggle.querySelector("summary"))
			: this.closeSubmenu(openDetailsElement);
	}

	onSummaryClick(event) {
		const summaryElement = event.currentTarget;
		const detailsElement = summaryElement.parentNode;
		const isOpen = detailsElement.hasAttribute("open");

		if (detailsElement === this.mainDetailsToggle) {
			if (isOpen) event.preventDefault();
			isOpen
				? this.closeMenuDrawer(summaryElement)
				: this.openMenuDrawer(summaryElement);
		} else {
			trapFocus(
				summaryElement.nextElementSibling,
				detailsElement.querySelector("button"),
			);

			setTimeout(() => {
				detailsElement.classList.add("menu-opening");
			});
		}
	}

	openMenuDrawer(summaryElement) {
		setTimeout(() => {
			this.mainDetailsToggle.classList.add("menu-opening");
		});
		summaryElement.setAttribute("aria-expanded", true);
		trapFocus(this.mainDetailsToggle, summaryElement);
		document.body.classList.add(`overflow-hidden-${this.dataset.breakpoint}`);
	}

	closeMenuDrawer(event, elementToFocus = false) {
		if (event !== undefined) {
			this.mainDetailsToggle.classList.remove("menu-opening");
			this.mainDetailsToggle.querySelectorAll("details").forEach((details) => {
				details.removeAttribute("open");
				details.classList.remove("menu-opening");
			});
			this.mainDetailsToggle
				.querySelector("summary")
				.setAttribute("aria-expanded", false);
			document.body.classList.remove(
				`overflow-hidden-${this.dataset.breakpoint}`,
			);
			removeTrapFocus(elementToFocus);
			this.closeAnimation(this.mainDetailsToggle);

			setTimeout(() => {
				document.querySelector('.shopify-section-header').classList.remove('shopify-section-header-hidden-mobile');
			}, 100);
		}
	}

	onFocusOut(event) {
		setTimeout(() => {
			if (
				this.mainDetailsToggle.hasAttribute("open") &&
				!this.mainDetailsToggle.contains(document.activeElement)
			)
				this.closeMenuDrawer();
		});
	}

	onCloseButtonClick(event) {
		const detailsElement = event.currentTarget.closest("details");
		this.closeSubmenu(detailsElement);
	}

	closeSubmenu(detailsElement) {
		detailsElement.classList.remove("menu-opening");
		removeTrapFocus();
		this.closeAnimation(detailsElement);
	}

	closeAnimation(detailsElement) {
		let animationStart;

		const handleAnimation = (time) => {
			if (animationStart === undefined) {
				animationStart = time;
			}

			const elapsedTime = time - animationStart;

			if (elapsedTime < 400) {
				window.requestAnimationFrame(handleAnimation);
			} else {
				detailsElement.removeAttribute("open");
				if (detailsElement.closest("details[open]")) {
					trapFocus(
						detailsElement.closest("details[open]"),
						detailsElement.querySelector("summary"),
					);
				}
			}
		};

		window.requestAnimationFrame(handleAnimation);
	}
}

customElements.define("menu-drawer", MenuDrawer);

class HeaderDrawer extends MenuDrawer {
	constructor() {
		super();
	}

	openMenuDrawer(summaryElement) {
		this.header =
			this.header || document.querySelector(".shopify-section-header");
		this.borderOffset =
			this.borderOffset ||
			this.closest(".header-wrapper").classList.contains(
				"header-wrapper--border-bottom",
			)
				? 1
				: 0;
		document.documentElement.style.setProperty(
			"--header-bottom-position",
			`${parseInt(
				this.header.getBoundingClientRect().bottom - this.borderOffset,
			)}px`,
		);

		setTimeout(() => {
			this.mainDetailsToggle.classList.add("menu-opening");
		});

		summaryElement.setAttribute("aria-expanded", true);
		trapFocus(this.mainDetailsToggle, summaryElement);
		document.body.classList.add(`overflow-hidden-${this.dataset.breakpoint}`);
		document.querySelector('.shopify-section-header').classList.add('shopify-section-header-hidden-mobile');
	}
}

customElements.define("header-drawer", HeaderDrawer);

class ModalDialog extends HTMLElement {
	constructor() {
		super();
		this.querySelector('[id^="ModalClose-"]').addEventListener(
			"click",
			this.hide.bind(this, false),
		);
		this.addEventListener("keyup", (event) => {
			if (event.code.toUpperCase() === "ESCAPE") this.hide();
		});
		if (this.classList.contains("media-modal")) {
			this.addEventListener("pointerup", (event) => {
				if (
					event.pointerType === "mouse" &&
					!event.target.closest("deferred-media, product-model")
				)
					this.hide();
			});
		} else {
			this.addEventListener("click", (event) => {
				if (event.target === this) this.hide();
			});
		}
	}

	connectedCallback() {
		if (this.moved) return;
		this.moved = true;
		document.body.appendChild(this);
	}

	show(opener) {
		this.openedBy = opener;
		const popup = this.querySelector(".template-popup");
		document.body.classList.add("overflow-hidden");
		this.setAttribute("open", "");
		if (popup) popup.loadContent();
		trapFocus(this, this.querySelector('[role="dialog"]'));
		window.pauseAllMedia();
	}

	hide() {
		let isOpen = false;

		this.removeAttribute("open");
		removeTrapFocus(this.openedBy);
		window.pauseAllMedia();

		document.querySelectorAll("body > quick-add-modal").forEach((el) => {
			if (el.hasAttribute("open")) {
				isOpen = true;
			}
		});

		if (!isOpen) {
			document.body.classList.remove("overflow-hidden");
			document.body.dispatchEvent(new CustomEvent("modalClosed"));
		}
	}
}

customElements.define("modal-dialog", ModalDialog);

class ModalOpener extends HTMLElement {
	constructor() {
		super();

		const button = this.querySelector("button");

		if (!button) return;
		button.addEventListener("click", () => {
			const modal = document.querySelector(this.getAttribute("data-modal"));
			if (modal) modal.show(button);
		});
	}
}

customElements.define("modal-opener", ModalOpener);

class DeferredMedia extends HTMLElement {
	constructor() {
		super();
		this.querySelector('[id^="Deferred-Poster-"]')?.addEventListener(
			"click",
			this.loadContent.bind(this),
		);
		if (this.getAttribute("data-autoplay")) {
			this.loadContent();
		}
	}

	loadContent() {
		if (!this.getAttribute("loaded")) {
			const content = document.createElement("div");
			content.appendChild(
				this.querySelector("template").content.firstElementChild.cloneNode(
					true,
				),
			);

			this.setAttribute("loaded", true);
			window.pauseAllMedia();

			/*this.appendChild(
				content.querySelector("video, model-viewer, iframe"),
			).focus();*/

			const videoObserver = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							if (this.getAttribute("data-autoplay")) {
								let playPromise = entry.target.play();
								if (playPromise !== undefined) {
									playPromise.then(_ => {}).catch(error => {});
								}
								//entry.target.play()
							}
						}
						else {
							entry.target.pause()
						}
					})
				}
			)

			const deferredElement = this.appendChild(
				content.querySelector("video, model-viewer, iframe")
			);			
			//if (focus) deferredElement.focus();
			
			if (
				deferredElement.nodeName == "VIDEO" ||
				deferredElement.nodeName == "IFRAME"
			) {
				// force autoplay for safari

				
				if (this.classList.contains('video-section__media')) {
					let playPromise = deferredElement.play();
					if (playPromise !== undefined) {
						playPromise.then(_ => {}).catch(error => {});
					}

					videoObserver.observe(deferredElement);
				}
				else {
					deferredElement.play();
				}
			}

			if (
				this.closest(".swiper")?.swiper.slides[
					this.closest(".swiper").swiper.activeIndex
				].querySelector("model-viewer")
			) {
				if (
					!this.closest(".swiper")
						.swiper.slides[
							this.closest(".swiper").swiper.activeIndex
						].querySelector("model-viewer")
						.classList.contains("shopify-model-viewer-ui__disabled")
				) {
					this.closest(".swiper").swiper.params.noSwiping = true;
					this.closest(".swiper").swiper.params.noSwipingClass = "swiper-slide";
				}
			}
		}
	}
}

customElements.define("deferred-media", DeferredMedia);

class SliderComponent extends HTMLElement {
	constructor() {
		super();
		this.slider = this.querySelector(".slider");
		this.sliderItems = this.querySelectorAll(".slider__slide");
		this.pageCount = this.querySelector(".slider-counter--current");
		this.pageTotal = this.querySelector(".slider-counter--total");
		this.prevButton = this.querySelector('button[name="previous"]');
		this.nextButton = this.querySelector('button[name="next"]');

		if (!this.slider || !this.nextButton) return;

		const resizeObserver = new ResizeObserver((entries) => this.initPages());
		resizeObserver.observe(this.slider);

		this.slider.addEventListener("scroll", this.update.bind(this));
		this.prevButton.addEventListener("click", this.onButtonClick.bind(this));
		this.nextButton.addEventListener("click", this.onButtonClick.bind(this));
	}

	initPages() {
		if (!this.sliderItems.length === 0) return;
		this.slidesPerPage = Math.floor(
			this.slider.clientWidth / this.sliderItems[0].clientWidth,
		);
		this.totalPages = this.sliderItems.length - this.slidesPerPage + 1;
		this.update();
	}

	update() {
		if (!this.pageCount || !this.pageTotal) return;
		this.currentPage =
			Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1;

		if (this.currentPage === 1) {
			this.prevButton.setAttribute("disabled", true);
		} else {
			this.prevButton.removeAttribute("disabled");
		}

		if (this.currentPage === this.totalPages) {
			this.nextButton.setAttribute("disabled", true);
		} else {
			this.nextButton.removeAttribute("disabled");
		}

		this.pageCount.textContent = this.currentPage;
		this.pageTotal.textContent = this.totalPages;
	}

	onButtonClick(event) {
		event.preventDefault();
		const slideScrollPosition =
			event.currentTarget.name === "next"
				? this.slider.scrollLeft + this.sliderItems[0].clientWidth
				: this.slider.scrollLeft - this.sliderItems[0].clientWidth;
		this.slider.scrollTo({
			left: slideScrollPosition,
		});
	}
}

customElements.define("slider-component", SliderComponent);

class VariantSelects extends HTMLElement {
	constructor() {
		super();
		this.addEventListener("change", this.onVariantChange);
	}

	onVariantChange() {
		this.updateOptions();
		this.updateMasterId();
		this.toggleAddButton(true, "", false);
		this.updatePickupAvailability();
		this.updateVariantStatuses();

		if (!this.currentVariant) {
			this.toggleAddButton(true, "", true);
			this.setUnavailable();
		} else {
			if (
				this.currentVariant?.featured_media &&
				this.dataset?.variantMediaDisplay === 'show_all'
			) {
				// If variant display != "show_all", the media gallery element is fully replaced inside updateElementsAfterFetch
				this.updateMedia()
			}
			this.updateMediaSub();
			this.updateURL();
			this.updateVariantInput();
			this.renderProductInfo();
		}

		if (this.currentVariant) {
			// dispatch variant:change
			document.dispatchEvent(
				new CustomEvent('variant:change', {
					detail: {
						variant: this.currentVariant,
						previousVariant: this.previousVariant || null,
						formElement: document.querySelector(
							`#${this.getAttribute('id')}`
						),
						sectionId: this.dataset.section,
					},
				})
			)
			// dispatch variant:change

			// Save the previous version
			this.previousVariant = this.currentVariant
		}
	}

	updateOptions() {
		//const fieldsets = Array.from(this.querySelectorAll(".js-radio-colors"));
		// js-radio-colors was added to display Color swatches in the Dropdown type
		// but Color swatches are no longer supported in this type

		this.options = Array.from(
			this.querySelectorAll("select"),
			(select) => select.value,
		//).concat(
		//	fieldsets.map((fieldset) => {
		//		return Array.from(fieldset.querySelectorAll("input")).find(
		//			(radio) => radio.checked,
		//		).value;
		//	}),
		);
	}

	updateMasterId() {
		if (this.variantData || this.querySelector('[type="application/json"]')) {
			this.currentVariant = this.getVariantData().find((variant) => {
				//this.options.sort();
				//variant.options.sort();

				return !variant.options
					.map((option, index) => {
						return this.options[index] === option;
					})
					.includes(false);
			});
		}
	}

	updateMedia() {
		if (!this.currentVariant || !this.currentVariant?.featured_media) return;

		const newMedia = document.querySelector(
			`[data-media-id="${this.dataset.section}-${this.currentVariant.featured_media.id}"]`,
		);

		if (!newMedia) return;

		const parent = newMedia.parentElement;

		parent.prepend(newMedia);

		window.setTimeout(() => {
			parent.scroll(0, 0);
		});

		if (document.querySelector(".js-media-list")) {
			sliderInit();
		}
	}

	updateMediaSub() {
		if (!this.currentVariant || !this.currentVariant?.featured_media) return;

		const newMediaSub = document.querySelector(
			`[data-media-sub-id="${this.dataset.section}-${this.currentVariant.featured_media.id}"]`,
		);

		if (
			document.querySelector(".js-media-sublist") &&
			document.querySelector(".js-media-sublist").swiper != null
		) {
			document.querySelector(".js-media-sublist").swiper.destroy();
		}

		if (!newMediaSub) return;

		const parentSub = newMediaSub.parentElement;

		parentSub.prepend(newMediaSub);

		window.setTimeout(() => {
			parentSub.scroll(0, 0);
		});

		if (document.querySelector(".js-media-sublist")) {
			subSliderInit();
		}
	}

	updateURL() {
		if (!this.classList.contains("featured-product-radios")) {
			if (!this.currentVariant || this.dataset.updateUrl === "false") return;
			window.history.replaceState(
				{},
				"",
				`${this.dataset.url}?variant=${this.currentVariant.id}`,
			);
		}
	}

	updateVariantInput() {
		const productForms = document.querySelectorAll(
			`#product-form-${this.dataset.section}, #product-form-installment-${this.dataset.section}`,
		);
		productForms.forEach((productForm) => {
			const input = productForm.querySelector('input[name="id"]');
			input.value = this.currentVariant.id;
			input.dispatchEvent(new Event("change", { bubbles: true }));
		});
	}

	updateVariantStatuses() {
		const selectedOptionOneVariants = this.variantData.filter(
			(variant) => this.querySelector(":checked").value === variant.option1,
		);
		const inputWrappers = [...this.querySelectorAll(".product-form__input")];
		inputWrappers.forEach((option, index) => {
			if (index === 0) return;
			const optionInputs = [
				...option.querySelectorAll('input[type="radio"], option'),
			];
			const previousOptionSelected =
				inputWrappers[index - 1].querySelector(":checked").value;
			const availableOptionInputsValue = selectedOptionOneVariants
				.filter(
					(variant) =>
						variant.available &&
						variant[`option${index}`] === previousOptionSelected
				)
				.map((variantOption) => variantOption[`option${index + 1}`]);
			this.setInputAvailability(optionInputs, availableOptionInputsValue);
		});
	}

	setInputAvailability(listOfOptions, listOfAvailableOptions) {
		listOfOptions.forEach((input) => {
			if (listOfAvailableOptions.includes(input.getAttribute("value"))) {
				if (input.tagName === 'OPTION') {
					input.innerText = input.getAttribute("value");
				} else if (input.tagName === 'INPUT') {
					input.classList.remove("disabled");
				}
			} else {
				if (input.tagName === 'OPTION') {
					input.innerText = window.variantStrings.unavailable_with_option.replace(
						"[value]",
						input.getAttribute("value"),
					);
				} else if (input.tagName === 'INPUT') {
					input.classList.add("disabled");
				}
			}
		});
	}

	updatePickupAvailability() {
		const pickUpAvailability = document.querySelector("pickup-availability");
		if (!pickUpAvailability) return;

		if (this.currentVariant && this.currentVariant.available) {
			pickUpAvailability.fetchAvailability(this.currentVariant.id);
		} else {
			pickUpAvailability.removeAttribute("available");
			pickUpAvailability.innerHTML = "";
		}
	}

	renderProductInfo() {
		const requestedVariantId = this.currentVariant.id;
		const sectionId = this.dataset.originalSection
			? this.dataset.originalSection
			: this.dataset.section;

		fetch(
			`${this.dataset.url}?variant=${this.currentVariant.id}&section_id=${
				this.dataset.originalSection
					? this.dataset.originalSection
					: this.dataset.section
			}`,
		)
			.then((response) => response.text())
			.then((responseText) => {
				// prevent unnecessary ui changes from abandoned selections
				if (this.currentVariant.id !== requestedVariantId) return

				const html = new DOMParser().parseFromString(responseText, 'text/html')
				const destination = document.getElementById(
					`price-${this.dataset.section}`
				)
				const source = html.getElementById(
					`price-${
						this.dataset.originalSection
							? this.dataset.originalSection
							: this.dataset.section
					}`
				)
				const skuSource = html.getElementById(
					`Sku-${
						this.dataset.originalSection
							? this.dataset.originalSection
							: this.dataset.section
					}`
				)
				const skuDestination = document.getElementById(
					`Sku-${this.dataset.section}`
				)
				const inventorySource = html.getElementById(
					`Inventory-${
						this.dataset.originalSection
							? this.dataset.originalSection
							: this.dataset.section
					}`
				)
				const inventoryDestination = document.getElementById(
					`Inventory-${this.dataset.section}`
				)

				if (source && destination) destination.innerHTML = source.innerHTML
				if (inventorySource && inventoryDestination)
					inventoryDestination.innerHTML = inventorySource.innerHTML
				if (skuSource && skuDestination) {
					skuDestination.innerHTML = skuSource.innerHTML
					skuDestination.classList.toggle(
						'visibility-hidden',
						skuSource.classList.contains('visibility-hidden')
					)
				}

				const price = document.getElementById(`price-${this.dataset.section}`)

				if (price) price.classList.remove('visibility-hidden')

				if (inventoryDestination)
					inventoryDestination.classList.toggle(
						'visibility-hidden',
						inventorySource.innerText === ''
					)

				const addButtonUpdated = html.getElementById(
					`ProductSubmitButton-${sectionId}`
				)
				this.toggleAddButton(
					addButtonUpdated ? addButtonUpdated.hasAttribute('disabled') : true,
					window.variantStrings.soldOut
				)

				// product media
				if (this.dataset?.variantMediaDisplay !== 'show_all') {
					const sourceSectionId = this.dataset.originalSection
						? this.dataset.originalSection
						: this.dataset.section
					const currentSectionId = this.dataset.section

					const mediaSource = html.querySelector(
						`[data-section="product-media-${sourceSectionId}"]`
					)
					const mediaDestination = document.querySelector(
						`[data-section="product-media-${currentSectionId}"]`
					)

					if (mediaSource && mediaDestination) {
						mediaDestination.innerHTML = mediaSource.innerHTML

						const parentQuickView = this.closest('quick-view-modal')
						if (parentQuickView) {
							if (typeof parentQuickView.removeDOMElements === 'function') {
								parentQuickView.removeDOMElements(mediaDestination)
							}
							if (typeof parentQuickView.initSlider === 'function') {
								parentQuickView.initSlider()
							}
						} else {
							const section = document.getElementById(
								`shopify-section-${currentSectionId}`
							)

							if (section && typeof initProductPage === 'function') {
								initProductPage(section)
							}
						}
						if (document.querySelector('.js-media-list')) {
							subSliderInit(true)
							sliderInit(true)
						}
					}
				}
			});
	}

	toggleAddButton(disable = true, text, modifyClass = true) {
		const productForm = document.getElementById(
			`product-form-${this.dataset.section}`,
		);
		if (!productForm) return;
		const addButton = productForm.querySelector('[name="add"]');
		const addButtonText = productForm.querySelectorAll('[name="add"] > span');
		if (!addButton) return;

		if (disable) {
			addButton.setAttribute("disabled", "disabled");

			if (text) {
				addButtonText.forEach((elem) => {
					elem.innerHTML = `${text}<svg class="icon icon-cart" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 17" fill="none">
<path d="M3.25 6V4.5C3.25 3.50544 3.64509 2.55161 4.34835 1.84835C5.05161 1.14509 6.00544 0.75 7 0.75C7.99456 0.75 8.94839 1.14509 9.65165 1.84835C10.3549 2.55161 10.75 3.50544 10.75 4.5V6H13C13.1989 6 13.3897 6.07902 13.5303 6.21967C13.671 6.36032 13.75 6.55109 13.75 6.75V15.75C13.75 15.9489 13.671 16.1397 13.5303 16.2803C13.3897 16.421 13.1989 16.5 13 16.5H1C0.801088 16.5 0.610322 16.421 0.46967 16.2803C0.329018 16.1397 0.25 15.9489 0.25 15.75V6.75C0.25 6.55109 0.329018 6.36032 0.46967 6.21967C0.610322 6.07902 0.801088 6 1 6H3.25ZM3.25 7.5H1.75V15H12.25V7.5H10.75V9H9.25V7.5H4.75V9H3.25V7.5ZM4.75 6H9.25V4.5C9.25 3.90326 9.01295 3.33097 8.59099 2.90901C8.16903 2.48705 7.59674 2.25 7 2.25C6.40326 2.25 5.83097 2.48705 5.40901 2.90901C4.98705 3.33097 4.75 3.90326 4.75 4.5V6Z" fill="currentColor"/>
</svg>`;
				});
			}
		} else {
			addButton.removeAttribute("disabled");
			addButtonText.forEach((elem) => {
				elem.innerHTML = `${window.variantStrings.addToCart}<svg class="icon icon-cart" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 17" fill="none">
<path d="M3.25 6V4.5C3.25 3.50544 3.64509 2.55161 4.34835 1.84835C5.05161 1.14509 6.00544 0.75 7 0.75C7.99456 0.75 8.94839 1.14509 9.65165 1.84835C10.3549 2.55161 10.75 3.50544 10.75 4.5V6H13C13.1989 6 13.3897 6.07902 13.5303 6.21967C13.671 6.36032 13.75 6.55109 13.75 6.75V15.75C13.75 15.9489 13.671 16.1397 13.5303 16.2803C13.3897 16.421 13.1989 16.5 13 16.5H1C0.801088 16.5 0.610322 16.421 0.46967 16.2803C0.329018 16.1397 0.25 15.9489 0.25 15.75V6.75C0.25 6.55109 0.329018 6.36032 0.46967 6.21967C0.610322 6.07902 0.801088 6 1 6H3.25ZM3.25 7.5H1.75V15H12.25V7.5H10.75V9H9.25V7.5H4.75V9H3.25V7.5ZM4.75 6H9.25V4.5C9.25 3.90326 9.01295 3.33097 8.59099 2.90901C8.16903 2.48705 7.59674 2.25 7 2.25C6.40326 2.25 5.83097 2.48705 5.40901 2.90901C4.98705 3.33097 4.75 3.90326 4.75 4.5V6Z" fill="currentColor"/>
</svg>`;
			});
		}

		if (!modifyClass) return;
	}

	setUnavailable() {
		const button = document.getElementById(
			`product-form-${this.dataset.section}`,
		);
		const addButton = button.querySelector('[name="add"]');
		const addButtonText = button.querySelectorAll('[name="add"] > span');
		const price = document.getElementById(`price-${this.dataset.section}`);
		const inventory = document.getElementById(
			`Inventory-${this.dataset.section}`,
		);
		const sku = document.getElementById(`Sku-${this.dataset.section}`);
		if (!addButton) return;
		addButtonText.forEach((elem) => {
			elem.innerHTML = `${window.variantStrings.unavailable}<svg class="icon icon-cart" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 17" fill="none">
<path d="M3.25 6V4.5C3.25 3.50544 3.64509 2.55161 4.34835 1.84835C5.05161 1.14509 6.00544 0.75 7 0.75C7.99456 0.75 8.94839 1.14509 9.65165 1.84835C10.3549 2.55161 10.75 3.50544 10.75 4.5V6H13C13.1989 6 13.3897 6.07902 13.5303 6.21967C13.671 6.36032 13.75 6.55109 13.75 6.75V15.75C13.75 15.9489 13.671 16.1397 13.5303 16.2803C13.3897 16.421 13.1989 16.5 13 16.5H1C0.801088 16.5 0.610322 16.421 0.46967 16.2803C0.329018 16.1397 0.25 15.9489 0.25 15.75V6.75C0.25 6.55109 0.329018 6.36032 0.46967 6.21967C0.610322 6.07902 0.801088 6 1 6H3.25ZM3.25 7.5H1.75V15H12.25V7.5H10.75V9H9.25V7.5H4.75V9H3.25V7.5ZM4.75 6H9.25V4.5C9.25 3.90326 9.01295 3.33097 8.59099 2.90901C8.16903 2.48705 7.59674 2.25 7 2.25C6.40326 2.25 5.83097 2.48705 5.40901 2.90901C4.98705 3.33097 4.75 3.90326 4.75 4.5V6Z" fill="currentColor"/>
</svg>`;
		});
		if (price) price.classList.add("visibility-hidden");
		if (inventory) inventory.classList.add("visibility-hidden");
		if (sku) sku.classList.add("visibility-hidden");
	}

	getVariantData() {
		this.variantData =
			this.variantData ||
			JSON.parse(this.querySelector('[type="application/json"]').textContent);
		return this.variantData;
	}
}

customElements.define("variant-selects", VariantSelects);

class VariantRadios extends VariantSelects {
	constructor() {
		super();
	}

	setInputAvailability(listOfOptions, listOfAvailableOptions) {
		listOfOptions.forEach((input) => {
			if (listOfAvailableOptions.includes(input.getAttribute("value"))) {
				input.classList.remove("disabled");
			} else {
				input.classList.add("disabled");
			}
		});
	}

	updateOptions() {
		const fieldsets = Array.from(this.querySelectorAll("fieldset"));
		this.options = fieldsets.map((fieldset) => {
			return Array.from(fieldset.querySelectorAll("input")).find(
				(radio) => radio.checked,
			).value;
		});
	}
}

customElements.define("variant-radios", VariantRadios);

class ProductModel extends DeferredMedia {
	constructor() {
		super();
	}

	loadContent() {
		super.loadContent();

		Shopify.loadFeatures([
			{
				name: "model-viewer-ui",
				version: "1.0",
				onLoad: this.setupModelViewerUI.bind(this),
			},
		]);
	}

	setupModelViewerUI(errors) {
		if (errors) return;

		this.modelViewerUI = new Shopify.ModelViewerUI(
			this.querySelector("model-viewer"),
		);

		const $this = this;

		this.querySelector(".shopify-model-viewer-ui__button").addEventListener(
			"click",
			function () {
				if (
					$this
						.closest(".swiper")
						.swiper.slides[
							$this.closest(".swiper").swiper.activeIndex
						].querySelector("model-viewer")
				) {
					if (
						!$this
							.closest(".swiper")
							.swiper.slides[
								$this.closest(".swiper").swiper.activeIndex
							].querySelector("model-viewer")
							.classList.contains("shopify-model-viewer-ui__disabled")
					) {
						if (
							$this
								.querySelector(".shopify-model-viewer-ui__button")
								.hasAttribute("hidden")
						) {
							$this.closest(".swiper").swiper.params.noSwiping = true;
							$this.closest(".swiper").swiper.params.noSwipingClass =
								"swiper-slide";
						}
					}
				}
			},
		);

		this.querySelector(
			".shopify-model-viewer-ui__controls-overlay",
		).addEventListener("click", function () {
			if (
				!$this
					.querySelector(".shopify-model-viewer-ui__button")
					.hasAttribute("hidden")
			) {
				$this.closest(".swiper").swiper.params.noSwiping = false;
			}
		});
	}
}
customElements.define("product-model", ProductModel);

(function () {
	const imageMouseParallax = (options) => {
		options = options || {};
		this.nameSpaces = {
			wrapper: options.wrapper || ".parallax",
			layers: options.layers || ".parallax-layer",
			deep: options.deep || "data-parallax-deep",
		};

		this.init = function () {
			var self = this;
			var parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);

			for (var i = 0; i < parallaxWrappers.length; i++) {
				(function (i) {
					parallaxWrappers[i].addEventListener("mousemove", function (e) {
						var x = e.clientX;
						var y = e.clientY;
						var layers = parallaxWrappers[i].querySelectorAll(
							self.nameSpaces.layers,
						);

						for (var j = 0; j < layers.length; j++) {
							(function (j) {
								var deep = layers[j].getAttribute(self.nameSpaces.deep);
								var disallow = layers[j].getAttribute("data-parallax-disallow");
								var itemX = disallow && disallow === "x" ? 0 : x / deep;
								var itemY = disallow && disallow === "y" ? 0 : y / deep;

								if (disallow && disallow === "both") return;
								layers[j].style.transform =
									"translateX(" + itemX + "%) translateY(" + itemY + "%)";
							})(j);
						}
					});
				})(i);
			}
		};
		this.init();
		return this;
	};

	document.addEventListener("shopify:section:load", imageMouseParallax);

	imageMouseParallax();
})();

/* Light header on dark bg */
(function () {
	let setLightHeader = () => {
		let headerWrapper = document.querySelector(".header-wrapper");
		let headerLogo =
			document.querySelector(
				".header > .header__heading-link .header__heading-logo:not(.header__heading-logo--overlay)",
			) ||
			document.querySelector(
				".header > .header__heading .header__heading-link .header__heading-logo:not(.header__heading-logo--overlay)",
			);
		let headerLogoOverlay = document.querySelector(
			".header__heading-logo--overlay",
		);
		const headerGroupSections = document.querySelectorAll(
			".shopify-section-group-header-group",
		);
		const header = document.querySelector(".shopify-section-header"); 
		const breadcrumbs = document.querySelector('.container .breadcrumb');

		const articleElement = document.querySelector(".article-template");

		const main = document.getElementById("MainContent");
		const sections = main.querySelectorAll(".shopify-section");
		let sectionFirstChild = sections[0]?.querySelector("div");

		if (sections[0]?.querySelector('.article-template')) {
			sectionFirstChild = articleElement;
		}
		let heroMedia = document.querySelector(".article-template__hero > .media");
		if (heroMedia) {
			if (heroMedia.classList.contains("article-template__hero-large")) {
				headerArticle.classList.add("article-template__header-large");
			} else {
				headerArticle.classList.remove("article-template__header-large");
			}
		}

		if (sections[0]?.classList.contains('product-section')) sectionFirstChild = sections[0].querySelector("section");
		
			if (sections[0]?.classList.contains('section--overlay') || sectionFirstChild?.classList.contains('section--has-overlay')) {
			if ((sections[0]?.classList.contains('interactive-section') && 
					(sectionFirstChild?.classList.contains("color-background-3") ||
					sectionFirstChild?.classList.contains("color-background-4"))) ||
					(!sections[0]?.classList.contains('interactive-section') && !sectionFirstChild?.classList.contains('header-overlay--dark'))
			) {
				if (breadcrumbs && !breadcrumbs.closest('main')) {
					breadcrumbs.classList.add('hidden');
				}
				headerWrapper?.classList.add("header-wrapper--overlay");
				if (headerLogoOverlay) {
					if (headerLogo) {
						headerLogo.classList.add("hide");
					}
					headerLogoOverlay.classList.add("show");
				} else {
					if (headerLogo) {
						headerLogo.classList.remove("hide");
					}
				}
			}
			else {
				if (breadcrumbs && !breadcrumbs.closest('main')) {
					breadcrumbs.classList.add('hidden');
				}
				headerWrapper?.classList.remove("header-wrapper--overlay");
			}

			if (headerGroupSections[headerGroupSections.length - 1] === header) {
				sections[0]?.classList.remove('not-margin');
				if (breadcrumbs && !breadcrumbs.closest('main')) {
					breadcrumbs.classList.add('hidden');
				}
			}
			else {
				sections[0]?.classList.add('not-margin');
				headerWrapper?.classList.remove("header-wrapper--overlay");
				if (breadcrumbs) {
					breadcrumbs.classList.remove('hidden');
				}
			}
		}
		else {
			sections[0]?.classList.remove('not-margin');
			headerWrapper?.classList.remove("header-wrapper--overlay");
			if (breadcrumbs) {
				breadcrumbs.classList.remove('hidden');
			}
		}
	}

	document.addEventListener("shopify:section:load", function () {
		setLightHeader();
	});

	document.addEventListener("shopify:section:unload", function () {
		setTimeout(function () {
			setLightHeader();
		}, 100);
	});

	document.addEventListener('shopify:section:reorder', function () {
		setLightHeader();
	})

	window.addEventListener("resize", function () {
		setLightHeader();
	});

	setLightHeader();

	let loopedSlides;
})();

// dispatch cart:refresh

document.documentElement.addEventListener('cart:refresh', () => {
	const sectionsToUpdate = [
		{id: 'cart-count-bubble', selector: '#cart-icon-bubble'},
		{id: 'cart-drawer', selector: '#CartDrawer'},
		{id: 'main-cart-items', selector: '.cart-items-wrapper'},
		{id: 'main-cart-footer', selector: '.cart__footer'},
		{id: 'main-cart-shipping', selector: '.cart-shipping'},
	]

	sectionsToUpdate.forEach((section) => {
		fetch(`${routes.cart_url}?section_id=${section.id}`)
			.then((response) => response.text())
			.then((html) => {
				const parsedHTML = new DOMParser().parseFromString(html, 'text/html')
				const sourceSection = parsedHTML.querySelector(section.selector)
				const destinationSection = document.querySelector(section.selector)
				if (sourceSection && destinationSection) {
					destinationSection.innerHTML = sourceSection.innerHTML
				}
			})
			.catch((e) => console.error(`Error updating ${section.id}:`, e))
	})
})

// dispatch cart:refresh