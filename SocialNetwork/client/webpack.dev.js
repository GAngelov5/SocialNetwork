let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let path = require('path');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    devtool: 'source-map',
    
    output: {
        path: __dirname + '/build/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
    },

    resolve: {
        extensions: ['.ts', '.js', '.html', '.css', 'json']
    },
    module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
            'awesome-typescript-loader',
            'angular-router-loader',
            'angular2-template-loader',
            'source-map-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, "src/app"),
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
      },
      {
        test: /\.css$/,
        include:  path.resolve(__dirname, "src/app"),
        use: 'raw-loader'
      }
    ]
  },

  plugins: [
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            template: '../template/index.html'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        })
    ]
}