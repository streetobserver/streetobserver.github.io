#!/usr/bin/env bash
cd /Users/mujungchiu/Documents/路上觀察網站/streetobserver.github.io/
echo git pull 下載目前最新版
git pull 
echo git add . 追蹤所有檔案
git add .
echo git commit -m 'update files' 記錄這次更改
git commit -m 'update files'
echo git push 上傳檔案
git push
