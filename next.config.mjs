/** @type {import('next').NextConfig} */

import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}
