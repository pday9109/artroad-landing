"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";
import { Arrow } from "@/components/arrow";
import { withBasePath } from "@/content/base-path";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const resolveHref = (href: string) => href.startsWith("#") && !isHome ? `/${href}` : href;
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus({ preventScroll: true }); }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const breakpoint = window.matchMedia("(min-width: 901px)");
    const onResize = () => { if (breakpoint.matches) setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    breakpoint.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      breakpoint.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="site-header" ref={header}>
      <div className="header-inner container">
        <Link className="brand" href={isHome ? "#top" : "/"} aria-label="아트로드 첫 화면" onClick={() => setOpen(false)}>
          <Image src={withBasePath("/assets/artroad-logo.webp")} alt="" width={47} height={46} />
          <span className="brand-name"><span className="brand-descriptor">문화예술단체</span> 아트로드</span>
        </Link>
        <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          {open ? "닫기" : "메뉴"}<span className={`menu-icon ${open ? "is-open" : ""}`} aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="main-navigation" className={`main-navigation ${open ? "is-open" : ""}`} aria-label="주요 메뉴">
          {navigation.map(link => (
            <Link key={link.href} href={resolveHref(link.href)} aria-current={link.href === pathname ? "page" : link.href.startsWith("/") && pathname.startsWith(`${link.href}/`) ? "location" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <Link className="header-contact" href={resolveHref("#contact")} onClick={() => setOpen(false)}>협업 문의<Arrow diagonal /></Link>
        </nav>
      </div>
    </header>
  );
}
