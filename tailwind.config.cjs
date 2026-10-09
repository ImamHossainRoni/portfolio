/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
				sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			colors: {
				paper: 'var(--paper)',
				ink: 'var(--ink)',
				muted: 'var(--muted)',
				line: 'var(--line)',
				accent: 'var(--accent)',
				raised: 'var(--raised)',
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		// Only the legacy store pages still use daisyUI components; the site's own look lives in global.css.
		themes: ["lofi"],
		base: false,
		logs: false,
	}
}
