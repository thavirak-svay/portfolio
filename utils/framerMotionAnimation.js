export const lightDarkToggle = {
	initial: { opacity: 0, scale: 0.5, x: 0, rotate: -90 },
	animate: { opacity: 1, scale: 1, x: 0, rotate: 0 },
	exit: { opacity: 0, scale: 0.5, x: 0, rotate: 90 },
};
export const navbarContainer = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			duration: 0.2,
		},
	},
};
export const mobileNavbarContainer = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
};
export const navbarItem = {
	initial: { y: -10, opacity: 0, transition: { ease: "easeIn" } },
	animate: { y: 0, opacity: 1, transition: { ease: "easeIn" } },
};
export const mobileNavbarItem = {
	initial: { x: -10, opacity: 0, transition: { ease: "easeOut", duration: 0.2 } },
	animate: { x: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.2 } },
};

export const container = {
	initial: {},
	animate: {
		transition: {
			delayChildren: 0.7,
			staggerChildren: 0.15,
		},
	},
};
export const inView = {
	initial: {},
	animate: {
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.2,
		},
	},
};
export const fadeUp = {
	initial: {
		opacity: 0,
		y: 10,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "easeOut",
		},
	},
};
export const sidebar = {
	initial: {
		opacity: 0,
		y: 30,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 1.5,
			ease: "easeOut",
		},
	},
};
