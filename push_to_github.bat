@echo off
setlocal
echo ==========================================
echo       GITHUB PUSH HELPER (TOKEN METHOD)
echo ==========================================
echo.
echo This script will push your code directly to:
echo https://github.com/Deepanshuthakur17/New-Portfolio
echo.

:: Ask for the token
set /p TOKEN="1. Paste your GitHub Token here and press Enter: "

if "%TOKEN%"=="" (
    echo.
    echo [!] Token cannot be empty. Get one at: https://github.com/settings/tokens
    pause
    exit /b
)

echo.
echo [2/4] Configuring Git Identity...
git config --global user.name "Deepanshu Thakur"
git config --global user.email "deepanshuthakur17@gmail.com"

echo [3/4] Adding files and committing...
git init >nul 2>&1
git add .
git commit -m "Update portfolio code" >nul 2>&1

echo [4/4] Pushing to GitHub...
echo (This may take a moment...)

:: Push using the token in the URL to bypass all prompts
git push -f "https://%TOKEN%@github.com/Deepanshuthakur17/New-Portfolio.git" main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [!] Push failed. 
    echo Possible reasons:
    echo - Your token is incorrect.
    echo - Your token doesn't have 'repo' permissions.
    echo - You are not the owner of this repository.
) else (
    echo.
    echo [OK] SUCCESS! Your code has been pushed to GitHub.
)

echo.
echo Process finished.
pause
