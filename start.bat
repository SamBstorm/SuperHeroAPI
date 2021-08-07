@echo off
if not exist .\node_modules\nul call install.bat
echo SuperHeroAPI - Solution locale
echo Le serveur sera accessible par le port 3000
echo Appuyez CTRL + C pour stopper le serveur
pause
npm start