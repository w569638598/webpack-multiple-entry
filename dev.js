module.exports = {
    rule: [
        {
            test: /\.vue$/,
            use: 'vue-loader',
        },
        {
            test: /\.less$/i,
            use: ['style-loader', 'css-loader',  'less-loader']
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