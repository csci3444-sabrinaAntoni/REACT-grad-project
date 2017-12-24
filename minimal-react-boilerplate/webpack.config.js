module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:1337',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
};