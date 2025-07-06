import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/spotify-analytics',
        destination: '/spotify-analytics/index.html',
      },
      {
        source: '/spotify-analytics/',
        destination: '/spotify-analytics/index.html',
      },
      {
        source: '/albums/:path*',
        destination: '/spotify-analytics/albums/:path*',
      },
    ]
  },
}

export default nextConfig
