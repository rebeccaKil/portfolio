// ─── HERO ────────────────────────────────────────────────────────────────────
export const HERO = {
  name: "Rebecca K.",
  role: "Product Owner",
  domain: "Travel Commerce · AI Experience Unit",
  headline: ["고객이 스스로", "찾아오게 만드는", "설계합니다"],
  subtext:
    "타이드스퀘어(글로벌 트레블테크 OTA · MAU 100만) PO — 결제 페이지 이탈 74% 감소, 쿠폰 참여율 +11%p. 고객 행동 데이터에서 문제를 찾고, 서비스 구조를 바꿔 숫자로 증명했습니다.",
  stats: [
    { value: "74%", label: "결제 이탈 감소", sub: "일 104건 → 30건 · GA/세션 분석" },
    { value: "40%", label: "프론트 개발 리소스 절감", sub: "하드코딩 전시 → 인벤토리 플랫폼화" },
    { value: "+11%p", label: "쿠폰 참여율 상승", sub: "44% → 55%" },
  ],
};

// ─── CX SCOPE ────────────────────────────────────────────────────────────────
export const CX_SCOPE = [
  { name: "전시", note: "인벤토리·테마·Page API", own: true },
  { name: "결제", note: "통합결제·쿠폰v2·취소환불", own: true },
  { name: "회원", note: "구조개편·마이페이지·예약내역", own: true },
  { name: "검색", note: "통합검색·추천 (팀)", own: false },
  { name: "고객센터", note: "CS연동·젠데스크", own: false },
  { name: "리뷰·리워드", note: "통합리뷰·AI요약·포인트리워드", own: true },
];

// ─── CASE STUDIES ────────────────────────────────────────────────────────────
export type FlowStep = { label: string; key?: boolean };
export type DecisionCol = { label: string; role: "no" | "yes"; content: string };
export type ImpactItem = { value: string; label: string; desc?: string };
export type InsightBlock = { label: string; body: string };
export type TableRow = { cells: string[]; highlight?: boolean };
export type CaseSection =
  | { type: "paragraph"; content: string }
  | { type: "pullquote"; content: string }
  | { type: "flow"; label: string; steps: FlowStep[] }
  | { type: "decision"; title: string; cols: DecisionCol[] }
  | { type: "impacts"; items: ImpactItem[] }
  | { type: "insight"; label: string; body: string }
  | { type: "table"; headers: string[]; rows: TableRow[] }
  | { type: "highlight"; eyebrow: string; body: string }
  | { type: "footnote"; content: string }
  | { type: "grid2"; items: { eyebrow: string; title: string; body: string }[] }
  | { type: "grid3"; items: { eyebrow: string; title: string; body: string }[] }
  | { type: "images"; label?: string; items: { src: string; caption?: string }[] };

export interface CaseStudy {
  id: string;
  eyebrow: string;
  title: string;
  sub: string;
  accent: string;
  sections: CaseSection[];
}

