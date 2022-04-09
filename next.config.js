/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
