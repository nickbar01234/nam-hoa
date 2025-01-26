import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // todo(nickbar01234): Fix this
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
