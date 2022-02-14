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
const eqArrays = require("./eqArrays");
function assertArraysEqual(arr1,arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed`);
  }
}
module.exports = assertArraysEqual;

