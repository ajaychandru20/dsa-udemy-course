/**
 * Calculates the Big O of the function.
 * 
 * Step-by-step analysis:
 * 1. let a = 10;           -> O(1)
 * 2. a = 50 + 3;           -> O(1)
 * 3. for loop              -> O(n)
 *    - anotherFunction();  -> O(n)
 *    - let stranger = true;-> O(n)
 *    - a++;                -> O(n)
 * 4. return a;             -> O(1)
 * 
 * Total: 3 + 4n
 * Big O: O(n)
 */
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
funChallenge()

// Big O (3 + 4n) => O(n)