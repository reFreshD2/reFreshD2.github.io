module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./src/film.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
}