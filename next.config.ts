import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/kirap-pairap",
  assetPrefix: "/kirap-pairap/",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;