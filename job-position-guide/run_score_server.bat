@echo off
chcp 65001 >nul
cd /d "%~dp0"
:: 使用 WorkBuddy 托管 Python（若找不到则回退系统 python）
set PY="C:\Users\。\.workbuddy\binaries\python\versions\3.13.12\python.exe"
if not exist %PY% set PY=python
echo 启动 AI 判分服务（Ctrl+C 停止）...
%PY% score_server.py
pause
