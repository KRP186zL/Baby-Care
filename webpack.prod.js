const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png)$/i,
        type: "asset",
      },
    ],
  },
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
        },
      }),
    ],
  },
});
