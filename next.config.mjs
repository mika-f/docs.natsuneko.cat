import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  webpack: (config) => {
    // suppress warnings of webpack ESM module resolver
    // ref: https://github.com/contentlayerdev/contentlayer/issues/313#issuecomment-1279678289
    config.infrastructureLogging = { level: "error" };

    return config;
  },
};

export default withContentlayer(nextConfig);
