const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: ["EuclidCircularB", ...fontFamily.sans],
				heading: ["EuclidCircularB", ...fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["dark"],
			textColor: ["dark"],
		},
	},
	plugins: [],
};
