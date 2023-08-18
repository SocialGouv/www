/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: { mdxRs: true },
  images: { unoptimized: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.woff2$/,
      type: "asset/resource",
    })
    return config
  },
}

const withMDX = require("@next/mdx")()
module.exports = withMDX(nextConfig)
