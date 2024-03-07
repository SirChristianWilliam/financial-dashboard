/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/dashboard/invoices',
          destination: '/dashboard/Invoices',
        },
      ];
    },
  };
module.exports = nextConfig;
