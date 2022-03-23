import path from 'path';
import { Configuration } from 'webpack';
// import HtmlWebpackPlugin = require('html-webpack-plugin');
// import * as HtmlWebpackPlugin from 'html-webpack-plugin';
// const HtmlWebpackPlugin = require('html-webpack-plugin');
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  mode: 'development',
  entry: {
    main: [path.resolve(__dirname, 'src/index.tsx')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MkTurk Lite React',
      template: './src/index.html',
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, '../../public/mkturklite-react'),
    filename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
    },
  },
};

export default config;
