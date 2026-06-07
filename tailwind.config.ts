/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Map 'font-vaino' to the CSS variable defined in layout.tsx
                cust: ['var(--font-cust)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};