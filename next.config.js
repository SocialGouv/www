const withCSS = require("@zeit/next-css");
const images = require("remark-images");
const emoji = require("remark-emoji");

module.exports = withCSS({
  pageExtensions: ["js"],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            mdPlugins: [images, emoji]
          }
        }
      ]
    });

    return config;
  }
});
