module.exports = {
    open: true,
    server: {
        baseDir: "./public",
        serveStaticOptions: {
            extensions: ["html",],
        },
    },
    files: "./",
    ignore: ["./node_modules/*",],
};
