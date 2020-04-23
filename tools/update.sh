#!/bin/bash

git chechout master

git pull origin master

make site

git add .

git commit -m 'update site'

git push origin master
