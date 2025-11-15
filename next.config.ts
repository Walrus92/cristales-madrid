/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/cristales-madrid",
  assetPrefix: "/cristales-madrid/",
  trailingSlash: true,
};

module.exports = nextConfig;
