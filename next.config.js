/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['blog.hubspot.com'],
  }
}

module.exports = nextConfig
