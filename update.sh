#!/usr/bin/bash

echo "Updating Project Securer Api"

echo "Pulling Code From Github"

git pull origin main
wait

echo "Installing Node Packages"

sudo npm install
wait

echo "Resarting Pm2 Service"

pm2 restart pm2.config.js