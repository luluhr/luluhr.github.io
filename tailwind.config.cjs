/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: '1rem',
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                daisy: {
                    "color-scheme": "light",
                    primary: "#b8b8b8",
                    secondary: "#b8b8b8",
                    accent: "#b8b8b8",
                    neutral: "#ebebeb",
                    "base-100": "#ffffff",
                    "base-200": "#eeeeee",
                    "base-300": "#dddddd",
                    info: "#0000ff",
                    success: "#00d069",
                    warning: "#a6a659",
                    error: "#ff0000",
                    "--rounded-box": "0.2rem",
                    "--rounded-btn": "0.2rem",
                    "--rounded-badge": "0.2rem",
                    "--tab-radius": "0.2rem",
                }
            }
        ],
    },
}
