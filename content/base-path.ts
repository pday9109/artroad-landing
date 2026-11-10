const basePath = process.env.NEXT_PUBLIC_ARTROAD_BASE_PATH ?? "";

export function withBasePath(path: string) {
  return path.startsWith("/") && !path.startsWith("//") ? `${basePath}${path}` : path;
}
