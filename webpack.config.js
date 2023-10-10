const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


// html文件导出插件配置
const { globSync } = require('glob')
const htmlFiles = globSync('./html/**/*.html')
let htmlPageList = []
for (let i = 0; i < htmlFiles.length; i++) {
    const file = htmlFiles[i]
    const filePath = /(.*\\)(.*)\\(.*)\.html$/gi.exec(file)
    const pageName = filePath[3]
    const folder = filePath[2]
    console.log(/(.*)\\(.*)\\(.*)\.html$/gi.exec(file));
    htmlPageList.push(new HtmlWebpackPlugin({
        template: path.resolve(__dirname, htmlFiles[i]),
        chunks: [pageName],
        filename: `html/${folder}/${pageName}.html`,
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


// node方法根据js文件生成总体页面
// const fs = require('fs')
// const files = fs.readdirSync(path.resolve(__dirname, 'src', '**'))
// console.log(files);
// let htmlPageList = []
// for (const file of files) {
//     const filePage = fs.readdirSync(path.resolve(__dirname, 'src/' + file))
//     for (const page of filePage) {
//         if(/\.js$/i.test(page)){
//             const pageName = page.substring(0, page.length - 3)
//             htmlPageList.push(new HtmlWebpackPlugin({
//                 template: path.resolve(__dirname,'html', file, `index.html`),
//                 chunks: [pageName],
//                 filename: `html/${pageName}.html`,
//             }))
//         }
//     }
//   }
module.exports = {
    mode: 'development',
    entry: entryList,
    output: {
        filename: 'js/[name].[contenthash:5].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        ...htmlPageList
    ]
}