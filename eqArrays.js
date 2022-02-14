// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


function eqArrays(arr1,arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (let i = 0 , j = 0; i < arr1.length , j < arr2.length; i ++ , j ++) {
      if (arr1[i] !== arr2[j]) {
        return false;
      }
    }
    return true;
  }
}
module.exports = eqArrays;
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // ----> should Pass
// assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true);// ----> should fail
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // ----> should Pass
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // ----> should fail
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3" , "4"]), true); // ----> should fail
// assertEqual(eqArrays(["1", "2", "3"], []), true); // ----> should fail
