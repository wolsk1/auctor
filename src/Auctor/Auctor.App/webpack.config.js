var path = require('path');
var webpack = require('webpack');
var babelPolifyll = require("babel-polyfill");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (opts) {
    var wwwroot = path.join(__dirname, '..', 'Auctor', 'wwwroot')

    var config = {
        devtool: opts.devtool,
        debug: false,

        entry: {
            'vendor': './src/vendor.ts',
            'app': ['./src/main.ts']
        },

        output: {
            path: wwwroot,
            filename: opts.output.filename,
            sourceMapFilename: '[file].map'
        },

        resolve: {
            root: [__dirname],
            extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
            alias: {
                packageAlias: false
            }
        },

        module: {
            loaders: [
                { test: /lodash/, loader: 'exports?_' },
                { test: /\.ts$/, loader: 'ts' },
                { test: /\.json$/, loader: "json" },
                { test: /\.(woff|woff2|ttf|eot)(\?.*$|$)/, loader: 'file?name=fonts/[name].[hash].[ext]' },
                { test: /\.(png|jpe?g|gif|svg|ico)(\?.*$|$)/, loader: 'file?name=gfx/[name].[hash].[ext]' },
                {
                    test: /\.jade$/,
                    //loader: "file?name=[path][name].html&context=./app!html!jade-html?pretty=true",
                    loader: "html!pug-html?pretty=true",
                    exclude: /index\.jade$/
                }
            ],
            noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /angular2-polyfills\.js/]
        },

        postcss: function () {
            return [require('autoprefixer'), require('precss')];
        },

        plugins: [
            new CopyWebpackPlugin([{
                from: 'gfx/favicon.gif',
                to: 'favicon.gif'
            }]),
            new CopyWebpackPlugin([{
                from: 'error.html',
                to: 'error.html'
            }]),
            new HtmlWebpackPlugin({
                template: 'html!pug-html!index.jade',
                filename: 'index.html',
                favicon: './src/favicon.gif',
                chunks: ['vendor', 'app']
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['vendor']
            }),
            new CleanWebpackPlugin(['./wwwroot'])
        ],

        htmlLoader: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true
        }
    };

    if (opts.extractStyles) {
        config.plugins.push(new ExtractTextPlugin('[name].[hash].styles.css', { allChunks: true }));
        config.module.loaders.push({ test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') });
        config.module.loaders.push({ test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!less') })
    }
    else {
        config.module.loaders.push({ test: /\.css$/, loader: 'style!css!postcss' });
        config.module.loaders.push({ test: /\.less$/, loader: 'style!css!postcss!less' })
    }

    if (opts.clean) {
        config.plugins.push(new CleanWebpackPlugin(['wwwroot'], {
            root: path.join(wwwroot, '..'),
            verbose: true
        }));
    }

    if (opts.optimize) {
        config.plugins.push(new webpack.optimize.DedupePlugin());
        config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin(true));
    }

    return config;
};
