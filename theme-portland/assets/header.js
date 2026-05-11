(function () {
	const header = () => {
		const body = document.querySelector("body");
		const header = document.querySelector(".shopify-section-header");
		const openBtn = document.querySelector(".header__offcanvas-toggle");
		const closeBtn = document.querySelector(
			".header__offcanvas-toggle-link--close",
		);
		const offMenu = document.querySelector(".header__offcanvas-menu");
		const searchDetails = document.querySelector(".header__details");
		const submenuDetails = document.querySelectorAll(
			".header__submenu li details",
		);
		const openSearchBtn = document.querySelector(".header__search");
		const headerIsAlwaysSticky =
			header
				.querySelector(".header-wrapper")
				.getAttribute("data-sticky-type") === "always";
		const headerIsSticky =
			header
				.querySelector(".header-wrapper")
				.getAttribute("data-sticky-type") === "on-scroll-up";
		const headerIsStatic = !headerIsAlwaysSticky && !headerIsSticky;
		const megaMenuLinks = document.querySelectorAll(".list-menu--megamenu");

		if (headerIsStatic) {
			header.classList.add("shopify-section-header-static");
			header.classList.remove(
				"shopify-section-header-sticky",
				"shopify-section-header-hidden",
				"shopify-section-header-hidden-mobile",
				"fixed",
				"animate",
				"animated",
			);
		}

		const openMenu = (e) => {
			e.preventDefault();
			offMenu.classList.add("header__offcanvas-menu--open");
			if (openBtn) openBtn.classList.add("active");
			body.classList.add("body--hidden");
		};

		const closeMenu = () => {
			offMenu.classList.remove("header__offcanvas-menu--open");
			if (openBtn) openBtn.classList.remove("active");
			body.classList.remove("body--hidden");
		};

		if (openBtn) openBtn.addEventListener("click", openMenu);
		if (closeBtn)
			closeBtn.addEventListener("click", function (e) {
				e.preventDefault();
				closeMenu();
			});

		submenuDetails.forEach((targetDetail) => {
			targetDetail.addEventListener("click", () => {
				submenuDetails.forEach((detail) => {
					if (detail !== targetDetail) {
						detail.removeAttribute("open");
					}
				});
			});
		});

		document.addEventListener("keyup", (e) => {
			let scrollTop = window.scrollY;
			if (e.key === "Escape") {
				closeMenu();
				body.classList.remove("overflow-hidden");
				if (
					searchDetails.open &&
					scrollTop < header.offsetHeight / 2 &&
					headerIsSticky
				) {
					header.classList.remove(
						"animate",
						"animated",
						"shopify-section-header-sticky",
					);
					searchDetails.removeAttribute("open");
				} else if (
					searchDetails.open &&
					scrollTop < header.offsetHeight / 2 &&
					headerIsAlwaysSticky
				) {
					header.classList.remove("animate", "animated");
					header.classList.add("shopify-section-header-sticky");
					searchDetails.removeAttribute("open");
				} else if (
					searchDetails.open &&
					scrollTop > header.offsetHeight / 2 &&
					(headerIsSticky || headerIsAlwaysSticky)
				) {
					header.classList.add(
						"shopify-section-header-sticky",
						"fixed",
						"animate",
						"animated",
					);
					searchDetails.removeAttribute("open");
				} else if (
					searchDetails.open &&
					!headerIsAlwaysSticky &&
					!headerIsSticky
				) {
					header.classList.remove(
						"shopify-section-header-sticky",
						"fixed",
						"animate",
						"animated",
					);
					searchDetails.removeAttribute("open");
				}
			}
		});

		if (openSearchBtn) {
			openSearchBtn.addEventListener("click", () => {
				let scrollTop = window.scrollY;
				if (searchDetails.open && headerIsAlwaysSticky) {
					body.classList.add("overflow-hidden");
					header.classList.add(
						"shopify-section-header-sticky",
						"fixed",
						"animate",
					);
				} else if (searchDetails.open && !headerIsAlwaysSticky) {
					body.classList.add("overflow-hidden");
					header.classList.add("shopify-section-header-sticky", "animate");
				} else if (
					!searchDetails.open &&
					scrollTop < header.offsetHeight / 2 &&
					headerIsSticky
				) {
					body.classList.remove("overflow-hidden");
					header.classList.remove(
						"animate",
						"animated",
						"shopify-section-header-sticky",
					);
				} else if (
					!searchDetails.open &&
					scrollTop < header.offsetHeight / 2 &&
					headerIsAlwaysSticky
				) {
					body.classList.remove("overflow-hidden");
					header.classList.remove("animate", "animated");
				} else if (
					!searchDetails.open &&
					scrollTop > header.offsetHeight / 2 &&
					(headerIsSticky || headerIsAlwaysSticky)
				) {
					body.classList.remove("overflow-hidden");
					header.classList.add(
						"shopify-section-header-sticky",
						"fixed",
						"animate",
						"animated",
					);
				} else if (
					!searchDetails.open &&
					!headerIsAlwaysSticky &&
					!headerIsSticky
				) {
					body.classList.remove("overflow-hidden");
					header.classList.remove(
						"shopify-section-header-sticky",
						"fixed",
						"animate",
						"animated",
					);
				} else {
					body.classList.remove("overflow-hidden");
					header.classList.remove(
						"shopify-section-header-sticky",
						"fixed",
						"animate",
						"animated",
					);
				}
			});
		}

		document.addEventListener("scroll", () => {
			if (headerIsStatic) return;
			let scrollTop = window.scrollY;

			if (scrollTop > header.offsetHeight / 2 && headerIsAlwaysSticky) {
				header.classList.add("fixed", "animate");
			} else if (scrollTop <= header.offsetHeight && headerIsAlwaysSticky) {
				header.classList.remove("fixed", "animate");
			}
		});

		let scrollTop = window.scrollY;

		if (scrollTop > header.offsetHeight / 2 && headerIsAlwaysSticky) {
			header.classList.add("fixed", "animate");
		} else if (scrollTop <= header.offsetHeight && headerIsAlwaysSticky) {
			header.classList.remove("fixed", "animate");
		}

		megaMenuLinks.forEach((link) => {
			link.addEventListener("mouseenter", () => {
				link.classList.add("list-menu--megamenu-visible");

				link.addEventListener("mousemove", () => {
					link.classList.add("list-menu--megamenu-visible");
				});

				link.addEventListener("mouseleave", () => {
					setTimeout(() => {
						link.classList.remove("list-menu--megamenu-visible");
					}, 300);
					link.addEventListener("mouseenter", () => {
						link.classList.add("list-menu--megamenu-visible");
					});
				});
			});
		});

		initMegaSubmenu(header)
	};

	const initMegaSubmenu = (header) => {
		const megaSubmenuLinks = header.querySelectorAll('.list-menu--megasubmenu')
		if (!megaSubmenuLinks || !megaSubmenuLinks.length) return
		megaSubmenuLinks.forEach((link) => {
			const tabs = link.querySelectorAll('.mega-submenu__tab')
			const submenus = link.querySelectorAll('.mega-submenu__submenu')
			const onToggle = (event) => {
				const tab = event.target
				if (!tab || !tab.classList.contains('mega-submenu__tab')) return
				const tabId = tab.dataset.tabId
				tabs.forEach((tab) => {
					tab.classList.remove('active')
				})
				tab.classList.add('active')
				submenus.forEach((submenu) => {
					submenu.classList.remove('active')
					if (submenu.dataset.tabId === tabId) {
						submenu.classList.add('active')
					}
				})
			}
			tabs.forEach((tab) => {
				tab.addEventListener('click', onToggle)
				tab.addEventListener('mouseenter', onToggle)
			})
		})
	}

	document.addEventListener("shopify:section:load", header);

	header();
})();
