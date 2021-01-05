const path = require("path");
const sass = require("sass");

module.exports = function (content, options) {
  const includePaths = [
    path.resolve(this.config.inputDir, path.dirname(this.resourcePath)),
    path.resolve("node_modules"),
    ...options.includePaths,
  ];
  const { css } = sass.renderSync({
    data: content,
    ...options,
    includePaths,
  });
  return css.toString();
};
