var input = require('fs').readFileSync('./stdin', 'utf8');
var [lines] = input.split('\n');

const seconds = Math.floor(lines % 60);
const minutes = Math.floor((lines % (60 * 60)) / 60);
const hours = Math.floor(lines / (60 * 60));

console.log(`${hours}:${minutes}:${seconds}`);