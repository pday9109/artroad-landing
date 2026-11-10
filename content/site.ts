import { dogokPicnic, oasisStreet, getSelectionEntries } from "@/content/archive";
import type { SiteImage } from "@/content/types";
export type { SiteImage } from "@/content/types";

export type Business = {
  number: string;
  english: string;
  title: string;
  description: string;
  examples: string[];
};

export type Project = {
  slug: string;
  title: string;
  meta: string;
  description: string;
  image: SiteImage;
};

export type Artist = {
  name: string;
  role: string;
  bio: string;
  image: SiteImage;
  publicationApproved: true;
};

// 사실 확인 근거와 공개 전 검토 사항: docs/content-map.md
// 개인 프로필은 승인된 항목만 artists에 추가합니다.
export const navigation = [
  { label: "단체소개", href: "#about" },
  { label: "주요 사업", href: "#business" },
  { label: "아카이브", href: "/archive" },
  { label: "아티스트", href: "/artists" },
  { label: "공지사항", href: "/notices" },
] as const;

export const images = {
  hero: {
    src: "/assets/audience-performance.webp",
    alt: "큰 창이 있는 실내 공간에서 두 출연자의 공연을 가까이 감상하는 관객들",
    width: 1006, height: 683, sourcePage: 12,
  },
  duet: {
    src: "/assets/park-duet.webp",
    alt: "나무가 우거진 야외 무대에서 마이크를 들고 함께 노래하는 두 출연자",
    width: 853, height: 480, sourcePage: 13,
  },
  haegeum: {
    src: "/assets/haegeum-performance.webp",
    alt: "공원의 야외 무대에서 흰옷을 입고 해금을 연주하는 출연자",
    width: 538, height: 403, sourcePage: 10,
  },
} satisfies Record<string, SiteImage>;

export const site = {
  name: "아트로드",
  slogan: "문화예술로 길을 만듭니다.",
  description: "청년 문화예술가들과 함께 지속가능한 무대와 콘텐츠를 만들어갑니다. 아트로드의 공연·행사·교육·지역 협력 활동을 만나보세요.",
  intro: "청년 문화예술가들과 함께\n지속가능한 무대와 콘텐츠를 만들어갑니다.",
  about: {
    title: "사람은 누구나\n‘걸작품’입니다.",
    description: "아트로드는 모든 사람이 고유한 재능과 가능성을 지니고 있다고 믿습니다. 문화예술을 통해 그 잠재력을 발견하고, 서로에게 영감을 주며 함께 걷는 길을 만듭니다.",
    mission: "누구나 자신의 이야기를 표현하고, 예술가가 꾸준히 활동할 수 있는 문화예술 생태계를 만들어갑니다.",
    founded: "2025년 3월 설립",
    values: ["고유함 존중", "사랑과 나눔", "지속 가능한 협력"],
  },
  businesses: [
    {
      number: "01", english: "CREATE & PERFORM", title: "창작 및 공연 제작",
      description: "다양한 장르의 예술가와 함께 공연을 기획하고 제작합니다. 무대의 이야기가 관객의 일상에 닿도록 연결합니다.",
      examples: ["뮤지컬·연극", "콘서트·재즈·밴드", "국악·무용"],
    },
    {
      number: "02", english: "PLAN & CONNECT", title: "행사 기획·운영",
      description: "지역과 기업의 축제부터 전시·체험까지, 사람과 예술이 만나는 문화예술 행사를 기획하고 운영합니다.",
      examples: ["문화예술 행사", "지역·기업 축제", "전시·체험"],
    },
    {
      number: "03", english: "LEARN & GROW", title: "교육·인재 양성·콘텐츠",
      description: "어린이, 청소년, 청년 등 대상에 맞는 문화예술 교육 콘텐츠를 개발합니다. 디지털·홍보 콘텐츠 제작으로 예술의 접점을 넓힙니다.",
      examples: ["대상별 문화예술 교육", "디지털 콘텐츠", "홍보 콘텐츠 제작"],
    },
    {
      number: "04", english: "SHARE & COLLABORATE", title: "지역 상생·협력·커뮤니티",
      description: "지역 청년 예술인의 네트워킹과 워크숍, 다양한 아티스트·팀과의 협력으로 지속 가능한 문화예술 생태계를 만들어갑니다.",
      examples: ["지역 예술인 네트워킹", "워크숍", "아티스트·팀 협력"],
    },
  ] satisfies Business[],
  projects: [dogokPicnic, oasisStreet].map(entry => ({
    slug: entry.slug,
    title: entry.title,
    meta: `${entry.periodText} · ${entry.category}`,
    description: entry.summary,
    image: entry.gallery[0].image,
  })) satisfies Project[],
  history: getSelectionEntries().reverse().map(entry => ({
    slug: entry.slug,
    date: entry.selection.date.replace("-", "."),
    title: entry.title,
    detail: entry.selection.detail,
  })),
  artistFields: [
    { title: "배우", english: "ACTOR", description: "뮤지컬과 연극, 이야기가 있는 무대" },
    { title: "연주자", english: "MUSICIAN", description: "전통과 오늘을 잇는 소리" },
    { title: "무용가", english: "DANCER", description: "움직임으로 전하는 예술" },
  ],
  artists: [] as Artist[],
  contact: {
    email: "artroad91@gmail.com",
    title: "다음 무대는,\n우리 함께.",
    description: "공연, 행사, 교육, 지역 협력.\n함께 만들고 싶은 경험을 들려주세요.",
    topics: ["공연·섭외", "행사 기획", "문화예술 교육", "지역 협력"],
    mailto: `mailto:artroad91@gmail.com?subject=${encodeURIComponent("[아트로드 협업 문의]")}&body=${encodeURIComponent("안녕하세요, 아트로드에 협업을 문의드립니다.\n\n기관·단체명: \n담당자 및 회신 연락처: \n문의 분야: \n예정 일정과 장소: \n함께하고 싶은 내용: \n")}`,
  },
} as const;
