// # == +
// @ == *
// ~ == -
// \\ == /

// const input = "(2 # 3) @ 8 \\ 2 ~ 4 # 2";
const input = "(2 # (3 @ 6) @ 8 \\ 2 ~ 4 # 2";

const regexParaPattern = /\(([^()]+)\)/g;

console.log(input.match(regexParaPattern));
console.log(input);

function calculate(input) {}

// recursive bayad berim
// exit condition - payene reshte voroodi

let result;

let flagPa = false;

// for (let i = 0; i < input.length; i++) {
//   if (input[i] === " ") {
//     continue;
//   }
//   if (input[i] === "(") {
//   }
// }