export const CASES: CaseStudy[] = [
  // ── Case 01 ──────────────────────────────────────────────────────────────
  {
    id: "renewal",
    eyebrow: "01 — 전시 플랫폼 리뉴얼",
    title: "하드코딩된 메인을 누구나 바꿀 수 있는 플랫폼으로",
    sub: "CX PO 직접 기획 주도 · 투어비스 전체 리뉴얼 · 인벤토리 · 테마 · Page API · 2021.12 — 2022.07",
    accent: "#e8622a",
    sections: [
      {
        type: "impacts",
        items: [
          { value: "40%", label: "프론트 개발 리소스 절감", desc: "카테고리별 중복 개발 제거. 신규 구좌는 어드민 설정만으로." },
          { value: "5%", label: "사이트 속도 개선", desc: "Page API 단일 호출로 메인 API 요청 수 감소." },
          { value: "블록", label: "메인 구성 방식 전환", desc: "코드 → 어드민. 운영자가 직접 메인 구조를 바꾼다." },
        ],
      },
      {
        type: "flow",
        label: "인벤토리 — 하나의 구조로 처리하는 전시 유형",
        steps: [
          { label: "배너", key: true },
          { label: "카테고리 아이콘", key: true },
          { label: "팝업", key: true },
          { label: "상품 큐레이션", key: true },
          { label: "→ 이미지 + 링크 + 정렬 + 기간" },
        ],
      },
      {
        type: "decision",
        title: "Page API를 만든 이유",
        cols: [
          {
            label: "기존 방식",
            role: "no",
            content: "프론트가 배너·카테고리·테마·팝업을 각각 다른 API로 호출. 호텔·투티·항공 메인이 제각각 구현되어 공통 로직 적용 불가.",
          },
          {
            label: "설계 결정",
            role: "yes",
            content: "메인의 모든 구좌를 한 번의 API 호출로. 프론트는 어떤 카테고리든 같은 방식으로 그린다. 구좌 순서·내용은 어드민에서 블록처럼 구성.",
          },
        ],
      },
      {
        type: "insight",
        label: "이 경험이 말하는 것",
        body: "카테고리가 5개든 계열사가 5개든, 여러 서비스가 하나의 플랫폼에 들어올 때 가장 먼저 필요한 것은 \"공통 구조를 어떻게 설계할 것인가\"입니다. 전시·결제·회원 통합이 모두 같은 질문이었습니다.",
      },
      {
        type: "images",
        label: "프론트 키 플로우 — 개편 전 vs 개편 후",
        items: [
          { src: "/images/flow_before.jpg", caption: "개편 전 — 항공·호텔·투어&액티비티 카테고리별 분리 구조. 공통 플로우 없이 결제·예약이 각각 독립 운영됨" },
          { src: "/images/flow_after.jpg", caption: "개편 후 — 통합 디자인 시스템 기반 와이어프레임. 검색~결제~취소까지 단일 구조로 통합, 컴포넌트 레벨 스펙 포함" },
        ],
      },
      {
        type: "images",
        label: "어드민 산출물",
        items: [
          { src: "/images/admin_inventory.svg", caption: "인벤토리 콘텐츠 관리 어드민" },
          { src: "/images/admin_theme.svg", caption: "테마 관리 어드민" },
          { src: "/images/admin_content.svg", caption: "콘텐츠 관리 어드민" },
        ],
      },
      {
        type: "footnote",
        content: "CX PO 팀장으로 기획 전 과정 직접 주도. FE 3명·BE 2명·디자인 1명과 협업, 8개월 리뉴얼 완료. 프로젝트 정의·API 설계·어드민 기획·QA 체크리스트 작성까지 담당.",
      },
    ],
  },

  // ── Case 02 ──────────────────────────────────────────────────────────────
  {
    id: "payment",
    eyebrow: "02 — 통합 결제",
    title: "결제를 카테고리에서 분리하기",
    sub: "CX PO 직접 기획 주도 · 통합 결제 시스템 · 쿠폰 정책 v2 · 취소·환불 설계 · 2022 — 2023",
    accent: "#6366f1",
    sections: [
      {
        type: "impacts",
        items: [
          { value: "74%", label: "결제 이탈 감소", desc: "일 평균 104건 → 30건. GA·세션 분석으로 원인 확인." },
          { value: "+11%p", label: "쿠폰 참여율 상승", desc: "44% → 55%. 구조를 바꾸면 숫자가 바뀐다." },
        ],
      },
      {
        type: "flow",
        label: "결제 적용 순서 — 처음으로 문서화",
        steps: [
          { label: "① TV포인트", key: true },
          { label: "→" },
          { label: "② 메인쿠폰" },
          { label: "→" },
          { label: "③ 보너스쿠폰" },
          { label: "→" },
          { label: "④ 즉시할인" },
          { label: "→" },
          { label: "⑤ PG 결제", key: true },
        ],
      },
      {
        type: "insight",
        label: "왜 TV포인트가 먼저인가",
        body: "쿠폰 할인금액은 (판매금액 - TV포인트) x 할인율로 계산됩니다. 순서가 바뀌면 쿠폰 할인금액 자체가 달라집니다. UX의 선택이 아니라 정산 정합성의 문제입니다.",
      },
      {
        type: "table",
        headers: ["쿠폰 1", "쿠폰 2", "가능", "이유"],
        rows: [
          { cells: ["메인", "보너스", "✓", "보너스추가할인여부=Y일 때만"] },
          { cells: ["메인", "휴가샵이용권", "✓", "국내 호텔 한정"] },
          { cells: ["이용권", "이용권", "✓", "최대 2장, 만료일 임박순"] },
          { cells: ["이용권", "보너스", "✗", "정산 기준 충돌"] },
          { cells: ["BRG 상품", "", "✗ 전부 불가", "공급사 계약 조건"] },
        ],
      },
      {
        type: "images",
        label: "예약/결제 플로우 설계",
        items: [
          { src: "/images/payment_flow.png", caption: "[프론트] 예약·결제 플로우 + [back-end] 서비스 FE → 서비스 API → 통결 FE → 통결 API → PG 시퀀스" },
        ],
      },
      {
        type: "images",
        label: "쿠폰 v2 산출물",
        items: [
          { src: "/images/coupon_channel.png", caption: "쿠폰 채널 정책 매트릭스 (투어비스·베네피아·휴가샵·SKT·카이트)" },
          { src: "/images/coupon_erd.png", caption: "쿠폰 v2 ERD — COUPON_INFLOW_CHANNEL 분리 구조 (전체 테이블 관계)" },
        ],
      },
      {
        type: "footnote",
        content: "기획 전 과정 직접 주도. 결제 구조 설계·쿠폰 정책·취소·환불 플로우·ERD 리뷰·QA 체크리스트까지 담당. 개발팀(BE 3명·FE 2명)과 협업.",
      },
    ],
  },

  // ── Case 03 ────────────────────────────────────────────────────────────
  {
    id: "ability-reward",
    eyebrow: "03 — 행동 설계",
    title: "고객이 행동하게 만드는 구조 — Ability · Reward",
    sub: "AX 유닛 PO 직접 기획 주도 · 찜·장바구니 신규 설계 · 포인트 리워드 · Claude Code PRD 자동화 · 2024 — 현재",
    accent: "#10b981",
    sections: [
      {
        type: "impacts",
        items: [
          { value: "신규", label: "찜·장바구니 플로우 설계", desc: "상품 ID → 이용일+옵션+인원 구조 분리. BookingModal 직결 결제." },
          { value: "MORD", label: "결제 예약 아키텍처", desc: "Multi-Order 결제 단위 — PG 1회 승인 · 상품별 예약코드 독립 배분 · 개별 환불 가능." },
        ],
      },
      {
        type: "grid3",
        items: [
          { eyebrow: "Motivation", title: "타임딜 · 쿠폰", body: "지금 사야 할 이유. 시간 제한·특가·혜택으로 구매 욕구 자극." },
          { eyebrow: "Ability", title: "찜 → 장바구니 → 결제", body: "구매 장벽을 낮춘다. 찜 목록에서 BookingModal로 바로 결제." },
          { eyebrow: "Reward", title: "투어비스 포인트", body: "후기 작성 → 포인트 적립 → 할인 결제 → 재방문 루프." },
        ],
      },
      {
        type: "table",
        headers: ["저장 단위", "찜", "장바구니"],
        rows: [
          { cells: ["저장 기준", "상품 ID", "상품 + 이용일 + 옵션 + 인원"] },
          { cells: ["목적", "관심 상품 저장 (구매 확정 X)", "결제 가능한 후보 (예약 조건 필수)"] },
          { cells: ["이용일 필수", "✗", "✓"] },
          { cells: ["옵션·인원 필수", "✗", "✓"] },
        ],
      },
      {
        type: "table",
        headers: ["KPI", "정의"],
        rows: [
          { cells: ["찜→장바구니 전환율", "찜 상품 중 장바구니 담기 완료 비율"] },
          { cells: ["담기 바텀시트 완료율", "바텀시트 진입 대비 장바구니 담기 완료 비율"] },
          { cells: ["장바구니→주문 전환율", "장바구니 진입 대비 주문하기 클릭 비율"] },
          { cells: ["AI 비교 사용률", "찜 페이지 진입 대비 AI 비교 사용 비율"] },
          { cells: ["AI 비교 후 담기율", "AI 비교 결과 조회 후 장바구니 담기 비율"] },
        ],
      },
      {
        type: "decision",
        title: "결제 예약 구조 설계",
        cols: [
          {
            label: "구조",
            role: "no",
            content: "MORD (사용자가 한 번에 구매한 단위) → PMS (통합결제 거래) + N개 ORD (개별 상품 예약). 결제 승인 1회, 예약 코드는 상품별 1개씩.",
          },
          {
            label: "설계 의도",
            role: "yes",
            content: "장바구니에서 여러 상품을 한 번에 결제할 때, PG 승인은 1회로 처리하되 각 예약에 결제수단별 금액을 독립적으로 배분. 취소 시에도 개별 상품 단위로 환불 가능.",
          },
        ],
      },
      {
        type: "insight",
        label: "Claude Code로 PRD 자동 생성",
        body: "실제 구현된 코드(BookingModal.tsx, Cart.tsx, Checkout.tsx)를 Claude Code로 분석해 사용자 플로우·예외 케이스·QA 체크리스트를 자동 도출. 기획 문서가 코드 실제 동작과 항상 일치합니다.",
      },
      {
        type: "images",
        label: "기획서 산출물",
        items: [
          { src: "/images/timedeal_front.png", caption: "타임딜 FRONT 기획서 — 모바일 UI + 옵션별 노출 조건 명세" },
          { src: "/images/timedeal_admin.png", caption: "타임딜 어드민 기획서 — TS Admin 테마 등록 화면 + 파라미터 명세" },
        ],
      },
      {
        type: "footnote",
        content: "AX 유닛 PO로 신규 플로우 기획 주도. 찜·장바구니 구조 정의·MORD 결제 아키텍처 설계·KPI 정의 담당. Claude Code로 기존 구현 코드 분석 후 PRD 자동 생성.",
      },
    ],
  },

  // ── Case 04 ──────────────────────────────────────────────────────────────
  {
    id: "ax-unit",
    eyebrow: "04 — AX 유닛 PO",
    title: "AI Experience(AX) 유닛 PO — 결제·회원·전시·투티·쿠폰",
    sub: "AX 유닛 PO 직접 기획 주도 · 결제·회원·전시·투티·쿠폰 전 영역 · 투티 스쿼드 6개월 → AX 유닛 · 2025 — 현재",
    accent: "#e8622a",
    sections: [
      {
        type: "impacts",
        items: [
          { value: "5.7%", label: "버스투어 CTR", desc: "클릭→구매 전환 4.6%. 노출 7,732 → 클릭 438 → 구매 20건. 데이터 기반 추천군 재편." },
          { value: "4개", label: "AI 직접 배포", desc: "Cursor·Claude Code·Codex·Gemini — 기획·코드·DB·배포 전 단계 AI 활용." },
        ],
      },
      {
        type: "grid2",
        items: [
          {
            eyebrow: "OKR 1 · 외부 채널 전환율",
            title: "",
            body: "버스투어 대체 상품 추천 재편. 노출 7,732 → 클릭 438 → 구매 20건. 클릭률 5.7%, 클릭→구매 전환율 4.6%. 구매 발생 상품 기준으로 추천군을 데이터 기반 재정렬.",
          },
          {
            eyebrow: "OKR 2 · 다이나믹 프라이싱·쿠폰",
            title: "",
            body: "USJ 입장권 다이나믹 프라이싱 설계 — 이용일 변경, 차액 결제, 재결제·알림톡 흐름 정교화. 선착순 쿠폰, 결제수단 제어, 그룹 쿠폰 중복 방지까지 가격 정책 고도화.",
          },
          {
            eyebrow: "OKR 3 · 운영 자동화",
            title: "",
            body: "공급사 직접 가입 온보딩, 만료 상품 자동 완료 배치, 후기 알림톡 로직 개선. 반복 수작업 제거로 운영 리소스 절감.",
          },
          {
            eyebrow: "OKR 4·5 · 검색·모니터링",
            title: "",
            body: "루씬 → ES Cloud 검색 전환 완료. 후기 AI 자동 요약으로 베스트 리뷰 노출 464→674건. 네이버 키워드 순위 대시보드로 개선 사이클 단축.",
          },
        ],
      },
      {
        type: "table",
        headers: ["지역", "노출", "클릭", "구매"],
        rows: [
          { cells: ["오사카", "3,821", "209", "12"], highlight: true },
          { cells: ["후쿠오카", "1,931", "97", "4"] },
          { cells: ["삿포로", "1,539", "63", "3"] },
          { cells: ["나고야", "244", "57", "1"] },
          { cells: ["총계", "7,732", "438", "20"], highlight: true },
        ],
      },
      {
        type: "insight",
        label: "AI 활용 구현 경험 — 기획자가 직접 배포까지",
        body: "Cursor·Claude Code·Codex·Gemini로 코드를 작성하고, Bitbucket으로 브랜치 관리·코드 리뷰를 진행했습니다. Vercel에 프로덕션 배포를 자동화하고, Supabase PostgreSQL로 DB 스키마 설계부터 운영까지 직접 수행. 기획자가 기획·리서치·코드 작성·DB 구축·배포를 AI와 함께 독립적으로 완료한 경험입니다.",
      },
      {
        type: "images",
        label: "산출물",
        items: [
          { src: "/images/bus_tour.jpg", caption: "버스투어 대체 상품 추천 — OKR 1 외부 채널 전환율" },
          { src: "/images/esim_flow.jpg", caption: "eSim 상품 예약 4단계 플로우 (공급사 API 연동)" },
          { src: "/images/review_best.jpg", caption: "패키지 여행 후기 BEST — AI 자동 요약" },
          { src: "/images/search_dashboard.jpg", caption: "Search Observability 대시보드 (네이버 키워드 모니터링)" },
        ],
      },
      {
        type: "footnote",
        content: "OKR 기반 결제·회원·전시·투티·쿠폰 5개 영역 전담 PO. 버스투어 추천 재편·다이나믹 프라이싱·운영 자동화 등 월 73건+ 티켓 직접 주도. Cursor·Claude Code로 4개 페이지 직접 배포.",
      },
    ],
  },
];

