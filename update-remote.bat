@echo off
title Update Project Securer
set /p message="Enter message for the commit: "
git add .
git commit -m "%message%"
git push origin main
