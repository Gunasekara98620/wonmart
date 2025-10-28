import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack root configuration
  turbopack: {
    root: "."
  },
  // Image optimization configuration
  images: {
    // Keep image optimization enabled for development and production server mode
    unoptimized: false,
  },
};

export default nextConfig;