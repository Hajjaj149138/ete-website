/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },     // future Sanity CMS images
      { protocol: 'https', hostname: 'flagcdn.com' },        // country flag icons
      { protocol: 'https', hostname: 'seeklogo.com' },       // partner university logos
      { protocol: 'https', hostname: 'upload.wikimedia.org' },// partner university logos
      { protocol: 'https', hostname: 'www.nup.ac.cy' },      // Neapolis Univ Pafos logo
    ],
  },
};
module.exports = nextConfig;
