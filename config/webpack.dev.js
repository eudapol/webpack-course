const path = require("path");
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: {
        main:["core-js/fn/promise","./src/main.js"],
        ts : ["./src/index.ts"]
    },
    mode: "development",
    output:{
        filename: "[name]-bundle.js",
        path:  path.resolve(__dirname, "../dist"),
        publicPath:"/"
    },
    devtool : "source-map",
    devServer: {
        contentBase:"dist",
        overlay: true,
        hot: true,
        stats :{
            colors: true
        }
    },
    module :{
        rules: [
            {
                test :/\.css$/,
                use : [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader : 'css-loader',
                        query :{
                            modules:{
                                localIdentName : "[local]"
                            }
                            
                        }
                    }
                ]
            },
            {
                test : /\.html$/,
                use :[
                    {
                        loader: 'html-loader',
                        options:{
                            attrs: ["img:src"]
                        }
                        
                    }
                ]

            },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]",
                            esModule: false,
                          }
                    }
                ]
            },
            {
                test : /\.js$/,
                use :[
                    {
                        loader : "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            {
                test : /\.ts$/,
                use :[
                    {
                        loader : "ts-loader"
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },

    plugins :[
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template : "./src/index.html"
        })
    ]


}