/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@shingyeol/shared-types', '@shingyeol/ui-components'],
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
