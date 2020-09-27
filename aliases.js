const path = require('path');

const aliases = {
  root: path.resolve(__dirname, './'),
  src: path.resolve(__dirname, './src/'),
  assets: path.resolve(__dirname, './src/assets'),
  style: path.resolve(__dirname, './src/style')
};

module.exports = aliases;
