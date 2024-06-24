/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mernstack-pizza-project.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
