@echo off
echo Starting GitHub deployment...

echo Step 1: Initializing Git repository...
git init

echo Step 2: Adding all files...
git add .

echo Step 3: Creating initial commit...
git commit -m "Company Portfolio - Initial commit"

echo Step 4: Setting main branch...
git branch -M main

echo Step 5: Adding remote origin...
git remote add origin https://github.com/kannanS18/CompanyPortfolio.git

echo Step 6: Pushing to GitHub...
git push -u origin main

echo Step 7: Installing GitHub Pages...
npm install --save-dev gh-pages

echo Step 8: Deploying to GitHub Pages...
npm run deploy

echo.
echo ========================================
echo DEPLOYMENT COMPLETE!
echo Your portfolio is now live at:
echo https://kannanS18.github.io/CompanyPortfolio
echo ========================================
pause