import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = new URL('.', import.meta.url).pathname;

export default {
  entry: './frontend/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Rule for TypeScript
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      // Rule for JavaScript/JSX (using Babel)
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // JavaScript transformations
              '@babel/preset-react', // React JSX transformation
            ],
          },
        },
      },
      // Rule for CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/public/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 3000,
    hot: true,
  },
  devtool: 'source-map', // Enable source maps
};
