import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
     dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_PRODUCT_IMAGE_HOST||  "shoppy-backend.canoond.com",
        port: "", // 标准443 HTTPS，无自定义端口，必须写空字符串精准匹配
        pathname: '/images/products/**',
      },
    ],
  },
};

export default nextConfig;
