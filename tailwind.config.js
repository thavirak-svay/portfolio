const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: ["Euclid Circular B", ...fontFamily.sans],
				heading: ["Euclid Circular B", ...fontFamily.sans],
			},
			keyframes: {
				flicker: {
					"0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
						opacity: 0.99,
						filter: "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
					},
					"20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
						opacity: 0.4,
						filter: "none",
					},
				},
			},
			animation: {
				flicker: "flicker 3s linear infinite",
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
