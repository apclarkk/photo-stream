// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export function debounce(func, wait, immediate?: number) {
	let timeout;
	return function () {
		const later = function () {
			timeout = null;
			// eslint-disable-next-line prefer-rest-params
			if (!immediate) func.apply(this, arguments);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		// eslint-disable-next-line prefer-rest-params
		if (callNow) func.apply(this, arguments);
	};
}
