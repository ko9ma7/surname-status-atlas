# 성씨 시그널 아틀라스 (Surname Signal Atlas)

“희귀 성씨 = 부자” 같은 문화적 인상을 실제 성씨 빈도, 역사 기록, 장기 사회이동 연구, 공식 지역경제 통계와 분리해 확인하는 정적 웹서비스입니다.

이번 버전은 일본·인도·영국 등 연구 사례뿐 아니라 **선택 성씨의 빈도순위·추정 인구·역사적 기록·선택 이유·같은 성씨의 대표 인물**까지 한 화면에서 확인할 수 있게 확장했습니다. 대표 인물은 혈연·가문·카스트·재산의 증거가 아니라 “같은 성씨의 공인 사례”로만 표시합니다.

## 가장 쉬운 GitHub 배포: CMD 한 번

Windows에서 프로젝트 폴더의 아래 파일을 실행하세요.

```bat
deploy.cmd
```

또는 CMD에서:

```bat
cd /d C:\원하는경로\surname-status-atlas
deploy.cmd
```

`deploy.cmd`가 자동으로 처리하는 항목:

1. Git / GitHub CLI / Node.js 설치 여부 확인
2. 없으면 `winget`으로 설치 시도
3. GitHub 로그인 확인
4. 최초 1회만 브라우저 GitHub 인증 실행
5. `npm ci` + `npm run build` 검증
6. Git 저장소 초기화 및 `main` 브랜치 설정
7. Git 작성자 이름과 GitHub noreply 이메일 자동 설정
8. GitHub Repository 생성 또는 기존 저장소 재사용
9. Repository **About** 설명 자동 설정
10. Repository **Website**를 GitHub Pages URL로 자동 설정
11. Repository topics 자동 설정
12. Issues / Wiki / Projects 등 기본 저장소 설정 정리
13. GitHub Pages를 **GitHub Actions workflow 방식**으로 자동 활성화
14. 소스 commit / push
15. Pages 배포 workflow 실행
16. Actions 완료 상태 대기 및 실패 시 오류 반환
17. 배포 URL 출력 및 브라우저 열기

첫 실행에서 물어보는 것은 새 저장소 이름 정도이며 기본값은 `surname-status-atlas`입니다. 이후에는 `origin`을 자동 인식하므로 같은 `deploy.cmd`를 다시 실행하면 변경 파일을 자동 commit/push하고 재배포합니다.

> GitHub 계정 인증은 보안상 완전 무인 처리하지 않습니다. 로그인되어 있지 않은 경우 `gh auth login --web` 방식의 GitHub 공식 인증 창이 한 번 열립니다.

### 비공개 저장소로 만들고 싶을 때

CMD에서:

```bat
deploy.cmd -Private
```

GitHub 요금제에 따라 private repository의 Pages 사용 가능 여부가 다를 수 있습니다. 일반 공개 정보 서비스라면 기본 public 배포가 가장 단순합니다.

### 저장소 이름을 직접 지정

```bat
deploy.cmd -RepoName surname-status-atlas
```

### 사이트만 바로 열기

첫 배포 후:

```bat
open-site.cmd
```

## GitHub Social Preview

`public/github-social-preview.png` 파일이 준비되어 있습니다.

GitHub의 공개된 `gh`/REST API에는 Repository Social Preview 이미지 업로드 설정이 제공되지 않기 때문에, 이 한 항목만 GitHub 웹의 Repository → Settings → General → Social preview에서 이미지를 선택해야 합니다. 나머지 Repository About / Website / Topics / Pages 설정은 `deploy.cmd`가 처리합니다.

## Preview

홈은 **국가 우선 탐색 구조**입니다. 짧은 서비스 소개 다음에 일본·인도·영국·스웨덴·중국·한국·이탈리아 국가별 탐색기가 바로 나오며, 상단의 고정 국가 탭으로 원하는 나라의 상세 리스트를 즉시 전환할 수 있습니다.

- 상단 고정 국가 탭: 일본 / 인도 / 영국 / 스웨덴 / 중국 / 한국 / 이탈리아
- 홈 상단 국가별 탐색기 카드
- 국가별 전체 성씨·집단 조사 리스트
- 일본 탭의 실제 성씨 빈도순위 비교표: 佐藤, 鈴木, 直井, 大道寺, 飛鳥井, 綾小路, 徳大寺
- 성씨별 빈도 순위와 추정 인구(자료가 있을 때만)
- 역사·가문명 관련 기록과 선택 이유
- 같은 성씨의 대표적 공인/역사 인물
- 국가별 사회이동 연구와 해석 주의사항
- 전체 국가 통합 검색기
- PC 행형 상세 리스트 / 모바일 카드형 상세 리스트

