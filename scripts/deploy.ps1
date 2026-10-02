param(
  [string]$RepoName = "",
  [string]$Owner = "",
  [switch]$Private,
  [switch]$NoWait
)

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()
$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

function Step([string]$message) {
  Write-Host "`n==> $message" -ForegroundColor Cyan
}

function Refresh-ToolPath {
  $hints = @(
    'C:\Program Files\Git\cmd',
    'C:\Program Files\GitHub CLI',
    'C:\Program Files\nodejs'
  )
  foreach ($hint in $hints) {
    if ((Test-Path $hint) -and -not (($env:Path -split ';') -contains $hint)) {
      $env:Path = "$hint;$env:Path"
    }
  }
}

function Ensure-Tool([string]$command, [string]$wingetId, [string]$displayName) {
  Refresh-ToolPath
  if (Get-Command $command -ErrorAction SilentlyContinue) { return }

  if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
    throw "$displayName 이(가) 필요하지만 설치되어 있지 않고 winget도 찾을 수 없습니다. Microsoft Store의 App Installer를 설치한 뒤 deploy.cmd를 다시 실행해주세요."
  }

  Step "$displayName 자동 설치"
  & winget install --id $wingetId -e --source winget --accept-package-agreements --accept-source-agreements
  if ($LASTEXITCODE -ne 0) { throw "$displayName 설치에 실패했습니다. winget 오류 코드를 확인해주세요." }
  Refresh-ToolPath
  if (-not (Get-Command $command -ErrorAction SilentlyContinue)) {
    throw "$displayName 설치는 완료됐지만 현재 CMD에 PATH가 아직 반영되지 않았습니다. 이 창을 닫고 deploy.cmd를 한 번 더 실행해주세요."
  }
}

function Run([string]$file, [string[]]$arguments, [switch]$AllowFail) {
  & $file @arguments
  $code = $LASTEXITCODE
  if ($code -ne 0 -and -not $AllowFail) {
    throw "명령 실패 ($code): $file $($arguments -join ' ')"
  }
  return $code
}

function Probe([string]$file, [string[]]$arguments) {
  $previousPreference = $ErrorActionPreference
  try {
    $ErrorActionPreference = 'Continue'
    $output = & $file @arguments 2>$null
    $code = $LASTEXITCODE
  } catch {
    $output = @()
    $code = 1
  } finally {
    $ErrorActionPreference = $previousPreference
  }
  return [pscustomobject]@{
    Code = $code
    Output = (($output | ForEach-Object { "$_" }) -join "`n").Trim()
  }
}

Step '필수 도구 확인'
Ensure-Tool 'git' 'Git.Git' 'Git'
Ensure-Tool 'gh' 'GitHub.cli' 'GitHub CLI'
Ensure-Tool 'node' 'OpenJS.NodeJS.LTS' 'Node.js LTS'
Ensure-Tool 'npm' 'OpenJS.NodeJS.LTS' 'npm'

Step 'GitHub 로그인 확인'
$authProbe = Probe -file 'gh' -arguments @('auth','status','--hostname','github.com')
if ($authProbe.Code -ne 0) {
  Write-Host '브라우저에서 GitHub 계정 인증을 한 번만 완료해주세요.' -ForegroundColor Yellow
  & gh auth login --hostname github.com --git-protocol https --web --scopes 'repo,workflow'
  if ($LASTEXITCODE -ne 0) { throw 'GitHub 로그인에 실패했습니다.' }
}
Run 'gh' @('auth','setup-git') | Out-Null

$authOwner = (& gh api user --jq '.login').Trim()
$userId = (& gh api user --jq '.id').Trim()
if (-not $Owner) { $Owner = $authOwner }

Step '프로젝트 빌드 검증'
Run 'npm' @('ci') | Out-Null
Run 'npm' @('run','build') | Out-Null
Write-Host 'npm ci / npm run build 통과' -ForegroundColor Green

if (-not (Test-Path '.git')) {
  Step 'Git 저장소 초기화'
  Run 'git' @('init') | Out-Null
}
Run 'git' @('branch','-M','main') | Out-Null

