const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode:'jit',
    purge: {
        content: ["public/**/*.html"],
    },
    darkMode: false,
    theme: {
        fontFamily: {
            body: ['Open Sans', "sans-serif"]
        },

  
    },
    variants: {

    }

};
