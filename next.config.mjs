import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'img.freepik.com',
      },
    ],
  },
};

// Apply next-intl plugin properly
export default withNextIntl(nextConfig);
