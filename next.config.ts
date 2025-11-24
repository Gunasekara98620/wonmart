import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack root configuration
  turbopack: {
    root: "."
  },
  // Image optimization configuration
  images: {
    // Disable image optimization for static export
    unoptimized: true,
  },
  // Enable static export
  output: 'export',
};

export default nextConfig;