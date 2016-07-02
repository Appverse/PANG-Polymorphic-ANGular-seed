var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


// Webpack Config
var webpackConfig = {
  entry: {
    'polyfills': './app/App_Resources/web/polyfills.web.ts',
    'vendor': './app/App_Resources/web/vendor.web.ts',
    'main': './app/main.web.ts',
  },

  plugins: [
    new webpack.DefinePlugin({
      'global': {
        'web' : true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor', 'polyfills'], minChunks: Infinity }),
  ],

  module: {
    preLoaders: [
      {
        test: /\.(ts|scss)$/,
        loader: 'string-replace',
        query: {
          multiple: [{
            search: '.tns.html',
            replace: '.web.html'
          },{
            search: '.tns.ts',
            replace: '.web.ts'
          }, {
              search: '.tns.s?css',
              replace: '.web.scss',
              flags: 'i'
            }]
        }
      }
    ],
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
      { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"], exclude: [path.resolve(__dirname, 'app', 'client')] },
      { test: /\.scss$/, loaders: ["to-string", "css?sourceMap", "sass?sourceMap"], include: [path.resolve(__dirname, 'app', 'client')] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  }

};


// Our Webpack Defaults
var defaultConfig = {
  devtool: 'source-map',
  cache: true,
  debug: false,
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          path.join(__dirname, 'node_modules', 'rxjs'),
          path.join(__dirname, 'node_modules', '@angular2-material'),
          path.join(__dirname, 'node_modules', '@angular'),
        ]
      }
    ],
    noParse: [
      path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
      path.join(__dirname, 'node_modules', 'angular2', 'bundles')
    ]
  },

  resolve: {
    root: [path.join(__dirname, 'app')],
    alias: {
      "ui/frame": 'package.json' // Hackish ;)
    },
    extensions: ['', '.ts', '.js', '.json']
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  },
}

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);
