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
    ]
  },
}

export default nextConfig