// ─── TEAM LEADERSHIP ─────────────────────────────────────────────────────────
export const TEAM = {
  eyebrow: "CX PO 팀장 · 2021 — 2024",
  title: "5명의 팀을 이끌고 CX 전 영역을 관리하다",
  paragraphs: [
    "시니어 1명과 주니어 4명, 총 5명의 CX PO 팀을 이끌었습니다. 팀원 각각이 회원·검색·추천·결제·전시 도메인을 담당했고, 팀장으로서 모든 도메인의 프로젝트 일정을 관리하고 기획 산출물을 검수했습니다. 각 팀원이 자신의 프로젝트를 성공적으로 오픈할 수 있도록 방향을 잡아주는 역할이었습니다.",
    "팀 목표를 OKR 단위로 수립하고 운영합니다. 외부 채널 전환율 확대, 다이나믹 프라이싱·쿠폰 메커니즘, 운영 자동화, 검색·SEO 노출, 모니터링 대시보드 — 5개 OKR 아래 월간 70건 이상의 티켓을 관리하며 방향을 정렬했습니다.",
    "매 프로젝트가 종료되면 개발·디자인·QA·PO가 함께 회고를 진행했습니다. 잘된 점, 아쉬운 점, 개선점을 각 직군의 시각에서 돌아보고, 다음 사이클에 반영했습니다.",
  ],
  pullquote:
    "회고가 없으면 팀은 같은 속도로 같은 방식을 반복합니다. 아쉬운 점을 말할 수 있는 문화가 있어야 다음 프로젝트가 나아집니다.",
};

