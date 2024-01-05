const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/dist`,
        clean: true,
        //publicPath: '/dist/',
        publicPath: '/dist/',
        filename: '[name].bundle.js',
    },
    devServer: {
        historyApiFallback: {
            rewrites: [{ from: /\//, to: '/404.html' }],
        },
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json'],
    },
    devtool: process.argv.indexOf('-p') === -1 ? 'eval-source-map' : 'source-map',
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new webpack.DefinePlugin({
            "process.env.PUBLIC_PATH_CUSTOM": JSON.stringify(__dirname)
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },

                }],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `[contenthash].[ext]`,
                            publicPath: '/dist/',
                        },
                    }
                ]
            }
        ],
    },
    optimization:
    {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    }
}