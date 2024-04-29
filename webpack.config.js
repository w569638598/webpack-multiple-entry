const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");


// console.log(devConf, prodConf);


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


var conf = {
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
    module: {},
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
            // Vue: 'vue',
            utils: '../../utils/index', // 指定模块名称而不是文件路径 
            // ElementPlus: 'element-plus'

        }),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'html/douyin/index.html'),

        //     chunks: ['douyin'],
        //     filename: `html/douyin/index.html`,
        // }),
        // 为css创建文件夹
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
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
        const prodConf = require('./prod.js')
        config = conf
        config.module.rules = prodConf.rule
        config.devServer.client = prodConf.client
        config.entry = prodConf.entry
        config.plugins.push(...prodConf.htmlPageList)
    } else if (argv.mode === 'development') {
        const devConf = require('./dev.js')
        // 做css文件压缩
        config.module['rules'] = devConf.rule
        config.devServer.client = devConf.client
        config.entry = devConf.entry
        config.plugins.push(...devConf.htmlPageList)
        config.devtool = 'source-map'
    }
    return config
}