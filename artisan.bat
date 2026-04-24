@echo off
C:\wamp64\bin\php\php8.1.33\php.exe -d xdebug.mode=off -d output_buffering=0 artisan %* 2>&1
pause