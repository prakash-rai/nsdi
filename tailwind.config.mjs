/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			"fontFamily": {
				"heading": "Archivo",
				"body": "Inter"
			},
			colors: {
				"primary": {
					"100": "#f6f7f9",
					"150": "#e3e8ed",
					"200": "#cfd9e1",
					"250": "#bcc9d4",
					"300": "#a9bac8",
					"350": "#96aabc",
					"400": "#839bb0",
					"450": "#708ca4",
					"500": "#5f7c96",
					"550": "#567087",
					"600": "#4d6478",
					"650": "#435869",
					"700": "#3a4b5b",
					"750": "#313f4c",
					"800": "#27333d",
					"850": "#1e272f",
					"900": "#141b20",
					"DEFAULT": "#5f7c96"
				},
			},
			screens: {
				xs: '24rem'
			}

		},
	},
	plugins: [],
}
