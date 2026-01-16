function nonRepeatChar(sentence) {
  const countMap = {};

  for (const element of sentence) {
    if (countMap[element]) {
      countMap[element]++;
    } else {
      countMap[element] = 1;
    }
  }

  // console.log(countMap)

  for (const value of sentence) {
    if (countMap[value] == 1) {
      return value;
    }
  }
  return null;
}

console.log(nonRepeatChar("swiss bank"));
