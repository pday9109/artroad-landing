import type { SiteImage } from "@/content/types";

export type ArchiveSelection = { date: string; detail: string };
export type ArchiveEntry = {
  slug: string;
  title: string;
  category: string;
  periodText: string;
  summary: string;
  paragraphs: readonly string[];
  facts: readonly { label: string; value: string }[];
  gallery: readonly { image: SiteImage; caption: string }[];
  selection?: ArchiveSelection;
  sourcePages: readonly number[];
};

// 소개서에 확인되는 날짜와 사실만 사용합니다. 선정 시기는 공연 날짜와 구분합니다.
// 출처와 공개 전 검토 사항은 docs/content-map.md를 참고합니다.
export const dogokPicnic: ArchiveEntry = {
  slug: "dogok-picnic",
  title: "도곡 초여름 피크닉",
  category: "지역 축제",
  periodText: "2025.06.14",
  summary: "노래와 연주, 움직임이 함께한 지역 축제의 무대. 시민의 일상 가까이에서 다양한 공연을 선보였습니다.",
  paragraphs: [
    "2025년 6월 14일, 도곡근린공원에서 열린 ‘도곡 초여름 피크닉’의 공연 현장입니다.",
    "노래와 해금 연주, 천을 펼치는 무용이 한 무대에서 이어졌습니다. 야외 무대 앞에 모인 시민들과 서로 다른 예술의 표현을 나누었습니다.",
  ],
  facts: [
    { label: "행사일", value: "2025년 6월 14일" },
    { label: "장소", value: "도곡근린공원" },
    { label: "활동", value: "노래 · 해금 연주 · 무용" },
  ],
  gallery: [
    { image: { src: "/assets/dogok-picnic.webp", alt: "도곡 초여름 피크닉 무대에서 연주자와 함께 천을 펼치며 춤추는 무용가", width: 651, height: 451, sourcePage: 11 }, caption: "연주와 무용이 함께한 도곡 초여름 피크닉의 무대" },
    { image: { src: "/assets/dogok-vocal.webp", alt: "도곡 초여름 피크닉의 파란 무대 배경 앞에서 마이크를 들고 노래하는 출연자", width: 593, height: 387, sourcePage: 11 }, caption: "야외 무대에서 관객과 만난 노래" },
    { image: { src: "/assets/dogok-haegeum.webp", alt: "도곡 초여름 피크닉 무대에서 악보를 보며 해금을 연주하는 출연자", width: 578, height: 387, sourcePage: 11 }, caption: "축제 현장에서 함께한 해금 연주" },
  ],
  sourcePages: [11],
};

export const oasisStreet: ArchiveEntry = {
  slug: "oasis-in-street",
  title: "오아시스 in 스트리트",
  category: "거리 공연",
  periodText: "2025.09 공연 단체 선정",
  summary: "강남문화재단과 함께하는 거리 공연. 야외 무대에서 노래로 관객을 만났습니다.",
  paragraphs: [
    "아트로드는 2025년 9월 강남문화재단 ‘오아시스 in 스트리트’의 공연 단체로 선정되었습니다.",
    "‘가을 버스킹공연’ 현수막과 붉은 야외 무대를 배경으로 노래하는 현장을 담았습니다. 무대와 출연자의 모습을 사진으로 기록했습니다.",
  ],
  facts: [
    { label: "선정 시기", value: "2025년 9월" },
    { label: "사업 기관", value: "강남문화재단" },
    { label: "활동", value: "거리 공연 · 가창" },
  ],
  gallery: [
    { image: { src: "/assets/oasis-street.webp", alt: "오아시스 in 스트리트 현수막 앞 붉은 야외 무대에서 마이크를 들고 노래하는 출연자", width: 971, height: 654, sourcePage: 14 }, caption: "오아시스 in 스트리트의 야외 공연 현장" },
    { image: { src: "/assets/oasis-performance-close.webp", alt: "오아시스 in 스트리트 무대에서 마이크를 양손으로 잡고 서 있는 출연자", width: 545, height: 756, sourcePage: 14 }, caption: "무대 위에서 관객을 만나는 순간" },
  ],
  selection: { date: "2025-09", detail: "강남문화재단 공연 단체 선정" },
  sourcePages: [8, 14],
};

