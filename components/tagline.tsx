import type { ReactNode } from "react";

export function Tagline({ children, index, compact = false, language = "en", as: Element = "p", className = "" }: {
  children: ReactNode;
  index?: string;
  compact?: boolean;
  language?: "ko" | "en";
  as?: "p" | "span";
  className?: string;
}) {
  return (
    <Element className={`tagline${compact ? " tagline--compact" : ""} ${className}`}>
      {index ? <span className="tagline-index">{index}</span> : <span className="tagline-dot" aria-hidden="true" />}
      <span className="tagline-label" lang={language}>{children}</span>
    </Element>
  );
}
