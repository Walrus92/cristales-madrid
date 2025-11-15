/** @type {import('next').NextConfig} */

const basePath = "/cristales-madrid";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath + "/",
  trailingSlash: true,

  publicRuntimeConfig: {
    basePath,
  },
};

module.exports = nextConfig;
