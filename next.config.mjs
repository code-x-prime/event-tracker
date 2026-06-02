/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
