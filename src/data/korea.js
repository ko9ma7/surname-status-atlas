export const koreaSurnameRanking = [
  { rank: 1, name: '김', hanja: '金', population: 10690000 },
  { rank: 2, name: '이', hanja: '李', population: 7307000 },
  { rank: 3, name: '박', hanja: '朴', population: 4192000 },
  { rank: 4, name: '최', hanja: '崔', population: 2334000 },
  { rank: 5, name: '정', hanja: '鄭', population: 2152000 },
  { rank: 6, name: '강', hanja: '姜', population: 1177000 },
  { rank: 7, name: '조', hanja: '趙', population: 1056000 },
  { rank: 8, name: '윤', hanja: '尹', population: 1021000 },
  { rank: 9, name: '장', hanja: '張', population: 993000 },
  { rank: 10, name: '임', hanja: '林', population: 824000 },
  { rank: 11, name: '한', hanja: '韓', population: 773000 },
  { rank: 12, name: '오', hanja: '吳', population: 763000 },
  { rank: 13, name: '서', hanja: '徐', population: 752000 },
  { rank: 14, name: '신', hanja: '申', population: 741000 },
  { rank: 15, name: '권', hanja: '權', population: 706000 },
  { rank: 16, name: '황', hanja: '黃', population: 697000 },
  { rank: 17, name: '안', hanja: '安', population: 686000 },
  { rank: 18, name: '송', hanja: '宋', population: 683000 },
  { rank: 19, name: '전', hanja: '全', population: 559000 },
  { rank: 20, name: '홍', hanja: '洪', population: 559000 },
];

export const koreaBonGwanRanking = [
  { rank: 1, name: '김해 김씨', hanja: '金海 金氏', population: 4457000 },
  { rank: 2, name: '밀양 박씨', hanja: '密陽 朴氏', population: 3104000 },
  { rank: 3, name: '전주 이씨', hanja: '全州 李氏', population: 2632000 },
  { rank: 4, name: '경주 김씨', hanja: '慶州 金氏', population: 1801000 },
  { rank: 5, name: '경주 이씨', hanja: '慶州 李氏', population: 1392000 },
  { rank: 6, name: '진주 강씨', hanja: '晉州 姜氏', population: 968000 },
  { rank: 7, name: '경주 최씨', hanja: '慶州 崔氏', population: 945000 },
  { rank: 8, name: '광산 김씨', hanja: '光山 金氏', population: 926000 },
  { rank: 9, name: '파평 윤씨', hanja: '坡平 尹氏', population: 771000 },
  { rank: 10, name: '청주 한씨', hanja: '淸州 韓氏', population: 753000 },
  { rank: 11, name: '안동 권씨', hanja: '安東 權氏', population: 696000 },
  { rank: 12, name: '인동 장씨', hanja: '仁同 張氏', population: 667000 },
  { rank: 13, name: '평산 신씨', hanja: '平山 申氏', population: 563000 },
  { rank: 14, name: '순흥 안씨', hanja: '順興 安氏', population: 520000 },
  { rank: 15, name: '안동 김씨', hanja: '安東 金氏', population: 520000 },
  { rank: 16, name: '남양 홍씨', hanja: '南陽 洪氏', population: 487000 },
  { rank: 17, name: '동래 정씨', hanja: '東萊 鄭氏', population: 475000 },
  { rank: 18, name: '해주 오씨', hanja: '海州 吳氏', population: 463000 },
  { rank: 19, name: '전주 최씨', hanja: '全州 崔氏', population: 458000 },
  { rank: 20, name: '남평 문씨', hanja: '南平 文氏', population: 446000 },
];

