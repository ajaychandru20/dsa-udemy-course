const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(1000).fill('nemo');

/**
 * Finds "nemo" in an array.
 * 
 * Rule 1: Always Worst Case
 * - When calculating Big O, we always care about the worst-case scenario.
 * - Even if "nemo" is the first element (Best Case: O(1)), we assume it could be the last element or not present at all.
 * - Therefore, the Big O is O(n), because in the worst case, we have to iterate through the entire array.
 * 
 * @param {Array} array 
 */
function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('running');
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break; // Even with break, worst case is still O(n)
        }
    }
}

findNemo(everyone);
