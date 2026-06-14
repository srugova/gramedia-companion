import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.gramedia.com' },
      { protocol: 'https', hostname: 'image.gramedia.net' },
    ],
  },
}

export default nextConfig
