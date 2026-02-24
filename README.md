# DoRunDoDun 팀 소개 페이지

> 소통과 실행의 조화 — Talk together, Achieve together.

## 시작하기

```bash
npm install     # 의존성 설치
npm run dev     # 개발 서버 실행 (http://localhost:5173)
npm run build   # 프로덕션 빌드
```

---

## 콘텐츠 편집

**대부분의 내용은 `src/data/siteData.js` 한 파일에서 수정합니다.**

### 팀 기본 정보

```js
export const teamInfo = {
  name: 'DoRunDoDun',
  slogan: '소통과 실행의 조화',
  description: '...',     // Hero 섹션 소개 문구 (\n으로 줄바꿈)
  github: 'https://github.com/DoRunDoDun',
  email: 'dorun.contact@gmail.com',
}
```

---

### 팀원 추가 / 수정

```js
export const members = [
  {
    name: '이름',
    role: 'Frontend Developer',   // 역할
    bio: '한 줄 소개',
    avatar: null,                 // null이면 이니셜 자동 표시
                                  // 이미지 쓰려면: '/images/photo.jpg'
    github: 'https://github.com/아이디',
    email: 'example@gmail.com',
  },
  // 팀원 추가 시 위 객체를 복사해서 붙여넣기
]
```

> 아바타 이미지를 쓰려면 `public/images/` 폴더에 파일을 넣고 경로를 지정하세요.

---

### 히스토리 추가 / 수정

```js
export const history = [
  {
    date: '2026.02.13',
    title: '팀 결성',
    description: '설명 텍스트',
  },
  {
    date: '2026.02.18',
    title: '첫 프로젝트 착수',
    description: '설명 텍스트',
    isCurrent: true,   // 현재 진행 중인 항목에 표시 (오렌지 강조)
  },
]
```

> 이벤트는 작성 순서대로 타임라인에 표시됩니다. 새 이정표가 생기면 배열 끝에 추가하세요.
> 이전 항목의 `isCurrent: true`는 제거해주세요.

---

### 프로젝트 추가 / 수정

**진행 중 (Coming Soon) 상태:**
```js
export const projects = [
  {
    title: '프로젝트 이름',
    description: '간단한 설명',
    tech: [],
    link: '',
    github: '',
    comingSoon: true,   // Coming Soon 카드로 표시
  },
]
```

**완성된 프로젝트:**
```js
{
  title: '프로젝트 이름',
  description: '어떤 문제를 해결했는지 설명',
  tech: ['React', 'Node.js', 'MongoDB'],   // 기술 스택 배지
  link: 'https://배포-url.com',            // 없으면 빈 문자열
  github: 'https://github.com/DoRunDoDun/repo',
  // comingSoon 없거나 false면 일반 카드로 표시
}
```

---

## 배포 (GitHub Pages)

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 & 배포합니다.

**최초 설정 시 한 번만:**
1. GitHub 레포지토리 → Settings → Pages
2. Source를 **GitHub Actions** 로 변경

**레포지토리 이름에 따른 `vite.config.js` `base` 값:**

| 레포 이름 | base 값 | 접속 URL |
|---|---|---|
| `DoRunDoDun.github.io` | `'/'` | `https://DoRunDoDun.github.io/` |
| 그 외 이름 | `'/레포이름/'` | `https://DoRunDoDun.github.io/레포이름/` |

---

## 프로젝트 구조

```
src/
├── data/
│   └── siteData.js       ← ✏️ 콘텐츠 편집은 여기서
├── components/
│   ├── Hero.jsx           # 첫 화면
│   ├── History.jsx        # 팀 히스토리 타임라인
│   ├── Members.jsx        # 팀원 카드
│   ├── Projects.jsx       # 프로젝트 카드
│   ├── Contact.jsx        # 연락처
│   ├── FloatNavB.jsx      # 우측 플로팅 네비게이션
│   └── SectionHeader.jsx  # 섹션 제목 공통 컴포넌트
└── index.css              # 전역 스타일 / CSS 변수
```

### 색상 변경

`src/index.css` 상단의 CSS 변수를 수정하면 전체 색상이 바뀝니다.

```css
:root {
  --color-accent: #1d3f6e;        /* 네이비 (주 색상) */
  --color-secondary: #e8841a;     /* 오렌지 (포인트 색상) */
}
```
