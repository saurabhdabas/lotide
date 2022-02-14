// function eqArrays(arr1,arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   } else {
//     for (let i = 0 , j = 0; i < arr1.length , j < arr2.length; i ++ , j ++) {
//       if (arr1[i] !== arr2[j]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }
// function assertArraysEqual(arr1,arr2) {
//   if (eqArrays(arr1,arr2) === true) {
//     console.log(`✅✅✅ Assertion Passed`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed`);
//   }
// }


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);

module.exports = {map,results1,words};
// assertArraysEqual(results1, ['g','c','t','m','t']); // should pass

// assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']); // should pass

// assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']); // should pass
// assertArraysEqual([1, 2, 3], [1, 2]); // should fail
// assertArraysEqual([1, 2, 3], [1, 2, "3"]); // should fail