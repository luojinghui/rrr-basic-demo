'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
    // 'webpack-hot-middleware/client',
    './index'],
    output: {
        // path: path.join(__dirname, 'dist'),  // This is where images AND js will go
        filename: 'bundle.js'
    },
    plugins: [new webpack.optimize.OccurrenceOrderPlugin(), new webpack.HotModuleReplacementPlugin()],
    module: {
        loaders: [{ test: /\.coffee$/, loader: 'coffee-loader' }, {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
        { test: /\.css$/, loader: 'style-loader!css-loader' }, { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee']
    }
};

//# sourceMappingURL=webpack.config-compiled.js.map