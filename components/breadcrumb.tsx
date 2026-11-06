import Link from "next/link";

export function Breadcrumb({ items }: { items: readonly { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumb" aria-label="현재 위치">
      {items.map((item, index) => <span className="breadcrumb-item" key={`${item.label}-${index}`}>
        {index > 0 && <span aria-hidden="true">/</span>}
        {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
      </span>)}
    </nav>
  );
}
