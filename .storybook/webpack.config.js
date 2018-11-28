const path = require("path");

module.exports = {
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/components'),
      Utils: path.resolve(__dirname, '../src/utils'),
      Theme: path.resolve(__dirname, '../src/theme'),
    },
  },
};
