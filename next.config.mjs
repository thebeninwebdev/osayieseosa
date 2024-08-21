import createNextIntlPlugin from 'next-intl/plugin'
import {withContentlayer} from 'next-contentlayer'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
          hostname: 'img.freepik.com',
        }]
      },
};

export default withNextIntl(withContentlayer(nextConfig));
