import { countries, countrySummaries, surnameCases } from './data/cases.js';
import { sources } from './data/sources.js';
import { surnameProfiles, japanRankComparison } from './data/profiles.js';

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

function countryProfileCount(country) {
  return surnameProfiles.filter(item => item.country === country).length;
}

function countrySamples(country) {
  return surnameCases.filter(item => item.country === country).slice(0, 3).map(item => item.korean || item.surname);
}

function renderCountryExplorerCard(summary) {
  const samples = countrySamples(summary.country);
  return `
    <button class="country-explorer-card" data-open-country="${esc(summary.country)}" aria-label="${esc(summary.name)} 상세 목록 보기">
      <div class="country-card-top">
        <span class="country-code">${esc(summary.country)}</span>
        <span class="evidence-dot ${summary.evidence}">${summary.evidence === 'high' ? '근거 강함' : '근거 보통'}</span>
      </div>
      <h3>${esc(summary.name)}</h3>
      <p class="signal">${esc(summary.signal)}</p>
      <div class="country-counts">
        <span><b>${countryCaseCount(summary.country)}</b>개 조사 항목</span>
        <span><b>${countryProfileCount(summary.country)}</b>개 상세 기록</span>
      </div>
      <div class="sample-line"><span>예시</span><b>${samples.map(esc).join(' · ') || '집단 연구'}</b></div>
      <span class="card-cta">나라별 상세 보기 →</span>
    </button>`;
}

function renderCountryTabs() {
  return countryOptions.map(c => `
    <button class="country-tab ${state.detailCountry === c.id ? 'active' : ''}" data-country-tab="${esc(c.id)}" aria-pressed="${state.detailCountry === c.id}">
      <span>${esc(c.label)}</span><small>${countryCaseCount(c.id)}</small>
    </button>`).join('');
}

function renderCountryListItem(item) {
  const profile = getProfile(item);
  const notable = profile?.notable;
  return `
    <article class="country-list-item">
      <div class="country-list-rank">${rankBadge(profile)}</div>
      <div class="country-list-main">
        <div class="country-list-title">
          <h3>${esc(item.surname)} ${item.native ? `<span>${esc(item.native)}</span>` : ''}</h3>
          <span class="korean-name">${esc(item.korean)}</span>
        </div>
        <span class="case-group">${esc(item.group)}</span>
        <p>${esc(item.finding)}</p>
        <div class="country-list-meta">
          <span><b>측정</b>${esc(item.metric)}</span>
          <span><b>기간</b>${esc(item.period)}</span>
          ${profile ? `<span><b>인구/빈도</b>${esc(profile.frequency.population)}</span>` : ''}
        </div>
        ${notable ? `<div class="country-list-notable"><span>같은 성씨의 대표 인물</span><b>${esc(notable.name)}</b><small>${esc(notable.role)}</small></div>` : ''}
      </div>
      <div class="country-list-actions">
        <div class="source-chips">${item.sourceIds.slice(0, 2).map(sourceLink).join('')}</div>
        <button class="more-btn" data-detail="${esc(item.id)}">자세히 보기</button>
      </div>
    </article>`;
}

function renderJapanRanking() {
  if (state.detailCountry !== 'JP') return '';
  return `
    <div class="country-ranking-block">
      <div class="subsection-head"><div><span class="eyebrow">JAPAN FREQUENCY RANK</span><h3>일본 성씨 빈도 비교</h3></div><span class="count-pill">빈도순위 ≠ 부의 순위</span></div>
      <p class="section-intro">일본은 동일 성씨 데이터베이스에서 전국 빈도순위를 확인할 수 있어, 흔한 성씨와 희귀 성씨를 같은 기준으로 비교합니다.</p>
      <div class="rank-table-wrap">
        <table class="rank-table">
          <thead><tr><th>전국 순위</th><th>성씨</th><th>한글</th><th>추정 인구</th><th>기록 포인트</th><th>출처</th></tr></thead>
          <tbody>${japanRankComparison.map(r => `<tr><td><b>#${r.rank.toLocaleString('ko-KR')}</b></td><td><strong>${esc(r.surname)}</strong> <span>${esc(r.native)}</span></td><td>${esc(r.korean)}</td><td>${esc(r.population)}</td><td>${esc(r.note)}</td><td>${sourceLink(r.sourceId)}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>`;
}

