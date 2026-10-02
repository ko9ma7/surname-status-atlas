export const wealthSignals = [
  // JAPAN
  {
    id:'JP-toyoda', country:'JP', surname:'Toyoda', native:'豊田', korean:'도요다', signal:'strong-context', label:'기업 창업가문 신호',
    hook:'‘도요다’라는 이름 자체가 토요타 창업가문을 떠올리게 하는 일본의 대표적인 기업가문 사례.',
    history:'도요다 기이치로(豊田喜一郎)가 자동차 사업을 추진했고 1937년 Toyota Motor가 설립됐다. 회사명은 창업가 성씨 豊田(Toyoda)와 철자가 다르다.',
    wealthEvidence:'가문의 이름이 글로벌 자동차 기업의 기원과 직접 연결되는 사례다. 다만 豊田 성씨를 가진 모든 개인이 창업가문과 관련된 것은 아니다.',
    notables:[['Toyoda Kiichiro','도요다 기이치로 · Toyota Motor 창업 핵심 인물'],['Toyoda Akio','도요다 아키오 · Toyota Motor 회장']],
    tags:['자동차','창업가문','토요타'], sourceIds:['toyotaHistory','toyotaName']
  },
  {
    id:'JP-torii', country:'JP', surname:'Torii', native:'鳥井', korean:'도리이', signal:'strong-context', label:'주류 기업가문 신호',
    hook:'산토리의 창업자 가문으로 기업사에서 반복해서 등장하는 성씨.',
    history:'도리이 신지로가 1899년 Torii Shoten을 세우고 일본 위스키 사업을 개척했다. 산토리 역사는 창업가문이 여러 세대에 걸쳐 경영에 참여해온 기록을 제공한다.',
    wealthEvidence:'기업·가문 맥락에서는 매우 강한 부·기업가문 신호지만, 성씨 자체의 일반적인 계층 표지는 아니다.',
    notables:[['Torii Shinjiro','도리이 신지로 · Suntory 창업자'],['Torii Nobuhiro','도리이 노부히로 · Suntory Holdings 경영진']],
    tags:['산토리','위스키','창업가문'], sourceIds:['suntoryHistory']
  },
  {
    id:'JP-mori', country:'JP', surname:'Mori', native:'森', korean:'모리', signal:'medium-context', label:'부동산 기업가문 사례',
    hook:'도쿄 대형 도시개발의 Mori Building과 연결되면 강한 부동산 재벌 이미지가 생긴다.',
    history:'모리 다이키치로가 1955년 전신 회사를 세웠고, Mori Building은 이후 롯폰기힐스·아자부다이힐스 등 대규모 도시개발로 성장했다.',
    wealthEvidence:'森은 매우 흔한 성씨라 성만으로는 부를 추정할 수 없다. ‘Mori Building 가문’이라는 추가 맥락에서만 강한 신호다.',
    notables:[['Mori Taikichiro','모리 다이키치로 · Mori Building 창업자'],['Mori Minoru','모리 미노루 · 도시개발 사업가']],
    tags:['부동산','도쿄','도시개발'], sourceIds:['moriBuildingHistory']
  },
  {
    id:'JP-yanai', country:'JP', surname:'Yanai', native:'柳井', korean:'야나이', signal:'medium', label:'현대 억만장자 성씨',
    hook:'유니클로·Fast Retailing의 야나이 다다시 때문에 현대 일본 부호 이미지가 강해진 성씨.',
    history:'야나이는 부모의 의류점 환경에서 성장해 Fast Retailing을 구축했고, Forbes Japan 2026 부호 순위에서 최상위권에 올랐다.',
    wealthEvidence:'현재 유명 부호 한 가문의 강한 사례이지, 柳井 성씨 전체의 부유함을 뜻하지 않는다.',
    notables:[['Tadashi Yanai','야나이 다다시 · Fast Retailing 창업자']],
    tags:['유니클로','리테일','현대부호'], sourceIds:['forbesYanai2026']
  },
  {
    id:'JP-son', country:'JP', surname:'Son', native:'孫', korean:'손', signal:'medium', label:'현대 억만장자 성씨',
    hook:'손정의(孫正義)라는 인물 때문에 기술·투자 부호 이미지를 즉시 연상시키는 사례.',
    history:'손정의는 SoftBank Group을 창업해 통신·투자·AI 사업으로 확장했다. Forbes Japan 2026에서는 일본 최고 부호로 집계됐다.',
    wealthEvidence:'개인 창업가의 성공 사례로, ‘孫’ 성씨 자체가 일본 사회에서 부유층 계보를 뜻하는 것은 아니다.',
    notables:[['Masayoshi Son','손정의 · SoftBank Group 창업자']],
    tags:['소프트뱅크','AI','투자'], sourceIds:['forbesJapan2026','forbesSon2026']
  },

  // KOREA
  {
    id:'KR-lee-samsung', country:'KR', surname:'Lee', native:'이', korean:'이(삼성)', signal:'strong-context', label:'재벌가문 맥락',
    hook:'한국에서 “삼성 이씨”라는 맥락이 붙으면 가장 강하게 재벌가문을 떠올리는 사례 중 하나.',
    history:'이병철이 1938년 삼성의 전신을 창업했고, 이후 이건희를 거쳐 이재용이 삼성전자 회장을 맡는 기업가문 계승사가 이어졌다.',
    wealthEvidence:'Forbes Korea 2026에서 이재용은 한국 부호 1위로 집계됐다. 그러나 이(李)는 한국에서 매우 흔한 성씨라 ‘이씨’만으로는 아무런 재산 추정이 불가능하다.',
    notables:[['Lee Byung-chull','이병철 · 삼성 창업자'],['Lee Kun-hee','이건희 · 삼성 회장'],['Jay Y. Lee','이재용 · 삼성전자 회장']],
    tags:['삼성','재벌','기업가문'], sourceIds:['samsungHistory','forbesKorea2026','forbesJayLee2026']
  },
  {
    id:'KR-chung-hyundai', country:'KR', surname:'Chung', native:'정', korean:'정(현대)', signal:'strong-context', label:'재벌가문 맥락',
    hook:'“현대 정씨”는 창업자 정주영과 여러 현대 계열 기업가문을 함께 연상시키는 강한 기업가문 코드.',
    history:'정주영이 현대를 일으킨 뒤 자동차·건설·중공업 등으로 사업이 확장됐다. 현재도 정몽구·정의선 등 가족 경영의 흔적이 뚜렷하다.',
    wealthEvidence:'기업가문 맥락에서는 강하지만 정(鄭/丁/程 등)은 흔한 성씨이므로 성씨 단독 판정은 불가하다.',
    notables:[['Chung Ju-yung','정주영 · 현대 창업자'],['Chung Mong-koo','정몽구 · 현대자동차그룹 명예회장'],['Euisun Chung','정의선 · 현대자동차그룹 회장']],
    tags:['현대','자동차','건설','재벌'], sourceIds:['hyundaiHeritage','forbesKorea2026']
  },
  {
    id:'KR-koo-lg', country:'KR', surname:'Koo', native:'구', korean:'구(LG)', signal:'strong-context', label:'재벌가문 맥락',
    hook:'한국 대기업사에서 구씨는 LG 창업가문과 연결될 때 매우 강한 재벌가문 신호.',
    history:'구인회가 락희화학을 창업했고, 금성사 등을 거쳐 LG그룹으로 성장했다. 구광모는 2018년 그룹 회장에 올랐다.',
    wealthEvidence:'Forbes는 구광모를 LG 지분을 상속한 대기업 총수이자 억만장자로 기록한다. 다만 모든 구씨와는 무관하다.',
    notables:[['Koo In-hwoi','구인회 · LG 창업자'],['Koo Kwang-mo','구광모 · LG 회장']],
    tags:['LG','재벌','전자','화학'], sourceIds:['lgHistory','forbesKoo2026']
  },
  {
    id:'KR-chey-sk', country:'KR', surname:'Chey', native:'최', korean:'최(SK)', signal:'strong-context', label:'재벌가문 맥락',
    hook:'SK그룹 맥락에서 최씨는 최종건·최종현·최태원으로 이어지는 기업가문을 뜻한다.',
    history:'선경직물에서 출발한 SK는 에너지·통신·반도체로 확장됐다. 최태원은 창업자 최종건의 조카로 현재 그룹 회장이다.',
    wealthEvidence:'Forbes 2026은 최태원을 억만장자이자 SK 회장으로 기록한다. ‘최씨’ 자체는 매우 흔하므로 기업 맥락이 필수다.',
    notables:[['Chey Jong-gun','최종건 · SK 창업자'],['Chey Jong-hyon','최종현 · SK 회장'],['Chey Tae-won','최태원 · SK 회장']],
    tags:['SK','반도체','통신','재벌'], sourceIds:['skHistory','forbesChey2026']
  },
  {
    id:'KR-shin-lotte', country:'KR', surname:'Shin', native:'신', korean:'신(롯데)', signal:'strong-context', label:'재벌가문 맥락',
    hook:'“롯데 신씨”라고 하면 신격호 창업가문을 연상하는 한국·일본 양국 기업사 사례.',
    history:'신격호가 일본에서 롯데를 키운 뒤 1967년 한국 롯데제과를 설립하며 그룹을 확장했다.',
    wealthEvidence:'롯데 가문이라는 맥락은 강하지만 신씨 전체에 대한 신호는 아니다.',
    notables:[['Shin Kyuk-ho','신격호 · 롯데 창업자'],['Shin Dong-bin','신동빈 · 롯데 회장']],
    tags:['롯데','유통','식품','재벌'], sourceIds:['lotteHistory']
  },

  // INDIA
  {
    id:'IN-ambani', country:'IN', surname:'Ambani', native:'अंबानी', korean:'암바니', signal:'very-strong', label:'현대 재벌가문',
    hook:'인도에서 부호 성씨를 말할 때 가장 먼저 거론되는 대표적인 재벌가문 이름.',
    history:'Dhirubhai Ambani가 Reliance를 성장시켰고, 이후 Mukesh Ambani와 가족이 Reliance Industries를 중심으로 거대한 기업 자산을 이어가고 있다.',
    wealthEvidence:'Forbes India의 부호 순위에서 Mukesh Ambani가 수년간 최상위권을 유지한다.',
    notables:[['Dhirubhai Ambani','릴라이언스 창업자'],['Mukesh Ambani','Reliance Industries 회장']],
    tags:['Reliance','재벌','석유화학','통신'], sourceIds:['forbesIndia2025']
  },
  {
    id:'IN-adani', country:'IN', surname:'Adani', native:'अडानी', korean:'아다니', signal:'very-strong', label:'현대 재벌가문',
    hook:'항만·에너지·인프라 그룹 때문에 성씨 자체가 기업집단 브랜드가 된 사례.',
    history:'Gautam Adani가 Adani Group을 성장시켜 항만·공항·에너지·인프라 사업을 확대했다.',
    wealthEvidence:'Forbes India 2025에서 Gautam Adani & family는 인도 최상위 부호권에 포함됐다.',
    notables:[['Gautam Adani','Adani Group 창업자·회장']],
    tags:['Adani','인프라','항만','에너지'], sourceIds:['forbesIndia2025']
  },
  {
    id:'IN-birla', country:'IN', surname:'Birla', native:'बिड़ला', korean:'비를라', signal:'very-strong', label:'다세대 산업가문',
    hook:'인도 산업사에서 ‘Birla’는 여러 세대에 걸친 기업가문과 자선·교육기관을 동시에 연상시키는 이름.',
    history:'Aditya Birla Group은 세대를 거쳐 시멘트·금속·통신·금융 등으로 확장됐다. Kumar Mangalam Birla는 4세대 수장으로 소개된다.',
    wealthEvidence:'Forbes는 Kumar Birla를 4세대 그룹 수장 및 인도 주요 부호로 기록한다.',
    notables:[['G.D. Birla','20세기 인도 산업가'],['Kumar Mangalam Birla','Aditya Birla Group 회장']],
    tags:['Aditya Birla','산업가문','다세대'], sourceIds:['forbesKumarBirla']
  },
  {
    id:'IN-godrej', country:'IN', surname:'Godrej', native:'गोदरेज', korean:'고드레지', signal:'very-strong', label:'다세대 기업가문',
    hook:'기업명이 곧 성씨라서 ‘Godrej’라는 이름 자체가 인도 대기업·부호가문을 뜻하는 대표 사례.',
    history:'Godrej 가문은 소비재·부동산·가전·산업재 등에 걸친 사업을 구축했고 여러 가족 구성원이 Forbes 부호 명단에 올라 있다.',
    wealthEvidence:'Forbes India 2025 명단에 Godrej 가문 구성원들이 여러 명 포함됐다.',
    notables:[['Adi Godrej','Godrej Industries 명예회장'],['Nadir Godrej','Godrej Industries 경영진']],
    tags:['Godrej','소비재','부동산','가문기업'], sourceIds:['forbesIndia2025']
  },
  {
    id:'IN-jindal', country:'IN', surname:'Jindal', native:'जिंदल', korean:'진달', signal:'very-strong', label:'철강 산업가문',
    hook:'Jindal은 인도 철강·전력 산업과 연결된 거대 산업가문 성씨로 널리 알려져 있다.',
    history:'O.P. Jindal이 철강·전력 사업을 구축했고 가족이 여러 계열 사업을 이어가고 있다.',
    wealthEvidence:'Forbes India 2025에서 Savitri Jindal & family가 최상위 부호권에 포함된다.',
    notables:[['O.P. Jindal','Jindal 산업가문 창업자'],['Savitri Jindal','Jindal 가문 대표 인물']],
    tags:['철강','전력','산업가문'], sourceIds:['forbesIndia2025']
  },
  {
    id:'IN-bajaj', country:'IN', surname:'Bajaj', native:'बजाज', korean:'바자지', signal:'strong', label:'다세대 기업가문',
    hook:'Bajaj라는 성씨가 오토바이·금융·산업그룹의 브랜드와 사실상 동일하게 인식되는 사례.',
    history:'Bajaj Group은 제조·모빌리티·금융으로 확장된 대표 인도 기업가문이다.',
    wealthEvidence:'Forbes India 2025의 상위 부호 명단에 Bajaj family가 포함된다.',
    notables:[['Jamnalal Bajaj','Bajaj Group 창업자'],['Rahul Bajaj','Bajaj 그룹 전 회장']],
    tags:['자동차','금융','기업가문'], sourceIds:['forbesIndia2025']
  },
  {
    id:'IN-poona', country:'IN', surname:'Poonawalla', native:'पूनावाला', korean:'푸나왈라', signal:'strong', label:'제약·백신 부호가문',
    hook:'Serum Institute of India와 연결돼 백신·제약 분야의 부호가문을 연상시키는 성씨.',
    history:'Cyrus Poonawalla가 Serum Institute of India를 성장시켰고 가족이 사업을 이어가고 있다.',
    wealthEvidence:'Forbes India 2025 상위 부호 명단에 Cyrus Poonawalla가 포함된다.',
    notables:[['Cyrus Poonawalla','Serum Institute 창업자'],['Adar Poonawalla','Serum Institute CEO']],
    tags:['백신','제약','Serum Institute'], sourceIds:['forbesIndia2025']
  },
  {
    id:'IN-mistry', country:'IN', surname:'Mistry', native:'मिस्त्री', korean:'미스트리', signal:'strong', label:'건설·투자 가문',
    hook:'Shapoorji Pallonji 그룹과 Tata 지분으로 유명한 인도 파르시 기업가문 성씨.',
    history:'Mistry 가문은 Shapoorji Pallonji 건설·엔지니어링 그룹과 대규모 투자자산으로 알려져 있다.',
    wealthEvidence:'Forbes India 2025에서 Shapoor Mistry & family가 상위 부호 명단에 포함된다.',
    notables:[['Pallonji Mistry','Shapoorji Pallonji 그룹 전 회장'],['Shapoor Mistry','가문 사업 승계']],
    tags:['건설','Tata','파르시 기업가문'], sourceIds:['forbesIndia2025']
  },

  // UNITED KINGDOM
  {
    id:'GB-grosvenor', country:'GB', surname:'Grosvenor', native:'', korean:'그로스베너', signal:'very-strong', label:'귀족·대지주 가문',
    hook:'런던 메이페어·벨그라비아와 수백 년간 연결된 성씨로, 영국에서 부·토지·귀족 이미지를 가장 강하게 갖는 이름 중 하나.',
    history:'Grosvenor 공식 연혁은 가문의 뿌리를 약 1,000년 전까지 추적하고, 1677년 이후 런던 부동산과 깊이 연결됐다고 설명한다.',
    wealthEvidence:'가문기업 Grosvenor가 장기간 대규모 부동산 자산을 관리해 성씨와 자산 이미지가 직접 결합돼 있다.',
    notables:[['Hugh Grosvenor','7th Duke of Westminster'],['Thomas Grosvenor','17세기 런던 토지 가문']],
    tags:['웨스트민스터 공작','Mayfair','Belgravia','귀족'], sourceIds:['grosvenorHistory']
  },
  {
    id:'GB-rothschild', country:'GB', surname:'Rothschild', native:'', korean:'로스차일드', signal:'very-strong', label:'은행가문',
    hook:'유럽 금융가문을 상징하는 이름 자체가 자산·은행·귀족 네트워크를 연상시키는 대표 사례.',
    history:'Mayer Amschel Rothschild의 후손들이 유럽 여러 금융 중심지에서 은행 네트워크를 구축했고 영국 지계도 큰 역할을 했다.',
    wealthEvidence:'개별 현대 자산을 하나의 수치로 합산하기 어려운 다분지 가문이지만, ‘Rothschild’라는 성 자체의 역사적 금융 엘리트 신호는 매우 강하다.',
    notables:[['Nathan Mayer Rothschild','영국 Rothschild 은행가문 창립 세대'],['Jacob Rothschild','영국 금융·자선 인물']],
    tags:['은행','금융','유럽가문'], sourceIds:['rothschildArchive']
  },
  {
    id:'GB-cavendish', country:'GB', surname:'Cavendish', native:'', korean:'캐번디시', signal:'strong', label:'귀족·대저택 가문',
    hook:'Chatsworth와 Devonshire 공작가로 이어지는 영국 전통 귀족 성씨.',
    history:'Chatsworth는 수백 년 동안 Cavendish 가문의 본거지였고 여러 세대의 공작·정치가·후원자를 배출했다.',
    wealthEvidence:'현대 개인 소득보다 토지·저택·귀족 지위의 장기 세습 이미지가 강한 사례다.',
    notables:[['William Cavendish','Devonshire 공작가 여러 세대의 대표 성명'],['Deborah Cavendish','Chatsworth 보존·운영에 기여']],
    tags:['Chatsworth','Devonshire','귀족'], sourceIds:['chatsworthHistory']
  },
  {
    id:'GB-percy', country:'GB', surname:'Percy', native:'', korean:'퍼시', signal:'strong', label:'중세 귀족가문',
    hook:'Northumberland 공작가와 Alnwick Castle로 이어지는 중세 이래 귀족 성씨.',
    history:'Percy 가문은 700년 이상 Alnwick과 연결되며 잉글랜드 북부의 정치·군사사에 반복해서 등장한다.',
    wealthEvidence:'귀족·토지·성곽이라는 상류층 역사 신호는 강하지만 현대 동일 성씨 개인의 부를 뜻하지는 않는다.',
    notables:[['Henry Percy','Northumberland 공작가 계열의 반복되는 이름'],['Ralph Percy','12th Duke of Northumberland']],
    tags:['Northumberland','Alnwick','중세귀족'], sourceIds:['percyHistory']
  },
  {
    id:'GB-guinness', country:'GB', surname:'Guinness', native:'', korean:'기네스', signal:'strong', label:'기업·귀족 가문',
    hook:'맥주 브랜드이자 다세대 기업·자선 가문으로 성씨가 곧 브랜드가 된 사례.',
    history:'Arthur Guinness가 1759년 St James’s Gate 양조장을 시작했고, 이후 여러 세대가 양조·자선·정치 활동에 참여했다.',
    wealthEvidence:'브랜드·가문 역사가 직접 연결돼 부유 기업가문 이미지가 강하다.',
    notables:[['Arthur Guinness','Guinness 창업자'],['Benjamin Guinness','양조업자·자선가']],
    tags:['맥주','브랜드가문','자선'], sourceIds:['guinnessHistory']
  },

  // SWEDEN
  {
    id:'SE-wallenberg', country:'SE', surname:'Wallenberg', native:'', korean:'발렌베리', signal:'very-strong', label:'금융·산업 지배가문',
    hook:'스웨덴에서 “Wallenberg”는 은행·산업·재단 네트워크를 즉시 떠올리게 하는 가장 강한 부·권력 성씨 중 하나.',
    history:'1856년 André Oscar Wallenberg의 은행 설립에서 시작해 5~6세대가 Investor AB, SEB, 재단 등을 통해 산업·금융에 참여해왔다.',
    wealthEvidence:'공식 가문사는 170년 가까운 기업·금융 활동을 기록하며, 가문 재단과 지주회사가 대기업 지분을 장기 보유한다.',
    notables:[['André Oscar Wallenberg','SEB 전신 창립자'],['Marcus Wallenberg','은행가·산업가'],['Jacob Wallenberg','Investor AB 회장 경력']],
    tags:['Investor AB','SEB','재단','산업가문'], sourceIds:['wallenbergHistory','wallenbergHoldings']
  },
  {
    id:'SE-rausing', country:'SE', surname:'Rausing', native:'', korean:'라우싱', signal:'very-strong', label:'포장재 부호가문',
    hook:'Tetra Pak 창업가문으로 스웨덴의 대표적인 세습 부호 성씨.',
    history:'가문의 조부가 Tetra Pak을 창업했고 후손들이 TetraLaval 지분을 이어받았다.',
    wealthEvidence:'Forbes 2026은 Jörn·Kirsten 등 Rausing 형제자매를 각각 억만장자로 기록한다.',
    notables:[['Ruben Rausing','Tetra Pak 창업자'],['Jörn Rausing','TetraLaval 공동 소유 가문'],['Kirsten Rausing','TetraLaval 공동 소유 가문']],
    tags:['Tetra Pak','포장','세습부'], sourceIds:['forbesRausing2026']
  },
  {
    id:'SE-persson', country:'SE', surname:'Persson', native:'', korean:'페르손', signal:'strong-context', label:'H&M 창업가문',
    hook:'H&M 창업가문 맥락에서는 스웨덴에서 매우 강한 기업가문 성씨.',
    history:'Erling Persson이 H&M을 창업했고, 후손인 Stefan Persson 가문이 오랜 기간 대규모 의결권을 유지해왔다.',
    wealthEvidence:'H&M 공식 지배구조 자료에서 창업가문 Persson의 높은 의결권 비중이 확인된다.',
    notables:[['Erling Persson','H&M 창업자'],['Stefan Persson','H&M 전 회장']],
    tags:['H&M','패션','창업가문'], sourceIds:['hmOwnership']
  },
  {
    id:'SE-schorling', country:'SE', surname:'Schörling', native:'', korean:'셰를링', signal:'strong', label:'투자·산업가문',
    hook:'스웨덴 상장기업 지분을 장기간 보유해온 투자 가문으로 알려진 성씨.',
    history:'Melker Schörling이 산업·투자 지주 포트폴리오를 구축했고 가족이 관련 지분을 이어받았다.',
    wealthEvidence:'Forbes는 Schörling 가족 구성원을 억만장자로 기록한다.',
    notables:[['Melker Schörling','산업가·투자자'],['Sofia Högberg Schörling','가문 자산 상속인']],
    tags:['투자','산업','지주회사'], sourceIds:['forbesSchorling']
  },

  // CHINA
  {
    id:'CN-zhong', country:'CN', surname:'Zhong', native:'钟', korean:'중', signal:'low-surname', label:'현대 부호 사례 · 성씨 신호 약함',
    hook:'Zhong Shanshan은 중국 최상위 부호지만, 钟이라는 성 자체가 부유가문을 뜻하지는 않는다.',
    history:'Zhong Shanshan은 Nongfu Spring과 Wantai Biological 지분으로 거대한 자산을 형성했다.',
    wealthEvidence:'Forbes China 2025 1위였지만 중국 성씨는 인구가 매우 크고 동성인이 많아 성씨만으로 부를 판정하기 어렵다.',
    notables:[['Zhong Shanshan','Nongfu Spring 창업자']],
    tags:['중국부호','Nongfu Spring','주의사례'], sourceIds:['forbesChina2025','forbesZhong2026']
  },
  {
    id:'CN-zhang', country:'CN', surname:'Zhang', native:'张', korean:'장', signal:'low-surname', label:'현대 부호 사례 · 성씨 신호 약함',
    hook:'Zhang Yiming 같은 초부호가 있어도 张은 매우 흔한 성씨이므로 ‘부자 성씨’ 신호로는 약하다.',
    history:'Zhang Yiming은 ByteDance 공동창업자로 글로벌 기술 부호가 됐다.',
    wealthEvidence:'Forbes China 2025 2위였지만 같은 张 성씨 인구가 방대해 성씨 단독 분류는 무의미하다.',
    notables:[['Zhang Yiming','ByteDance 공동창업자']],
    tags:['ByteDance','기술부호','주의사례'], sourceIds:['forbesChina2025','forbesZhangYiming2026']
  },
  {
    id:'CN-he', country:'CN', surname:'He', native:'何', korean:'허/하', signal:'medium-family', label:'가족기업 사례',
    hook:'Midea 창업가문처럼 가족기업 맥락이 붙을 때만 부의 신호가 강해진다.',
    history:'He Xiangjian이 Midea를 세계적 가전기업으로 키웠고 그의 아들도 기업 이사회·지분 사업에 참여한다.',
    wealthEvidence:'Forbes 2025 중국 부호 상위권이지만 何 성씨 전체의 부와는 관계없다.',
    notables:[['He Xiangjian','Midea 창업자'],['He Jianfeng','가문 계열 사업가']],
    tags:['Midea','가전','가족기업'], sourceIds:['forbesChina2025','forbesHe2026']
  },

  // ITALY
  {
    id:'IT-ferrero', country:'IT', surname:'Ferrero', native:'', korean:'페레로', signal:'very-strong', label:'식품 재벌가문',
    hook:'Nutella·Ferrero Rocher로 유명한 기업명이 곧 창업가 성씨인 대표적인 이탈리아 부호가문.',
    history:'Pietro와 Giovanni Ferrero가 1946년 회사를 세웠고 세대를 거쳐 가족 소유 기업으로 성장했다.',
    wealthEvidence:'기업 브랜드와 가문 성씨가 완전히 겹쳐 현대 부호가문 신호가 매우 강하다.',
    notables:[['Pietro Ferrero','Ferrero 공동창업자'],['Michele Ferrero','2세대 경영자'],['Giovanni Ferrero','3세대 회장']],
    tags:['Nutella','식품','가족기업'], sourceIds:['ferreroHistory']
  },
  {
    id:'IT-agnelli', country:'IT', surname:'Agnelli', native:'', korean:'아녤리', signal:'very-strong', label:'자동차 산업가문',
    hook:'FIAT과 이탈리아 산업사를 상징하는 성씨로, 20세기 유럽 부유 산업가문 이미지가 매우 강하다.',
    history:'Giovanni Agnelli가 FIAT 창업에 참여했고 후손 Gianni Agnelli 등으로 이어지며 자동차·투자·스포츠 자산과 연결됐다.',
    wealthEvidence:'현대에는 지주 구조를 통해 자산이 분산돼 있지만 ‘Agnelli’라는 이름의 산업가문 상징성은 매우 강하다.',
    notables:[['Giovanni Agnelli','FIAT 창업자 세대'],['Gianni Agnelli','FIAT 회장·산업가']],
    tags:['FIAT','자동차','Exor','산업가문'], sourceIds:['agnelliFoundation']
  },
  {
    id:'IT-delvecchio', country:'IT', surname:'Del Vecchio', native:'', korean:'델 베키오', signal:'strong', label:'안경 산업 부호가문',
    hook:'Luxottica 창업자 Leonardo Del Vecchio의 후손들이 대규모 지주회사 지분을 상속한 현대 부호가문.',
    history:'Leonardo Del Vecchio는 Luxottica를 세계적 안경기업으로 키웠고 사후 가족이 지주회사 Delfin 지분을 나눠 보유한다.',
    wealthEvidence:'Forbes는 여러 Del Vecchio 상속인을 억만장자로 기록한다.',
    notables:[['Leonardo Del Vecchio','Luxottica 창업자']],
    tags:['Luxottica','Delfin','안경','상속'], sourceIds:['forbesDelVecchio']
  },
  {
    id:'IT-medici', country:'IT', surname:'Medici', native:'de’ Medici', korean:'메디치', signal:'historical-strong', label:'역사적 금융·권력가문',
    hook:'현재 부호 명단이 아니라 르네상스 시대 은행·정치·예술 후원의 상징으로 남은 역사적 ‘부자 성씨’.',
    history:'Medici 가문은 피렌체 은행과 정치권력을 바탕으로 르네상스 후원과 교황·군주 배출로 유명하다.',
    wealthEvidence:'현대 자산을 뜻하지 않는 역사적 신호다. “부유한 성씨”의 역사적 문화코드를 설명하는 자료로만 사용한다.',
    notables:[['Cosimo de’ Medici','피렌체 정치·금융 지도자'],['Lorenzo de’ Medici','르네상스 후원자']],
    tags:['르네상스','은행','피렌체','역사'], sourceIds:['mediciBritannica']
  },

  // UNITED STATES
  {
    id:'US-walton', country:'US', surname:'Walton', native:'', korean:'월턴', signal:'very-strong', label:'미국 초대형 부호가문',
    hook:'Walmart 창업가문으로 현대 미국에서 성씨만으로도 거대한 세습 자산을 연상시키는 대표 이름.',
    history:'Sam Walton이 1962년 첫 Walmart를 열었고, 1967년에는 Walton 가족이 24개 점포를 소유했다. 후손들이 Walmart 대규모 지분을 보유한다.',
    wealthEvidence:'Forbes 2026은 Walton 가문을 미국에서 가장 부유한 가문으로 다루며, Walmart 지분이 자산의 핵심이라고 설명한다.',
    notables:[['Sam Walton','Walmart 창업자'],['Rob Walton','Walmart 창업가문'],['Jim Walton','Walmart 창업가문'],['Alice Walton','Walmart 창업가문·자선가']],
    tags:['Walmart','유통','세습부'], sourceIds:['walmartHistory','forbesWaltonFamily2026','forbesAliceWalton']
  },
  {
    id:'US-mars', country:'US', surname:'Mars', native:'', korean:'마스', signal:'very-strong', label:'비상장 가족기업 가문',
    hook:'M&M’s·Snickers·Petcare의 Mars Inc.와 성씨가 동일해 기업가문 브랜드가 매우 강한 사례.',
    history:'Frank C. Mars가 1911년 사업을 시작했고 가족 소유 기업으로 여러 세대가 사업을 확장했다.',
    wealthEvidence:'Mars는 여전히 가족 소유 대기업으로 알려져 있어 성씨와 기업가문 자산 이미지가 직접 연결된다.',
    notables:[['Frank C. Mars','Mars 창업자'],['Forrest Mars Sr.','2세대 글로벌 확장'],['Jacqueline Mars','Mars 가문 상속인']],
    tags:['Mars Inc.','식품','펫케어','가족기업'], sourceIds:['marsHistory']
  },
  {
    id:'US-koch', country:'US', surname:'Koch', native:'', korean:'코크', signal:'very-strong', label:'산업·투자 부호가문',
    hook:'미국 비상장 산업기업 Koch와 동일한 성씨로, 현대 초대형 부호가문 이미지를 가진 이름.',
    history:'Fred Koch가 가족 사업의 기반을 만들고 Charles·David Koch 세대에서 Koch Industries를 거대 비상장 기업으로 성장시켰다.',
    wealthEvidence:'Forbes 2026은 Charles Koch & family와 Julia Koch & family를 각각 거대한 Koch 지분 보유자로 기록한다.',
    notables:[['Fred Koch','가족기업 창업 세대'],['Charles Koch','Koch 회장'],['Julia Koch','가문 지분 상속인']],
    tags:['Koch','비상장기업','산업','세습부'], sourceIds:['forbesCharlesKoch2026','forbesJuliaKoch2026']
  },
  {
    id:'US-rockefeller', country:'US', surname:'Rockefeller', native:'', korean:'록펠러', signal:'historical-very-strong', label:'역사적 석유·금융 명문가',
    hook:'“미국 부자 성씨”의 대명사처럼 굳어진 이름. 현대 개인 자산보다 역사·재단·금융 엘리트 상징성이 핵심.',
    history:'John D. Rockefeller가 Standard Oil을 구축했고 후손들은 재단·은행·정치·자선 영역에서 영향력을 이어갔다.',
    wealthEvidence:'Rockefeller Archive Center는 Standard Oil과 가족의 대규모 자산·자선 기록을 보존한다. 현재 모든 Rockefeller가 부유하다는 뜻은 아니다.',
    notables:[['John D. Rockefeller','Standard Oil 창업자'],['John D. Rockefeller Jr.','자선가·가문 2세대'],['David Rockefeller','은행가']],
    tags:['Standard Oil','재단','역사적부호'], sourceIds:['rockefellerJDR','rockefellerFamily']
  },
  {
    id:'US-vanderbilt', country:'US', surname:'Vanderbilt', native:'', korean:'밴더빌트', signal:'historical-strong', label:'역사적 철도·해운 재벌가문',
    hook:'19세기 미국 Gilded Age의 대표 부호가문 성씨.',
    history:'Cornelius Vanderbilt가 해운과 철도로 거대한 자산을 만들었고 후손들은 저택·대학·사교계 역사에 흔적을 남겼다.',
    wealthEvidence:'오늘날 동일 성씨 개인의 부를 뜻하지 않는 역사적 부호가문 신호다.',
    notables:[['Cornelius Vanderbilt','철도·해운 사업가'],['William H. Vanderbilt','2세대 사업가']],
    tags:['철도','해운','Gilded Age'], sourceIds:['vanderbiltHistory']
  },

  // FRANCE
  {
    id:'FR-bettencourt', country:'FR', surname:'Bettencourt Meyers', native:'', korean:'베탕쿠르 메이에르', signal:'very-strong', label:'L’Oréal 상속가문',
    hook:'프랑스에서 화장품 대기업 L’Oréal의 창업자 후손과 연결되는 대표적인 세습 부호 성씨.',
    history:'Françoise Bettencourt Meyers는 L’Oréal 창업자의 손녀이며 직계 가족이 회사 지분 3분의 1 이상을 보유한다.',
    wealthEvidence:'Forbes 2026은 Bettencourt Meyers & family를 세계 최상위 부호권으로 기록한다.',
    notables:[['Françoise Bettencourt Meyers','L’Oréal 상속가문'],['Jean-Victor Meyers','가문 차세대 이사회 인물']],
    tags:['L’Oréal','화장품','상속'], sourceIds:['forbesBettencourt2026']
  },
  {
    id:'FR-arnault', country:'FR', surname:'Arnault', native:'', korean:'아르노', signal:'very-strong', label:'명품 제국 가문',
    hook:'LVMH 회장 Bernard Arnault와 자녀들의 경영 참여로 ‘프랑스 럭셔리 부호가문’을 상징하는 이름.',
    history:'Bernard Arnault가 LVMH를 세계 최대 럭셔리 그룹으로 키웠고 가족 지주회사와 자녀들이 여러 브랜드 경영에 참여한다.',
    wealthEvidence:'가문 지주 구조와 LVMH 지분 때문에 현대 글로벌 최상위 부호가문 신호가 매우 강하다.',
    notables:[['Bernard Arnault','LVMH 회장'],['Delphine Arnault','Dior CEO'],['Antoine Arnault','LVMH·가문 사업 경영']],
    tags:['LVMH','럭셔리','가족경영'], sourceIds:['lvmhArnault']
  },
  {
    id:'FR-wertheimer', country:'FR', surname:'Wertheimer', native:'', korean:'베르트하이머', signal:'very-strong', label:'Chanel 소유가문',
    hook:'Chanel의 비상장 소유가문으로 패션업계에서 성씨 자체가 막대한 자산과 연결된다.',
    history:'Pierre Wertheimer가 Coco Chanel과 사업을 함께했고 후손 Alain·Gérard 형제가 Chanel을 소유한다.',
    wealthEvidence:'Forbes 2026은 Alain Wertheimer를 Chanel 소유 억만장자로 기록한다.',
    notables:[['Pierre Wertheimer','Chanel 사업 파트너·가문 창업 세대'],['Alain Wertheimer','Chanel 회장'],['Gérard Wertheimer','Chanel 공동 소유']],
    tags:['Chanel','명품','비상장'], sourceIds:['forbesWertheimer2026']
  },
  {
    id:'FR-dassault', country:'FR', surname:'Dassault', native:'', korean:'다쏘', signal:'very-strong', label:'항공·미디어 산업가문',
    hook:'Dassault Aviation·소프트웨어·Le Figaro와 연결돼 프랑스 산업·재산 가문을 상징하는 성씨.',
    history:'Marcel Dassault가 항공기업을 세웠고 후손들이 항공·소프트웨어·미디어·와인 자산을 이어받았다.',
    wealthEvidence:'Forbes 2026은 여러 Dassault 후손을 수십억 달러대 자산가로 기록한다.',
    notables:[['Marcel Dassault','Dassault Aviation 창업자'],['Laurent Dassault','가문 상속인·기업가']],
    tags:['항공','Le Figaro','산업가문'], sourceIds:['forbesDassault2026']
  },
  {
    id:'FR-pinault', country:'FR', surname:'Pinault', native:'', korean:'피노', signal:'very-strong', label:'명품·미술 부호가문',
    hook:'Kering·Christie’s·미술 컬렉션으로 프랑스 럭셔리 부호가문을 즉시 떠올리게 하는 이름.',
    history:'François Pinault가 1963년 사업을 시작해 Kering으로 발전시켰고 아들 François-Henri가 그룹을 이끈다.',
    wealthEvidence:'Forbes 2026은 Pinault & family를 프랑스 주요 부호가문으로 기록한다.',
    notables:[['François Pinault','Kering 창업자'],['François-Henri Pinault','Kering 경영자']],
    tags:['Kering','Gucci','Christie’s','미술'], sourceIds:['forbesPinault2026']
  },

  // GERMANY
  {
    id:'DE-quandt', country:'DE', surname:'Quandt', native:'', korean:'콴트', signal:'very-strong', label:'BMW 대주주 가문',
    hook:'독일 산업사에서 BMW 대주주 가문을 뜻하는 대표적인 부호 성씨.',
    history:'Herbert Quandt가 BMW의 성장 과정에서 핵심 역할을 했고 후손 Stefan Quandt와 Susanne Klatten이 대규모 BMW 지분을 보유한다.',
    wealthEvidence:'Forbes 2026은 Stefan Quandt와 Susanne Klatten을 독일 최상위 부호권으로 기록한다.',
    notables:[['Herbert Quandt','BMW 산업가'],['Stefan Quandt','BMW 대주주'],['Susanne Klatten','BMW·Altana 대주주']],
    tags:['BMW','산업가문','자동차'], sourceIds:['forbesQuandt2026','forbesKlatten2026']
  },
  {
    id:'DE-albrecht', country:'DE', surname:'Albrecht', native:'', korean:'알브레히트', signal:'very-strong', label:'Aldi 창업가문',
    hook:'Aldi 창업 형제와 후손들 때문에 유통 재벌가문을 떠올리게 하는 독일 대표 성씨.',
    history:'Karl Albrecht Sr.와 Theo Albrecht Sr. 형제가 가족 식료품점을 확장해 Aldi를 구축했고 후손들이 재산을 상속했다.',
    wealthEvidence:'Forbes 2026은 Karl Albrecht Jr. & family 등을 억만장자로 기록한다.',
    notables:[['Karl Albrecht Sr.','Aldi 공동창업자'],['Theo Albrecht Sr.','Aldi 공동창업자'],['Karl Albrecht Jr.','가문 상속인']],
    tags:['Aldi','유통','세습부'], sourceIds:['forbesAlbrecht2026']
  },
  {
    id:'DE-reimann', country:'DE', surname:'Reimann', native:'', korean:'라이만', signal:'very-strong', label:'JAB 지주가문',
    hook:'JAB Holding과 글로벌 소비재·커피·외식 브랜드 포트폴리오를 가진 독일 비공개 부호가문.',
    history:'Reimann 가문은 19세기 Benckiser 사업과 연결되며 현대에는 JAB Holding을 통해 소비재·외식 자산을 보유한다.',
    wealthEvidence:'Forbes 2026은 여러 Reimann 가족 구성원을 각각 억만장자로 기록한다.',
    notables:[['Ludwig Reimann','19세기 Benckiser 사업 합류'],['Wolfgang Reimann','JAB 가문 주주']],
    tags:['JAB','Krispy Kreme','Peet’s','Panera'], sourceIds:['forbesReimann2026']
  },
  {
    id:'DE-klatten', country:'DE', surname:'Klatten', native:'', korean:'클라텐', signal:'strong', label:'BMW·화학 자산가',
    hook:'Susanne Klatten 개인 때문에 현대 독일 부호 명단에서 강하게 보이는 성씨.',
    history:'Quandt 가문의 후손인 Susanne Klatten이 BMW 지분과 Altana 지분을 보유한다.',
    wealthEvidence:'부는 Klatten 성씨의 오래된 가문 역사보다 Quandt 가문에서 이어진 자산과 직접 연결된다.',
    notables:[['Susanne Klatten','BMW·Altana 대주주']],
    tags:['BMW','Altana','상속'], sourceIds:['forbesKlatten2026']
  },

  // SPAIN
  {
    id:'ES-ortega', country:'ES', surname:'Ortega', native:'', korean:'오르테가', signal:'strong-context', label:'Inditex 창업가문',
    hook:'스페인 최고 부호 Amancio Ortega와 Zara 때문에 현대 부호 이미지가 강하지만 Ortega 자체는 흔한 성씨.',
    history:'Amancio Ortega가 1975년 Zara/Inditex를 공동창업했고 딸 Marta Ortega가 현재 Inditex 회장을 맡는다.',
    wealthEvidence:'Forbes 2026은 Amancio Ortega를 세계 최상위 부호권으로 기록한다. 다만 성씨 전체가 부유하다는 뜻은 아니다.',
    notables:[['Amancio Ortega','Inditex 공동창업자'],['Marta Ortega Pérez','Inditex 회장'],['Sandra Ortega Mera','Inditex 상속인']],
    tags:['Zara','Inditex','패션'], sourceIds:['forbesOrtega2026','forbesSandraOrtega2026']
  },
  {
    id:'ES-delpino', country:'ES', surname:'Del Pino', native:'', korean:'델 피노', signal:'very-strong', label:'Ferrovial 창업가문',
    hook:'스페인 인프라 대기업 Ferrovial 창업가문 성씨로, 기업 지분이 세대에 걸쳐 이어지는 사례.',
    history:'Rafael del Pino y Moreno가 1952년 Ferrovial을 창업했고 자녀 Rafael·María del Pino 등이 주요 지분을 보유했다.',
    wealthEvidence:'Forbes 2026은 Rafael과 María del Pino를 모두 억만장자로 기록한다.',
    notables:[['Rafael del Pino y Moreno','Ferrovial 창업자'],['Rafael Del Pino','Ferrovial 회장'],['Maria Del Pino','가문 대주주']],
    tags:['Ferrovial','인프라','가족기업'], sourceIds:['forbesRafaelDelPino2026','forbesMariaDelPino2026']
  },
  {
    id:'ES-march', country:'ES', surname:'March', native:'', korean:'마르치', signal:'very-strong', label:'은행가문',
    hook:'Banca March와 투자지주를 세대에 걸쳐 소유한 스페인 대표 금융가문.',
    history:'Juan March가 1926년 Banca March를 세웠고 손자 세대인 Juan·Carlos March Delgado가 가족 소유 은행과 투자회사 지분을 보유한다.',
    wealthEvidence:'Forbes 2026은 Juan·Carlos March Delgado를 모두 억만장자로 기록한다.',
    notables:[['Juan March','Banca March 창업자'],['Juan March Delgado','가문 은행 대주주'],['Carlos March Delgado','가문 투자회사 회장']],
    tags:['Banca March','은행','금융가문'], sourceIds:['forbesJuanMarch2026','forbesCarlosMarch2026']
  },

  // MEXICO
  {
    id:'MX-slim', country:'MX', surname:'Slim', native:'', korean:'슬림', signal:'very-strong', label:'통신·지주 부호가문',
    hook:'Carlos Slim Helú와 가족 때문에 멕시코에서 가장 강한 ‘부호 성씨’ 코드 중 하나.',
    history:'Carlos Slim은 América Móvil·Grupo Carso 등 통신·건설·소비재·부동산 자산을 구축했고 가족이 대규모 지분을 함께 보유한다.',
    wealthEvidence:'Forbes 2026은 Carlos Slim & family를 멕시코 최고 부호이자 세계 최상위권 자산가로 기록한다.',
    notables:[['Carlos Slim Helú','América Móvil·Grupo Carso'],['Carlos Slim Domit','가문 기업 경영인']],
    tags:['América Móvil','Grupo Carso','통신'], sourceIds:['forbesSlim2026']
  },
  {
    id:'MX-larrea', country:'MX', surname:'Larrea', native:'', korean:'라레아', signal:'very-strong', label:'광산·철도 부호가문',
    hook:'Grupo México의 대주주 가문으로 광산·철도 자산과 직접 연결되는 성씨.',
    history:'Germán Larrea가 Grupo México를 이끌며 구리광산·인프라·철도 사업을 확장했다.',
    wealthEvidence:'Forbes 2026은 Germán Larrea & family를 세계 최상위 부호권으로 기록한다.',
    notables:[['Germán Larrea Mota Velasco','Grupo México 회장']],
    tags:['광산','구리','철도','Grupo México'], sourceIds:['forbesLarrea2026']
  },
  {
    id:'MX-bailleres', country:'MX', surname:'Baillères', native:'', korean:'바예레스', signal:'strong', label:'광산·보험 산업가문',
    hook:'Grupo Bal과 Peñoles를 통해 광산·보험·리테일 자산을 이어온 멕시코 산업가문.',
    history:'Baillères 가문은 Grupo Bal을 중심으로 산업·금융 자산을 이어가며 후손이 경영을 승계했다.',
    wealthEvidence:'Forbes 2026 부호 프로필에서 Alejandro Baillères Gual & family가 대규모 자산가문으로 기록된다.',
    notables:[['Alberto Baillères','Grupo Bal 전 회장'],['Alejandro Baillères Gual','Grupo Bal 가문 승계']],
    tags:['Grupo Bal','Peñoles','광산','보험'], sourceIds:['forbesBailleres2026']
  }
];

export const wealthSignalLabels = {
  'very-strong':'성씨 자체의 부호가문 신호 매우 강함',
  'strong':'부호가문 신호 강함',
  'strong-context':'기업/가문 맥락에서 매우 강함',
  'medium':'유명 부호 사례 중심',
  'medium-context':'기업 맥락 필요',
  'medium-family':'가족기업 맥락 필요',
  'low-surname':'성씨 단독 신호 약함',
  'historical-strong':'역사적 부·권력 신호 강함',
  'historical-very-strong':'역사적 부호가문 상징 매우 강함'
};
