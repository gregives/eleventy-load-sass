const path = require("path");
const sass = require("sass");

module.exports = function (content, _options = {}) {
  const options = {
    ..._options,
    sass: {
      includePaths: [
        path.resolve(this.config.inputDir, path.dirname(this.resourcePath)),
        path.resolve("node_modules"),
      ],
      ..._options.sass,
    },
  };

  const { css } = sass.renderSync({
    data: content,
    ...options.sass,
  });

  return css.toString();
};
