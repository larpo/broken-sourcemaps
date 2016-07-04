var webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "build/bundle.min.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
        "compress": {
            "warnings": false
        }
    })
    ],
    devtool: "#source-map"
};