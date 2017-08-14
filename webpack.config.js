var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, './src/assets/scripts/'),
        publicPath: '/src/assets/scripts/',
        filename: 'main.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }

}
