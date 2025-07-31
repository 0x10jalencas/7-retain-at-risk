/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'sdsu-red': '#C41230',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}