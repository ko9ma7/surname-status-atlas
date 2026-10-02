export const japanRankComparison = [
  { rank: 1, surname: 'Sato', native: '佐藤', korean: '사토', population: '약 1,798,000명', sourceId: 'myojiSato', note: '일본에서 가장 흔한 성씨로 집계되는 비교 기준.' },
  { rank: 2, surname: 'Suzuki', native: '鈴木', korean: '스즈키', population: '약 1,745,000명', sourceId: 'myojiSuzuki', note: '흔한 성씨와 희귀 성씨의 규모 차이를 보기 위한 비교 기준.' },
  { rank: 1277, surname: 'Naoi', native: '直井', korean: '나오이', population: '약 13,200명', sourceId: 'myojiNaoi', note: '레이 사례의 성씨. 희귀성은 확인되지만 부유함의 증거는 아님.' },
  { rank: 8500, surname: 'Daidoji', native: '大道寺', korean: '다이도지', population: '약 910명', sourceId: 'myojiDaidoji', note: '희귀 사무라이 성씨 연구 표본에도 포함된 성씨.' },
  { rank: 10399, surname: 'Asukai', native: '飛鳥井', korean: '아스카이', population: '약 660명', sourceId: 'myojiAsukai', note: '공가·가조쿠 역사와 연결되는 희귀 성씨 사례.' },
  { rank: 43539, surname: 'Ayanokoji', native: '綾小路', korean: '아야노코지', population: '약 50명', sourceId: 'myojiAyanokoji', note: '현재도 매우 적은 수가 확인되는 공가계 희귀 성씨.' },
  { rank: 44670, surname: 'Tokudaiji', native: '徳大寺', korean: '도쿠다이지', population: '약 50명', sourceId: 'myojiTokudaiji', note: '후지와라 북가 계열 공가 성씨로 설명되는 사례.' }
];

