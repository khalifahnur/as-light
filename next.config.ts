import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old smart-city routes now map to the new structure.
  async redirects() {
    return [
      { source: "/solutions", destination: "/services", permanent: true },
      { source: "/hardware", destination: "/products", permanent: true },
      { source: "/software", destination: "/products", permanent: true },
      { source: "/projects", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
