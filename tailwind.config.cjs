/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		// Only the legacy store pages still use daisyUI components; the site's own look lives in global.css.
		themes: ["lofi"],
		base: false,
		logs: false,
	}
}
