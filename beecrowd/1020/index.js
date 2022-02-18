var input = require('fs').readFileSync('./stdin', 'utf8');
var [ageInDays] = input.split('\n');

const years = Math.floor(ageInDays / 365);

const mouths = Math.floor((ageInDays % 365) / 30);

const days = Math.floor((ageInDays % 365) % 30);

console.log(`${years} ano(s)`);
console.log(`${mouths} mes(es)`);
console.log(`${days} dia(s)`);