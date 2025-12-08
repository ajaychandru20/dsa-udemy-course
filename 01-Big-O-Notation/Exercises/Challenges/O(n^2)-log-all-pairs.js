const boxes = [1, 2, 3, 4, 5];

/**
 * Logs all pairs of array elements.
 * 
 * Time Complexity: O(n^2) - Quadratic Time
 * - We have nested loops.
 * - The outer loop runs n times.
 * - For each iteration of the outer loop, the inner loop runs n times.
 * - Total operations = n * n = n^2.
 * - As the input grows, the number of operations grows quadratically.
 * 
 * Space Complexity: O(n^2)
 * - We are creating a 'pairs' array that stores n*n elements.
 */
const pairs = [];

for (let i = 0; i < boxes.length; i++) {
  for (let j = 0; j < boxes.length; j++) {
    setpair = `(${boxes[i]},${boxes[j]})`;
    pairs.push(setpair);
  }
}

console.log(pairs);
