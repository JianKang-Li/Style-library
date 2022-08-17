const path = require("path")
const HtmlwebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/js/LK.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
  },
  mode: "development",
  devtool: "cheap-module-source-map",
}