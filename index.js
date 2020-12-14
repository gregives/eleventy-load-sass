const path = require('path');
const sass = require("sass");

module.exports = async function (content, options = {}) {
  const dir = path.resolve(this.config.dir.input, path.dirname(this.resourcePath))
  const { css } = sass.renderSync({
    data: content,
    includePaths: [dir],
    ...options,
  });
  return css.toString();
};
