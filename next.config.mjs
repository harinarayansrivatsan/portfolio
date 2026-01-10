/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.hari-narayan.com',
      },
    ],
  },
  eslint: {
    // Disable ESLint during builds to avoid circular dependency error with ESLint 9
    ignoreDuringBuilds: true,
  },
}

export default nextConfig