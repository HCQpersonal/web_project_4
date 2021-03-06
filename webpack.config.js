const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {main: './src/scripts/index.js'},
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules'
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2)$/,
                loader: "file-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                loader:[
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { 
                            importLoaders: 1 
                        }
                    }, 
                    "postcss-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCSSExtractPlugin()
    ]
};
