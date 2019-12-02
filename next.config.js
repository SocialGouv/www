const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

const withMDX = require("@zeit/next-mdx")({
  options: {
    remarkPlugins: [
      require("remark-autolink-headings"),
      require("remark-highlight.js")
    ]
  }
});

module.exports = withMDX(
  withImages(
    withCSS({
      pageExtensions: ["js", "mdx"],
      assetPrefix: "",
      webpack: config => {
        config.module.rules.push({
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: "file-loader?name=static/fonts/[name].[ext]"
        });
        config.module.rules.push({
          test: /\.ya?ml$/,
          use: "js-yaml-loader"
        });
        return config;
      }
    })
  )
);
