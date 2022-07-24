/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'heritage-blue': '#002D72',
				'spirit-blue': '#68ACE5',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
}
