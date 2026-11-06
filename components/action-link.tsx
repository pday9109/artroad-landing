import type { ReactNode } from "react";
import { Arrow } from "@/components/arrow";

export function ActionLink({ href, children, variant = "primary", diagonal = false }: {
  href: string; children: ReactNode; variant?: "primary" | "text" | "light"; diagonal?: boolean;
}) {
  return <a className={`action-link action-link--${variant}`} href={href}>{children}<Arrow diagonal={diagonal} /></a>;
}
