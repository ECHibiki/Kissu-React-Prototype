const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry:{
    "yotsuba-kissu-b": './src/yotsu-kissu-b.scss',
    "dark-kissu": './src/dark-kissu.scss',
    "kissu": './src/kissu.scss',
  },
mode: "production",
plugins: [

  new MiniCssExtractPlugin({filename: '../../pub/stylesheets/[name].css'}),
  new CompressionPlugin({include:/..\/..\/pub\/stylesheets\/.*/, filename: '[path].gz[query]',  threshold: 0}),
  new FixStyleOnlyEntriesPlugin(),

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
