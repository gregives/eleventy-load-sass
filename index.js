const sass = require("sass");

module.exports = async function (content, options = {}) {
  const { css } = sass.renderSync({
    data: content,
    ...options,
  });
  return css.toString();
};
