function checkanegan(str1, str2) {
  str1 = str1.replace(/\\s/g, "").toLowerCase();
  str2 = str2.replace(/\\s/g, "").toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  let object1 = {};
  let object2 = {};

  for (const data of str1) {
    object1[data] = (object1[data] || 0) + 1;
  }
  for (const data of str2) {
    object2[data] = (object2[data] || 0) + 1;
  }

  // console.log(str1,str2)
  // console.log(object1, object2)

  for (const data in object1) {
    if (object1[data] !== object2[data]) {
      return false;
    }
  }

  return true;
}

console.log(checkanegan("rat", "tar"));
