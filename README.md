# eleventy-load-sass

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Prettier][prettier-src]][prettier-href]

Convert Sass to CSS using [eleventy-load](https://github.com/gregives/eleventy-load).

## Getting Started

Firstly, you'll need to install [eleventy-load](https://github.com/gregives/eleventy-load) (if you haven't already) and eleventy-load-sass. You'll probably want to use eleventy-load-sass in combination with [eleventy-load-html](https://github.com/gregives/eleventy-load-html), [eleventy-load-css](https://github.com/gregives/eleventy-load-css) and [eleventy-load-file](https://github.com/gregives/eleventy-load-file), so we'll install those as well.

```sh
npm install --save-dev eleventy-load eleventy-load-sass eleventy-load-html eleventy-load-css eleventy-load-file
```

Then you can set up eleventy-load-sass using a rule in your eleventy-load options.

```js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require("eleventy-load"), {
    rules: [
      {
        test: /\.html$/,
        loaders: [
          {
            loader: require("eleventy-load-html"),
          },
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: require("eleventy-load-sass"),
          },
          {
            loader: require("eleventy-load-css"),
          },
          {
            loader: require("eleventy-load-file"),
            options: {
              name: "[hash].css",
            },
          },
        ],
      },
    ],
  });
};
```

Now that you've set up eleventy-load-sass, you can reference a Sass file from an HTML template and eleventy-load-sass will process it for you.

```html
<link rel="stylesheet" href="styles.scss" />
```

## Options

| Name               | Type     | Default   | Description           |
| ------------------ | -------- | --------- | --------------------- |
| [**`sass`**](#url) | `Object` | See below | Options for Dart Sass |

### `sass`

Type: `Object`

Pass options to [Dart Sass](https://github.com/sass/dart-sass). By default, eleventy-load-sass adds two `includePaths` so that you can import Sass files from the current directory and `node_modules`.

```js
{
  includePaths: [
    path.resolve(this.config.inputDir, path.dirname(this.resourcePath)),
    path.resolve("node_modules"),
  ],
}
```

<!-- References -->

[npm-version-src]: https://img.shields.io/npm/v/eleventy-load-sass/latest.svg
[npm-version-href]: https://npmjs.com/package/eleventy-load-sass
[npm-downloads-src]: https://img.shields.io/npm/dt/eleventy-load-sass.svg
[npm-downloads-href]: https://npmjs.com/package/eleventy-load-sass
[license-src]: https://img.shields.io/npm/l/eleventy-load-sass.svg
[license-href]: https://npmjs.com/package/eleventy-load-sass
[prettier-src]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-href]: https://github.com/prettier/prettier
