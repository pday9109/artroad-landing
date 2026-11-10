// 단체소개서 17–23쪽에 소개된 인물과 대표 활동을 웹에 맞게 요약했습니다.
// 소개서에 수록된 개인 사진은 로컬 검토용으로 사용합니다. 연락처와 학력은 제외합니다.
import type { SiteImage } from "@/content/types";

export type ArtistProfile = {
  name: string;
  role: string;
  roleEnglish: string;
  introduction: string;
  image: SiteImage;
  credits: readonly string[];
};

export const artistProfiles: readonly ArtistProfile[] = [
  {
    name: "이하은",
    image: { src: "/assets/artists/lee-ha-eun.webp", alt: "검은 상의를 입고 카메라를 바라보는 이하은 배우의 프로필 사진", width: 540, height: 811, sourcePage: 18 },
    role: "배우",
    roleEnglish: "ACTOR",
    introduction: "뮤지컬 무대에서 다양한 인물을 연기해 온 배우입니다.",
    credits: ["뮤지컬 《안나카레니나》 앙상블 (2026)", "뮤지컬 《매디슨 카운티의 다리》 앙상블·캐롤린 커버 (2025)", "뮤지컬 《썸데이》 유지해 역 (2024)"],
  },
  {
    name: "백인찬",
    image: { src: "/assets/artists/baek-in-chan.webp", alt: "남색 정장 차림으로 의자에 앉은 백인찬 배우의 프로필 사진", width: 720, height: 1280, sourcePage: 20 },
    role: "배우",
    roleEnglish: "ACTOR",
    introduction: "뮤지컬과 오페라 무대에서 활동한 배우입니다.",
    credits: ["뮤지컬 《위대한 결단》 앙상블 (2024)", "뮤지컬 《더 북》 윌리엄 역 (2023)", "뮤지컬 《요한복음》 예수 역 (2021–2022)"],
  },
  {
    name: "강주은",
    image: { src: "/assets/artists/kang-ju-eun.webp", alt: "한복을 입고 해금을 든 강주은 연주자의 프로필 사진", width: 720, height: 900, sourcePage: 21 },
    role: "해금 연주자",
    roleEnglish: "MUSICIAN",
    introduction: "전통의 소리를 다양한 무대와 거리 공연으로 전하는 해금 연주자입니다.",
    credits: ["청주시립국악단 제110회 정기연주회 〈젊은 예인〉 협연", "대전시립연정국악원 〈젊은 국악〉 협연", "서울 365 거리공연 참여"],
  },
  {
    name: "이보라",
    image: { src: "/assets/artists/lee-bo-ra.webp", alt: "검은 재킷을 입은 이보라 무용가의 상반신 프로필 사진", width: 133, height: 181, sourcePage: 23 },
    role: "무용가",
    roleEnglish: "DANCER",
    introduction: "현대무용을 바탕으로 공연과 문화예술 교육을 이어 온 무용가입니다.",
    credits: ["안양문화예술재단 선정작 〈거울초상화〉 무용수", "제4회 서울국제댄스페스티벌 인 탱크 〈Image-making〉 출연", "〈판-춘향〉 무용수 출연"],
  },
];
