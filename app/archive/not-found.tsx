import Link from "next/link";
import { Tagline } from "@/components/tagline";

export default function ArchiveNotFound() {
  return <div className="notice-page notice-missing container"><Tagline index="404">ARCHIVE</Tagline><h1>활동 기록을 찾을 수 없습니다.</h1><p>아카이브 목록에서 다른 기록을 살펴보세요.</p><Link className="notice-back" href="/archive">아카이브 목록</Link></div>;
}