export const koreaClanArchive = [
  {
    id: 'kr-gimhae-kim', bonGwan: '김해 김씨', hanja: '金海 金氏', rank: 1, population: 4457000,
    era: '가야 · 고대', category: '시조 전승',
    hook: '금관가야의 건국 서사와 이어지는 한국 최대 본관',
    history: '한국민족문화대백과는 금관가야 초대왕 수로왕을 김해 김씨의 시조로 설명한다. 성씨·본관의 역사를 고대 건국 설화와 함께 읽을 수 있는 대표 사례다.',
    record: '2015 인구주택총조사에서 약 445.7만 명으로 성씨·본관 조합 가운데 가장 큰 규모로 집계됐다.',
    notable: { name: '수로왕', role: '금관가야 제1대 왕 · 김해 김씨 시조' },
    wealth: '현대 인구 규모가 크기 때문에 본관 자체만으로 개인의 경제적 지위를 추정하는 근거는 되지 않는다.',
    sourceIds: ['koreaCensus2015', 'kimSuroAKS']
  },
  {
    id: 'kr-miryang-park', bonGwan: '밀양 박씨', hanja: '密陽 朴氏', rank: 2, population: 3104000,
    era: '신라계 전승 · 조선', category: '족보 기록',
    hook: '박씨 계통의 분파와 조선시대 족보 편찬사를 함께 볼 수 있는 본관',
    history: '1662년에 간행된 밀양박씨 족보는 신라 경명왕의 여러 왕자 분봉과 박씨 분파 연혁을 기록하고 있어 조선시대 문중이 계보를 어떻게 정리했는지 보여준다.',
    record: '2015년 약 310.4만 명으로 본관 인구 2위. 17세기 족보에는 본손뿐 아니라 외손과 서자녀 기록 방식의 변화도 남아 있다.',
    notable: { name: '박의영', role: '조선 전기 문신 · 본관 밀양' },
    wealth: '대규모 본관이므로 “밀양 박씨=특정 계층” 식 해석은 성립하기 어렵다. 대신 족보·분파 기록 자체가 역사 콘텐츠다.',
    sourceIds: ['koreaCensus2015', 'miryangParkGenealogy', 'parkUiyeongAKS']
  },
  {
    id: 'kr-jeonju-lee', bonGwan: '전주 이씨', hanja: '全州 李氏', rank: 3, population: 2632000,
    era: '고려 말 · 조선 · 대한제국', category: '왕실 계보',
    hook: '조선 왕실의 본관이자 국가가 관리한 왕실 족보의 중심',
    history: '태조 이성계의 본관이 전주이며, 조선 왕실은 종친의 계보를 국가 차원에서 관리했다. 대한제국기 『선원속보』는 전주 이씨 전체를 포괄하는 왕실 대동보 성격을 가졌다.',
    record: '2015년 약 263.2만 명. 왕실 종친 기록, 파별 족보, 종친부 문서 등 다른 본관과 성격이 다른 방대한 기록군이 남아 있다.',
    notable: { name: '태조 이성계', role: '조선 제1대 왕 · 본관 전주' },
    wealth: '왕실과의 역사적 연관성은 명확하지만 오늘날 전주 이씨 개인의 경제상태를 의미하지 않는다.',
    sourceIds: ['koreaCensus2015', 'taejoAKS', 'seonwonSokboAKS']
  },
  {
    id: 'kr-gyeongju-kim', bonGwan: '경주 김씨', hanja: '慶州 金氏', rank: 4, population: 1801000,
    era: '신라 · 고대', category: '시조 설화',
    hook: '김알지 탄생 설화와 신라 김씨 왕계의 출발점',
    history: '『삼국사기』와 『삼국유사』에 전하는 김알지 설화는 경주 김씨의 시조 전승으로 이어진다. 김씨 왕계가 신라에서 정치적 비중을 확대하는 서사와 함께 읽을 수 있다.',
    record: '2015년 약 180.1만 명. 경주 계림은 김알지 탄생 전승과 연결된 사적으로 남아 있다.',
    notable: { name: '김알지', role: '경주 김씨 시조로 전승되는 신라 인물' },
    wealth: '고대 왕계와의 전승은 역사적 정체성의 문제이며 현대 개인의 자산과는 별개다.',
    sourceIds: ['koreaCensus2015', 'kimAljiAKS']
  },
  {
    id: 'kr-gyeongju-lee', bonGwan: '경주 이씨', hanja: '慶州 李氏', rank: 5, population: 1392000,
    era: '조선', category: '관료·정치',
    hook: '임진왜란과 조선 중기 정치에서 오성대감 이항복으로 기억되는 본관',
    history: '이항복은 경주 이씨로 임진왜란기 병조판서·영의정 등을 지냈다. 특정 본관을 왕실이나 시조 서사만이 아니라 실제 관료·전쟁·정치사의 인물로 연결해 볼 수 있는 사례다.',
    record: '2015년 약 139.2만 명. 조선시대 문신과 학자 기록에서 본관 표기가 중요한 인적 정보로 반복된다.',
    notable: { name: '이항복', role: '조선 중기 문신 · 영의정 · 본관 경주' },
    wealth: '조선시대 고위 관료 배출 기록을 현대 본관 구성원의 계층으로 일반화해서는 안 된다.',
    sourceIds: ['koreaCensus2015', 'yiHangbokAKS']
  },
  {
    id: 'kr-jinju-kang', bonGwan: '진주 강씨', hanja: '晉州 姜氏', rank: 6, population: 968000,
    era: '고려', category: '군사·공신',
    hook: '거란 침입기 고려의 장군 강민첨 기록으로 이어지는 본관',
    history: '강민첨은 본관 진주로, 고려 현종 때 동여진과 거란 침입에 맞서 활동한 장수·공신으로 기록된다.',
    record: '2015년 약 96.8만 명. 본관 기록과 인물 전기를 함께 읽으면 동일 성씨 안에서도 지역·계보 구분이 중요함을 알 수 있다.',
    notable: { name: '강민첨', role: '고려 전기 장수·공신 · 본관 진주' },
    wealth: '군공과 관직 기록은 역사적 위신 자료이지 현대 자산 순위가 아니다.',
    sourceIds: ['koreaCensus2015', 'gangMincheomAKS']
  },
  {
    id: 'kr-gyeongju-choi', bonGwan: '경주 최씨', hanja: '慶州 崔氏', rank: 7, population: 945000,
    era: '통일신라', category: '학문·문장',
    hook: '당 유학과 동아시아 문장으로 이름을 남긴 최치원의 본관',
    history: '최치원은 경주 최씨로 당 유학 뒤 통일신라에서 학자·문장가·관료로 활동했다. 성씨 기록을 정치권력뿐 아니라 지식인 네트워크와 문화사로 확장해 볼 수 있다.',
    record: '2015년 약 94.5만 명. 최치원의 저술과 사상은 고려·조선에서도 계속 주목됐다.',
    notable: { name: '최치원', role: '통일신라 학자·문장가·관료 · 본관 경주' },
    wealth: '학문적 명성과 본관의 역사적 위신은 현대 개인의 재산과 별개다.',
    sourceIds: ['koreaCensus2015', 'choeChiwonAKS']
  },
  {
    id: 'kr-gwangsan-kim', bonGwan: '광산 김씨', hanja: '光山 金氏', rank: 8, population: 926000,
    era: '조선', category: '성리학·예학',
    hook: '사계 김장생을 중심으로 조선 예학과 학맥을 읽을 수 있는 본관',
    history: '김장생은 본관 광산으로 조선 후기 예학과 성리학을 대표하는 학자 가운데 하나다. 가문 기록을 관직만이 아니라 학문 계승의 관점에서 볼 수 있다.',
    record: '2015년 약 92.6만 명. 김장생과 그의 아들 김집 등은 조선 유학사에서 중요한 학맥을 형성했다.',
    notable: { name: '김장생', role: '조선 유학자·문신 · 본관 광산' },
    wealth: '학맥과 정치적 영향력은 경제적 부와 동일한 개념이 아니다.',
    sourceIds: ['koreaCensus2015', 'kimJangsaengAKS']
  },
  {
    id: 'kr-papyeong-yun', bonGwan: '파평 윤씨', hanja: '坡平 尹氏', rank: 9, population: 771000,
    era: '고려', category: '군사·외교',
    hook: '별무반과 여진 정벌로 알려진 윤관의 본관',
    history: '윤관은 본관 파평으로 고려 숙종·예종대 문신이자 여진 정벌 지휘관으로 활동했다. 별무반과 동북 9성 기록을 통해 고려의 북방정책을 함께 볼 수 있다.',
    record: '2015년 약 77.1만 명. 윤관 묘와 관련한 조선 후기 문중 간 산송 기록까지 남아 있어 “문중의 기억” 자체도 역사 자료가 된다.',
    notable: { name: '윤관', role: '고려 전기 문신·장군 · 본관 파평' },
    wealth: '고려 공신 계보와 오늘날 개별 구성원의 경제적 지위는 분리해야 한다.',
    sourceIds: ['koreaCensus2015', 'yunGwanAKS']
  },
  {
    id: 'kr-cheongju-han', bonGwan: '청주 한씨', hanja: '淸州 韓氏', rank: 10, population: 753000,
    era: '조선 전기', category: '권력·왕실 혼인',
    hook: '한명회와 왕실 혼인을 통해 조선 전기 권력구조를 보여주는 본관',
    history: '한명회는 본관 청주로 세조·예종·성종대 핵심 권력자로 활동했고 두 딸이 왕비가 됐다. 청주 한씨 족보는 왕후 세계를 별도로 수록하는 등 왕실과의 연결을 강조했다.',
    record: '2015년 약 75.3만 명. 권력·혼인·족보 편찬이 결합되는 조선 전기 가문사의 전형적 사례다.',
    notable: { name: '한명회', role: '조선 전기 영의정 · 본관 청주' },
    wealth: '역사적 권세와 현대 본관 구성원의 부를 동일시해서는 안 된다.',
    sourceIds: ['koreaCensus2015', 'hanMyeonghoeAKS', 'cheongjuHanGenealogy']
  },
  {
    id: 'kr-andong-kwon', bonGwan: '안동 권씨', hanja: '安東 權氏', rank: 11, population: 696000,
    era: '후삼국 · 고려', category: '사성·개국공신',
    hook: '고창전투 공로와 고려 태조의 사성 기록이 남은 본관',
    history: '권행은 고창전투에서 고려군에 협력해 공을 세우고 왕건에게 권씨 성을 하사받았다고 전한다. 한국 성씨 형성에서 “사성”이라는 제도를 보여주는 좋은 사례다.',
    record: '2015년 약 69.6만 명. 17세기 안동권씨 족보 편찬 기록도 남아 있다.',
    notable: { name: '권행', role: '고려 개국공신 · 안동 권씨 시조' },
    wealth: '개국공신 시조 전승은 가문사의 출발점이지 현대의 경제적 지위를 보장하지 않는다.',
    sourceIds: ['koreaCensus2015', 'gwonHaengAKS', 'andongKwonGenealogy']
  },
  {
    id: 'kr-indong-jang', bonGwan: '인동 장씨', hanja: '仁同 張氏', rank: 12, population: 667000,
    era: '조선', category: '학문·교육',
    hook: '여헌 장현광을 통해 조선 성리학과 지역 학맥을 읽는 본관',
    history: '장현광은 본관 인동으로 관직보다 학문과 교육에 비중을 두었던 조선 후기 학자다. 가문 기록을 정치 엘리트 일변도가 아니라 학문 공동체의 역사로 볼 수 있다.',
    record: '2015년 약 66.7만 명. 지역 기반 학맥과 문중의 관계를 살펴볼 수 있다.',
    notable: { name: '장현광', role: '조선 후기 성리학자 · 본관 인동' },
    wealth: '학자 가문의 명성과 현대 경제지위는 별개의 층위다.',
    sourceIds: ['koreaCensus2015', 'jangHyeongwangAKS']
  },
  {
    id: 'kr-pyeongsan-shin', bonGwan: '평산 신씨', hanja: '平山 申氏', rank: 13, population: 563000,
    era: '후삼국 · 고려', category: '개국공신',
    hook: '왕건을 구하고 전사한 개국공신 신숭겸의 본관',
    history: '신숭겸은 고려 개국공신 1등에 책록된 장수로 평산 신씨의 시조다. 후삼국 통일 과정과 성씨·본관 형성을 함께 보여준다.',
    record: '2015년 약 56.3만 명. 개국공신 서사와 지역 본관의 결합을 확인할 수 있다.',
    notable: { name: '신숭겸', role: '고려 개국공신 · 평산 신씨 시조' },
    wealth: '공신 가문의 역사적 명예와 현대 개인의 부는 직접 연결되지 않는다.',
    sourceIds: ['koreaCensus2015', 'shinSunggyeomAKS']
  },
  {
    id: 'kr-andong-kim', bonGwan: '안동 김씨', hanja: '安東 金氏', rank: 15, population: 520000,
    era: '조선 후기', category: '세도정치·족보',
    hook: '19세기 세도정치와 1580년대 족보 기록을 동시에 볼 수 있는 본관',
    history: '김조순은 본관 안동으로 순조대 이후 정치적 영향력을 키웠고, 안동 김씨 세력은 19세기 세도정치의 핵심으로 평가된다. 한편 1580년경 간행된 『안동김씨성보』는 조선 전기 족보 편찬사 자료이기도 하다.',
    record: '2015년 약 52.0만 명. “권력가문”이라는 대중적 이미지는 특정 시대 정치사에 근거하며 본관 전체의 현대적 경제상태와는 구별해야 한다.',
    notable: { name: '김조순', role: '조선 후기 문신 · 안동 김씨 세도정치의 중심 인물' },
    wealth: '이 본관은 “부자 성씨”보다 특정 시기 정치권력 집중의 사례로 다루는 것이 정확하다.',
    sourceIds: ['koreaCensus2015', 'kimJosunAKS', 'sedoPoliticsAKS', 'andongKimGenealogy']
  }
];
