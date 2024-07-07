/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		container: {
			center: true,
			padding: '16px',
			screens: {
				xl: '1332px',
				'2xl': '1332px',
			},
		},
		extend: {
			colors: {
				primary: '#454545',
				kulrang: '#F2F2F2',
				changeHover: '#FF58065B',
			},
		},
	},
	

	plugins: [],
	// plugins: [require('@tailwindcss/typography')],
}
