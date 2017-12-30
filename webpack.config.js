const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        publicPath: "/",
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },

    devtool: "source-map",

    module: {
        rules: [
            {test: /\.jsx?$/, loader: "babel-loader"},
            {test: /\.js$/, loader: "source-map-loader", enforce: "pre"}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html', inject: 'body'}),
    ],
};