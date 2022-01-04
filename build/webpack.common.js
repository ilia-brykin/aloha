const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// const TARGET = process.env.npm_lifecycle_event;

module.exports = {
  entry: "./docs/main.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../docs/dist"),
    publicPath: "/",
  },
  // resolve: {
  //   extensions: ['.vue', '.ts', '.js', '.jsx', '.json'], //It means that the file suffix can not be written in the import file
  //   alias: {
  //     '@': path.join(__dirname, '../src')
  //     //When the import file is in src, it can be written as @ / component /
  //   }
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "I am webpack.config Configured title",
      template: "./public/index.html",
      // Compress HTML
      minify: {
        removeComments: true, // Remove comments from HTML
        collapseWhitespace: true // Remove whitespace and newline
      }
    }),
    new VueLoaderPlugin(), // Plug in for parsing and converting. vue files
    new ESLintPlugin({}),
    new CopyWebpackPlugin({
      patterns: [
        // { from: "../public", to: "./" },
        { from: "docs/static/" },
      ],
    }),
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
        exclude: /\.lazy\.s[ac]ss$/i,
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
        test: /\.lazy\.s[ac]ss$/i,
        use: [
          { loader: "style-loader", options: { injectType: "lazyStyleTag" } },
          "css-loader",
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
  // https://webpack.docschina.org/guides/caching/
  optimization: {
    // The deterministic option benefits long-term caching
    moduleIds: "deterministic",
    // use optimization.runtimeChunk  Option to split the runtime code into a separate chunk
    runtimeChunk: "single",
    splitChunks: {
      // Using the client's long-term caching mechanism, hit the cache to eliminate requests and reduce getting resources from the server,
      // At the same time, it can ensure that the client code and server code version are consistent. This can be done by
      // Use the cacheGroups option of the SplitChunksPlugin plug-in.
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
