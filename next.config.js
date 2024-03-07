/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/dashboard/invoices',
          destination: '/dashboard/invoices',
        },
      ];
    },
  };
module.exports = nextConfig;
