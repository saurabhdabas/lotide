// const eqArrays = require("../eqArrays")
// const middle = require("../middle");


// function assertMiddle(midVal,arr) {
//   console.log("a",midVal,"b",arr);
//   if (eqArrays(midVal,arr)) {
//     console.log(`✅✅✅ Assertion Passed`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed`);
//   }
// }



// assertMiddle(middle([1,2]),[]); //------should Pass
// assertMiddle(middle([1,2,3]),[2]);//------should Pass
// assertMiddle(middle([1,2,3,4]),[2,3]);//------should Pass


const assert = require("chai").assert;
const middle = require ("../middle");


describe("middle",()=>{
  it("it should pass",()=>{
    assert.deepEqual(middle([1,2]),[])
  }),
  it("it should pass",()=>{
    assert.deepEqual(middle([1,2,3]),[2])
  }),
  it("it should pass",()=>{
    assert.deepEqual(middle([1,2,3,4]),[2,3])
  })
})
