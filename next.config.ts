import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
