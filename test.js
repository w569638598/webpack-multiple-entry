const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

// html文件导出插件配置
const { globSync } = require('glob')
const htmlFiles = globSync('./html/**/*.html')
let htmlPageList = []
for (let i = 0; i < htmlFiles.length; i++) {
    const file = htmlFiles[i]
    const filePath = /(.*\\)(.*)\\(.*)\.html$/gi.exec(file)
    const pageName = filePath[3]
    const folder = filePath[2]
    htmlPageList.push(new HtmlWebpackPlugin({
        template: path.resolve(__dirname, htmlFiles[i]),
        chunks: [folder],
        filename: `${folder}.html`,
    }))
}

// 入口配置
const jsFiles = globSync('./src/**/*.js')
let entryList = {}
for (let i = 0; i < jsFiles.length; i++) {
    const file = jsFiles[i]
    const pageName = /(.*)\\(.*)\\(.*)\.js$/gi.exec(file)[2]
    entryList[pageName] = "./" + file
}

var conf = {
    entry: entryList,
    devServer: {
        static: './dist',//项目运行目录
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    optimization: {
        // mergeDuplicateChunks: true,
    },
    externals: {
        Vue: 'vue',
    },
    module: {    
        rules: [
        {
            test: /\.vue$/,
            use: 'vue-loader',
        },
        {
            test: /\.less$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.html$/,
            use: 'raw-loader',
        },
    ],},
    stats: 'errors-only',
    output: {
        filename: 'js/[name].[contenthash:5].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './assets'),
            '@comp': path.resolve(__dirname, './components'),
            '@hooks': path.resolve(__dirname, './hooks'),
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            utils: '../../utils/index', // 指定模块名称而不是文件路径 

        }),
        // 为css创建文件夹
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        ...htmlPageList,
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'staticResources'), to: 'staticResources' },
            ],
        }),
    ],
}
module.exports = (env, argv) => {
    let config = conf
    console.log(config.module.rules);
        config.devtool = 'source-map'
    return config
}