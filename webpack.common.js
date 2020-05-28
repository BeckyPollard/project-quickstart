const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
    vendor: './src/vendor.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
    }),
    // ADD FOR EACH NEW HTML PAGE
    // new HtmlWebpackPlugin({
    //   template: './src/about.html',
    //   filename: 'about.html',
    // }),
    // TODO: better auto way of handling html pages?
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader', //require assets linked in html
        ],
      },
      {
        test: /\.(svg|png|jpg|jpe)$/,
        use: {
          loader: 'file-loader', //require assets linked in html
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
    ],
  },
};
