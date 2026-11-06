import { Breadcrumb } from "@/components/breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ActionLink } from "@/components/action-link";
import { Arrow } from "@/components/arrow";
import { Tagline } from "@/components/tagline";
import { formatNoticeDate, getNotice, getNotices } from "@/content/notices";

type NoticePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getNotices().map(notice => ({ slug: notice.slug }));
}

export async function generateMetadata({ params }: NoticePageProps): Promise<Metadata> {
  const { slug } = await params;
  const notice = getNotice(slug);
  if (!notice) notFound();

  return {
    title: `${notice.title} | 아트로드`,
    description: notice.excerpt,
    openGraph: { title: `${notice.title} | 아트로드`, description: notice.excerpt, locale: "ko_KR", type: "article", publishedTime: notice.publishedAt },
  };
}

export default async function NoticePage({ params }: NoticePageProps) {
  const { slug } = await params;
  const notice = getNotice(slug);
  if (!notice) notFound();

  return (
    <div className="notice-page notice-detail container">
      <Breadcrumb items={[{ label: "홈", href: "/" }, { label: "공지사항", href: "/notices" }, { label: "공지글" }]} />
      <article aria-labelledby="notice-title">
        <header className="notice-article-heading">
          <Tagline language="ko">{notice.category}</Tagline>
          <h1 id="notice-title">{notice.title}</h1>
          <div className="notice-meta"><span>{notice.author}</span><time dateTime={notice.publishedAt}>{formatNoticeDate(notice.publishedAt)}</time></div>
        </header>
        <div className="notice-article-body">
          {notice.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <p className="notice-signature">아트로드 드림</p>
        </div>
      </article>
      <nav className="notice-article-actions" aria-label="공지글 탐색"><Link className="notice-back" href="/notices"><Arrow />목록으로</Link><ActionLink href="/#contact" variant="text" diagonal>협업 문의</ActionLink></nav>
    </div>
  );
}
