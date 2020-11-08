const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
      },
       output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
       },
       devtool: 'inline-source-map',
       devServer: {
        contentBase: './dist',
        port: '3000'
      },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            title: 'Julian Vila',
          }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader',
                ],
       
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  'file-loader',
                ],
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    }
};