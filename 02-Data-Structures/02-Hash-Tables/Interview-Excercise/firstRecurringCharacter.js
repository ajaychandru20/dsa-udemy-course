// //Google Question
// //Given an array = [2,5,1,2,3,5,1,2,4]:
// //It should return 2

// //Given an array = [2,1,1,2,3,5,1,2,4]:
// //It should return 1

// //Given an array = [2,3,4,5]:
// //It should return undefined

// const userinp = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// firstRecurringCharacter(userinp);

// //Bonus... What if we had this:
// // [2,5,5,2,3,5,1,2,4]
// // return 5 because the pairs are before 2,2

const userinp = [2, 5, 5, 1, 2, 3, 5, 1, 2, 4];

// function firstRecurringCharacter(input) {
//   if (!input) return undefined;
//   let currentValue = undefined;
//   let maxOccur = 1;
//   let startValue = input[0];
//   let repeatOccur = 1;

//   for (let i = 1; i < input.length; i++) {
//     if (input[i] === input[i - 1]) {
//       maxOccur++;
//       currentValue = input[i];
//       if (maxOccur >= 2) {
//         return currentValue;
//       }
//     } else if (startValue === input[i]) {
//       repeatOccur++;
//       return input[i];
//     } else {
//       maxOccur = 1;
//       currentValue = undefined;
//       startValue = input[i];
//     }
//   }
// }

function firstRecurringCharacter2(input) {
  if (!input) return undefined;
  const seen = {};
  for (let i = 0; i < input.length; i++) {
    if (seen[input[i]] !== undefined) {
      return input[i];
    }
    seen[input[i]] = i;
  }
}
firstRecurringCharacter2(userinp);

function firstRecurringCharacter3(input) {
  if (!input) return undefined;
  const seen = new Set();
  for (let i = 0; i < input.length; i++) {
    if (seen.has(input[i])) {
      console.log(input[i]);
      return input[i];
    }
    seen.add(input[i]);
  }
}
firstRecurringCharacter3(userinp);
