import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: process.env.NODE_ENV === 'production' ? false : true,
  },
  basePath: process.env.NODE_ENV === 'production' ? `/${process.env.REPO_NAME}` : '/', 
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${process.env.REPO_NAME}/` : '/', 
  
  // experimental: {
  //   optimizeCss: true, // Активирует оптимизацию CSS
  // },
};

export default nextConfig;