let isLoading = false

const loadItems = (button) => {
	if (isLoading) return

	const totalPages = parseInt($('[data-total-pages]').val())
	let currentPage = parseInt($('[data-current-page]').val())
	let currentPageScroll = currentPage + 1

	currentPage = currentPage + 1

	const rawValue = document.querySelector('[data-next-url]').value

	const getUrlWithoutPhcursor = (value, pageValue) => {
		const url = new URL(value, window.location.origin)

		const currentParams = new URLSearchParams(window.location.search)
		for (const [key, val] of currentParams.entries()) {
			if (!url.searchParams.has(key)) {
				url.searchParams.set(key, val)
			}
		}

		url.searchParams.set('page', pageValue)
		url.searchParams.delete('phcursor')

		return url.pathname + '?' + url.searchParams.toString()
	}

	const nextUrl = getUrlWithoutPhcursor(rawValue, currentPage)
	const nextUrlScroll = getUrlWithoutPhcursor(rawValue, currentPageScroll)

	$('[data-current-page]').val(currentPage)

	button.setAttribute('disabled', '')
	button.classList.add('loading')

	isLoading = true

	$.ajax({
		url: nextUrl,
		type: 'GET',
		dataType: 'html',
		success: function (responseHTML) {
			$('.load-more-grid').append(
				$(responseHTML).find('.load-more-grid').html()
			)
			try {
				colorSwatches()
			} catch (err) {}
		},
		complete: function () {
			isLoading = false

			if (currentPage <= totalPages) {
				const scollData = document.querySelector('.infinite-scroll__data')
				if (scollData && currentPage != totalPages) {
					scollData.querySelector('input[data-next-url]').dataset.nextUrl =
						nextUrlScroll
					scollData.querySelector('input[data-next-url]').value = nextUrlScroll
					scollData.querySelector(
						'input[data-current-page]'
					).dataset.currentPage = currentPage
					scollData.querySelector('input[data-current-page]').value =
						currentPage
					checkVisibility()
				}

				button.removeAttribute('disabled')
				button.classList.remove('loading')

				if (currentPage == totalPages) {
					button.remove()
				}
			}
		},
	})
}

const checkVisibility = () => {
	const spinnerList = document.querySelectorAll('.js-infinite-scroll')
	spinnerList.forEach((spinner) => {
		const sectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					loadItems(spinner)
				}
			})
		})

		sectionObserver.observe(spinner);
	})
}

function loadMore() {
	document.querySelectorAll('.js-load-more').forEach((button) => {
		button.onclick = () => {
			loadItems(button);
		}
	})

	checkVisibility();
}

(function () {
	loadMore();
})();
