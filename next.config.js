/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.woff2$/,
      type: "asset/resource",
    })
    return config
  },
  experimental: {
    mdxRs: true,
  },
}
const withMDX = require("@next/mdx")()
module.exports = withMDX(nextConfig)
