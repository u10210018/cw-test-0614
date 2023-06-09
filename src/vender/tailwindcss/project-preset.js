const defaultTheme = require('tailwindcss/defaultTheme');
const screens = require('./screens.json');
const colors = require('./colors.json');
const fontSize = require('./fontSize.json');

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                body: [
                    "'Lato'",
                    "'Noto Sans TC'",
                    ...defaultTheme.fontFamily.serif
                ]
            },
            colors
        },
        screens,
        fontSize,
        borderRadius: {
            none: '0',
            sm: '16px',
            DEFAULT: '16px',
            md: '40px',
            lg: '60px',
            full: '9999px'
        }
    }
};
