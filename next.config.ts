import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 320, 384],
    qualities: [48, 56, 58, 62, 68, 75],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
