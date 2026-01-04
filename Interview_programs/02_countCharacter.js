const sentence = "i will achieve one day";

let obj1 = {};

for (let index = 0; index < sentence.length; index++) {
  if (obj1[sentence[index]]) {
    obj1[sentence[index]]++;
  } else {
    obj1[sentence[index]] = 1;
  }
}

console.log(obj1);
