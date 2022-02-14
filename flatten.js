// const eqArrays = function(arr1,arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (let i = 0 , j = 0; i < arr1.length , j < arr2.length; i ++ , j ++) {
//       if (arr1[i] !== arr2[j]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };
// const assertArraysEqual = function(arr1,arr2) {
//   if (eqArrays(arr1,arr2) === true) {
//     console.log(`✅✅✅ Assertion Passed`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed`);
//   }
// };


const flatten = function(array) {
  let output = [];
  for (let arrItem of array) {
    if (!Array.isArray(arrItem)) { // Array.isArray() to check if something is array .
      output.push(arrItem);
    } else {
      for (let subArrItem of arrItem) {
        output.push(subArrItem);
      }
    }
  }
  return output;
};
module.exports = flatten;
// flatten([1, 2, [3, 4], 5, [6],[7,8,9]]); // => [1, 2, 3, 4, 5, 6]

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6],[7,8,9]]), [1, 2, 3, 4, 5, 6]); // should fail
// assertArraysEqual(flatten([1, 2, 3]), [1, 2,3]); // should pass
// assertArraysEqual(flatten([1, 2, [3,4]]), [1, 2, 3,4]); // should pass
// assertArraysEqual(flatten([1, 2, [3,4]]), [1, 2, [3,4]]); // should fail