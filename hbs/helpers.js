const hbs = require('hbs');


// Helpers - HBS

hbs.registerHelper('getAny', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalitzar', (text) => {
    let paraules = text.split(' ');
    paraules.forEach((paraula, idx) => {
        paraules[idx] = paraula.charAt(0).toUpperCase() + paraula.slice(1).toLowerCase();
    });

    return paraules.join(' ');
});