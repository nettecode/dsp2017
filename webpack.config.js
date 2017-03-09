/**
 * Created by nette on 01.03.17.
 */
var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};