## Features

- 한글·영문·원어 성씨 검색
- 국가별/근거유형 필터
- 연구순 / 이름순 / 빈도순 정렬
- 일본 성씨 전국 빈도순위 비교표
- 선택 성씨 12개 상세 기록
- 나오이(直井)·아이치 경제지표 팩트체크
- 역사 기록과 현대 개인의 부를 분리하는 해석 가이드
- 유명인/역사 인물 연관 정보 + 별도 출처
- 인도 성씨 연구의 민감정보 주의 설계
- 즐겨찾기(LocalStorage)
- Light / Dark / System 테마
- 검색 상태 URL 공유
- 현재 결과 CSV 내보내기(빈도순위·대표인물 포함)
- 출처·연구기간·측정값·한계 표시
- 모바일 반응형, 키보드 포커스, dialog 접근성
- PWA manifest, favicon, OG image, robots, sitemap, 404
- GitHub Actions Pages 자동 배포
- CMD 기반 Git/GitHub/Pages 자동 설정

## 순위를 읽는 법

웹서비스의 `#1`, `#1277`, `#44670` 같은 값은 **부자 순위가 아니라 성씨 빈도순위**입니다.

일본은 名字由来net에서 전국 빈도와 추정 인구가 확인되는 선택 성씨에 한해 수치를 표시합니다. 인도·영국처럼 이 프로젝트가 신뢰할 만한 전국 최신 빈도순위를 확인하지 못한 경우에는 숫자를 만들어 넣지 않고 `공식 전국 성씨 빈도순위 미확인` 또는 `연구 표본 내 빈도순위 미제공`이라고 표시합니다.

## 대표 인물을 읽는 법

예를 들어 Banerjee 카드에 Abhijit Banerjee, Ganguly 카드에 Sourav Ganguly가 연결되더라도 이는 “같은 성씨의 알려진 공인”이라는 뜻입니다.

다음을 의미하지 않습니다.

- 해당 연구 표본과의 혈연 관계
- 같은 가문이라는 판정
- 카스트/종교 판정
- 부유함 또는 자산 수준 판정

## Tech Stack

- Vanilla JavaScript (ES Modules)
- CSS3
- Zero-dependency static build script (Node.js)
- Static data modules
- GitHub CLI (`gh`) 기반 자동 Repository/Pages 설정
- GitHub Actions Pages deployment

## Project Structure

```text
.
├─ public/
│  ├─ favicon.svg
│  ├─ favicon-32x32.png
│  ├─ apple-touch-icon.png
│  ├─ icon-192.png
│  ├─ icon-512.png
│  ├─ og-image.png
│  ├─ github-social-preview.png
│  ├─ manifest.webmanifest
│  ├─ robots.txt
│  ├─ sitemap.xml
│  ├─ 404.html
│  └─ .nojekyll
├─ src/
│  ├─ data/
│  │  ├─ cases.js
│  │  ├─ profiles.js
│  │  └─ sources.js
│  ├─ main.js
│  └─ styles.css
├─ scripts/
│  ├─ build.mjs
│  ├─ dev.mjs
│  └─ deploy.ps1
├─ .github/workflows/deploy.yml
├─ .gitignore
├─ deploy.cmd
├─ open-site.cmd
├─ index.html
├─ package.json
├─ package-lock.json
├─ README.md
├─ RESEARCH_NOTES.md
└─ LICENSE
```

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages Deployment — 수동 방식

`deploy.cmd`를 쓰지 않는 경우에만 아래가 필요합니다.

1. GitHub Repository 생성
2. 프로젝트 push
3. Repository → Settings → Pages
4. Build and deployment → Source → **GitHub Actions**
5. `main`에 push하면 `.github/workflows/deploy.yml` 실행

`deploy.cmd`를 사용하면 위 저장소/Pages 설정을 CLI와 GitHub API로 자동 처리합니다.

## Configuration

GitHub Actions 배포에서는 저장소 소유자와 저장소명을 이용해 `SITE_URL`을 자동 계산하고, 빌드 시 canonical / Open Graph / robots / sitemap placeholder를 실제 Pages URL로 치환합니다.

로컬에서 실제 URL 메타데이터를 검증하려면:

```bash
SITE_URL=https://example.com/ npm run build
```

## Data Policy

