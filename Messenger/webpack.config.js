const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),   
    devtool : 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    } ,
    resolve: {
        extensions: ['.js' , '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            assets : path.resolve(__dirname, 'src', 'assets'),
            pages : path.resolve(__dirname, 'src', 'pages'),
            actions : path.resolve(__dirname, 'src', 'actions'),
            reducers : path.resolve(__dirname, 'src', 'reducers'),
            containers : path.resolve(__dirname, 'src', 'containers'),
            middlewares : path.resolve(__dirname, 'src', 'middlewares'),        
        }
    },
    module:{
        rules:[
            {
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'sass-loader'                  
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    devServer:{
        historyApiFallback: true,
    }
}