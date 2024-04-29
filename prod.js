const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { globSync } = require('glob')
const htmlFiles = globSync('./html/**/*.html')
let htmlPageList = []
for (let i = 0; i < htmlFiles.length; i++) {
    const file = htmlFiles[i]
    const filePath = /html\/(.*)\/(.*)\.html$/gi.exec(file)
    const folder = filePath[1]
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
    const pageName = /(.*)\/(.*)\/(.*)\.js$/gi.exec(file)[2]
    entryList[pageName] = "./" + file
}
module.exports = {
    htmlPageList,
    entry: entryList,
    rule: [
        {
            test: /\.vue$/,
            use: 'vue-loader',
        },
        {
            test: /\.less$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader',  'less-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.html$/,
            use: 'raw-loader',
        },
    ],
    client: {
        overlay: {
            errors: true,
            warnings: false,
        },
    },
}