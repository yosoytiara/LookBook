const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // Entry file is .tsx
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Apply ts-loader for TypeScript files (.ts and .tsx)
        exclude: /node_modules/,
        use: 'ts-loader', // Use ts-loader to handle .tsx and .ts files
      },
      {
        test: /\.jsx?$/, // For JS/JSX files, use Babel
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // Resolve .tsx, .ts, .js, .jsx extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'), // Serve static files from 'public'
    port: 3000,
    hot: true,
  },
};
