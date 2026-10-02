@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -Command "$r=(git remote get-url origin 2>$null); if(-not $r){Write-Host '먼저 deploy.cmd를 실행해주세요.'; exit 1}; if($r -match 'github\.com[:/](?<o>[^/]+)/(?<r>[^/]+?)(?:\.git)?$'){ $o=$Matches.o; $n=$Matches.r; if($n -eq ($o+'.github.io')){$u='https://'+$o+'.github.io/'}else{$u='https://'+$o+'.github.io/'+$n+'/'}; Start-Process $u; Write-Host $u }"
