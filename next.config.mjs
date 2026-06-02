/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
