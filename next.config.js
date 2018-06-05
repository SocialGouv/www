const withCSS = require("@zeit/next-css");
const images = require("remark-images");
const emoji = require("remark-emoji");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const extract = new ExtractTextPlugin({ filename: "static/[contenthash].css" });

const commonsChunkConfig = require("@zeit/next-css/commons-chunk-config");

// module.exports = withSass(withCss({
//   webpack(config) {
//     config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
//     return config
//   }
// }))

module.exports = withCSS({
  pageExtensions: ["js"],
  //extractCSSPlugin: extract,
  // webpack: config => {
  //     config.plugins.push(extract);
  //     return config;
  // },
  // exportPathMap: () => ({
  //   "/": {
  //     page: "/"
  //   },
  //   "/startups/e-mjpm": {
  //     page: "/startups",
  //     query: { startup: "e-mjpm" }
  //   },
  //   "/startups/work-in-france": {
  //     page: "/startups",
  //     query: { startup: "work-in-france" }
  //   },
  //   "/startups/code-du-travail-numerique": {
  //     page: "/startups",
  //     query: { startup: "code-du-travail-numerique" }
  //   },
  //   "/example": {
  //     page: "/example"
  //   }
  // }),
  // exportPathMap: () => {
  //   return {};
  // },
  webpack: (config, { defaultLoaders }) => {
    config = commonsChunkConfig(config, /\.(css)$/);
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
