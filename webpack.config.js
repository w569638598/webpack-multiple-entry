const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')
const devConf = require('./dev.js')
const prodConf = require('./prod.js')
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


// node方法根据js文件生成总体页面
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


const conf = {
    entry: entryList,
    // entry: {
    //     douyin: './src/douyin/douyin.js',
    // },
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
    stats: 'errors-only',
    output: {
        filename: 'js/[name].[contenthash:5].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
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
            // Vue: 'vue',
            utils: '../../utils/index', // 指定模块名称而不是文件路径 
            // ElementPlus: 'element-plus'

        }),
        ...htmlPageList,
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'html/douyin/index.html'),

        //     chunks: ['douyin'],
        //     filename: `html/douyin/index.html`,
        // }),
        // 为css创建文件夹
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            insert: 'body'
        }),
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
    if (argv.mode === 'production') {
        config.module.rules = prodConf.rule
        config.devServer.client = prodConf.client
    }
    if (argv.mode === 'development') {
        // 做css文件压缩
        config.module.rules = devConf.rule
        config.devServer.client = devConf.client
        config.devtool = 'source-map'
    }
    return config
}