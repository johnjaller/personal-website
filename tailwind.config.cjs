/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Bodoni_Moda: ['Bodoni Moda', ...defaultTheme.fontFamily.serif]
			}
		}
	}
};
