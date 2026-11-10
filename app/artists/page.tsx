import type { Metadata } from "next";
import { ActionLink } from "@/components/action-link";
import { Breadcrumb } from "@/components/breadcrumb";
import { Photo } from "@/components/photo";
import { Tagline } from "@/components/tagline";
import { artistProfiles } from "@/content/artists";
import { images } from "@/content/site";

export const metadata: Metadata = {
  title: "소속 및 협업 아티스트 | 아트로드",
  description: "아트로드와 함께 무대를 만드는 배우, 연주자, 무용가를 소개합니다.",
  openGraph: { title: "소속 및 협업 아티스트 | 아트로드", description: "아트로드와 함께 무대를 만드는 배우, 연주자, 무용가를 소개합니다.", locale: "ko_KR", type: "website" },
};

export default function ArtistsPage() {
  return <div className="artists-page container">
    <Breadcrumb items={[{ label: "홈", href: "/" }, { label: "소속 및 협업 아티스트" }]} />
    <header className="artists-page-header">
      <div><Tagline index="AR">PEOPLE OF ARTROAD</Tagline><h1>소속 및<br />협업 아티스트</h1><p>서로 다른 예술이 만나 하나의 무대를 만듭니다.<br />배우와 연주자, 무용가가 각자의 예술을 펼칩니다.</p></div>
      <figure><Photo image={images.hero} sizes="(max-width: 700px) 100vw, 48vw" preload /></figure>
    </header>
    <section className="artists-directory" aria-labelledby="artists-directory-title">
      <div className="artists-directory-heading"><h2 id="artists-directory-title">함께하는 사람들</h2><p>배우 · 연주자 · 무용가</p></div>
      <div className="artists-directory-grid">{artistProfiles.map((artist, index) => <article className="artist-profile" key={artist.name}>
        <div className="artist-profile-media"><Photo image={artist.image} sizes="(max-width: 700px) 36vw, 18vw" /><div className="artist-profile-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{artist.roleEnglish}</span></div></div>
        <div className="artist-profile-intro"><Tagline compact language="ko" as="span">{artist.role}</Tagline><h3>{artist.name}</h3><p>{artist.introduction}</p></div>
        <div className="artist-profile-credits"><h4>주요 활동</h4><ul>{artist.credits.map(credit => <li key={credit}>{credit}</li>)}</ul></div>
      </article>)}</div>
    </section>
    <div className="artists-page-contact"><div><h2>함께할 무대를 찾고 계신가요?</h2><p>공연·행사·교육과 지역 협력에 관한 이야기를 들려주세요.</p></div><ActionLink href="/#contact" variant="text" diagonal>협업 문의</ActionLink></div>
  </div>;
}
