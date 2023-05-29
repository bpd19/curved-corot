import { readFileSync } from 'fs';

const json = readFileSync('../shoes.json').toString();
const shoes = JSON.parse(json);
console.log(shoes);
console.log(JSON.stringify(mensaje));