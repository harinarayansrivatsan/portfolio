/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    // Disable ESLint during builds to avoid circular dependency error with ESLint 9
    ignoreDuringBuilds: true,
  },
}

export default nextConfig