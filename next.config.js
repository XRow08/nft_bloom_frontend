/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
        "localhost",
        "nftbloom.onrender.com"
    ],
},
}

module.exports = nextConfig
