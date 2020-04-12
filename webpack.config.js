
var path = require('path');
var build_path = 'build';
// var build_path = '../sme-arcade/src/_temp/sme-theme/build';
// var build_path = '../sme-arcade/node_modules/sme-theme/build';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, build_path),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, build_path)
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  externals: {
    'react': 'commonjs react'
  },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: 'theme.css',
  //   }),
  // ]
};
