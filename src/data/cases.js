export const countries = [
  { id: 'all', label: '전체 국가' },
  { id: 'JP', label: '일본' },
  { id: 'IN', label: '인도' },
  { id: 'GB', label: '영국(잉글랜드)' },
  { id: 'SE', label: '스웨덴' },
  { id: 'CN', label: '중국' },
  { id: 'KR', label: '한국' },
  { id: 'IT', label: '이탈리아' },
];

export const countrySummaries = [
  {
    country: 'JP',
    name: '일본',
    signal: '집단 수준에서는 연구 있음 · 개인 부 판정은 불가',
    evidence: 'medium',
    summary: '희귀 사무라이·가조쿠 성씨 집단이 현대의 의학·법조·학계·기업 엘리트에서 과대표현됐다는 장기 연구가 있다. 하지만 “희귀 성씨 = 부자”라는 일반 법칙은 아니다.',
    caveat: '直井(나오이)는 현재 희소성 데이터는 확인되지만, 이 서비스가 인용한 장기 엘리트 연구에서 나오이 자체의 부유함이 입증된 것은 아니다.',
    sourceIds: ['japanMobility', 'myojiNaoi', 'japanLaw']
  },
  {
    country: 'IN',
    name: '인도',
    signal: '지역·카스트·성씨 집단 결합 신호가 큼',
    evidence: 'medium',
    summary: '서벵골 연구에서는 특정 성씨 집단의 의사·판사 등 엘리트 직종 대표성이 여러 세대에 걸쳐 지속됐다. 다만 이는 카스트·종교·지역 맥락과 강하게 결합된 집단 자료다.',
    caveat: '인도 성씨를 카스트나 자산 수준으로 자동 추정하는 것은 오류와 차별 위험이 크다. 연구에 명시된 집단만 역사적 맥락으로 표시한다.',
    sourceIds: ['indiaMobility', 'indiaIncomeMobility']
  },
  {
    country: 'GB',
    name: '영국(잉글랜드)',
    signal: '장기 사회적 지위 지속성 연구가 강함',
    evidence: 'high',
    summary: '중세 토지소유·옥스브리지 기록과 희귀 성씨를 연결한 연구에서 일부 역사적 엘리트 성씨의 지위 정보가 매우 오래 남는 것으로 나타났다.',
    caveat: '중세 엘리트 성씨라는 사실이 오늘날 특정 개인의 소득·자산을 뜻하지 않는다.',
    sourceIds: ['englandMobility']
  },
  {
    country: 'SE',
    name: '스웨덴',
    signal: '귀족 성씨 집단과 현대 소득·직업 자료 비교',
    evidence: 'high',
    summary: '희귀 귀족 성씨 집단은 Andersson 같은 일반 성씨 집단보다 의사·변호사·엘리트대학에서 더 많이 나타났고, 2008년 표본 세금자료에서도 평균 총소득·자본소득 차이가 보고됐다.',
    caveat: '논문의 세금 비교는 특정 6개 지방자치단체 표본이며 2008년 자료다. 현재 전국 개인의 재산을 뜻하지 않는다.',
    sourceIds: ['swedenMobility']
  },
  {
    country: 'CN',
    name: '중국',
    signal: '역사적 엘리트 성씨의 장기 지속성 연구',
    evidence: 'medium',
    summary: '제국·공화·공산 시기를 가로지르는 성씨 기반 연구에서 과거 엘리트 성씨 집단의 사회적 지위가 예상보다 천천히 평균으로 회귀했다.',
    caveat: '중국은 매우 흔한 성씨가 많아 성씨 하나만으로 개인 배경을 구분하기 어렵다. 연구는 집단·장기 추세를 다룬다.',
    sourceIds: ['chinaMobility']
  },
  {
    country: 'KR',
    name: '한국',
    signal: '성씨보다 본관/문중 정보가 핵심',
    evidence: 'medium',
    summary: '한국 연구는 김·이·박 같은 성씨 단독이 아니라 본관 계보의 역사적 위신과 현대 교육수준의 상관을 분석한다.',
    caveat: '같은 성씨라도 본관이 수십·수백 개라 성씨만으로 계층이나 부를 추정하는 것은 특히 부정확하다.',
    sourceIds: ['koreaLineage']
  },
  {
    country: 'IT',
    name: '이탈리아(피렌체)',
    signal: '600년 장기 성씨-경제지위 연결 연구',
    evidence: 'high',
    summary: '1427년 피렌체 세금자료와 2011년 같은 성씨의 유사 후손을 연결한 연구에서 소득·실물자산·엘리트 직업의 장기 지속성이 확인됐다.',
    caveat: '연구는 피렌체라는 특정 도시의 성씨 집단을 통계적으로 연결한 것이며, 같은 성씨의 실제 혈연·개인 자산을 보장하지 않는다.',
    sourceIds: ['florenceMobility']
  }
];

