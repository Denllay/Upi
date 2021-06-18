const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.bundle\.ts$/,
        use: {
          loader: 'bundle-loader',
          options: {
            name: '[name]',
          },
        },
      },
      // ? SVG
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      // ? TS
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // ? IMG
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // ? Fonts
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    // ? Очистка говна
    new CleanWebpackPlugin(),
    // ? Eslint
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    // ? Оптимизация
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
};
