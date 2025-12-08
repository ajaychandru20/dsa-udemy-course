/**
 * Calculates the Big O of the function.
 * 
 * Step-by-step analysis:
 * 1. let a, b, c assignments -> O(1) + O(1) + O(1) = 3 operations
 * 2. First for loop          -> O(n)
 *    - x, y, z assignments   -> O(n) + O(n) + O(n) = 3n operations
 * 3. Second for loop         -> O(n)
 *    - p, q assignments      -> O(n) + O(n) = 2n operations
 * 4. let whoAmI              -> O(1)
 * 
 * Total: 4 + 5n (approx) or 4 + 7n depending on how you count loop overhead.
 * Big O: O(n)
 */
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n) 
  }
  let whoAmI = "I don't know"; // O(1)
}
// Big O = 4 + 7n = O(n)