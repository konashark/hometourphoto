#!/usr/bin/env sh
cmd="rsync -vzrlp --delete --exclude='.git/' --exclude='.idea/' --exclude='node_modules' ./website konashark@hometourphoto.com:public_html/";
eval $cmd && echo "updated" && date
