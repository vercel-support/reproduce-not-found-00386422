/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-GB", "en"],
    defaultLocale: "en",
    localeDetection: false
  },
  outputFileTracingIncludes: {
    "**": ['./pages/404.tsx']
  }
};

export default nextConfig;
