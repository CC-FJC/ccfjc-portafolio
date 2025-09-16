/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ia601206.us.archive.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.catbox.moe",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
