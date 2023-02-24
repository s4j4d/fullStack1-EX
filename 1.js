const input = "salam khubi";
const search = "alm";

function serachString(input, search) {
  // return index of input search
  // return -1 if search doesn't include in input

  let result = -1;

  for (let i = 0, j = search.length; j < input.length; i++, j++) {
    if (search === input.slice(i, j)) {
      result = i;
      break;
    }
  }

  return result;
}

console.log(serachString(input, search));