// ─── HOW I WORK (values) ─────────────────────────────────────────────────────
export const VALUES = [
  {
    n: "01",
    title: "다수의 이해관계자를 하나의 방향으로 정렬한다",
    body: "개발자의 노고, 마케터의 의도, 디자이너의 영혼, 운영자의 현실을 이해합니다. 조직이 클수록, 관여자가 많을수록 방향이 분산됩니다. 각자의 언어로 같은 방향을 가리킬 수 있게 만드는 것이 PO의 역할입니다.",
  },
  {
    n: "02",
    title: "운영자의 손잡이를 설계한다",
    body: "기능을 만드는 것과, 그 기능을 운영자가 직접 제어할 수 있게 만드는 것은 다릅니다. 인벤토리, 테마, 쿠폰 속성이 모두 어드민의 \"손잡이\"가 되어야 합니다.",
  },
  {
    n: "03",
    title: "한 번 만든 구조가 반복되게 한다",
    body: "Page API, 공통 결제 툴, 채널링 쿠폰 API. 신규 카테고리·채널이 추가될 때 재개발 없이 연결되도록 설계합니다. 확장 비용을 낮추는 것이 플랫폼의 역할입니다.",
  },
  {
    n: "04",
    title: "안 되는 게 아니라 지금 당장 못 하는 것",
    body: "\"세상엔 안 되는 건 없다, 단지 지금 당장 하지 못할 뿐.\" 낯설고 어려운 일을 피하지 않습니다. 지금 할 수 있는 것과 해야 하는 것을 명확히 구분하고, 단계를 쪼개 우선순위를 정해 실행합니다.",
  },
  {
    n: "05",
    title: "데이터로 묻고, 구조로 답한다",
    body: "서비스 목표와 성과 지표를 먼저 정의합니다. 버스투어 추천 영역의 노출·클릭·구매 데이터를 분석해 전환이 일어나는 상품을 식별하고 추천군을 재편했습니다(클릭률 5.7%, 클릭→구매 전환율 4.6%). 결제 페이지 진입 후 이탈 74% 감소(GA·세션 분석 기반), 쿠폰 참여율 +11%p도 같은 사이클의 결과입니다.",
  },
  {
    n: "06",
    title: "생성형 AI로 기획을 구현까지 직접 연결한다",
    body: "Cursor·Codex·Gemini로 목업·배포까지, Claude Code로 기존 코드 분석 → PRD 자동 생성까지. 리서치·기획 초안·코드 분석·데이터 해석·구현 전 단계에서 AI를 씁니다. \"이런 느낌\"이 아니라 \"이것\"을 보여줍니다.",
  },
];

