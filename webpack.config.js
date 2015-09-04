var webpack = require('webpack');
var path = require('path');

var BowerWebpackPlugin = require("bower-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD = false;

module.exports = {
  entry: './src/app/main.js',
  output: {
    // Absolute output directory
    path: __dirname + '/dist',

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    publicPath: BUILD ? '/' : 'http://localhost:8080/',

    // Filename for entry points
    // Only adds hash in build mode
    filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',

    // Filename for non-entry points
    // Only adds hash in build mode
    chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
  },
  module: {
    preLoaders: [],
    loaders: [
      {test: /\.js$/, loader: 'babel', include: path.join(__dirname,'src') },
      {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader:ExtractTextPlugin.extract('style', 'css?sourceMap')}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css'],
    alias: {
      authModule: './common/auth/auth.module.js'
    }
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash].css', {
      disable: !BUILD
    }),
    new HtmlWebpackPlugin({template: './src/index.html', inject: 'body', minify:false}),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BowerWebpackPlugin()
    //new webpack.optimize.UglifyJsPlugin()
  ],
  postcss: [autoprefixer({
    browsers: ['last 2 version']
  })],
  devServer: {
    contentBase: "./dist",
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    },
    hot:true,
    inline: true
  }
};
