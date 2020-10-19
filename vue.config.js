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
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"],
      }),
    ],
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/web/' : '/web/'
};