export const lightDarkToggleVariant = {
	initial: { opacity: 0, scale: 0.5, x: 0, rotate: -90 },
	animate: { opacity: 1, scale: 1, x: 0, rotate: 0 },
	exit: { opacity: 0, scale: 0.5, x: 0, rotate: 90 },
};
export const navbarContainerVariant = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			duration: 0.2,
		},
	},
};
export const mobileNavbarContainerVariant = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
};
export const navbarItemVariant = {
	initial: { y: -10, opacity: 0, transition: { ease: "easeIn" } },
	animate: { y: 0, opacity: 1, transition: { ease: "easeIn" } },
};
export const mobileNavbarItemVariant = {
	initial: { x: -10, opacity: 0, transition: { ease: "easeOut", duration: 0.2 } },
	animate: { x: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.2 } },
};
export const fadeUpContainerVariant = {
	initial: {},
	animate: {
		transition: {
			delayChildren: 0.7,
			staggerChildren: 0.15,
			duration: 0.5,
		},
	},
};
export const fadeUpItemVariant = {
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
export const sidebarVariant = {
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