$existingRemote = ''
$remoteListProbe = Probe -file 'git' -arguments @('remote')
if ($remoteListProbe.Code -eq 0 -and (($remoteListProbe.Output -split "`r?`n") -contains 'origin')) {
  $remoteUrlProbe = Probe -file 'git' -arguments @('remote','get-url','origin')
  if ($remoteUrlProbe.Code -eq 0) { $existingRemote = $remoteUrlProbe.Output.Trim() }
}
$remoteOwner = ''
$remoteRepo = ''
if ($existingRemote -and $existingRemote -match 'github\.com[:/](?<owner>[^/]+)/(?<repo>[^/]+?)(?:\.git)?$') {
  $remoteOwner = $Matches.owner
  $remoteRepo = $Matches.repo
}

if (-not $RepoName) {
  if ($remoteRepo) {
    $RepoName = $remoteRepo
    if (-not $Owner -or $Owner -eq $authOwner) { $Owner = $remoteOwner }
  } else {
    $defaultRepo = 'surname-status-atlas'
    $answer = Read-Host "GitHub 저장소 이름 [$defaultRepo]"
    $RepoName = if ([string]::IsNullOrWhiteSpace($answer)) { $defaultRepo } else { $answer.Trim() }
  }
}

$RepoName = $RepoName -replace '[^A-Za-z0-9._-]', '-'
$repoFull = "$Owner/$RepoName"
$pageUrl = if ($RepoName -ieq "$Owner.github.io") { "https://$Owner.github.io/" } else { "https://$Owner.github.io/$RepoName/" }
$repoUrl = "https://github.com/$repoFull"
$actionsUrl = "$repoUrl/actions"
$description = 'Fact-checked surname atlas: frequency ranks, historical records, long-run social mobility research, and sourced notable-name context.'
$topics = @('surname','genealogy','social-mobility','data-visualization','github-pages','history','japan','india','korea')

Step 'Git 작성자 설정'
$gitNameProbe = Probe -file 'git' -arguments @('config','--get','user.name')
if ($gitNameProbe.Code -ne 0 -or -not $gitNameProbe.Output) { Run 'git' @('config','user.name',$authOwner) | Out-Null }
$gitEmailProbe = Probe -file 'git' -arguments @('config','--get','user.email')
if ($gitEmailProbe.Code -ne 0 -or -not $gitEmailProbe.Output) { Run 'git' @('config','user.email',"$userId+$authOwner@users.noreply.github.com") | Out-Null }

Step '변경사항 커밋'
Run 'git' @('add','-A') | Out-Null
$diffProbe = Probe -file 'git' -arguments @('diff','--cached','--quiet')
if ($diffProbe.Code -ne 0) {
  $stamp = Get-Date -Format 'yyyy-MM-dd HH:mm'
  Run 'git' @('commit','-m',"Update Surname Signal Atlas ($stamp)") | Out-Null
  Write-Host '새 커밋 생성' -ForegroundColor Green
} else {
  Write-Host '추가로 커밋할 변경사항 없음' -ForegroundColor DarkGray
}

Step "GitHub 저장소 확인: $repoFull"
$repoProbe = Probe -file 'gh' -arguments @('repo','view',$repoFull,'--json','nameWithOwner')
$repoExists = ($repoProbe.Code -eq 0)
if (-not $repoExists) {
  $visibilityFlag = if ($Private) { '--private' } else { '--public' }
  if ($existingRemote) {
    Run 'gh' @('repo','create',$repoFull,$visibilityFlag,'--source=.','--description',$description) | Out-Null
    Run 'git' @('remote','set-url','origin',"https://github.com/$repoFull.git") | Out-Null
  } else {
    Run 'gh' @('repo','create',$repoFull,$visibilityFlag,'--source=.','--remote=origin','--description',$description) | Out-Null
  }
  Write-Host "저장소 생성: $repoUrl" -ForegroundColor Green
} else {
  Write-Host '기존 GitHub 저장소 사용' -ForegroundColor DarkGray
  if (-not $existingRemote) {
    Run 'git' @('remote','add','origin',"https://github.com/$repoFull.git") | Out-Null
  } elseif ($remoteOwner -and "$remoteOwner/$remoteRepo" -ne $repoFull) {
    Write-Host "origin이 다른 저장소를 가리켜 $repoFull 로 변경합니다." -ForegroundColor Yellow
    Run 'git' @('remote','set-url','origin',"https://github.com/$repoFull.git") | Out-Null
  }
}

Step 'GitHub About 설정 (설명 / 홈페이지 / 토픽 / 기능)'
$editArgs = @('repo','edit',$repoFull,'--description',$description,'--homepage',$pageUrl,'--enable-issues=true','--enable-wiki=false','--enable-projects=false','--delete-branch-on-merge')
foreach ($topic in $topics) { $editArgs += @('--add-topic',$topic) }
Run 'gh' $editArgs | Out-Null

