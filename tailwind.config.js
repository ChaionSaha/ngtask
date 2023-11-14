/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primary: '#ef3b2e',
				'primary-subtle': '#ffccba',
				'base-100': '#fff',
				'base-200': '#f2f3f4',
			},
		},
	},
	plugins: [],
};
