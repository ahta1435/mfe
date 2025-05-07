const {merge } = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');

const devConfig = {
    mode : 'development',
    devServer : {
        port : 8081,
        historyApiFallback : {
            index : 'index.html'
        }
    },
    plugins : [
        new HtmlWebPackPlugin({
            template : './public/index.html'
        }),
        new ModuleFederation({
            name : 'marketing',
            filename : 'remoteEntry.js',
            exposes : {
                './Marketing': './src/bootstrap'
            }
        })
    ],

}

module.exports = merge(commonConfig, devConfig);