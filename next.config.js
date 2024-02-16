const webpack = require("webpack");
/** @type {import('next').NextConfig} */

const allowedOrigins = [
  "https://api.lens.dev",
  "https://thedial.infura-ipfs.io",
  "https://vimeo.com",
  "https://arweave.net/",
  "https://api-v2.lens.dev/",
];

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      buffer: require.resolve("buffer/"),
    };

    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      })
    );

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chromadin.infura-ipfs.io",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "thedial.infura-ipfs.io",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "gw.ipfs-lens.dev",
        pathname: "/ipfs/**",
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
  async headers() {
    let headersConfig = [];

    allowedOrigins.forEach((origin) => {
      headersConfig.push({
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: origin,
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
        ],
      });
    });

    return headersConfig;
  },
};

module.exports = nextConfig;
