/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  images: {
    unoptimized: true, // GitHub Pages doesn't support the Next.js Image Optimization API
  },
};

export default nextConfig;