import Image from "next/image";
import type { SiteImage } from "@/content/site";
import { withBasePath } from "@/content/base-path";

export function Photo({ image, className = "", sizes, preload = false }: {
  image: SiteImage; className?: string; sizes: string; preload?: boolean;
}) {
  return <Image className={`photo ${className}`} src={withBasePath(image.src)} width={image.width} height={image.height} alt={image.alt} sizes={sizes} preload={preload} />;
}
