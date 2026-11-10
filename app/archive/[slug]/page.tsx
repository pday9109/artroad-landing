import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ActionLink } from "@/components/action-link";
import { Arrow } from "@/components/arrow";
import { Breadcrumb } from "@/components/breadcrumb";
import { Photo } from "@/components/photo";
import { Tagline } from "@/components/tagline";
import { archiveEntries, getArchiveEntry } from "@/content/archive";

type ArchivePageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return archiveEntries.map(entry => ({ slug: entry.slug })); }

export async function generateMetadata({ params }: ArchivePageProps): Promise<Metadata> {
  const entry = getArchiveEntry((await params).slug);
  if (!entry) notFound();
  return { title: `${entry.title} | 아트로드 아카이브`, description: entry.summary, openGraph: { title: `${entry.title} | 아트로드 아카이브`, description: entry.summary, locale: "ko_KR", type: "article" } };
}

export default async function ArchiveDetailPage({ params }: ArchivePageProps) {
  const entry = getArchiveEntry((await params).slug);
  if (!entry) notFound();
  const [cover, ...gallery] = entry.gallery;
  const related = archiveEntries.filter(other => other.slug !== entry.slug).slice(0, 2);

  return <div className="archive-page archive-detail container">
    <Breadcrumb items={[{ label: "홈", href: "/" }, { label: "활동 아카이브", href: "/archive" }, { label: entry.title }]} />
    <article aria-labelledby="archive-title">
      <header className="archive-detail-heading">
        <Tagline language="ko">{entry.category}</Tagline>
        <h1 id="archive-title">{entry.title}</h1>
        <p>{entry.summary}</p>
      </header>
      <dl className="archive-facts">{entry.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
      {cover && <figure className="archive-cover"><Photo image={cover.image} sizes="(max-width: 900px) 100vw, 900px" preload /><figcaption>{cover.caption}</figcaption></figure>}
      <section className={`archive-story${cover ? "" : " archive-story--selection"}`} aria-labelledby="archive-story-title">
        <h2 id="archive-story-title">활동 이야기</h2>
        <div>{entry.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
      {gallery.length > 0 && <section className="archive-gallery-section" aria-labelledby="archive-gallery-title">
        <div className="archive-section-heading"><h2 id="archive-gallery-title">현장 더 보기</h2><p>무대 위에서 함께한 순간들</p></div>
        <div className={`archive-gallery${gallery.length === 1 ? " archive-gallery--single" : ""}`}>
          {gallery.map((photo, index) => <figure className={photo.image.height > photo.image.width ? "archive-portrait" : ""} key={photo.image.src}>
            <Photo image={photo.image} className={index % 2 ? "" : "photo--arch-top-right"} sizes="(max-width: 700px) 100vw, 48vw" /><figcaption>{photo.caption}</figcaption>
          </figure>)}
        </div>
      </section>}
    </article>
    <nav className="archive-detail-actions" aria-label="활동 기록 탐색"><Link className="notice-back" href="/archive"><Arrow />아카이브 목록</Link><ActionLink href="/#contact" variant="text" diagonal>협업 문의</ActionLink></nav>
    <aside className="archive-related" aria-labelledby="archive-related-title"><h2 id="archive-related-title">다른 기록 둘러보기</h2><div>{related.map(other => <Link key={other.slug} href={`/archive/${other.slug}`}><span><small>{other.periodText}</small>{other.title}</span><Arrow /></Link>)}</div></aside>
  </div>;
}
