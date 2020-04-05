const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  entry:{
    "yotsuba-kissu-b": './src/yotsu-kissu-b.scss',
    "dark-kissu": './src/dark-kissu.scss',
    "kissu": './src/kissu.scss',
  },
plugins: [
  new FixStyleOnlyEntriesPlugin(),
  new MiniCssExtractPlugin({filename: '../../pub/stylesheets/[name].css'}),
],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,

          // Translates CSS into CommonJS
          'css-loader'
        ],
      },
    ],
  },
};
