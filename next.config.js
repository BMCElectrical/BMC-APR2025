// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Disable webpack cache for both client and server
    config.cache = false;

    if (isServer) {
      // Prevent Next from bundling Resend (so its React imports aren’t pulled into the App Router)
      config.externals = Array.isArray(config.externals)
        ? [...config.externals, 'resend']
        : ['resend'];
    }

    return config;
  },
  images: {
    domains: ['images.unsplash.com']
  }
};

module.exports = nextConfig;
