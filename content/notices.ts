export type Notice = {
  slug: string;
  title: string;
  publishedAt: string;
  category: string;
  author: string;
  excerpt: string;
  paragraphs: readonly string[];
};

// 새 공지는 이 배열에 추가합니다. 날짜는 YYYY-MM-DD, slug는 고유한 영문 주소입니다.
// 첫 글은 사용자가 요청한 웹사이트 오픈 안내이며, 로컬 검토용으로 작성했습니다.
export const notices: readonly Notice[] = [
  {
    slug: "website-open",
    title: "아트로드 웹사이트를 오픈했습니다!",
    publishedAt: "2026-11-05",
    category: "안내",
    author: "아트로드",
    excerpt: "아트로드의 이야기와 활동을 한곳에서 만나보세요.",
    paragraphs: [
      "안녕하세요. 문화예술단체 아트로드입니다.",
      "아트로드의 이야기와 활동을 더 가까이 전하기 위해 웹사이트를 오픈했습니다.",
      "이곳에서 아트로드의 소개와 주요 사업, 공연과 프로젝트의 현장 기록을 만나보실 수 있습니다. 앞으로 새로운 소식과 안내도 공지사항을 통해 차근차근 전하겠습니다.",
      "공연·행사·교육·지역 협력을 함께하고 싶으시다면 협업 문의 메뉴를 이용해주세요. 여러분의 이야기를 기다립니다.",
      "청년 문화예술가에게 지속 가능한 무대를, 시민에게 참여와 공감의 자리를 만들겠습니다. 아트로드가 만들어갈 길에 함께해주세요.",
      "방문해주셔서 감사합니다.",
    ],
  },
];

export function getNotices() {
  return [...notices].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getNotice(slug: string) {
  return notices.find(notice => notice.slug === slug);
}

export function formatNoticeDate(date: string) {
  return date.replaceAll("-", ".");
}
