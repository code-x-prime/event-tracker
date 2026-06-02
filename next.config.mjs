/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 828, 1080, 1200],
    imageSizes: [220, 440],
    minimumCacheTTL: 604800,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'desirediv-storage.blr1.cdn.digitaloceanspaces.com',
        pathname: '/ecomdata/products/event-traker/**',
      },
    ],
  },
};

export default nextConfig;
