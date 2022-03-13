#!/bin/bash

# scp -r .next/* maisonPyramide:/var/www/html/maison-pyramide/.next/

echo '
cd /var/www/html/maison-pyramide/
git checkout yarn.lock
git pull origin master
yarn build
pm2 restart maison
pm2 ls
' | ssh maisonPyramide
