/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    domains: ["lh3.googleusercontent.com", "platform-lookaside.fbsbx.com"],
    minimumCacheTTL: 9999999,
      },
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,
  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
