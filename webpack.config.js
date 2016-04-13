var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:4001',
    'webpack/hot/only-dev-server',
    './src/app/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
        //include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
            'style',
            'css',
            'autoprefixer?browsers=last 3 versions',
            'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url?limit=8192',
            'img'
        ]
      }

    ]
  }
};

module.exports = config;
