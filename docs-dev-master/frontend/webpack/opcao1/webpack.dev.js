/*!
 * 2019 (c) Vox Tecnologia.
 * @author Natan Cardoso <natan@voxtecnologia.com.br>
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: "cheap-module-source-map",
    stats: "normal" // tipo do log
});
