cd /home/backendCI/
git pull orgin master
npm install --production
pm2 restart all
npm test
exit 
EOF