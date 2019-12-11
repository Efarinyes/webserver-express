const express = require('express')
const app = express();

const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// EXPRESS + hbs ( redenitzacio dinàmica de diferents pàgines )

hbs.registerPartials(__dirname + '/views/parcials');
app.set('view engine', 'hbs');

// Helpers - HBS



app.get('/', (req, res) => {

    res.render('home', {
        nom: 'edUarD faRinYes'
    });
});
app.get('/about', (req, res) => {

    res.render('about')
});

app.listen(port, () => {
    console.log(`Escoltant per la sortida ${ port }`);
});