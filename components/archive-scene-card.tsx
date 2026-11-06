import Link from "next/link";
import type { ArchiveEntry } from "@/content/archive";
import { Photo } from "@/components/photo";
import { Arrow } from "@/components/arrow";

export function ArchiveSceneCard({ entry, featured = false }: { entry: ArchiveEntry; featured?: boolean }) {
  const cover = entry.gallery[0];
  if (!cover) return null;
  return <Link className={`archive-scene-card${featured ? " archive-scene-card--featured" : ""}`} href={`/archive/${entry.slug}`} aria-labelledby={`archive-${entry.slug}`}>
    <figure><Photo preload={featured} image={cover.image} className={featured ? "" : "photo--arch-top-right"} sizes={featured ? "(max-width: 700px) 100vw, 55vw" : "(max-width: 700px) 100vw, 26vw"} /></figure>
    <div className="archive-scene-copy">
      <p className="archive-period">{entry.periodText}</p>
      <h3 id={`archive-${entry.slug}`}>{entry.title}</h3>
      <p className="archive-scene-summary">{entry.summary}</p>
      <span className="archive-read-more">기록 보기<Arrow /></span>
    </div>
  </Link>;
}
