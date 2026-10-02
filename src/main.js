import { countries, countrySummaries, surnameCases } from './data/cases.js';
import { sources } from './data/sources.js';
import { surnameProfiles, japanRankComparison } from './data/profiles.js';
import { koreaSurnameRanking, koreaBonGwanRanking, koreaClanArchive } from './data/korea.js';

const app = document.querySelector('#app');
const STORAGE = { theme: 'ssa-theme', favorites: 'ssa-favorites' };
const urlParams = new URLSearchParams(location.search);

const state = {
  query: urlParams.get('q') || '',
  country: urlParams.get('country') || 'all',
  detailCountry: urlParams.get('tab') || 'JP',
  evidence: urlParams.get('evidence') || 'all',
  sort: urlParams.get('sort') || 'research',
  onlyFavorites: false,
  favorites: new Set(JSON.parse(localStorage.getItem(STORAGE.favorites) || '[]')),
};

const evidenceLabels = {
  all: '모든 근거 유형',
  'current-data': '현재 성씨 데이터',
  'group-study': '성씨 집단 연구',
  'sensitive-group-study': '민감 집단 연구',
  'historical-sample': '역사적 표본',
  'comparison-group': '비교 기준군',
  'historical-context': '역사 맥락',
  'lineage-study': '본관·계보 연구',
  'long-run-study': '장기 경제 연구'
};

const sortLabels = {
  research: '연구 자료 순서',
  name: '성씨 가나다/ABC',
  rank: '빈도 순위 우선'
};

const profileKey = (country, surname) => `${country}:${surname}`;
const profileMap = new Map(surnameProfiles.map(p => [profileKey(p.country, p.surname), p]));
const countryMap = new Map(countrySummaries.map(c => [c.country, c]));
const countryOptions = countries.filter(c => c.id !== 'all');

