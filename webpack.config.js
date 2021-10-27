import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let config = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(path.resolve(), 'dist'),
    clean: true,
    publicPath: '/',
  }
};

export default config;
