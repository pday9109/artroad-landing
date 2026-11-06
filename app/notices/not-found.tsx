import Link from "next/link";
import { Tagline } from "@/components/tagline";

export default function NoticeNotFound() {
  return <div className="notice-page notice-missing container"><Tagline index="404">NOTICE</Tagline><h1>공지글을 찾을 수 없습니다.</h1><p>주소를 확인하거나 공지사항 목록에서 소식을 확인해주세요.</p><Link className="action-link action-link--primary" href="/notices">공지사항 목록</Link></div>;
}
