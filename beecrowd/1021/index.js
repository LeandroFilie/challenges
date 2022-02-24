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

const m1 = Math.floor(remainder2 / 1);
const remainder1 = remainder2 % 1 + 0.00001;

const m50 = Math.floor(remainder1 / 0.5);
const remainder050 = remainder1 % 0.5 + 0.00001;

const m25 = Math.floor(remainder050 / 0.25);
const remainder025 = remainder050 % 0.25 + 0.00001;

const m10 = Math.floor(remainder025 / 0.1);
const remainder010 = remainder025 % 0.1 + 0.00001;

const m05 = Math.floor(remainder010 / 0.05);
const remainder05 = remainder010 % 0.05 + 0.00001;

const m01 = Math.floor(remainder05 / 0.01);

console.log('NOTAS:');
console.log(`${n100} nota(s) de R$ 100.00`);
console.log(`${n50} nota(s) de R$ 50.00`);
console.log(`${n20} nota(s) de R$ 20.00`);
console.log(`${n10} nota(s) de R$ 10.00`);
console.log(`${n5} nota(s) de R$ 5.00`);
console.log(`${n2} nota(s) de R$ 2.00`);

console.log('MOEDAS:');
console.log(`${m1} moeda(s) de R$ 1.00`);
console.log(`${m50} moeda(s) de R$ 0.50`);
console.log(`${m25} moeda(s) de R$ 0.25`);
console.log(`${m10} moeda(s) de R$ 0.10`);
console.log(`${m05} moeda(s) de R$ 0.05`);
console.log(`${m01} moeda(s) de R$ 0.01`);