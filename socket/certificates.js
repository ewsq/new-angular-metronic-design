let fs = require('fs');

exports.options = {
    key: fs.readFileSync('/etc/letsencrypt/live/api-php.mobyportal.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/api-php.mobyportal.com/fullchain.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/api-php.mobyportal.com/privkey.pem')
};

exports.express = {
    key: fs.readFileSync('/etc/letsencrypt/live/mobyportal.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/mobyportal.com/fullchain.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/mobyportal.com/privkey.pem')
};