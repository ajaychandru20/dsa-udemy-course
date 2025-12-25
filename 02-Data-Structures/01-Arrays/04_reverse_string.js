// let sentence = "Hi my name is Ajay";
let sentence = "";

if (typeof sentence === "string" && sentence.length >= 2) {

  // Method 1: Manual reverse (DSA way)
  let type1 = "";
  for (let index = sentence.length - 1; index >= 0; index--) {
    type1 += sentence[index];
  }
  console.log(type1);

  // Method 2: split + reverse
  let type2 = sentence.split("").reverse().join("");
  console.log(type2);

  // Method 3: spread operator
  let type3 = [...sentence].reverse().join("");
  console.log(type3);

} else {
  console.log("Please provide a valid string with length >= 2");
}
