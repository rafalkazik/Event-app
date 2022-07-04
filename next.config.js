/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GRAPH_CMS_TOKEN: process.env.GRAPH_CMS_TOKEN,
    ENDPOINT: process.env.ENDPOINT,
  },
};

module.exports = nextConfig;
