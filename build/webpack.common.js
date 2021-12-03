const path = require("path");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const ESLintPlugin = require("eslint-webpack-plugin");

// const TARGET = process.env.npm_lifecycle_event;

module.exports = {
  entry: "./src/Temp/Temp.vue",
  output: {
    filename: "Temp.js",
    path: path.resolve(__dirname, "../dist"),
  },
  plugins: [
    new VueLoaderPlugin(), // Plug in for parsing and converting. vue files
    new ESLintPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset", // Automatically choose between exporting a data URI and sending a separate file
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.pug$/,
        use: ["vue-pug-loader"],
      },
    ],
  },
};
