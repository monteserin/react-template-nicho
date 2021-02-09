const EasyFtp = require('easy-ftp');
const ftp = new EasyFtp();
const config = {
    "name": "pablomonteserin.com",
    "host": "pablomonteserin.com",
    "port": 21,
    "type": "ftp",
    "username": "pablomonteserin",
    "password": "S5mEwHmf",
};

//서버 접속(connect)
ftp.connect(config);
ftp.upload("./dist/**", "/www/sites/silladepaseo", function (err) {
    if (err) {
        return console.error(err);
    }
    console.info('Deployed!');
});
