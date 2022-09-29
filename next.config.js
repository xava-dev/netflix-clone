/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "i.ytimg.com",
      "occ-0-513-41.1.nflxso.net",
    ],
  },
};
