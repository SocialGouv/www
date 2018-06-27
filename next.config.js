const withCSS = require("@zeit/next-css");

const withMDX = require("@zeit/next-mdx")({
  options: {
    mdPlugins: [
      require("remark-autolink-headings"),
      require("remark-highlight.js")
    ]
  }
});

module.exports = withMDX(
  withCSS({
    pageExtensions: ["js", "mdx"],
    assetPrefix: ""
  })
);
