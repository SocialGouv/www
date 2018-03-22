const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  exportPathMap: () => ({
    "/": {
      page: "/"
    },
    "/article": {
      page: "/article"
    },
    "/example": {
      page: "/example"
    }
  })
});
