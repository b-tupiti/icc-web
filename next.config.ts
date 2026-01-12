/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Replace 'your-repo-name' with your actual repository name
  basePath: '/icc-web', 
  // This ensures CSS/JS/Images are prefixed correctly
  assetPrefix: '/icc-web/', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;