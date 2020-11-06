const sass = require("node-sass");

module.exports = async function (content, options = {}) {
  const { css } = sass.renderSync({
    data: content,
    ...options,
  });
  return css;
};
