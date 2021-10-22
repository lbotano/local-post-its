const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './assets/logo-32p.png'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/manifest.json',
          to: './manifest.json'
        },
        {
          from: './assets/**/*.png',
          to: './'
        }
      ]
    }),
    ...(
      process.env.NODE_ENV === 'production'
        ? [
          new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 5000000
          })
        ]
        : []
    )
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    devMiddleware: {
      writeToDisk: true
    }
  },
  devtool: 'source-map'
}

module.exports = config
