/**
 * Logs the first two items of an array.
 * 
 * Time Complexity: O(1) - Constant Time
 * - The time it takes to run this function is constant, regardless of the size of the input.
 * - Even if the array has 1 million elements, we only perform a fixed number of operations (logging the first two elements).
 * - No loops are involved.
 * 
 * Space Complexity: O(1) - Constant Space
 * 
 * @param {Array} boxes - The input array.
 */
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

const boxes = [0, 1, 2, 3, 4, 5];
logFirstTwoBoxes(boxes); // O(1)
