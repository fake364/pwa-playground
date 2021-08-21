const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const distPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: { app: "./index.js", serviceWorker: './serviceWorkers/sw.tsx' },
  output: {
    filename: "[name].js",
    path: distPath,
  },
  devServer: {
    contentBase: distPath,
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    progress: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.(le|c)ss$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
  ],
};
