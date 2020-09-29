const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src/index.jsx');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
    entry: SRC_DIR,
    output: {
      filename: 'bundle.js',
      path: DIST_DIR
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      }
  };
