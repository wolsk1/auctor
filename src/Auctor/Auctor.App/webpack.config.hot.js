var webpackConfig = require('./webpack.config');

module.exports = webpackConfig({
    devtool: 'eval-source-map',
    clean: true,
    extractStyles: false,
    optimize: false,
    hotReload: false,
    define: {
        SERVER_URL__: "'http://localhost/steeringWs'",
        DEBUG__: 'true'
    }
});
