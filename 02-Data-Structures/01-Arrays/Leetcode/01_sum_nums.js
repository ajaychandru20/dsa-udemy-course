var twoSum = function (nums, target) {
  let total;
  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    const next = nums[i + 1];
    total = current + next;
    if (total === target) {
      return [i, i + 1];
    }
  }
};

const output = twoSum([2, 7, 11, 15], 9);
console.log(output);
