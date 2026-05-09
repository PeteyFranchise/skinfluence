;(function () {
	const initTimer = () => {
		$(".js-countdown").each(function () {
			const mockTimer = $(this).data("mock-timer");
			const completedCountdown = $(this).data("completed");
			const countdown = $(this).find(".countdown__main");
			const countdownHeading = $(this).find(".countdown__end-info");
			const daysEl = $(this).find(".countdown_block_days");
			const hoursEl = $(this).find(".countdown_block_hours");
			const minutesEl = $(this).find(".countdown_block_minutes");
			const secondsEl = $(this).find(".countdown_block_seconds");
			const section = $(this).parent(".shopify-section");

			// ----------------------------------------------------------------

			let userDate, userTime;

			if (mockTimer === true) {
				// Calculate 3 days from now with specific time logic
				const d = new Date();
				d.setDate(d.getDate() + 3);

				const year = d.getFullYear();
				const m = d.getMonth() + 1;
				const month = m < 10 ? "0" + m : m;
				const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();

				let h = d.getHours() - 1;
				// Handle hour overflow (if hours exceed 24, it rolls to next day)
				if (h >= 24) {
					h = h - 24;
					d.setDate(d.getDate() + 1);
				}
				const hourss = h < 10 ? "0" + h : h;
				const minutess =
					d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();

				userDate = year + "-" + month + "-" + day;
				userTime = hourss + ":" + minutess;
			} else {
				// Use real countdown data
				userDate = $(this).data("date");
				userTime = $(this).data("time");
			}
			// ----------------------------------------------------------------
			const countdownDate = new Date(`${userDate}T${userTime}`);
			const now = new Date();
			const distance = countdownDate.getTime() - now.getTime();
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
			// ----------------------------------------------------------------
			if (distance < 0 && completedCountdown === "hide_section") {
				clearInterval(initTimer);
				section.stop(false, false).fadeOut(0);
			} else if (distance < 0 && completedCountdown === "show_text") {
				countdown.stop(false, false).fadeOut(0);
				countdownHeading.stop(false, false).fadeIn();
			} else {
				daysEl.html(days < 10 ? "0" + days : days);
				hoursEl.html(hours < 10 ? "0" + hours : hours);
				minutesEl.html(minutes < 10 ? "0" + minutes : minutes);
				secondsEl.html(seconds < 10 ? "0" + seconds : seconds);
			}
			// ----------------------------------------------------------------
		});
	};
	document.addEventListener("shopify:section:load", function () {
		if (!document.hidden) {
			setInterval(initTimer, 1000);
		}
	});
	document.addEventListener("shopify:section:reorder", function () {
		if (!document.hidden) {
			setInterval(initTimer, 1000);
		}
	});
	if (!document.hidden) {
		setInterval(initTimer, 1000);
	}
})();
