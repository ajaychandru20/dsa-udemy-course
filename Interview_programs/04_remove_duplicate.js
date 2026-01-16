// Using UNION method
const A = new Set(["a", "b", "c"]);
const B = new Set(["b", "c", "d"]);

const C = A.union(B);
console.log([...C].toString());

// loop + Sets ()
const duplicateArray = [1, 1, 2, 3, 4, 4, 5, 6, 6, 8];

let sets = new Set();

for (let data of duplicateArray) {
  if (sets.has(data) === false) {
    sets.add(data);
  }
}

console.log([...sets].toString());

// Simple Set
let simpleSet = [...new Set(duplicateArray)].toString();
console.log(simpleSet);

function removeDuplicate() {
  return duplicateArray.filter(
    (value, index, self) => self.indexOf(value) === index
  );
}

const output = removeDuplicate();
console.log(output);

// Reduce method
function name(params) {
  return params.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
}
const output2 = name(duplicateArray);
console.log(output2);
