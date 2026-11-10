import type { Metadata } from "next";
import Link from "next/link";
import { ActionLink } from "@/components/action-link";
import { ArchiveSceneCard } from "@/components/archive-scene-card";
import { Arrow } from "@/components/arrow";
import { Breadcrumb } from "@/components/breadcrumb";
import { Tagline } from "@/components/tagline";
import { getSceneEntries, getSelectionEntries } from "@/content/archive";

export const metadata: Metadata = {
  title: "활동 아카이브 | 아트로드",
  description: "아트로드의 공연 현장과 주요 선정 이력을 사진과 상세 기록으로 만나보세요.",
  openGraph: { title: "활동 아카이브 | 아트로드", description: "아트로드의 공연 현장과 주요 선정 이력을 사진과 상세 기록으로 만나보세요.", locale: "ko_KR", type: "website" },
};

export default function ArchivePage() {
  const scenes = getSceneEntries();
  const selections = getSelectionEntries();
  const [featured, ...moreScenes] = scenes;
  const years = [...new Set(selections.map(entry => entry.selection.date.slice(0, 4)))];

  return <div className="archive-page container">
    <Breadcrumb items={[{ label: "홈", href: "/" }, { label: "활동 아카이브" }]} />
    <header className="archive-page-heading">
      <Tagline index="AR">ACTIVITY ARCHIVE</Tagline>
      <h1>아트로드의 기록</h1>
      <p>공연의 순간부터 새로운 무대로 이어진 선정 소식까지.<br />아트로드가 함께한 현장과 발자취를 살펴보세요.</p>
    </header>
    <nav className="archive-index" aria-label="아카이브 바로가기">
      <a href="#archive-scenes">공연 현장<span>{String(scenes.length).padStart(2, "0")}</span><Arrow diagonal /></a>
      <a href="#archive-history">선정 이력<span>{String(selections.length).padStart(2, "0")}</span><Arrow diagonal /></a>
    </nav>
    <section className="archive-scenes" id="archive-scenes" aria-labelledby="archive-scenes-title" tabIndex={-1}>
      <div className="archive-section-heading"><h2 id="archive-scenes-title">공연 현장</h2><p>아트로드가 함께한 무대의 순간들</p></div>
      <div className="archive-scenes-grid">
        {featured && <ArchiveSceneCard entry={featured} featured />}
        <div className="archive-secondary-scenes">{moreScenes.map(entry => <ArchiveSceneCard key={entry.slug} entry={entry} />)}</div>
      </div>
    </section>
    <section className="archive-history" id="archive-history" aria-labelledby="archive-history-title" tabIndex={-1}>
      <div className="archive-section-heading"><h2 id="archive-history-title">선정 이력</h2><p>지원사업·공연팀 선정 시기를 기준으로 정리했습니다.</p></div>
      {years.map(year => <div className="archive-year" key={year}>
        <h3>{year}<span>YEAR IN REVIEW</span></h3>
        <ol>{selections.filter(entry => entry.selection.date.startsWith(year)).map(entry => <li key={entry.slug}>
          <Link className="archive-history-row" href={`/archive/${entry.slug}`} aria-label={`${entry.title} 선정 기록 보기`}>
            <time dateTime={entry.selection.date}>{entry.selection.date.replace("-", ".")}</time>
            <div><h4>{entry.title}</h4><p>{entry.selection.detail}</p></div><Arrow />
          </Link>
        </li>)}</ol>
      </div>)}
    </section>
    <div className="archive-contact"><div><h2>다음 이야기를 함께 만들어갈까요?</h2><p>공연·행사·교육·지역 협력, 아트로드와 나눌 이야기를 들려주세요.</p></div><ActionLink href="/#contact" variant="text" diagonal>협업 문의</ActionLink></div>
  </div>;
}
