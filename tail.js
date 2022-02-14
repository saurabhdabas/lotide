// const assertEqual = function(actual, expected) {
//   if (actual.length === expected.length) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require("./assertEqual")

const tail = function(arr) {
  if (arr) {
    let [,...restOfTheItems] = arr;
    return restOfTheItems;
  } else {
    return undefined;
  }
  
};

module.exports = tail;