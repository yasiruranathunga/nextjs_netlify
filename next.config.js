/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
};

module.exports = {
  ...nextConfig, // Spread the nextConfig object
  env: {
    CONTENTFULL_SPACE_ID: process.env.CONTENTFULL_SPACE_ID,
    CONTENTFULL_ACCESS_TOKEN: process.env.CONTENTFULL_ACCESS_TOKEN,
    ENTRY_ID: process.env.ENTRY_ID,
  },
};
