var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnext = require('cssnext');
//var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
//var reset = require('postcss-autoreset');
//var pInitial = require('postcss-initial');

module.exports = function makeWebpackConfig(options) {
  var config = {
    entry: path.join(__dirname, '/src/app/main.js'),
    output: {
      //Absolute output directory
      path: path.join(__dirname, '/dist'),

      //Output path from the view of the page
      //Uses webpack-dev-server in development
      publicPath: options.BUILD ? '/' : 'http://localhost:8080/',

      //Filename for entry points
      //Only adds hash in build mode
      filename: options.BUILD ? '[name].[hash].js' : '[name].bundle.js',

      //Filename for non-entry points
      //Only adds hash in build mode
      chunkFilename: options.BUILD ? '[name].[hash].js' : '[name].bundle.js'
    },
    debug: !options.BUILD,
    devtool: options.BUILD ? '' : 'source-map',

    module: {
      preLoaders: [],
      loaders: [
        {test: /((\.js)|(\.jsx))$/, loader: 'ng-annotate!babel!eslint', include: [path.join(__dirname, 'src'), path.join(__dirname, 'test')]},
        {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file'},
        {test: /\.html$/, loader: 'html'},
        {test: /\.css$/, loader: 'style-loader!css-loader', include: path.join(__dirname, 'bower_components')},
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
          exclude: path.join(__dirname, 'bower_components')
        },
        {
          test: /\.styl$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!stylus-loader'
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.css'],
      alias: {
        'bootstrap-css-only': path.join(__dirname, '/bower_components/bootstrap-css-only/css/bootstrap.css')
      }
    },
    postcss: [autoprefixer({
      browsers: ['last 2 version']
    }),
      precss,
      cssnext
//      reset,
//      pInitial
    ],
    eslint: {
      configFile: path.join(__dirname, '.eslintrc')
    },
    plugins: [
      new HtmlWebpackPlugin({template: path.join(__dirname, '/src/index.html'), inject: 'body', minify: true}),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: path.join(__dirname, '/dist'),
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

  if (options.TEST) {
    config.entry = {};
    config.output = {};
    config.devtool = 'inline-source-map';
    config.module.preLoaders.push({
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/
      ],
      loader: 'isparta-instrumenter'
    });
  }

  if (options.BUILD) {
    config.plugins.push(
      //Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      //Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      //Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      //Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin()
    );
  }

  return config;
};
