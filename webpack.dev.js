const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',

  // ? Dev server
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8080,
    historyApiFallback: {
      index: '/index.html',
      rewrites: [{ from: /./, to: '/index.html' }],
    },
  },

  plugins: [
    // ? HTML
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public', 'index.html'),
    }),

    // ? Copy
    new CopyPlugin({
      patterns: [{ from: './src', to: './static' }],
    }),
  ],

  module: {
    rules: [
      // ? Css/Scss
      {
        test: /\.s?css$/,
        oneOf: [
          {
            test: /\.module\.s?css$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  sassOptions: {
                    modules: true,
                  },
                },
              },
            ],
          },
          {
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ],
      },
    ],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
};
