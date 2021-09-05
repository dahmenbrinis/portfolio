const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode:'jit',
    purge: {
        content: ["public/**/*.html"],
    },
    darkMode: true,
    theme: {
        fontFamily: {
            body: ['Open Sans', "sans-serif"]
        },
    },
    variants: {

    }

};
