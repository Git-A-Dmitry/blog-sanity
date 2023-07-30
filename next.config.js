/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
    // domains: ['links.google.com', 'cdn.sanity.io'],
  },
};

module.exports = nextConfig;
