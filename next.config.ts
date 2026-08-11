import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/publications", destination: "/research", permanent: true },
      { source: "/patents", destination: "/research", permanent: true },
      { source: "/ai-papers", destination: "/research", permanent: true },
    ];
  },
};

export default nextConfig;
