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
  images: {
    remotePatterns: [
      {
        port: "",
        protocol: "https",
        hostname: "beta.gouv.fr",
        pathname: "/img/startups/**",
      },
    ],
  },
}

module.exports = nextConfig
