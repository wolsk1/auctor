var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.hot.js')

var server = new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    //   compress: true,
    quiet: false,
    noInfo: false,
    //   lazy: true,
    //   filename: "bundle.js",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    //   publicPath: "/assets/",
    //   headers: { "X-Custom-Header": "yes" },
    stats: { colors: true },
    proxy: {
        '/api': 'http://localhost/steeringWs/api'
    }
});

server.listen(8080, "localhost", function () { });
