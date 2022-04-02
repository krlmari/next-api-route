const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    const aliases = config.resolve.alias || {};
    config.resolve.alias = {
      ...aliases,
      "@pages": path.resolve(__dirname, "pages"),
      "@components": path.resolve(__dirname, "components"),
      "@hooks": path.resolve(__dirname, "hooks"),
    };
    return config;
  },
};

module.exports = nextConfig;
