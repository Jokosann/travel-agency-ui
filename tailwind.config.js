/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'black-dark': '#212832',
				'black-light': '#5E6282',
				'blue-dark': '#181E4B',
				yellow: '#F1A501',
				light: '#fefefe',
				'orange-pink': '#DF6951',
				'bg-contact': '#f9f7fe',
			},
		},
		fontFamily: {
			poppins: 'Poppins, sans-serif',
			volkhov: 'Volkhov, serif',
		},
		screens: {
			xs: '512px',
			// => @media (min-width: 512px) { ... }
			sm: '640px',
			// => @media (min-width: 640px) { ... }
			md: '768px',
			// => @media (min-width: 768px) { ... }
			lg: '1024px',
			// => @media (min-width: 1024px) { ... }
			xl: '1280px',
			// => @media (min-width: 1280px) { ... }
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
