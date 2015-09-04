var webpack = require('webpack');

var BowerWebpackPlugin = require("bower-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    hash: true
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
      {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css'],
    alias: {
      authModule: './common/auth/auth.module.js'
    }
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BowerWebpackPlugin({
      modulesDirectories: ['bower_components'],
      manifestFiles: ['bower.json', '.bower.json'],
      includes: /.*/,
      excludes: /.*\.less$/
    }),
    new HtmlWebpackPlugin({template: './src/index.html', inject: 'body', filename: 'index.html'})
    //new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    inline: true
  }
};
