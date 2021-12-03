const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    // https://webpack.docschina.org/plugins/terser-webpack-plugin/
    // Compression js
    minimize: true,
    minimizer: [
      // https://webpack.docschina.org/plugins/terser-webpack-plugin/
      // Compression js
      new TerserPlugin({
        parallel: true, // Using multi process concurrent execution to improve the construction speed
      }),
    ],
  },
});
