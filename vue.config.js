/*
 *Vue-CLI项目的核心配置文件
 */
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
const webpack = require("webpack");

module.exports = {
  //adding extract css true solves this issue
 css: {
  extract: true
},
  // configureWebpack: {
  //   devServer: {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*"
  //     }
  //   },
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       $: "jquery",
  //       jQuery: "jquery",
  //       "window.jQuery": "jquery",
  //       Popper: ["popper.js", "default"],
  //     }),
  //   ],
  // },
  chainWebpack: (config) => {

    /* 
       Disable (or customize) prefetch, see:
       https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch
    */
    config.plugins.delete('prefetch')

    /* 
       Configure preload to load all chunks
       NOTE: use `allChunks` instead of `all` (deprecated)
    */
    config.plugin('preload').tap((options) => {
      options[0].include = 'allChunks'
      return options
    })
  },
  publicPath: '/web/',
  configureWebpack: config => {
    if (isProduction) {
     // 开启gzip压缩
     config.plugins.push(new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.html$|\.json$|\.css/,
      threshold: 10240,
      minRatio: 0.8
     }))
    //  
    config.optimization = {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name (module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`
            }
          }
        }
      }
    }
    }
   },
     // 以下是pwa配置
  // pwa         : {
  //   iconPaths: {
  //     favicon32     : 'favicon.ico',
  //     favicon16     : 'favicon.ico',
  //     appleTouchIcon: 'favicon.ico',
  //     maskIcon      : 'favicon.ico',
  //     msTileImage   : 'favicon.ico'
  //   }
  // }
};