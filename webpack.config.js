const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: '@3um-group/Atomic-SDK',
    libraryTarget: 'umd',
    globalObject: 'this',
    clean: true,  // Ensures the output directory is cleaned before emit
  },
  mode: 'production', // Add mode option
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext][query]'
        }
      }
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};
