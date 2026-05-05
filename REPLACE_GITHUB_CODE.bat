@echo off
echo ==========================================
echo      FRESH START GITHUB REPLACER (V2)
echo ==========================================
echo.

set /p TOKEN="Paste your Token: "

echo [1/3] Cleaning up...
rd /s /q .git >nul 2>&1

echo [2/3] Preparing code...
git init
git config user.name "Deepanshu Thakur"
git config user.email "deepanshuthakur172006@gmail.com"
git add .
git commit -m "Fresh Upload"

:: This line fixes the "refspec main does not match" error
git branch -M main

echo [3/3] Forcing replacement on GitHub...
git push -f "https://%TOKEN%@github.com/Deepanshuthakur17/New-Portfolio.git" main

echo.
echo ------------------------------------------
echo If it says "Everything up-to-date", you are finished!
echo ------------------------------------------
pause
