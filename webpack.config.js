const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production", // atau 'development' sesuai kebutuhan Anda
  entry: "./src/index.js",
  output: {
    filename: "formattingjs.min.js",
    library: "FormattingJS",
    libraryTarget: "umd",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
