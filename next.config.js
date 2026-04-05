/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flagcdn.com'],
    remotePatterns: [{ protocol:'https', hostname:'flagcdn.com' }],
  },
  compress: true,
};
module.exports = nextConfig;
