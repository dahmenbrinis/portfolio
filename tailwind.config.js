const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode:'jit',
    purge: {
        content: ["public/**/*.html"],
    },
    darkMode: false,
    theme: {
        fontFamily: {
            header: ['Raleway', "sans-serif"],
            body: ['Open Sans', "sans-serif"]
        },

  
    },
    variants: {

    }

};
