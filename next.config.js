/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Netlify
  output: 'export',
  // Configure image optimization
  images: {
    unoptimized: true,
    domains: ['runmaster-backend.onrender.com'],
  },
}

module.exports = nextConfig 