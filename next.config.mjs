/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 3600,
    formats: ['image/webp'],
    deviceSizes: [640, 1080, 1920],
    imageSizes: [220, 440],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-a3d2b35862c1483894ffbee942bb995e.r2.dev',
        pathname: '/event-tracker/**',
      },
      {
        protocol: 'https',
        hostname: 'desirediv-storage.blr1.cdn.digitaloceanspaces.com',
        pathname: '/ecomdata/products/event-traker/**',
      },
    ],
  },
};

export default nextConfig;
