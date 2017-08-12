#!/usr/bin/env bash
cd "$(dirname "$0")"
git pull
git add .
git commit -m 'update files'
git push
