/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      keyframes: {
        "pop-in-out": {
          "10%, 90%": { opacity: 1 },
        },
      },
      animation: {
        "pop-in-out": "pop-in-out 5s",
      },
    },
	},
	plugins: [],
}
