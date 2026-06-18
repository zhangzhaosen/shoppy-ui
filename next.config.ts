import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
     dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        hostname: process.env.PRODUCT_IMAGE_HOST!,
      
        pathname: '/images/products/**',
      },
    ],
  },
};

export default nextConfig;
