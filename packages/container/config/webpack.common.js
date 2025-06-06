const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    plugins : [
        new HtmlWebPackPlugin({
            template : './public/index.html'
        })
    ],
    module : {
        rules : [
           {
              test : /\.m?js$/,
              exclude : /node_modules/,
              use : {
                loader : 'babel-loader',
                options : {
                    presets : ['@babel/preset-react','@babel/preset-env'],
                    plugins : ['@babel/plugin-transform-runtime'],
                }
              }
           } 
        ]
    }
}

