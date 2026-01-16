function checkProperClosed(object) {
  const stack = [];

  for (const element of object) {
    if (element == "(") {
      stack.push(element);
    } else if (element == ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

const output = checkProperClosed("()()()");
console.log(output)