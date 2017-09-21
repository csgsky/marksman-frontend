const path = require('path')
const webpack = require('webpack')
const HtmlwebpackPlugin = require('html-webpack-plugin')
// 一些常用路径
const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'app')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  // 开启 dev source map
  devtool: 'eval-source-map',
  // 开启 webpack dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  modules: {
    // 配置preLoaders, 将eslint 添加进去
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: APP_PATH
      }
    ],

    // 配置loader，将Babel添加进去
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      }
    ]
  },

  // 配置 plugin
  plugins: [
    new HtmlwebpackPlugin({
      title: 'my first react webpack'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
    // 在js中import加载jsx扩展名的脚本
  }
}
