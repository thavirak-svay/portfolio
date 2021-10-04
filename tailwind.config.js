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
				darkBlue: {
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
				cyan: {
					50: "#f7fefd",
					100: "#effefa",
					200: "#d7fcf3",
					300: "#bff9ec",
					400: "#8ff5de",
					500: "#5ff1d0",
					600: "#56d9bb",
					700: "#47b59c",
					800: "#39917d",
					900: "#2f7666",
				},
				teal: colors.teal,
				blue: colors.blue,
				black: colors.black,
				white: colors.white,
				gray: colors.trueGray,
				red: colors.rose,
				yellow: colors.amber,
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
