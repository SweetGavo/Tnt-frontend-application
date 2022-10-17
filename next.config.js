/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/vi/:path*',
        destination: 'https://api.tandtdeals.ng/v1/:path*',
      },
    ]
  }
}

module.exports = nextConfig
