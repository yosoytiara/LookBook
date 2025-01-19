import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Resolve __dirname with ES module
const __dirname = new URL('.', import.meta.url).pathname;

export default {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'), // Use path.resolve for better consistency
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader', // Use ts-loader to handle .tsx and .ts files
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Apply these loaders in order
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
    static: path.resolve(__dirname, 'public'), // Serve static files from the 'public' directory
    port: 3000,
    hot: true,
  },
};
