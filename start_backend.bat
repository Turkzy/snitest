@echo off
setlocal

REM Prompt the user for input
set /p haveNode=Do you have Node.js installed? (Y/N):

REM Convert input to uppercase for case insensitivity
set "haveNode=%haveNode:~0,1%"
set "haveNode=%haveNode:~0,1%"

REM Check user's response
if /i "%haveNode%"=="Y" (
    REM Find the directory containing this script
    for %%i in ("%~dp0.") do set "SCRIPT_DIR=%%~fi"

    REM Navigate to the backend directory inside SystemDesign
    cd /d "%SCRIPT_DIR%\SystemDesign\backend"

    REM Start the backend server in the same command prompt
    npm start

) else if /i "%haveNode%"=="N" (
    REM Handle case where user does not have Node.js
    echo Node.js is not installed. Cannot start the backend server.

) else (
    REM Handle invalid input
    echo Invalid input. Please enter Y or N.
)

pause
