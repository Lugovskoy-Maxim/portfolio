import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  basePath: process.env.NODE_ENV === 'production' ? `/${process.env.REPO_NAME}` : '/', 
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${process.env.REPO_NAME}` : '/', 
  
  // experimental: {
  //   optimizeCss: true, // Активирует оптимизацию CSS
  // },
};

export default nextConfig;