/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com'],
  },
  // swcMinify: true,
  compiler: {
    emotion: true
  }
}

module.exports = nextConfig
