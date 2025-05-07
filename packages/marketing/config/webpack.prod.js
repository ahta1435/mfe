const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {merge} = require('webpack-merge');
const webPackCommon = require('./webpack.common');

const prodConfig = {
    mode : 'production',
    output : {
        filename : '[name].[contenthash].js'
    },
    plugins : [
        new ModuleFederationPlugin({
            name : 'marketing',
            filename : 'remoteEntry.js',
            exposes : {
                './Marketing': './src/bootstrap'
            }
        })
    ],
}

module.exports = merge(webPackCommon,prodConfig);