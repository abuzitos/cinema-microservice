#! /bin/bash

echo "Descrição do Commit: "
read texto

git add .
git commit -m "$texto"
git push -u origin master