이 프로젝트는 성씨를 개인의 부, 카스트, 종교, 인종, 계층을 판정하는 도구로 사용하지 않습니다. 학술 논문이 다룬 집단 수준의 장기 상관관계와 역사적 맥락을 보여주며, 각 카드에 해석 한계를 함께 표기합니다.

특히 인도 자료는 카스트·종교와 연결될 수 있는 민감한 역사 자료이므로 개인 판정 기능을 제공하지 않습니다.

## Custom Domain

GitHub Pages Settings에서 Custom domain을 지정하고 DNS를 연결할 수 있습니다. 필요하면 `public/CNAME`에 도메인만 한 줄로 추가하세요. 커스텀 도메인은 사용자가 실제 도메인을 제공해야 하므로 기본 `deploy.cmd`에서는 임의로 설정하지 않습니다.

## License

코드는 MIT License로 사용할 수 있습니다. 외부 연구·통계·인물 기록의 저작권과 이용조건은 각 원출처를 따릅니다.

## Windows CMD 실행 오류가 날 때

`'ionPolicy'은(는) 내부 또는 외부 명령...`, 깨진 한글, 명령어 일부가 잘려 실행되는 현상은 이전 배포 파일의 줄바꿈/인코딩 문제였습니다. 현재 릴리스는 다음 형식으로 수정되어 있습니다.

- `deploy.cmd`: ASCII + Windows CRLF
- `scripts/deploy.ps1`: UTF-8 BOM + Windows CRLF
- 배치 파일에서 한글 출력과 복잡한 괄호 분기 제거

기존 ZIP을 사용 중이라면 새 릴리스로 폴더 전체를 교체하는 것을 권장합니다. 또는 최소한 `deploy.cmd`와 `scripts/deploy.ps1` 두 파일을 함께 교체해야 합니다.

실행은 파일을 더블클릭하거나 CMD에서 다음처럼 합니다.

```bat
deploy.cmd
```

저장소 이름을 지정하려면:

```bat
deploy.cmd -RepoName surname-status-atlas
```

GitHub 로그인이 처음이면 브라우저 인증창이 한 번 열립니다. 인증 후 같은 CMD 창에서 자동으로 계속 진행됩니다.

### `error: No such remote 'origin'` 오류

초기 Git 저장소에는 `origin`이 없는 것이 정상입니다. v2.2부터는 `git remote` 목록을 먼저 확인한 뒤 `origin`이 있을 때만 URL을 조회합니다. 또한 아직 존재하지 않는 GitHub Repository, Pages, Actions workflow를 확인하는 명령도 상태 조회로 처리하므로 첫 실행 중 정상적인 `not found` 응답 때문에 PowerShell이 중단되지 않습니다.

이전 실행이 `Git 저장소 초기화` 뒤에 중단되었더라도 `.git` 폴더를 지울 필요가 없습니다. 최신 `scripts/deploy.ps1`로 교체하고 `deploy.cmd`를 다시 실행하면 이어서 Repository 생성과 Pages 배포를 진행합니다.

### Windows 배포 참고: Actions가 `cancelled` 되는 경우

`deploy.cmd`는 `main` push로 자동 생성된 Pages workflow를 먼저 추적합니다. push run이 생성되지 않았을 때만 `workflow_dispatch`를 1회 요청합니다. Pages workflow의 concurrency는 `cancel-in-progress: false`로 설정되어 있어, 초기 설정 과정에서 중복 실행이 생겨도 진행 중인 배포를 취소하지 않습니다. `LF will be replaced by CRLF` 메시지는 Windows Git의 줄바꿈 경고이며 배포 오류가 아닙니다.

### `main -> main (fetch first)` 오류

새 ZIP을 다른 폴더에 풀면 로컬 `.git` 이력은 새로 시작하지만 GitHub의 같은 저장소에는 이전 배포 이력이 남아 있을 수 있습니다. 최신 `deploy.ps1`은 기존 저장소의 `origin/main`을 먼저 fetch하고, 로컬 이력이 원격과 다르면 현재 로컬 HEAD를 `deploy-backup-날짜-시간` 브랜치로 보관한 뒤 원격 `main` 이력 위에 **현재 폴더의 파일 상태를 새 커밋**으로 올립니다. 따라서 ZIP 폴더를 새로 받아도 `fetch first` 때문에 수동으로 `git pull`하거나 강제 push할 필요가 없습니다.

또한 `.gitattributes`를 포함해 일반 소스 파일은 LF, `deploy.cmd`/`deploy.ps1`은 Windows CRLF로 고정하므로 Windows의 반복적인 줄바꿈 경고도 줄였습니다.
