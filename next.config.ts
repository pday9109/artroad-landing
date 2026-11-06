import type { NextConfig } from "next";

const isStaticExport = process.env.ARTROAD_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const, trailingSlash: true, images: { unoptimized: true } } : {}),
  outputFileTracingExcludes: { "/*": ["./reference/**/*", "./docs/**/*"] },
  devIndicators: false,
};

export default nextConfig;
