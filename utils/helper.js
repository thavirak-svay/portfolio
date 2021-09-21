const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/**
 * @description format date to full text
 * @example '2020-1-18' to 'January 1, 2020'
 */
export const formatDate = (dateString) => {
	const dateObj = new Date(dateString);
	return `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
};

export function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
export const debounce = (func, wait) => {
	let timeout;

	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

export function getFromLocalStorage(key) {
	if (typeof localStorage !== "undefined") {
		return localStorage.getItem(key);
	}
	return null;
}

export function getFromSessionStorage(key) {
	if (typeof sessionStorage !== "undefined") {
		return sessionStorage.getItem(key);
	}
	return null;
}