// ─── CAREER ──────────────────────────────────────────────────────────────────
export const CAREER = [
  {
    period: "현재",
    company: "타이드스퀘어 · AI Experience(AX) 유닛",
    role: "PO · AI Experience(AX) 유닛 — 결제·회원·전시·투티·쿠폰",
    desc: "결제, 회원, 전시, 투티, 쿠폰 전 영역 담당. 다이나믹 프라이싱(USJ), 선착순 쿠폰, 찜·장바구니 신규 설계, 투어비스 포인트 리워드 시스템. OKR 기반 월 73건+ 티켓 운영. 버스투어 전환 데이터 분석(CTR 5.7%, 구매전환 4.6%)으로 추천군 재편. Cursor·Codex·Gemini·Claude Code로 4개 페이지 직접 배포.",
  },
  {
    period: "약 6개월",
    company: "타이드스퀘어 · 투티 스쿼드",
    role: "PO · 투티 스쿼드",
    desc: "PM본부·팀 해체 후 투어&티켓 전담 스쿼드 PO로 전환. 버스투어 서비스 종료 이후 대체 상품 전환 데이터 분석 및 추천 재편. 찜·장바구니 신규 기능 기획 리드.",
  },
  {
    period: "2021.04 — 2025.01",
    company: "타이드스퀘어 · PM본부",
    role: "CX PO 팀장",
    desc: "CX PO 팀(5명) 리딩. 투어비스 전체 리뉴얼 주도 — 인벤토리·테마·Page API로 분산 전시 플랫폼화, 개발 리소스 40% 절감·사이트 속도 5% 개선. 통합 결제·쿠폰 v2 기획, 회원 구조 개편, 마이페이지·예약내역 개선. 전사 Jira 보드 통합. 회원·전시·결제·검색·고객센터·리뷰 CX 전 영역 담당. 2025.01 본부·팀 해체.",
  },
  {
    period: "2021",
    company: "하이퍼클라우드 (임퍼펙트)",
    role: "PO · AR/VR 스마트관광 플랫폼",
    desc: "스마트관광도시·강남·DMC 프로젝트 — FP 산정, 과업지시서 작성, 일정관리, 업무 조율. AR/VR 기반 소상공인 상품 판매 시스템 기획.",
  },
  {
    period: "2017 — 2021.03",
    company: "줌줌투어",
    role: "PO · BD · 투어&티켓",
    desc: "커머스 플랫폼 전반 운영. 마케팅 총괄 — GA·자사 통계 툴로 데이터 기반 채널 효과 최적화(네이버·구글·페이스북 등). B2B2C 총괄 — 네이버, 씨트립, SSG, 위메프, 야놀자, 클룩, 제주모바일 등 채널 사업 개발. 기획 — B2B 포털·어드민, 페이 도입, 상품·도시 페이지 리뉴얼. 여기어때 신사업 컨설팅 자문.",
  },
  {
    period: "이전",
    company: "마타주 · PLAY.D · 네이버",
    role: "마케팅 기획 · 신사업 · 퍼포먼스",
    desc: "마타주 — 앱 마케팅(iOS·Android, Firebase·Appsflyer·GA), 제휴 마케팅 기획 운영, 세탁 서비스 신사업 기획. PLAY.D — 100여개 업체(숙박·부동산·자동차·병원·쇼핑몰) 포털 SA/DA·배너·SNS·앱·동영상 광고 집행, 홈페이지 UI 기획 및 SEO 최적화. 네이버 검색마케팅 센터 — 첫 직장, 데이터와 전환을 제품 판단의 언어로 다루는 기반.",
  },
];

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const ABOUT = {
  intro: [
    "PM본부 CX PO 팀장으로 투어비스 전체 리뉴얼을 이끌었고, 투티 스쿼드 PO를 거쳐 현재는 AI Experience(AX) 유닛에서 결제·회원·전시·투티·쿠폰을 담당합니다.",
    "여러 카테고리, 여러 채널, 여러 이해관계자가 얽힌 서비스에서 공통 구조를 어떻게 설계하느냐가 핵심이었습니다. 전시 인벤토리, 통합결제, 쿠폰 v2, 회원 통합까지 — 모두 같은 질문에서 시작했습니다.",
    "생성형 AI로 기획을 구현까지 직접 연결합니다. Cursor·Claude Code·Codex·Gemini로 코드를 작성하고, Bitbucket으로 버전을 관리하며, Vercel로 배포하고, Supabase PostgreSQL로 DB를 직접 구축했습니다.",
  ],
  highlights: [
    { icon: "⬛", label: "플랫폼 구조 설계", desc: "인벤토리·Page API·공통결제 — 한 번 만든 구조가 반복되게." },
    { icon: "⬛", label: "데이터 기반 의사결정", desc: "GA·세션·SQL — 지표에서 문제를 찾고 구조로 답한다." },
    { icon: "⬛", label: "OKR 팀 운영", desc: "5인 CX PO팀, 월 73건+ 티켓, 회고 문화 정착." },
    { icon: "⬛", label: "기획-코드-배포 직접 연결", desc: "FE 레포(Bitbucket) 직접 커밋·PR 머지. Cursor·Claude Code로 리서치부터 배포까지 혼자 완결." },
  ],
};

