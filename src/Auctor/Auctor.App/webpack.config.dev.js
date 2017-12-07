var path = require('path');
var webpackConfig = require('./webpack.config');

module.exports = webpackConfig({
    devtool: 'source-map',
    clean: false,
    extractStyles: false,
    optimize: true,
    minify: false,
    output: {
        filename: '[name].js'
    }
});
