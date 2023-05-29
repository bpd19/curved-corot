import { readFileSync } from 'fs';
//it doesn't work
const json = readFileSync('../shoes.json').toString();
const shoes = JSON.parse(json);
console.log(shoes);
console.log(JSON.stringify(mensaje));