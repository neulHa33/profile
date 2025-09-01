export const links = {
  email: 'tpffpdk@naver.com',
  github: 'https://github.com/neulHa33',
  blog: 'https://velog.io/@neulhaaaa/posts',
};

export const projects = [
  {
    slug: 'picky',
    title: 'Picky – 고민 해결을 위한 투표 플랫폼',
    period: '2025.06 – 진행 중',
    stack: ['React','TypeScript','Firebase','Tailwind'],
    bullets: [
      '로그인, 고민 등록, 투표, 실시간 댓글, 마감일, 결과 차트',
      'Firebase 인증·Firestore 권한·Yup 검증·서버시간 동기화',
      '실사용자 테스트·반응형 UI',
    ],
    links: { demo: '', repo: '' }
  },
  {
    slug: 'rehab-crm',
    title: '재활센터 CRM 웹앱 (산학협력)',
    period: '2023.03 – 2023.08',
    stack: ['React','Node.js','Express','MongoDB','Ant Design'],
    bullets: [
      '팀장: 기획·디자인·일정·미팅 주도',
      '로그인/회원가입·REST API 연동·CORS 해결·배포',
      '기관 요구 반영 실사용 기능',
    ],
    links: { demo: '', repo: '' }
  },
  {
    slug: 'unic',
    title: 'Unic – 학생회 설문조사 대시보드',
    period: '2024.08 – 2024.12',
    stack: ['Vanilla JS','HTML','CSS'],
    bullets: [
      '설문 작성·응답 수집·통계 시각화·대시보드',
      '기획→개발→피드백 단독 진행',
      '학생회 실제 사용',
    ],
    links: { demo: '', repo: '' }
  }
];

export const skills = {
  fe: ['JavaScript','TypeScript','HTML5','CSS3','React','Tailwind','Vanilla JS'],
  be: ['Node.js','Express','MongoDB','MySQL','Firestore'],
  tools: ['REST','Axios','Postman','Figma','GitHub','Notion','Slack','Firebase Hosting'],
  test: ['Jest','Mocha']
};

export const research = [
  'IAE LAB – Figma 설계, 사용자 시나리오, 행동 데이터 수집, 인터페이스 개선안 도출',
  '대한인간공학회 캡스톤 디자인 우수상(2024) – 건강검진 UX 시뮬레이션, 학부생 논문 수상'
];

export const quickFacts = [
  { icon: 'graduation-cap', text: 'Graduate Feb 2025' },
  { icon: 'map-pin', text: 'Seoul' },
  { icon: 'code', text: 'React·TS·Tailwind' },
  { icon: 'database', text: 'MongoDB·MySQL·Firestore' },
  { icon: 'globe', text: 'REST APIs' },
  { icon: 'palette', text: 'Figma' }
];
