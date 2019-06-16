'use strict'
const path = require('path')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackConfig = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'production',
  context: path.resolve('./src'),
  entry: {
    index: './main.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: path.posix.join('static/js/[name].[chunkhash].js'),
    chunkFilename: path.posix.join('static/js/[name].[chunkhash].js')
  },
  devtool: '#source-map',
  module: {
    rules: [{
      test: /\.css$/,
      loader: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      include: [path.resolve(__dirname, '../src')]
    }]
  },
  plugins: [
    new HtmlWebpackConfig({
      filename: 'index.html',
      template: '../index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
      chunkFilename: 'css/[name].[chunkhash:12].css'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      minChunks: 1,
      name: () => {},
      cacheGroups: {
        index: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
})

module.exports = webpackConfig
