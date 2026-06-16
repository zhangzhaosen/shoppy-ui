import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
     dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/images/products/**',
      },
    ],
  },
};

export default nextConfig;