function renderCountryDetail() {
  const summary = countryMap.get(state.detailCountry) || countrySummaries[0];
  const cases = surnameCases.filter(item => item.country === state.detailCountry);
  const profiles = surnameProfiles.filter(item => item.country === state.detailCountry);
  return `
    <section class="section-shell country-detail-section" id="country-detail">
      <div class="country-detail-head">
        <div>
          <span class="eyebrow">COUNTRY DETAIL</span>
          <h2>${esc(summary.name)} 성씨·가문 기록</h2>
          <p>${esc(summary.summary)}</p>
        </div>
        <div class="country-detail-stats">
          <div><b>${cases.length}</b><span>조사 항목</span></div>
          <div><b>${profiles.length}</b><span>상세 프로필</span></div>
          <div><b>${summary.evidence === 'high' ? '강함' : '보통'}</b><span>근거 수준</span></div>
        </div>
      </div>
      <div class="country-caveat-banner"><b>해석 주의</b><span>${esc(summary.caveat)}</span></div>
      ${renderJapanRanking()}
      <div class="subsection-head list-head"><div><span class="eyebrow">SURNAME LIST</span><h3>${esc(summary.name)} 전체 조사 리스트</h3></div><span class="count-pill">${cases.length}개</span></div>
      <div class="country-list">${cases.map(renderCountryListItem).join('')}</div>
    </section>`;
}

function renderCaseCard(item) {
  const fav = state.favorites.has(item.id);
  const profile = getProfile(item);
  return `
    <article class="case-card" data-id="${esc(item.id)}">
      <div class="case-top"><span class="country-code">${item.country}</span><div class="case-top-right">${rankBadge(profile)}<button class="star-btn ${fav?'active':''}" data-fav="${esc(item.id)}" aria-label="즐겨찾기 ${fav?'해제':'추가'}">${fav?'★':'☆'}</button></div></div>
      <h3>${esc(item.surname)} ${item.native ? `<span>${esc(item.native)}</span>`:''}</h3>
      <div class="korean-name">${esc(item.korean)}</div>
      ${profile ? `<div class="frequency-line"><b>${esc(profile.frequency.label)}</b><span>${esc(profile.frequency.population)}</span></div>` : ''}
      <div class="case-group">${esc(item.group)}</div>
      <p>${esc(item.finding)}</p>
      ${profile ? `<div class="mini-notable"><span>대표 인물</span><b>${esc(profile.notable.name)}</b><small>${esc(profile.notable.role)}</small></div>` : ''}
      <dl><div><dt>측정</dt><dd>${esc(item.metric)}</dd></div><div><dt>기간</dt><dd>${esc(item.period)}</dd></div></dl>
      <div class="case-caution">${esc(item.caution)}</div>
      <div class="source-chips">${item.sourceIds.map(sourceLink).join('')}</div>
      <button class="more-btn" data-detail="${esc(item.id)}">상세 보기</button>
    </article>`;
}

