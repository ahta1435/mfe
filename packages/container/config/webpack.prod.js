const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {merge} = require('webpack-merge');
const webPackCommon = require('./webpack.common');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode : 'production',
    output : {
        filename : '[name].[contenthash].js'
    },
    plugins : [
        new ModuleFederationPlugin({
            name : 'container',
            remotes : {
                marketing : `marketing@${domain}/marketing/remoteEntry.js`
            }
        })
    ]
}

module.exports = merge(webPackCommon,prodConfig);