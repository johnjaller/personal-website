/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Bodoni_Moda: ['Bodoni Moda', ...defaultTheme.fontFamily.serif],
				sofia_pro: ['sofia-pro', ...defaultTheme.fontFamily.serif]
			}
		}
	}
};
