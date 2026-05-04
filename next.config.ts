import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [56, 58, 62, 68, 75],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