export const starlightLive: ArchiveEntry = {
  slug: "starlight-live",
  title: "스타벅스 별빛라이브",
  category: "뮤지컬 갈라",
  periodText: "2025.10 공연팀 선정",
  summary: "카페에서 만나는 뮤지컬 갈라. 별빛라이브의 공연 현장을 사진으로 기록했습니다.",
  paragraphs: [
    "2025년 10월, 아트로드는 스타벅스·한국문화예술위원회 ‘스타벅스 별빛라이브’ 공연팀으로 선정되었습니다.",
    "스타벅스 여주남한강DT점의 ‘아트로드 · 뮤지컬 갈라’ 무대입니다. 큰 창 앞에 자리한 세 출연자가 함께하는 공연 현장을 담았습니다.",
  ],
  facts: [
    { label: "선정 시기", value: "2025년 10월" },
    { label: "공연 안내 장소", value: "스타벅스 여주남한강DT점" },
    { label: "공연 구성", value: "뮤지컬 갈라" },
  ],
  gallery: [
    { image: { src: "/assets/starlight-stage.webp", alt: "별빛라이브 안내 배너 옆 큰 창 앞에 세 출연자가 앉아 마이크와 보면대를 두고 공연하는 모습", width: 894, height: 503, sourcePage: 15 }, caption: "카페 공간에서 함께한 별빛라이브의 무대" },
    { image: { src: "/assets/starlight-trio.webp", alt: "큰 창 앞에서 마이크와 보면대를 두고 나란히 앉아 공연하는 별빛라이브의 세 출연자를 담은 흑백 사진", width: 671, height: 378, sourcePage: 15 }, caption: "세 출연자가 함께하는 뮤지컬 갈라 현장" },
  ],
  selection: { date: "2025-10", detail: "스타벅스·한국문화예술위원회 공연팀 선정" },
  sourcePages: [8, 15],
};

export const archiveEntries: readonly ArchiveEntry[] = [
  dogokPicnic,
  oasisStreet,
  starlightLive,
  {
    slug: "gangnam-happy-concert",
    title: "강남구 행복콘서트",
    category: "공연팀 선정",
    periodText: "2025.07 공연팀 선정",
    summary: "2025년 7월, 강남구 행복콘서트 공연팀으로 선정되었습니다.",
    paragraphs: ["아트로드는 2025년 7월 강남구 행복콘서트 공연팀으로 선정되었습니다. 이 항목은 공연팀 선정 이력을 담은 기록입니다."],
    facts: [{ label: "선정 시기", value: "2025년 7월" }, { label: "사업명", value: "강남구 행복콘서트" }, { label: "기록 유형", value: "공연팀 선정" }],
    gallery: [],
    selection: { date: "2025-07", detail: "공연팀 선정" },
    sourcePages: [8],
  },
  {
    slug: "gangnam-cultural-support",
    title: "강남구 지역문화예술단체 지원사업",
    category: "지원사업 선정",
    periodText: "2025.04 지원사업 선정",
    summary: "2025년 4월, 강남구 지역문화예술단체 지원사업에 선정되었습니다.",
    paragraphs: ["아트로드는 2025년 4월 강남구 지역문화예술단체 지원사업에 선정되었습니다. 2025년 3월 단체 설립 이후의 지원사업 선정 이력입니다."],
    facts: [{ label: "선정 시기", value: "2025년 4월" }, { label: "사업 지역", value: "강남구" }, { label: "기록 유형", value: "지원사업 선정" }],
    gallery: [],
    selection: { date: "2025-04", detail: "지원사업 선정" },
    sourcePages: [8],
  },
];

export function getArchiveEntry(slug: string) {
  return archiveEntries.find(entry => entry.slug === slug);
}

export function getSceneEntries() {
  return archiveEntries.filter(entry => entry.gallery.length > 0);
}

export function getSelectionEntries() {
  return archiveEntries.filter((entry): entry is ArchiveEntry & { selection: ArchiveSelection } => Boolean(entry.selection))
    .sort((a, b) => b.selection.date.localeCompare(a.selection.date));
}
