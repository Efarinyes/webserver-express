const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let sortida = {
            nom: 'Eduard',
            cognom: 'Farinyes',
            correu: 'efarinyes@gmail.com',
            url: req.url
        }
        res.write(JSON.stringify(sortida));
        // res.write('Hola Mon des del webserver');
        res.end();

    })
    .listen(8080);

console.log('Escoltant elport 8080');