// ─── PROCESS (How I Work steps) ──────────────────────────────────────────────
export const PROCESS = [
  {
    step: "01",
    title: "이해관계자 정렬",
    desc: "개발자·마케터·디자이너·운영자가 다른 언어를 씁니다. 각자의 언어로 같은 방향을 가리킬 수 있게 만드는 것이 시작입니다.",
    tools: ["Jira", "Notion", "회의록"],
  },
  {
    step: "02",
    title: "운영자 손잡이 설계",
    desc: "기능을 만드는 것과 운영자가 직접 제어할 수 있게 만드는 것은 다릅니다. 인벤토리·테마·쿠폰 속성이 어드민 손잡이가 됩니다.",
    tools: ["어드민 기획", "Figma", "정책 문서"],
  },
  {
    step: "03",
    title: "반복 가능한 구조",
    desc: "Page API, 공통결제 툴, 채널링 쿠폰 API — 신규 카테고리·채널이 추가될 때 재개발 없이 연결됩니다.",
    tools: ["API 설계", "Swagger", "ERD 리뷰"],
  },
  {
    step: "04",
    title: "데이터로 묻기",
    desc: "서비스 목표와 성과 지표를 먼저 정의합니다. GA·세션 분석·SQL로 데이터에서 문제를 찾습니다.",
    tools: ["GA4", "Amplitude", "SQL", "BigQuery"],
  },
  {
    step: "05",
    title: "구조로 답하기",
    desc: "버스투어 추천 재편(CTR 5.7%), 결제 이탈 74% 감소 — 분석 결과를 서비스 구조 변경으로 연결합니다.",
    tools: ["A/B 테스트", "코호트 분석", "성과 측정"],
  },
  {
    step: "06",
    title: "AI로 기획을 구현까지",
    desc: "Cursor·Codex·Gemini로 배포까지, Claude Code로 PRD 자동 생성까지. 기획 전 단계에서 AI를 씁니다.",
    tools: ["Claude Code", "Cursor", "Codex", "Gemini"],
  },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const SKILLS = [
  {
    category: "Product",
    color: "brand",
    items: ["OKR 설정·추적", "스프린트 기획", "A/B 테스트", "사용자 리서치", "화면 기획", "어드민·백오피스 기획", "정책 설계", "PRD 작성"],
  },
  {
    category: "Data & Analytics",
    color: "indigo",
    items: ["GA4", "Amplitude", "SQL", "코호트 분석", "퍼널 분석", "성과 측정·보고"],
  },
  {
    category: "Tech Collaboration",
    color: "emerald",
    items: ["React/Next.js 이해", "TypeScript 이해", "API 설계 리뷰", "Swagger 확인", "Figma", "QA 프로세스", "GitHub"],
  },
  {
    category: "AI & Automation",
    color: "amber",
    items: ["GPT API 활용", "Claude Code", "Cursor IDE", "Codex / Gemini", "프롬프트 엔지니어링", "업무 자동화", "PRD 자동 생성"],
  },
  {
    category: "Tools",
    color: "slate",
    items: ["Jira", "Notion", "Slack", "Figma", "Zendesk", "Vercel", "Supabase"],
  },
];
