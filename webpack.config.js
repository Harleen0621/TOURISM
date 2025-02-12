const path = require('path');

module.exports = {
  entry: './public/js/script.js', // Only include frontend entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dest'),
  },
  target: 'web', // Ensures bundling is for the browser
  externals: {
    // Exclude `mysql` or any Node.js server code from being bundled
    mysql: 'commonjs mysql',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
