var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnext = require('cssnext');

var BUILD = false;

module.exports = {
  entry: './src/app/main.js',
  output: {
    // Absolute output directory
    path: path.join(__dirname , '/dist'),

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
  cache: true,
  debug: true,
  devtool: 'source-map',
  module: {
    preLoaders: [],
    loaders: [
      {test: /((\.js)|(\.jsx))$/, loader: 'ng-annotate!babel!eslint', include: path.join(__dirname, 'src')},
      {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader: 'style-loader!css-loader!postcss'},
      {test: /\.styl$/, loader: 'style-loader!css-loader!postcss!stylus-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css'],
    alias: {
      'bootstrap-css-only': path.join(__dirname,'/bower_components/bootstrap-css-only/css/bootstrap.css')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html', inject: 'body', minify: true}),
    //new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
    //new webpack.optimize.UglifyJsPlugin()
  ],
  postcss: [autoprefixer({
    browsers: ['last 2 version']
  }),
    precss,
    cssnext
  ],
  eslint: {
    configFile: './.eslintrc'
  },
  devServer: {
    contentBase: './dist',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    },
    hot: true,
    inline: true
  }
};
