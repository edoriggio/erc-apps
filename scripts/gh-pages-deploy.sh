#!/usr/bin/env sh

# add config for git
git config --global user.email "edo.riggio19@gmail.com"
git config --global user.name "Edoardo Riggio"

# abort on errors
set -e

git checkout --orphan gh-pages

# build
yarn run build

touch ./dist/CNAME
echo 'www.erc-apps.com' > ./dist/CNAME

git --work-tree dist add .
git --work-tree dist commit -m "gh-pages"
git push origin HEAD:gh-pages --force
rm -r dist

git checkout -f master
git branch -D gh-pages

cd -