const jpSamurai = [
  ['Akabayashi', '赤林', '아카바야시'], ['Amau', '天羽', '아마우'], ['Anjo', '安生', '안조'],
  ['Chigusa', '千種', '치구사'], ['Daidoji', '大道寺', '다이도지'], ['Doki', '土岐', '도키'],
  ['Fukazu', '深津', '후카즈'], ['Futami', '二見', '후타미']
];

const jpKazoku = [
  ['Aburanokoji', '油小路', '아부라노코지'], ['Anegakoji', '姉小路', '아네가코지'],
  ['Asukai', '飛鳥井', '아스카이'], ['Ayanokoji', '綾小路', '아야노코지'],
  ['Bojo', '坊城', '보조'], ['Higashibojo', '東坊城', '히가시보조'],
  ['Higashifushimi', '東伏見', '히가시후시미'], ['Tokudaiji', '徳大寺', '도쿠다이지']
];

const indiaKulin = [
  ['Mukherjee', 'Mukhopadhyaya', '무케르지'], ['Banerjee', 'Bandopadhyaya', '바네르지'],
  ['Chakraborty', 'Chakravarty', '차크라보르티'], ['Chatterjee', 'Chattopadhyaya', '차테르지'],
  ['Bhattacharya', 'Bhattacharjee', '바타차리야'], ['Ganguly', 'Gangopadhyaya', '강굴리'],
  ['Goswami', 'Gosain', '고스와미']
];

const indiaOtherElite = [
  ['Bose', 'Basu', '보스/바수'], ['Dutta', 'Datta', '두타/다타'], ['Ghosh', 'Ghosh', '고시'],
  ['Kundu', 'Kundu', '쿤두'], ['Mitra', 'Mitra', '미트라'], ['Sen', 'Sengupta', '센/센굽타']
];

const englandHistorical = [
  ['Baskerville', '', '바스커빌'], ['Darcy', '', '다아시'], ['Mandeville', '', '맨더빌'],
  ['Montgomery', '', '몽고메리'], ['Neville', '', '네빌'], ['Percy', '', '퍼시'],
  ['Punchard', '', '펀처드'], ['Talbot', '', '탤벗'], ['Berkeley', '', '버클리'], ['Pakenham', '', '패커넘']
];

