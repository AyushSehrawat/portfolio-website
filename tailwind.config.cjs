/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                "varela-round": ["Varela Round", "sans-serif"],
            },
            colors: {
                creamy: "#ffc3b4",
                chocolatey: "#5b413d",
                primary: "#fcfcf4"
            },
        },
    },
    plugins: [],
};