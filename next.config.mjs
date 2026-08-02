import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
};

export default nextConfig;

initOpenNextCloudflareForDev();
