/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                cus: '0 1px 1px rgb(0 0 0 / 12%)',
            },
        },
    },
    plugins: [],
};
