/*
 *Vue-CLI项目的核心配置文件
 */
const webpack = require("webpack");

module.exports = {

  configureWebpack: {
    // devServer: {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*"
    //   }
    // },
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery",
    //     "window.jQuery": "jquery",
    //     Popper: ["popper.js", "default"],
    //   }),
    // ],
  },
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
  publicPath: '/web/'
};