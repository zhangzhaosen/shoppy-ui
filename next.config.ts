import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  /* config options here */
  images: {
     dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.PRODUCT_IMAGE_HOST||  "canoon-shoppy-products.s3.us-east-1.amazonaws.com",
        port: "", // 标准443 HTTPS，无自定义端口，必须写空字符串精准匹配
        //pathname: '/images/products/**',
      },
    ],
  },
};

export default nextConfig;