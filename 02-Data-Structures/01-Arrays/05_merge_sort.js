let array1 = [0, 1, 2, 31];
let array2 = [4, 6, 30, 2];

function mergeSortArray(array1, array2) {
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  let array1Item = array1[0];
  let array2Item = array2[0];
  const mergeArray = [];

  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergeArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergeArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergeArray;
}

const output = mergeSortArray(array1, array2);
console.log(output);
