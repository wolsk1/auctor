var path = require('path');
var webpackConfig = require('./webpack.config');

module.exports = webpackConfig({
    devtool: '#eval-source-map',
    debug: true,
    clean: true,
    extractStyles: false,
    optimize: false,
    hotReload: false,
    define: {
        SERVER_URL__: "'https://auctor/'",
        DEBUG__: 'true'
    }
});
