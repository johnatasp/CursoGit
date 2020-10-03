/*!
 * 2019 (c) Vox Tecnologia.
 * @author Natan Cardoso <natan@voxtecnologia.com.br>
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    stats: "errors-only",
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                },
                canPrint: true
            }),
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                extractComments: false,
                terserOptions: {
                    parse: {
                        ecma: 2017,
                    },
                    compress: {
                        ecma: 2017,
                    },
                    warnings: false,
                    mangle: true,
                    module: false,
                    output: null,
                    toplevel: true,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: false,
                  },
            }),
        ],
    }
});
