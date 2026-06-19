/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.figma.com',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  redirects: async () => {
    return [];
  },

  rewrites: async () => {
    return {
      beforeFiles: [],
      // 尚未完成的頁面先指向 coming-soon，等該頁面建立後刪除對應規則即可
      afterFiles: [
        { source: '/program', destination: '/coming-soon' },
        { source: '/events', destination: '/coming-soon' },
        { source: '/alumni', destination: '/coming-soon' },
      ],
    };
  },

  experimental: {
    optimizePackageImports: ['@/components', '@/utils'],
  },
};

module.exports = nextConfig;
