import { Breadcrumb } from "@/components/breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";
import { ActionLink } from "@/components/action-link";
import { Arrow } from "@/components/arrow";
import { Tagline } from "@/components/tagline";
import { formatNoticeDate, getNotices } from "@/content/notices";

export const metadata: Metadata = {
  title: "공지사항 | 아트로드",
  description: "아트로드의 새로운 소식과 안내를 만나보세요.",
  openGraph: { title: "공지사항 | 아트로드", description: "아트로드의 새로운 소식과 안내를 만나보세요.", locale: "ko_KR", type: "website" },
};

export default function NoticesPage() {
  const notices = getNotices();

  return (
    <div className="notice-page container">
      <Breadcrumb items={[{ label: "홈", href: "/" }, { label: "공지사항" }]} />
      <header className="notice-page-heading">
        <Tagline index="AR">NEWS & NOTICE</Tagline>
        <h1>공지사항</h1>
        <p>아트로드의 새로운 소식과 안내를 전합니다.</p>
      </header>

      <section className="notice-board" aria-label="공지사항 목록">
        <div className="notice-board-summary"><p>전체 <strong>{notices.length}</strong>건</p><span>ARTROAD NEWS</span></div>
        <div className="notice-columns" aria-hidden="true"><span>번호</span><span>제목</span><span>등록일</span><span /></div>
        <ol className="notice-list">
          {notices.map((notice, index) => (
            <li key={notice.slug}>
              <Link className="notice-row" href={`/notices/${notice.slug}`} aria-labelledby={`notice-${notice.slug}`}>
                <span className="notice-number" aria-hidden="true">{String(notices.length - index).padStart(2, "0")}</span>
                <div className="notice-row-content">
                  <Tagline as="span" compact language="ko">{notice.category}</Tagline>
                  <h2 id={`notice-${notice.slug}`}>{notice.title}</h2>
                </div>
                <time dateTime={notice.publishedAt}>{formatNoticeDate(notice.publishedAt)}</time>
                <Arrow className="notice-row-arrow" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <div className="notice-contact"><p>아트로드와 함께하고 싶은 이야기가 있으신가요?</p><ActionLink href="/#contact" variant="text" diagonal>협업 문의</ActionLink></div>
    </div>
  );
}
