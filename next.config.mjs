import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Disable ESLint during build to prevent build failures
  eslint: {
    // Warning rather than error during build
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // If client-side, don't polyfill or include server-only modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    
    return config;
  },
};

export default withMDX(config);
