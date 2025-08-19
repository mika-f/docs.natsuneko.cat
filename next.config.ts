import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
};

export default withContentlayer(nextConfig);
