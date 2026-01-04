const array_1 = [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5];

let maxOcc = 1;
let curOcc = 1;
let maxVal = array_1[0];
for (let index = 1; index < array_1.length; index++) {
  if (array_1[index] === array_1[index - 1]) {
    curOcc++;
    if (curOcc > maxOcc) {
      maxOcc = curOcc;
      maxVal = array_1[index];
    }
  } else {
    curOcc = 1;
  }
}

console.log(maxVal, maxOcc);
