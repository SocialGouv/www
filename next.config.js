const withCSS = require("@zeit/next-css");
const images = require("remark-images");
const emoji = require("remark-emoji");

module.exports = withCSS({
  pageExtensions: ["js"],
  exportPathMap: () => ({
    "/": {
      page: "/"
    },
    "/startups/e-mjpm": {
      page: "/startups",
      query: { startup: "e-mjpm" }
    },
    "/startups/work-in-france": {
      page: "/startups",
      query: { startup: "work-in-france" }
    },
    "/startups/code-du-travail-numerique": {
      page: "/startups",
      query: { startup: "code-du-travail-numerique" }
    },
    "/example": {
      page: "/example"
    }
  }),
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
