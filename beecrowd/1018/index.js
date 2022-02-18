var input = require('fs').readFileSync('./stdin', 'utf8');
var [lines] = input.split('\n');

const value = Number(lines);

const n100 = Math.floor(value / 100);
const remainder100 = value % 100;

const n50 = Math.floor(remainder100 / 50);
const remainder50 = remainder100 % 50;

const n20 = Math.floor(remainder50 / 20);
const remainder20 = remainder50 % 20;

const n10 = Math.floor(remainder20 / 10);
const remainder10 = remainder20 % 10;

const n5 = Math.floor(remainder10 / 5);
const remainder5 = remainder10 % 5;

const n2 = Math.floor(remainder5 / 2);
const remainder2 = remainder5 % 2;

const n1 = Math.floor(remainder2 / 1);

console.log(value);

console.log(`${n100} nota(s) de R$ 100,00`);
console.log(`${n50} nota(s) de R$ 50,00`);
console.log(`${n20} nota(s) de R$ 20,00`);
console.log(`${n10} nota(s) de R$ 10,00`);
console.log(`${n5} nota(s) de R$ 5,00`);
console.log(`${n2} nota(s) de R$ 2,00`);
console.log(`${n1} nota(s) de R$ 1,00`);