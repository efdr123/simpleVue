const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  productionSourceMap: true,
  // 修改 src 为 examples
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("examples"));
  }
};
