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
// function assertArraysEqual(arr1,arr2){
//   if (eqArrays(arr1,arr2) === true) {
//     console.log(`✅✅✅ Assertion Passed`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed`);
//   }
// }


const middle = arr => {
  if (arr.length <= 2) {
    return [];
  }
  if (arr.length % 2 == 1) {
    return [arr[Math.floor(arr.length / 2)]];
  }
  if (arr.length % 2 == 0) {
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
  }
};
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));



module.exports = middle ;



