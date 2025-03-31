/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/partsynergy-shop' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/partsynergy-shop/' : '',
}

module.exports = nextConfig 