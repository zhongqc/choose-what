'use strict'
const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')

const host = '0.0.0.0'
const port = 8080

const webpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [{
        from: /.*/,
        to: path.posix.join('', 'index.html')
      }]
    },
    hot: true,
    contentBase: false,
    compress: true,
    host: host,
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    publicPath: '',
    quiet: true,
    watchOptions: {
      poll: true
    },
    disableHostCheck: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Application running at: http://${host}:${port}`]
      },
      onErrors: (severity, errors) => {
        if (severity !== 'error') return
        const error = errors[0]
        console.log(error)
        const filename = error.file && error.file.split('!').pop()

        notifier.notify({
          title: 'choose-what',
          message: `${severity}:${error.name}`,
          subtitle: filename || ''
        })
      }
    })
  ]
})

module.exports = webpackConfig
