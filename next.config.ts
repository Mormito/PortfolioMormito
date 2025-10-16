import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: 'export',  // <=== enables static exports
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
