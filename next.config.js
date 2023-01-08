/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themoviedb.org",
        port: "",
        pathname: "/t/p/w220_and_h330_face/**",
      },
    ],
  },
};

module.exports = nextConfig;
