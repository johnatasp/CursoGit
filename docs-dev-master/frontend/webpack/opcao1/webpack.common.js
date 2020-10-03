/*!
 * 2019 (c) Vox Tecnologia.
 * @author Natan Cardoso <natan@voxtecnologia.com.br>
 */

const path = require('path');
const webpack = require("webpack");
const entry = require('webpack-glob-entry');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    entry:
        entry(entry.basePath('assets'),
            './assets/**/*.{css,scss,png,jpg,gif,ico,pdf,eot,woff,woff2,svg,ttf,xlsx,docx,doc,xls}',
            './assets/**/*.imports.js')
        // gerador de bundles JS: "web/import-generator/gerar.js"
    ,
    output: {
        path: path.resolve(__dirname, 'web/dist'),
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new DashboardPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: 'css/[id].chunk.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    resolve: {
        extensions: [".js", ".css", ".scss", ".sass"],
        alias: {
            'bootstrap': path.resolve(__dirname, 'web/bootstrap-base'),
            'fontawesome': path.resolve(__dirname, 'assets/fonts'),
            'dynatree': path.resolve('assets/js/lib/jquery-dynatree.js'),
            'maphilight': path.resolve('assets/js/lib/jquery-maphighlight.js'),
            'garlic': path.resolve('assets/js/lib/garlic.min.js'),
        }
    },
    node: {
        fs: "empty"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /src\/css/, /src\/images/],
                use: [
                    {
                      loader: 'template-string-optimize-loader'
                    },
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: ["@babel/plugin-syntax-dynamic-import"]
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico|pdf|xlsx|docx|doc|xls)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path]/[name].[ext]'
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 75
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            }
                        }
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        publicPath: '../'
                    }
                }]
            }
        ]
    }
};
