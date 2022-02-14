const eqArrays = require("../eqArrays")
const middle = require("../middle");


function assertMiddle(midVal,arr) {
  console.log("a",midVal,"b",arr);
  if (eqArrays(midVal,arr)) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed`);
  }
}



assertMiddle(middle([1,2]),[]);
assertMiddle(middle([1,2,3]),[2]);
assertMiddle(middle([1,2,3,4]),[2,3]);