Step 'main 브랜치 push'
Run 'git' @('push','-u','origin','main') | Out-Null
Run 'gh' @('repo','edit',$repoFull,'--default-branch','main') | Out-Null

Step 'GitHub Pages를 GitHub Actions 방식으로 활성화'
$pagesProbe = Probe -file 'gh' -arguments @('api',"repos/$repoFull/pages")
if ($pagesProbe.Code -eq 0) {
  Run 'gh' @('api','--method','PUT',"repos/$repoFull/pages",'-f','build_type=workflow') | Out-Null
  Write-Host '기존 Pages 설정을 workflow 방식으로 확인/갱신' -ForegroundColor Green
} else {
  Run 'gh' @('api','--method','POST',"repos/$repoFull/pages",'-f','build_type=workflow') | Out-Null
  Write-Host 'Pages 사이트 생성 및 workflow 방식 활성화' -ForegroundColor Green
}

Step 'Pages 배포 워크플로 확인'
$headSha = (& git rev-parse HEAD).Trim()
$manualStarted = $false
for ($i = 0; $i -lt 8 -and -not $manualStarted; $i++) {
  $workflowProbe = Probe -file 'gh' -arguments @('workflow','run','deploy.yml','-R',$repoFull,'--ref','main')
  if ($workflowProbe.Code -eq 0) {
    $manualStarted = $true
    Write-Host 'workflow_dispatch 실행 요청 완료' -ForegroundColor Green
  } else {
    Start-Sleep -Seconds 2
  }
}
if (-not $manualStarted) {
  Write-Host '수동 실행 요청은 GitHub 인덱싱 지연으로 생략했습니다. main push가 배포 워크플로를 자동 실행합니다.' -ForegroundColor Yellow
}

if (-not $NoWait) {
  $run = $null
  for ($i = 0; $i -lt 20 -and -not $run; $i++) {
    Start-Sleep -Seconds 3
    $runListProbe = Probe -file 'gh' -arguments @('run','list','-R',$repoFull,'-w','deploy.yml','-b','main','-L','20','--json','databaseId,event,headSha,status,createdAt')
    $json = $runListProbe.Output
    if ($runListProbe.Code -eq 0 -and $json) {
      $runs = $json | ConvertFrom-Json
      $run = $runs | Where-Object { $_.headSha -eq $headSha -and ($_.event -eq 'workflow_dispatch' -or $_.event -eq 'push') } | Select-Object -First 1
    }
  }
  if ($run) {
    Write-Host "Actions Run ID: $($run.databaseId)" -ForegroundColor DarkGray
    & gh run watch $run.databaseId -R $repoFull --compact --exit-status
    if ($LASTEXITCODE -ne 0) {
      Write-Host "배포 워크플로가 실패했습니다. 로그: $actionsUrl" -ForegroundColor Red
      throw 'GitHub Actions 배포 실패'
    }
  } else {
    Write-Host "워크플로 실행을 자동 추적하지 못했습니다. Actions에서 상태를 확인하세요: $actionsUrl" -ForegroundColor Yellow
  }
}

Step '배포 결과'
$finalPagesProbe = Probe -file 'gh' -arguments @('api',"repos/$repoFull/pages")
$pagesJson = $finalPagesProbe.Output
if ($finalPagesProbe.Code -eq 0 -and $pagesJson) {
  try {
    $pages = $pagesJson | ConvertFrom-Json
    if ($pages.html_url) { $pageUrl = $pages.html_url }
  } catch {}
}
Write-Host "Repository : $repoUrl" -ForegroundColor Green
Write-Host "Actions    : $actionsUrl" -ForegroundColor Green
Write-Host "Pages      : $pageUrl" -ForegroundColor Green
Write-Host "About URL  : $pageUrl" -ForegroundColor Green
Write-Host ''
Write-Host 'Repository Social Preview 이미지는 public/github-social-preview.png에 준비되어 있습니다.' -ForegroundColor Yellow
Write-Host 'GitHub의 문서화된 gh/REST API에는 Social Preview 업로드 항목이 없어 이 한 항목만 웹 UI에서 이미지를 선택해야 합니다.' -ForegroundColor Yellow

try { Start-Process $pageUrl } catch {}
exit 0
