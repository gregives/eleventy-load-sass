const path = require("path");
const sass = require("sass");

module.exports = async function (content, options = {}) {
  const includePaths = [
    path.resolve(this.config.dir.input, path.dirname(this.resourcePath)),
    path.resolve("node_modules"),
  ];
  const { css } = sass.renderSync({
    data: content,
    includePaths,
    ...options,
  });
  return css.toString();
};
