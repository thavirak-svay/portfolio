const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: ["EuclidCircularB", ...fontFamily.sans],
				heading: ["EuclidCircularB", ...fontFamily.sans],
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				gray: {
					50: "#F7FAFC",
					100: "#EDF2F7",
					200: "#E2E8F0",
					300: "#CBD5E0",
					400: "#A0AEC0",
					500: "#718096",
					600: "#4A5568",
					700: "#2D3748",
					800: "#1A202C",
					900: "#171923",
				},
				sand: {
					50: "#fdfcfa",
					100: "#fcfaf5",
					200: "#f7f2e7",
					300: "#f2e9d9",
					400: "#e8d9bc",
					500: "#DEC99F",
					600: "#c8b58f",
					700: "#a79777",
					800: "#85795f",
					900: "#6d624e",
				},
				// sand: {
				// 	50: "#fffffd",
				// 	100: "#fffefc",
				// 	200: "#fffdf6",
				// 	300: "#fffcf1",
				// 	400: "#fff9e7",
				// 	500: "#fff7dc",
				// 	600: "#e6dec6",
				// 	700: "#bfb9a5",
				// 	800: "#999484",
				// 	900: "#7d796c",
				// },
				"sea-green": {
					50: "#f3f4f5",
					100: "#e7e8ea",
					200: "#c2c6cb",
					300: "#9da3ac",
					400: "#545e6d",
					500: "#0a192f",
					600: "#09172a",
					700: "#081323",
					800: "#060f1c",
					900: "#050c17",
				},
				blue: colors.blue,
				black: colors.black,
				white: colors.white,
				gray: colors.trueGray,
				indigo: colors.indigo,
				red: colors.rose,
				yellow: colors.amber,
				current: "currentColor",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				".vertical-lr": {
					writingMode: "vertical-lr",
				},
				".vertical-rl": {
					writingMode: "vertical-rl",
				},
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		}),
	],
};
