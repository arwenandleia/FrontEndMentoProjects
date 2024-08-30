/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryText: {
					DEFAULT: "#020764",
				},
				primaryBackground: {
					DEFAULT: "#C4C2BC",
				},
				accentColour: {
					DEFAULT: "#280162",
				},
				SocialLinksProfile: {
					green: "#C5F82A",
					white: "#FFFFFF",
					grey700: "#333333",
					grey800: "#1F1F1F",
					grey900: "#141414",
				},
				FaqAccordion: {
					white: "#FFFFFF",
					lightPink: "#F9F0FF",
					grayishPurple: "#8C6991",
					darkPurple: "#2F1533",
				},
				FEContactForm: {
					green200: "#DFF1E7",
					green600: "#0C7D69",
					red: "#D73C3C",
					white: "#FFFFFF",
					grey500: "#87A3A6",
					grey900: "#2B4246",
				},
			},
		},
	},
	plugins: [],
};
