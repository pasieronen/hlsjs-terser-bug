const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './client.js',
  optimization: {
    minimize: true
  },
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
};
