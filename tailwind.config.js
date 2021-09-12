const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: 'jit',

    purge: {
        content: ["public/**/*.html"],
    },
    darkMode: true,
    theme: {
        fontFamily: {
            body: ['Poppins', 'Open Sans', "sans-serif"]
        },
    },
    variants: {

    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/aspect-ratio'),
    ],

};