function esc(value = '') {
  return String(value).replace(/[&<>'"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[ch]));
}

function formatPopulation(n) {
  return `${new Intl.NumberFormat('ko-KR').format(n)}명`;
}

function sourceLink(id) {
  const s = sources[id];
  if (!s) return '';
  return `<a class="source-chip" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" title="${esc(s.note)}">${esc(s.org)} · ${esc(s.year)}</a>`;
}

function getProfile(item) {
  return profileMap.get(profileKey(item.country, item.surname));
}

function rankBadge(profile) {
  if (!profile) return '<span class="rank-badge muted">순위 자료 없음</span>';
  if (profile.frequency.rank) return `<span class="rank-badge">#${profile.frequency.rank.toLocaleString('ko-KR')} <small>빈도</small></span>`;
  return '<span class="rank-badge muted">공식 순위 미확인</span>';
}

function syncUrl() {
  const params = new URLSearchParams();
  if (state.query) params.set('q', state.query);
  if (state.country !== 'all') params.set('country', state.country);
  if (state.detailCountry !== 'JP') params.set('tab', state.detailCountry);
  if (state.evidence !== 'all') params.set('evidence', state.evidence);
  if (state.sort !== 'research') params.set('sort', state.sort);
  const next = params.toString() ? `${location.pathname}?${params}` : location.pathname;
  history.replaceState({}, '', next);
}

function saveFavorites() {
  localStorage.setItem(STORAGE.favorites, JSON.stringify([...state.favorites]));
}

function getFilteredCases() {
  const q = state.query.trim().toLowerCase();
  const filtered = surnameCases.filter(item => {
    const profile = getProfile(item);
    const countryOk = state.country === 'all' || item.country === state.country;
    const evidenceOk = state.evidence === 'all' || item.evidence === state.evidence;
    const favoriteOk = !state.onlyFavorites || state.favorites.has(item.id);
    const profileText = profile ? [profile.why, profile.record, profile.history, profile.notable?.name, profile.notable?.role].join(' ') : '';
    const haystack = [item.surname, item.native, item.korean, item.group, item.finding, ...(item.tags || []), profileText].join(' ').toLowerCase();
    return countryOk && evidenceOk && favoriteOk && (!q || haystack.includes(q));
  });

  if (state.sort === 'name') return [...filtered].sort((a, b) => a.surname.localeCompare(b.surname, 'en'));
  if (state.sort === 'rank') {
    return [...filtered].sort((a, b) => {
      const ar = getProfile(a)?.frequency?.rank ?? Number.MAX_SAFE_INTEGER;
      const br = getProfile(b)?.frequency?.rank ?? Number.MAX_SAFE_INTEGER;
      return ar - br || a.surname.localeCompare(b.surname, 'en');
    });
  }
  return filtered;
}

function countryCaseCount(country) {
  return surnameCases.filter(item => item.country === country).length;
}

function countryArchiveCount(country) {
  if (country === 'KR') return koreaClanArchive.length;
  return surnameProfiles.filter(item => item.country === country).length;
}

function countrySamples(country) {
  if (country === 'KR') return koreaClanArchive.slice(0, 3).map(x => x.bonGwan);
  return surnameCases.filter(item => item.country === country).slice(0, 3).map(item => item.korean || item.surname);
}

function renderCountryExplorerCard(summary) {
  const samples = countrySamples(summary.country);
  return `
    <button class="country-explorer-card" data-open-country="${esc(summary.country)}" aria-label="${esc(summary.name)} 아카이브 열기">
      <div class="country-card-top">
        <span class="country-code">${esc(summary.country)}</span>
        <span class="evidence-dot ${summary.evidence}">${summary.evidence === 'high' ? '연구 근거 강함' : '연구 근거 보통'}</span>
      </div>
      <h3>${esc(summary.name)}</h3>
      <p class="signal">${esc(summary.signal)}</p>
      <div class="country-counts">
        <span><b>${countryCaseCount(summary.country)}</b>개 연구 항목</span>
        <span><b>${countryArchiveCount(summary.country)}</b>개 상세 기록</span>
      </div>
      <div class="sample-line"><span>기록 예시</span><b>${samples.map(esc).join(' · ') || '집단 연구'}</b></div>
      <span class="card-cta">${esc(summary.name)} 레이어 열기 →</span>
    </button>`;
}

function renderCountryTabs() {
  return countryOptions.map(c => {
    const selected = state.detailCountry === c.id;
    return `<button class="country-tab ${selected ? 'active' : ''}" role="tab" aria-selected="${selected}" aria-controls="country-panel" tabindex="${selected ? '0' : '-1'}" data-country-tab="${esc(c.id)}"><span>${esc(c.label)}</span><small>${countryArchiveCount(c.id) || countryCaseCount(c.id)}</small></button>`;
  }).join('');
}

function renderRankRows(rows, type) {
  return `<div class="responsive-rank-list ${type}">${rows.map(row => `
    <div class="responsive-rank-row">
      <strong class="responsive-rank-no">#${row.rank}</strong>
      <div class="responsive-rank-name"><b>${esc(row.name)}</b><span>${esc(row.hanja)}</span></div>
      <div class="responsive-rank-pop">${formatPopulation(row.population)}</div>
    </div>`).join('')}</div>`;
}

function renderKoreaArchiveCard(clan) {
  return `<article class="archive-card">
    <div class="archive-card-top"><span class="archive-era">${esc(clan.era)}</span><span class="archive-rank">본관 #${clan.rank}</span></div>
    <h4>${esc(clan.bonGwan)} <span>${esc(clan.hanja)}</span></h4>
    <p class="archive-hook">${esc(clan.hook)}</p>
    <div class="archive-stat"><span>2015 인구</span><b>${formatPopulation(clan.population)}</b></div>
    <div class="archive-section"><span>역사 기록</span><p>${esc(clan.history)}</p></div>
    <div class="archive-notable"><span>대표 역사 인물</span><b>${esc(clan.notable.name)}</b><small>${esc(clan.notable.role)}</small></div>
    <div class="archive-wealth"><span>부·지위와의 관계</span><p>${esc(clan.wealth)}</p></div>
    <div class="source-chips">${clan.sourceIds.map(sourceLink).join('')}</div>
    <button class="more-btn" data-clan-detail="${esc(clan.id)}">기록 자세히 보기</button>
  </article>`;
}

function renderKoreaLayer() {
  return `
    <div class="country-layer-intro korea-layer-intro">
      <div>
        <span class="eyebrow">KOREA · SURNAME + BON-GWAN</span>
        <h2>한국은 ‘성씨’보다 <span>본관까지 봐야</span> 이야기가 보입니다.</h2>
        <p>2015 인구주택총조사 기준 한국에는 5,582개의 성씨와 36,744개의 성씨·본관 조합이 집계됐습니다. ‘김씨가 부자인가?’보다 김해 김씨, 경주 김씨, 광산 김씨, 안동 김씨가 <b>각기 어떤 역사 기록을 남겼는가</b>를 보는 편이 훨씬 정확하고 흥미롭습니다.</p>
      </div>
      <div class="country-layer-metrics">
        <div><b>5,582</b><span>성씨</span></div><div><b>36,744</b><span>성씨·본관 조합</span></div><div><b>${koreaClanArchive.length}</b><span>상세 역사 아카이브</span></div>
      </div>
    </div>

    <nav class="layer-jumpnav" aria-label="한국 자료 바로가기">
      <a href="#kr-surname-rank">성씨 TOP 20</a><a href="#kr-bongwan-rank">본관 TOP 20</a><a href="#kr-history">역사 아카이브</a><a href="#kr-mobility">부·지위 연구</a>
    </nav>

    <section class="layer-section" id="kr-surname-rank">
      <div class="subsection-head"><div><span class="eyebrow">2015 CENSUS</span><h3>한국 성씨 인구 TOP 20</h3></div><span class="count-pill">통계청 공식 집계</span></div>
      <p class="section-intro">김·이·박 같은 성씨 순위는 인구 규모를 보여줄 뿐, 가문이나 경제적 지위를 구분하지 못합니다. 그래서 바로 아래 본관 순위와 함께 보는 구조로 만들었습니다.</p>
      ${renderRankRows(koreaSurnameRanking, 'surname-rank')}
      <div class="source-chips">${sourceLink('koreaCensus2015')}</div>
    </section>

    <section class="layer-section" id="kr-bongwan-rank">
      <div class="subsection-head"><div><span class="eyebrow">BON-GWAN RANK</span><h3>한국 본관 인구 TOP 20</h3></div><span class="count-pill">본관별 기록의 출발점</span></div>
      <p class="section-intro">김해 김씨·밀양 박씨·전주 이씨처럼 본관까지 구분하면 같은 성씨 안에서도 서로 다른 시조 전승·정치사·학맥·족보 기록이 나타납니다.</p>
      ${renderRankRows(koreaBonGwanRanking, 'bongwan-rank')}
    </section>

    <section class="layer-section" id="kr-history">
      <div class="subsection-head"><div><span class="eyebrow">HISTORY ARCHIVE</span><h3>본관별 역사·인물 기록</h3></div><span class="count-pill">${koreaClanArchive.length}개 상세 아카이브</span></div>
      <p class="section-intro">‘부자 성씨’라는 질문으로 들어와도 실제로 오래 볼 만한 것은 이 부분입니다. 건국 설화, 왕실 계보, 개국공신, 문신, 장군, 성리학, 세도정치, 족보 편찬사를 본관별로 묶었습니다.</p>
      <div class="archive-grid">${koreaClanArchive.map(renderKoreaArchiveCard).join('')}</div>
    </section>

    <section class="layer-section research-panel" id="kr-mobility">
      <div><span class="eyebrow">WEALTH / STATUS RESEARCH</span><h3>그렇다면 ‘부’와는 정말 관련이 있나?</h3></div>
      <div class="research-panel-body">
        <p>한국의 관련 연구는 김·이·박 같은 성씨 자체보다 <b>본관 계보의 역사적 위신과 현대 교육 성취의 상관</b>을 분석합니다. 즉 “어느 성씨가 부자인가”보다 과거의 사회적 지위가 본관 단위로 얼마나 오래 흔적을 남기는가에 가까운 질문입니다.</p>
        <p>이 자료는 현대 개인의 재산을 맞히는 도구가 아닙니다. 역사 기록과 사회이동 연구를 같은 카드에 넣되, 서로 다른 종류의 근거임을 분리해서 표시합니다.</p>
        <div class="source-chips">${sourceLink('koreaLineage')}</div>
      </div>
    </section>`;
}

function renderJapanRanking() {
  return `
    <section class="layer-section">
      <div class="subsection-head"><div><span class="eyebrow">JAPAN FREQUENCY RANK</span><h3>일본 성씨 빈도 비교</h3></div><span class="count-pill">빈도순위 ≠ 부의 순위</span></div>
      <p class="section-intro">일본은 동일 성씨 데이터베이스에서 전국 빈도순위를 확인할 수 있어 흔한 성씨와 희귀 성씨를 같은 기준으로 비교합니다.</p>
      <div class="rank-table-wrap"><table class="rank-table"><thead><tr><th>전국 순위</th><th>성씨</th><th>한글</th><th>추정 인구</th><th>기록 포인트</th><th>출처</th></tr></thead><tbody>${japanRankComparison.map(r => `<tr><td><b>#${r.rank.toLocaleString('ko-KR')}</b></td><td><strong>${esc(r.surname)}</strong> <span>${esc(r.native)}</span></td><td>${esc(r.korean)}</td><td>${esc(r.population)}</td><td>${esc(r.note)}</td><td>${sourceLink(r.sourceId)}</td></tr>`).join('')}</tbody></table></div>
    </section>`;
}

function renderGenericProfile(profile) {
  return `<article class="archive-card generic-archive-card">
    <div class="archive-card-top"><span class="archive-era">${esc(profile.country)}</span>${profile.frequency.rank ? `<span class="archive-rank">빈도 #${profile.frequency.rank.toLocaleString('ko-KR')}</span>` : '<span class="archive-rank muted">순위 미확인</span>'}</div>
    <h4>${esc(profile.surname)} ${profile.native ? `<span>${esc(profile.native)}</span>` : ''}</h4>
    <p class="archive-hook">${esc(profile.why)}</p>
    <div class="archive-section"><span>기록 포인트</span><p>${esc(profile.record)}</p></div>
    <div class="archive-section"><span>역사·연관 기록</span><p>${esc(profile.history)}</p></div>
    ${profile.notable ? `<div class="archive-notable"><span>관련 인물</span><b>${esc(profile.notable.name)}</b><small>${esc(profile.notable.role)}</small></div>` : ''}
    <div class="source-chips">${profile.sourceIds.map(sourceLink).join('')}</div>
  </article>`;
}

function renderGenericCountryLayer(summary) {
  const profiles = surnameProfiles.filter(p => p.country === summary.country);
  const cases = surnameCases.filter(item => item.country === summary.country);
  const archive = profiles.length ? `<section class="layer-section"><div class="subsection-head"><div><span class="eyebrow">HISTORY & PEOPLE</span><h3>성씨별 기록과 관련 인물</h3></div><span class="count-pill">${profiles.length}개 상세 기록</span></div><div class="archive-grid">${profiles.map(renderGenericProfile).join('')}</div></section>` : '';
  return `
    <div class="country-layer-intro">
      <div><span class="eyebrow">${esc(summary.country)} · COUNTRY ARCHIVE</span><h2>${esc(summary.name)} 성씨를 <span>역사와 기록으로</span> 봅니다.</h2><p>${esc(summary.summary)}</p></div>
      <div class="country-layer-metrics"><div><b>${cases.length}</b><span>연구 항목</span></div><div><b>${profiles.length}</b><span>상세 성씨 기록</span></div><div><b>${summary.evidence === 'high' ? '강함' : '보통'}</b><span>연구 근거</span></div></div>
    </div>
    <div class="country-caveat-banner"><b>해석 주의</b><span>${esc(summary.caveat)}</span></div>
    ${summary.country === 'JP' ? renderJapanRanking() : ''}
    ${archive}
    <section class="layer-section">
      <div class="subsection-head"><div><span class="eyebrow">RESEARCH RECORDS</span><h3>${esc(summary.name)} 연구·역사 표본</h3></div><span class="count-pill">${cases.length}개</span></div>
      <div class="country-list">${cases.map(renderCountryListItem).join('')}</div>
    </section>`;
}

function renderCountryListItem(item) {
  const profile = getProfile(item);
  const notable = profile?.notable;
  return `<article class="country-list-item"><div class="country-list-rank">${rankBadge(profile)}</div><div class="country-list-main"><div class="country-list-title"><h3>${esc(item.surname)} ${item.native ? `<span>${esc(item.native)}</span>` : ''}</h3><span class="korean-name">${esc(item.korean)}</span></div><span class="case-group">${esc(item.group)}</span><p>${esc(item.finding)}</p><div class="country-list-meta"><span><b>측정</b>${esc(item.metric)}</span><span><b>기간</b>${esc(item.period)}</span>${profile ? `<span><b>인구/빈도</b>${esc(profile.frequency.population)}</span>` : ''}</div>${notable ? `<div class="country-list-notable"><span>같은 성씨의 대표 인물</span><b>${esc(notable.name)}</b><small>${esc(notable.role)}</small></div>` : ''}</div><div class="country-list-actions"><div class="source-chips">${item.sourceIds.slice(0,2).map(sourceLink).join('')}</div><button class="more-btn" data-detail="${esc(item.id)}">자세히 보기</button></div></article>`;
}

function renderCountryLayer() {
  const summary = countryMap.get(state.detailCountry) || countrySummaries[0];
  return `<section class="section-shell country-layer" id="country-layer" role="tabpanel" aria-live="polite" aria-label="${esc(summary.name)} 성씨 아카이브"><div class="country-layer-swap">${summary.country === 'KR' ? renderKoreaLayer() : renderGenericCountryLayer(summary)}</div></section>`;
}

function renderCaseCard(item) {
  const fav = state.favorites.has(item.id);
  const profile = getProfile(item);
  return `<article class="case-card" data-id="${esc(item.id)}"><div class="case-top"><span class="country-code">${item.country}</span><div class="case-top-right">${rankBadge(profile)}<button class="star-btn ${fav?'active':''}" data-fav="${esc(item.id)}" aria-label="즐겨찾기 ${fav?'해제':'추가'}">${fav?'★':'☆'}</button></div></div><h3>${esc(item.surname)} ${item.native ? `<span>${esc(item.native)}</span>`:''}</h3><div class="korean-name">${esc(item.korean)}</div>${profile ? `<div class="frequency-line"><b>${esc(profile.frequency.label)}</b><span>${esc(profile.frequency.population)}</span></div>` : ''}<div class="case-group">${esc(item.group)}</div><p>${esc(item.finding)}</p>${profile ? `<div class="mini-notable"><span>대표 인물</span><b>${esc(profile.notable.name)}</b><small>${esc(profile.notable.role)}</small></div>` : ''}<dl><div><dt>측정</dt><dd>${esc(item.metric)}</dd></div><div><dt>기간</dt><dd>${esc(item.period)}</dd></div></dl><div class="case-caution">${esc(item.caution)}</div><div class="source-chips">${item.sourceIds.map(sourceLink).join('')}</div><button class="more-btn" data-detail="${esc(item.id)}">상세 보기</button></article>`;
}

function render() {
  const filtered = getFilteredCases();
  const selectedName = countryMap.get(state.detailCountry)?.name || '일본';
  app.innerHTML = `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <header class="topbar">
      <a class="brand" href="./" aria-label="성씨 시그널 아틀라스 홈"><span class="brand-mark" aria-hidden="true">S</span><span><strong>성씨 시그널 아틀라스</strong><small>Surname Signal Atlas</small></span></a>
      <nav class="main-nav" aria-label="주요 메뉴"><a href="#country-explorer">국가 탐색</a><a href="#country-layer">성씨 아카이브</a><a href="#explorer">전체 검색</a><a href="#sources">출처</a></nav>
      <nav class="top-actions" aria-label="보조 메뉴"><button class="ghost-btn" id="methodBtn">읽는 법</button><button class="icon-btn" id="themeBtn" aria-label="테마 변경" title="테마 변경">◐</button></nav>
    </header>

    <nav class="country-tabbar" aria-label="국가별 성씨 아카이브" role="tablist"><div class="country-tabbar-inner">${renderCountryTabs()}</div></nav>

    <main id="main">
      <section class="hero hero-archive section-shell">
        <div class="hero-copy"><div class="eyebrow">WEALTH HOOK · HISTORY ARCHIVE</div><h1>“부자 성씨?”<br><span>들어오면 역사가 보입니다.</span></h1><p class="hero-lede">희귀 성씨와 부유 가문 이야기는 흥미로운 입구입니다. 하지만 이 서비스의 본문은 더 넓습니다. <strong>성씨의 기원, 본관·클랜, 역사 기록, 유명 인물, 인구 순위, 사회이동 연구</strong>를 나라별로 모아 보는 아카이브입니다.</p><div class="hero-points"><span>✓ 부는 훅, 역사가 본문</span><span>✓ 국가별 레이어 전환</span><span>✓ 공식 통계·학술 출처</span></div></div>
        <div class="hero-panel archive-hero-panel"><div class="panel-kicker">현재 선택</div><strong class="hero-selected-country">${esc(selectedName)}</strong><p>상단 국가 탭을 누르면 페이지 이동 없이 이 아래의 국가 전용 자료 레이어가 통째로 교체됩니다.</p><div class="metric-row"><span>국가/지역</span><strong>${countrySummaries.length}</strong></div><div class="metric-row"><span>전체 연구 항목</span><strong>${surnameCases.length}</strong></div><div class="metric-row"><span>한국 본관 아카이브</span><strong>${koreaClanArchive.length}</strong></div></div>
      </section>

      <section class="section-shell country-explorer-section" id="country-explorer"><div class="section-head explorer-heading"><div><span class="eyebrow">COUNTRY EXPLORER</span><h2>나라를 먼저 고르세요</h2><p>카드를 누르면 상단 탭과 같은 방식으로 아래 국가 레이어가 교체됩니다. 모바일에서도 카드 → 탭 → 국가 전용 자료 흐름을 유지합니다.</p></div><span class="count-pill">${countrySummaries.length}개 국가/지역</span></div><div class="country-explorer-grid">${countrySummaries.map(renderCountryExplorerCard).join('')}</div></section>

      ${renderCountryLayer()}

      <section class="section-shell rei-section" id="rei-check"><div class="section-head"><div><span class="eyebrow">ORIGINAL HOOK · REI / NAOI</span><h2>레이의 ‘나오이’는 입구가 되는 이야기</h2></div><span class="status-badge caution">부의 판정은 아님</span></div><div class="fact-grid"><article class="fact-card"><span class="fact-num">01</span><h3>나오이는 희귀한 편</h3><p>直井는 전국 약 1,277위·약 13,200명으로 추정됩니다. 이것은 희소성 자료입니다.</p>${sourceLink('myojiNaoi')}</article><article class="fact-card"><span class="fact-num">02</span><h3>지역 경제는 별도 자료</h3><p>아이치현의 경제력과 개인의 집안 자산은 같은 지표가 아닙니다.</p>${sourceLink('aichi2023')}</article><article class="fact-card"><span class="fact-num">03</span><h3>재미는 역사로 확장</h3><p>희귀 성씨를 계기로 사무라이·공가·메이지 성씨 제도까지 따라가면 훨씬 오래 볼 수 있는 콘텐츠가 됩니다.</p>${sourceLink('japanLaw')}</article></div></section>

      <section class="section-shell explorer" id="explorer"><div class="section-head"><div><span class="eyebrow">GLOBAL SEARCH</span><h2>전체 국가 통합 검색</h2><p>성씨, 역사 표본, 사회이동 연구를 나라 구분 없이 다시 찾습니다.</p></div><div class="toolbar-mini"><button class="text-btn" id="shareBtn">검색 URL 복사</button><button class="text-btn" id="csvBtn">CSV 내보내기</button></div></div><div class="filters" role="search"><label class="search-box"><span>검색</span><input id="searchInput" value="${esc(state.query)}" placeholder="예: 나오이, Banerjee, Neville" autocomplete="off"></label><label><span>국가</span><select id="countryFilter">${countries.map(c => `<option value="${c.id}" ${state.country===c.id?'selected':''}>${c.label}</option>`).join('')}</select></label><label><span>근거 유형</span><select id="evidenceFilter">${Object.entries(evidenceLabels).map(([k,v]) => `<option value="${k}" ${state.evidence===k?'selected':''}>${v}</option>`).join('')}</select></label><label><span>정렬</span><select id="sortFilter">${Object.entries(sortLabels).map(([k,v]) => `<option value="${k}" ${state.sort===k?'selected':''}>${v}</option>`).join('')}</select></label><button class="favorite-filter ${state.onlyFavorites?'active':''}" id="favoriteFilter">★ 즐겨찾기만</button></div><div class="result-meta"><strong>${filtered.length}개 결과</strong><span>빈도순위·역사 기록·사회경제 연구는 서로 다른 자료입니다.</span></div><div class="case-grid" id="caseGrid">${filtered.length ? filtered.map(renderCaseCard).join('') : `<div class="empty-state"><strong>검색 결과가 없습니다.</strong><span>국가·근거 필터를 초기화하거나 다른 표기를 검색해보세요.</span><button class="secondary-btn" id="resetBtn">필터 초기화</button></div>`}</div></section>

      <section class="section-shell methodology-strip"><div><span class="eyebrow">HOW TO READ</span><h2>‘부자 성씨’는 제목이 될 수 있지만 결론은 아닙니다.</h2></div><div class="do-not-grid"><div><b>입구 · 부와 지위</b><span>장기 사회이동 연구가 있는 경우 근거와 한계를 함께 표시합니다.</span></div><div><b>본문 · 역사 기록</b><span>시조 전승·왕실·공신·족보·학맥·정치사를 함께 제공합니다.</span></div><div><b>인물 · 연결고리</b><span>같은 성씨의 대표 인물은 기록 이해를 돕는 사례이며 자동 혈연 판정이 아닙니다.</span></div><div><b>통계 · 순위</b><span>인구·빈도 순위만 표시하며 부유함 순위로 바꾸지 않습니다.</span></div></div></section>

      <section class="section-shell sources-section" id="sources"><div class="section-head"><div><span class="eyebrow">SOURCES</span><h2>주요 근거 자료</h2></div><span class="count-pill">${Object.keys(sources).length}개 출처</span></div><div class="source-list">${Object.values(sources).map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" class="source-row"><span class="source-type">${esc(s.type)}</span><span><b>${esc(s.title)}</b><small>${esc(s.org)} · ${esc(s.year)}</small></span><span class="arrow">↗</span></a>`).join('')}</div></section>
    </main>

    <footer class="footer"><div><strong>성씨 시그널 아틀라스</strong><span>부에 대한 호기심을 역사·계보·사회이동 기록으로 확장합니다.</span></div><div class="footer-links"><a href="#sources">출처</a><button id="footerMethod">읽는 법</button></div></footer>

    <dialog id="detailDialog" class="dialog"><button class="dialog-close" aria-label="닫기">×</button><div id="dialogBody"></div></dialog>
    <dialog id="methodDialog" class="dialog method-dialog"><button class="dialog-close" aria-label="닫기">×</button><div class="dialog-content"><span class="eyebrow">METHODOLOGY</span><h2>부·순위·역사를 같은 것으로 보지 않습니다</h2><p>이 서비스는 흥미로운 ‘부자 성씨’ 질문을 입구로 삼되, 실제 본문에서는 <b>성씨 빈도, 본관·클랜, 시조와 족보, 역사 인물, 사회이동 연구</b>를 분리해 제공합니다.</p><ul><li><b>순위:</b> 인구·빈도 순위만 표시합니다.</li><li><b>역사:</b> 시조 전승과 실제 문헌 기록을 구분해 설명합니다.</li><li><b>부·지위:</b> 학술 연구가 있는 경우 집단·기간·측정값을 명시합니다.</li><li><b>인물:</b> 같은 성씨의 대표 사례이며 자동 혈연 판정이 아닙니다.</li><li><b>민감성:</b> 인도처럼 카스트·종교와 얽힌 정보는 개인 추정에 사용하지 않습니다.</li></ul><p class="method-note"><strong>핵심: 호기심은 넓게, 결론은 근거만큼만.</strong></p></div></dialog>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  `;
  bindEvents();
}

function switchCountry(country, scrollToLayer = true) {
  state.detailCountry = country;
  syncUrl();
  render();
  if (scrollToLayer) requestAnimationFrame(() => document.querySelector('#country-layer')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
}

function bindEvents() {
  document.querySelectorAll('[data-country-tab]').forEach(btn => btn.addEventListener('click', () => switchCountry(btn.dataset.countryTab, true)));
  document.querySelectorAll('[data-open-country]').forEach(btn => btn.addEventListener('click', () => switchCountry(btn.dataset.openCountry, true)));
  document.querySelectorAll('[data-clan-detail]').forEach(btn => btn.addEventListener('click', () => showClanDetail(btn.dataset.clanDetail)));

  const search = document.querySelector('#searchInput');
  search?.addEventListener('input', e => {
    state.query = e.target.value; syncUrl(); render();
    requestAnimationFrame(() => { const el = document.querySelector('#searchInput'); if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); } });
  });
  document.querySelector('#countryFilter')?.addEventListener('change', e => { state.country = e.target.value; syncUrl(); render(); requestAnimationFrame(() => document.querySelector('#explorer')?.scrollIntoView({ block: 'start' })); });
  document.querySelector('#evidenceFilter')?.addEventListener('change', e => { state.evidence = e.target.value; syncUrl(); render(); requestAnimationFrame(() => document.querySelector('#explorer')?.scrollIntoView({ block: 'start' })); });
  document.querySelector('#sortFilter')?.addEventListener('change', e => { state.sort = e.target.value; syncUrl(); render(); requestAnimationFrame(() => document.querySelector('#explorer')?.scrollIntoView({ block: 'start' })); });
  document.querySelector('#favoriteFilter')?.addEventListener('click', () => { state.onlyFavorites = !state.onlyFavorites; render(); requestAnimationFrame(() => document.querySelector('#explorer')?.scrollIntoView({ block: 'start' })); });
  document.querySelectorAll('[data-fav]').forEach(btn => btn.addEventListener('click', () => { const id = btn.dataset.fav; state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id); saveFavorites(); render(); }));
  document.querySelectorAll('[data-detail]').forEach(btn => btn.addEventListener('click', () => showDetail(btn.dataset.detail)));
  document.querySelector('#shareBtn')?.addEventListener('click', shareState);
  document.querySelector('#csvBtn')?.addEventListener('click', exportCsv);
  document.querySelector('#resetBtn')?.addEventListener('click', () => { state.query=''; state.country='all'; state.evidence='all'; state.sort='research'; state.onlyFavorites=false; syncUrl(); render(); });
  ['#methodBtn','#footerMethod'].forEach(sel => document.querySelector(sel)?.addEventListener('click', () => document.querySelector('#methodDialog').showModal()));
  document.querySelectorAll('.dialog-close').forEach(btn => btn.addEventListener('click', () => btn.closest('dialog').close()));
  document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));
  document.querySelector('#themeBtn')?.addEventListener('click', toggleTheme);
}

function showClanDetail(id) {
  const clan = koreaClanArchive.find(x => x.id === id);
  if (!clan) return;
  document.querySelector('#dialogBody').innerHTML = `<div class="dialog-content"><span class="eyebrow">KOREA · BON-GWAN ARCHIVE</span><div class="dialog-title-row"><h2>${esc(clan.bonGwan)} <small>${esc(clan.hanja)}</small></h2><span class="rank-badge">#${clan.rank} <small>본관 인구</small></span></div><p class="dialog-lead">${esc(clan.hook)}</p><div class="detail-table"><div><span>2015 인구</span><b>${formatPopulation(clan.population)}</b></div><div><span>시대</span><b>${esc(clan.era)}</b></div><div><span>기록 유형</span><b>${esc(clan.category)}</b></div></div><div class="history-box"><span>역사 기록</span><p>${esc(clan.history)}</p></div><div class="history-box"><span>기록 포인트</span><p>${esc(clan.record)}</p></div><div class="notable-detail"><span>대표 역사 인물</span><h3>${esc(clan.notable.name)}</h3><b>${esc(clan.notable.role)}</b></div><div class="dialog-warning"><b>부·지위 해석</b><span>${esc(clan.wealth)}</span></div><h3>연결 출처</h3><div class="source-chips">${clan.sourceIds.map(sourceLink).join('')}</div></div>`;
  document.querySelector('#detailDialog').showModal();
}

function showDetail(id) {
  const item = surnameCases.find(x => x.id === id);
  if (!item) return;
  const profile = getProfile(item);
  document.querySelector('#dialogBody').innerHTML = `<div class="dialog-content"><span class="eyebrow">${item.country} · CASE DETAIL</span><div class="dialog-title-row"><h2>${esc(item.surname)} ${esc(item.native)}</h2>${rankBadge(profile)}</div><p class="dialog-lead">${esc(item.finding)}</p>${profile ? `<div class="detail-table"><div><span>빈도 순위</span><b>${esc(profile.frequency.label)}</b></div><div><span>추정 인구</span><b>${esc(profile.frequency.population)}</b></div><div><span>기록 포인트</span><b>${esc(profile.record)}</b></div></div><div class="history-box"><span>역사·연관 기록</span><p>${esc(profile.history)}</p></div><div class="notable-detail"><span>같은 성씨의 대표 인물</span><h3>${esc(profile.notable.name)}</h3><b>${esc(profile.notable.role)}</b><p>${esc(profile.notable.note)}</p>${sourceLink(profile.notable.sourceId)}</div>` : `<div class="detail-table"><div><span>분류</span><b>${esc(item.group)}</b></div><div><span>측정값</span><b>${esc(item.metric)}</b></div><div><span>연구 기간</span><b>${esc(item.period)}</b></div></div>`}<div class="dialog-warning"><b>해석 주의</b><span>${esc(item.caution)}</span></div><h3>연결 출처</h3><div class="source-chips">${[...new Set([...(item.sourceIds || []), ...(profile?.sourceIds || [])])].map(sourceLink).join('')}</div></div>`;
  document.querySelector('#detailDialog').showModal();
}

async function shareState() {
  try { await navigator.clipboard.writeText(location.href); showToast('현재 상태 URL을 복사했습니다.'); }
  catch { showToast('주소창 URL을 복사해 공유해주세요.'); }
}

function exportCsv() {
  const rows = [['country','surname','native','korean','frequency_rank','population','notable_person','group','finding','metric','period','sources']];
  getFilteredCases().forEach(i => {
    const p = getProfile(i);
    const ids = [...new Set([...(i.sourceIds || []), ...(p?.sourceIds || [])])];
    rows.push([i.country,i.surname,i.native,i.korean,p?.frequency?.rank || '',p?.frequency?.population || '',p?.notable?.name || '',i.group,i.finding,i.metric,i.period,ids.map(id=>sources[id]?.url || '').filter(Boolean).join(' | ')]);
  });
  const csv = rows.map(r => r.map(v => `"${String(v).replaceAll('"','""')}"`).join(',')).join('\n');
  const blob = new Blob(['\ufeff'+csv], { type:'text/csv;charset=utf-8' });
  const a = Object.assign(document.createElement('a'), { href:URL.createObjectURL(blob), download:'surname-signal-atlas.csv' });
  a.click(); URL.revokeObjectURL(a.href); showToast('현재 결과를 CSV로 저장했습니다.');
}

function showToast(msg) {
  const t = document.querySelector('#toast');
  if (!t) return;
  t.textContent = msg; t.classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => t.classList.remove('show'), 2200);
}

function applyTheme() {
  document.documentElement.dataset.theme = localStorage.getItem(STORAGE.theme) || 'system';
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme || 'system';
  const next = current === 'system' ? 'dark' : current === 'dark' ? 'light' : 'system';
  localStorage.setItem(STORAGE.theme, next); document.documentElement.dataset.theme = next; showToast(`테마: ${next}`);
}

applyTheme();
render();
