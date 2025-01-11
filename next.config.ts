import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.postimg.cc','img.freepik.com'], // Add your allowed image domains here
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
