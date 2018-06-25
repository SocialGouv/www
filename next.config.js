const withCSS = require("@zeit/next-css");
const withMDX = require("@zeit/next-mdx");

module.exports = withMDX({
  extension: /\.(md|mdx)?$/
})(
  withCSS({
    pageExtensions: ["js", "mdx"],
    assetPrefix: ""
  })
);
