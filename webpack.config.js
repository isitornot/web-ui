var path = require("path"); // jshint ignore:line
var webpack = require("webpack"); // jshint ignore:line

var HtmlWebpackPlugin = require("html-webpack-plugin"); // jshint ignore:line
var FaviconsWebpackPlugin = require("favicons-webpack-plugin"); // jshint ignore:line


module.exports = { // jshint ignore:line
    context: path.resolve(__dirname, "src"),
    entry: [
        "babel-polyfill",
        "scaleApp",
        "./theme/main.less",
        "./main",
        "webpack-dev-server/client?http://localhost:8080"
    ],
    output: {
        path: path.resolve(__dirname, "build"), // jshint ignore:line
        filename: "[name].[hash].bundle.js",
        sourceMapFilename: "[name].[hash].map",
        chunkFilename: "[id].[hash].chunk.js"
    },
    resolve: {
        modules: [
            path.resolve("./node_modules")
        ]
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, "src"), // jshint ignore:line
                loader: "babel-loader",
                query: {
                    presets: [
                        [
                            "es2015",
                            {
                                "modules": false
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!postcss-loader!less-loader"
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            "title": "IsItOrNot"
        }),
        new FaviconsWebpackPlugin("./images/isitornot-logo.png")
    ],
    devServer: {
        contentBase: "./src"
    }
};