// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos'],        // libera os mocks
  },
  // outras opções (se precisar)
  // experimental: { serverActions: true },
};

export default nextConfig;