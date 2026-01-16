//“This solution assumes the array contains numbers from 1 to N with exactly one missing value. If the array contains values outside this range, the formula will not work.”

function missingNumber(arr) {
  let n = arr.length + 1;
  const totalLengthSum = (n * (n + 1)) / 2;
  const arraySum = arr.reduce((acc, num) => acc + num, 0);

  return totalLengthSum - arraySum;
}

console.log(missingNumber([11, 12, 13, 14, 15, 16, 18]));

function missingNumberAny(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  console.log(min)
  const expectedSum = ((max - min + 1) * (min + max)) / 2;
  const actualSum = arr.reduce((a, b) => a + b, 0);

  return expectedSum - actualSum;
}

console.log(missingNumberAny([11,13,12,15])); // 7