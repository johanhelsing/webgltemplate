var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './app/main.js'
    ],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.glsl/, loader: 'glsl-loader' }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
        //new webpack.optimize.DedupePlugin(),
        //new webpack.optimize.UglifyJsPlugin(),
        //new webpack.optimize.OccurenceOrderPlugin(),
        //new webpack.optimize.AggressiveMergingPlugin()
    ]
};
