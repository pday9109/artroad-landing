import type { NextConfig } from "next";

const isStaticExport = process.env.ARTROAD_STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_ARTROAD_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const, trailingSlash: true, images: { unoptimized: true } } : {}),
  ...(basePath ? { basePath } : {}),
  outputFileTracingExcludes: { "/*": ["./reference/**/*", "./docs/**/*"] },
  devIndicators: false,
};

export default nextConfig;
