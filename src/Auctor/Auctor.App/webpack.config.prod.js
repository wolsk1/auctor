var webpackConfig = require('./webpack.config');

module.exports = webpackConfig({
    devtool: 'source-map',
    clean: true,
    extractStyles: true,
    optimize: true,
    hotReload: false,
    define: {
        SERVER_URL__: 'null',
        DEBUG__: 'false'
    }
});

