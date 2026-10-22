@echo off
setlocal

cd /d "%~dp0"

set "PATH=%~dp0bin;%PATH%"

call npm.cmd start

pause