function render() {
  const filtered = getFilteredCases();
  app.innerHTML = `
    <header class="topbar">
      <a class="brand" href="./" aria-label="성씨 시그널 아틀라스 홈">
        <span class="brand-mark" aria-hidden="true">S</span>
        <span><strong>성씨 시그널 아틀라스</strong><small>Surname Signal Atlas</small></span>
      </a>
      <nav class="main-nav" aria-label="주요 메뉴">
        <a href="#country-explorer">국가별 탐색</a>
        <a href="#country-detail">나라별 상세</a>
        <a href="#explorer">전체 검색</a>
        <a href="#sources">출처</a>
      </nav>
      <nav class="top-actions" aria-label="보조 메뉴">
        <button class="ghost-btn" id="methodBtn">방법론</button>
        <button class="icon-btn" id="themeBtn" aria-label="테마 변경" title="테마 변경">◐</button>
      </nav>
    </header>

    <nav class="country-tabbar" aria-label="나라별 상세 탭">
      <div class="country-tabbar-inner">${renderCountryTabs()}</div>
    </nav>

    <main id="main">
      <section class="hero hero-compact section-shell">
        <div class="hero-copy">
          <div class="eyebrow">FACT-CHECKED SURNAME RESEARCH</div>
          <h1>성씨와 부,<br><span>어디까지 사실일까?</span></h1>
          <p class="hero-lede">일본 레이의 <strong>나오이(直井)</strong>에서 출발해 인도·영국·스웨덴·중국·한국·이탈리아까지. 성씨의 <strong>빈도순위, 역사 기록, 장기 사회이동 연구, 대표 인물</strong>을 나라별로 구분해 살펴보는 자료 탐색기입니다.</p>
          <div class="hero-points"><span>✓ 실제 출처 연결</span><span>✓ 국가별 기준 분리</span><span>✓ 개인 재산 자동판정 없음</span></div>
        </div>
        <div class="hero-panel" aria-label="서비스 요약">
          <div class="panel-kicker">이 서비스는 이렇게 봅니다</div>
          <div class="metric-row"><span>조사 국가/지역</span><strong>${countrySummaries.length}</strong></div>
          <div class="metric-row"><span>성씨·집단 조사 항목</span><strong>${surnameCases.length}</strong></div>
          <div class="metric-row"><span>상세 성씨 기록</span><strong>${surnameProfiles.length}</strong></div>
          <div class="verdict"><b>읽는 법</b><span>성씨의 희소성·역사적 지위·현대 사회경제 지표를 서로 다른 근거로 나눠 봅니다.</span></div>
        </div>
      </section>

      <section class="section-shell country-explorer-section" id="country-explorer">
        <div class="section-head explorer-heading">
          <div><span class="eyebrow">COUNTRY EXPLORER</span><h2>먼저 나라를 선택하세요</h2><p>나라별로 조사 방식과 의미가 다릅니다. 카드를 누르면 해당 국가의 전체 성씨 리스트와 기록으로 바로 이동합니다.</p></div>
          <span class="count-pill">${countrySummaries.length}개 국가/지역</span>
        </div>
        <div class="country-explorer-grid">${countrySummaries.map(renderCountryExplorerCard).join('')}</div>
      </section>

      ${renderCountryDetail()}

      <section class="section-shell rei-section" id="rei-check">
        <div class="section-head">
          <div><span class="eyebrow">REI / NAOI FACT CHECK</span><h2>레이 사례는 이렇게 읽으면 됩니다</h2></div>
          <span class="status-badge caution">개인 자산 추정 금지</span>
        </div>
        <div class="fact-grid">
          <article class="fact-card"><span class="fact-num">01</span><h3>나오이는 희귀한 편</h3><p>名字由来net은 直井를 전국 약 1,277위, 약 13,200명으로 추정합니다. 이는 <b>희소성</b> 데이터입니다.</p>${sourceLink('myojiNaoi')}</article>
          <article class="fact-card"><span class="fact-num">02</span><h3>아이치 경제력은 별도 지표</h3><p>아이치현의 2023년도 1인당 현민소득은 415만 엔으로 발표됐습니다. 개인 연봉과 동일한 지표는 아닙니다.</p>${sourceLink('aichi2023')}</article>
          <article class="fact-card"><span class="fact-num">03</span><h3>희귀 엘리트 성씨 집단 연구는 존재</h3><p>희귀 사무라이·가조쿠 성씨 표본의 장기 연구가 있지만, 모든 희귀 성씨를 “부유 성씨”라고 부를 수는 없습니다.</p>${sourceLink('japanMobility')}</article>
        </div>
        <div class="callout"><strong>한 줄 결론</strong><span>“나고야·아이치의 경제력과 희귀 성씨의 역사적 이미지 때문에 농담은 성립할 수 있지만, 나오이라는 성씨만으로 개인 집안의 재산을 판단할 객관적 근거는 없다.”</span></div>
      </section>

      <section class="section-shell explorer" id="explorer">
        <div class="section-head"><div><span class="eyebrow">GLOBAL SEARCH</span><h2>전체 국가 통합 검색</h2><p>특정 성씨나 연구 유형을 나라 구분 없이 다시 찾고 싶을 때 사용하세요.</p></div><div class="toolbar-mini"><button class="text-btn" id="shareBtn">검색 상태 공유</button><button class="text-btn" id="csvBtn">CSV 내보내기</button></div></div>
        <div class="filters" role="search">
          <label class="search-box"><span>검색</span><input id="searchInput" value="${esc(state.query)}" placeholder="예: 나오이, Banerjee, Neville" autocomplete="off"></label>
          <label><span>국가</span><select id="countryFilter">${countries.map(c => `<option value="${c.id}" ${state.country===c.id?'selected':''}>${c.label}</option>`).join('')}</select></label>
          <label><span>근거 유형</span><select id="evidenceFilter">${Object.entries(evidenceLabels).map(([k,v]) => `<option value="${k}" ${state.evidence===k?'selected':''}>${v}</option>`).join('')}</select></label>
          <label><span>정렬</span><select id="sortFilter">${Object.entries(sortLabels).map(([k,v]) => `<option value="${k}" ${state.sort===k?'selected':''}>${v}</option>`).join('')}</select></label>
          <button class="favorite-filter ${state.onlyFavorites?'active':''}" id="favoriteFilter">★ 즐겨찾기만</button>
        </div>
        <div class="result-meta"><strong>${filtered.length}개 결과</strong><span>빈도순위와 사회경제적 지위는 서로 다른 데이터입니다.</span></div>
        <div class="case-grid" id="caseGrid">
          ${filtered.length ? filtered.map(item => renderCaseCard(item)).join('') : `<div class="empty-state"><strong>검색 결과가 없습니다.</strong><span>국가·근거 필터를 초기화하거나 다른 표기를 검색해보세요.</span><button class="secondary-btn" id="resetBtn">필터 초기화</button></div>`}
        </div>
      </section>

      <section class="section-shell methodology-strip">
        <div><span class="eyebrow">HOW TO READ</span><h2>이 서비스가 일부러 하지 않는 것</h2></div>
        <div class="do-not-grid">
          <div><b>✕ “부자 순위”</b><span>표시하는 순위는 성씨 빈도순위입니다.</span></div>
          <div><b>✕ 카스트 자동 판정</b><span>인도 성씨로 개인의 카스트·종교를 추론하지 않습니다.</span></div>
          <div><b>✕ 유명인 = 같은 가문</b><span>같은 성씨의 공인 사례일 뿐 혈연을 주장하지 않습니다.</span></div>
          <div><b>✓ 연구 단위 명시</b><span>집단·기간·측정값·한계를 함께 표시합니다.</span></div>
        </div>
      </section>

      <section class="section-shell sources-section" id="sources">
        <div class="section-head"><div><span class="eyebrow">SOURCES</span><h2>주요 근거 자료</h2></div><span class="count-pill">${Object.keys(sources).length}개 출처</span></div>
        <div class="source-list">${Object.values(sources).map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" class="source-row"><span class="source-type">${esc(s.type)}</span><span><b>${esc(s.title)}</b><small>${esc(s.org)} · ${esc(s.year)}</small></span><span class="arrow">↗</span></a>`).join('')}</div>
      </section>
    </main>

    <footer class="footer"><div><strong>성씨 시그널 아틀라스</strong><span>성씨를 사람의 “값”이 아니라 역사·사회이동을 보는 데이터로 다룹니다.</span></div><div class="footer-links"><a href="#sources">출처</a><button id="footerMethod">방법론</button></div></footer>

    <dialog id="detailDialog" class="dialog"><button class="dialog-close" aria-label="닫기">×</button><div id="dialogBody"></div></dialog>
    <dialog id="methodDialog" class="dialog method-dialog"><button class="dialog-close" aria-label="닫기">×</button><div class="dialog-content"><span class="eyebrow">METHODOLOGY</span><h2>“성씨와 부”를 어떻게 읽어야 하나</h2><p>성씨 연구는 개인의 재산을 맞히는 도구가 아니라, <b>과거 특정 집단의 평균적 사회적 지위가 여러 세대 뒤에도 얼마나 남는지</b> 추적하는 방법입니다. 현재 빈도순위, 역사 기록, 사회이동 연구, 유명 인물 기록은 서로 다른 종류의 자료입니다.</p><ul><li><b>순위:</b> 빈도순위만 표시하며 부유함 순위로 바꾸지 않습니다.</li><li><b>직접성:</b> 성씨별 소득·자산 자료인지 엘리트 직업 대표성인지 구분합니다.</li><li><b>집단:</b> 성씨군 평균과 개인을 분리합니다.</li><li><b>유명인:</b> 같은 성씨의 공인 예시이며 혈연·계보를 자동 연결하지 않습니다.</li><li><b>민감성:</b> 인도의 카스트·종교처럼 차별에 악용될 수 있는 정보는 개인 추정 기능으로 제공하지 않습니다.</li></ul><p class="method-note">핵심 원칙: <strong>“상관관계를 보여주되, 사람을 성씨로 판정하지 않는다.”</strong></p></div></dialog>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  `;

  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-country-tab]').forEach(btn => btn.addEventListener('click', () => {
    state.detailCountry = btn.dataset.countryTab;
    syncUrl();
    render();
    requestAnimationFrame(() => document.querySelector('#country-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }));

  document.querySelectorAll('[data-open-country]').forEach(btn => btn.addEventListener('click', () => {
    state.detailCountry = btn.dataset.openCountry;
    syncUrl();
    render();
    requestAnimationFrame(() => document.querySelector('#country-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }));

  const search = document.querySelector('#searchInput');
  search?.addEventListener('input', e => {
    state.query = e.target.value; syncUrl(); render();
    requestAnimationFrame(() => { const el = document.querySelector('#searchInput'); if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); } });
  });
  document.querySelector('#countryFilter')?.addEventListener('change', e => { state.country = e.target.value; syncUrl(); render(); requestAnimationFrame(() => document.querySelector('#explorer')?.scrollIntoView({ block: 'start' })); });
  document.querySelector('#evidenceFilter')?.addEventListener('change', e => { state.evidence = e.target.value; syncUrl(); render(); requestAnimationFrame(() => document.querySelector('#explorer')?.scrollIntoView({ block: 'start' })); });
  document.querySelector('#sortFilter')?.addEventListener('change', e => { state.sort = e.target.value; syncUrl(); render(); requestAnimationFrame(() => document.querySelector('#explorer')?.scrollIntoView({ block: 'start' })); });
  document.querySelector('#favoriteFilter')?.addEventListener('click', () => { state.onlyFavorites = !state.onlyFavorites; render(); requestAnimationFrame(() => document.querySelector('#explorer')?.scrollIntoView({ block: 'start' })); });
  document.querySelectorAll('[data-fav]').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.fav;
    state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
    saveFavorites(); render();
  }));
  document.querySelectorAll('[data-detail]').forEach(btn => btn.addEventListener('click', () => showDetail(btn.dataset.detail)));
  document.querySelector('#shareBtn')?.addEventListener('click', shareState);
  document.querySelector('#csvBtn')?.addEventListener('click', exportCsv);
  document.querySelector('#resetBtn')?.addEventListener('click', () => { state.query=''; state.country='all'; state.evidence='all'; state.sort='research'; state.onlyFavorites=false; syncUrl(); render(); });
  ['#methodBtn','#footerMethod'].forEach(sel => document.querySelector(sel)?.addEventListener('click', () => document.querySelector('#methodDialog').showModal()));
  document.querySelectorAll('.dialog-close').forEach(btn => btn.addEventListener('click', () => btn.closest('dialog').close()));
  document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));
  document.querySelector('#themeBtn')?.addEventListener('click', toggleTheme);
}

function showDetail(id) {
  const item = surnameCases.find(x => x.id === id);
  if (!item) return;
  const profile = getProfile(item);
  document.querySelector('#dialogBody').innerHTML = `
    <div class="dialog-content">
      <span class="eyebrow">${item.country} · CASE DETAIL</span>
      <div class="dialog-title-row"><h2>${esc(item.surname)} ${esc(item.native)}</h2>${rankBadge(profile)}</div>
      <p class="dialog-lead">${esc(item.finding)}</p>
      ${profile ? `<div class="detail-table"><div><span>빈도 순위</span><b>${esc(profile.frequency.label)}</b></div><div><span>추정 인구</span><b>${esc(profile.frequency.population)}</b></div><div><span>기록 포인트</span><b>${esc(profile.record)}</b></div></div><div class="history-box"><span>역사·연관 기록</span><p>${esc(profile.history)}</p></div><div class="notable-detail"><span>같은 성씨의 대표 인물</span><h3>${esc(profile.notable.name)}</h3><b>${esc(profile.notable.role)}</b><p>${esc(profile.notable.note)}</p>${sourceLink(profile.notable.sourceId)}</div>` : `<div class="detail-table"><div><span>분류</span><b>${esc(item.group)}</b></div><div><span>측정값</span><b>${esc(item.metric)}</b></div><div><span>연구 기간</span><b>${esc(item.period)}</b></div></div>`}
      <div class="dialog-warning"><b>해석 주의</b><span>${esc(item.caution)}</span></div>
      <h3>연결 출처</h3><div class="source-chips">${[...new Set([...(item.sourceIds || []), ...(profile?.sourceIds || [])])].map(sourceLink).join('')}</div>
    </div>`;
  document.querySelector('#detailDialog').showModal();
}

async function shareState() {
  try { await navigator.clipboard.writeText(location.href); showToast('현재 검색 상태 URL을 복사했습니다.'); }
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
