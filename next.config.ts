import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Comentado para correr localmente
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
