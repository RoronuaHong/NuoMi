const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const theme = require('./package.json').theme;

//设置路径
const distPath = path.resolve(__dirname, "dist");

const config = {
    entry: {
        main: "./src/index",
    },
    output: {
        publicPath: "/",
        path: distPath,
        filename: "[name].[chunkhash:10].js",
        chunkFilename: "[id].chunk.js"
    },
    resolve: {
        extensions: [".js", ".css", ".scss", ".png", ".jpg", ".jpeg", ".gif"]
    },
    module: {
        rules: [
            /*将ES6转化为ES5、JSX转换为js*/
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.join(__dirname, "node_modules")
                ],
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    { 
                        loader: 'less-loader', 
                        options: { 
                            modifyVars: theme 
                        } 
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    browsers: [
                                        'Chrome >= 35',
                                        'Firefox >= 38',
                                        'Edge >= 12',
                                        'Explorer >= 10',
                                        'iOS >= 8',
                                        'Safari >= 8',
                                        'Android 2.3',
                                        'Android >= 4',
                                        'Opera >= 12'
                                    ],
                                    cascade: true,
                                    add: true,
                                    remove: true
                                })
                            ]
                        }
                    }
                ],
                include: /node_modules/,
            },
            /*压缩图片*/
            {
                test: /\.(png|svg|jpg|gif|jepg)$/,
                use: [
                    "url-loader?limit=819200&name=images/[name].[ext]",
                    "image-webpack-loader?{pngquant:{quality: '50-70', speed: 8}, mozjpeg: {quality: 50}}"
                ]
            },
            /*配置字体文件*/
            {
                test: /\.(png|woff|woff2?|eot|ttf|otf)($|\?)/i,
                loader: 'url-loader?limit=5000'
            }
        ]
    },
    plugins: [
        /*生成css*/
        new ExtractTextPlugin({
            filename: "[name].[hash].bundle.css",
            allChunks: true
        }),
        new ServiceWorkerWebpackPlugin({
            entry: path.join(__dirname, 'sw.js'),
            exclude: [
                path.join(__dirname, "node_modules")
            ]
        })
    ]
}

//获取index页面
const indexHtml = glob.sync("./src/index.html");

indexHtml.forEach(pathname => {
    const conf = {
        filename: "index.html",
        template: "./src/index.html",
        favicon: "./src/images/slimlogo.png",               //设置icon图标
        minify: {                                           //压缩HTML文件
            removeComments: true,                           //移除HTML中的注释
            collapseWhitespace: true                        //删除空白符与换行符
        },
        name: "react",
        title: "My Blog"
    }

    config.plugins.push(new HtmlWebpackPlugin(conf));
});

module.exports = config;