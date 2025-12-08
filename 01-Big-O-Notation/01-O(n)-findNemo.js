const nemo = ["nemo"];
const largeArray = new Array(1000).fill("nemo");

/**
 * Finds "nemo" in an array.
 * 
 * Time Complexity: O(n) - Linear Time
 * - The time it takes to run this function grows linearly with the size of the input (array).
 * - As the input increases, the number of operations increases proportionally.
 * - This is because we have a loop that iterates through every element in the array.
 * 
 * Space Complexity: O(1) - Constant Space
 * - We are not creating any new data structures that grow with the input.
 * 
 * @param {Array} array - The input array to search.
 */

function findNemo(array) {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
  const t1 = performance.now();
  console.log("For- Total millisecond took to complete: " + (t1 - t0)); // Total millisecond took to complete: 4.038984999999997
}
findNemo(largeArray);

function es5FindNemo(array) {
  const t0 = performance.now();
  array.forEach(function (text) {
    if (text === "nemo") {
      console.log("Found Nemo!");
    }
  });
  const t1 = performance.now();
  console.log("ForEach ES5- Total millisecond took to complete: " + (t1 - t0));
}

es5FindNemo(largeArray);

const findNemoES6 = (array) => {
  const t0 = performance.now();
  array.forEach((text) => {
    if (text === "nemo") {
      console.log("Found Nemo!");
    }
  });
  const t1 = performance.now();
  console.log("ForEach ES6- Total millisecond took to complete: " + (t1 - t0));
};
findNemoES6(largeArray)