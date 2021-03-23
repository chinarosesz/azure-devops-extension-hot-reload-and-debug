const Path = require("path");
const Glob = require('glob');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = 
{
  entry: Glob.sync("./src/**/*.tsx"),
  output: 
  {
    filename: "main.js",
    clean: true
  },
  devtool: "inline-source-map",
  devServer: 
  {
    https: true,
    port: 4000,
    publicPath: "/dist/"
  },
  resolve: 
  {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: 
  {
    rules: 
    [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.woff$/,
        type: "asset/inline"
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader", "azure-devops-ui/buildScripts/css-variables-loader"]
      }
    ]
  },
  plugins: 
  [
    new HtmlWebpackPlugin(
      {
          template: Path.resolve(__dirname, "./src/main.html"),
          filename: "main.html"
      })
  ]
};