export const surnameProfiles = [
  {
    country: 'JP', surname: 'Naoi', native: '直井', korean: '나오이', featuredRank: 1,
    frequency: { rank: 1277, label: '일본 전국 빈도 1,277위', population: '약 13,200명', sourceId: 'myojiNaoi' },
    why: '원래 글의 출발점인 레이의 성씨. 현재 성씨 데이터에서는 희귀한 편이지만, 장기 사회이동 연구가 나오이 자체의 부유함을 입증한 것은 아니다.',
    record: '희소성 데이터와 사회경제적 지위 연구를 분리해서 읽어야 하는 대표적인 팩트체크 사례.',
    history: '名字由来net은 直井를 전국 1,277위·약 13,200명으로 추정한다. 본 서비스가 인용한 일본 사회이동 논문은 특정 희귀 사무라이·가조쿠 성씨 집단을 연구했으며 直井를 “부유 성씨”로 판정하지 않는다.',
    notable: { name: 'REI (IVE)', role: '가수 · IVE 멤버', note: '이 웹서비스의 출발점이 된 사례. “같은 성씨의 유명인” 표시는 개인 재산이나 가문 계보의 증거가 아니다.', sourceId: 'iveRei' },
    sourceIds: ['myojiNaoi', 'japanMobility', 'reiEpisode', 'iveRei']
  },
  {
    country: 'JP', surname: 'Daidoji', native: '大道寺', korean: '다이도지', featuredRank: 2,
    frequency: { rank: 8500, label: '일본 전국 빈도 8,500위', population: '약 910명', sourceId: 'myojiDaidoji' },
    why: '현대에는 희귀한 편이고, 일본 장기 사회이동 연구의 희귀 사무라이 성씨 표본에도 들어간다.',
    record: '현대 성씨 분포와 역사적 사무라이 표본이 동시에 확인되는 사례.',
    history: '名字由来net은 야마시로국의 지명·후지와라계 전승 등을 설명한다. 사회이동 논문에서는 희귀 사무라이 성씨 표본의 하나로 사용된다.',
    notable: { name: '大道寺友山 (Daidoji Yuzan)', role: '에도 전기 병법가·저술가', note: '1639–1730. 《武道初心集》 등으로 알려진 역사 인물. 같은 성씨의 모든 현대인이 이 인물과 직계 혈연이라는 뜻은 아니다.', sourceId: 'daidojiYuzan' },
    sourceIds: ['myojiDaidoji', 'japanMobility', 'daidojiYuzan']
  },
  {
    country: 'JP', surname: 'Asukai', native: '飛鳥井', korean: '아스카이', featuredRank: 3,
    frequency: { rank: 10399, label: '일본 전국 빈도 10,399위', population: '약 660명', sourceId: 'myojiAsukai' },
    why: '공가·가조쿠 계보와 연결되는 희귀 성씨로, 현재 인구도 적다.',
    record: '현대 빈도 자료에서는 약 660명. 가조쿠 성씨 표본 연구와 공가 역사 기록을 함께 볼 수 있다.',
    history: '名字由来net은 조정에 봉사한 공가 飛鳥井家와 후지와라계 전승을 설명한다. 장기 연구의 가조쿠 표본에도 포함된다.',
    notable: { name: '飛鳥井雅経 (Asukai Masatsune)', role: '가인·공경', note: '1170–1221. 국립국회도서관 전거 기록에서 가인·공경으로 확인된다.', sourceId: 'asukaiMasatsune' },
    sourceIds: ['myojiAsukai', 'japanMobility', 'asukaiMasatsune']
  },
  {
    country: 'JP', surname: 'Ayanokoji', native: '綾小路', korean: '아야노코지', featuredRank: 4,
    frequency: { rank: 43539, label: '일본 전국 빈도 43,539위', population: '약 50명', sourceId: 'myojiAyanokoji' },
    why: '현대 사용자가 매우 적고, 공가 綾小路家의 역사 전승이 남아 있는 극희귀 성씨 사례.',
    record: '약 50명 수준으로 추정되는 희귀 성씨. 희귀성 자체가 현대 부를 의미하지 않는다는 점도 함께 보여준다.',
    history: '名字由来net은 우다 겐지 계열 공가 綾小路家를 설명한다. 일본 장기 연구의 가조쿠 표본에도 들어간다.',
    notable: { name: '綾小路有良 (Ayanokoji Arikazu)', role: '메이지기 가가쿠(雅楽) 연주자·자작', note: '1849–1907. 궁중 가가쿠와 가회(歌会) 관련 활동이 인명사전에 기록되어 있다.', sourceId: 'ayanokojiArikazu' },
    sourceIds: ['myojiAyanokoji', 'japanMobility', 'ayanokojiArikazu']
  },
  {
    country: 'JP', surname: 'Tokudaiji', native: '徳大寺', korean: '도쿠다이지', featuredRank: 5,
    frequency: { rank: 44670, label: '일본 전국 빈도 44,670위', population: '약 50명', sourceId: 'myojiTokudaiji' },
    why: '현대 사용자가 매우 적고, 후지와라 북가 계열 공가 성씨로 설명되는 사례.',
    record: '약 50명으로 추정되는 극희귀 성씨이자 가조쿠 표본에 포함되는 사례.',
    history: '名字由来net은 후지와라 북가 계열 공가 전승과 교토의 徳大寺 창건에서 이름이 유래했다는 설명을 싣고 있다.',
    notable: { name: '徳大寺実則 (Tokudaiji Sanenori)', role: '메이지기 궁내 관료·정치인', note: '1840–1919. 국립국회도서관은 메이지 천황의 시종장, 궁내경, 내대신 등을 지낸 인물로 기록한다.', sourceId: 'tokudaijiSanenori' },
    sourceIds: ['myojiTokudaiji', 'japanMobility', 'tokudaijiSanenori']
  },
  {
    country: 'IN', surname: 'Banerjee', native: 'Bandopadhyaya', korean: '바네르지', featuredRank: 6,
    frequency: { rank: null, label: '전국 공식 성씨 빈도순위 미확인', population: '—', sourceId: null },
    why: '서벵골 성씨 기반 장기 사회이동 연구에서 역사적 고지위 집단을 추적할 때 등장하는 대표 성씨 가운데 하나.',
    record: '연구의 핵심은 “성씨 집단 대표성의 장기 지속”이며 현대 개인의 부나 카스트를 판정하는 것이 아니다.',
    history: 'Clark·Landes 연구는 19세기와 현대의 의사·판사 등 엘리트 직종에서 특정 벵골 성씨 집단의 대표성을 비교한다.',
    notable: { name: 'Abhijit Banerjee', role: '경제학자 · 2019 노벨 경제학상 수상자', note: '동일 성씨의 대표적 공인 예시일 뿐, 연구 표본과의 혈연·카스트·부의 연결을 뜻하지 않는다.', sourceId: 'banerjeeNobel' },
    sourceIds: ['indiaMobility', 'banerjeeNobel']
  },
  {
    country: 'IN', surname: 'Ganguly', native: 'Gangopadhyaya', korean: '강굴리', featuredRank: 7,
    frequency: { rank: null, label: '전국 공식 성씨 빈도순위 미확인', population: '—', sourceId: null },
    why: '벵골 장기 사회이동 연구의 역사적 성씨 집단 가운데 하나로 등장한다.',
    record: '사회경제적 신호는 집단·지역·시대 맥락에서만 읽어야 한다.',
    history: '인도 성씨는 지역·언어·종교·카스트와 얽힐 수 있어 개인 판정에 쓰면 안 된다. 본 서비스는 연구가 명시한 집단 맥락만 제공한다.',
    notable: { name: 'Sourav Ganguly', role: '전 인도 크리켓 국가대표 · ICC Hall of Fame 2026', note: 'ICC가 2026년 Hall of Fame 헌액을 발표한 공인 예시. 성씨 연구와 개인의 카스트·재산을 연결하지 않는다.', sourceId: 'gangulyICC' },
    sourceIds: ['indiaMobility', 'gangulyICC']
  },
  {
    country: 'IN', surname: 'Bhattacharya', native: 'Bhattacharjee', korean: '바타차리야', featuredRank: 8,
    frequency: { rank: null, label: '전국 공식 성씨 빈도순위 미확인', population: '—', sourceId: null },
    why: '서벵골 역사적 성씨 집단 연구에서 반복적으로 관찰되는 성씨군 중 하나.',
    record: '현대 직업 대표성의 집단 통계를 개인의 신분·자산 정보로 바꾸지 않는 것이 핵심.',
    history: '연구는 성씨군의 엘리트 직업 대표성을 다루며, 개별 보유자의 현재 재산을 측정하지 않는다.',
    notable: { name: 'Arundhati Bhattacharya', role: '기업인 · Salesforce South Asia CEO', note: 'Salesforce가 공개한 현직 경영자 프로필을 바탕으로 한 같은 성씨의 공인 예시.', sourceId: 'bhattacharyaSalesforce' },
    sourceIds: ['indiaMobility', 'bhattacharyaSalesforce']
  },
  {
    country: 'IN', surname: 'Sen', native: 'Sengupta', korean: '센', featuredRank: 9,
    frequency: { rank: null, label: '전국 공식 성씨 빈도순위 미확인', population: '—', sourceId: null },
    why: '서벵골의 기타 역사적 고지위 연구군에 포함되는 성씨 예시.',
    record: '성씨와 사회적 지위의 장기 상관관계를 탐색하는 연구 사례로만 취급한다.',
    history: '성씨를 개인의 카스트·종교·경제상태로 자동 변환하는 기능은 제공하지 않는다.',
    notable: { name: 'Amartya Sen', role: '경제학자 · 1998 노벨 경제학상 수상자', note: '같은 성씨의 잘 알려진 공인 예시. 혈연·카스트·재산 연결을 주장하지 않는다.', sourceId: 'senNobel' },
    sourceIds: ['indiaMobility', 'senNobel']
  },
  {
    country: 'GB', surname: 'Neville', native: '', korean: '네빌', featuredRank: 10,
    frequency: { rank: null, label: '연구 표본 내 빈도순위 미제공', population: '—', sourceId: null },
    why: '영국 장기 사회이동 연구가 중세 역사적 엘리트 성씨 표본 예시로 다루는 성씨.',
    record: '중세 기록과 현대 엘리트 교육·직업 자료를 성씨로 연결한 장기 연구 맥락.',
    history: '동일 성씨의 현대인이 중세 Neville 가문의 직계 후손이라고 자동 판정할 수는 없다.',
    notable: { name: 'Gary Neville', role: '전 축구선수 · Premier League Hall of Fame', note: '현대의 같은 성씨 유명인 예시. 역사적 Neville 표본과의 계보 관계를 뜻하지 않는다.', sourceId: 'garyNevillePL' },
    sourceIds: ['englandMobility', 'garyNevillePL']
  },
  {
    country: 'GB', surname: 'Talbot', native: '', korean: '탤벗', featuredRank: 11,
    frequency: { rank: null, label: '연구 표본 내 빈도순위 미제공', population: '—', sourceId: null },
    why: '중세 토지소유·엘리트 성씨 표본에 포함되는 영국 성씨 사례.',
    record: '사회적 지위가 여러 세대에 걸쳐 얼마나 천천히 평균으로 회귀하는지 살피는 자료군의 한 사례.',
    history: '역사적 표본 포함과 오늘날 개인의 자산 수준은 별개다.',
    notable: { name: 'William Henry Fox Talbot', role: '사진술 선구자·과학자', note: 'Science Museum Group은 Talbot을 사진술의 선구자로 소개한다. 여기서는 같은 성씨의 역사적 인물 예시로만 연결한다.', sourceId: 'talbotScienceMuseum' },
    sourceIds: ['englandMobility', 'talbotScienceMuseum']
  },
  {
    country: 'GB', surname: 'Berkeley', native: '', korean: '버클리', featuredRank: 12,
    frequency: { rank: null, label: '연구 표본 내 빈도순위 미제공', population: '—', sourceId: null },
    why: '영국 역사적 엘리트 성씨 표본의 예시 중 하나.',
    record: '장기 사회이동 연구에서 성씨가 과거 지위의 정보를 얼마나 오래 보존하는지 살피는 사례.',
    history: '성씨 동일성만으로 역사적 귀족 계보나 경제상태를 추정하지 않는다.',
    notable: { name: 'George Berkeley', role: '철학자 · 아일랜드 성공회 주교', note: 'Stanford Encyclopedia of Philosophy이 소개하는 근대 철학자. 역사적 표본과의 혈연을 주장하지 않는다.', sourceId: 'georgeBerkeleySEP' },
    sourceIds: ['englandMobility', 'georgeBerkeleySEP']
  }
];
