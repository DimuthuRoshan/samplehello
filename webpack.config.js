let webpack = require('webpack');
const path = require('path');
module.exports = {
    devtool: 'inline-source-map',
    entry: [
        './src/app.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: './src/dist/bundle.js'
    },
    plugins: [
        /*new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({minimize: true})*/
    ],
    module: {
        loaders: [
            {
                exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {test: /\.scss$/, loaders: ['style', 'css', 'postcss-loader', 'sass']},
            {test: /\.(woff|ttf|eot|svg)(\?[a-z0-9]+)?$/, loaders: ['file']},
            {test: /\.(ttf|eot|svg|eot|woff|otf|png|gif)/, loader: "file-loader"},
            {test: /\.json$/, loader: 'json'}
        ]
    },
    postcss: () => {
        return [
            require('autoprefixer')
        ];
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        alias: {
            'main.scss': path.join(__dirname, './style/scss/main.scss')
        }
    },

    devServer: {
        historyApiFallback: true,
        contentBase: './',
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./style")]
    }
};
