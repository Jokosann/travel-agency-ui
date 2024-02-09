/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'black-dark': '#212832',
				'black-light': '#5E6282',
				yellow: '#F1A501',
			},
		},
	},
	plugins: [],
};
