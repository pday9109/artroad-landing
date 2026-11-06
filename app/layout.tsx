import type { Metadata } from "next";
import { site } from "@/content/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "아트로드 | 문화예술로 길을 만듭니다",
  description: site.description,
  applicationName: "아트로드",
  // 클라이언트 검토 단계. 운영 도메인과 콘텐츠 승인이 확정되면 변경합니다.
  robots: { index: false, follow: false },
  openGraph: { title: "아트로드 | 문화예술로 길을 만듭니다", description: site.description, locale: "ko_KR", type: "website", siteName: "아트로드" },
  icons: { icon: "/assets/artroad-logo.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body>
        <div id="top" className="site-frame">
          <a className="skip-link" href="#main">본문으로 바로가기</a>
          <SiteHeader />
          <main id="main" tabIndex={-1}>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
