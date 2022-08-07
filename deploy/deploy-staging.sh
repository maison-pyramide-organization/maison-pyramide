#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

echo " --- Pull Code ---"
cd /var/www/html/maison-pyramide-staging
git checkout package.json
git pull origin staging

echo " --- install requirements ---"
npm i

echo " --- Restart PM2 ---"
pm2 restart maisonStaging

pm2 ls
