import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { withBasePath } from "@/content/base-path";

export function SiteFooter() {
  return (
    <footer className="site-footer container">
      <Link className="footer-brand" href="/" aria-label="아트로드 홈">
        <Image src={withBasePath("/assets/artroad-logo.webp")} alt="" width={40} height={39} />
        <span>{site.name}<small>{site.slogan}</small></span>
      </Link>
      <p>© 2026 ARTROAD. All rights reserved.</p>
      <a className="back-to-top" href="#top">맨 위로<span aria-hidden="true">↑</span></a>
    </footer>
  );
}