const buildGroupEntries = (items, country, group, finding, evidence, sourceIds, tags=[]) =>
  items.map(([surname, native, korean], idx) => ({
    id: `${country}-${group}-${idx}-${surname.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
    country,
    surname,
    native,
    korean,
    group,
    finding,
    evidence,
    metric: '집단 내 엘리트 직종/교육 대표성',
    period: country === 'JP' ? '1900–2012 연구' : country === 'IN' ? '1860–2011 연구' : '중세–2012 연구',
    caution: '이 항목은 성씨 집단의 역사적·통계적 패턴을 설명하며, 같은 성씨를 가진 개인의 현재 자산이나 계층을 판정하지 않습니다.',
    sourceIds,
    tags
  }));

export const surnameCases = [
  {
    id: 'JP-naoi', country: 'JP', surname: 'Naoi', native: '直井', korean: '나오이',
    group: '현대 성씨 희소성 데이터',
    finding: '현재 민간 성씨 DB에서 전국 약 1,277위·약 13,200명으로 추정된다. 희귀한 편이라는 정보와 부유함은 별개다.',
    evidence: 'current-data', metric: '성씨 빈도/인구 추정', period: '페이지 갱신 2024-10-20 · 2026-10-02 재확인',
    caution: '이 서비스가 인용한 자료 중 直井 자체를 부유한 가문으로 입증한 자료는 없습니다. “희귀 성씨 = 부자”로 일반화하면 안 됩니다.',
    sourceIds: ['myojiNaoi', 'japanMobility'], tags: ['레이', '희귀성', '팩트체크']
  },
  ...buildGroupEntries(jpSamurai, 'JP', '희귀 사무라이 성씨 표본', 'Clark·Ishii 연구의 희귀 사무라이 성씨 표본에 포함. 표본 전체가 현대 고지위 직군에서 평균적으로 과대표현됐다.', 'group-study', ['japanMobility'], ['사무라이', '역사적 엘리트']),
  ...buildGroupEntries(jpKazoku, 'JP', '가조쿠(화족) 성씨 표본', 'Clark·Ishii 연구의 가조쿠 성씨 표본에 포함. 가조쿠 표본 전체가 현대 고지위 집단에서 과대표현됐으나 개별 성씨별 부는 측정하지 않았다.', 'group-study', ['japanMobility'], ['가조쿠', '역사적 엘리트']),
  ...buildGroupEntries(indiaKulin, 'IN', '서벵골 Kulin Brahmin 연구군', '2013년 성씨 연구에서 이 집단은 현대 의사 등 엘리트 직종에서 인구비중 대비 높은 대표성을 보였다.', 'sensitive-group-study', ['indiaMobility', 'indiaIncomeMobility'], ['서벵골', '카스트 연구', '민감정보 주의']),
  ...buildGroupEntries(indiaOtherElite, 'IN', '서벵골 기타 역사적 고지위 연구군', '2013년 연구가 19세기 고지위 집단과 연관된 성씨군으로 분류했고, 현대 의사·판사에서 과대표현되는 패턴을 보고했다.', 'sensitive-group-study', ['indiaMobility'], ['서벵골', '역사적 지위', '민감정보 주의']),
  ...buildGroupEntries(englandHistorical, 'GB', '중세 토지소유·노르만계 역사적 엘리트 성씨', '영국 장기 사회이동 연구에서 중세 상층 토지소유·노르만계 엘리트 표본의 예시로 제시된 성씨.', 'historical-sample', ['englandMobility'], ['중세', '옥스브리지', '역사적 지위']),
  {
    id: 'SE-andersson', country: 'SE', surname: 'Andersson', native: '', korean: '안데르손',
    group: '스웨덴 비교 기준 성씨',
    finding: '스웨덴 연구에서 귀족 성씨 집단과 비교하는 일반적 patronymic 성씨 기준군으로 사용됐다.',
    evidence: 'comparison-group', metric: '직업·교육·2008 세금자료 비교', period: '1700–2012 / 세금자료 2008',
    caution: 'Andersson 개인의 소득을 의미하지 않습니다. 연구의 비교 기준 집단입니다.',
    sourceIds: ['swedenMobility'], tags: ['스웨덴', '비교군']
  },
  {
    id: 'SE-hamilton', country: 'SE', surname: 'Hamilton', native: '', korean: '해밀턴',
    group: '귀족 성씨 예시(다만 비교적 흔한 편)',
    finding: '스웨덴 귀족 계보에 존재하지만 2011년 586명이 사용해, 연구자는 희귀 귀족 성씨 핵심 표본에서는 제외했다고 설명한다.',
    evidence: 'historical-context', metric: '귀족 계보 + 성씨 빈도', period: '2011 빈도 기준',
    caution: '귀족 계보와 같은 성씨라고 해서 모든 보유자가 귀족 후손이거나 부유하다는 뜻은 아닙니다.',
    sourceIds: ['swedenMobility'], tags: ['귀족', '주의사례']
  },
  {
    id: 'SE-bjornberg', country: 'SE', surname: 'Björnberg', native: '', korean: '비욘베리',
    group: '귀족 성씨 예시(흔한 편)',
    finding: '스웨덴 논문이 귀족계 성씨이지만 2011년 925명이 사용해 희귀 귀족 표본에서 제외한 예로 제시한다.',
    evidence: 'historical-context', metric: '귀족 계보 + 성씨 빈도', period: '2011 빈도 기준',
    caution: '성씨의 역사적 기원과 현대 개인의 경제상태를 동일시하면 안 됩니다.',
    sourceIds: ['swedenMobility'], tags: ['귀족', '주의사례']
  },
  {
    id: 'KR-kim-bongwan', country: 'KR', surname: 'Kim', native: '김', korean: '김',
    group: '성씨 단독으로는 정보 부족',
    finding: '한국의 장기 계보 연구는 김씨 자체가 아니라 본관별 조선시대 과거급제자 기록과 현대 교육수준을 비교한다.',
    evidence: 'lineage-study', metric: '본관별 역사적 위신 ↔ 현대 교육수준', period: '조선시대 계보 + 1960년 이후',
    caution: '김·이·박 같은 성씨 하나만으로 경제적 지위나 혈연을 추정하는 것은 부정확합니다.',
    sourceIds: ['koreaLineage'], tags: ['본관', '문중', '한국']
  },
  {
    id: 'CN-elite-groups', country: 'CN', surname: 'Elite surname groups', native: '历史精英姓氏群', korean: '역사적 엘리트 성씨군',
    group: '집단 수준 자료만 제공',
    finding: '1645–2012 장기 연구는 과거 엘리트 성씨 집단이 제국·공화·공산 시기에도 교육·지위에서 평균으로 천천히 회귀했다고 보고한다.',
    evidence: 'group-study', metric: '교육·엘리트 대표성 장기 추적', period: '1645–2012',
    caution: '중국의 흔한 성씨 하나를 현대 자산의 대리변수로 쓰는 것은 적절하지 않습니다.',
    sourceIds: ['chinaMobility'], tags: ['중국', '장기 사회이동']
  },
  {
    id: 'IT-florence-surnames', country: 'IT', surname: 'Florentine surname groups', native: 'Cognomi fiorentini', korean: '피렌체 성씨 집단',
    group: '1427–2011 성씨 연결 연구',
    finding: '1427년 세금자료와 2011년 같은 성씨의 유사 후손을 연결한 연구에서 소득뿐 아니라 실물자산·엘리트 직업의 장기 지속성이 관찰됐다.',
    evidence: 'long-run-study', metric: '소득·실물자산·엘리트 직업', period: '1427–2011',
    caution: '논문은 통계적 “pseudo-descendant” 연결을 사용합니다. 같은 성씨의 실제 혈연과 개인 자산을 보증하지 않습니다.',
    sourceIds: ['florenceMobility'], tags: ['피렌체', '600년', '자산']
  }
];
