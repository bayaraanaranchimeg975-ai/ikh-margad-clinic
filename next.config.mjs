import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for Vercel deployment
  // Vercel supports Next.js SSR natively
};

export default withNextIntl(nextConfig);
