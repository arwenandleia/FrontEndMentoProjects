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
				NewsLetterSignUp: {
					tomato: "#FF6257",
					darkgrey: "#242742",
					charcoalgrey: "#36384E",
					grey: "#9294A0",
					white: "#FFFFFF",
					lighttomato: "#FFCFCC",
				},
				ThreeColumnPreview: {
					orange: "#E38826",
					cyan: "#006970",
					darkcyan: "#004241",
					whitepara: "#FFFFFF",
					lightgrey: "#F2F2F2",
				},
				EcommerceProduct: {
					orange: "#FF7D1A",
					paleorange: "#FFEDE0",
					verydarkblue: "#1D2025",
					darkgreyblue: "#68707D",
					greyishblue: "#B6BCC8",
					lightgreyishblue: "#F7F8FD",
					white: "#FFFFFF",
					blackOpa: "#000000",
				},
			},
		},
	},
	plugins: [],
};
