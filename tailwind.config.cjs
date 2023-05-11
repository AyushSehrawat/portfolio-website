/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                "varela-round": ["Varela Round", "sans-serif"],
                "sacramento": ["Sacramento", "cursive"]
            },
        },
    },
    plugins: [
        require('@catppuccin/tailwindcss')({
            prefix: 'ctp',
            defaultFlavour: 'mocha'
        }),
    ],
};