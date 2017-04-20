var path = require("path"); // jshint ignore:line
var webpack = require("webpack"); // jshint ignore:line
var HtmlWebpackPlugin = require("html-webpack-plugin"); // jshint ignore:line
var FaviconsWebpackPlugin = require("favicons-webpack-plugin"); // jshint ignore:line
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');


module.exports = { // jshint ignore:line
    context: path.resolve(__dirname, "src"),
    entry: [
        "babel-polyfill",
        "./vendor",
        "./main",
        "./main.css",
        "webpack-dev-server/client?http://localhost:8080"
    ],
    output: {
        path: path.resolve(__dirname, "dist"), // jshint ignore:line
        filename: "[name].[hash].bundle.js",
        sourceMapFilename: "[name].[hash].map",
        chunkFilename: "[id].[hash].chunk.js"
    },
    resolve: {
        modules: [
            path.resolve("./node_modules")
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devtool: "source-map",
    module: {
        loaders: [
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"},
            {test: /\.vue$/, loader: "vue-loader"},
            {test: /\.html$/, loader: "vue-html-loader"},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, "src"), // jshint ignore:line
                loader: "babel-loader",
                query: {presets: [
                    ["es2015", {"modules": false}]
                ]}
            },
            {test: /\.css$/, use: ExtractTextPlugin.extract({use: "css-loader"})},
            {test: /\.less$/, use: ExtractTextPlugin.extract({use: "css-loader!postcss-loader!less-loader"})}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({"template": "entry-template.html"}),
        new FaviconsWebpackPlugin("./images/isitornot-logo.png"),
        new ExtractTextPlugin("styles.css")
    ],
    devServer: {
        contentBase: "./src"
    }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new Clean([ './dist' ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]);
}