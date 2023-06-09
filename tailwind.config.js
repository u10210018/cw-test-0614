/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    presets: [require('./src/vender/tailwindcss/project-preset.js')],
    theme: {
        extend: {}
    },
    corePlugins: {
        aspectRatio: false,
        container: false
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('prettier-plugin-tailwindcss')
    ]
};
