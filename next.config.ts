/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ia601206.us.archive.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.catbox.moe",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co", // soporta bbcode de imgbb
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ibb.co", // enlaces cortos de imgbb
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
