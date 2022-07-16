/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GRAPH_CMS_TOKEN: process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN,
    NEXT_PUBLIC_ENDPOINT: process.env.NEXT_PUBLIC_ENDPOINT,
  },
  ignoreBuildErrors: true,
};

module.exports = nextConfig;
