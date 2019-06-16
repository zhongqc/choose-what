'use strict'
const path = require('path')

module.exports = {
  context: path.resolve('./'),
  entry: {
    index: './src/main.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {},
        transformToRequire: {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: 'xlink:href'
        }
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.resolve(__dirname, '../src')
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader', 'postcss-loader'],
      include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../demo')]
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: path.posix.join('static/img/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: path.posix.join('static/media/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: path.posix.join('static/fonts/[name].[hash:7].[ext]')
      }
    }]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
