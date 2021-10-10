const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { isJSDocFunctionType } = require('typescript');
const { join } = require('path');

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
      '@app': path.resolve(__dirname, 'src/app/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@widgets': path.resolve(__dirname, 'src/widgets/'),
      '@features': path.resolve(__dirname, 'src/features/'),
      '@entities': path.resolve(__dirname, 'src/entities/'),
      '@shared': path.resolve(__dirname, 'src/shared/'),
    },
  },

  plugins: [
    // ? Очистка
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
