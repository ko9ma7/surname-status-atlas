@echo off
setlocal EnableExtensions
cd /d "%~dp0"

echo ============================================================
echo   Surname Signal Atlas - GitHub Setup and Pages Deploy
echo ============================================================
echo.

where powershell.exe >nul 2>nul
if errorlevel 1 goto no_powershell

powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\deploy.ps1" %*
set "EXITCODE=%ERRORLEVEL%"

if "%EXITCODE%"=="0" goto success

echo.
echo [FAILED] Deployment stopped. Review the error above.
echo.
pause
exit /b %EXITCODE%

:success
echo.
echo [DONE] GitHub repository, About, Pages, and deployment setup completed.
echo.
pause
exit /b 0

:no_powershell
echo.
echo [FAILED] Windows PowerShell was not found.
echo Please run this on Windows 10 or Windows 11 with PowerShell enabled.
echo.
pause
exit /b 9009
